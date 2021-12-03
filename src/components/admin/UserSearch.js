import React from 'react'
import {useEffect,useState} from 'react'
import AccountCard from './AccountCard'
function SearchUser() {
	const [user,setUser]=useState([]);
	const [clicked,setClicked]=useState(false);

	function searchID(e)
	{
		e.preventDefault();
		let u_id=(document.getElementById('inputID')).value
		u_id&&searchID_db(u_id)
		setClicked(true)
		// setUser([{id:((document.getElementById('inputID')).value),name:"Jesvin Sebastian",email:"jesvin_b190700cs@nitc.ac.in",phone:"12345678",department:"CSE"}]);
	}
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
						   <div className="form-group row">
							   <div className="col-6">
									   <label for="inputID">Enter User ID</label>
									   <input type="text" className="form-control mb-4" id="inputID" placeholder="Enter ID"/>
							   </div>
							   <div className="col-4 offset-md-2 ml-3 mt-4">
								   <button type="submit" className="button btn" onClick={searchID}>Submit</button>
							   </div>
						   </div>
					   </form>
				   </div>
 			   </div>
		   </div>
		   <div className="row align-items-center justify-content-md-center">
			   <div className="col-10 mt-5">
				   {(user.length>0)&&user.map((data)=>(
					   <AccountCard account={data}/>
					))}
				</div>
				<div className="col-4 align-self-center">
				   {(clicked)&&(user.length==0)&&<h3>No user with that ID</h3>}
			   </div>
		   </div>
		</div>
    )
}

export default SearchUser
