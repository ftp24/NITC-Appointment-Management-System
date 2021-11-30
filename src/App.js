import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import FacultyScheduleDay from "./components/faculty/FacultyScheduleDay"
import AddAppointment from "./components/student/AddAppointment"
import RescheduleAppointment from "./components/faculty/RescheduleAppointment"

function App() {
  return (

		<Router>
				<Switch>
					<Route exact path="/faculty-schedule-day"><FacultyScheduleDay/></Route>
					<Route exact path="/student-add"><AddAppointment/></Route>
					<Route exact path="/faculty-reschedule"><RescheduleAppointment/></Route>
				</Switch>
		</Router>
  );
}

export default App;
