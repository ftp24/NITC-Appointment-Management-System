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
	const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
  return (
    <Router>
		<Route path="/login" >
			<Login user={user} setUser={setUser} />
		</Route>
      <App user={user} setUser={setUser} />
    </Router>
  )
}



function App({user,setUser}) {
  let history=useHistory();

    useEffect(() => {
	loggedIn()

	},[])
  function loggedIn()
  {
	const pathname = window.location.pathname;

	setUser(JSON.parse(localStorage.getItem('user')));
	console.log(user);
	if(!!user) //if user is present
  {

		setUser(JSON.parse(user));
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
  if(pathname!='/login')
  	history.push('/login');
	}
  }

  return (
    <div className="App">
      <Router>
		  <Navbar user={user} setUser={setUser}></Navbar>
				{!!user&&<Switch>
					

					{/* { <Route exact path="/home">
					{loggedIn()}
					</Route> } */}




					{/* Student Routes */}
          <Route exact path="/student-appointments" user={user}><StudentAppointments/></Route>
					<Route exact path="/student-add" user={user}><AddAppointment/></Route>
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
						<AdminMain user={user} setUser={setUser} loggedIn={loggedIn} />
					</Route>
					<Route exact path="/admin/noteview" >
						<AdminNoteView></AdminNoteView>
					</Route>
					<Route exact path="/accounts"><UserSearch/></Route>


					{/* <Route path="*"><Error404/></Route> */}


				</Switch>}
			</Router>
    </div>
  );
}

export default AppWrapper
