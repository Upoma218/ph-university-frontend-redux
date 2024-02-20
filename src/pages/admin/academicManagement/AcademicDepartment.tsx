import { Table, TableColumnsType } from "antd";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFaculty } from "../../../types/academicManagement.type";

export type TTableData = {
  key: string;
  name: string;
  academicFaculty: TAcademicFaculty;
};

const AcademicDepartment = () => {
  const { data: departmentData, isFetching } = useGetAllDepartmentsQuery([]);

  const tableData = departmentData?.data?.map((item) => ({
    key: item?._id,
    name: item?.name,
    academicFaculty: item?.academicFaculty,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Department Name',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Faculty Name',
      key: 'academicFaculty',
      dataIndex: ['academicFaculty', 'name'], 
    },
  ];


  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default AcademicDepartment;
