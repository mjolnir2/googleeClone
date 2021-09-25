import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import AppsIcon from "@material-ui/icons/Apps";
import{Avatar}from "@material-ui/core"
import Search from './Search'


function Home() {
    return (
        <div className='home'>
           <h2> </h2>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <Link to ='/about'>About</Link>
                    <Link to ='/store'>Store</Link>


                </div>
                <div className='home_headerRight'>
                <Link to ='/google'>Google</Link>
                <Link to ='/images'>Images</Link>
                    
                   <AppsIcon/>
                   <Avatar/>


                 </div>
                 </div>
            <div className='home_body'>
              <img src="images/images.png"alt =""/>
              
              <div className='input_container'>
                  <Search />
              </div>

            </div>
            
        </div>
    )
}

export default Home
