import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
        </form>

        <div id="usercard">
          <img src="https://avatars.githubusercontent.com/u/91203600?v=4" />
          <a target="_blank" href="https://github.com/leahball">
            <h3>Leah Ball</h3>
          </a>
          <p>Username: leahball</p>
          <p>Total Repos: 34 </p>
          <p>Total Followers: 17</p>
        </div>

        <div id="followers">
          <div className="follower">
            <img
              width="200px"
              src="https://avatars.githubusercontent.com/u/64448617?v=4"
            />
            <a target="_blank" href="https://github.com/nyamekyeannor">
              <p>nyamekyeannor</p>
            </a>
          </div>
          <div className="follower">
            <img
              width="200px"
              src="https://avatars.githubusercontent.com/u/64448617?v=4"
            />
            <a target="_blank" href="https://github.com/nyamekyeannor">
              <p>nyamekyeannor</p>
            </a>
          </div>
          <div className="follower">
            <img
              width="200px"
              src="https://avatars.githubusercontent.com/u/64448617?v=4"
            />
            <a target="_blank" href="https://github.com/nyamekyeannor">
              <p>nyamekyeannor</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
