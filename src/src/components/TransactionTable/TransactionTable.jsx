import css from './TransactionTable.module.css'

export const TransactionTable = ({id, type, amount, currency}) =>{
    return (
        <tr className={css.table_list}>
      <td >{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}