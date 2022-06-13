import useInput from '../../../hooks/useInput';
import useError from '../../../hooks/useError';
import { useEffect, useRef, useState } from 'react';

const Weight = prop => {
  const weight_flag = useRef(false);
  const weight_check_flag = useRef(false);

  const [weightError, setWeightError] = useState('');

  const weight = useInput();

  useError('Fill the field SIZE', weight_flag, weight, setWeightError, '^([0-9]+)$', 'Field containe only numbers');

  useEffect(() => {
    if (weight_check_flag.current === true) {
      weightError != '' && prop.setDisabled(true);
      weightError === '' && weight.value !== '' && prop.setDisabled(false);
    } else {
      weight_check_flag.current = true;
    }
  }, [weightError, weight.value]);

  return (
    <div className='selected'>
      <div className='error'>{weightError}</div>
      <label htmlFor='weight'>Weight (KG):</label>
      <input type='text' name='weight' {...weight} autoFocus />
    </div>
  );
};

export default Weight;
