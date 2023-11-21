const Box = (props) => {

    
  return (
    <div className={`box${props.number}`}>
      <h1>
        {props.greeting ? props.greeting : "OK"} from Box-{props.number}
      </h1>
    </div>
  );
};

export default Box;
