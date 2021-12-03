import React from 'react'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react'
import moment from 'moment'

function AddAppointment({user}) {

	let history=useHistory()
	const [options,setOptions] = useState([]);

	useEffect(() => {
	    getFaculty_db()
	}, [1])

	async function getFaculty_db() {
		// POST request using fetch with async/await
		let request={}
		const response = await fetch('http://localhost:5000/list_all_fac', {
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
		let curr_datetime=moment().format("YYYY-MM-DD")+'#'+moment().format("HH:mm:ss")
		let appointment={
			date_created:curr_datetime,
			date_appointment:(document.getElementById('inputDate')).value,
			time_appointment:(document.getElementById('inputTime')).value,
			title:(document.getElementById('inputTitle')).value,
			description:(document.getElementById('inputDescription')).value,
			stud_id:(user.id),
			fac_id:(document.getElementById('inputFaculty')).value,
		};
		addSubmit_db(appointment)
	}

	async function addSubmit_db(appointment) {
		var request=appointment
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/request_stud', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data received",data)

		if('message' in data && data.message=="Appointment Requested")
		{
			history.goBack();
		}
		else {
			alert("Please fill the details correctly")
		}

	}

    return (
		<div className="row align-items-center justify-content-md-center">
			<div className="col-7">
				<div className="container container_box">
					<div className="card-body">
						<h2 class="card-title">Schedule an Appointment</h2>
						<form>
							<div className="form-group row">
								<div className="col-12">
									<div className="row">
										<div className="col-12">
											<label htmlFor="inputTitle">Title</label>
											<input type="text" className="form-control mb-4" id="inputTitle" placeholder="Enter Title"/>
											<label htmlFor="inputDescription">Description</label>
											<textarea rows="3" cols="10" className="form-control mb-4" id="inputDescription" placeholder="Enter Description"/>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<label htmlFor="inputFaculty">Faculty</label>
											<select className="form-control col-3  ml-3" id="inputFaculty" name="inputFaculty">
												{options.map((option) => (
	              									<option value={option.u_id}>{option.uname}</option>
	            								))}
											</select>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label htmlFor="inputDate">Date</label>
											<input type="date" className="form-control mb-4" id="inputDate" name="inputDate" placeholder="Enter Date"/>
										</div>
										<div className="col-6">
										<label htmlFor="inputTime">Time</label>
										<input type="time" className="form-control mb-1" id="inputTime" name="inputTime" placeholder="Enter Time"/>
										</div>
									</div>
								</div>
								<div className="col-4">
									<button type="submit" className="btn button mt-2" onClick={addSubmit}>Book</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
  		</div>
    )
}

export default AddAppointment
