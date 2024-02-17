
import './App.css';
import Main from './Layout/Main';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route  path='/home' element = {<HomePage></HomePage>}/>
      </Routes>
    </div>
  );
}

export default App;
