import React from 'react';
import './Filteredshops.css'
import { useParams } from 'react-router-dom';
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";


function Filteredshops() {
    let {shoptype} = useParams();
    //dashboard me jo state bna h waisa hi rendering of shops yaha hoga
  return (
    <div className='filteredshops'>
    <Nav/>
    <div className="lower-landing">
        <h1 className="mt-5">'shop name'</h1>

        {/* <div className="shop-cards">
          {shop}
        </div> */}
      </div>
    <Footer/>
    </div>
  )
}

export default Filteredshops