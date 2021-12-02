import React from 'react'
import {useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

export default function AdminNoteView() {
	let  {id}  = useParams();

//call api to fill in the details
	useEffect(() => {
		getDetails(id)
	    }, [id]);

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
				setTaskClicked(data);
				if(data.status==1){
					setStatus("Pending")
				}
				else if(data.status==2){
					setStatus("Rejected")
				}else if(data.status==3){
					setStatus("Approved")
				}else if(data.status==4){
					setStatus("Rescheduled")
				}
			}
		})			
		}

	const[taskClicked,setTaskClicked]=useState({"appointment_id":"","status":"","date_created":"","date_scheduled":"","time_scheduled":"","title":"","decription":"","suggested_date":"","faculty_message":"","stu_name":"","fac_name":""})
	const[status,setStatus]=useState("Pending")
		

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
											<textarea rows="3" cols="10" className="form-control mb-4" id="outputDescription" value={taskClicked.decription} readOnly/>
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
											<input type="date" className="form-control mb-4" id="outputDate" value={taskClicked.date_scheduled} readOnly/>
										</div>
										<div className="col-6">
										<label for="outputTime">Time</label>
										<input type="time" className="form-control mb-4" id="outputTime" value={taskClicked.time_scheduled} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
									<div className="col-6">
											<label for="outputStatus">Status</label>
									<input type="text" className="form-control mb-1" id="outputStatus" value={status} readOnly/>
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
