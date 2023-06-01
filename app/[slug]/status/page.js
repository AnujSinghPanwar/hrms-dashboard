"use client";
import {
  Button,
  Col,
  Divider,
  Input,
  Row,
  Table,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import React from "react";
import MySelect from "yes/app/components/MySelect";
const { TextArea } = Input;
const { Dragger } = Upload;

const page = () => {
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

  const source = [
    {
      assets: "Laptop",
      sno: "USVDHND4598HD98566",

      status: (
        <MySelect
          option={[{ label: "Returned", value: "return" }]}
        />
      ),
    },
  ];
  const columns = [
    {
      title: "Assets Assign",
      dataIndex: "assets",
      key: "assets",
    },
    {
      title: "Assets Serial Number",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <div style={{ height: "100%", padding: "10px" }}>
      <div
        style={{
          height: "100%",
          border: "1px solid #04b0a8",
          background: "white",
          borderRadius: "5px",

          borderRadius: "5px",
        }}
      >
        <Row gutter={10} style={{ margin: "10px" }}>
          <Col
            span={24}
            style={{
              backgroundColor: "#E5FFFE",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "15px",
            }}
          >
            <span>Employee Status</span>
          </Col>
          <Col span={4}>
            <span>Employee Id</span>
            <Input
              placeholder="Id"
              style={{ width: "100%" }}
            />
          </Col>
          <Col span={2}>
            <span>Fetch</span>
            <Button type="primary" block>
              Search
            </Button>
          </Col>
          <Divider />
          <Col span={4}>
            <span>Emp's Name:RAM</span>
          </Col>
          <Col span={4}>
            <span>Designation:Software Developer</span>
          </Col>
          <Col span={4}>
            <span>Father's Name:SHAAM</span>
          </Col>
          <Col span={4}>
            <span>Contract Type:MS-Staff</span>
          </Col>
          <Divider />
          <Col span={4}>
            <MySelect
              title="Status"
              option={[
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
              ]}
            />
          </Col>
          <Col span={6}>
            <span>Remark</span>
            <TextArea
              cols={10}
              rows={4}
              placeholder="Description"
            />
          </Col>
          <Col span={6}>
            <span>Upload File</span>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">CSV Files</p>
            </Dragger>
          </Col>
          <Divider />
          <Col span={24}>
            <Table dataSource={source} columns={columns} />
          </Col>
          <Divider />
          <Col
            span={24}
            style={{
              backgroundColor: "#E5FFFE",
              padding: "10px",
              marginTop: "20px",
              marginBottom: "15px",
            }}
          >
            <Button type="primary">Save</Button>
            <Button
              type="default"
              style={{ marginLeft: "5px" }}
            >
              Save
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default page;
