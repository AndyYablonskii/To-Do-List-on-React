const ToDoItem = (props) => {
  
  return (
    <>
      {props.toDoesArray.map((item, index) => (
        <div key={index} className="ToDoItemConteiner">
          <div className="leftPart">
            <input type="checkbox" id="checkLabel" />
            <label htmlFor="checkLabel">{props.toDoesArray[0].toDoName}</label>
            <div>{props.toDoesArray[0].toDoDescription}</div>
          </div>{" "}
          {/* leftPart */}
        </div>
      ))}
    </>
  );
};

export default ToDoItem;
