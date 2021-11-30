const Task = ({ task }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder' : 'reminder'}`}>
            <h3 style={HeadingStyle}>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#1a5478"
}

export default Task
