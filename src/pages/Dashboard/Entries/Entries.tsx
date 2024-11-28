import { FiDelete, FiEdit } from "react-icons/fi";
import "./entries.css";
import { useEffect, useState } from "react";
import { IEntry } from "../../../types";
import axiosInstance, { axiosPrivate } from "../../../api/axios";
import { AddEntryModal, DeleteEntryModal } from "./EntryModal/EntryModal";

const Entries = () => {
  const [entries, setEntries] = useState<IEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [addModalDetails, setAddModalDetails] = useState({
    visible: false,
    entry: {},
  });
  const [editModalDetails, setEditModalDetails] = useState<any>({
    visible: false,
    entryId: null,
  });
  const [showDeleteModal, setShowDeleteModal] = useState<any>({
    visible: false,
    entryId: null,
  });

  // Fetch entries from the backend
  useEffect(() => {
    const getEntries = async () => {
      try {
        const response = await axiosPrivate.get("/entries");
        setEntries(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getEntries();
  }, []);

  return (
    <>
      <div className="entry-container">
        <div className="add-entry-wrapper">
          <button
            className="add-entry"
            onClick={() => setAddModalDetails({ visible: true, entry: {} })}
          >
            Add Entry
          </button>
        </div>
        <table style={{ padding: "12px" }}>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Type</td>
              <td>Category</td>
              <td>Amount</td>
              <td>Description</td>
              <td>Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {entries?.map((entry, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{entry.type}</td>
                <td>{entry.category}</td>
                <td>{entry.amount}</td>
                <td>{entry.description}</td>
                <td>{entry.date}</td>
                <td>
                  <FiEdit
                    onClick={() =>
                      setAddModalDetails({
                        visible: true,
                        entry: entry,
                      })
                    }
                  />
                  <FiDelete
                    onClick={() =>
                      setShowDeleteModal({ visible: true, entryId: entry._id })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {addModalDetails.visible && (
        <AddEntryModal
          refetch={() => {}}
          onAddEntry={() => {}}
          isOpen={addModalDetails.visible}
          onClose={() => setAddModalDetails({ visible: false, entry: {} })}
          entry={addModalDetails.entry}
        />
      )}
      {showDeleteModal.visible && (
        <DeleteEntryModal
          refetch={() => {}}
          entryId={showDeleteModal?.entryId}
          closeModal={() => setShowDeleteModal({ visible: false, entryId: null })}
        />
      )}
    </>
  );
};

export default Entries;
