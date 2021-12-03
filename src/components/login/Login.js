import React from 'react'
import { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Login.css';

//This component checks the user credentials and logs the user into the web application
const Login= ({user,setUser}) => {
	const history = useHistory();
	const [showPassWarning, setShowPassWarning] = useState(false);
	const [showEmailWarning, setShowEmailWarning] = useState(false);

	const [invalidEmail, setInvalidEmail] = useState(false);
	const [invalidPassword, setInvalidPassword] = useState(false);

	const [valueEmail, setValueEmail] = useState('');
	const handleChangeEmail = (event) => {
		setValueEmail(event.target.value);
		setShowEmailWarning(false)
	};

	const [valuePassword, setValuePassword] = useState('');

	const handleChangePassword = (event) => {
		setValuePassword(event.target.value);
		setShowPassWarning(false)
	};

	const [valueType, setValueType] = useState('student');

	const handleChangeType = (event) => {
		setValueType(event.target.value);
	};


	//When the sign-in button is clicked, it calls the function to verify user details from the database
	function onClick(event){
		event.preventDefault()
		if(valueEmail===''|| valuePassword==='')
		{
			setShowPassWarning(true)
			setShowEmailWarning(true)
		}
		else{
			Login_db();
		}
	}

	//verifies user details from the database and signs the user in
	async function Login_db() {
		var request={'u_id':valueEmail,'pwd':valuePassword,'type':valueType}
		console.log("request: ",request)
		// POST request using fetch with async/await
		const response = await fetch('http://localhost:5000/signin', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json' // The type of data you're sending
			},
			body: JSON.stringify(request) // The data
		})
		const data = await response.json();
		console.log("data",data)
		const userdetails = {
			'id':data.u_id,
			'type':valueType,
			'username':data.uname
		}
		//message is returned when there is an error
		if (!('message' in data))
		{
			//stores the user details in local storage to maintain the login verification
			localStorage.setItem('user', JSON.stringify(userdetails));
			setUser(userdetails);

			setInvalidPassword(false);
			setInvalidEmail(false);
			//redirects the user to their respective home pages if login details are correct
			if(data.type=='admin')
				history.push('/admin-appointments')
			else if(data.type=='faculty')
				history.push('/faculty-appointments')
			else if(data.type=='student')
				history.push('/student-appointments')
			else
				console.log("Type error")
		}
		//gives an alert that the wrong password/email was entered
		else if(data.message=='Incorrect password')
		{
			// alert('Incorrect Password!')
			setInvalidPassword(true);
			setInvalidEmail(false);
		}
		else
		{
			// alert('Incorrect Username/Password!')
			setInvalidEmail(true);
			setInvalidPassword(false);
			// setInvalidEmail(true);
		}
	}

    return (
			<div className="container container_box mt-5">
				<h2 className="header">Login</h2>
				<div className="row">
					<div className="col-6">
						<form>
							<div className="form-row">
			                    <div className="mt-4 col-12 form-group">
			                        <label className="col-3 col-form-label" htmlFor="uname">Roll Number/SSN</label>
			                        <input type="email" className="col-8 form-control " name="uname" id="uname"
									value={valueEmail} onChange={handleChangeEmail} placeholder="Enter Email"></input>
			                    	{(valueEmail===''&&showEmailWarning)&& <div className="alert alert-danger" role="alert">
									<span className="fa fa-exclamation-triangle fa-lg mr-2" style={{'color':'red'}}>
									</span>
		  							'Please enter a valid email.'
								</div>}
								</div>
			                    <div className="col-12 form-group">
			                        <label className="col-3 col-form-label" htmlFor="pwd">Password</label>
			                        <input type="password" className="col-8 form-control mr-1" name="pwd" id="pwd"
									value={valuePassword} onChange={handleChangePassword} placeholder="Enter Password"></input>
									{(valuePassword===''&&showPassWarning)&& <div className="alert alert-danger" role="alert">
									<span className="fa fa-exclamation-triangle fa-lg mr-2" style={{'color':'red'}}>
									</span>
		  							'Please enter valid password.'
								</div>}
			                    </div>
			                    <div className="col-12 form-group">
									<label className="col-3 col-form-label" for="utype">User type:</label>
										<select onChange={handleChangeType} className="col-8 form-control mr-1" name="utype" id="utype">
											<option selected="selected" value="student">Student</option>
											<option value="faculty">Faculty</option>
											<option value="admin">Administrator</option>
									</select>
								</div>
			                </div>

			                <div className="form-row">
								{invalidEmail&& <div className="alert alert-danger" role="alert">
									<span className="fa fa-exclamation-triangle fa-lg mr-2" style={{'color':'red'}}>
									</span>
		  							'Incorrect Email/Password!'
								</div>}
								{invalidPassword&& <div className="alert alert-sm alert-danger" role="alert">
									<span className="fa fa-exclamation-triangle fa-lg mr-2" style={{'color':'red'}}>
									</span>
		  							 Incorrect Password!
								</div>}
						  	<button type="submit" onClick={onClick} className="button btn btn-info col-8 mt-3 btn-sm">Sign in</button>
							</div>
		            	</form>
					</div>
					<div className="mt-4 col-6">
						<div className="img-fluid loginpic"/>
					</div>
				</div>


			</div>
    )
}

export default Login
