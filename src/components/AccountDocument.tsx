import React from "react";
import { dummyCardData } from "../constants";
import Button from "../ui/molecules/Button";
import AccountBillCard, { AccountBillData } from "./AccountBillCard";

const AccountDocument: React.FC = () => {
  return (
    <div className="flex flex-col w-full mx-10">
      <div className="flex items-center justify-center gap-4 my-5 ">
        <span className="text-lg text-muted font-medium">All Documents</span>
        <Button label="Bills" className="w-fit text-black" />
        <span className="text-lg text-muted font-medium">Receipts</span>
      </div>
      <div className="border-2 rounded-t-xl rounded-b-xl border-border">
        {dummyCardData.map((data: AccountBillData) => (
          <AccountBillCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AccountDocument;
