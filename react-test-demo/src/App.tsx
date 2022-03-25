import React from "react";
import Header from "./components/header";
import './app.scss';
import 'tachyons';
import Headline from "./components/headline";

function App() {
  return (
    <div >
     <Header/>
     <Headline header='Hello' desc='desc' />
    </div>
  );
}


export default App;