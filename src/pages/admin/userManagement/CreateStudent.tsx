import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import {
  useGetAllDepartmentsQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

/* const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Mitu",
      middleName: "Islam",
      lastName: "Mitu",
    },
    gender: "female",
    dateOfBirth: "2000-01-01",
    contactNo: "352362123752",
    emergencyContactNo: "3646754",
    email: "hello55@gmail.com",
    bloodGroup: "O+",
    presentAddress: "123 Main Street, City",
    permanentAddress: "456 Oak Avenue, Town",
    guardian: {
      fatherName: "John Doe Sr.",
      fatherOccupation: "Engineer",
      fatherContactNo: "1112223333",
      motherName: "Jane Doe",
      motherOccupation: "Doctor",
      motherContactNo: "4445556666",
    },
    localGuardian: {
      name: "Local Guardian Name",
      occupation: "Local Guardian Occupation",
      contactNo: "3654747",
      address: "789 Pine Road, Village",
    },
    profileImg: "path/to/profile/image.jpg",
    admissionSemester: "65c179d6a4e06578529b35ae",
    admissionFaculty: "65c178954deb58e88aa8d9a7",
    academicDepartment: "65c178c94deb58e88aa8d9aa",
  },
};
 */
const studentDefaultValues = {
  name: {
    firstName: "Mitu",
    middleName: "Islam",
    lastName: "Mitu",
  },
  gender: "female",
  contactNo: "352362123753",
  emergencyContactNo: "3646754",
  email: "hello56@gmail.com",
  bloodGroup: "O+",
  presentAddress: "123 Main Street, City",
  permanentAddress: "456 Oak Avenue, Town",
  guardian: {
    fatherName: "John Doe Sr.",
    fatherOccupation: "Engineer",
    fatherContactNo: "1112223333",
    motherName: "Jane Doe",
    motherOccupation: "Doctor",
    motherContactNo: "4445556666",
  },
  localGuardian: {
    name: "Local Guardian Name",
    occupation: "Local Guardian Occupation",
    contactNo: "3654747",
    address: "789 Pine Road, Village",
  },
  profileImg: "path/to/profile/image.jpg",
  // admissionSemester: "65c179d6a4e06578529b35ae",
  // admissionFaculty: "65c178954deb58e88aa8d9a7",
  // academicDepartment: "65c178c94deb58e88aa8d9aa",
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentMutation();
  const { data: sData, isLoading: sIsloading } =
    useGetAllSemestersQuery(undefined);
  const { data: dData, isLoading: dIsloading } =
    useGetAllDepartmentsQuery(undefined);

  console.log({ data, error });
  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item?.name} ${item?.year}`,
  }));
  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item?.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };

    console.log(data);

    const formData = new FormData();

    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.profileImg);
    addStudent(formData);

    console.log(Object.fromEntries(formData));
  };

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Row gutter={8}>
            <Divider>Personal Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="name.lastName" label="Last Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="profileImg"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Profile Img">
                    <Input
                      type="file"
                      {...field}
                      value={value?.fileName}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect options={genderOptions} name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={bloodGroupOptions}
                name="bloodGroup"
                label="Blood Group"
              />
            </Col>
            <Divider>Contact Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="email" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="contactNo" label="Contact No" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
            <Divider>Guardian Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No"
              />
            </Col>
            <Divider>Local Guardian Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="localGuardian.name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.occupation"
                label="Occupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.contactNo"
                label="Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localGuardian.address"
                label="Address"
              />
            </Col>

            <Divider>Academic Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={semesterOptions}
                disabled={sIsloading}
                name="academicSemester"
                label="Academic Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                options={departmentOptions}
                disabled={dIsloading}
                name="academicDepartment"
                label="Academic Department"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
