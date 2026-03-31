// type StatusBadgeProps = {
//   label: string;
//   isActive: boolean;
//   color?: string;
// };
// const StatusBadge = ({ label, isActive, color = "gray" }: StatusBadgeProps) => {
//   return (
//     <div style={{ backgroundColor: color, padding: "5px" }}>
//       <span>{label}</span>
//       {isActive ? "" : ""}
//     </div>
//   );
// };

// ////////////exo3
//   type tasks={
//     id: number;
//     img: string;
//     tag: string;
//     title: string;
//     location: string;
//     slots: string;
//   };
// type TodoListProps = {
//   title: string;
//   tasks :[]
// }

// const TodoList = ({ title, tasks }: TodoListProps) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <ul>
//         {tasks.map(item)=> (
//           <li key={item.id}></li>
//         )}

//       </ul>
//     </div>
//   );
// };
