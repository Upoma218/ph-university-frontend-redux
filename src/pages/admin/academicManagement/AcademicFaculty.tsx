import { Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";


export type TTableData = {
  name: string
};

const AcademicFaculty = () => {
  const {
    data: facultyData,
    isFetching,
  } = useGetAllAcademicFacultiesQuery(undefined);

  
  const tableData = facultyData?.data?.map(
    ({ _id, name}) => ({
      key: _id,
      name
    })
  );

  const columns: TableColumnsType<TTableData> = [
   
    {
      title: 'Faculty Name',
      key: 'name',
      dataIndex: 'name'
    }
  ];


  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
    />
  );
};

export default AcademicFaculty;
