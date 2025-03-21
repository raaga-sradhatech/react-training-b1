import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import UserCard from './components/usercard';
import ContactForm from './components/ContactForm';
import ParentComponent from './components/ParentComponent';
import Navigation from './components/Navigation';
import { Provider } from 'react-redux';
import store from './Store/Store';
import List from './components/List';
import ProductList from './components/ProductList';
import SearchProduct from './components/SearchProduct';

const Counter = lazy(() => import('./components/Counter'));

const fruits = ['apple', 'banana', 'cherry'];

function App() {
  return (
    // <List items={fruits} />
    <SearchProduct></SearchProduct>
    // <List />
    // <>
    //  <Provider store={store}>
    // <Suspense fallback={<div>Loading...</div>}>
    //       <h1>Hello, World!</h1>
         
    //       <BrowserRouter>
    //             <Navigation />
    //             <Routes>
    //               <Route path="/" element={<ParentComponent />} />
    //               <Route path="/about" element={<ContactForm />} />
    //                <Route path="/users" element={<UserCard userid={2}/>} /> 
    //               <Route path="/counter" element={<Counter />} />
    //             </Routes>
    //           </BrowserRouter> 
    //           </Suspense>
    //       {/* <ParentComponent/>
    //       <Counter />
          
    //       <ContactForm/> 
    //        <ParentComponent/> */}

    //       </Provider>
    // </>
      
  );

}

export default App;
