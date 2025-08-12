'use client';

import './globals.css';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Routes where sidebar + topnav are hidden
  const noSidebarRoutes = ['/', '/login', '/register'];
  const hideSidebar = noSidebarRoutes.includes(pathname);

  return (
    <html lang="en">
      <body className={hideSidebar ? 'bg-white' : 'flex h-screen overflow-hidden'}>
        {!hideSidebar ? (
          <>
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white fixed h-full">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-64 overflow-y-auto bg-gray-100">
              {/* Top Navigation */}
              <TopNav />

              {/* Page content */}
              {children}
            </div>
          </>
        ) : (
          <>
            {/* Routes without sidebar or top nav */}
            {children}
          </>
        )}
      </body>
    </html>
  );
}
