import React, { useState } from "react";
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

const AddModalDialog = ({ open, onOpenChange, onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("You are a helpful AI assistant.");
  const [showConfirm, setShowConfirm] = useState(false);

  const resetForm = () => {
    setName("");
    setDescription("");
    setPrompt("You are a helpful AI assistant.");
  };

  const handleSubmit = () => {
    if (name.trim()) {
      onAdd({ name, description, prompt });
      resetForm();
      onOpenChange(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowConfirm(true);
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Model</DialogTitle>
            <DialogDescription>
              This will add a new model to your prompt vault.
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
              <Button type="submit">Add Model</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirm Dialog */}
      <ConfirmDialog
        title="Confirm Add Model"
        description="Are you sure you want to add this model?"
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleSubmit}
      />
    </>
  );
};

export default AddModalDialog;
