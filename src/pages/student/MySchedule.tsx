import { Col, Row } from "antd";
import { useGetAllEnrolledCoursesQuery } from "../../redux/features/student/studentCourseManagement.api";

const MySchedule = () => {
  const { data } = useGetAllEnrolledCoursesQuery(undefined);
  console.log(data);

  return (
    <div>
      {data?.data?.map((item: any) => {
        return (
          <Row
            justify="space-between"
            align="middle"
            style={{
              borderTop: "solid #d4d4d4 2px",
              padding: "10px",
              border: "solid #d4d4d4 2px",
              margin: "20px",
            }}
            gutter={30}
          >
            <Col span={3}><p style={{fontWeight: "bold"}}>Course Name : </p>{item.course.title}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>Department Name :</p> {item.academicDepartment.name}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>Section: </p>{item.offeredCourse.section}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>Start Time: </p>{item.offeredCourse.startTime}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>End Time: </p>{item.offeredCourse.endTime}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>Student Name: </p>{item.student.fullName}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>Faculty Name: </p>{item.faculty.fullName}</Col>
            <Col span={3}><p style={{fontWeight: "bold"}}>Days:</p>
              
              {item.offeredCourse.days.map((item: any) => (
                <span> {item}</span>
              ))}
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default MySchedule;
