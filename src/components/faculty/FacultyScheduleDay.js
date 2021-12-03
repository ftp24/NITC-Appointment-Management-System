import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import Task from './Task'
import './faculty.css'


function FacultyScheduleDay({user}) {

	const [tasks, setTasks] = useState([])

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
		})
		const data = await response.json();
		console.log("data",data)
		if (!('message2' in data))
		{
			setTasks(data);
		}
		else
		{
			setTasks([]);
		}
		console.log("tasks",tasks)
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
					{(tasks.length>0)&&tasks.map((task)=>(<div>{task.status=="Approved"&&
	 			  <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/faculty/apptview/'+task.aptId}><Task key={task.aptId} task={task}/> </Link>}</div>))}
					{(tasks.length==0)&&<h4 style={{'text-align':'center'}}>No Appointments Scheduled on this day.</h4>}
				</div>
			</div>
	    </div>
    )
}

export default FacultyScheduleDay
