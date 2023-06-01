"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Input, Button } from "antd";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

import { toast } from "react-toastify";
import {
  signInAuth,
  signInUser,
} from "../redux/loginSlice";
import { useDispatch, useSelector } from "react-redux";

export default function page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, msg } = useSelector((state) => state.login);
  console.log(msg);

  const [inpVal, setInpVal] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (name, value) => {
    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };

  const handleFunction = () => {
    const { username, password } = inpVal;
    dispatch(signInAuth({ username, password }));

    // console.log("first");
    // toast.error(msg);
  };
  const logout = () => {
    dispatch(logoutUser());
  };
  useEffect(() => {
    if (user) {
      toast.success(msg);
      router.push("/");
    } else {
      router.push("/login");
    }
  }, [user]);

  return (
    <div className={styles.loginDiv}>
      <Row className={styles.mainRow}>
        {/* First Col */}
        <Col span={9} className={styles.firstCol}>
          <Row
            style={{ height: "100%" }}
            justify="space-around"
            align="middle"
          >
            <Col span={24}>
              <div className={styles.mainLogo}>
                <img width={200} src="./MainLogo.svg" />
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.mainTitle}>
                <span
                //  onClick={logout}
                >
                  The simplest way to manage your workforce.
                </span>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.img}>
                <img src="./loginGroup.svg" width={380} />
              </div>
            </Col>
          </Row>
        </Col>
        {/* Second Col */}
        <Col span={15} className={styles.secondCol}>
          <Row
            className={styles.secondRow}
            justify="center"
            align="middle"
          >
            <Col
              span={24}
              style={{
                position: "absolute",
                top: "80px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                <p className={styles.heading}>
                  Welcome Back
                </p>
                <p>
                  Start managing your employees details.
                </p>
              </div>
            </Col>
            <Col span={24}>
              <div
                style={{
                  margin: "auto",
                  textAlign: "center",
                  width: "30%",
                }}
              >
                <span className={styles.loginText}>
                  Log In
                </span>
                <Input
                  placeholder="Email id"
                  style={{ marginTop: "20px" }}
                  value={inpVal.username}
                  onChange={(e) =>
                    inputHandler("username", e.target.value)
                  }
                  suffix={<UserOutlined />}
                  size="large"
                />
                <Input.Password
                  placeholder="Password"
                  size="large"
                  value={inpVal.password}
                  onChange={(e) =>
                    inputHandler("password", e.target.value)
                  }
                  style={{
                    marginTop: "5px",
                    marginBottom: "15px",
                  }}
                />
                <Button
                  block
                  type="primary"
                  onClick={handleFunction}
                >
                  Log In
                </Button>
                <Link href={"/forgot_password"}>
                  <p
                    // onClick={() => router.push("./main")}
                    className={styles.forgotLink}
                  >
                    Forgot Password?
                  </p>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
