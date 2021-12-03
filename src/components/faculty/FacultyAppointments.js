import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Header from "./Header"
import Task from "./Task"
import FacultyNoteView from "./FacultyNoteView";
import { Link } from "react-router-dom"

const FacultyAppointments = ({user}) => {
	let history=useHistory()
	const [tasks, setTasks] = useState([])
	useEffect(()=>{
		getAllAppointments()
	},[])

	async function getAllAppointments() {
		var request={'u_id':user.id}
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/view_all_faculty', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data",data)
		if (!('message' in data))
		{
			setTasks(data);
		}
	}


      return (
        <div className = 'container container_box'>
          <Header/>
          {tasks.length > 0 ? tasks.map((task) => (<Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/faculty/apptview/'+task.aptId}><Task key={task.aptId} task={task}/> </Link>)) :'No pending appointments'}

        </div>
      )
}

export default FacultyAppointments
