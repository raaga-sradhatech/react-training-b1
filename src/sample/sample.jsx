// JSX and Components
// Basic Component
function Welcome() {
    return (
      <div className="greeting">
        <h1>Hello, React!</h1>
      </div>
    );
  }
  
  // Component with Props
  function UserCard({ name, role }) {
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    );
  }

  // 2. State Management with useState
  import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// 3. Effects with useEffect

import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// 4. Context API

import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer component
function ThemeToggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
}

// 5. Forms and Controlled Components
function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  // 6. Custom hooks
  // Custom hook for handling local storage
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
  
    const setValue = (value) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };
  
    return [storedValue, setValue];
  }
  
  // Usage
  function App() {
    const [name, setName] = useLocalStorage('name', '');
    return (
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter your name"
      />
    );
  }

  import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// Navigation component
    function Navigation() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        </nav>
    );
    }

// 7. React Router

// Dynamic routing with parameters
function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>User Details for ID: {id}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

// Main App with Routes
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
//8. Error Boundaries
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <ComponentThatMightError />
    </ErrorBoundary>
  );
}

// 9. performance optimization

import { useState, useMemo, useCallback, memo } from 'react';

// Using useMemo for expensive calculations
function ExpensiveCalculation({ numbers }) {
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
}

// Using useCallback for function memoization
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array since it doesn't depend on any values

  return <ChildComponent onClick={handleClick} />;
}

// Using React.memo for component memoization
const ChildComponent = memo(function ChildComponent({ onClick }) {
  console.log('Child component rendered');
  return <button onClick={onClick}>Click me</button>;
});


// 10. Component life cycle

// Class Component Lifecycle
class LifecycleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: null };
    }
  
    componentDidMount() {
      // Similar to useEffect with empty dependency array
      this.fetchData();
    }
  
    componentDidUpdate(prevProps) {
      // Similar to useEffect with dependencies
      if (prevProps.id !== this.props.id) {
        this.fetchData();
      }
    }
  
    componentWillUnmount() {
      // Cleanup
      this.cleanup();
    }
  
    render() {
      return <div>{/* render content */}</div>;
    }
  }
  
  // Functional Component with Hooks (equivalent lifecycle)
  function LifecycleWithHooks({ id }) {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      // ComponentDidMount
      fetchData();
  
      // ComponentWillUnmount
      return () => cleanup();
    }, []); // Empty dependency array
  
    useEffect(() => {
      // ComponentDidUpdate
      fetchData();
    }, [id]); // Dependency array with id
  
    return <div>{/* render content */}</div>;
  }

  //11. Props Drilling and solution with context 

  import { createContext, useContext } from 'react';
  

// Create a context
const UserContext = createContext();

// Without Context (Props Drilling)
function GrandParent({ user }) {
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <div>Hello, {user.name}!</div>;
}

// With Context (Solution)
function App() {
  const user = { name: 'John', theme: 'dark' };
  
  return (
    <UserContext.Provider value={user}>
      <GrandParent />
    </UserContext.Provider>
  );
}

// Now components can access user directly
function GrandChild() {
  const user = useContext(UserContext);
  return <div>Hello, {user.name}!</div>;
}

import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Component to test
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 12. React Testing
// Test suite
describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
  });

  test('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByText('Increment');
    fireEvent.click(button);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  // Testing async operations
  test('loads user data', async () => {
    render(<UserProfile userId="123" />);
    
    // Wait for loading to complete
    expect(screen.getByText('Loading...')).toBeInTheDocument();
      
      // Wait for data to appear
      const userName = await screen.findByText('John Doe');
      expect(userName).toBeInTheDocument();
    });
});

// 13. Redux State Management
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle'
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  }
});

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

// Component using Redux
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// Provider setup
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// 14. react query for data fetching
import { useQuery, useMutation, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function TodoList() {
  const { data, isLoading, error } = useQuery('todos', async () => {
    const response = await fetch('/api/todos');
    return response.json();
  });

  const mutation = useMutation(newTodo => {
    return fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo)
    });
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {data.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      <button onClick={() => mutation.mutate({ title: 'New Todo' })}>
        Add Todo
      </button>
    </div>
  );
}

// 15. React Suspense and Code Splitting
import { Suspense, lazy } from 'react';

// Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}

// Route-based code splitting
const Routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./pages/Dashboard'))
  },
  {
    path: '/settings',
    component: lazy(() => import('./pages/Settings'))
  }
];

//16. Higher Order Components (HOC)
// HOC for authentication
function withAuth(WrappedComponent) {
    return function WithAuthComponent(props) {
      const [isAuthenticated, setIsAuthenticated] = useState(false);
      const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
        checkAuthStatus()
          .then(status => {
            setIsAuthenticated(status);
            setIsLoading(false);
          });
      }, []);
  
      if (isLoading) return <div>Loading...</div>;
      if (!isAuthenticated) return <Navigate to="/login" />;
  
      return <WrappedComponent {...props} />;
    };
  }
  
  // Usage
  const ProtectedComponent = withAuth(SensitiveComponent);

  //17. Render Props Pattern
  class MouseTracker extends React.Component {
    state = { x: 0, y: 0 };
  
    handleMouseMove = (event) => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };
  
    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          {this.props.render(this.state)}
        </div>
      );
    }
  }
  
  // Usage
  <MouseTracker
    render={({ x, y }) => (
      <div>
        Mouse position: {x}, {y}
      </div>
    )}
  />

  // 18. React Portal
  import { createPortal } from 'react-dom';

function Modal({ children, onClose }) {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

//