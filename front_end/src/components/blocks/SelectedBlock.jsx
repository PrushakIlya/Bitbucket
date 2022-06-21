import React, { useEffect, useState } from 'react';
import Furniture from './selected/Furniture';
import DVD from './selected/DVD';
import Book from './selected/Book';

const SelectedBlock = props => {
  const [switcher, setSwitcher] = useState('');

  useEffect(() => {
    setSwitcher(switcher);
  }, [switcher]);

  function more() {
    switch (switcher) {
      case 'dvd':
        return <DVD setDisabled={props.setDisabled} />;
      case 'book':
        return <Book setDisabled={props.setDisabled} />;
      case 'furniture':
        return <Furniture setDisabled={props.setDisabled} />;
    }
  }

  return (
    <div className='create_switcher'>
      <div className='switcher_header'>
      <label htmlFor='productType'>Type Switcher: </label>
      <select name='productType' id = 'productType' onChange={e => {setSwitcher(e.target.value);}}>
        <option value='type' disabled selected>Type Switcher</option>
        <option value='dvd'>DVD</option>
        <option value='book'>Book</option>
        <option value='furniture'>Furniture</option>
      </select>
      </div>
      {more()}
    </div>
  );
};

export default SelectedBlock;
