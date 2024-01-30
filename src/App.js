//import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useContext } from 'react';
import { CounterContext } from './context/Counter';

function App() {
   const counterState = useContext(CounterContext);
  return (
    <div className='App'>
      <h2>The count is {counterState.count}</h2>
       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/>
    </div>
  );
}

export default App;
