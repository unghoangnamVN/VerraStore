import { Category } from "../_components/category";

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export const revalidate = 0;

const CategoryPage = async ({ params }: CategoryPageProps) => {
  return <Category categoryId={params.id} />;
};

export default CategoryPage;
