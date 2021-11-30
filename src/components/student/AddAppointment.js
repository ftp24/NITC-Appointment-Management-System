import React from 'react'

function AddAppointment() {
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
											<input type="text" className="form-control mb-4" id="inputTitle" placeholder="Enter Title"/>
											<label for="inputDescription">Description</label>
											<textarea rows="3" cols="10" className="form-control mb-4" id="inputDescription" placeholder="Enter Description"/>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<label for="inputFaculty">Faculty</label>
										</div>
										<select className="form-select  ml-3" id="inputFaculty" name="inputFaculty">
											{options.map((option) => (
              									<option value={option.value}>{option.label}</option>
            								))}
										</select>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="inputDate">Date</label>
											<input type="date" className="form-control mb-4" id="inputDate" placeholder="Enter Date"/>
										</div>
										<div className="col-6">
										<label for="inputTime">Time</label>
										<input type="time" className="form-control mb-1" id="inputTime" placeholder="Enter Time"/>
										</div>
									</div>
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

export default AddAppointment
