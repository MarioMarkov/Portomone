
import React,{useState,useEffect} from 'react'
import { ExpenseItem } from './ExpenseItem';

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
         <ul className="collection with-header">
         <li className='collection-header'>
           <h4 className='center'>Expenses</h4>
         </li>
         {expenses.length===0 ? <p className='center'>No Expenses</p> :
             expenses.map(ex =><ExpenseItem expense={ex} key={ex._id}/>   )
           }
       </ul>
    )
}
    