import React from "react";
import Follower from "./Follower";
import styled from "styled-components";

const FollowerGrid = styled.div`
  background-color: #e8ea78;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 2%;
  gap: 10px;
  gap: 10px 20px;
  row-gap: 10px;
  column-gap: 20px;
  p {
    font-size: 2rem;
  }
`;

class FollowerList extends React.Component {
  render() {
    return (
      <FollowerGrid>
        {this.props.followers.map((follower) => {
          return <Follower key={follower.login} follower={follower} />;
        })}
      </FollowerGrid>
    );
  }
}

export default FollowerList;
