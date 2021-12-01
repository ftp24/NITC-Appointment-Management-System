import React from 'react'
import {useEffect,useState} from 'react'
import FacultyCard from './FacultyCard'
import './faculty.css'
import AdminNoteView from '../admin/AdminNoteView';

function FacultyScheduleMonth() {

	const [apps,setApps]=useState([[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[]]]);
	let j=10000;
	function shorten(str)
	{
		return str.slice(0,8);
	}
	function checkMonth(e)
	{
		e.preventDefault();
		let ans=[[[],[],[],[],[],[],[]],[[],[],[{
			AppointmentID:1,
			Title:"Request to marry your daughter",
			Description:"Dear sir, I love your daughter very much. I would like to ask for her hand in marriage. I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
			Faculty:"Sakthivel",
			Date:"2021-12-21",
			Time:"09:30",
			Student:"Joseph Mani Jacob Mani",
			RollNo:"B190529CS",
			Status:"Pending"
		},{
			AppointmentID:2,
			Title:"Request to marry your daughter",
			Description:"Dear sir, I love your daughter very much. I would like to ask for her hand in marriage. I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
			Faculty:"Sakthivel",
			Date:"2021-12-21",
			Time:"09:30",
			Student:"Naveen SD",
			RollNo:"B190696CS",
			Status:"Pending"
		},{
			AppointmentID:2,
			Title:"Request to marry your daughter",
			Description:"Dear sir, I love your daughter very much. I would like to ask for her hand in marriage. I would like to officially propose marriage to your daughter before you. Please allow me to meet you.",
			Faculty:"Sakthivel",
			Date:"2021-12-21",
			Time:"09:30",
			Student:"Jesvin Sebastian",
			RollNo:"B190696CS",
			Status:"Pending"
		}],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[],[],[],[],[],[]],[[],[]]];
		setApps(ans);
		console.log("buha");
		ans.map(week=>(week.map(day=>(day.map(appt=>console.log(appt))))))
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
										<input list="months" name="month" id="month"/>
										<datalist id="months">
											<option value="January"/>
											<option value="February"/>
											<option value="March"/>
											<option value="April"/>
											<option value="December"/>
										</datalist>
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
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
				<table className="table caption-top">
  <caption>Month of NNN</caption>
  <thead>
    <tr>
      <th scope="col">M</th>
      <th scope="col">T</th>
      <th scope="col">W</th>
      <th scope="col">T</th>
      <th scope="col">F</th>
      <th scope="col">S</th>
      <th scope="col">S</th>
    </tr>
  </thead>
  <tbody>
   {apps.map((week,weekno)=>(<tr className="row" key={weekno}>{week.map((day,dayno)=>(<td className="cell"><div key={dayno} className="d-flex col-md-2 flex-column">{day.length>0&&day.map(appt=>(<div className="p-2">{shorten(appt.Title)}</div>))}</div></td>))}</tr>))}
	</tbody>
</table>
			<div className="row align-items-center justify-content-md-center">
				<div className="col-10 mt-5">
<table class="table table-bordered">
	<thead>
		<tr>
			<th scope="col">Trial</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		<div className="d-flex flex-row">
			{apps[1].map(day=>(<td className="d-flex p-2 cell">{day.map(appt=>(<div key={apps.AppointmentID}>{shorten(appt.Student)}</div>))}</td>))}
		</div>
		</tr>
	</tbody>
</table>
</div>
</div>
				</div>
			</div>
	    </div>
    )
}

export default FacultyScheduleMonth
