import { Button, Space, Table } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { del } from "../store/slices/user-silce";

function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  const columns = [
    {
      title: "姓名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "密码",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "操作",
      render: (record) => {
        return (
          <Space>
            <Button onClick={() => navigate(`/editUser/${record.id}`)}>
              修改
            </Button>
            <Button
              type="danger"
              onClick={() => {
                dispatch(del(record.id));
              }}
            >
              删除
            </Button>
            <Button type="link" onClick={() => navigate(`/users/${record.id}`)}>
              查看详情
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <Button
        onClick={() => {
          navigate("/adduser");
        }}
      >
        添加新用户
      </Button>
      <Table
        dataSource={users}
        columns={columns}
        rowKey={(record) => record.id}
      />
    </>
  );
}

export default UserList;
