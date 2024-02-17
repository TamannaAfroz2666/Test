
import './App.css';
import Main from './Layout/Main';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import AboutMultiPage from './page/AboutMultiPage/AboutMultiPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route  path='/home' element = {<HomePage/>}/>
        <Route path='/about' element={<AboutMultiPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
