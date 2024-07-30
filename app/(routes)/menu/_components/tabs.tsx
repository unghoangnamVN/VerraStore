"use client";

import { TabButton } from "@/components/tab-button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TabsProps {
  categories: {
    id: string;
    name: string;
  }[];
}

const Tabs = ({ categories }: TabsProps) => {
  const [tab, setTab] = useState(categories[0].id);
  const router = useRouter();

  const handleTabChange = (id: string) => {
    setTab(id);
    router.push(`/menu/${id}`);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {categories.map((category) => (
          <TabButton
            selectTab={() => handleTabChange(category.id)}
            active={tab === category.id}
            key={category.id}
          >
            {category.name}
          </TabButton>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
