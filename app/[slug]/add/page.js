"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Col, Input, Row, Upload } from "antd";
import MySelect from "yes/app/components/MySelect";
import Btn from "yes/app/components/Btn";
import { InboxOutlined } from "@ant-design/icons";

import { mainLink } from "../../redux/axiosLink";
import SingleDatePicker from "yes/app/components/SingleDatePicker";
import { toast } from "react-toastify";

const { Dragger } = Upload;

export default function page() {
  const [value, setValue] = useState(1);
  const [staffopt, setStaffopt] = useState([]);
  const [selectDate, setSelectDate] = useState("");
  const [empData, setEmpData] = useState({
    fName: "",
    lName: "",
    mob: "",
    staff: "",
    gender: "",
    aadhar: "",
  });

  // console.log(empData, selectDate);

  const props = {
    name: "file",
    multiple: true,
    action:
      "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(
          `${info.file.name} file uploaded successfully.`
        );
      } else if (status === "error") {
        message.error(
          `${info.file.name} file upload failed.`
        );
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const optGender = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
    { label: "Transgender", value: "T" },
    { label: "Other", value: "O" },
  ];

  const getPayroll = async () => {
    const { data } = await mainLink.post(
      "/hrms/fetch_contractor"
    );
    const a = [];
    data.map((ad) =>
      a.push({ label: ad.text, value: ad.id })
    );
    setStaffopt(a);
  };

  const saveEmployee = async () => {
    if (!empData.fName) {
      toast.error("Please fill name");
    } else if (!empData.lName) {
      toast.error("Please fill last name");
    } else if (!selectDate) {
      toast.error("dob must be");
    } else if (!empData.mob) {
      toast.error("contact must be fill");
    } else if (!empData.staff) {
      toast.error("please fill staff type");
    } else if (!empData.gender) {
      toast.error("gender must be select");
    } else if (!empData.aadhar) {
      toast.error("please add aadhar number...");
    } else {
      const { data } = await mainLink.post(
        "/hrms/v2/addEmp",
        {
          mobile: empData?.mob,
          f_name: empData?.fName,
          l_name: empData?.lName,
          dob: selectDate,
          payroll: empData?.staff,
          aadhaar: empData?.aadhar,
          gender: empData?.gender,
        }
      );
      console.log(data);
      if (data.code == 200) {
        resetFunction();
        toast.success(data.message);
      } else if (data.code == 500) {
        console.log(data.message.msg);
        toast.error(data.message.msg);
      }
    }
  };

  const resetFunction = () => {
    // console.log("first");
    setEmpData({
      fName: "",
      lName: "",
      mob: "",
      staff: "",
      gender: "",
    });
    setSelectDate("");
  };

  useEffect(() => {
    getPayroll();
  }, []);
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
            Add Employee
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
            Bulk Contact
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
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <span>Single Employee</span>
              <span className={styles.lin}>
                View Employee
              </span>
            </Col>
            <Col span={4}>
              <span>Fisrt Name</span>
              <Input
                placeholder="Name"
                style={{ width: "100%" }}
                value={empData?.fName}
                onChange={(e) =>
                  setEmpData((empData) => {
                    return {
                      ...empData,
                      fName: e.target.value,
                    };
                  })
                }
              />
            </Col>
            <Col span={4}>
              <span>Last Name</span>
              <Input
                placeholder="Last name"
                style={{ width: "100%" }}
                value={empData?.lName}
                onChange={(e) =>
                  setEmpData((empData) => {
                    return {
                      ...empData,
                      lName: e.target.value,
                    };
                  })
                }
              />
            </Col>
            <Col span={4}>
              <span>Date of birth</span>
              <SingleDatePicker setDate={setSelectDate} />
            </Col>
            <Col span={4}>
              <span>Mobile No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="Mobile no"
                value={empData?.mob}
                onChange={(e) =>
                  setEmpData((empData) => {
                    return {
                      ...empData,
                      mob: e.target.value,
                    };
                  })
                }
              />
            </Col>
            <Col span={4}>
              <MySelect
                placeholder="Payroll Type Select"
                options={staffopt}
                label="Payroll"
                value={empData?.staff}
                onChange={(e) =>
                  setEmpData((empData) => {
                    return { ...empData, staff: e };
                  })
                }
              />
            </Col>
            <Col span={4}>
              <MySelect
                placeholder="Select Gender"
                label="Gender"
                options={optGender}
                value={empData?.gender}
                onChange={(e) =>
                  setEmpData((empData) => {
                    return {
                      ...empData,
                      gender: e,
                    };
                  })
                }
              />
            </Col>

            <Col span={4} style={{ marginTop: "10px" }}>
              <span>Aadhar No</span>
              <Input
                style={{ width: "100%" }}
                placeholder="32145698745"
                value={empData?.aadhar}
                onChange={(e) =>
                  setEmpData((empData) => {
                    return {
                      ...empData,
                      aadhar: e.target.value,
                    };
                  })
                }
              />
            </Col>
            <Col span={24} style={{ marginTop: "20px" }}>
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
                  onClick={resetFunction}
                  title="Reset"
                />
                <Btn
                  onClick={saveEmployee}
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
            <Col span={11}>
              <Row>
                <Col
                  span={24}
                  style={{
                    backgroundColor: "#E5FFFE",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <span>Bulk Employee Upload</span>
                </Col>
                <Col span={10}>
                  <MySelect
                    label="Content Type"
                    option={[
                      { label: "MS-STAFF", value: "staff" },
                      {
                        label: "MS-Worker",
                        value: "worker",
                      },
                    ]}
                  />
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "20px" }}
                >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to
                      upload
                    </p>
                    <p className="ant-upload-hint">
                      CSV Files
                    </p>
                  </Dragger>
                </Col>
              </Row>
            </Col>

            <Col span={11} offset={2}>
              <Row>
                <Col
                  span={24}
                  style={{
                    backgroundColor: "#E5FFFE",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <span>Bulk Salary Upload</span>
                </Col>

                <Col span={10}>
                  <MySelect
                    label="Content Type"
                    option={[
                      { label: "MS-STAFF", value: "staff" },
                      {
                        label: "MS-Worker",
                        value: "worker",
                      },
                    ]}
                  />
                </Col>
                <Col span={10}>
                  <MySelect
                    label="Structure"
                    option={[
                      { label: "MS-STAFF", value: "staff" },
                      {
                        label: "MS-Worker",
                        value: "worker",
                      },
                    ]}
                  />
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "20px" }}
                >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to
                      upload
                    </p>
                    <p className="ant-upload-hint">
                      CSV Files
                    </p>
                  </Dragger>
                </Col>
                <Col
                  span={24}
                  style={{ marginTop: "20px" }}
                >
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
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
}
