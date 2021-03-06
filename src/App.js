import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";

import StudentAppointments from "./components/student/StudentAppointments"
import StudentNoteView from "./components/student/StudentNoteView.js";
import AddAppointment from "./components/student/AddAppointment"

import FacultyAppointments from "./components/faculty/FacultyAppointments"
import FacultyNoteView from "./components/faculty/FacultyNoteView";
import RescheduleAppointment from "./components/faculty/RescheduleAppointment"
import FacultyScheduleDay from "./components/faculty/FacultyScheduleDay"
import FacultyScheduleMonth from "./components/faculty/FacultyScheduleMonth.js"

import AdminAppointments from "./components/admin/AdminAppointments"
import CreateAccount from "./components/admin/CreateAccount"
import AdminNoteView from "./components/admin/AdminNoteView";
import UserSearch from "./components/admin/UserSearch";

// This component implements the routing to each page and is used to transfer props between components

const AppWrapper = () => {
	return (
		<Router>
			<App/>
		</Router>
	)
}



function App() {

	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
	let history=useHistory();
	const pathname = window.location.pathname;

	let studentPath=['/login','/student-appointments','student-add']
	let facultyPath=['/login','/faculty-appointments','faculty-schedule-day','faculty-schedule-month']
	let adminPath=['login','/admin-appointments','accounts','create-accounts']

	//pushes un-verified users to login page and verified users to their home pages 
	if(!!user) //if user is present
	{
		if(user.type=='student' && !(studentPath.includes(pathname)))
		{
			history.push('/student-appointments')
		}
		if(user.type=='faculty' &&  !(facultyPath.includes(pathname)))
		{
			history.push('/faculty-appointments')
		}
		if(user.type=='admin' &&  !(adminPath.includes(pathname)))
		{
			history.push('/admin-appointments')
		}
		if(pathname === '/login' || pathname === '/' || pathname === '/home')
		{
			if((user.type)=='student')
			{
				history.push('/student-appointments')
			}
			else if((user.type)=='faculty')
			{
				history.push('/faculty-appointments')
			}
			else if((user.type)=='admin')
			{
				history.push('/admin-appointments')
			}
		}
	}
	else{
		history.push('/login');
	}

	return (
		<div className="App">
			<Navbar user={user} setUser={setUser}></Navbar>
			<Switch>
				<Route path="/login" ><Login user={user} setUser={setUser}/></Route>

				{/* { <Route exact path="/home">
					{loggedIn()}
					</Route> } */}

				{/* Student Routes */}
				<Route exact path="/student-appointments" ><StudentAppointments user={user}/></Route>
				<Route exact path="/student-add" ><AddAppointment user={user}/></Route>
				<Route exact path="/student/apptview/:id" ><StudentNoteView></StudentNoteView></Route>

				{/* Faculty Routes */}
				<Route exact path="/faculty-appointments"><FacultyAppointments user={user}/></Route>
				<Route exact path="/faculty-schedule-day"><FacultyScheduleDay user={user}/></Route>
				<Route exact path="/faculty-schedule-month"><FacultyScheduleMonth user={user}/></Route>
				<Route exact path="/reschedule/:id"><RescheduleAppointment user={user}/></Route>
				<Route exact path="/faculty/apptview/:id" ><FacultyNoteView></FacultyNoteView></Route>

				{/* Admin Routes */}
				<Route exact path="/admin-appointments"><AdminAppointments user={user} /></Route>
				<Route exact path="/admin/apptview/:id" ><AdminNoteView></AdminNoteView></Route>
				<Route exact path="/accounts"><UserSearch/></Route>
				<Route exact path="/create-account"><CreateAccount/></Route>



					{/* <Route path="*"><Error404/></Route> */}
				</Switch>
			</div>
		);
	}

	export default AppWrapper
