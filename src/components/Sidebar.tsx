import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import {
  AccountingIcon,
  BankingIcon,
  ContactUsIcon,
  DashboardIcon,
  InvoicingIcon,
  QueryIcon,
  ReportsIcon,
} from "../ui/atoms/Icons";

const SidebarMenu = [
  {
    title: "Dashboard",
    path: "/",
    icon: (
      <div className="w-6 h-6 mt-1">
        <DashboardIcon />
      </div>
    ),
  },
  {
    title: "Accounting",
    path: "/accounting",
    icon: (
      <div className="w-6 h-6 mt-1">
        <AccountingIcon />
      </div>
    ),
  },
  {
    title: "Banking",
    path: "/banking",
    icon: (
      <div className="w-6 h-6 mt-1">
        <BankingIcon />
      </div>
    ),
  },
  {
    title: "Reports",
    path: "/reports",
    icon: (
      <div className="w-6 h-6 mt-1">
        <ReportsIcon />
      </div>
    ),
    gap: true,
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: (
      <div className="w-6 h-6 mt-1">
        <ContactUsIcon />
      </div>
    ),
  },
  {
    title: "Invoicing",
    path: "/invocing",
    icon: (
      <div className="w-6 h-6 mt-1">
        <InvoicingIcon />
      </div>
    ),
  },
  {
    title: "Queries",
    path: "/queries",
    icon: (
      <div className="w-6 h-6 mt-1">
        <QueryIcon />
      </div>
    ),
  },
];

const Sidebar: React.FC = () => {
  return (
    <div>
      <main className="flex h-screen ">
        <div className="flex flex-col items-center h-full w-[84px] overflow-hidden bg-primary">
          <div className="flex flex-row items-center mt-7">
            <img src={logo} alt="logo" height={48} width={48} />
          </div>
          <div className="w-full mt-5">
            <div className="flex flex-col w-full text-white">
              {SidebarMenu.map((Menu, index) => (
                <NavLink
                  to={Menu.path}
                  className={({ isActive }) =>
                    isActive
                      ? `flex flex-col items-center justify-center w-full h-[72px] py-5 px-0 bg-blue-800 border-l-4 border-white`
                      : `flex flex-col items-center justify-center w-full h-[72px] py-5 px-0 hover:bg-blue-800 border-l-4 border-transparent`
                  }
                  key={index}
                >
                  {Menu.icon}
                  <span className="text-sm font-medium">{Menu.title}</span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="relative inline-block mt-auto text-white w-full cursor-pointer">
            <div className="flex flex-col items-center justify-center w-full my-auto text-basic bg-primary h-[72px]">
              <QueryIcon />
              <span className="py-1 text-sm font-medium">Help</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
