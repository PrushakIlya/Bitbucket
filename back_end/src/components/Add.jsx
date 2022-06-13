import { Link } from 'react-router-dom';
import './../sass/components/add.sass';
import SelectedBlock from './blocks/SelectedBlock';
import { PRODUCT_STORE, PRODUCT_DUBLICATE } from './../api-type';
import { postProductApi, isDublicateApi } from './../api';
import { useState, useRef } from 'react';
import useInput from '../hooks/useInput';
import useError from '../hooks/useError';

const Add = () => {
  const sku_flag = useRef(false);
  const name_flag = useRef(false);
  const price_flag = useRef(false);

  const [skuError, setSkuError] = useState('');
  const [nameError, setNameError] = useState();
  const [priceError, setPriceError] = useState();
  const [disabled, setDisabled] = useState(true);

  const sku = useInput();
  const name = useInput();
  const price = useInput();

  useError('Fill the field NAME', sku_flag, sku, setSkuError, '^([a-zA-Z0-9]{3,10})$', 'Field conteines only letters and numbers [3-10 chars]');
  useError('Fill the field NAME', name_flag, name, setNameError, '^([a-zA-Z]{3,30})$', 'Field conteines only letters [3-30 chars]');
  useError('Fill the field PRICE', price_flag, price, setPriceError, '^([0-9]+)$', 'Field conteines only numbers');

  const formElem = document.forms.formElem;
  const form = new FormData(formElem);
  const data_form = Object.fromEntries(form.entries());

  data_form && data_form.sku && isDublicateApi(PRODUCT_DUBLICATE, data_form.sku, setSkuError, 'SKU exists!', formElem.sku.name);
  data_form && data_form.name && isDublicateApi(PRODUCT_DUBLICATE, data_form.name, setNameError, 'Name exists!', formElem.name.name);

  const setDisabledButton = value => {
    setDisabled(value);
  };

  const validation = () => {
    return (
      sku_flag.current === true &&
      skuError === '' &&
      sku.value != '' &&
      name_flag.current === true &&
      nameError === '' &&
      name.value != '' &&
      price_flag.current === true &&
      priceError === '' &&
      price.value != ''
    );
  };
  const add = e => {
    e.preventDefault();
    postProductApi(PRODUCT_STORE, data_form);
    window.location.replace('/');
  };

  return (
    <section className='create_section'>
      <div className='create wrapper'>
        <form
          id='formElem'
          onSubmit={e => {add(e);}}>
          <div className='create_product'>
            <h1>PRODUCT ADD</h1>
            <div className='create_btn'>
              {!disabled && validation() ? <button className='btn_save btn'>Save</button> : <button className='disabled btn_save btn' disabled>Save</button>}
              <Link to='/' className='btn_cancel_add btn'>Cancel</Link>
            </div>
          </div>

          <div className='error'>{skuError}</div>
          <div className='create_input'>
            <label htmlFor='sku'>Sku:</label>
            <input type='text' name='sku' id='sku' {...sku} />
          </div>

          <div className='error'>{nameError}</div>
          <div className='create_input'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' id='name' {...name} />
          </div>

          <div className='error'>{priceError}</div>
          <div className='create_input'>
            <label htmlFor='price'>Price ($):</label>
            <input type='text' name='price' id='price' {...price} />
          </div>

          <SelectedBlock setDisabled={setDisabled} />

        </form>
      </div>
    </section>
  );
};
export default Add;
