import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../apis/YouTube";

class App extends React.Component {
  state = {
    videos: [],
  };

  onFormSubmit = async (term) => {
    const response = await YouTube.get("/search", {
      params: {
        q: term,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
