import React from 'react';
// import React, { header } from 'header.component.js';
import logo from './logo.svg';
import './App.css';
// import './js/owl.carousel.min.js';
/*
هنا تعملي امبروت لكلاس الكومبونينت  الي عملتي 
من الملف الي حفضتي بي الكلاط
*/
// import 'header.component.js';

import {Three} from "./threeThings.js";


import  {Header} from "./myHeader.js";
import {Slider} from "./slider.js";
import {Footer} from "./footer.js";


// import '../public/css/bootstrap.min';




function App() {
  return (
    <div className="App">
      <Header/>
      {/* <button class="btn btn-success">ok</button> */}
      <Slider/>
      <Three/>
      <Footer/>
    </div>
  );
}

export default App;
