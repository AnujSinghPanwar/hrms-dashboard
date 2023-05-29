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
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

export default function page() {
  const [value, setValue] = useState(1);

  const dataSource = [
    {
      sno: "1",
      satuary: "March 01, 2023",
      action: (
        <div
          style={{
            width: "15%",
            justifyContent: "space-evenly",
            display: "flex",
          }}
        >
          <img src="../view.svg" />
          <img src="../edit.svg" />
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
      title: "Statutory(s)",
      dataIndex: "satuary",
      key: "satuary",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const optValue = [{ label: "MS-Staff", value: "staff" }];
  const optGender = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
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
            Statutory
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
            Statutory View
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
              <span>Statutory Structure</span>
            </Col>
            <Col span={4}>
              <span>With Effect From</span>
              <Input
                placeholder="Ms-Staff"
                style={{ width: "100%" }}
              />
            </Col>

            <Col
              span={24}
              style={{
                backgroundColor: "#E5FFFE",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              <span>Employer Contribution</span>
            </Col>
            <Col span={4}>
              <span>EPF Contribution</span>
              <Input
                placeholder="EPF Contribution"
                style={{ width: "100%" }}
              />
            </Col>
            {/* <Col span={4}>
              <span>Date of birth</span>
              <DatePicker style={{ width: "100%" }} />
            </Col> */}
            <Col span={4}>
              <span>Admin Charged</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            <Col span={4}>
              <span>Employer ESI</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            <Col span={4}>
              <span>Insurance</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            <Col span={4}>
              <span>Employer ESP</span>
              <Input
                style={{ width: "100%" }}
                placeholder="3405"
              />
            </Col>
            <Col span={4}>
              <span>Employer EDLI</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            {/* <Col span={4}>
              <MySelect
                label="Contact Type"
                options={optValue}
              />
            </Col>
            <Col span={4}>
              <MySelect
                label="Gender"
                options={optGender}
              />
            </Col> */}

            <Col
              span={24}
              style={{
                backgroundColor: "#E5FFFE",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              <span>Employee Contribution</span>
            </Col>
            <Col span={4}>
              <span>Employer PF</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            <Col span={4}>
              <span>Employer ESI</span>
              <Input
                style={{ width: "100%" }}
                placeholder="345"
              />
            </Col>
            {/* 
            <Col span={4} style={{ marginTop: "10px" }}>
              <span>Addhar No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="Addhar no"
              />
            </Col> */}
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
            {/* <Col
              span={24}
              style={{
                backgroundColor: "#E5FFFE",
                padding: "10px",
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              <span>View Structure</span>
            </Col> */}
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
