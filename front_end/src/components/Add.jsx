import { Link } from 'react-router-dom';
import './../sass/components/add.sass';
import SelectedBlock from './blocks/SelectedBlock';
import { PRODUCT_STORE, PRODUCT_DUBLICATE } from './../api-type';
import { postProductApi, isDublicateApi } from './../api';
import { useState } from 'react';
import useInput from '../hooks/useInput';
import useError from '../hooks/useError';
import Input from './blocks/Input';

const Add = () => {
  const [skuFlag, setSkuFlag] = useState(false);
  const [nameFlag, setNameFlag] = useState(false);
  const [priceFlag, setPriceFlag] = useState(false);
  const [skuError, setSkuError] = useState();
  const [nameError, setNameError] = useState();
  const [priceError, setPriceError] = useState();
  const [disabled, setDisabled] = useState(true);

  const sku = useInput();
  const name = useInput();
  const price = useInput();

  useError(
    'Fill the field NAME',
    skuFlag,
    sku,
    setSkuError,
    '^([a-zA-Z0-9]{3,10})$',
    'Field conteines only letters and numbers [3-10 chars]',
    setSkuFlag
  );
  useError('Fill the field NAME', nameFlag, name, setNameError, '^([a-zA-Z]{3,30})$', 'Field conteines only letters [3-30 chars]', setNameFlag);
  useError('Fill the field PRICE', priceFlag, price, setPriceError, '^([0-9]+)$', 'Field conteines only numbers', setPriceFlag);

  const formElem = document.forms.formElem;
  const form = new FormData(formElem);
  const dataForm = Object.fromEntries(form.entries());
  console.log(dataForm);

  dataForm && dataForm.sku && isDublicateApi(PRODUCT_DUBLICATE, dataForm.sku, setSkuError, 'SKU exists!', formElem.sku.name);
  dataForm && dataForm.name && isDublicateApi(PRODUCT_DUBLICATE, dataForm.name, setNameError, 'Name exists!', formElem.name.name);

  const validation = () => {
    return (
      skuFlag === true &&
      skuError === '' &&
      sku.value !== '' &&
      nameFlag === true &&
      nameError === '' &&
      name.value !== '' &&
      priceFlag === true &&
      priceError === '' &&
      price.value !== ''
    );
  };
  const add = e => {
    e.preventDefault();
    console.log(dataForm);
    postProductApi(PRODUCT_STORE, dataForm);
    window.location.replace('/');
  };

  return (
    <section className='create_section'>
      <div className='create wrapper'>
        <form id='product_form' onSubmit={e => add(e)}>
          <div className='create_product'>
            <h1>PRODUCT ADD</h1>
            <div className='create_btn'>
              {!disabled && validation() ? (
                <button className='btn_save btn'>Save</button>
              ) : (
                <button className='disabled btn_save btn' disabled>
                  Save
                </button>
              )}
              <Link to='/' className='btn_cancel_add btn'>
                Cancel
              </Link>
            </div>
          </div>
          <Input error={skuError} field={sku} name='Sku:' errClass='error' inputId='sku' />
          <Input error={nameError} field={name} name='Name:' errClass='error' inputId='name' />
          <Input error={priceError} field={price} name='Price ($):' errClass='error' inputId='price' />
          <SelectedBlock setDisabled={setDisabled} />
        </form>
      </div>
    </section>
  );
};
export default Add;
