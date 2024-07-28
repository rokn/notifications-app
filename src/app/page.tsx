import NavigationMenu from '@/components/navigation/NavigationMenu';
import NewNotificationForm from '@/components/notifications/new-notification/NewNotificationForm';

export default function Page() {
  return (
    <div className='dark:text-slate-100'>
      <h1 className='text-4xl font-bold text-center mt-8'>Welcome to the Notification App</h1>
      <p className='text-center mt-4'>This is a simple app for notifications.</p>
    </div>
  );
}
