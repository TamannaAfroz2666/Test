
import './App.css';
import Main from './Layout/Main';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import AboutMultiPage from './page/AboutMultiPage/AboutMultiPage';
import ContactPage from './page/ContactPage/ContactPage';
import MiniProjects from './components/MiniProjects/MiniProjects';
import ProjectContainer from './components/MiniProjects/ProjectContainer/ProjectContainer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route  path='/home' element = {<HomePage/>}/>
        <Route path='/about' element={<AboutMultiPage/>}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/work' element={<ProjectContainer></ProjectContainer>}/>
      </Routes>
    </div>
  );
}

export default App;
