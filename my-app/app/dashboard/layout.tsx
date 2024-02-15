import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen bg-black w-[20vw] text-white text-2xl">
          <ul className="pt-5 flex-col gap-5 px-3">
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Payment</li>
          </ul>
        </div>
        <div className="p-5">{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
