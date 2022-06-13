import { useEffect } from 'react';

const useError = (initialError, flag, field, setError, expression, initialError_preg) => {
  useEffect(() => {
    flag.current && field.value === ''
      ? setError(initialError)
      : flag.current && field.value.match(expression) === null
      ? setError(initialError_preg)
      : setError('');
    if (!flag.current) flag.current = true;
  }, [field.value]);
};

export default useError;
