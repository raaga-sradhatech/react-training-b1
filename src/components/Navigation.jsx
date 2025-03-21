import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/counter">counter</Link>
      </nav>
    );
  }
  export default Navigation;