import { useState } from "react";
import { quickbook_logo } from "../assets";
import RadioCheckboxInput from "../ui/molecules/RadioCheckboxInput";

const QuickBookCard: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div className="flex flex-col border-2 border-border w-full py-4 cursor-pointer">
      <div className="flex items-center gap-4 px-5">
        <div className="flex">
          <img
            src={quickbook_logo}
            alt="logo"
            className="w-16 h-14 bg-green-500 rounded-full"
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="text-black font-semibold text-base justify-between flex">
            <span className="flex">Quickbook</span>
            <span className="mr-2 text-muted font-medium">Publishing ...</span>
          </div>
          <div className="text-muted justify-between flex">
            <span>Date: 16 June, 2024</span>
            <span className="mr-2 text-base font-medium">Jimmy Jason</span>
          </div>
          <h1 className="text-muted text-sm">8:15 PM</h1>
        </div>
      </div>

      <div className="px-5 pt-5 flex justify-between">
        <RadioCheckboxInput
          type="checkbox"
          label="Auto-sync"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />

        <RadioCheckboxInput
          type="checkbox"
          label="Save Config"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>
    </div>
  );
};

export default QuickBookCard;
