import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
    });
    // console.log(this.state.videos);
  };
  render() {
    return (
      <div className="ui container">
        <h1>I have {this.state.videos.length} videos</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList/>
      </div>
    );
  }
}

export default App;
