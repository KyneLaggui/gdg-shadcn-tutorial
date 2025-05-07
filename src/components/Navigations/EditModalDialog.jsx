import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ConfirmDialog from "@/components/ConfirmDialog";

const EditModalDialog = ({ model, isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (model) {
      setName(model.name || "");
      setDescription(model.description || "");
      setPrompt(model.prompt || "You are a helpful AI assistant.");
    }
  }, [model]);

  const handleSubmit = () => {
    onSave({ ...model, name, description, prompt });
    setShowConfirm(false);
    onClose();
  };

  const handleFormSubmit = () => {
    e.preventDefault();
    if (name.trim()) {
      setShowConfirm(true);
    }
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Model</DialogTitle>
            <DialogDescription>
              This will edit the model to your prompt vault.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleFormSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., GPT-4, Claude, etc."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="e.g., GPT-4, Claude, etc."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="name">System Prompt</Label>
                <Textarea
                  id="prompt"
                  placeholder="e.g., You are a helpful AI assistant."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={onClose} type="button">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirm Dialog */}
      <ConfirmDialog
        title="Confirm Edit Model"
        description="Are you sure you want to edit this model?"
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleSubmit}
      />
    </div>
  );
};

export default EditModalDialog;
