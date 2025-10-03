import { useEffect, useMemo, useRef, useState } from 'react'
import TransctionForm from './components/TransctionForm.jsx'
import TransctionList from './components/TransctionList.jsx'
import Sumary from './components/Summary.jsx'


function App() {

  const [transctions, setTranctions] = useState( () => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })


  const listRef = useRef(null)

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transctions))
    if(listRef.current) {
      listRef.current.scrollIntoView({ behavior: "Smooth" })
    }
  }, [transactions])

  const { total, income, expense } = useMemo(() => {
    const income = transctions
    .filter(t =>  type === "entrada")
    .reduce((acc, t) => acc + t.amount, 0)

    const expense = transctions
    .filter(t => t.type === "saída")
    .reduce((acc, t) => acc + t.amount, 0)


    return { total: income - expense, income, expense }
  }, [transctions])


  return (
    <div className='container'>
      <h1>Dashboard React</h1>

      <Sumary total={total} income={income} expense={expense}/>
      <TransctionForm setTranctions={setTranctions}/>
      <TransctionList transction={transctions} listRef={listRef}/>
    </div>
  )
}

export default App