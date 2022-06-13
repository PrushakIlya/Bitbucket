import useInput from '../../../hooks/useInput';
import useError from '../../../hooks/useError';
import { useRef, useState, useEffect } from 'react';

const Dimensions = prop => {
  const height_flag = useRef(false);
  const width_flag = useRef(false);
  const length_flag = useRef(false);
  const dimensions_flag = useRef(false);

  const [hightError, setHwightError] = useState('');
  const [widthError, setWidthError] = useState('');
  const [lengthError, setLengthError] = useState('');

  const height = useInput();
  const width = useInput();
  const length = useInput();

  useError('Fill the field HEIGHT', height_flag, height, setHwightError, '^([0-9]+)$', 'Field containe only numbers');
  useError('Fill the field WIDTH', width_flag, width, setWidthError, '^([0-9]+)$', 'Field containe only numbers');
  useError('Fill the field LENGTH', length_flag, length, setLengthError, '^([0-9]+)$', 'Field containe only numbers');

  useEffect(() => {
    if (dimensions_flag.current === true) {
      hightError != '' && widthError != '' && lengthError != '' && prop.setDisabled(true);
      hightError === '' &&
        widthError === '' &&
        lengthError === '' &&
        height.value !== '' &&
        width.value !== '' &&
        length.value !== '' &&
        prop.setDisabled(false);
    } else {
      dimensions_flag.current = true;
    }
  }, [hightError, widthError, lengthError, height.value, width.value, length.value]);

  return (
    <div className='selected'>
      <div className='error'>{hightError}</div>
      <div>
        <label htmlFor='height'>Height (CM)</label>
        <input type='text' name='height' {...height} autoFocus />
      </div>
      <div className='error'>{widthError}</div>
      <div>
        <label htmlFor='width'>Width (CM)</label>
        <input type='text' name='width' {...width} />
      </div>
      <div className='error'>{lengthError}</div>
      <div>
        <label htmlFor='length'>Length (CM)</label>
        <input type='text' name='length' {...length} />
      </div>
    </div>
  );
};

export default Dimensions;
