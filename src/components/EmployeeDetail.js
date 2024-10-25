import React from 'react'
import StatusBadge from './StatusBadge'

export default function EmployeeDetail ({ employee}) {
  return (
    <div>
        <h4>{employee.name}</h4>
        <p>Role: {employee.role}</p>
         {/* Prop drilling the status down to StatusBadge */}
         <StatusBadge status={employee.status} />
    </div>
  )
}
