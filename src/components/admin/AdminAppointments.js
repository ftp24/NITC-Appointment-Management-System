import { useState } from 'react'
import Header from "./Header"
import Tasks from "./Tasks"

const AdminAppointments = () => {
    const [tasks, setTasks] = useState([
        {
            id : 1,
            text : 'Appointment with Vasudevan A R',
            day : 'Dec 3rd, 2021 at 2:30 pm',
            student : 'From Varun Anilkumar',
            reminder : true
        },
        {
            id : 2,
            text : 'Appointment with K Abdul Nazeer',
            day : 'Dec 4th, 2021 at 2:30 pm',
            student : 'From Jesvin Sebastian',
            reminder : true
        },
        {
            id : 3,
            text : 'Appointment with Vinod Pathari',
            day : 'Dec 5th, 2021 at 2:30 pm',
            student : 'From Joseph Mani',
            reminder : true
        }
    ]
    )

      return (
        <div className = 'container_box'>
          <Header />
          {tasks.length > 0 ? <Tasks tasks={tasks} /> : 'No pending appointments'}
        </div>
      )
}

export default AdminAppointments
