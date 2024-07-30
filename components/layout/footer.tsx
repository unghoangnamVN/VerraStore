import React from "react";
import { SocialLinks } from "./social-links";
import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="border-t">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex flex-wrap gap-4 justify-between pt-10">
          <div className="space-y-2 flex flex-col">
            <span className="font-semibold">Verra Coffee Pastry</span>
            <span className="text-xs text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisci elit
            </span>
          </div>
          <div className="space-y-2 flex flex-col">
            <span className="font-bold">Products</span>
            <span className="text-xs">Brand 1</span>
            <span className="text-xs">Brand 2</span>
            <span className="text-xs">Brand 3</span>
          </div>
          <div className="space-y-2 flex flex-col">
            <span className="font-semibold">Contacts</span>
            <span className="text-xs">
              127B Trieu Viet Vuong, Hanoi City, Vietnam
            </span>
            <span className="text-xs">+84 395 995 896</span>
          </div>
          <div className="space-y-2 flex flex-col">
            <span className="font-semibold">Social</span>
            <SocialLinks />
          </div>
        </div>
      </Container>
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          Copyright &copy; 2024 Verra Coffee Pastry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
