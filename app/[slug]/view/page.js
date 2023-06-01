"use client";
import { Col, Row, Button, Table } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import BtnComponent from "yes/app/components/BtnComponent";
import MyDateRange from "yes/app/components/MyDateRange";
import MySelect from "yes/app/components/MySelect";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("view_emp");

  const getCon = [
    { label: "Ms-Staff", value: "staff" },
    { label: "Ms-Worker", value: "msworker" },
    { label: "ORSH", value: "orsh" },
    { label: "Hi-Tech", value: "hiTech" },
    { label: "AKS", value: "aks" },
    { label: "Jaxin", value: "jaxin" },
    { label: "Krishna", value: "krishna" },
    { label: "Tannu", value: "tannu" },
  ];
  const getJoin = [
    { label: "Date Of Joining", value: "date_of_join" },
    { label: "Date Of Insert", value: "date_of_insert" },
  ];

  const changeValue = (value) => {
    setSelected(value);
  };

  const dataSource = [
    {
      sno: "1",
      emp_code: "MS001",
      name: "Anuj Panwar",
      contact: "9998569856",
      dob: "01-Jan-2000",

      status: (
        <span
          style={{
            background: "#F7FFF2",
            border: "1px solid #40BF00",
            padding: "5px",
            borderRadius: "5px",
            color: "#40BF00",
          }}
        >
          N/A
        </span>
      ),

      sb_status: (
        <span
          style={{
            background: "#FFFBF2",
            border: "1px solid #FFAA00",
            padding: "5px",
            borderRadius: "5px",
            color: "#FFAA00",
          }}
        >
          Ok
        </span>
      ),
      action: (
        <div
          style={{
            width: "90%",
            justifyContent: "space-evenly",
            display: "flex",
          }}
        >
          <img src="../view.svg" />
          <img
            onClick={() =>
              router.push("/Dashboard/view_employee")
            }
            src="../edit.svg"
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
  ];

  const columns = [
    {
      title: "S No.",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Emp Code",
      dataIndex: "emp_code",
      key: "emp_code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "DOJ",
      dataIndex: "dob",
      key: "dob",
    },

    {
      title: "Employee Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "SB Status",
      dataIndex: "sb_status",
      key: "sb_status",
    },
  ];
  useEffect(() => {}, []);
  return (
    <div style={{ height: "100%", padding: "10px" }}>
      <div
        style={{
          height: "98%",
          border: "1px solid #04b0a8",
          background: "white",
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Row gutter={10} style={{ margin: "10px" }}>
          <Col span={4}>
            <MySelect
              placeholder="Payroll"
              options={[
                { label: "Ms-Staff", value: "c" },
                { label: "Ms-Worker", value: "w" },
              ]}
            />
          </Col>
          <Col span={4}>
            <MySelect
              placeholder="Date Of Joining"
              options={[
                { label: "Date Of Joining", value: "DOJ" },
                { label: "Date Of Inserted", value: "DOI" },
              ]}
            />
          </Col>
          <Col span={4}>
            <MyDateRange setDateRange={setDate} />
          </Col>
          <Col span={1}>
            <BtnComponent title="Fetch" />
          </Col>

          <Col span={1} style={{ marginLeft: "3px" }}>
            <BtnComponent title="Download" />
          </Col>

          <Col span={24} style={{ marginTop: "10px" }}>
            <Table
              dataSource={dataSource}
              columns={columns}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default page;

// <Row style={{ height: "100%",padding: "10px" }}>
//   <Col span={24}>
//     <Row
//       gutter={10}
//       style={{
//         margin: "5px",
//         background: "#fff",
//         height: "80%",
//         padding: "10px",
//       }}
//     >
//       <Col span={2}>
//         <MySelect
//           option={getOption}
//           defaultValue="all"
//         />
//       </Col>
//       <Col span={2}>
//         <MySelect
//           option={getCon}
//           defaultValue="staff"
//         />
//       </Col>
//       <Col span={3}>
//         <MySelect
//           option={getJoin}
//           defaultValue="date_of_join"
//         />
//       </Col>
//       <Col span={4}>
//         <MyDateRange
//           size="default"
//           setDateRange={setDate}
//         />
//       </Col>
//       <Col span={1}>
//         <BtnComponent title="Fetch" type="primary" />
//       </Col>
//       {/* <Col span={2}>
//         <BtnComponent title="Download" type="primary" />
//       </Col> */}
//     </Row>
//   </Col>
// </Row>
