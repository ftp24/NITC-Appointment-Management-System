import React from 'react'
import {useEffect,useState} from 'react'
import { useParams, useHistory } from "react-router-dom";

//Allows the faculty to request a reschedule for an appointment
function RescheduleAppointment({user}) {

	// This is used to get the appointment id from the url parameter
	let  {id}  = useParams();
	let history=useHistory();

	//When the page loads, the appointment details for a single appointment are fetched from the database
	useEffect(() => {
		getDetails(id)
	    }, [id]);

	const [prefilled,setPrefilled]=useState(
	{
		title:"",
		description:"",
		fac_name:"",
		date:"",
		time:"",
	});

	//fetches the details from the database given an appointment_id
	async function getDetails(id) {
		var request={'appt_id':id}
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/get_appt', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		}).then(response => response.json())
		.then(data=>{
			console.log("data",data)
		if (!('message' in data))
		{
			//message is returned when there is an error
			//in case of no error set the state to render the user details as a card
			setPrefilled({
				title:data.title,
				description:data.decription,
				fac_name:data.fac_name,
				date:data.date_scheduled,
				time:data.time_scheduled,
			});
		}
	})
}
	//is called on the button click and submits the reschedule request details
	function addSubmit(e)
	{
		e.preventDefault();
		let request={
			"u_id":user.id,
			"apt_id":id,
			"suggested_date":(document.getElementById('inputDate')).value,
			"suggested_time":(document.getElementById('inputTime')).value,
			"fac_msg":(document.getElementById('inputMessage')).value,
		};
		reschedule(request)
	}
	//sends the reschedule request details to the database
	async function reschedule(request)
	{
	console.log("request: ",request)
	// POST request using fetch with async/await
	const response = await fetch('http://localhost:5000/reschedule', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json' // The type of data you're sending
		},
		body: JSON.stringify(request) // The data
	})
	const data = await response.json();
	console.log("data received",data)
	//redirects to faculty home after sending the data
	history.push('/faculty-appointments');
	}

    return (
		<div className="row align-items-center justify-content-md-center">
			<div className="col-7 mt-5">
				<div className="card">
					<div className="card-body">
						<h5 class="card-title">Schedule an Appointment</h5>
						<form>
							<div className="form-group row">
								<div className="col-12">
									<div className="row">
										<div className="col-12">
											<label for="inputTitle">Title</label>
											<input readonly type="text" className="form-control mb-4" id="inputTitle" value={prefilled.title} placeholder="Enter Title"/>
											<label for="inputDescription">Description</label>
											<textarea readonly rows="3" cols="10" className="form-control mb-4" id="inputDescription" value={prefilled.description} placeholder="Enter Description"/>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<label for="inputFaculty">Faculty</label>
											<input readonly className="form-control ml-3" id="inputFaculty" value={prefilled.fac_name} name="inputFaculty"/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="oldDate">Previous Date</label>
											<input type="date" className="form-control mb-4" id="oldDate" value={prefilled.date} placeholder="Enter Date"/>
										</div>
										<div className="col-6">
											<label for="inputDate">New Date</label>
											<input type="date" className="form-control mb-4" id="inputDate" placeholder="Enter Date"/>
										</div>
										<div className="col-6">
											<label for="oldTime">Previous Time</label>
											<input type="time" className="form-control mb-1" id="oldTime" value={prefilled.time} placeholder="Enter Time"/>
										</div>
										<div className="col-6">
											<label for="inputTime">New Time</label>
											<input type="time" className="form-control mb-1" id="inputTime" placeholder="Enter Time"/>
										</div>
									</div>
									<label for="inputMessage">Message</label>
									<textarea rows="3" cols="10" className="form-control mb-4" id="inputMessage" placeholder="Enter Message"/>

								</div>
								<div className="col-4">
									<button type="submit" className="button btn mt-2" onClick={addSubmit}>Book</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
  		</div>
    )
}

export default RescheduleAppointment
