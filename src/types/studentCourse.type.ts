export type TOfferedCourseResult = {
  meta?: TMeta
  result?: TOfferedCourse[]
}

export type TMeta = {
  page: number
  limit: number
  total: number
  totalPage: number
}

export type TOfferedCourse = {
  _id: string
  semesterRegistration: string
  academicSemester: string
  academicDepartment: string
  academicFaculty: string
  course: TCourse
  faculty: string
  maxCapacity: number
  section: number
  days: string[]
  startTime: string
  endTime: string
  createdAt: string
  updatedAt: string
  __v: number
  enrolledCourses: TEnrolledCourse[]
  completedCourses: any[]
  completedCourseIds: any[]
  isPreRequisitesFulFilled: boolean
  isAlreadyEnrolled: boolean
}


export type TEnrolledCourse = {
  _id: string
  semesterRegistration: string
  academicSemester: string
  academicFaculty: string
  academicDepartment: string
  offeredCourse: string
  course: string
  student: string
  faculty: string
  isEnrolled: boolean
  courseMarks: TCourseMarks
  grade: string
  gradePoints: number
  isCompleted: boolean
  __v: number
}

export type TCourseMarks = {
  classTest1: number
  midTerm: number
  classTest2: number
  finalTerm: number
}




  
  export type TCourse = {
    _id: string;
    title: string;
    prefix: string;
    code: number;
    credits: number;
    preRequisiteCourses: any[];
    isDeleted: boolean;
    __v: number;
  };