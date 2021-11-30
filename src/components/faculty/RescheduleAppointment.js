import React from 'react'
import {useEffect,useState} from 'react'

function RescheduleAppointment() {
	const [prefilled,setPrefilled]=useState(
	{
		Title:"hm",
		Description:"hm",
		Faculty:"mango",
		Date:"2022-11-01",
		Time:"15:31",
	});

	const options = [
		{
			label: "Apple",
			value: "apple",
		},
		{
			label: "Mango",
			value: "mango",
		},
		{
			label: "Banana",
			value: "banana",
		},
		{
			label: "Pineapple",
			value: "pineapple",
		},
	];

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
											<input readonly type="text" className="form-control mb-4" id="inputTitle" value={prefilled.Title} placeholder="Enter Title"/>
											<label for="inputDescription">Description</label>
											<textarea readonly rows="3" cols="10" className="form-control mb-4" id="inputDescription" value={prefilled.Description} placeholder="Enter Description"/>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<label for="inputFaculty">Faculty</label>
											<input readonly className="form-control ml-3" id="inputFaculty" value={prefilled.Faculty} name="inputFaculty"/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="inputDate">Date</label>
											<input type="date" className="form-control mb-4" id="inputDate" value={prefilled.Date} placeholder="Enter Date"/>
										</div>
										<div className="col-6">
										<label for="inputTime">Time</label>
										<input type="time" className="form-control mb-1" id="inputTime" value={prefilled.Time} placeholder="Enter Time"/>
										</div>
									</div>
									<label for="inputMessage">Message</label>
									<textarea readonly rows="3" cols="10" className="form-control mb-4" id="inputMessage" placeholder="Enter Message"/>

								</div>
								<div className="col-4">
									<button type="submit" className="btn mt-2" onClick={addSubmit}>Book</button>
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
