import React, { useState } from "react";
import ModelItem from "@/components/Navigations/ModelItem";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import AddModalDialog from "@/components/Navigations/AddModalDialog";
import { ModeToggle } from "@/components/mode-toggle";

const Sidebar = ({
  models,
  activeModelId,
  setActiveModelId,
  isOpen,
  addModel,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="flex flex-col h-full bg-muted/40">
      <div className="p-4 border-b border-border flex justify-between items-center mr-5 md:mr-0">
        <h2 className="text-lg font-semibold">Prompt Vault</h2>
        <ModeToggle />
      </div>

      <div className="space-y-2 p-3">
        {models.map((model) => (
          <ModelItem
            key={model.id}
            model={model}
            isActive={activeModelId === model.id}
            onClick={() => setActiveModelId(model.id)}
          />
        ))}
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => setDialogOpen(true)}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Model
        </Button>
      </div>

      <AddModalDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        onAdd={(model) => {
          const id = addModel(model);
          setActiveModelId(id);
          setDialogOpen(false);
        }}
      />
    </div>
  );
};

export default Sidebar;
