import { Pie, Cell, Tooltip, Legend, PieChart } from 'recharts'

function Sumary({ total, income, expense }) {
    const data = [
        { name: "Entradas", value: income },
        { name: "Saída", value: expense },
    ]

    const colors = ["BDD4E7", "AAB9CF"]


    return(
        <div className="summary">
            <h2>Resumo</h2>
            <p>Saldo R$ {total.toFixed(2)}</p>
            <PieChart width={250} height={250}>
                <Pie
                    data={data}
                    dataKey={value}
                    outerRadius={100}
                    label
                >

                {data.map( (_, i) => {
                    <Cell key={i} fill={colors[i % colors.length]}/>
                } )}

                </Pie>
                <Tooltip/>
                <Legend/>
            </PieChart>
        </div>
    )

}

export default Sumary