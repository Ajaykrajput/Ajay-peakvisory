import {
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
  SettingIcon,
  UserIcon,
} from "../ui/atoms/Icons";
import SearchBoxInput from "../ui/molecules/SearchBoxInput";

const Navbar: React.FC = () => {
  
  return (
    <div className="flex justify-between w-full items-center h-20 px-4 bg-white">
      <div className="flex items-center w-1/2 max-w-1/3 space-x-4 px-4 py-2 gap-1">
        <h1 className="text-base">Review</h1>
        <SearchBoxInput placeholder="Google" value="" onChange={() => {}} />
        <h1 className="text-xs p-2 ml-2 bg-green-50 rounded-xl text-[#2CA01D] font-semibold text-nowrap">
          Quickbook’s Data
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-center px-4 py-2 gap-2 text-primary text-base">
        <div className="p-4 rounded-xl bg-tertiory ">
          <SearchIcon />
        </div>
        <div className="p-3 rounded-xl bg-tertiory ">Export to Excel</div>
        <div className="p-3 rounded-xl bg-tertiory ">Add Document</div>
        <div className="p-3 rounded-xl bg-tertiory flex items-center justify-center gap-3">
          Connect <ChevronDownIcon />
        </div>
        <div className="p-3 rounded-xl bg-tertiory ">
          <BellIcon />
        </div>
        <div className="p-3 rounded-xl bg-tertiory ">
          <SettingIcon />
        </div>
        <div className="p-3 rounded-xl bg-tertiory ">
          <UserIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
