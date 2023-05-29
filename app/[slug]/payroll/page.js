"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import {
  Col,
  DatePicker,
  Input,
  Row,
  Segmented,
  Upload,
  Table,
} from "antd";
import MySelect from "yes/app/components/MySelect";
import Btn from "yes/app/components/Btn";
import { EyeOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

export default function page() {
  const [value, setValue] = useState(1);

  const dataSource = [
    {
      sno: "1",
      name: "Amit",
      mob: "987456321",
      add: "Krishna Park",
      state: "UP",
      cont: "India",
      action: (
        <EyeOutlined />
        //   <div
        //     style={{
        //       width: "15%",
        //       justifyContent: "space-evenly",
        //       display: "flex",
        //     }}
        //   >
        //     <img src="../view.svg" />
        //     <img src="../edit.svg" />
        //   </div>
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
      title: "Name of Entity",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Contact",
      dataIndex: "mob",
      key: "mob",
    },
    {
      title: "Address",
      dataIndex: "add",
      key: "add",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
    {
      title: "Country",
      dataIndex: "cont",
      key: "cont",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const msme = [
    { label: "yes", value: "y" },
    { label: "no", value: "n" },
  ];
  const type = [
    { label: "Partnership", value: "part" },
    { label: "Company", value: "com" },
    { label: "Proprietorship", value: "p" },
  ];
  return (
    <div className={styles.mainDiv}>
      <Row>
        <Col
          style={
            value == 1
              ? {
                  padding: "20px 50px",
                  background: "#04B0A8",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "8px 8px 0px 0px",
                }
              : {
                  padding: "20px 50px",
                  background: "#F7F9FE",
                  color: "black",
                  cursor: "pointer",
                }
          }
          value={value}
          onClick={() => setValue(1)}
        >
          <span style={{ fontSize: "14px" }}>
            Create Payroll
          </span>
        </Col>
        <Col
          value={value}
          onClick={() => setValue(2)}
          style={
            value == 2
              ? {
                  padding: "20px 50px",
                  background: "#04B0A8",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "8px 8px 0px 0px",
                }
              : {
                  padding: "20px 50px",
                  background: "#F7F9FE",
                  color: "black",
                  cursor: "pointer",
                }
          }
        >
          <span style={{ fontSize: "14px" }}>
            Payroll View
          </span>
        </Col>
      </Row>
      <div
        span={24}
        style={{
          border: "1px solid #04B0A8",
          height: "90%",
          background: "#fff",
        }}
      >
        {value == 1 ? (
          <Row gutter={[10]} style={{ margin: "10px" }}>
            <Col
              span={24}
              style={{
                backgroundColor: "#E5FFFE",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              <span>Create Payroll</span>
            </Col>
            <Col span={4}>
              <span>Name of entity</span>
              <Input
                placeholder="Name of entity"
                style={{ width: "100%" }}
              />
            </Col>

            <Col span={4}>
              <span>Contact</span>
              <Input
                placeholder="98 981 ****"
                style={{ width: "100%" }}
              />
            </Col>

            <Col span={4}>
              <span>Address</span>
              <Input
                style={{ width: "100%" }}
                placeholder="G-354,delhi"
              />
            </Col>
            <Col span={4}>
              <span>State</span>
              <Input
                style={{ width: "100%" }}
                placeholder="State"
              />
            </Col>
            <Col span={4}>
              <span>Country</span>
              <Input
                style={{ width: "100%" }}
                placeholder="Country"
              />
            </Col>
            <Col span={4}>
              <span>Pan No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="JHIND1234H"
              />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <span>GSTIN</span>
              <Input
                style={{ width: "100%" }}
                placeholder="32ABCDE0000A15"
              />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <MySelect
                label="Register Under MSME?"
                options={msme}
              />
            </Col>

            <Col span={4} style={{ marginTop: "10px" }}>
              <span>MSME Resigstered No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <MySelect
                label="Type of entity"
                options={type}
              />
            </Col>
            <Col span={4} style={{ marginTop: "10px" }}>
              <span>CIN</span>
              <Input
                style={{ width: "100%" }}
                placeholder="1234567899"
              />
            </Col>
            <Col span={24} style={{ marginTop: "30px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Btn
                  style={{
                    border: "1px solid #FF3333",
                    color: "#FF3333",
                    fontWeight: "500",
                  }}
                  title="Reset"
                />
                <Btn
                  style={{
                    backgroundColor: "#04B0A8",
                    color: "white",
                    marginLeft: "5px",
                  }}
                  title="Save"
                />
              </div>
            </Col>
          </Row>
        ) : (
          <Row gutter={10} style={{ margin: "10px" }}>
            <Col span={24}>
              <Table
                dataSource={dataSource}
                columns={columns}
              />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
