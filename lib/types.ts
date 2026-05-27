export type ProductTag =
  | "trending"
  | "new"
  | "exclusive"
  | "limited"
  | "namaya";

export interface Product {
  id: number;
  ref: string;
  image: string;
  tags: ProductTag[];
  price: string;
}

export interface CartItem {
  id: number;
  qty: number;
}

export type FilterValue = "all" | ProductTag;
