const AccountCard = ({account}) => {
    return (
        <div className = 'task'>
            <h3 style={HeadingStyle}>{account.name}</h3>
            <p>{account.department}</p>
        </div>
    )
}

const HeadingStyle = {
    color : "#133148"
}

export default AccountCard
