import { Button, Form, Input, Typography } from "antd";
import { edit } from "../store/slices/user-silce";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const { Text, Link, Title } = Typography;
function EditUser() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((item) => item.id === userId)
  );
  const handleSaveUser = (user) => {
    dispatch(edit({ id: userId, ...user }));
  };
  return (
    <div>
      <Title level={2}>{"编辑用户"}</Title>
      <Form
        initialValues={{ username: user.username, password: user.password,avatar:user.avatar }}
        onFinish={handleSaveUser}
      >
        <Form.Item name={"username"} label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name={"password"} label="密码">
          <Input />
        </Form.Item>
        <Form.Item name={"avatar"} label="头像">
          <Input />
        </Form.Item>
        <Button htmlType="submit">保存</Button>
      </Form>
    </div>
  );
}

export default EditUser;
