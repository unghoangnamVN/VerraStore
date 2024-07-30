import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { uuidv4 } from "@/lib/utils";
import { CartItem, DrinkItem, FoodItem, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  addItem: (
    data: Product,
    options: FoodItem | DrinkItem,
    quantity: number
  ) => void;
  removeItem: (uuid: string) => void;
  removeAll: () => void;
  countItems: () => number;
  countItemsById: (id: string) => number;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (
        data: Product,
        options: FoodItem | DrinkItem,
        quantity: number
      ) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (
          existingItem &&
          JSON.stringify(existingItem.options) === JSON.stringify(options)
        ) {
          existingItem.quantity += quantity;
          set({ items: [...currentItems] });
          return;
        }

        const uuid = uuidv4();
        const newItem: CartItem = { ...data, options, quantity, uuid };
        set({ items: [...currentItems, newItem] });
        toast.success("Item added to cart.");
      },

      removeItem: (uuid: string) => {
        const currentItems = get().items;
        const itemIndex = currentItems.findIndex((item) => item.uuid === uuid);
        if (itemIndex > -1) {
          const item = currentItems[itemIndex];
          if (item.quantity > 1) {
            // Decrease quantity if greater than 1
            item.quantity -= 1;
            set({ items: [...currentItems] });
          } else {
            // Remove item if quantity is 1 or less
            currentItems.splice(itemIndex, 1);
            set({ items: [...currentItems] });
          }
        }
      },

      removeAll: () => set({ items: [] }),

      countItems: () => {
        const currentItems = get().items;
        return currentItems.reduce((total, item) => total + item.quantity, 0);
      },

      countItemsById: (id: string) => {
        const currentItems = get().items;
        const itemsWithId = currentItems.filter((product) => product.id === id);
        return itemsWithId.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
