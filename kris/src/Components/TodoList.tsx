// interface TodosProps {
//   todos: string[];
// }

// function Todos({ todos }: TodosProps) {
//   return (
//     <div className="card">
//       <h3>To-dos</h3>
//       <ul className="todo-list">
//         {todos.map((todo, i) => (
//           <li key={i}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todos;

const TodoList = () => {
  const todos = [
    "Complete onboarding document upload",
    "Follow up on client documents",
    "Design wireframe for LMS",
    "Create case study for next project",
  ];

  return (
    <div className="card">
      <h4>To-dos</h4>
      {todos.map((todo, i) => (
        <div key={i} className="todo-item">{todo}</div>
      ))}
    </div>
  );
};

export default TodoList;