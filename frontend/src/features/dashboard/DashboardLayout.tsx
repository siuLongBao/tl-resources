import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavItem from '../../components/NavItem';
import NavHeader from '../../components/NavHeader';

const HomeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 11.5L12 4l9 7.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 21V12h14v9"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const VideosIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M22 8l-4 3.2V8V8z" fill="currentColor" />
  </svg>
);

const SettingsIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"
      stroke="currentColor"
      strokeWidth="1.4"
    />
    <path
      d="M19.4 15a1 1 0 0 0 .2 1.1l.2.2a1 1 0 0 1-1.1 1.6l-.3-.1a8.4 8.4 0 0 1-1.2.6l-.1.3a1 1 0 0 1-1.4.4l-.2-.1a1 1 0 0 0-1.1.3l-.3.3a1 1 0 0 1-1.6-1.1l.1-.3a8.4 8.4 0 0 1-.6-1.2l-.3-.1a1 1 0 0 0-.4-1.4l-.1-.1a1 1 0 0 1 .3-1.6l.3-.3a1 1 0 0 0 0-1.6l-.3-.3a1 1 0 0 1-.3-1.6l.1-.1a1 1 0 0 0 .4-1.4l-.3-.1a8.4 8.4 0 0 1 .6-1.2l.1-.3a1 1 0 0 1 1.6-1.1l.3.3a1 1 0 0 0 1.1.3l.3-.1a8.4 8.4 0 0 1 1.2.6l.2.2a1 1 0 0 0 1.6-1.1l-.1-.3a1 1 0 0 1 1.1-1.6l.2.2a1 1 0 0 1 .2 1.1l-.1.3a8.4 8.4 0 0 1 .6 1.2l.3.1a1 1 0 0 0 1.4.4l.1-.1a1 1 0 0 1 1.6.3l.3.3a1 1 0 0 1-1.1 1.6l-.3-.1a8.4 8.4 0 0 1-1.2.6l-.1.3a1 1 0 0 0 .3 1.6l.3.3z"
      stroke="currentColor"
      strokeWidth="0.8"
    />
  </svg>
);

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside
        style={{
          width: collapsed ? 72 : 220,
          transition: 'width 160ms',
          borderRight: '1px solid #e6e6e6',
          padding: '12px 8px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
        >
          <NavHeader collapsed={collapsed} userName="You" />
          <button
            aria-label="Toggle sidebar"
            onClick={() => setCollapsed((c) => !c)}
            style={{ padding: 6, borderRadius: 6, backgroundColor: 'white' }}
          >
            {collapsed ? '▸' : '◂'}
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <NavItem to="/dashboard/home" label="Home" collapsed={collapsed} icon={HomeIcon} />
          <NavItem to="/dashboard/videos" label="Videos" collapsed={collapsed} icon={VideosIcon} />
          <NavItem
            to="/dashboard/settings"
            label="Settings"
            collapsed={collapsed}
            icon={SettingsIcon}
          />
        </nav>

        <div style={{ marginTop: 'auto', fontSize: 12, color: '#666' }}>
          {!collapsed && <div>© MyApp</div>}
        </div>
      </aside>

      <main style={{ flex: 1, padding: 20, overflow: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}
