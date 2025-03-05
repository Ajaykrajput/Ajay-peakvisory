import React from "react";
import ToolTip from "../ui/organism/Tooltip";

export type AccountBillData = {
  id: number;
  image: string;
  title: string;
  date: string;
  amount: number;
};

interface AccountBillCardProps {
  data: AccountBillData;
}

const AccountBillCard: React.FC<AccountBillCardProps> = ({ data }) => {
  return (
    <div className="flex items-center mx-auto border-b-2 border-border gap-4 py-4 cursor-pointer">
      <div className="flex ml-10">
        <img src={data.image} alt="logo" height="40px" width="40px" />
      </div>
      <ToolTip tooltip={data.title}>
        <h1 className="text-primary text-lg">{data.title}</h1>
        <h1 className="text-muted">Date: {data.date}</h1>
        <h1 className="text-muted">₤ {data.amount.toFixed(2)}</h1>
      </ToolTip>
    </div>
  );
};

export default AccountBillCard;
