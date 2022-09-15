import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "../Styles/Responsive.css"
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 850, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

export default class Responsive extends Component {
 
  state = {
    items: [
      {id: 1, title: require('../Assets/logo4.png')},
      {id: 2, title:  require('../Assets/logo1.png')},
      {id: 3, title:  require('../Assets/logo2.png')},
      {id: 4, title:  require('../Assets/logo3.png')},
      {id: 5, title:  require('../Assets/logo4.png')},
      {id: 6, title:  require('../Assets/logo1.png')},
      {id: 7, title:  require('../Assets/logo2.png')}
    ]
  }

 


  render () {
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakPoints}  itemsToShow={4} className="item">
      
        {items.map(item => <div key={item.id}>
          <img src={item.title} alt="" width={"200px"} className="crousalImg"/>
        </div>)}
      </Carousel>
    )
  }
}

