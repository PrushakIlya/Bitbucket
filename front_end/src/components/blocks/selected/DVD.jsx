import useInput from '../../../hooks/useInput';
import useError from '../../../hooks/useError';
import { useEffect, useState } from 'react';
import Input from '../Input';

const DVD = props => {
  const [sizeFlag, setSizeFlag] = useState(false);
  const [sizeCheckFlag, setSizeCheckFlag] = useState(false);
  const [sizeError, setSizeError] = useState('');

  const size = useInput();

  useError('Fill the field SIZE', sizeFlag, size, setSizeError, '^([0-9]+)$', 'Field containe only numbers',setSizeFlag);

  useEffect(() => {
    if (sizeCheckFlag === true) {
      sizeError !== '' && props.setDisabled(true);
      sizeError === '' && size.value !== '' && props.setDisabled(false);
    } else {
      setSizeCheckFlag(true);
    }
  }, [sizeError, size.value]);

  return <Input error={sizeError} field={size} name='Size (CM):' errClass='error' inputId="size"/>;
};

export default DVD;
