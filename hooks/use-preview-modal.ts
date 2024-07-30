import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  type?: "food" | "drink";
  data?: Product;
  onOpen: (type: "food" | "drink", data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  type: undefined,
  data: undefined,
  onOpen: (type: "food" | "drink", data: Product) =>
    set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
