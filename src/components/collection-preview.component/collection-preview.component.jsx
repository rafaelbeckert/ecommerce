import React from 'react';
import './collection-preview.component.scss';
import CollectionItem from "../colletion-item.component/collection-item.component";


const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
      .filter((item, key) => key < 4)
      .map(({id, ...itemProps}) => (
        <CollectionItem key={id} {...itemProps}/>
      ))}
    </div>
  </div>
);

export default CollectionPreview;