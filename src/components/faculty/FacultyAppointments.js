import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from "./Header"
import Task from "./Task"
import FacultyNoteView from "./FacultyNoteView";
import { Link } from "react-router-dom"

const FacultyAppointments = () => {
	let history=useHistory()
	const [tasks, setTasks] = useState([
        {
            id : 1,
			status: "Pending",
			date:  "2001-12-12",
			time: "13:14",
			title: "Request to meet",
			description: "Dear sir, I would like to meet with you to discuss Theory of computation",
			stu_name:"jesvin", //assume they give student and fac name
			fac_name:"raju",
			suggested_Date:"",
			faculty_message:"",
			reminder: true
		},
		{
			id : 2,
		   status: "pending",
		   date:  "2001-12-12",
		   title: "Request to meet you",
		   description: "Dear sir, I would like to discuss OS with you",
		   fac_name:"MK",
		   stu_name:"joseph", //assume they give student and fac name
		   suggested_Date:"",
		   faculty_message:"",
		   reminder: true
	   },
	/*	{
			text : 'Appointment with Vasudevan A R',
			day : 'Dec 3rd, 2021 at 2:30 pm',
			student : 'From Varun Anilkumar',
			reminder : true,

			Title:
			Description: "I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
			Faculty:"Sakthivel",
			Date:"2021-12-21",
			Time:"09:30",
			Student:"1 Joseph Mani Jacob Mani",
			RollNo:"B190529CS",
			Status:"Pending"
		},
		{
			id : 2,
			text : 'Appointment with K Abdul Nazeer',
			day : 'Dec 4th, 2021 at 2:30 pm',
			student : 'From Jesvin Sebastian',
			reminder : true,

			Title:"Request to marry your daughter",
			Description:"Dear sir, I love your daughter very much. I would like to ask for her hand in marriage. I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
			Faculty:"Sakthivel",
			Date:"2021-12-21",
			Time:"09:30",
			Student:"2 Joseph Mani Jacob Mani",
			RollNo:"B190529CS",
			Status:"Pending"
		},
		{
			id : 3,
			text : 'Appointment with Vinod Pathari',
			day : 'Dec 5th, 2021 at 2:30 pm',
			student : 'From Joseph Mani',
			reminder : true,

			Title:"Request to marry your daughter",
			Description:"Dear sir, I love your daughter very much. I would like to ask for her hand in marriage. I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
			Faculty:"Sakthivel",
			Date:"2021-12-21",
			Time:"09:30",
			Student:"3 Joseph Mani Jacob Mani",
			RollNo:"B190529CS",
			Status:"Pending"
		}*/
    ]
    )

      return (
        <div className = 'container container_box'>
          <Header/>
          {tasks.length > 0 ? tasks.map((task) => (<Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/faculty/apptview/'+task.id}><Task key={task.id} task={task}/> </Link>)) :'No pending appointments'}

        </div>
      )
}

export default FacultyAppointments
