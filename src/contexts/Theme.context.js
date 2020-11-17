import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: false };
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleDarkMode: this.toggleDarkMode }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
