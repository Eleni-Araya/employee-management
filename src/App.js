import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { EmployeeProvider } from './contexts/EmployeeContext';

function App() {
  
  return (
    <EmployeeProvider>
      <div>
        <h1>Employee Management Platform</h1>
        <Dashboard/>
      </div>
    </EmployeeProvider>
  );
}

export default App;
