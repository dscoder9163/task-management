import React, { useState, useRef, useLayoutEffect } from "react";

interface Task {
  new_task: string;
  task_decription: string;
  task_date: string;
}

const TaskManagement = () => {
  const [task, setTask] = useState<Task[]>([]);

  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);

  const addTask = () => {
    const nt = ref1.current!.value;
    const td = ref2.current!.value;
    const tdate = ref3.current!.value;

    if (!nt || !td || !tdate) {
      alert("All fields are required");
      return;
    }

    setTask([...task, { new_task: nt, task_decription: td, task_date: tdate }]);

    ref1.current!.value = "";
    ref2.current!.value = "";
    ref3.current!.value = "";
  };

  const delTask = (uid: number): void => {
    task.splice(uid,1);
    setTask([...task]);
  };


  return (
    <>
      <h2>Task Management</h2>

      <div>
        New Task:
        <input type="text" ref={ref1} />
        <br />
        Task Description:
        <input type="text" ref={ref2} />
        <br />
        Task Date:
        <input type="date" ref={ref3} />
        <br />

        <button onClick={addTask}>Add Task</button>
      </div>

      <br />

      {task.length > 0 ? (
        <table border={1} cellPadding={10} cellSpacing={0}>

            <tr>
              <th>Sl.no</th>
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Task Date</th>
              <th>Delete</th>
            </tr>
        
            {task.map((v, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{v.new_task}</td>
                <td>{v.task_decription}</td>
                <td>{v.task_date}</td>
                <td>
                  <button onClick={() => delTask(i)}>Delete</button>
                </td>
              </tr>
            ))}
        </table>
      ) : (
        <h3>No task added</h3>
      )}
    </>
  );
};

export default TaskManagement;
