const FacultyCard = ({task}) => {
    return (
        <div className = 'task'>
            <h3 style={HeadingStyle}>{task.text}</h3>
            <p>{task.date}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#133148"
}

export default FacultyCard
