import React from 'react'
import { Link } from 'react-router-dom';

export default function FacultyNoteView() {
    let appointment={
        Title:"Request to marry your daughter",
        Description:"Dear sir, I love your daughter very much. I would like to ask for her hand in marriage. I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
        Faculty:"Sakthivel",
        Date:"2021-12-21",
        Time:"09:30",
        Student:"Joseph Mani Jacob Mani",
        Status:"Pending"
    };

    function approve()
    {
        console.log("approved");
    }

    function reject()
    {
        console.log("rejected");
    }

    return (
        <div className="row align-items-center justify-content-md-center">
			<div className="col-7 mt-5">
				<div className="card">
					<div className="card-body">
						<h5 class="card-title">{appointment.Title}</h5>
							<div className="form-group row">
								<div className="col-12">
									<div className="row">
										<div className="col-12">
											<label for="outputDescription">Description</label>
											<textarea rows="3" cols="10" className="form-control mb-4" id="outputDescription" value={appointment.Description} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputFaculty">Student</label>
										<input className="form-control  mb-4" id="outputFaculty" name="outputFaculty" value={appointment.Student} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputDate">Date</label>
											<input type="date" className="form-control mb-4" id="outputDate" value={appointment.Date} readOnly/>
										</div>
										<div className="col-6">
										<label for="outputTime">Time</label>
										<input type="time" className="form-control mb-4" id="outputTime" value={appointment.Time} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
									<div className="col-6">
											<label for="outputStatus">Status</label>
									<input type="text" className="form-control mb-1" id="outputStatus" value={appointment.Status} readOnly/>
                                    </div>
                                    </div>
                                    <div className="row mt-3 ml-0 mr-2">
									<div className="d-flex justify-content-center col-12">
                                    <Link to="/reschedule" class="btn button col-3 mr-4">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Reschedule
                                    </Link>
                                    <div onClick={approve} class="btn btn-success col-3 mr-4">
                                        <i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Approve
                                        </div>
                                    <div onClick={reject} class="btn btn-danger col-3 mr-4">
                                        <i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Reject
                                        </div>
                                    </div>
                                    </div>
								</div>									
							</div>
					</div>
				</div>
			</div>
  		</div>
    )
}
