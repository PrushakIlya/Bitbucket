import useInput from '../../../hooks/useInput';
import useError from '../../../hooks/useError';
import { useState, useEffect } from 'react';
import Input from '../Input';

const Furniture = props => {
  const [heightFlag, setHeightFlag] = useState(false);
  const [widthFlag, setWidthFlag] = useState(false);
  const [lengthFlag, setLengthFlag] = useState(false);
  const [dimensionsFlag, setDimensionsFlag] = useState(false);
  const [hightError, setHwightError] = useState(false);
  const [widthError, setWidthError] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  const height = useInput();
  const width = useInput();
  const length = useInput();

  useError('Fill the field HEIGHT', heightFlag, height, setHwightError, '^([0-9]+)$', 'Field containe only numbers', setHeightFlag);
  useError('Fill the field WIDTH', widthFlag, width, setWidthError, '^([0-9]+)$', 'Field containe only numbers', setWidthFlag);
  useError('Fill the field LENGTH', lengthFlag, length, setLengthError, '^([0-9]+)$', 'Field containe only numbers', setLengthFlag);

  useEffect(() => {
    if (dimensionsFlag === true) {
      hightError !== '' && widthError !== '' && lengthError !== '' && props.setDisabled(true);
      hightError === '' &&
        widthError === '' &&
        lengthError === '' &&
        height.value !== '' &&
        width.value !== '' &&
        length.value !== '' &&
        props.setDisabled(false);
    } else {
      setDimensionsFlag(true);
    }
  }, [hightError, widthError, lengthError, height.value, width.value, length.value]);

  return (
    <div className='selected'>
      <Input error={hightError} field={height} name='Height (CM):' errClass='error' inputId="height" />
      <Input error={widthError} field={width} name='Width (CM):' errClass='error' inputId="width" />
      <Input error={lengthError} field={length} name='Length (CM):' errClass='error' inputId="length" />
    </div>
  );
};

export default Furniture;
