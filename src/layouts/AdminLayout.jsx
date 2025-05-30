import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';

const AdminLayout = () => (
  <div className="admin-layout flex">
    <AdminSidebar />
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;