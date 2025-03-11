import { createContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import './App.css';
import UserCard from './components/usercard';
import ContactForm from './components/ContactForm';
import ParentComponent from './components/ParentComponent';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
          <h1>Hello, World!</h1>

          <BrowserRouter>
                <Navigation />
                <Routes>
                  <Route path="/" element={<ParentComponent />} />
                  <Route path="/about" element={<ContactForm />} />
                  <Route path="/users" element={<UserCard userid={2}/>} />
                </Routes>
              </BrowserRouter>
          {/* <UserCard userid={1}   />
          <UserCard userid={6}   /> */}
          
          {/* <ContactForm/> */}
          {/* <ParentComponent/> */}
    </>
      
  );

}

export default App;
