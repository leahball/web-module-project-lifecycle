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
        <img src="https://avatars.githubusercontent.com/u/91203600?v=4" />
        <a target="_blank" href="https://github.com/leahball">
          <h3>Leah Ball</h3>
        </a>
        <p>Username: leahball</p>
        <p>Total Repos: 34 </p>
        <p>Total Followers: 17</p>
      </div>
    );
  }
}

export default App;
