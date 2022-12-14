const API_SERVER = "http://localhost:8080";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}
/** come back make this nicer */

export const getProducts = (): Promise<Product[]> =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id): Promise<Product> =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
});
