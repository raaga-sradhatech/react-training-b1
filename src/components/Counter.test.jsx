
// import { render, screen, fireEvent } from '@testing-library/react';
// import Counter from './Counter';
// import { Provider } from 'react-redux';
// import store from '../Store/Store';

// function renderWithRedux(ui, { store: customStore = store } = {}) {
//     return render(<Provider store={store}>{ui}</Provider>);
//   }

// describe('Counter Component', () => {

//   test('renders with initial count of 0', () => {
//     renderWithRedux(<Counter />);
//     const countElement = screen.getByTestId('count');
//     expect(countElement).toHaveTextContent('0');
//   });

//   test('increments count when button is clicked', () => {
//     renderWithRedux(<Counter />);
//     const button = screen.getByText('+');
//     fireEvent.click(button);
//     expect(screen.getByTestId('count')).toHaveTextContent('1');
//   });

//   test('decrements count when button is clicked', () => {
//     renderWithRedux(<Counter />);
//     const button = screen.getByText('-');
//     fireEvent.click(button);
//     expect(screen.getByTestId('count')).toHaveTextContent('0');
//   });

//   test('count is undefined', () => {
//     renderWithRedux(<Counter />);
//     expect(screen.getByTestId('loading')).toBeInTheDocument();
//   });
// });