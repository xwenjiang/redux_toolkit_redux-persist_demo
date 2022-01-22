import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Skeleton } from "antd";
function SingleUserPage() {
  const { userId } = useParams();
  const [loading, setloading] = useState(false);
  const user = useSelector((state) =>
    state.user.users.find((item) =>item. _id === userId)
  );
console.log('user:',user.avatar)
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
            description={user.age}
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
