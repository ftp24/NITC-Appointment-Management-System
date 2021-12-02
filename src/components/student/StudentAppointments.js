import { useState, useEffect } from 'react'
import Header from "./Header"
import Task from "./Task"
import { Link } from "react-router-dom"

const StudentAppointments = ({user}) => {
	const [tasks, setTasks] = useState([])

   	useEffect(()=>{
   		getAllAppointments()
   	},[])

   	async function getAllAppointments() {
   		var request={'u_id':user.id}
   		console.log("request: ",request)
   		// POST request using fetch with async/await
   		const response = await fetch('http://localhost:5000/view_all_student', {
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
          <h2>Appointment with faculties</h2>
			  {tasks.length > 0 ? tasks.map((task) => (<Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/student/apptview/'+task.aptId}><Task key={task.id} task={task}/> </Link>)) :'No pending appointments'}
        </div>
      )
}

export default StudentAppointments
