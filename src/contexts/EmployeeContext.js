import React, { createContext, useState, useEffect } from 'react'

export const EmployeeContext = createContext();
export const EmployeeProvider = ({children})=>{
    const [employees,setEmployees] = useState([])

    // Simulate fetching employee data from an API

    useEffect(()=>{
        const fetchedEmployees = [
            { id: 1, name: 'Employee 1', role: 'Manager', status: 'Available' },
            { id: 2, name: 'Employee 2', role: 'Developer', status: 'Busy' },
            { id: 3, name: 'Employee 3', role: 'Designer', status: 'Away' },
            { id: 4, name: 'Employee 4', role: 'SDE', status: 'Buzzzzy' },

        ];
        setEmployees(fetchedEmployees)
    },[])

    return(
        <EmployeeContext.Provider value={{employees,setEmployees}}>
            {children}
        </EmployeeContext.Provider>
    )

}

