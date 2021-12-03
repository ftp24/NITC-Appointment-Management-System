import { useState, useEffect } from 'react'

//This component is used as the card to display the user accounts when searched by the admin
const AccountCard = ({account}) => {
	const [show,setShow] = useState(true)
	const [del,setDel] = useState(false)

	//This is called when an account is searched to hide or show the 'user found' and 'user deleted' messages
	useEffect(() => {
	    setShow(true)
		console.log("show became",show)
		setDel(false)
		console.log("del became",del)
	}, [account])

	//This is called when the delete button is clicked to call the API function to delete the account
	function DeleteAccount(e)
	{
		e.preventDefault()
		delete_acc(account.u_id);
	}
	//This is the API function which deleted the account from the database
	async function delete_acc(u_id) {
		// POST request using fetch with async/await
		let request={"uid":u_id}
		const response = await fetch('http://localhost:5000/delete_acc', {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data",data)
		setDel(true)
		setShow(false)
	}

    return (
		<div>
			{/*the show state hides or shows the card depending on whether the user ID entered is correct*/}
	        {show&&<div className = 'card task'>
				<div className="row">
					<div className="col-12">
				        <h2 style={HeadingStyle}>{account.uname}</h2>
					</div>
					<div className="col-6 mt-2">
						<h5>ID: {account.u_id}</h5>
					</div>
					{/*<div className="col-6 mt-2">
					    <h5>Department: {account.dname}</h5>
					</div>*/}
					<div className="col-6 mt-2">
						<h5>Email: {account.email}</h5>
					</div>
					<div className="col-6 mt-2">
						<h5>Phone: {account.mobileno}</h5>
					</div>
					<div className="col-6 mt-2">
						<h5>Department: {account.dname}</h5>
					</div>
				</div>
					<div className="d-flex justify-content-center mt-3">
						<button className="btn btn-danger col-md-4" onClick={DeleteAccount}>DELETE</button>
					</div>
			</div>}
			{/*Below, the show and del states will hide or show the messages*/}
			{(!show)&&<div className="row justify-content-center">
			{(del)&&<h3>Account Deleted</h3>}
				</div>}
				{(!show)&&(!del)&&<h3>No user found</h3>}
		</div>
    )
}

const HeadingStyle = {
    color : "#133148"
}

export default AccountCard
