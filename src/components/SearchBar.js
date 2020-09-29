import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search Videos</label>
            <input type="text" value={this.state.term} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
