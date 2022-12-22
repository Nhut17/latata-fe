import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
          <BrowserRouter>
            
         
                  <Header  />
                  
                   
                      <Router />
                    
           

                  <Footer />
        
            
    
          </BrowserRouter>
      
  );
};

export default Layout;
