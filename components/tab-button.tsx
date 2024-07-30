import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  return (
    <button onClick={selectTab}>
      <p
        className={cn(
          "mr-3 font-semibold hover:text-primary",
          active ? "text-primary" : "text-primary-foreground"
        )}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-purple-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};
