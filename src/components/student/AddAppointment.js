import React from 'react'

function AddAppointment({user}) {
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
			title:(document.getElementById('inputTitle')).value,
			description:(document.getElementById('inputDescription')).value,
			faculty:(document.getElementById('inputFaculty')).value,
			date:(document.getElementById('inputDate')).value,
			time:(document.getElementById('inputTime')).value,
			student:(user.username).value
		};
		console.log(appointment);

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
											<select className="form-select  ml-3" id="inputFaculty" name="inputFaculty">
												{options.map((option) => (
	              									<option value={option.value}>{option.label}</option>
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
