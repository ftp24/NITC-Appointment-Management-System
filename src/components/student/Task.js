const Task = ({ task }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h3 style={HeadingStyle}>Appointment with {task.fac_name}</h3>
            <p>{task.date}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
