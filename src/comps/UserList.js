import { Button, Space, Table } from "antd";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser, getUsers } from "../store/slices/user-silce";
import { PAGE_SIZE } from "../tools/constants";
function UserList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  const total = useSelector((state) => state.user.total);
  const [loading, setLoading] = useState(false);
  const changePage = (current) => {
    setLoading(true);
    dispatch(getUsers(current)).then(() => {
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    dispatch(getUsers(1, PAGE_SIZE)).then(() => {
      setLoading(false);
    });
  }, [dispatch]);
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
            <Button onClick={() => navigate(`/editUser/${record._id}`)}>
              修改
            </Button>
            <Button
              type="danger"
              onClick={() => {
                dispatch(deleteUser(record._id));
              }}
            >
              删除
            </Button>
            <Button
              type="link"
              onClick={() => navigate(`/users/${record._id}`)}
            >
              查看详情
            </Button>
          </Space>
        );
      },
    },
  ];
  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: () => `共${total}条`,
    pageSize: PAGE_SIZE,
    // current: current,
    total: total,

    onChange: (current) => changePage(current),
  };
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
        rowKey={(record) => record._id}
        pagination={paginationProps}
        loading={loading}
      />
    </>
  );
}

export default UserList;
