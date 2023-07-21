import PropTypes from "prop-types";
import classes from "./Tasks.module.css";
import TaskItem from "./TaskItem";
import Section from "../UI/Section";

const Tasks = (props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task, index) => (
          <TaskItem key={index}>{task.text}</TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = "Loading tasks...";
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

Tasks.propTypes = {
  items: PropTypes.array.isRequired,
  error: PropTypes.string,
  onFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Tasks;
