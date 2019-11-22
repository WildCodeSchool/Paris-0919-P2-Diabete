import React from 'react';
import Navbar from '../../layout/Navbar';
import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import logo from "../../../assets/pictures/logoOMGPurple.svg"
import "./News.css"
import icon from "../../../assets/icons/picto-section-news.png"
import HeaderMobile from '../../layout/HeaderMobile';
import NewsContent from './NewsContent';
import "./NewsContent.css";




const News = () => {
    return (
      <div className = "news-background">
        <Navbar  src = {logo}
                 color = 'icones-news'  
        />
        <HeaderMobile src = {logo} />
        <ContentFrame
            src = {icon}
             content = {<NewsContent />}
        />
        <Footer color = 'footer-news' />
      </div>
    );
  }

export default News;