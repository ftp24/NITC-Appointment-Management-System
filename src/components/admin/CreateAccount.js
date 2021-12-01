import React from 'react'
import { useHistory } from 'react-router-dom'

function AddAppointment({user}) {

	let history=useHistory()

	function addSubmit(e)
	{
		e.preventDefault();
		let user={
			id:(document.getElementById('inputID')).value,
			type:(document.getElementById('inputType')).value,
			name:(document.getElementById('inputName')).value,
			email:(document.getElementById('inputEmail')).value,
			phone:(document.getElementById('inputPhone')).value,
			password:(document.getElementById('inputPassword')).value,
		};
		console.log(user);
		history.goBack();
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
										<label for="inputID">User ID</label>
										<input type="text" className="form-control mb-4" id="inputID"/>
									</div>
									<div className="col-6">
										<label for="inputType">Account Type</label>
										<select className="form-control  mb-4" id="inputType" name="inputType">
											<option label="Student" value="student">Student</option>
											<option label="Faculty" value="faculty">Faculty</option>
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
