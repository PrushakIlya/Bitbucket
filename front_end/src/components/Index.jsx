import './../sass/components/index.sass';
import { PRODUCT_INDEX, PRODUCT_DESTROY } from './../api-type';
import { useSelector } from 'react-redux';
import IndexBlock from './blocks/IndexBlock';
import { getProductApi, deleteProductApi } from './../api';
import { Link } from 'react-router-dom';
import { useEffect} from 'react';

const Index = () => {
  useEffect(() => { getProductApi(PRODUCT_INDEX) }, []);
  let idDelete = [];

  const getIdCheckbox = value => {
    if (!idDelete.includes(value)) {
      idDelete.push(value);
    } else {
      const index = idDelete.indexOf(value);
      idDelete.splice(index, 1);
    }
  };

  const massDelete = e => {
    e.preventDefault();
    deleteProductApi(PRODUCT_DESTROY, idDelete);
    window.location.replace('/');
  };
  return (
    <>
      <section className='index_section'>
        <div className='index wrapper'>
          <form action='/destroy' onSubmit={e => massDelete(e)} id='product_form'>
            <div className='index_header'>
              <h1>Product List</h1>
              <div className='index_btn'>
                <Link to='/addproduct' className='btn_cancel_add btn'>ADD</Link>
                <button className='btn_delete btn'>MASS DELETE</button>
              </div>
            </div>
            <div className='index_blocks'>
              {useSelector(el =>
  
                el.value.map(el => {
                  return <IndexBlock element={el} key={el.id} checkbox={getIdCheckbox} />
                })
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Index;
