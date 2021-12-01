import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

import AddAppointment from "./components/student/AddAppointment"
import RescheduleAppointment from "./components/faculty/RescheduleAppointment"

import StudentAppointments from "./components/student/StudentAppointments"
import FacultyScheduleDay from "./components/faculty/FacultyScheduleDay"
import FacultyAppointments from "./components/faculty/FacultyAppointments"
import AdminMain from "./components/AdminMain";
import AdminNoteView from "./components/admin/AdminNoteView";
import FacultyNoteView from "./components/faculty/FacultyNoteView";

import UserSearch from "./components/admin/UserSearch";
import StudentNoteView from "./components/student/StudentNoteView.js";
import AdminAppointments from "./components/admin/AdminAppointments"

const AppWrapper = () => {
	return (
		<Router>
			<App/>
		</Router>
	)
}



function App() {

	const [user, setUser] = useState()
	let history=useHistory();
	const pathname = window.location.pathname;

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')));

	}, [])

	if(!!user) //if user is present
	{
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
				<Route path="/login" >
					<Login user={user} setUser={setUser}/>
				</Route>

				{/* { <Route exact path="/home">
					{loggedIn()}
					</Route> } */}

					{/* Student Routes */}
					<Route exact path="/student-appointments" ><StudentAppointments/></Route>
					<Route exact path="/student-add" ><AddAppointment/></Route>
					<Route exact path="/student/noteview" >
						<StudentNoteView></StudentNoteView>
					</Route>

					{/* Faculty Routes */}
					<Route exact path="/faculty-appointments"><FacultyAppointments/></Route>
					<Route exact path="/faculty-schedule-day"><FacultyScheduleDay/></Route>
					<Route exact path="/faculty-reschedule"><RescheduleAppointment/></Route>
					<Route exact path="/faculty/noteview" >
						<FacultyNoteView></FacultyNoteView>
					</Route>

					{/* Admin Routes */}
					<Route exact path="/admin-appointments"><AdminAppointments/></Route>
					<Route exact path="/home/admin" >
						<AdminMain/>
					</Route>
					<Route exact path="/admin/noteview" >
						<AdminNoteView></AdminNoteView>
					</Route>
					<Route exact path="/accounts"><UserSearch/></Route>


					{/* <Route path="*"><Error404/></Route> */}
			</Switch>
		</div>
		);
	}

	export default AppWrapper
