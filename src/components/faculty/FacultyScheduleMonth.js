import React from 'react'
import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import './faculty.css'

//Allows the faculty to view the appointments in a particular month in a calendar view
function FacultyScheduleMonth({user}) {

	const[monthName,setMonthName]=useState("January")
	const [apps,setApps]=useState([[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[]]]);
	const [month,setMonth]=useState(1)
	const [year,setYear]=useState('2021')

	
	function shorten(str)
	{
		console.log("str",str)
		let length=str.length
		if(length<8)
			return str
		else
			return str.slice(0,8);
	}
	useEffect(()=>{
		console.log(month)
	},[month])
	function checkMonth(e)
	{
		e.preventDefault();
		setMonth(document.getElementById('monthInput').value)
		getApptsByMonth(month,year)

	}

	async function getApptsByMonth(month,year)
	{
	var request={"fac_id":user.id,"month":month,"year":year}
	console.log("request: ",request)
	// POST request using fetch with async/await
	const response = await fetch('http://localhost:5000/apt_by_month', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json' // The type of data you're sending
		},
		body: JSON.stringify(request) // The data
	})
	const data = await response.json();
	console.log("data received",data)
	setApps(data)

	// history.goBack();
	}
	function yearOnChange(e)
	{
		setYear(e.target.value)
	}
	function monthOnChange(e)
	{
		var temp=e.target.value
		setMonth(temp)
		if(temp==1){
			setMonthName("January")
		}
		else if(temp==2){
			setMonthName("February")
		}
		else if(temp==3){
			setMonthName("March")
		}
		else if(temp==4){
			setMonthName("April")
		}
		else if(temp==5){
			setMonthName("May")
		}
		else if(temp==6){
			setMonthName("June")
		}
		else if(temp==7){
			setMonthName("July")
		}
		else if(temp==8){
			setMonthName("August")
		}
		else if(temp==9){
			setMonthName("September")
		}
		else if(temp==10){
			setMonthName("October")
		}
		else if(temp==11){
			setMonthName("November")
		}
		else if(temp==12){
			setMonthName("December")
		}
	}

    return (
        <div className="container">
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Schedule for the Month</h5>
							<form>
								<div className="form-group row">
									<div className="col-6">
										<label htmlFor="months">Choose Month:</label>&nbsp;&nbsp;
										<select className="form-control" name="monthInput" id="monthInput" onChange={monthOnChange}>
											<option value="1">January</option>
											<option value="2">February</option>
											<option value="3">March</option>
											<option value="4">April</option>
											<option value="5">May</option>
											<option value="6">June</option>
											<option value="7">July</option>
											<option value="8">August</option>
											<option value="9">September</option>
											<option value="10">October</option>
											<option value="11">November</option>
											<option value="12">December</option>
										</select>
									</div>
									<div className="col-6">
									<label htmlFor="year">Choose Year:</label>&nbsp;&nbsp;
									<input id="year" className="form-control" type="number" min="1900" max="2099" step="1" value="2021" onChange={yearOnChange}/>
									</div>
									<div className="col-4 offset-md-2 ml-3 mt-4">
										<button type="submit" className="button btn" onClick={checkMonth}>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{!!month&&<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
<table class="table table-dark table-bordered">
	<thead>
		<tr>
			<th scope="col" className="bg-primary">{monthName}</th>
		</tr>
	</thead>
	<tbody>

		{apps.map((week)=>(
		<tr>
			<div className="d-flex flex-row">{week.map(day=>(
				<td className="d-flex p-2 cell">{day.map(appt=>(
					<Link  style={{ textDecoration: 'none' ,color:'inherit'}} to={'/faculty/apptview/'+appt.appointment_id}>
						<div className="bg-primary apptheader" key={appt.appointment_id}>{shorten(appt.stu_name)}</div>
					</Link> ))}
				</td>))}
			</div>
		</tr>))}

	</tbody>
</table>
</div>
</div>}
</div>
    )
}

export default FacultyScheduleMonth
