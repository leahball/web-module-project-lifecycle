import React from "react";
import styled from "styled-components";

const FollowerName = styled.div`
  background-color: #fddbcd;
  p {
    font-size: 2rem;
  }
`;

class Follower extends React.Component {
  render() {
    const { follower } = this.props;
    return (
      <FollowerName>
        <img width="200px" src={follower.avatar_url} />
        <a target="_blank" href={follower.html_url}>
          <p>{follower.login}</p>
        </a>
      </FollowerName>
    );
  }
}
export default Follower;
