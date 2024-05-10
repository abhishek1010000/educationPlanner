import React, { useState } from "react";

function EducatorTask() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState(0);
  const [isTaskAdded, setIsTaskAdded] = useState(false);

  const incHours = () => {
    setHours((prevHours) => prevHours + 1);
  };

  const decHours = () => {
    if (hours > 0) {
      setHours((prevHours) => prevHours - 1);
    }
  };

  const handleAddTask = () => {
    setIsTaskAdded(true);
  };

  return (
    <div className="flex items-center justify-center">
      {!isTaskAdded ? (
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Choose subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="text-black p-3 ml-18 rounded-sm text-1xl"
          />
          <input
            type="number"
            placeholder="Choose hours"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            className="text-black p-3 mr-10 rounded-sm text-lxl"
          />
          <button
            className="text-2xl bg-blue-500 rounded-md px-3 py-1"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
      ) : (
        <div>
          <p>Subject: {subject}</p>
          <p>Hours: {hours}</p>
          <div className="mt-4">
            <button
              className="text-2xl bg-green-500 rounded-md px-3 py-1 mr-2"
              onClick={incHours}
            >
              Inc Hours
            </button>
            <button
              className="text-2xl bg-red-500 rounded-md px-3 py-1"
              onClick={decHours}
            >
              Dec Hours
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducatorTask;
