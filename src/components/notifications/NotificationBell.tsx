import { BellIcon } from '@radix-ui/react-icons';
import { getUnreadNotificationCount } from './actions';

const NotificationBell = async () => {
  const notificationCount = await getUnreadNotificationCount();

  return (
    <div>
      <BellIcon />
      {notificationCount > 0 && (
        <span className='absolute top-3 right-2 bg-red-500 text-white text-xs px-1 rounded-full'>
          {notificationCount}
        </span>
      )
      }
    </div >);
};

export default NotificationBell;