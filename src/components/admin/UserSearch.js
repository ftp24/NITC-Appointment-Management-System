import React from 'react'
import {useEffect,useState} from 'react'
import AccountCard from './AccountCard'

//Enables the admin to search for a user given the user ID
function SearchUser() {
	const [user,setUser]=useState([]);
	const [clicked,setClicked]=useState(false);

	//When the submit button is clicked, the details of the user if the ID is correct is fetched from the database
	function searchID(e)
	{
		e.preventDefault();
		let u_id=(document.getElementById('inputID')).value
		u_id&&searchID_db(u_id)
		setClicked(true)
	}
	//Fetches user details with given user ID
	async function searchID_db(u_id) {
		// POST request using fetch with async/await
		let request={u_id}
		const response = await fetch('http://localhost:5000/details', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		}).then(response=>response.json())
		.then(data=>{
			//message is returned when there is an error
			//in case of no error set the state to render the user details as a card
			if(!("message" in data)){
				setUser([data]);
				console.log("data",data)
			}else{
				console.log(data.message)
				setUser([]);

			}
		})
	}

    return (
		<div className="container container_box">
 		   <div className="row align-items-center justify-content-md-center">
 			   <div className="col-10 mt-5">
				   <div className="card-body">
					   <h2 className="card-title">User Accounts</h2>
					   <form>
									   <label for="inputID">Enter User ID</label>
						   				<div className="row">
											<div className="col-6">
												<input type="text" className="form-control mb-4" id="inputID" placeholder="Enter ID"/>
											</div>
							   				<div className="col-6">
								   				<button type="submit" className="button btn btn-info col-md-6" onClick={searchID}>Submit</button>
							   				</div>
										</div>
					   </form>
				   </div>
 			   </div>
		   </div>
		   <div className="row align-items-center justify-content-md-center">
			   <div className="col-10 mt-5">
				   {/* checks if there is a user returned and displays the user as a card */}
				   {(user.length>0)&&user.map((data)=>(
					   <AccountCard account={data}/>
					))}
				</div>
				{/* if user is not found, the 'clicked' state shows the message */} 
				<div className="col-4 align-self-center">
				   {(clicked)&&(user.length==0)&&<h3>No user with that ID</h3>}
			   </div>
		   </div>
		</div>
    )
}

export default SearchUser
