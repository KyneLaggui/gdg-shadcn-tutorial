import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreVertical } from "lucide-react";
import ConfirmDialog from "@/components/ConfirmDialog";
import EditModalDialog from "@/components/Navigations/EditModalDialog";

const ModelItem = ({ model, isActive, onClick }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const handleDelete = () => {
    console.log("Delete model:", model.id);
    setShowDeleteDialog(false);
  };

  const handleEdit = (updatedModel) => {
    console.log("Edit model:", updatedModel);
    setShowEditDialog(false);
  };

  return (
    <div
      className={cn(
        "w-full px-3 py-2 rounded-md transition-colors flex items-center gap-1",
        "hover:bg-accent hover:text-accent-foreground",
        isActive ? "bg-accent text-accent-foreground" : "text-foreground"
      )}
    >
      <div
        className="flex flex-col cursor-pointer flex-1 min-w-0"
        onClick={onClick}
      >
        <div className="font-medium truncate">{model.name}</div>
        <div className="text-xs text-muted-foreground truncate">
          {model.description}
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreVertical className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setShowDeleteDialog(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmDialog
        title="Delete Model"
        description="Are you sure you want to delete this model? This action cannot be undone."
        isOpen={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDelete}
      />

      <EditModalDialog
        model={model}
        isOpen={showEditDialog}
        onClose={() => setShowEditDialog(false)}
        onSave={handleEdit}
      />
    </div>
  );
};

export default ModelItem;
