import React from 'react'
import {useEffect,useState} from 'react'
import AccountCard from './AccountCard'
function SearchUser() {
	const [user,setUser]=useState([]);

	function searchID(e)
	{
		e.preventDefault();
		if((document.getElementById('inputID').value)>0)
		{
			setUser([{id:((document.getElementById('inputID')).value),name:"Jesvin Sebastian",email:"jesvin_b190700cs@nitc.ac.in",phone:"12345678",department:"CSE"}]);
		}
		console.log(user);
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
									   <input type="number" className="form-control mb-4" id="inputID" placeholder="Enter ID"/>
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
				   {(user.length==0)&&<h3>No user with that ID</h3>}
			   </div>
		   </div>
		</div>
    )
}

export default SearchUser
