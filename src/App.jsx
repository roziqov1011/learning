import { Route, Routes } from 'react-router-dom'
import './App.css'


function App() {


  return (
    <div className='App'>
    <h1>App</h1>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
    </Routes>
    </div>
  )
}

export default App
