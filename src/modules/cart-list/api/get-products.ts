import axios from "axios";
import { IProduct } from "../../../types/product";

export async function getProducts() {
  return await axios.get("https://fakestoreapi.com/products").then((res) => {
    return res.data.map((product: IProduct) => {
      product.count = 1;
      return product;
    });
  });
}
