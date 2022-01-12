import React from "react";
import styled from "styled-components";

const Usercard = styled.div`
  background-color: #e843eb;
  display: flex;
  flex-direction: row;
  padding: 2%;
`;
const Userinfo = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  font-family: Rubik;
  h3 {
    font-size: 3rem;
    color: white;
  }
  p {
    font-weight: 500;
    font-size: 2rem;
  }
`;

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Usercard>
        <img width="300px" src={user.avatar_url} />
        <Userinfo>
          <a target="_blank" href={user.html_url}>
            <h3>{user.name}</h3>
          </a>
          <p>Username: {user.login}</p>
          <p>Total Repos: {user.public_repos} </p>
          <p>Total Followers: {user.followers}</p>
        </Userinfo>
      </Usercard>
    );
  }
}
export default User;
