import { useState } from "react";
import Themetoggle from "./Themetoggle";
import SearchForm from "./SearchForm";
import Gallery from "./Gallery";

function App() {
  return (
   <main>
    <Themetoggle></Themetoggle>
    <SearchForm></SearchForm>
    <Gallery></Gallery>
   </main>
  );
}

export default App;
