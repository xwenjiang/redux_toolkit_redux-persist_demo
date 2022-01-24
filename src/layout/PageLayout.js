import React from "react";
import { Layout, Menu,  } from "antd";
import {

  MailOutlined,
 
} from "@ant-design/icons";
import CustomLink from "../tools/CustomLink";

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;


function PageLayout(props) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <SubMenu key="sub1" icon={<MailOutlined />} title="资源管理">
            <Menu.ItemGroup key="g1" title="用户管理">
              <Menu.Item key="1"><CustomLink to={'/'}>用户列表</CustomLink></Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="帖子管理">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default PageLayout;
