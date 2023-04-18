const ToDoItem = () => {
  return (
    <>
      <div className="ToDoItemConteiner">
        <div className="leftPart">
          <input type="checkbox" id="checkLabel" />
          <label htmlFor="checkLabel">Task Name</label>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
