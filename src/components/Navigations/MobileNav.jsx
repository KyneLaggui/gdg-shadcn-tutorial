import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "@/components/Navigations/Sidebar";

const MobileNav = ({
  isOpen,
  setIsOpen,
  models,
  activeModelId,
  setActiveModelId,
  addModel,
}) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left">
        <div className="h-full overflow-y-auto">
          <Sidebar
            models={models}
            activeModelId={activeModelId}
            setActiveModelId={(id) => {
              setActiveModelId(id);
              setIsOpen(false);
            }}
            addModel={addModel}
            isOpen={true}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
