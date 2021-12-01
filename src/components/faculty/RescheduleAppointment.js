import React from 'react'
import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

function RescheduleAppointment() {
	let  {id}  = useParams();

	const [prefilled,setPrefilled]=useState(
	{
		title:"hm", //assumed to get from the API
		description:"hm",
		fac_name:"mango",
		date:"2022-11-01",
		time:"15:31",
	});


	function addSubmit(e)
	{
		e.preventDefault();
		let appointment={
			Title:(document.getElementById('inputTitle')).value,
			Description:(document.getElementById('inputDescription')).value,
			Faculty:(document.getElementById('inputFaculty')).value,
			Date:(document.getElementById('inputDate')).value,
			Time:(document.getElementById('inputTime')).value,
			Message:(document.getElementById('inputMessage')).value,
		};
		console.log(appointment);

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
