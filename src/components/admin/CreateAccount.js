import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'

function AddAppointment({user}) {

	let history=useHistory()
	const [options,setOptions] = useState([]);

	useEffect(() => {
	    getDepartments_db()
	}, [])

	async function getDepartments_db() {
		// POST request using fetch with async/await
		let request={}
		const response = await fetch('http://localhost:5000/list_all_departments', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data",data)
		setOptions(data)
	}

	function addSubmit(e)
	{
		e.preventDefault();
		let user={
			u_id:(document.getElementById('inputID')).value,
			uname:(document.getElementById('inputName')).value,
			email:(document.getElementById('inputEmail')).value,
			pwd:(document.getElementById('inputPassword')).value,
			mobileno:(document.getElementById('inputPhone')).value,
			dname:(document.getElementById('inputDepartment')).value,
			type:(document.getElementById('inputType')).value,
		};
		addSubmit_db(user)
	}

	async function addSubmit_db(user) {
		var request=user
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/signup', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data received",data)

		history.push('/admin-appointments');

	}


	return (
		<div className="row align-items-center justify-content-md-center">
			<div className="col-7 mt-5">
				<div className="container container_box">
					<div className="card-body">
						<h2 className="card-title mb-3">Create Account</h2>
						<div className="form-group row">
							<div className="col-12">
								<div className="row">
									<div className="col-6">
										<label htmlFor="inputID">User ID</label>
										<input type="text" className="form-control mb-4" id="inputID"/>
									</div>
									<div className="col-3">
										<label htmlFor="inputType">Account Type</label>
										<select className="form-control  mb-4" id="inputType" name="inputType">
											<option label="Student" value="student">Student</option>
											<option label="Faculty" value="faculty">Faculty</option>
										</select>
									</div>
									<div className="col-3">
										<label htmlFor="inputDepartment">Department</label>
										<select className="form-control" id="inputDepartment" name="inputDepartment">
											{options.map((option) => (
												<option value={option.dname}>{option.dname}</option>
											))}
										</select>
									</div>
									<div className="col-6">
										<label for="inputName">Name</label>
										<input className="form-control  mb-4" id="inputName" name="inputName"/>
									</div>
									<div className="col-6">
										<label for="inputEmail">Email</label>
										<input className="form-control  mb-4" id="inputEmail" name="inputEmail"/>
									</div>
									<div className="col-6">
										<label for="inputPhone">Mobile Number</label>
										<input type="text" className="form-control mb-4" id="inputPhone"/>
									</div>
									<div className="col-6">
										<label for="inputPassword">Password</label>
										<input type="password" className="form-control mb-4" id="inputPassword"/>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-center">
								<div className="btn col-md-3" type="submit" className="btn button col-5 mt-2" onClick={addSubmit}>Create</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddAppointment
