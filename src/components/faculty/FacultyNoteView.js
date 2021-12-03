import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'

export default function FacultyNoteView() {
	let  {id}  = useParams();
	let history=useHistory();
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
	const[status,setStatus]=useState("")

    async function approve()
	{
	var request={"appt_id":id}
	console.log("request: ",request)
	// POST request using fetch with async/await
	const response = await fetch('http://localhost:5000/approval_stud', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json' // The type of data you're sending
		},
		body: JSON.stringify(request) // The data
	})
	const data = await response.json();
	console.log("data received",data)

	history.goBack();
	}
	async function reject()
	{
	var request={"appt_id":id}
	console.log("request: ",request)
	// POST request using fetch with async/await
	const response = await fetch('http://localhost:5000/reject_stud', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json' // The type of data you're sending
		},
		body: JSON.stringify(request) // The data
	})
	const data = await response.json();
	console.log("data received",data)

	history.goBack();
	}
	async function reschedule()
	{
		history.push('/reschedule')
	}


    return (
        <div className="row align-items-center justify-content-md-center">
			<div className="col-7 mt-5">
				<div className="card">
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
											<label for="outputFaculty">Student</label>
											<input className="form-control  mb-4" id="outputStudent" name="outputStudent" value={taskClicked.stu_name} readOnly/>
										</div>
										<div className="col-6">
											<label for="outputStatus">Status</label>
											<input type="text" className="form-control mb-1" id="outputStatus" value={status} readOnly/>
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
									<div className="d-flex justify-content-center col-12">
                                    {(status=="Pending")&&
                                    <Link to={"/reschedule/"+id} className="btn button col-3 mr-4">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Reschedule
                                    </Link>
                                    }
                                    {(status=="Pending")&&
                                    <div onClick={approve} className="btn btn-success col-3 mr-4">
                                        <i className="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Approve
                                    </div>
                                    }
                                    {(status=="Pending")&&
                                    <div onClick={reject} className="btn btn-danger col-3 mr-4">
                                        <i className="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Reject
                                    </div>
                                    }
                                    {(status=="Approved")&&
                                    <div onClick={reject} className="btn btn-danger col-3 mr-4">
                                        <i className="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Cancel
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
