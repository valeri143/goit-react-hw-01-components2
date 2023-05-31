import css from './Statistics.module.css';
import { OneItemOfStatistics } from 'components/OneItemOfStatistics/OneItemOfStatistics';

export const Statistics = ({title, stats}) =>{
return (
  <section className={css.statistics}>
  { title && <h2 className={css.title}>{title && "Upload stats"}</h2>}
  <ul className={css.list}>
  {stats.map(({id,label,percentage}) => (
  <OneItemOfStatistics 
  key={id}
  label={label}
  percentage={percentage}
  />
) )}
  </ul>
  </section>
)
 }
