import { primary } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Subcategory } from "./subcategory";

interface Category {
  categoryId: string;
}

export const Category = ({ categoryId }: Category) => {
  return (
    <div className="flex flex-col gap-4">
      {/* <div className={cn("text-2xl text-primary", primary.className)}>
        {title}
      </div> */}
      <Subcategory categoryId={categoryId} />
    </div>
  );
};
