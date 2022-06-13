import useInput from '../../../hooks/useInput';
import useError from '../../../hooks/useError';
import { useEffect, useRef, useState } from 'react';

const Size = prop => {
  const size_flag = useRef(false);
  const size_check_flag = useRef(false);

  const [sizeError, setSizeError] = useState('');

  const size = useInput();

  useError('Fill the field SIZE', size_flag, size, setSizeError, '^([0-9]+)$', 'Field containe only numbers');

  useEffect(() => {
    if (size_check_flag.current === true) {
      sizeError != '' && prop.setDisabled(true);
      sizeError === '' && size.value !== '' && prop.setDisabled(false);
    } else {
      size_check_flag.current = true;
    }
  }, [sizeError, size.value]);

  return (
    <>
      <div className='selected'>
        <div className='error'>{sizeError}</div>
        <label htmlFor='size'>Size (CM):</label>
        <input type='text' name='size' {...size} autoFocus />
      </div>
    </>
  );
};

export default Size;
