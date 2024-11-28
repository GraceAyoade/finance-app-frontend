import { FiDelete, FiEdit } from "react-icons/fi";
import "./budgets.css";

const Budgets = () => {
  return (
    <div className="entry-container">
      <div className="add-entry-wrapper">
        <button className="add-entry">Set Budget</button>
      </div>
      <table style={{ padding: "12px" }}>
        <thead>
          <tr>
            <td>S/N</td>
            <td>Category</td>
            <td>Amount</td>
            <td>Description</td>
            <td>StartDate</td>
            <td>EndDate</td>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((item, idx) => (
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

export default Budgets;
