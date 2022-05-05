import React,{useRef, useState} from 'react';

import style from './Expenses.module.css';

const expenses = [
    {
        id: 'e1',
        description: 'Milk',
        category: 'Grocery',
        amount: 200
    }
]

const Expenses = () => {
    const [category, setCategory] = useState('');

    const enteredDescriptionRef = useRef();
    const enteredCategoryRef = useRef();
    const enteredAmountRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const category = enteredCategoryRef;
        // const description = enteredDescriptionRef.current.value;
        // const amount = enteredAmountRef.current.value;

        console.log( category);

        // fetch('https://expense-tracker-9958d-default-rtdb.firebaseio.com/expenses');
    }

    const selectHandler = (e) => {
        e.preventDefault();
        setCategory(e);
    }

    return(
        <section className={style.expenses}>
            <h1>Expenses</h1>
            <form className={style['expenses-form']} onSubmit={submitHandler}>
            <select className={style['expenses-form__input']} onSelect={selectHandler}>
                    <option value="Food">Food</option>
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
                />
                <input 
                    className={style['expenses-form__input']}
                    type='number'
                    placeholder='Amount Spent'
                    ref={enteredAmountRef}
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
                        return(
                            <tr>
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