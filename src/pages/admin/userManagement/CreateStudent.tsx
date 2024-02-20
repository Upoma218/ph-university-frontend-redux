const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "Mitu",
      middleName: "Islam",
      lastName: "Mitu",
    },
    gender: "female",
    dateOfBirth: "2000-01-01",
    contactNo: "35236212375",
    emergencyContactNo: "3646754",
    email: "hello5@gmail.com",
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

const CreateStudent = () => {
  return (
    <div>
      <h1>Create Student</h1>
    </div>
  );
};

export default CreateStudent;
