import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import NotesList from './components/NotesList'

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<NotesList/>}/> //¿Component or element?
        <Route path='/edit/:id' element={<CreateNote/>}/>
        <Route path='/create' element={<CreateNote/>}/>
        <Route path='/user' element={<CreateUser/>}/>
        Hello mundo!!
      </Routes>
    </BrowserRouter>
  );
}

export default App;
