import { useState, useEffect, useMemo } from "react";
import { DropDownCategories } from "@/components/category";
import { TextInput, SelectInput } from "@/components/inputs";
import { PageLayout } from "@/layouts";
import { Grid, Box } from "@mui/material";
import Head from "next/head";
import { CircularLoading as Loading } from "@/components/loading";
import { NoData } from "@/components/empty";
import { map } from "lodash";
import { BookCard } from "@/components/cards";
import { Alert, AlertTitle, Pagination } from "@material-ui/lab";
import CartButton from "@/components/button";
import { Typography, Button, IconButton } from "@material-ui/core";
import axios from "axios";
import styled from "styled-components";
import { useRouter } from "next/router";
import { deleteImage } from "@/utils/getData";

import { useLanguageContext } from "@/context/languageContext";

import { useTranslation } from "@/context/useTranslation";

import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import { DeleteIcon, EyeIcon, EditIcon } from "@/components/icons";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import { message } from "antd";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import useServices from "@/hooks/useServices";

import AdminMainLayout from "@/components/Site/dashboardLayout";

interface Book {
  _id: string | number;
  title: string;
  subtitle: string;
  story?: string;
  price: string | number;
  cover: string;
  author?: string;
  category?: string;
  forsell?: boolean;
  
}

const SearchTimeOut = 0; // 0 ms

const AnimatedTypography = styled(Typography)`
  color: #29221f !important;
  animation: bounce 2s;
  animation-iteration-count: 2;
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    animation: none;
  }
`;

export default function AllBooks() {
  const { user } = useAuth({
    redirectTo: "/auth/login",
    redirectIfFound: false,
  });

  //const [pages, setPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [fetch, setFetch] = useState<boolean>(false);
  const [localUser, setLocalUser] = useState<any>();

  // ----------

  const { data, isLoading, error, mutate } = useServices({
    page,

    search,
  });

  console.log("DATA-->", data);

  const handleSearch = (value: string) => {
    const delaySearchFn = setTimeout(() => {
      // setPage(1);
      setSearch(value);
    }, SearchTimeOut);

    return () => clearTimeout(delaySearchFn);
  };

  const handlePageChange = (event: any, value: number) => {
    if (value === page) return;
    setPage(value);
  };

  useEffect(() => {
    let localUserFromStorage = localStorage.getItem("user");
    localUserFromStorage
      ? (localUserFromStorage = JSON.parse(localUserFromStorage))
      : (localUserFromStorage = null);
    setLocalUser(localUserFromStorage);
  }, []);

  if (error) return <div>failed to load</div>;

  const handleDelete = (id: number, image: string) => {
    if (!id) return;
    if (!confirm("هل انت متأكد من حذف المنتج ؟")) return;
    axios
      .delete(`/api/service/${id}/handler`)
      .then(async (res) => {
        await deleteImage(image);
        message.success("تم حذف المنتج بنجاح");
        mutate();
        //    window.location.reload();
        //router.push("/admin/books");
      })
      .catch((err) => {
        message.error("حدث خطأ ما");
        console.log(err);
      });
  };

  const { language, changeLanguage } = useLanguageContext();

  const { translation } = useTranslation();

  const t = useMemo(() => translation ?? {}, [translation]);

  return (
    <>
      <Head>
        <title>triprex</title>
        <meta name="description" content="متجر لبيع كافة ماتحتاجه" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <AdminMainLayout>
        <PageLayout title="المنتجات">
          <div className=" !p-20">
            <AnimatedTypography
              align="center"
              style={{
                marginBottom: "40px",
              }}
              gutterBottom
            >
              All Services
            </AnimatedTypography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <TextInput label="Serach..." onChange={handleSearch} />
              </Grid>

              {!data?.books || isLoading || !data ? (
                <Loading />
              ) : data?.books.length > 0 ? (
                <>
                  {data?.books?.length > 0 ? (
                    <TableContainer
                      sx={{
                        marginTop: "20px",
                      }}
                      component={Paper}
                    >
                      <Table
                        aria-label="Orders table"
                        sx={{
                          minWidth: "100%",
                          direction: "rtl",
                          ":lang": {
                            direction: "rtl",
                          },
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Typography>عنوان المنتج</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>السعر الجملي</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>تاريخ الانشاء</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>العمليات</Typography>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {map(data?.books, (book: any, index: number) => {
                            return (
                              <TableRow key={index}>
                                <TableCell>
                                  <Typography>{book?.title}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>{book?.price}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography>
                                    {new Date(
                                      book.createdAt
                                    ).toLocaleDateString()}
                                  </Typography>
                                </TableCell>
                                <TableCell className="btn-icons">
                                  <IconButton onClick={() => {}}>
                                    <Link href={`/admin/book/${book?._id}`}>
                                      <EyeIcon size={20} fill="#29221f" />
                                    </Link>
                                  </IconButton>
                                  <IconButton
                                    className="btn-spacing"
                                    //   onClick={() => (window.location.href = `/admin/book/${book._id}`)}
                                  >
                                    <Link href={`/admin/service/${book._id}`}>
                                      <EditIcon size={20} fill="#c45e4c" />
                                    </Link>
                                  </IconButton>

                                  <IconButton
                                    onClick={() => {
                                      handleDelete(book._id, book?.cover);
                                    }}
                                  >
                                    <DeleteIcon size={20} fill="#c45e4c" />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "2rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <Pagination
                          onChange={(e, i) => {
                            handlePageChange(e, i);
                          }}
                          count={data?.pages}
                          defaultPage={page}
                          page={page}
                          siblingCount={0}
                          shape="rounded"
                          color="primary"
                          showFirstButton
                          showLastButton
                        />
                      </Box>
                    </TableContainer>
                  ) : (
                    <NoData description="No Data" />
                  )}
                </>
              ) : (
                <NoData />
              )}
            </Grid>
          </div>
        </PageLayout>
      </AdminMainLayout>

      <CartButton user={localUser} />
    </>
  );
}
