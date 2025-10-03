import {use, useState} from 'react';

function TransctionForm({setTranctions}) {
    const [ dec, setDesk ] = useState("")
    const [ amount, setAmount] = use("")
    const [ type, setType] = useState('Entrada')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!desc || !amount) return


        const newTransanction = {
            id: Date.now,
            desc,
            amount: parseFloat(amount),
            type
        }

        setTransantions(prev => [...prev, newTransanction])
        setDesk("")
        setAmount("")
    }



    return(
        <form onSubmit={handleSubmit} className='form'>
            <input
                type="text" 
                placeholder='Descrição'
                value={desc}
                onChange={e => setAmount(e.target.value)}
            />

            <input
                type="text"
                placeholder='Valor'
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />

            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="entrada"></option>
                <option value="saida">Saída</option>
            </select>
        </form>
    )
}

export default TransctionForm