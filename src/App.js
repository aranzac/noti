import logo from './logo.svg';
import './App.css';
import SelectorBar from './components/SelectorBar/SelectorBar';
import Bar from './components/Bar/Bar';

function App(props) {
  const subject = 'React';
  console.log(props)
  return (
    <div className="App">
    <Bar />
    <SelectorBar />
      <header className="App-header">
      
{/*         
        <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Hola {props.subject} */}
        </p>
      </header>
    </div>
  );
}

export default App;
