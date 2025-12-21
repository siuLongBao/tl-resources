import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Login from '../pages/Login';
import DashboardLayout from '../features/dashboard/DashboardLayout';
import DashboardHome from '../pages/Dashboard/Home';
import DashboardVideos from '../pages/Dashboard/Videos';
import DashboardSettings from '../pages/Dashboard/Settings';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="home" element={<DashboardHome />} />
        <Route path="videos" element={<DashboardVideos />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Route>
    </Routes>
  );
}
