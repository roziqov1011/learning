import { Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog/Blog'


function App() {


  return (
    <div className='App'>
    <h1>App</h1>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    </div>
  )
}

export default App
