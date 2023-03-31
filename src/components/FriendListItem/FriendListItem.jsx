import css from './FriendListItem.module.css';

const FriendListItem = props => {
  const { avatar, name, isOnline } = props;

  return (
    <div className={css.friends_thumb}>
      <span className={isOnline ? css.online : css.offline} />
      <img
        className={css.friends_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friends_name}>{name}</p>
    </div>
  );
};

export default FriendListItem;
