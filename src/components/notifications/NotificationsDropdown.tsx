import NewNotificationDialog from './new-notification/NewNotificationDialog';
import NotificationList from './NotificationList';


interface NotificationDropdownProps { }

const NotificationDropdown: React.FC<NotificationDropdownProps> = () => {
  return (
    <div className='flex flex-col p-3 space-y-2 max-h-96' >
      <div className='flex flex-col sm:flex-row align-middle justify-between items-center' >
        <h3 className='font-bold text-lg' > Notifications </h3>
        <NewNotificationDialog />
      </div>
      < NotificationList />
    </div>
  );
};

export default NotificationDropdown;