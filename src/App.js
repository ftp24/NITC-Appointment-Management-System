import { BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import AdminAppointments from "./components/admin/AdminAppointments"

function App() {
  return (
		<Router>
				<Switch>
					<Route exact path="/admin-appointments"><AdminAppointments/></Route>
				</Switch>
		</Router>
  );
}

export default App