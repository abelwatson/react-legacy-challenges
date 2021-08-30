import React, { Component } from 'react';
import CatIndex from './CatIndex';

const CatList = (props) => {
  

  return (
    <div>
      {this.breeds.Map(cat => <li>cat</li>)}
    </div>
  )
}

export default CatList;
