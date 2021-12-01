import { useState, useEffect } from 'react'

const AccountCard = ({account}) => {
	const [show,setShow] = useState(true)
	function DeleteAccount(e)
	{
		e.preventDefault()
		console.log(account.id)
		setShow(false)
	}
	useEffect(() => {
	    setShow(true)
	}, [account])


    return (
		<div>
	        {show&&<div className = 'card task'>
				<div className="row">
					<div className="col-12">
				        <h2 style={HeadingStyle}>{account.name}</h2>
					</div>
					<div className="col-6 mt-2">
						<h5>ID: {account.id}</h5>
					</div>
					<div className="col-6 mt-2">
					    <h5>Department: {account.department}</h5>
					</div>
					<div className="col-6 mt-2">
						<h5>Email: {account.email}</h5>
					</div>
					<div className="col-6 mt-2">
						<h5>Phone: {account.phone}</h5>
					</div>
					<div className="col-6">
						<button className="btn btn-danger mt-3" onClick={DeleteAccount}>DELETE</button>
					</div>
				</div>
			</div>}

			{(!show)&&<div className="row justify-content-center">
				<h3>Account Deleted</h3>
				</div>}
		</div>
    )
}

const HeadingStyle = {
    color : "#133148"
}

export default AccountCard
