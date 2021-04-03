import './App.css';
import Message from './components/Message';
import TempConverter from './components/TempConverter';
import Tabs from './components/Tabs';

const App = () => (
  <div className="App" style={{ padding: '20px' }}>
    <Tabs />        
    <Message />
    <hr />
    <TempConverter />
  </div>
);

export default App;
