import { Container } from "@/components/layout/container";
import Tabs from "./_components/tabs";
import getCategories from "@/actions/get-categories";

export default async function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <Container>
      <div className="px-4 sm-px-6 lg:px-8 py-24">
        <Tabs categories={categories} />
        <div className="h-full w-full mt-20">{children}</div>
      </div>
    </Container>
  );
}
