import React from "react";
import Search from "./search/Search";
import { kendra, indexId, errors, s3 } from "./services/Kendra";
import { facetConfiguration } from "./search/configuration";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Search
        kendra={kendra}
        s3={s3}
        indexId={indexId}
        facetConfiguration={facetConfiguration}
      />
    </div>
  );
}

export default App;
