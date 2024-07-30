import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  subcategoryId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      subcategoryId: query.subcategoryId,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
