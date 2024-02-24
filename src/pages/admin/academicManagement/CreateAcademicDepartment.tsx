import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultiesQuery,  } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import { acdemicDepartmentSchema } from "../../../schemas/academicManagement.schema";



const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const {data: facultyData} = useGetAllAcademicFacultiesQuery([]);

  const facultyOptions = facultyData?.data?.map(
    ({ _id, name }) => ({
      value: _id,
      label: name
    })
  ) || [];


  console.log("facultyInfo=>", facultyOptions)

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating.......")
    const departmentData = {
      name: data.name,
      academicFaculty: data.academicFaculty
    };
    
    try {
      const res = await addAcademicDepartment(departmentData) as TResponse<any>;
      if (res.error) {
        toast.error(res.error.data.message, {id: toastId});
      } else {
        toast.success(res.data.message, {id: toastId});
      }
    } catch (err) {
      toast.error("Something went wrong", {id: toastId});
    }

    console.log(departmentData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(acdemicDepartmentSchema)}
        >
           <PHInput type="text" name="name" label="Department Name:" />
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={facultyOptions}
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;