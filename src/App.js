import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import FacultyScheduleDay from "./components/faculty/FacultyScheduleDay"
import AddAppointment from "./components/student/AddAppointment"

function App() {
  return (
		<Router>
				<Switch>
					<Route exact path="/faculty-schedule-day"><FacultyScheduleDay/></Route>
					<Route exact path="/student-add"><AddAppointment/></Route>
				</Switch>
		</Router>
  );
}

export default App;
