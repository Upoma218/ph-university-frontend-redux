
import MyCourses from '../pages/faculty/MyCourses';
import MyStudents from '../pages/faculty/MyStudents';


export const facultyPaths = [
 
  {
    name: 'My Courses',
    path: 'courses',
    element: <MyCourses />,
  },
  {
    path: 'courses/:registerSemesterId/:courseId',
    element: <MyStudents/>,
  },
];