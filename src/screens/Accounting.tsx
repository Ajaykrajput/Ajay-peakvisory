import { FC } from "react";
import { invoice } from "../assets";
import AccountDocument from "../components/AccountDocument";
import Navbar from "../components/Navbar";
import PaymentSection from "../components/PaymentSection";
import Button from "../ui/molecules/Button";

const Accounting: FC = () => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col w-full max-w-3/4">
        <Navbar />
        <div className="flex flex-col w-full bg-white rounded-xl p-5 mx-5 mt-5 gap-4">
          <div className="ml-auto mx-10">
            <Button
              label="Add to Expenses Report"
              className="w-fit"
              btnType="btn-primary"
            />
          </div>
          <div className="flex w-full overflow-scroll scrollbar-hidden pb-56 flex-col h-screen">
            <div className="flex w-full justify-between items-center gap-2">
              <div className="flex w-full h-full max-w-1/3">
                <AccountDocument />
              </div>
              <div className="flex w-full h-full border-2 border-border border-dashed rounded-4xl mx-5">
                <img
                  src={invoice}
                  alt="invoice"
                  className="w-full h-full p-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full max-w-1/4">
        <PaymentSection />
      </div>
    </div>
  );
};

export default Accounting;
