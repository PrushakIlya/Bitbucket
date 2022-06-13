const IndexBlock = prop => {
  return (
    <div className='index_block'>
      <label htmlFor={prop.element.id}></label>
      <input type='checkbox' value={prop.element.id} name='checkbox' className='delete-checkbox' onChange={e => prop.checkbox(e.target.value)} />
      <div className='index_block_text'>
        <p id='sku'>{prop.element.sku}</p>
        <p id='name'>{prop.element.name}</p>
        <p id='price'>{prop.element.price} $</p>
        <p id='size'>{prop.element.size ? prop.element.size + 'MB' : ''}</p>
        <p id='weight'>{prop.element.weight ? prop.element.weight + 'KG' : ''}</p>
        <p id='dimensions'>{prop.element.dimensions}</p>
      </div>
    </div>
  );
};

export default IndexBlock;
