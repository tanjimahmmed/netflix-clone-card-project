import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';




ReactDOM.render(
<>

<h1 className="heading__style">List of top 5 Netflix Series in 2021</h1>


{Sdata.map((val) => {
    return(
        <Card 
            imgscr={val.imgscr} 
            title={val.title} 
            sname={val.sname} 
            link={val.links}
        />
    );
})}



</>,

document.getElementById('root'));