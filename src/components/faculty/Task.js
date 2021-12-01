import { useHistory } from "react-router-dom";

const Task = ({task}) => {

    return (
        <div className= {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h3 style={HeadingStyle}>Appointment with {task.stu_name}</h3>
            <p>On {task.date}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
