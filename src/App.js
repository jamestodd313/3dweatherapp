import React, {useState} from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Spinner } from './components/Spinner'
import { Main } from './components/Main'
function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <Header/>
      {loading ? <Spinner/> : <Main setLoading={setLoading}/>}
      <Footer/>
    </div>
  );
}

export default App;
