import React from 'react';
import { Link } from 'react-router-dom';

interface NavHeaderProps {
  collapsed?: boolean;
  userName?: string;
}

export default function NavHeader({ collapsed = false, userName }: NavHeaderProps) {
  const initials = (userName || 'U')
    .split(' ')
    .map((s) => s[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <Link
        to="/dashboard/home"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <div
          aria-hidden
          style={{
            width: 36,
            height: 36,
            borderRadius: 999,
            background: '#0b5fff',
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
          }}
        >
          {initials}
        </div>

        {!collapsed && <div style={{ color: '#111', fontWeight: 700 }}>{userName ?? 'User'}</div>}
      </Link>
    </div>
  );
}
