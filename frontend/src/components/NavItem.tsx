import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
  collapsed?: boolean;
  icon?: React.ReactNode;
}

export default function NavItem({ to, label, collapsed = false, icon }: NavItemProps) {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      {({ isActive }) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 12px',
            color: isActive ? '#0b5fff' : '#444',
            textDecoration: 'none',
            fontWeight: isActive ? 700 : 600,
          }}
        >
          <span
            aria-hidden
            style={{
              width: 20,
              height: 20,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: isActive ? '#0b5fff' : '#888',
            }}
          >
            {icon ?? <span style={{ fontSize: 12 }}>•</span>}
          </span>
          {!collapsed && <span>{label}</span>}
        </div>
      )}
    </NavLink>
  );
}
