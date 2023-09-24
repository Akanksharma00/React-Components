import React from 'react';
import style from '../../Styles/ComponentPages.module.css';
import BasicAccordion from './BasicAccordion';


const AccordianHome = () => {
  return (
    <div className={style['main-container']}>
      <div className={style['component-container']}>
        <section id="basicAccordion" className={style['component-section']}><BasicAccordion /></section>
        <section id="section2">Section 2</section>
        <section id="section3">Section 3</section>
        <section id="section4">Section 4</section>
      
      <div className={style['sidenav-container']}>
        <p>Topics on this page</p>
        <ul>
          <li><a href="#basicAccordion">Basic Accordion</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
          <li><a href="#section4">Section 4</a></li>
        </ul>
      </div> 
      </div>
    </div>
  )
}

export default AccordianHome