export interface Sale {
  id: string;
  products: {
    product_id: string,
    quantity: number
  }[];
  client_id: string;
  amount: number;
  _deleted: boolean;
}
