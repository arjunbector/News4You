import './App.css'
import Hero from './Components/Hero/Hero';

function App() {

  const api_key = import.meta.env.VITE_API_KEY;
  return (
    <>
    <Hero/>
    </>
  )
}

export default App
