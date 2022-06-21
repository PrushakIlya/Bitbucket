const IndexBlock = props => {
  return (
    <div className='index_block'>
      <label htmlFor={props.element.id}></label>
      <input type='checkbox' value={props.element.id} name='delete-checkbox' id="delete-checkbox" className='delete-checkbox' onChange={e => props.checkbox(e.target.value)} />
      <div className='index_block_text'>
        <p id='sku'>{props.element.sku}</p>
        <p id='name'>{props.element.name}</p>
        <p id='price'>{props.element.price} $</p>
        <p id='dvd'>{props.element.size ? props.element.size + 'MB' : ''}</p>
        <p id='book'>{props.element.weight ? props.element.weight + 'KG' : ''}</p>
        <p id='furniture'>{props.element.dimensions}</p>
      </div>
    </div>
  );
};

export default IndexBlock;
