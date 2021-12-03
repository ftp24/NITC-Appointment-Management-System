import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import Task from './Task'
import './faculty.css'

//Allows the faculty to view the appointments in a particular day
function FacultyScheduleDay({user}) {

	const [tasks, setTasks] = useState([])

	//is called when the button is clicked and calls the API functioon to fetch the appointments of given date to the particular faculty
	function checkDate(e)
	{
		e.preventDefault();
		let dateid={
			'u_id': user.id,
			'date':(document.getElementById('inputDate')).value
		}
		// setTasks([{id:5, title:"hello",date:((document.getElementById('inputDate')).value),status:"Approved"}]);
		checkDate_db(dateid)
	}

	// fetches the appointments of the given date from the database
	async function checkDate_db(dateid) {
		var request=dateid
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/apt_by_day', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		}).then(response=>response.json())
		.then(data=>{
			console.log("data",data)
			//if there is message in data, it means an error
		if (!('message' in data))
		{
			//setting tasks to render the appointment card component
			setTasks(data);
		}
		else
		{
			setTasks([]);
		}
		console.log("tasks",tasks)
	})

	}

    return (
        <div className="container container_box">
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
					<h2 className="card-title">Schedule for the Day</h2>
					<form>
						<div className="form-group row">
							<div className="col-6">
									<label for="inputDate">Date</label>
									<input type="date" className="form-control mb-4" id="inputDate" placeholder="Enter Date"/>
							</div>
							<div className="col-4 offset-md-2 ml-3 mt-4">
								<button type="submit" className="button btn" onClick={checkDate}>Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
					{/*maps the task to the respective link and card components*/}
					{(tasks.length>0)&&tasks.map((task)=>(<div>{task.status==3?
	 			  <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/faculty/apptview/'+task.aptId}><Task key={task.aptId} task={task}/> </Link>:(tasks.length==0)&&<h4 style={{'text-align':'center'}}>No Appointments Scheduled on this day.</h4>}</div>))}
					{(tasks.length==0)&&<h4 style={{'text-align':'center'}}>No Appointments Scheduled on this day.</h4>}
				</div>
			</div>
	    </div>
    )
}

export default FacultyScheduleDay
