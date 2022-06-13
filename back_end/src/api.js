import store from './redux/store';
import counterSlice from './redux/Slices/productSlice';

const setProduct = counterSlice.actions.setProduct;

export const getProductApi = (url) => {
  fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error))
    .then((body) => {
      store.dispatch(setProduct(body));
      return true;
    });
};

export const deleteProductApi = (url, payload) => {
  console.log(payload)
  fetch(url, {
    method: 'DELETE',
    body: JSON.stringify(payload),
  }).then((error) => console.log(error));
};

export const postProductApi = (url, payload) => {
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then((error) => console.log(error));
};

export const isDublicateApi = (url, value, setError, error, name) => {
  fetch(url + '/' + name + '_' + value)
    .then((json) => json.json())
    .catch((error) => console.log(error))
    .then((body) => {
      body === true && setError(error);
    });
};
