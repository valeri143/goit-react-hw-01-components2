import css from './CardOfFriend.module.css'

export const CardOfFriend = ({avatar, name, isOnline}) =>{
    return (
        <li className={css.item}>
        <span className={`${css.status} ${css[isOnline]}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    )
}