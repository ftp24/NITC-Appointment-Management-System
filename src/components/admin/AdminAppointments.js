import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from "./Header"
import Task from "./Task"
import AdminNoteView from "./AdminNoteView";
import { Link } from "react-router-dom"
import { useEffect } from 'react/cjs/react.development';

//home page of admin, shows all the appointments of all the students and faculty
const AdminAppointments = ({user}) => {

	let history=useHistory()
	const [tasks, setTasks] = useState([])

	//When the page loads, all the appointments are fetched from the database
	useEffect(()=>{
		getAllAppointments()
	},[])

	//This is used to fetch the appointments of all appointments (students and faculty) from the database
	async function getAllAppointments() {
		var request={'u_id':user.id}
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/view_all', {
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
			//We set the state to render the appointment cards
			setTasks(data);
		}
	}
	return (
		<div className = 'container container_box'>
			{/*Each card is mapped and linked to the correct links*/}
			<Header/>
			{tasks.length > 0 ? tasks.map((task) => (<Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/admin/apptview/'+task.aptId}><Task key={task.aptId} task={task} user={user}/> </Link>)) :'No pending appointments'}

		</div>
	)
}

export default AdminAppointments
