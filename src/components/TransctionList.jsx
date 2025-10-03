function TransctionList( {transctions, listRef} ) {
    return(
        <div className="list">
            <h2>Transações</h2>

            <ul>
                {transctions.map((t, index) => {
                    <li key={t.id}
                        ref={index === transctions.lenght - 1 ? listRef : null}
                        className={t.type}
                    >

                        {t.desc} - R$ {t.amount.to.fixed(2)} ({t.type})
                        
                    </li>
                })}
            </ul>
        </div>
    )
}

export default TransctionList