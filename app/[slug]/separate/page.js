"use client";
import { Col, Row, Button, Table } from "antd";
import { ToolOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import BtnComponent from "yes/app/components/BtnComponent";
import MySelect from "yes/app/components/MySelect";

const page = () => {
  const [date, setDate] = useState("");
  const [selected, setSelected] = useState("view_emp");
  const getOption = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Hold", value: "hold" },
    { label: "Retired", value: "retired" },
    { label: "Resigned", value: "resigned" },
  ];
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
      emp_code: "MS0001",
      name: "Amit Sharma",
      gender: "Male",
      contact: "9998569856",
      dob: "01-Jan-2000",
      status: "22-May-2023",
      sb_status: (
        <span
          style={{
            background: "#F7FFF2",
            border: "1px solid #40BF00",
            padding: "5px",
            borderRadius: "5px",
            color: "#40BF00",
          }}
        >
          <ToolOutlined />
        </span>
      ),
    },
  ];

  const columns = [
    {
      title: "Employee Code",
      dataIndex: "emp_code",
      key: "emp_code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Mobile",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Reg DT/TM",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
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
              placeholder="Contactor"
              options={getCon}
            />
          </Col>
          <Col span={4}>
            <MySelect
              placeholder="----"
              options={getOption}
            />
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
