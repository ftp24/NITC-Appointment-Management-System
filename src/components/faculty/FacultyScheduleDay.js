import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import Task from './Task'
import './faculty.css'


function FacultyScheduleDay() {

	const [tasks, setTasks] = useState([])

	function checkDate(e)
	{
		e.preventDefault();
		setTasks([{id:5, title:"hello",date:((document.getElementById('inputDate')).value),status:"Pending"}]);
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
	 			  <Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/faculty/apptview/'+task.id}><Task key={task.id} task={task}/> </Link>}</div>))}
					{(tasks.length==0)&&<h4 style={{'text-align':'center'}}>No Appointments Scheduled on this day.</h4>}
				</div>
			</div>
	    </div>
    )
}

export default FacultyScheduleDay
