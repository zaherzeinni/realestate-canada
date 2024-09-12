import { TextInput ,SelectInput  } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import Head from "next/head";
import useAuth from "@/hooks/useAuth";
import NotFound from "@/pages/404";
import { useState } from "react";
import axios from "axios";
import { message, Upload } from "antd";
import { uploadImages, deleteImage } from "@/utils/getData";
import AdminMainLayout from "@/components/Site/dashboardLayout";
import useCities from "@/hooks/useCountries";

export default function CreateCountry() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });
  const [title, setTitle] = useState("");
  const [titlefr, setTitlefr] = useState("");
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // let image: string | any = "";

    // if (!file) {
    //   return message.error("يجب اختيار الصورة ");
    // }

    // if (file) {
    //   image = await uploadImages(file, true, "category");
    //   message.success("تم تحميل الصورة بنجاح");
    // }

    await axios
      .post("/api/country", {
        title,
        titlefr,
      })
      .then((res) => {
        message.success("Category added successfully")
        //       window.location.href = `/admin/category`;
      })
      .catch((err) => {
        message.error(err?.message);
      });
  };

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleTitleFr = (value: string) => {
    setTitlefr(value);
  };

  if (user && user.role !== "admin") return <NotFound />;
  return (
    <div className="cart-area !bg-white">
      <Head>
        <title>إنشاء تصنيف - Outlet Turkey</title>
      </Head>
      <AdminMainLayout>
        <PageLayout title="اضافة قسم جديد">
          <form className="  !p-20" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextInput
                  name="name"
                  label="Country title"
                  required
                  value={title}
                  onChange={handleTitle}
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <TextInput
                  name="name"
                  label="Country title french"
                  required
                  value={titlefr}
                  onChange={handleTitleFr}
                />
                
              </Grid>

              <Grid item xs={12} md={12}>
                <Button type="submit" variant="contained" color="primary">
                  إنشاء التصنيف
                </Button>
              </Grid>
            </Grid>
          </form>
        </PageLayout>
      </AdminMainLayout>
    </div>
  );
}
