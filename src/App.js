import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/Theme.context";
import { LanguageProvider } from "./contexts/Language.context";

function App() {
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

export default App;
