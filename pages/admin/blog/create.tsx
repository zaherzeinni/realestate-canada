import Head from "next/head";
import NotFound from "@/pages/404";
import { PageLayout } from "@/layouts";
import { Grid } from "@mui/material";
import { TextInput, SelectInput } from "@/components/inputs";
import { Button } from "@material-ui/core";
import { DropDownCategories } from "@/components/category";
import { ImageInput } from "@/components/inputs/ImageInput";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AdminMainLayout from "@/components/Site/dashboardLayout";

import { MdDeleteForever } from "react-icons/md";
import useAuth from "@/hooks/useAuth";
import axios from "axios";
import { message } from "antd";
import { useRouter } from "next/router";
import { db } from "@/utils/firebaseConfig";
import { useMemo } from "react";
import { uploadImages, deleteImages, deleteImage } from "@/utils/getData";
import useBlogs from "@/hooks/useBlogs";

import { Form, Upload, Input, Select, Switch, InputNumber } from "antd";
import { useTranslation } from "@/context/useTranslation";

import useCountries from "@/hooks/useCountries";

import useCities from "@/hooks/useCities";
// import TextList from "@/components/SiteComponents/form/textList";
// import MultiTextList from "@/components/SiteComponents/form/MultiTextList";

import { Rating as ReactRating } from "@smastrom/react-rating";

import { Star } from "@smastrom/react-rating";

const uploadApi = "https://file-uploader-red.vercel.app";

const customeStyles = {
  itemShapes: Star,
  itemStrokeWidth: 1.3,
  activeFillColor: "#ffb23f",
  activeStrokeColor: "#F4B740",
  inactiveStrokeColor: "#F4B740",
};

// const countries = [
//   { label: "House", value: "House" },
//   { label: "Town House", value: "Town House" },
//   { label: "Condo", value: "Condo" },
//   { label: "Land", value: "Land" },
// ];

// const cities = [
//   { label: "Sale", value: "Sale" },
//   { label: "Rent", value: "Rent" },
// ];

export default function BookCreatePage() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  const { mutate } = useBlogs();

  const router = useRouter();
  const { translation } = useTranslation();

  const t = useMemo(() => translation ?? {}, [translation]);

  const [files, setFiles] = useState([]);

  const [form, setForm] = useState({
    sizes: [],
    features: [],
  });

  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    titlefr: "",
    story: "",
    storyfr: "",

    image: [],

    addBy: "Admin",
  });

  // Handle input changes for the form
  const handleInputChange = (name, value) => {
    // Handle nested properties
    const parsedValue = name.includes("details.") ? parseInt(value, 10) : value;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setPropertyDetails((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: parsedValue,
        },
      }));
    } else {
      setPropertyDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUploadImages = async (filesarray: any) => {
    try {
      const formData = new FormData();
      filesarray.forEach((image: any) => {
        formData.append("images", image);
      });

      //?size=${(size = 1200)}&&hieghtsize=${(hieghtSize = 1000)}
      const response = await axios.post(`${uploadApi}/file/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Files Uplaoded successfully", response.data);

      return response?.data?.files;
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };



  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      message.loading("جاري إضافة المنتج");

      const uuid = uuidv4();

      let image: string | any = "";

   
      let images: any = [];

      if (files?.length > 0) {
        //  images = await uploadImages(files);
        images = await handleUploadImages(files);
      }

      // if (form?.sizes?.length < 1) {
      //   message.error("اضف مقاس واحد على الاقل");
      // }

      // await uploadFile(image, `books/cover/${uuid}${".png"}`);

      console.log("upload response", image);

      const updatedDetails = {
        ...propertyDetails,
      
        image, // Include images in the submission
      };

      await axios
        .post("/api/blog", updatedDetails)

        .then((res) => {
          console.log(res);
          mutate();
          message.success("Blog added successfully");
          const { data } = res;
          //     router.push(`/~/book/${data}`);
        })
        .catch((err) => {
          message.error(err?.message);
        });
    } catch (error) {
      message.error(error?.message);
    }
  };

  if (user && user.role !== "admin") return <NotFound />;
  return (
    <div className="cart-are !bg-[#ffff]  product-area">
      <Head>
        <title>إضافة منتج جديد - Outlet Turkey</title>
      </Head>
      <AdminMainLayout>
        <PageLayout title="header.addBook">
          <form className=" p-20" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextInput
                  name="title"
                  label="Title"
                  required
                  value={propertyDetails.title}
                  onChange={(value) => handleInputChange("title", value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextInput
                  name="titlefr"
                  label="Titlefr"
                  required
                  value={propertyDetails.titlefr}
                  onChange={(value) => handleInputChange("titlefr", value)}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextInput
                  name="story"
                  label="Story"
                  required
                  multiline
                  rows={4}
                  value={propertyDetails.story}
                  onChange={(value) => handleInputChange("story", value)}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextInput
                  name="storyfr"
                  label="Storyfr"
                  required
                  multiline
                  rows={4}
                  value={propertyDetails.storyfr}
                  onChange={(value) => handleInputChange("storyfr", value)}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Button type="submit" variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
            </Grid>
          </form>
        </PageLayout>
      </AdminMainLayout>
    </div>
  );
}
