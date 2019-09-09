import React, { Component } from 'react';
import massiv from './movies.json';
import MovieGrid from './MovieGrid/MovieGrid';
import SeachBar from './SeachBar/SeachBar';

const filterMovies = (items, filter) => {
  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(filter.toLowerCase()),
  );
  return filtered;
};

class App extends Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;
    const filteredMov = filterMovies(massiv, input);

    return (
      <>
        <SeachBar value={input} onChange={this.handleInputChange} />
        <MovieGrid items={filteredMov} />
      </>
    );
  }
}

export default App;
