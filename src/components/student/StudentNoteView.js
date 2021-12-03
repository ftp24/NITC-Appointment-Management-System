import React from 'react'
import { useEffect, useState } from 'react';
import { useParams,useHistory } from "react-router-dom";

export default function StudentNoteView() {

	let  {id}  = useParams();
	let history=useHistory();
	const[taskClicked,setTaskClicked]=useState({"appointment_id":"","status":"","date_created":"","date_scheduled":"","time_scheduled":"","title":"","decription":"","suggested_date":"","faculty_message":"","stu_name":"","fac_name":""})
	const[status,setStatus]=useState("")
	const[suggDate,setSuggDate]=useState("")
	const[suggTime,setSuggTime]=useState("")

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
			var dateTime=data.suggested_date.split('#')
			setSuggDate(dateTime[0])
			setSuggTime(dateTime[1])
			setTaskClicked(data);
			console.log("TaskClicked=",data)
		}
	})
}

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
	async function cancel()
	{
	var request={'appt_id':id}
	console.log("request: ",request)
	// POST request using fetch with async/await
	const response = await fetch('http://localhost:5000/delete_appt', {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json' // The type of data you're sending
		},
		body: JSON.stringify(request) // The data
	})
	const data = await response.json();
	console.log("data received",data)
	history.goBack();
	}




    return (
        <div className="row align-items-center justify-content-md-center">
			<div className="col-7 mt-5">
				<div className="card">
					<div className="card-body">
						<h5 class="card-title">{taskClicked.Title}</h5>
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
											<label for="outputFaculty">Faculty</label>
										<input className="form-control  mb-4" id="outputFaculty" name="outputFaculty" value={taskClicked.fac_name} readOnly/>
										</div>
										<div className="col-6">
											<label for="outputStatus">Status</label>
											<input type="text" className="form-control mb-1" id="outputStatus" value={status} readOnly/>
										</div>
									</div>
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="outputDate">{status=="Rescheduled"&&<span>Old </span>}Date</label>
											<input type="date" className="form-control mb-4" id="outputDate" value={taskClicked.date_scheduled} readOnly/>
										</div>
										<div className="col-6">
											<label for="outputTime">{status=="Rescheduled"&&<span>Old </span>}Time</label>
											<input type="time" className="form-control mb-4" id="outputTime" value={taskClicked.time_scheduled} readOnly/>
										</div>
                                    </div>

									<div className="row mt-3 ml-0 mr-2">
										{status=="Rescheduled"&&
										<div className="col-6">
											<label for="outputDate">Suggested Date</label>
											<input type="date" className="form-control mb-4" id="outputDate" value={suggDate} readOnly/>
										</div>
										}
										{status=="Rescheduled"&&
										<div className="col-6">
											<label for="outputTime">Suggested Time</label>
											<input type="time" className="form-control mb-4" id="outputTime" value={suggTime} readOnly/>
										</div>
										}
									</div>
									{status=="Rescheduled"&&
									<div className="row mt-3 ml-0 mr-2">
										<div className="col-6">
											<label for="inputMessage">Faculty Message</label>
											<textarea rows="3" cols="10" className="form-control mb-4" id="inputMessage" value={taskClicked.faculty_message} readonly/>
										</div>
                                    </div>
									}
									<div className="row mt-3 ml-0 mr-2">
									<div className="d-flex justify-content-center col-12">
                                    {(status=="Rescheduled")&&
                                    <div onClick={approve} class="btn btn-success col-3 mr-4">
                                        <i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;Approve
                                    </div>
                                    }
                                    {(status=="Rescheduled")&&
                                    <div onClick={reject} class="btn btn-danger col-3 mr-4">
                                        <i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;Reject
                                    </div>
                                    }
                                    {((status=="Pending")||(status=="Approved"))&&
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
