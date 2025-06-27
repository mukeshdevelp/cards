
import './App.css'
import Card from './components/Card'
import Heading from './components/Heading'
import image from './assets/image.jpeg'
import cardObject from './utils/CardObject'
import path from './utils/Path';
function App() {
 const path = image






  
  return (
    <>

    <Heading />
    <div className='main-container'> 
      <Card props={cardObject}/>

      
      
    </div>
    
    
    </>
  )
}

export default App
