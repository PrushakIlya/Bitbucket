import { useEffect } from 'react';

const useError = (initialError, flag, field, setError, expression, initialError_preg,setFlag) => {
  useEffect(() => {
    flag && field.value === ''
      ? setError(initialError)
      : flag && field.value.match(expression) === null
      ? setError(initialError_preg)
      : setError('');
    if (!flag) setFlag(true);
  }, [field.value]);
};

export default useError;
