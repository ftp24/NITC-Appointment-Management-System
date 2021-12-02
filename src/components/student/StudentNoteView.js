import React from 'react'
import { useEffect } from 'react';
import { useParams,useHistory } from "react-router-dom";

export default function StudentNoteView() {

	let  {id}  = useParams();
	let history=useHistory();

    //call api to fill in the details
    useEffect(() => {
 	   }, []);

 	   //simulating backend call
 	   let appointment={
 	   id: 1,
 		 status: "Rescheduled",
 		 date:  "2001-12-12",
 		 time: "13:14",
 		 title: "Request to marry your daughter",
 		 description: "Dear sir, I love your daughter very much. I would like to ask for her hand in marriage.",
 		 stu_name:"jesvin", //assume they give student and fac name
 		 fac_name:"raju",
 		 suggested_Date:"",
 		 faculty_message:"",
 		 reminder: true
 	   }
    function approve()
    {
        console.log("approved");
		history.goBack()
    }

    function reject()
    {
        console.log("rejected");
		history.goBack()
    }

    function cancel()
    {
        if(appointment.Status=="Pending"){
            console.log("Deleted appt");
        }
        else if(appointment.Status=="Approved"){
            console.log("Cancelled")
        }
		history.goBack()
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
											<textarea rows="3" cols="10" className="form-control mb-4" id="outputDescription" value={appointment.description} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputFaculty">Faculty</label>
										<input className="form-control  mb-4" id="outputFaculty" name="outputFaculty" value={appointment.fac_name} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputDate">Date</label>
											<input type="date" className="form-control mb-4" id="outputDate" value={appointment.date} readOnly/>
										</div>
										<div className="col-6">
										<label for="outputTime">Time</label>
										<input type="time" className="form-control mb-4" id="outputTime" value={appointment.time} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
									<div className="col-6">
											<label for="outputStatus">Status</label>
									<input type="text" className="form-control mb-1" id="outputStatus" value={appointment.status} readOnly/>
                                    </div>
                                    </div>
                                    <div className="row mt-3 ml-0 mr-2">
									<div className="d-flex justify-content-center col-12">
                                    {(appointment.status=="Rescheduled")&&
                                    <div onClick={approve} class="btn btn-success col-3 mr-4">
                                        <i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Approve
                                    </div>
                                    }
                                    {(appointment.status=="Rescheduled")&&
                                    <div onClick={reject} class="btn btn-danger col-3 mr-4">
                                        <i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Reject
                                    </div>
                                    }
                                    {((appointment.status=="Pending")||(appointment.status=="Approved"))&&
                                    <div onClick={cancel} class="btn btn-danger col-3 mr-4">
                                        <i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Cancel
                                    </div>
                                    }
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
