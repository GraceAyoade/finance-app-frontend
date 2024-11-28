import React, { useEffect, useState } from "react";
import {
  IDeleteModal,
  IEditEntryModal,
  IEntry,
  IEntryModal,
} from "../../../../types";
import "./entryModal.css";
import axiosInstance, { axiosPrivate } from "../../../../api/axios";

export const AddEntryModal: React.FC<IEntryModal> = ({
  isOpen,
  onClose,
  refetch,
  entry
}) => {
  console.log("entry", entry)
  const [newEntry, setNewEntry] = useState<IEntry>(entry || {
    id: 0,
    type: " ",
    date: " ",
    category: "",
    amount: 0,
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // code to submit to database
    try {
      await axiosPrivate.post("/entries", newEntry);
      setNewEntry({
        id: 0,
        type: "",
        category: "",
        amount: 0,
        description: "",
        date: "",
      });
      onClose();
      refetch();
    } catch (error) {
      alert("Error adding entry!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <h5>Add New Entry</h5>
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            name="type"
            value={newEntry.type || entry.type}
            onChange={handleInputChange}
            placeholder="Type"
            required
          />
          <input
            type="text"
            name="category"
            value={newEntry.category}
            onChange={handleInputChange}
            placeholder="Category"
            required
          />
          <input
            type="number"
            name="amount"
            value={newEntry.amount}
            onChange={handleInputChange}
            placeholder="Amount"
            required
          />
          <input
            type="text"
            name="description"
            value={newEntry.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="date"
            name="date"
            value={newEntry.date}
            onChange={handleInputChange}
            required
          />
          <button className="modal-add" type="submit">Add Entry</button>
        </form>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export const EditEntryModal: React.FC<IEditEntryModal> = ({
  entry,
  closeModal,
  refetch,
  isOpen,
}) => {
  const [editEntry, setEditEntry] = useState<IEntry>(entry);

  useEffect(() => {
    setEditEntry(entry);
  }, [entry]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditEntry((prevEntry) => ({
      ...prevEntry,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = entry.id;
    try {
      const response = axiosInstance.put<IEntry>(`/entries/${id}`, editEntry);
      refetch();
      closeModal();
    } catch (error) {
      alert("error updating entry!");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Entry</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="type"
            value={editEntry.type}
            onChange={handleInputChange}
            placeholder="Type"
            required
          />
          <input
            type="text"
            name="category"
            value={editEntry.category}
            onChange={handleInputChange}
            placeholder="Category"
            required
          />
          <input
            type="number"
            name="amount"
            value={editEntry.amount}
            onChange={handleInputChange}
            placeholder="Amount"
            required
          />
          <input
            type="text"
            name="description"
            value={editEntry.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
          <input
            type="date"
            name="date"
            value={editEntry.date}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Edit Entry</button>
        </form>
        <button className="modal-close" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export const DeleteEntryModal: React.FC<IDeleteModal> = ({
  entryId,
  closeModal,
  refetch,
}) => {
  async function deleteEntry(entry: any): Promise<void> {
    try {
      await axiosPrivate.delete(`/entries/${entryId}`);
      refetch();
      alert("Entry deleted successfully.");
      closeModal();
    } catch (error) {
      console.log(error);
      alert("Error deleting entry!");
    }
  }
  return (
    <div className="delmodal-wrapper">
      <div className="delmodal-mainbox">
        <p className="text">Are you sure you want to delete this entry?</p>
        <div className="delmodal-footer">
          <button onClick={closeModal}>No</button>
          <button onClick={deleteEntry}>Yes</button>
        </div>
      </div>
    </div>
  );
};
