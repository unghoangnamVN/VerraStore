import getProducts from "@/actions/get-products";
import { Item } from "./item";

interface ItemSectionProps {
  subcategoryId: string;
}

export const ItemSection = async ({ subcategoryId }: ItemSectionProps) => {
  const items = await getProducts({ subcategoryId: subcategoryId });

  return (
    <div className="flex flex-wrap items-center space-x-8 w-full pb-10 bg-slate-100 rounded-xl p-2">
      {items.map((item) => (
        <Item
          key={item.id}
          data={item}
          type={
            item.subcategory.category.name === "Croissant" ? "food" : "drink"
          }
        />
      ))}
    </div>
  );
};
