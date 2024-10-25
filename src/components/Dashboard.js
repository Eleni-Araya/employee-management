import React, {useContext} from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import EmployeeList from './EmployeeList';



export default function Dashboard() {
  const { employees } = useContext(EmployeeContext);
  return (
    <div>
        <h2>Dashboard</h2>
        <EmployeeList employees={employees} />
    </div>
  )
}
