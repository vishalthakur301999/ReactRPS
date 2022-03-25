import React from "react";
import Header from "./components/header";
import './app.scss'
import Headline from './components/headline'


const tempArr = [{
  fName: "Nishant",
  lName: "Gupta",
  email: "nishant@email.com",
  age: 32,
  onlineStatus: true
}]

function App() {
  return (
    <div >
     <Header/>
     <section className="main">
       <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>

     </section>
    </div>
  );
}

// npm i node-sass

export default App;
