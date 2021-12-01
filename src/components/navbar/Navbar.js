import { Link, useHistory } from "react-router-dom"
import { useState, useEffect } from "react";

export default function Navbar({user,setUser}) {
  const history=useHistory();

useEffect(()=>{
	if(!user)
	{
	}
},[])
  function logout(){
    window.localStorage.removeItem('user')
	setUser()
    history.push('/login');
    //console.log('logged out')
  }
  function buha(){
    console.log(user)
  }
    return (
        <div>
			<nav class="navbar navbar-default ">
			</nav>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  {!!user&&(user.type=="student")&&
  <Link className="navbar-brand" to="/student-appointments">Appointment Manager</Link>
  }
  {!!user&&(user.type=="faculty")&&
  <Link className="navbar-brand" to="/faculty-appointments">Appointment Manager</Link>
  }
  {!!user&&(user.type=="admin")&&
  <Link className="navbar-brand" to="/admin-appointments">Appointment Manager</Link>
  }
  {!user&&
  <Link className="navbar-brand" to="#">Appointment Manager</Link>
  }
  {
		!!user&&
      <div className="nav-link text-light" style={{'cursor' : 'default', 'paddingRight':'30px'}}>Hi, {user.username}</div>
	 }
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">

	{!!user&&(user.type=="student")&&
		<ul className="navbar-nav mr-auto">
		  <li className="nav-item">
			  	<Link className="nav-link" to="/student-appointments">Home</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/student-add">Add Appointment</Link>
	      </li>
	    </ul>
	}

	{!!user&&(user.type=="faculty")&&
		<ul className="navbar-nav mr-auto">
		  <li className="nav-item">
			  	<Link className="nav-link" to="/faculty-appointments">Home</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/faculty-schedule-day">Daily Schedule</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/faculty-schedule-month">Monthly Schedule</Link>
	      </li>
	    </ul>
	}

	{!!user&&(user.type=="admin")&&
		<ul className="navbar-nav mr-auto">
		  <li className="nav-item">
			  	<Link className="nav-link" to="/admin-appointments">Home</Link>
	      </li>
	      <li className="nav-item">
	        <Link className="nav-link" to="/accounts">Manage accounts</Link>
	      </li>
	    </ul>
	}
    <ul className="navbar-nav">
	{
		!user&&
      <Link className="nav-link" to="/login">Login</Link>
  	}
	 {
 		!!user&&
       <div className="nav-link" style={{'cursor' : 'pointer'}} onClick={logout}>Logout</div>
 	 }
    </ul>
  </div>
</nav>
        </div>
    )
}
