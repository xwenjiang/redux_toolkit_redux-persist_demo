import { Button, Input, Form, Table } from "antd";
import { nanoid } from "@reduxjs/toolkit";
import { add } from "../store/slices/user-silce";
import React from "react";
import { useDispatch } from "react-redux";

function AddUser() {
  const dispatch = useDispatch();

  const handleFinish = (values) => {
    const { username, password, avatar } = values;
    dispatch(
      add({
        id: nanoid(),
        ...values,
      })
    );
  };

  return (
    <div>
      <Form title="Regist" onFinish={handleFinish}>
        <Form.Item name="username" label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input />
        </Form.Item>
        <Form.Item name="avatar" label="头像">
          <Input />
        </Form.Item>
        <Button type="danger" htmlType="submit">
          Regist
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
