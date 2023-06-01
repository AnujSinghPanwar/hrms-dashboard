"use client";
import React, { useEffect, useState } from "react";
import Btn from "../components/Btn";
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Layout,
  Menu,
  Row,
  Space,
} from "antd";
import moment from "moment";
import "../globals.css";
import { useRouter } from "next/navigation";

import {
  RiMenuFoldLine,
  RiMenuUnfoldLine,
} from "react-icons/ri";
import {
  UserOutlined,
  DownOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import {
  MdOutlineSpaceDashboard,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { ImMakeGroup } from "react-icons/im";
import { TbScreenShare } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import { logoutUser } from "yes/redux/loginSlice";
import { toast } from "react-toastify";
import { logout } from "../redux/loginSlice";

// Destructor
const { Header, Sider, Content } = Layout;

export default function Main({ children }) {
  const router = useRouter();
  const { user } = useSelector((state) => state.login);
  // console.log(user?.token);
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);

  const link = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: (
        <MdOutlineSpaceDashboard
          style={{ fontSize: "20px" }}
          className="icn"
        />
      ),
      onClick: () => router.push("/"),
    },
    {
      label: "Master",
      key: "master",
      icon: (
        <MdOutlineDashboardCustomize
          className="icn"
          style={{ fontSize: "20px" }}
        />
      ),

      children: [
        {
          label: "Create Payroll",
          key: "payroll",
          onClick: () => router.push("/dashboard/payroll"),
        },
        {
          label: "Statutory",
          key: "statutory",

          onClick: () =>
            router.push("/dashboard/statutory"),
        },
      ],
    },
    {
      label: "Employees",
      key: "expenses",
      icon: (
        <FaRegUser
          style={{ fontSize: "20px" }}
          className="icn"
        />
      ),

      children: [
        // {
        //   label: "Attendance",
        //   key: "attendance",
        //   onClick: () =>
        //     router.push(
        //       "/Dashboard/attendance"
        //     ),
        // },
        {
          label: "Add Employees",
          key: "add_employees",
          onClick: () => router.push("/employee/add"),
        },
        {
          label: "Employees",
          key: "employees",
          // disabled: true,
          onClick: () =>
            router.push("/Dashboard/employees"),
        },
        {
          label: "Separate",
          key: "separate",
          onClick: () => router.push("/emp/separate"),
        },
        {
          label: "Add",
          key: "add",
          disabled: true,
          onClick: () => router.push("/Dashboard/add"),
        },
        {
          label: "Edit",
          key: "edit",
          disabled: true,
          onClick: () =>
            router.push("/Dashboard/view_employee"),
        },
        {
          label: "Employee Status",
          key: "empstatus",
          disabled: true,
          onClick: () => router.push("/Dashboard/status"),
        },
        {
          label: "Employee View",
          key: "empview",
          // disabled: true,
          onClick: () => router.push("/employee/view"),
        },
      ],
    },
    {
      label: "Group & Header",
      key: "group-header",
      icon: (
        <ImMakeGroup
          style={{ fontSize: "20px" }}
          className="icn"
        />
      ),
      onClick: () => router.push("/header/group"),
    },
    {
      label: "Assets",
      key: "assets",
      icon: (
        <TbScreenShare
          style={{ fontSize: "20px" }}
          className="icn"
        />
      ),
      onClick: () => router.push("/asset/newAsset"),
    },
    {
      label: "Payrolls",
      key: "payroll",
      icon: (
        <BsCashStack
          style={{ fontSize: "20px" }}
          className="icn"
        />
      ),
      children: [
        {
          label: "Payroll Check",
          key: "payroll_check",
          onClick: () => router.push("/Dashboard/payroll"),
        },
        {
          label: "Pay Slip",
          key: "payslip",
          onClick: () => router.push("/slip/payslip"),
        },
        {
          label: "EPF/ESCI",
          key: "epf",
          disabled: true,
          onClick: () => router.push("/Dashboard/epf"),
        },
      ],
    },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push("./login");
  };

  const items = [
    {
      label: "Logout",
      key: "1",
      onClick: handleLogout,
    },
  ];
  useEffect(() => {
    // if (typeof window !== "undefined") {
    if (user?.token) {
      router.push("/");
      // toast.success(msg);
    } else {
      router.push("/login");
    }
    // }
  }, [user?.token]);
  return (
    <Layout className="container">
      {user?.token && (
        <Header
          className="header"
          style={{
            backgroundColor: "#fff",
            height: "50px",
          }}
        >
          <div className="headerMainDiv">
            <div
              className="btnStyle"
              onClick={() => setCollapse(!collapse)}
            >
              {collapse ? (
                <RiMenuUnfoldLine
                  style={{ fontSize: "28px" }}
                />
              ) : (
                <RiMenuFoldLine
                  style={{ fontSize: "28px" }}
                />
              )}
              <img
                className="imgLogo"
                src="./MainLogo.svg"
              />
            </div>
          </div>
          <div className="secondDiv">
            <CalendarOutlined
              style={{ marginRight: "5px" }}
            />
            {moment().format("DD MMM YYYY, ddd")}
            <Dropdown
              menu={{
                items,
                // onClick,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space style={{ marginLeft: "20px" }}>
                  {/* <Avatar icon={<user.tokenOutlined />} /> */}
                  <span>ANUJ </span>
                  <DownOutlined color="black" />
                </Space>
              </a>
            </Dropdown>
            {/* <Space direction="vertical" size={16}>
         <Avatar icon={<UserOutlined />} />
       </Space> */}
            {/* <img
         src="./user.png"
         style={{
           width: "30px",
           marginLeft: "10px",
           cursor: "pointer",
         }}
       />
       <h5
         style={{ cursor: "pointer" }}
         onClick={handleLogout}
       >
         Logout
       </h5> */}
          </div>
        </Header>
      )}
      <Layout>
        {user?.token && (
          <Sider collapsed={collapse} theme="light">
            <Menu mode="inline" items={link} />
          </Sider>
        )}
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
