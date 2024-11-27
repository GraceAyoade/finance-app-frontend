import { FiDelete, FiEdit } from "react-icons/fi";
import "./entries.css";

const Entries = () => {
  return (
    <div>
      <div className="add-entry-wrapper">
        <button className="add-entry">Add Entry</button>
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>Income</td>
              <td>Groceries</td>
              <td>400000</td>
              <td>Chocolate and caramel</td>
              <td>11/04/2024</td>
              <td>
                <FiEdit /> <FiDelete />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Entries;
