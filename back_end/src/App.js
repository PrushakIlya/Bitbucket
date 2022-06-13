import Index from './components/Index';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import './sass/app.sass';

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/addproduct' element={<Add />} />
        </Routes>
      </main>
      <Routes>
        <Route path='*' element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
