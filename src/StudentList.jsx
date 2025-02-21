import React, { useState } from "react";
import { addStudent, editStudent, deleteStudent } from "./studentSlice";
import { useDispatch, useSelector } from "react-redux";
const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (newName.trim()) {
      dispatch(addStudent(newName));
      setNewName("");
    }
  };

  const handleEdit = (index) => {
    setNewName(students[index]);
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    if (newName.trim() && editingIndex !== null) {
      dispatch(editStudent({ index: editingIndex, name: newName }));
      setNewName("");
      setEditingIndex(null);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Student List Application</h2>
      <p>React Redux Toolkit sample code</p>
      <ul className="mb-4">
        {students.map((student, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 p-2 border rounded"
          >
            {student}
            <div>
              <button
                onClick={() => handleEdit(index)}
                className="mr-2 bg-blue-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteStudent(index))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter student name"
        className="border p-2 w-full mb-2"
      />
      {editingIndex === null ? (
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Add Student
        </button>
      ) : (
        <button
          onClick={handleSaveEdit}
          className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
        >
          Save Edit
        </button>
      )}
    </div>
  );
};

export default StudentList;
