import getSubcategories from "@/actions/get-subcategories";
import { secondary } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ItemSection } from "./item-section";

interface SubcategoryProps {
  categoryId: string;
}

export const Subcategory = async ({ categoryId }: SubcategoryProps) => {
  const subcategories = await getSubcategories({ categoryId: categoryId });
  return (
    <>
      {subcategories.map((subcategory) => (
        <div
          key={subcategory.id}
          className="grid grid-cols-1 xl:grid-cols-2 gap-16"
        >
          <div className="flex flex-col justify-start gap-2">
            <h3
              className={cn(
                "font-medium text-secondary text-xl",
                secondary.className
              )}
            >
              {subcategory.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {subcategory.description}
            </p>
          </div>
          <ItemSection subcategoryId={subcategory.id} />
        </div>
      ))}
    </>
  );
};
