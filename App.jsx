// import React from 'react'
// import { Component } from 'react';
// //import Account from './function based/Account';
// // import About from './function based/About';
// // import Menu from './function based/Menu';
// // import Home from './function based/Home';
// //import Help from './function based/Help';
// //import Location from './function based/Location';
// // import Logo from './function based/Logo';
// // import Search from './function based/Search';
// //import Footer from './function based/Footer';
// // import Content from './function based/Content';
// import Menu from './class based components/Menu';
// import Shipping from './class based components/Shipping';
// import Cart from './class based components/Cart';
// // import Search from './function based components/Search';
// import Home from './class based components/Home';
// import Categories from './class based components/Categories';
// import MyOrders from './class based components/MyOrders';
// import About from './class based components/About';
// import Content from './class based components/Content';
// import Search from './class based components/Search';

// // const App = () => {
// //   return (
// //     <>
// //     <div>App</div>
//     {/* <Account/>
//     <About/>
//     <Menu/>
//     <Home/>
//     <Help/>
//     <Location/>
//     <Logo/>
//     <Search/>
//     <Footer/>
//     // <Content/> */}

  
//     class App extends Component{
//       render(){
//         return
//         <>
//          <div>App</div>
//         <Menu/>
//     <Shipping/>
//     <Cart/>
//     <Search/>
//     <Home/>
//     <Categories/>
//     <MyOrders/>
//     <About/>
//     <Content/>
//     </>
    
//       }
//     }
//     export default App

//function based props
import React from "react"; 
import Nav from './functionbasedprops/Nav';
import pic from "./picture.png"
 const App=()=>{
  return(
    <>
    <Nav data="prashika" number={1012} boolean={true} data2={null} />
<img src={pic} alt="howl" />
    <img src="https://i.pinimg.com/originals/89/e1/07/89e10752c2aba7f969bc6e7e78047bf9.png" alt="" />
    </>
  )
 }
 export default App

//  class based props

// import React  from "react";
// import {Component} from "react";
// import Nav from './classbasedprops/Nav';

// class App extends Component{
//   render(){
//   return(
//        <Nav data1="sharvari" number1={2023} boolean={false} data4={null}/>
//        )
//   }
// }
// export default App

