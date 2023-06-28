import './App.css';
import Home from './pages/home';
import TodoApp from './pages/TodoApp';
import ExpenseTracker from './pages/ExpenseTracker';
import MovieWebsite from './pages/MovieWebsite';
import FakeStore from './pages/FakeStore';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
  return <BrowserRouter>
  <a href="/" className='=btn btn-primary m-3'>Home</a>
  <a href="/" className='=btn btn-primary m-3'>TodoApp</a>
  <a href="/" className='=btn btn-primary m-3'>Expense Tracker</a>
  <a href="/" className='=btn btn-primary m-3'>Movie Website</a>
  <a href="/" className='=btn btn-primary m-3'>Fake Store</a>

  <Routes>

  <Route path="/" element={<Home></Home>} />
  <Route path="/todo-app" element={<TodoApp></TodoApp>} />
  <Route path="/expense-tracker" element={<ExpenseTracker></ExpenseTracker>} />
  <Route path="/movie-website" element={<MovieWebsite></MovieWebsite>} />
  <Route path="/fake-store" element={<FakeStore></FakeStore>} />
  
  </Routes>
  </BrowserRouter>
}
  
export default App;
