import React, { Component, Fragment } from 'react';
import Nav from './componets/Nav/nav';
import Footer from './componets/Footer/Footer';
import About from './componets/About/About';

import  {RouterProvider, createBrowserRouter} from 'react-router-dom';
import MasterLayout from './componets/MasterLayout/MasterLayout';
import Home from './componets/Home/Home';
import Notfound from './componets/NotFound/NotFound';
import Contact from './componets/Contact/Contact';
import Portfolio from './componets/Portfolio/Portfolio';



const router = createBrowserRouter([
  {
    path: "",element: <MasterLayout />,
    children: [
      {
        // Set the empty path to display the "Home" component
        path: "",
        element: <Home />,
      },
      {
        // Set the empty path to display the "Home" component
        path: "landing-page",
        element: <Home />,
      },
    
      {
        path: "landing-page/about",
        element: <About />,
      },
      {
        path: "landing-page/Portfolio",
        element: <Portfolio/>,
      },
      {
        path: "landing-page/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);





class App extends Component {

  render() {
    return (
      <Fragment>
  

      <RouterProvider router={router}/>
      {/* <Nav/> */}
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Portf/> */}
      {/* <Footer/>
   */}
    
    
    
      </Fragment>
    
    );
  }
}

export default App;
