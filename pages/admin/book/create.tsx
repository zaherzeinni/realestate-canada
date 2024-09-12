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
import useProducts from "@/hooks/useProducts";

import { Form, Upload, Input, Select, Switch, InputNumber } from "antd";
import { useTranslation } from "@/context/useTranslation";
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

const countries = [
  { label: "House", value: "House" },
  { label: "Town House", value: "Town House" },
  { label: "Condo", value: "Condo" },
  { label: "Land", value: "Land" },
];

const cities = [
  { label: "Sale", value: "Sale" },
  { label: "Rent", value: "Rent" },
];

export default function BookCreatePage() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  const { mutate } = useProducts();

  const router = useRouter();
  const { translation } = useTranslation();

  const t = useMemo(() => translation ?? {}, [translation]);


  const [file, setFile] = useState("");
  const [files, setFiles] = useState([]);

  const [form, setForm] = useState({
    sizes: [],
    features: [],
  });

  const [propertyDetails, setPropertyDetails] = useState({
    propertyId: "",
    title: "",
    titlefr: "",
    story: "",
    storyfr: "",
    country: "",
    city: "",
    price: "",
    rating: 0,
    cover: "",
    image: [],
    sizes: [],
    featuresPlus: [],
    author: "",
    details: {
      areaSqM: 0,
      beds: 0,
      baths: 0,
    },
    features: {
      ac: false,
      balcony: false,
      tv: false,
      internet: false,
      pet: false,
      bathtub: false,
    },
    services: {
      security: false,
      cctv: false,
      elevator: false,
      pool: false,
      gym: false,
      parking: false,
      garden: false,
    },
    coordinate: {
      lat: "",
      lng: "",
    },
    address: "",
    addBy: "Admin",
  });

  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedCity, setSelectedCity] = useState({});

  // Handle input changes for the form
  const handleInputChange = (name, value) => {
    // Handle nested properties
    const parsedValue = name.includes('details.') ? parseInt(value, 10) : value;
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

  const handleCheckboxChange = (name) => {
    const [parent, child] = name.split('.');

    // Log the checkbox name and current state
    console.log('Checkbox name:', name);
    console.log('Current parent state:', propertyDetails[parent]);
    
    // Update the state
    setPropertyDetails((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [child]: !prev[parent]?.[child], // Use optional chaining to avoid errors
      },
    }));
  };
  useEffect(() => {
    if (selectedCountry.value) {
      setPropertyDetails((prev) => ({
        ...prev,
        country: selectedCountry.value,
        city: selectedCity.value,
      }));
    }
  }, [selectedCountry, selectedCity]);




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

  // In your front-end code ARRAY IMAGES ADD DELETE
  const handleDelete = async (filesToDelete: any) => {
    try {
      const res = await axios.post(`${uploadApi}/file/delets`, {
        filesToDelete,
      });
      console.log("Files deleted successfully", res);
    } catch (error) {
      console.error("Error deleting files:", error);
    }
  };

  const handleUploadImage2 = async (file: any, logo: any) => {
    try {
      const formData = new FormData();

      formData.append("image", file);

      console.log("File Data", file);

      const endpoint = logo
        ? `${uploadApi}/file/upload?size=450&&hieghtsize=450`
        : `${uploadApi}/file/upload`;
      //?size=${(size = 1200)}&&hieghtsize=${(hieghtSize = 1000)}
      const response = await axios.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File Uplaoded successfully", response.data);

      return response?.data?.file;
    } catch (error) {
      console.error("Error deleting files:", error);
      return;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      message.loading("جاري إضافة المنتج");
    
      const uuid = uuidv4();

      let image: string | any = "";

      if (!file) {
        return message.error("يجب اختيار الصورة ");
      }

      if (file) {
        //  image = await uploadImages(file, true, "book");
        image = await handleUploadImage2(file, false);
        message.success("تم تحميل الصورة بنجاح");
      }

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
        cover:image,
        image, // Include images in the submission
      };

      await axios
        .post("/api/book", updatedDetails)

        .then((res) => {
          console.log(res);
          mutate();
          message.success("تم إضافة المنتج بنجاح");
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
                  name="propertyId"
                  label="Property ID"
                  required
                  value={propertyDetails.propertyId}
                  onChange={(value) => handleInputChange("propertyId", value)}
                />
              </Grid>

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

              <Grid item xs={12} md={6}>
                <SelectInput
                  placeholder="Select Country"
                  options={countries}
                  selected={selectedCountry}
                  setSelected={setSelectedCountry}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <SelectInput
                  placeholder="Select City"
                  options={cities}
                  selected={selectedCity}
                  setSelected={setSelectedCity}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextInput
                  name="price"
                  label="Price"
                  required
                  type="number"
                  value={propertyDetails.price}
                  onChange={(value) => handleInputChange("price", value)}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextInput
                  name="rating"
                  label="Rating"
                  type="number"
                  value={propertyDetails.rating}
                  onChange={(value) => handleInputChange("rating", value)}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextInput
                  name="address"
                  label="Address"
                  required
                  value={propertyDetails.address}
                  onChange={(value) => handleInputChange("address", value)}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextInput
                  name="details.beds"
                  label="Number of Beds"
                  required
                  type="number"
                  value={propertyDetails.details.beds}
                  onChange={(value) => handleInputChange("details.beds", value)}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <TextInput
                  name="details.baths"
                  label="Number of Baths"
                  required
                  type="number"
                  value={propertyDetails.details.baths}
                  onChange={(value) =>
                    handleInputChange("details.baths", value)
                  }
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <h3>Features</h3>
                <div className=" flex gap-12">
                  {Object.keys(propertyDetails?.features).map((feature) => (
                    <label
                      className="flex gap-2 hover:cursor-pointer select-none text-sm md:text-base"
                      key={feature}
                    >
                      {feature === 'true' ? 'checked' : 'NOOT'}
                      <input
                        className="p-2 block rounded-md border focus:outline-none border-gray-300 focus:border-blue-600 shadow-sm text-sm md:text-base hover:cursor-pointer"
                        type="checkbox"
                      
                        checked={propertyDetails.features[feature]}
                        onChange={(e) => handleCheckboxChange(`features.${feature}`)}
                        
                      />
                      {feature.charAt(0).toUpperCase() + feature.slice(1)}
                    </label>
                  ))}
                </div>

                <Grid className="!mt-6" item xs={12} md={12}>
                  <h3>Services</h3>
                  <div className=" flex gap-12">
                    {Object.keys(propertyDetails.services).map((service) => (
                      <label className="" key={service}>
                        <input
                          className="p-2 block rounded-md border focus:outline-none border-gray-300 focus:border-blue-600 shadow-sm text-sm md:text-base hover:cursor-pointer"
                          type="checkbox"
                          checked={propertyDetails.services[service]}
                          onChange={() =>
                            handleInputChange(
                              `services.${service}`,
                              !propertyDetails.services[service]
                            )
                          }
                        />
                        {service.charAt(0).toUpperCase() + service.slice(1)}
                      </label>
                    ))}
                  </div>
                </Grid>
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

              <Grid item xs={6} md={6}>
                <div>
                  <Upload
                    className=" !font-estedad"
                    accept="image/*"
                    maxCount={1}
                    // file is data of image will be uploaded to firebase/storage
                    beforeUpload={(file: any) => {
                      setFile(file);
                      // setFiles((prev) => [...prev, file]);
                      return false;
                    }}
                    listType="picture-card"
                    onRemove={() => setFile("")}
                  >
                    تحميل الصورة الرئيسية
                  </Upload>
                </div>

                <div className=" my-6">
                  <Upload
                    className=" !font-estedad"
                    accept="image/*"
                    multiple
                    // files is data of images will be uploaded to firebase/storage
                    beforeUpload={(file) => {
                      setFiles((prev) => [...prev, file]);
                      return false;
                    }}
                    listType="picture-card"
                    onRemove={(file) => {
                      console.log("fileDATA", file);
                      setFiles((prev) => {
                        const index = prev.indexOf(file);
                        const newFileList = prev.slice();
                        newFileList.splice(index, 1);
                        return newFileList;
                      });

                      console.log("files", files);
                    }}
                  >
                    تحميل الصور الفرعية
                  </Upload>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button type="submit" variant="contained" color="primary">
                  إضافة المنتج
                </Button>
              </Grid>
            </Grid>
          </form>
        </PageLayout>
      </AdminMainLayout>
    </div>
  );
}
