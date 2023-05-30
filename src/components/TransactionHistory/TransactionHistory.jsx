import css from './TransactionHistory.module.css'
import { TransactionTable } from 'components/TransactionTable/TransactionTable'
 export const TransactionHistory = ({items}) => {
return(
    <table className={css.transaction_history}>
  <thead>
    <tr className={css.paragraph}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={css.text}>
    {items.map(({id, type, amount, currency}) => (
     <TransactionTable 
     key={id}
     type={type}
     amount={amount}
     currency={currency}
     />
       
    ))}
  </tbody>
</table>
)
 }