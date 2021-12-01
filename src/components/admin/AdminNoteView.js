import React from 'react'
import {useEffect} from 'react'
import { useParams } from "react-router-dom";

export default function AdminNoteView() {
	let  {id}  = useParams();

//call api to fill in the details
	useEffect(() => {
	    }, []);

		//simulating backend call
		let taskClicked={
		id: 1,
	  	  status: "pending",
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

    return (
        <div className="row align-items-center justify-content-md-center">
			<div className="col-7 mt-5">
				<div className="container container_box">
					<div className="card-body">
						<h5 className="card-title">{taskClicked.title}</h5>
							<div className="form-group row">
								<div className="col-12">
									<div className="row">
										<div className="col-12">
											<label for="outputDescription">Description</label>
											<textarea rows="3" cols="10" className="form-control mb-4" id="outputDescription" value={taskClicked.description} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputStudent">Student</label>
										<input className="form-control  mb-4" id="outputStudent" name="outputStudent" value={taskClicked.stu_name} readOnly/>
										</div>
										<div className="col-6">
											<label for="outputFaculty">Faculty</label>
										<input className="form-control  mb-4" id="outputFaculty" name="outputFaculty" value={taskClicked.fac_name} readOnly/>
                                        </div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputDate">Date</label>
											<input type="date" className="form-control mb-4" id="outputDate" value={taskClicked.date} readOnly/>
										</div>
										<div className="col-6">
										<label for="outputTime">Time</label>
										<input type="time" className="form-control mb-4" id="outputTime" value={taskClicked.time} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
									<div className="col-6">
											<label for="outputStatus">Status</label>
									<input type="text" className="form-control mb-1" id="outputStatus" value={taskClicked.status} readOnly/>
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
