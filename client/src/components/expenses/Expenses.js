
import React,{useState,useEffect} from 'react'

export const Expenses = () => {

    const [expenses,setExpenses] = useState([]);

    const getExpenses = async () =>{
        const res = await fetch('expenses')
        const data = await res.json();
        
         setExpenses(data.expenses);
        
    }

    useEffect(()=>{
        getExpenses()
        //eslint-disable-next-line
    },[])
    

    return (
        <ul>
            {expenses.map(ex =><li key={ex._id}>{ex.title}</li>   )}
        </ul>
    )
}
    