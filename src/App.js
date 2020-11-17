import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/Theme.context";
import { LanguageProvider } from "./contexts/Language.context";

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider>
          <LanguageProvider>
            <PageContent>
              <Navbar />
              <Form />
            </PageContent>
          </LanguageProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
