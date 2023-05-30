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
  Button,
} from "antd";
import MySelect from "yes/app/components/MySelect";
import Btn from "yes/app/components/Btn";
import { EyeOutlined } from "@ant-design/icons";
import { HiOutlineDownload } from "react-icons/hi";
import { MdOutlineQuestionMark } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import BtnComponent from "yes/app/components/BtnComponent";

const { Dragger } = Upload;

export default function page() {
  const [value, setValue] = useState(1);

  const dataSource = [
    {
      ref_id: "HHSG123P",
      pay_slip: "HHSG123P",
      cont: "MS-Staff",
      emp_id: "85454854646",
      name: "Anuj Panwar",
      action: (
        <HiOutlineDownload size="24px" color="#04B0A8" />
      ),
    },
  ];

  const columns = [
    {
      title: "Bank Ref Id",
      dataIndex: "ref_id",
      key: "ref_id",
    },
    {
      title: "Pay Slip",
      dataIndex: "pay_slip",
      key: "pay_slip",
    },
    {
      title: "Contractor",
      dataIndex: "cont",
      key: "cont",
    },
    {
      title: "Emp ID",
      dataIndex: "emp_id",
      key: "emp_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const paySource = [
    {
      month: "Aug-2022",
      cont: "MS-Staff",
      emp_id: "85454854646",
      name: "Anuj Panwar",
      action: (
        <HiOutlineDownload size="24px" color="#04B0A8" />
      ),
    },
  ];

  const paycolumns = [
    {
      title: "Month",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "Contractor",
      dataIndex: "cont",
      key: "cont",
    },
    {
      title: "Emp ID",
      dataIndex: "emp_id",
      key: "emp_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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
            Bank Ref Map
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
            Genrate Pay Slip
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
            <Col span={4}>
              <MySelect
                placeholder="Select"
                option={[
                  { label: "Mapped", value: "mapped" },
                  {
                    label: "Upload",
                    value: "upload",
                  },
                ]}
              />
            </Col>
            <Col span={4}>
              <MySelect
                placeholder="Contractor"
                option={[
                  { label: "Ms-Staff", value: "staff" },
                  { label: "Ms-Worker", value: "worker" },
                  { label: "ORSH", value: "orsh" },
                  { label: "Hi Tech", value: "hi_tech" },
                  { label: "Genix", value: "genix" },
                  { label: "Krishna", value: "krishna" },
                  { label: "Tannu", value: "tannu" },
                ]}
              />
            </Col>
            <Col span={4}>
              <DatePicker style={{ width: "100%" }} />
            </Col>
            <Col span={1}>
              <Button
                style={{
                  marginLeft: "5px",
                  background: "#04B0A8",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                Fetch
              </Button>
            </Col>
            <Col span={2} offset={9}>
              <BtnComponent
                shape="circle"
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
                icon={<BsInfoLg size="24px" />}
              />
              <BtnComponent
                shape="circle"
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
                icon={<MdOutlineQuestionMark size="24px" />}
              />
            </Col>
            <Col span={24} style={{ marginTop: "10px" }}>
              <Table
                dataSource={dataSource}
                columns={columns}
              />
            </Col>
          </Row>
        ) : (
          <Row gutter={10} style={{ margin: "10px" }}>
            <Col span={2}>
              <Input placeholder="Jan" />
            </Col>
            <Col span={2}>
              <Input placeholder="Dec" />
            </Col>
            <Col span={4}>
              <MySelect
                placeholder="Contractor"
                option={[
                  { label: "Ms-Staff", value: "staff" },
                  { label: "Ms-Worker", value: "worker" },
                  { label: "ORSH", value: "orsh" },
                  { label: "Hi Tech", value: "hi_tech" },
                  { label: "Genix", value: "genix" },
                  { label: "Krishna", value: "krishna" },
                  { label: "Tannu", value: "tannu" },
                ]}
              />
            </Col>
            <Col span={4}>
              <DatePicker style={{ width: "100%" }} />
            </Col>
            <Col span={1}>
              <Button
                style={{
                  marginLeft: "5px",
                  background: "#04B0A8",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                fetch
              </Button>
            </Col>
            <Col span={4} offset={7}>
              <BtnComponent
                shape="circle"
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
                icon={<HiOutlineDownload size="24px" />}
              />
              <BtnComponent
                shape="circle"
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
                icon={<BsInfoLg size="24px" />}
              />
              <BtnComponent
                shape="circle"
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
                icon={<MdOutlineQuestionMark size="24px" />}
              />
              {/* <Button
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                <HiOutlineDownload size="24px" />
              </Button>
              <Button
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                <BsInfoLg size="24px" />
              </Button>
              <Button
                style={{
                  background: "#04B0A8",
                  color: "#fff",
                  marginLeft: "10px",
                }}
              >
                <MdOutlineQuestionMark size="24px" />
              </Button> */}
            </Col>
            <Col span={24} style={{ marginTop: "10px" }}>
              <Table
                dataSource={paySource}
                columns={paycolumns}
              />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
