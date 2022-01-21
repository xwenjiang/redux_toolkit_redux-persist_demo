import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Skeleton } from "antd";
function SingleUserPage() {
  const { userId } = useParams();
  const [loading, setloading] = useState(true);
  const user = useSelector((state) =>
    state.user.users.find((item) => item.id === userId)
  );

  return (
    <div style={{ background: "#ececec", height: "100%" }}>
      <Card
        hoverable={true}
        bordered
        style={{ width: 400, margin: "0 auto" }}
        cover={
          <img
            alt="example"
            onLoad={() => {
              console.log("loading completed...");
              setloading(false);
            }}
           
            src={user.avatar}
            loading="lazy"
          />
        }
      >
        <Skeleton loading={loading} avatar active>
          <Card.Meta
            title={user.username}
            description={user.password}
            loading={loading.toString()}
          >
            {user.username}
          </Card.Meta>
        </Skeleton>
      </Card>
    </div>
  );
}

export default SingleUserPage;
