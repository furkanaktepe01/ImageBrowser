import React from "react";

class SearchBar extends React.Component {
    
  state = { term: "" };

  onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
           <div className="field">
              <label>Image Search</label>
              <input 
                type="text"
                value={this.state.term} // then the value is the value of the term which has got set before rerendering
                onChange={e => this.setState({ term: e.target.value })} // after user change occurs, term gets set, then render gets invoked again
              />
           </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;