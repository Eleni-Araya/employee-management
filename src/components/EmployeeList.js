import React,{useContext} from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import EmployeeDetail from './EmployeeDetail'

export default function EmployeeList({ employees}) {
  const { employee } = useContext(EmployeeContext)
  return (
    <div>
        <h3>Employee List</h3>
        <ul>
            {employees.map((employee)=>(
                <li key={employee.id}>
                    <EmployeeDetail employee={employee}/>
                </li>
            ))}
        </ul>
    </div>
  )
}
