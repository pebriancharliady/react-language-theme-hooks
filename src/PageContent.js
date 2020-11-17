import React, { Component } from 'react'
import {ThemeContext} from './contexts/Theme.context'

class PageContent extends Component {
    static contextType = ThemeContext
    constructor(props) {
        super(props);
    }
    render() {
        const {isDarkMode} = this.context
        const styles = {
            backgroundColor: isDarkMode ? "#353535" : "white",
            width: "100vw",
            height: "100vh"
        }
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export default PageContent;