export interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  vndPrice: number;
  usdPrice: number;
  subcategory: {
    category: {
      name: string;
    };
  };
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
}

export interface FoodItem {
  isWarm: boolean;
}

export interface DrinkItem {
  ice: "Normal Ice" | "Less Ice" | "No Ice";
  sweetness:
    | "100% Sugar"
    | "75% Sugar"
    | "50% Sugar"
    | "25% Sugar"
    | "No Sugar";
}

export interface CartItem extends Product {
  uuid: string;
  quantity: number;
  options: FoodItem | DrinkItem;
}

export interface Category {
  id: string;
  name: string;
}
