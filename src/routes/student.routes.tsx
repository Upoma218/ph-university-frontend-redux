import MySchedule from '../pages/student/MySchedule';
import OfferedCourse from '../pages/student/OfferedCourse';

export const studentPaths = [
 
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
  {
    name: 'My Schedule',
    path: 'schedule',
    element: <MySchedule/>,
  }
];