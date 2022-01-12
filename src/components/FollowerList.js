import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div id="followers">
        <Follower />
        <Follower />
        <Follower />
      </div>
    );
  }
}

export default FollowerList;
