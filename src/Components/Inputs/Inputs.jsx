const Inputs = (props) => {
  const handleSublit = (e) => {
    e.preventDefault();
    props.setToDoesArray(props.toDoesArray.push(props.newTask));
  };
  
  return (
    <div className="InputConteiner">
      
      <input
        type="text"
        placeholder="description"
        value={props.nameDescription}
        onChange={(e) => props.setDescriptionTask(e.target.value)}
      />
      <button onClick={handleSublit}>submit</button>
    </div>
  );
};

export default Inputs;
