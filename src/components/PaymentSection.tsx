import { FC } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../ui/atoms/Icons";
import Button from "../ui/molecules/Button";
import TextareaInput from "../ui/molecules/TextareaInput";
import PaymentDetails from "./PaymentDetails";
import QuickBookCard from "./QuickBookCard";

const PaymentSection: FC = () => {
  return (
    <div className="flex flex-col px-4 py-2 w-full h-full bg-white overflow-scroll scrollbar-hidden">
      <QuickBookCard />
      <div className="flex w-full justify-between py-6 items-center gap-5">
        <Button label="Comment" className="w-1/2" />
        <span className="text-lg text-muted font-medium mr-10">Query</span>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <TextareaInput label="Type Comment" />
        <Button
          label="Add Comment"
          btnType="btn-secondary-outline"
          className="py-2.5"
          disabled
        />
        <Button label="View Line Items" btnType="btn-primary" />

        <div className="flex w-full justify-between items-center">
          <div className="p-3 rounded-xl bg-[#E7E7EE]">
            <ChevronLeftIcon />
          </div>
          <div className="p-3 font-semibold">Payment Details</div>
          <div className="p-3 rounded-xl bg-[#E7E7EE]">
            <ChevronRightIcon />
          </div>
        </div>
        <div className="border-b border-gray-300 -mt-1.5"></div>
        <PaymentDetails />
      </div>
    </div>
  );
};

export default PaymentSection;
