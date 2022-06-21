import useInput from '../../../hooks/useInput';
import useError from '../../../hooks/useError';
import { useEffect, useState } from 'react';
import Input from '../Input';

const Book = props => {
  const [weightFlag, setWeightFlag] = useState(false);
  const [weightCheckFlag, setWeightCheckFlag] = useState(false);
  const [weightError, setWeightError] = useState('');

  const weight = useInput();

  useError('Fill the field SIZE', weightFlag, weight, setWeightError, '^([0-9]+)$', 'Field containe only numbers', setWeightFlag);

  useEffect(() => {
    if (weightCheckFlag === true) {
      weightError !== '' && props.setDisabled(true);
      weightError === '' && weight.value !== '' && props.setDisabled(false);
    } else {
      setWeightCheckFlag(true);
    }
  }, [weightError, weight.value]);

  return <Input error={weightError} field={weight} name='Weight (KG):' errClass='error' inputId="weight" />;
};

export default Book;
