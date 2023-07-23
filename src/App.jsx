// import logo from './logo.svg';
import './App.css';

function Child(){
  console.log('this is child component');
  return(
  <h1 className='child' >hello this is zhraa calling from child component</h1>

  )

}
function App() {
  console.log('this is parent component');
  return (
    <div className="App">
 <h1 className='parent'>this zhraa's tag grom parent container</h1>
 <Child/>
    </div>
    
  );

}

export default App;
