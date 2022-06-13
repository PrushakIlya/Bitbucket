import React, { useEffect, useState } from 'react';
import Dimensions from './selected/Dimensions';
import Size from './selected/Size';
import Weight from './selected/Weight';
import './../../sass/components/blocks/selected.sass';

const SelectedBlock = prop => {
  const [switcher, setSwitcher] = useState('');

  useEffect(() => {
    setSwitcher(switcher);
  }, [switcher]);

  function check() {
    switch (switcher) {
      case 'size':
        return <Size setDisabled={prop.setDisabled} />;
      case 'weight':
        return <Weight setDisabled={prop.setDisabled} />;
      case 'dimensions':
        return <Dimensions setDisabled={prop.setDisabled} />;
    }
  }

  return (
    <>
      <label htmlFor='type_switcher'>Type Switcher: </label>
      <select name='type_switcher' id = 'productType' onChange={e => {setSwitcher(e.target.value);}}>
        <option value='type' disabled selected>Type Switcher</option>
        <option value='size'>Size</option>
        <option value='weight'>Weight</option>
        <option value='dimensions'>Dimensions</option>
      </select>
      {check()}
    </>
  );
};

export default SelectedBlock;
