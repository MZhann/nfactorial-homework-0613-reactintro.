import './App.css';
import icon from "./img/icon.png";
import { format, compareAsc } from 'date-fns'


let time = format(new Date(), 'dd/MMM/yyyy HH:mm:ss')
// let hours = format(new Date())
// let wholetime = time + " " + hours;
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className = "headDiv">
              <img src= {icon} alt = "icon" className='icon'/>
              <input type = "text" placeholder='search'/>
          </div>
          <div className='time'>
              {time}
          </div>
      </header>
      <div className='mainDiv'>
        <div className = 'firstDiv'>
           <h2>Hey</h2>  
        </div>
        <div className = 'secondDiv'>
           <h2>Let's</h2>
        </div>
        <div className = 'thirdDiv'>
           <h2>Give</h2>
        </div>      
        <div className = 'fourthDiv'>
           <h2>All</h2>
        </div>
        <div className = 'fifthDiv'>
           <h2>You Can</h2>
        </div>
        
         
      </div>
     
         
    
    </div>
  );
}

export default App;