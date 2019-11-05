import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGPurple.svg"
import "./News.css"

const News = () => {
    return (
      <div className = "news-background">
        <Navbar  src = {logo}
                 color = 'icones-news'  
        />
        <ContentFrame />
        <Footer color = 'footer-news'/>
      </div>
    );
  }

export default News;