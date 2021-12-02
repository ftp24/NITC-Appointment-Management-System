import { useHistory } from "react-router-dom";

const Task = ({task}) => {

    return (
        <div className= {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h3 style={HeadingStyle}>Appointment with {task.fac_name}</h3>
            <p>On {task.date_scheduled}</p>
            <p>From {task.stu_name}</p>
            <p>To {task.fac_name}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
