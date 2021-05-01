import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import { notes } from "../notes"

function App() {

  const noteItems= notes.map( entry => 
    <Note 
      key={entry.key} 
      title={entry.title} 
      content={entry.content}
    />
  )

  return (
    <div>
      <Header />
      {noteItems}
      <Footer />
    </div>
  );
}

export default App;
