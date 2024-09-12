import { TextInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import {
  Card,
  Grid,
  CardHeader,
  IconButton,
  Slide,
  Dialog,
} from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { NoData } from "@/components/empty";
import { map } from "lodash";
import NotFound from "@/pages/404";
import useAuth from "@/hooks/useAuth";
import { CircularLoading as Loading } from "@/components/loading";
import Link from "next/link";
import {
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import axios from "axios";
import { TransitionProps } from "@mui/material/transitions";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { uploadImages, deleteImage } from "@/utils/getData";

import useCountries from "@/hooks/useCountries";

import {
  Form,
  Upload,
  Input,
  Select,
  Switch,
  InputNumber,
  message,
} from "antd";
import AdminMainLayout from "@/components/Site/dashboardLayout";

interface Category {
  _id: string | number;
  title: string;
  titlefr: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AdminAllCountries() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  const { data, isLoading, error, mutate } = useCountries();

  const [categories, setCategories] = useState<Category[]>(data ? data : []);
  const [auxCategories, setAuxCategories] = useState<Category[]>();
  const [fetching, setFetching] = useState<boolean>(false);

  const [file, setFile] = useState("");
  const [image, setImage] = useState("");

  const [open, setOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category>() as any;

  const handleClickOpen = (category: Category) => {
    setOpen(true);
    console.log("category", category);
    setSelectedCategory(category);
    // setImage(category?.cover)
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(undefined);
    // setFile('')
    // setImage('')
  };

  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  const handleDelete = async (id: string | number) => {
    if (!confirm("هل انت متأكد من حذف هذا التصنيف؟")) return;
    try {
      await axios.delete(`/api/city/handler/${id}`);
      // setFetching(!fetching);
      message.success("Country deleted successfully")
      mutate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // let newimage: string | any = "";

      // if (file && image) {
      //   await deleteImage(image);
      //   message.success("file && image Deleted upload new image ");
      //   newimage = await uploadImages(file, true, "category");
      // }

      // if (!file && image) {
      //   newimage = image;
      // } else if (file && !image) {
      //   newimage = await uploadImages(file, true, "category");
      //   message.success("file && NOOOTTT image");
      // }

      await axios.put(
        `/api/country/handler/${selectedCategory._id}`,
        {
          title: selectedCategory.title,
          titlefr: selectedCategory.titlefr,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleClose();

      message.success("City updated successfully")
     
      mutate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = (value: string) => {
    if (value === "") {
      setCategories(data);
    } else {
      const filteredCategories = data?.filter((country: any) => {
        return country.title.toLowerCase().includes(value.toLowerCase());
      });
      setCategories(filteredCategories);
    }
  };

  if (user && user.role !== "admin") return <NotFound />;
  if (!categories) return <Loading />;
  return (
    <>
      <Head>
        <title>Outlet Turkey</title>
      </Head>
      <AdminMainLayout>
        <PageLayout title="الاقسام">
          <div className=" !min-h-[70vh]">
            <Grid className="!p-20" container spacing={2}>
              <Grid item xs={12} md={9}>
                <TextInput
                  type="search"
                  label="Search.."
                  onChange={handleSearch}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Link href="/admin/city/create">
                  <Button
                    style={{
                      height: 55,
                    }}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Add Country
                  </Button>
                </Link>
              </Grid>
              {!isLoading && categories?.length > 0 ? (
                map(categories, (category, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card className="bg-paper">
                      <CardHeader
                        title={
                          <Link
                            className="color-primary"
                            href={`category/${category._id}`}
                          >
                            {category?.title}
                          </Link>
                        }
                        // subheader={category.description}
                        action={
                          <React.Fragment>
                            <IconButton
                              className="btn-spacing"
                              onClick={() => handleClickOpen(category)}
                            >
                              <EditIcon size={20} fill="#c45e4c" />
                            </IconButton>
                            <IconButton
                              className="btn-spacing"
                              onClick={() => handleDelete(category._id)}
                            >
                              <DeleteIcon size={20} fill="#575757" />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                    </Card>
                  </Grid>
                ))
              ) : (
                <NoData description="لا توجد تصنيفات" />
              )}
            </Grid>
          </div>
        </PageLayout>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
        >
          <DialogTitle>{"تعديل التصنيف"}</DialogTitle>
          <form onSubmit={handleUpdate}>
            <DialogContent>
              <TextInput
                label="Country title"
                value={selectedCategory?.title}
                // focused
                onChange={(e) => {
                  setSelectedCategory({
                    ...selectedCategory,
                    title: e,
                  });
                }}
              />

              <TextInput
                label="Country french title"
                value={selectedCategory?.titlefr}
                // focused
                onChange={(e) => {
                  setSelectedCategory({
                    ...selectedCategory,
                    titlefr: e,
                  });
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                type="reset"
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </AdminMainLayout>
    </>
  );
}
