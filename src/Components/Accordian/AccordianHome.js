import React from 'react';
import style from '../../Styles/ComponentPages.module.css';


const AccordianHome = () => {
  return (
    <div className={style['main-container']}>
      <div className={style['component-container']}>
        <section id="section1" style={{height:'300px', border:'10px solid pink', width:'74%'}}>Section 1</section>
        <section id="section2" style={{height:'300px'}}>Section 2</section>
        <section id="section3" style={{height:'300px'}}>Section 3</section>
        <section id="section4" style={{height:'300px'}}>Section 4</section>
      
      <div className={style['sidenav-container']}>
        <p>Topics on this page</p>
        <ul>
          <li><a href="#section1">Section 1</a></li>
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