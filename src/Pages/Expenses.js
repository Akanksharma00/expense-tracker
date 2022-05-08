import React,{useEffect, useRef, useState} from 'react';

import style from './Expenses.module.css';

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [category, setCategory] = useState('Food');

    const enteredDescriptionRef = useRef();
    const enteredAmountRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();

        const description = enteredDescriptionRef.current.value;
        const amount = enteredAmountRef.current.value;

        const expenseData = {
            category: category,
            description: description,
            amount:amount
        }

        // setExpenses([...expenses,expenseData]);

        const response = await fetch('https://expense-tracker-9958d-default-rtdb.firebaseio.com/expenses.json',
        {
            method: 'POST',
            body: JSON.stringify(expenseData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const res = await response;
        if(res.ok){
            console.log('Expense added to db');
            const response = await fetch('https://expense-tracker-9958d-default-rtdb.firebaseio.com/expenses.json');
            const data = await response.json();
            console.log(data);

            const expensesList = [];

            for(const key in data){
                expensesList.push({
                    id: key,
                    category: data[key].category,
                    description: data[key].description,
                    amount: data[key].amount
                });
            }

            console.log('expenseList: ',expensesList);

            setExpenses(expensesList);
        }
    }

    const selectHandler = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    }

    useEffect(() => {
        const getData = async () => {
        const response = await fetch('https://expense-tracker-9958d-default-rtdb.firebaseio.com/expenses.json');
            const data = await response.json();
            console.log(data);

            const expensesList = [];

            for(const key in data){
                expensesList.push({
                    id: key,
                    category: data[key].category,
                    description: data[key].description,
                    amount: data[key].amount
                });
            }

            setExpenses(expensesList);
        }
        getData();
    },[]);

    return(
        <section className={style.expenses}>
            <h1>Expenses</h1>
            <form className={style['expenses-form']} onSubmit={submitHandler}>
                <select 
                    className={style['expenses-form__input']} 
                    value={category}
                    onChange={selectHandler}>
                    <option value="Food" selected>Food</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Bags">Bags</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Learning">Learning</option>
                    <option value="Travel">Travel</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Fitness">Fitness</option>
                </select>
                <input 
                    className={style['expenses-form__input']}
                    type='text'
                    placeholder='Description'
                    ref={enteredDescriptionRef}
                    required= 'true'
                />
                <input 
                    className={style['expenses-form__input']}
                    type='number'
                    placeholder='Amount Spent'
                    ref={enteredAmountRef}
                    required='true'
                />
                <button className={style['expenses-form__btn']}>Add Expense</button>
            </form>

            <div>
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                    {expenses.map((e)=>{
                        console.log('e: ', e);
                        return(
                            <tr key={e.id}>
                                <td>{e.description}</td>
                                <td>{e.category}</td>
                                <td>{e.amount}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </section>
    )
};

export default Expenses;