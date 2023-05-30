import css from './FriendList.module.css'
import { CardOfFriend } from 'components/CardOfFriend/CardOfFriend'

export const FriendList = ({friends}) =>{
    return (
        <ul className={css.list}>
{friends.map(({avatar, name, isOnline, id}) => (
   <CardOfFriend key={id}
   avatar={avatar}
   name={name}
   isOnline={isOnline}/>
))}
</ul>
    )
}