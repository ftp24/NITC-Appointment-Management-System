import { useHistory } from "react-router-dom";

const Task = ({task}) => {

    return (
        <div className= {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h3 style={HeadingStyle}>{task.title}</h3>
            <div className="row">
                <p className="col col-md-5">From: {task.stu_name}</p>
                <p className="col col-md-5">To: {task.fac_name}</p>
            </div>
            <div className="row">
                <p className="col col-md-5">On: {task.date_scheduled}</p>
                <p className="col col-md-5"><i class="fa fa-clock-o"></i> {task.time_scheduled}</p>
            </div>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
