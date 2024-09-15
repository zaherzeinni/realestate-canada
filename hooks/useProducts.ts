import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import Router from "next/router";

interface Query {
  page?: string | number;
  city?: string;
  country?: string;
  search?: string;
  rooms?: any;
  baths?:any
}

interface BookDetails {
  id: string;
  title: string;
  author: string;
  story: string;
  price: number;
  image: string;
}

const fetcher = (url: string) => axios.get(url).then(({ data }: any) => data);

export default function useProducts({
  page = 1,
  country = "",
  city = "",
  search = "",
  rooms=-1,
  baths=-1
}: Query = {}) {
  const { data, isLoading, error, mutate } = useSWR(
    `/api/book/main/?page=${page}&country=${country}&city=${city}&search=${search}&rooms=${rooms}&baths=${baths}`,
    fetcher,

    {
      dedupingInterval: 3600000,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,

    isLoading: isLoading,
    error: error,
    mutate: mutate,
  };
}
