import logo from './logo.svg';
import './App.css';

const compromissos = ['Estudar', 'Estudar', 'Estudar', 'Estudar', 'Estudar'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    compromissos.map(task)
  );
}



export default App;
