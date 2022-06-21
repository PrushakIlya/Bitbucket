const Input = props => {
  const {error,field,name,errClass,inputId} = props
  return (
    <>
      <div className={errClass}>{error}</div>
      <div className='create_input'>
        <label htmlFor='sku'>{name}</label>
        <input type='text' name={inputId} id={inputId} {...field} />
      </div>
    </>
  );
};

export default Input;
