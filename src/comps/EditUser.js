import { Button, Form, Input, message, Typography } from "antd";
import { editUser } from "../store/slices/user-silce";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const { Title } = Typography;
function EditUser() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) =>
    state.user.users.find((item) => item._id === userId)
  );
  const handleSaveUser = (user) => {
    dispatch(editUser({ _id: userId, ...user })).then((res) => {
      const { status } = res.payload;
      if (status === "1") {
        message.success("恭喜您修改成功");
      }
    });
  };
  return (
    <div>
      <Title level={2}>{"编辑用户"}</Title>
      <Form
        initialValues={{
          username: user.username,
          age: user.age,
          avatar: user.avatar,
        }}
        onFinish={handleSaveUser}
      >
        <Form.Item name={"username"} label="用户名">
          <Input />
        </Form.Item>
        <Form.Item name={"age"} label="年龄" rules={[
            { required: true, message: "请输入年龄!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (parseInt(value) > 3 && parseInt(value) < 100) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("年龄要大于三岁，小于100岁"));
              },
            }),
          ]}>
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
