const Task = ({ task }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h3 style={HeadingStyle}>Appointment with {task.fac_name}</h3>
			<h5>{task.title}</h5>

            <p>On {task.date_scheduled}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
