import ToDoItem from "../To Do Item/ToDoItem";

const ToDoList = (props) => {
  return (
    <div className="ToDoListConteiner">
      <ToDoItem toDoesArray={props.toDoesArray} />
    </div>
  );
};

export default ToDoList;
