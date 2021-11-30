import React from 'react'
import {useEffect,useState} from 'react'
import FacultyCard from './FacultyCard'
import './faculty.css'

function FacultyScheduleDay() {

	const [apps,setApps]=useState([]);
	function checkDate(e)
	{
		e.preventDefault();
		setApps([{text:"hello",date:((document.getElementById('inputDate')).value)}]);
	}

    return (
        <div className="container">
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Schedule for the Day</h5>
							<form>
								<div className="form-group row">
									<div className="col-6">
											<label for="inputDate">Date</label>
											<input type="date" className="form-control mb-4" id="inputDate" placeholder="Enter Date"/>
									</div>
									<div className="col-4 offset-md-2 ml-3 mt-4">
										<button type="submit" className="button" onClick={checkDate}>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
					{(apps.length>0)&&apps.map((data)=>(
	 			   <FacultyCard task={data}/>
	 		   	))}
					{(apps.length==0)&&<p style={{'text-align':'center'}}>No Appointments Scheduled on this day.</p>}
				</div>
			</div>
	    </div>
    )
}

export default FacultyScheduleDay
