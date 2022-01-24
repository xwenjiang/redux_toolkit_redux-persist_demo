import { Button, Input, Form, notification, Table, message } from "antd";
import "../styles/formStyle.css";
import { addUser } from "../store/slices/user-silce";
import React from "react";
import { useDispatch } from "react-redux";
const completedMessage = () =>
  notification.open({
    message: "康菲锅瑞深！",
    description: "添加成功,您可以去用户列表去瞅一瞅",
    onClick: () => {
      console.log("添加成功");
    },
  });
function AddUser() {
  const dispatch = useDispatch();
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const handleFinish = (values) => {
    const { username, age, avatar } = values;

    dispatch(
      addUser({
        avatar: avatar ? avatar : "https://picsum.photos/id/237/200/300",
        username,
        age,
      })
    ).then((res) => {
      const { status } = res.payload;
      if (status === "1") {
        completedMessage();
      }
    });
  };

  return (
    <div className="addform">
      <Form title="Regist" onFinish={handleFinish} {...formItemLayout}>
        <Form.Item
          name="username"
          label="用户名"
          rules={[
            {
              required: true,
              message: "请输入姓名!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="年龄"
          rules={[
            { required: true, message: "请输入年龄!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (parseInt(value) > 3 && parseInt(value) < 100) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("年龄要大于三岁，小于100岁"));
              },
            }),
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="avatar"
          label="头像"
          help="可以不输入；后台会默认添加一个默认头像"
          rules={[{ required: false }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="danger">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUser;
