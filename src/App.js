import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
import axios from "axios";
import styled from "styled-components";
import styles from "./index.css";

const Wrapper = styled.div`
  background-color: #e8ea78;
`;

const HeaderStyled = styled.header`
  background-color: #2c3742;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-family: "Rubik", sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 3rem;
    color: white;
    flex-grow: 2;
  }
  form {
    flex-grow: 1;
    input {
      padding: 10px;
    }
    button {
      padding: 10px;
    }
  }
`;

class App extends React.Component {
  state = {
    currentUser: "leahball",
    user: {},
    followers: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          user: resp.data,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      axios
        .get(`https://api.github.com/users/${this.state.currentUser}/followers`)
        .then((resp) => {
          this.setState({
            ...this.state,
            followers: resp.data,
          });
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.currentUser}`)
      .then((resp) => {
        this.setState({
          ...this.state,
          user: resp.data,
        });
      });
  };

  render() {
    return (
      <Wrapper>
        <HeaderStyled>
          <h1>Github Info</h1>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="Github Handle" onChange={this.handleChange} />
            <button>Search</button>
          </form>
        </HeaderStyled>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </Wrapper>
    );
  }
}

export default App;
