import { Hello } from '@/components/Hello';

export async function generateMetadata() {
  return {
    title: 'Dashboard',
  };
}

const Dashboard = async () => {
  return (
    <div className="[&_p]:my-6">
      <Hello />
    </div>
  );
};

export default Dashboard;
