import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { TQueryParam, TStudentData } from "../../../types";
import { Link } from "react-router-dom";

export type TTableData = Pick<TStudentData, "fullname" | "id"| "email"| "contactNo">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | []>([]);
  const [page, setPage] = useState(1);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  console.log(studentData);

  const metaData = studentData?.data?.meta

  const tableData = studentData?.data?.result?.map(({ _id, fullname, id, email, contactNo }) => ({
    key: _id,
    fullname,
    email,
    contactNo,
    id,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "fullname",
      dataIndex: "fullname",
    },
    {
      title: "Roll No",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Contact No",
      key: "contactNo",
      dataIndex: "contactNo",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },

    {
      title: "Action",
      key: "x",
      render: (item) => {
        console.log(item)
        return (
          <Space>
            <Link to ={`/admin/student-data/${item.key}`}><Button>Details</Button></Link>
            <Button>Update</Button>
            <Button>Block</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };
  return (
    <>
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination = {false}
    />
    <Pagination current={page} onChange={(value) => setPage(value)} pageSize={metaData?.limit} total={metaData?.total}/>
    </>
  );
};

export default StudentData;
