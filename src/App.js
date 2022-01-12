import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "leahball",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/91203600?v=4",
      html_url: "https://github.com/leahball",
      name: "Leah Ball",
      login: "leahball",
      public_repos: 34,
      followers: 10,
    },
    followers: [
      {
        login: "bfdbdfb",
        avatar_url: "https://avatars.githubusercontent.com/u/64448617?v=4",
        html_url: "https://github.com/nyamekyeannor",
      },
      {
        login: "nyamekyeannor",
        avatar_url: "https://avatars.githubusercontent.com/u/64448617?v=4",
        html_url: "https://github.com/nyamekyeannor",
      },
      {
        login: "nyamekyeannor",
        avatar_url: "https://avatars.githubusercontent.com/u/64448617?v=4",
        html_url: "https://github.com/nyamekyeannor",
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Github Info</h1>
        <form>
          <input placeholder="Github Handle" />
          <button>Search</button>
        </form>

        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
