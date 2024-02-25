import { Button, Modal, Table } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { useState } from "react";
import {
  useAddMarkMutation,
  useGetAllFacultyCoursesQuery,
} from "../../redux/features/faculty/facultyCourses.api";
import { useParams } from "react-router-dom";
import { TStudentData } from "../../types";
import { TSemester } from "../../types/courseManagement.type";
import { TOfferedCourse } from "../../types/studentCourse.type";

type TProps = {
  _id: string;
  student: TStudentData;
  semesterRegistration: TSemester;
  offeredCourse: TOfferedCourse;
  grade?: string;
  gradePoints?: number;
  courseMarks?: {
    classTest1?: number;
    classTest2?: number;
    midTerm?: number;
    finalTerm?: number;
  };
};

const MyStudents = () => {
  const { registerSemesterId, courseId } = useParams();
  const { data: facultyCoursesData } = useGetAllFacultyCoursesQuery([
    { name: "semesterRegistration", value: registerSemesterId },
    { name: "course", value: courseId },
  ]);

  const tableData = facultyCoursesData?.data?.map(
    ({
      _id,
      student,
      semesterRegistration,
      offeredCourse,
      grade,
      gradePoints,
      courseMarks,
    }: TProps) => ({
      key: _id,
      name: student.fullName,
      roll: student.id,
      classTest1: courseMarks?.classTest1,
      classTest2: courseMarks?.classTest2,
      midTerm: courseMarks?.midTerm,
      finalTerm: courseMarks?.finalTerm,
      grade: grade,
      gradePoints: gradePoints,
      semesterRegistration: semesterRegistration._id,
      student: student._id,
      offeredCourse: offeredCourse._id,
    })
  );

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Roll",
      key: "roll",
      dataIndex: "roll",
    },
    {
      title: "Class Test 1",
      key: "classTest1",
      dataIndex: "classTest1",
    },
    {
      title: "Class Test 2",
      key: "classTest2",
      dataIndex: "classTest2",
    },
    {
      title: "Mid Term",
      key: "midTerm",
      dataIndex: "midTerm",
    },
    {
      title: "Final Term",
      key: "finalTerm",
      dataIndex: "finalTerm",
    },
    {
      title: "Grade",
      key: "grade",
      dataIndex: "grade",
    },
    {
      title: "Grade Points",
      key: "gradePoints",
      dataIndex: "gradePoints",
    },
    {
      title: "Action",
      key: "x",
      render: (item: any) => {
        return (
          <div>
            <AddMarksModal studentInfo={item} />
          </div>
        );
      },
    },
  ];

  return <Table columns={columns} dataSource={tableData} />;
};

const AddMarksModal = ({ studentInfo }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMark] = useAddMarkMutation();

  const handleSubmit = async (data: any) => {
    const studentMark = {
      semesterRegistration: studentInfo.semesterRegistration,
      offeredCourse: studentInfo.offeredCourse,
      student: studentInfo.student,
      courseMarks: {
        classTest1: Number(data.classTest1),
        midTerm: Number(data.midTerm),
        classTest2: Number(data.classTest2),
        finalTerm: Number(data.finalTerm),
      },
    };

    console.log("studentMark", studentMark);
    await addMark(studentMark);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Update Marks</Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHInput type="text" name="classTest1" label="Class Test 1" />
          <PHInput type="text" name="classTest2" label="Class Test 2" />
          <PHInput type="text" name="midTerm" label="Midterm" />
          <PHInput type="text" name="finalTerm" label="Final" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default MyStudents;
