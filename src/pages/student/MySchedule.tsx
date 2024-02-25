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
              width: "50%",
              border: "solid #d4d4d4 2px",
              margin: "20px",
            }}
            gutter={30}
          >
            <Col>Course Name : {item.course.title}</Col>
            <Col>Section: {item.offeredCourse.section}</Col>
            <Col>
              Days:{" "}
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
