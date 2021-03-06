import { useHistory } from "react-router-dom";
//renders each appointment as a card with details 
const Task = ({task}) => {

    return (
        <div className= {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h5 style={HeadingStyle}>{task.title}</h5>
            <p>By: {task.stu_name}</p>
            <p>On: {task.date_scheduled}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="fa fa-clock-o"></i> {task.time_scheduled}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
