import { useState } from "react";
import {
  ChevronDownIcon,
  CopyClipIcon,
  UploadCloudIcon,
} from "../ui/atoms/Icons";
import Button from "../ui/molecules/Button";
import ToolTip from "../ui/organism/Tooltip";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Receipts");

  const tabs = ["EasyUpload", "Bills", "Receipts", "Bank"];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="max-w-xl my-auto mx-auto w-full bg-white p-6 rounded-xl shadow-md">
      <div className="flex justify-between pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md ${
              selectedTab === tab
                ? "text-purple-600 font-semibold border-2 border-border"
                : "text-muted font-semibold border-2 border-transparent"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
        <button className="text-muted">✖</button>
      </div>

      <div className="flex justify-between border-b-2 pb-2 border-border items-center mt-4">
        <div>
          <p className="text-muted">Document Owner</p>
          <p className="font-semibold text-sm">Accountant 01</p>
        </div>
        <div>
          <p className="text-muted">Client</p>
          <p className="text-gray-400">Select Client</p>
        </div>
        <div className="p-3 mt-6">
          <ChevronDownIcon />
        </div>
      </div>

      {/* Upload Box */}
      <div className="border-dashed border-2 flex items-center justify-center h-32 border-gray-300 rounded-lg mt-4">
        <ToolTip tooltip="Drag & Drop or Choose file to upload">
          <div className="flex w-full gap-5 px-10">
            <div className="p-5 bg-tertiory mx-auto rounded-2xl">
              <UploadCloudIcon className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center ml-auto">
              <p className="text-primary font-semibold mt-2">
                Drag & Drop or Choose file to upload
              </p>
              <p className="text-gray-400 text-sm">JPG, PNG, PDF, CVS</p>
            </div>
          </div>
        </ToolTip>
      </div>

      <Button
        label="Add Receipt"
        btnType="btn-primary"
        className="mx-auto mt-5 "
      />

      {/* Send Over Email */}
      <div className="mt-4">
        <p className="text-muted">Send Over Email</p>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-gray-700 font-semibold">Single :</p>
          <p className="text-primary">abc.single@gmail.com</p>
          <CopyClipIcon
            className="w-5 h-5 text-gray-400 cursor-pointer"
            onClick={() => copyToClipboard("abc.single@gmail.com")}
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-gray-700 font-semibold">Multiple :</p>
          <p className="text-primary">abc.multiple@gmail.com</p>
          <CopyClipIcon
            className="w-5 h-5 text-gray-400 cursor-pointer"
            onClick={() => copyToClipboard("abc.multiple@gmail.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
