import { useState } from 'react'
import Header from "./Header"
import Tasks from "./Tasks"

const AdminAppointments = () => {
    const [tasks, setTasks] = useState([
        {
            id : 1,
            text : 'Appointment with Varun Anilkumar',
            day : 'Dec 3rd, 2021 at 2:30 pm',
            reminder : true
        },
        {
            id : 2,
            text : 'Appointment with Joseph Mani',
            day : 'Dec 4th, 2021 at 2:30 pm',
            reminder : true
        },
        {
            id : 3,
            text : 'Appointment with Lenoah Chacko',
            day : 'Dec 5th, 2021 at 2:30 pm',
            reminder : true
        }
    ]
    )
    
      return (
        <div className = 'container'>
          <Header />
          {tasks.length > 0 ? <Tasks tasks={tasks} /> : 'No pending appointments'}
        </div>
      )
}

export default AdminAppointments