import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import './App.css';

import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

import AddAppointment from "./components/student/AddAppointment"

import FacultyScheduleDay from "./components/faculty/FacultyScheduleDay"

import AdminMain from "./components/AdminMain";

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  let history=useHistory();

  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));

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
				history.push('/home/student')
			}
			else if((user.type)=='faculty')
			{
				history.push('/home/faculty')
			}
			else if((user.type)=='admin')
			{
				history.push('/home/admin')
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
				<Switch>
					<Route exact path="/login" ><Login user={user} setUser={setUser} loggedIn={loggedIn} /></Route>
					
					{/* { <Route exact path="/home">
					{loggedIn()}
					</Route> } */}


					{/* Faculty Routes */}
						<Route exact path="/faculty-schedule-day"><FacultyScheduleDay/></Route>

					{/* Student Routes */}
					<Route exact path="/student-add"><AddAppointment/></Route>
					{/* Admin Routes */}
					<Route exact path="/home/admin" >
						
						<AdminMain user={user} setUser={setUser} loggedIn={loggedIn} />
					</Route>
					{/* <Route path="*"><Error404/></Route> */}

				</Switch>
			</Router>
    </div>
  );
}

export default AppWrapper;
