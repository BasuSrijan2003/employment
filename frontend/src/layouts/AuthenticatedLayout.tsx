// src/layouts/AuthenticatedLayout.tsx

import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthenticatedLayoutProps {
  children: ReactNode;
  userType: string | null;
}

const AuthenticatedLayout: FC<AuthenticatedLayoutProps> = ({
  children,
  userType,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area with side navigation */}
      <div className="flex flex-1">
        {/* Side navigation for authenticated pages */}
        <aside className="w-64 bg-gray-100 min-h-screen p-4 hidden md:block">
          <div className="mb-6 font-semibold text-lg">
            {userType === "candidate" ? "Candidate Portal" : "Institute Portal"}
          </div>
          <nav className="space-y-2">
            <Link to="/profile" className="block p-2 hover:bg-gray-200 rounded">
              Profile
            </Link>
            <Link
              to="/resume-builder"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Resume Builder
            </Link>
            <Link
              to="/resume-analysis"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Analysis
            </Link>
            <Link
              to="/job-search"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Jobs
            </Link>
            <Link
              to="/settings"
              className="block p-2 hover:bg-gray-200 rounded"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Mobile navigation bar (visible on small screens) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-10">
          <Link to="/profile" className="text-center p-2">
            <div className="text-xs">Profile</div>
          </Link>
          <Link to="/resume-builder" className="text-center p-2">
            <div className="text-xs">Resume</div>
          </Link>
          <Link to="/resume-analysis" className="text-center p-2">
            <div className="text-xs">Analysis</div>
          </Link>
          <Link to="/job-search" className="text-center p-2">
            <div className="text-xs">Jobs</div>
          </Link>
          <Link to="/settings" className="text-center p-2">
            <div className="text-xs">Settings</div>
          </Link>
        </div>

        {/* Main content area */}
        <main className="flex-1 p-4 md:p-6 pb-16 md:pb-6">{children}</main>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
