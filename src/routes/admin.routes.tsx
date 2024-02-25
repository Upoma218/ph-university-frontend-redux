
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";
import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import SemesterRegistration from "../pages/admin/courseManagement/SemesterRegistration";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import OfferCourse from "../pages/admin/courseManagement/OfferCourse";
import RegisteredSemesters from "../pages/admin/courseManagement/RegisteredSemesters";
import Courses from "../pages/admin/courseManagement/Courses";

export const adminPaths = [
  
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A.Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A.faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A.Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration />,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse />,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse />,
      },
      {
        name: "Registered Semesters",
        path: "registered-semester",
        element: <RegisteredSemesters />,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses />,
      },
    ],
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "All Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
    ],
  },
];

// Hard coded way

// const adminPaths = [
//     {
//         path: 'dashboard',
//         element: <AdminDashboard/>
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent/>
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin/>
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty/>
//     },
// ]
