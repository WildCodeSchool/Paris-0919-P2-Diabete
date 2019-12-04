import React from 'react';

import ContentFrame from '../../layout/ContentFrame';
import Footer from '../../layout/Footer';
import HeaderMobile from '../../layout/HeaderMobile';
import icon from "../../../assets/icons/picto-section-news.png"
import logo from "../../../assets/pictures/logoOMGPurple.svg"
import Navbar from '../../layout/Navbar';
import NewsContent from './NewsContent';

import "./News.css"
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