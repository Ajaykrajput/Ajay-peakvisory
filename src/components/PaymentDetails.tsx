import { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "../ui/atoms/Icons";
import RadioCheckboxInput from "../ui/molecules/RadioCheckboxInput";
import TextInput from "../ui/molecules/TextInput";
import Button from "../ui/molecules/Button";

interface PaymentDetailsForm {
    paymentStatus: string;
    billNumber: string;
    billDate: string;
    paidAmount: string;
    paidDate: string;
    dueDate: string;
    paymentMode: string;
    currency: string;
    bankTransactionRef: string;
    totalAmount: string;
    taxAmount: string;
    totalAmountGBP: string;
    taxAmountGBP: string;
    fixRate: string;
    descriptionType: string;
    lineItem: string
}
  
const initialFormData: PaymentDetailsForm = {
  paymentStatus: "",
  billNumber: "",
  billDate: "",
  paidAmount: "",
  paidDate: "",
  dueDate: "",
  paymentMode: "",
  currency: "",
  bankTransactionRef: "",
  totalAmount: "",
  taxAmount: "",
  totalAmountGBP: "",
  taxAmountGBP: "",
  fixRate: "",
  descriptionType: "",
  lineItem: ""
};

const PaymentDetails = () => {
  
  
  const [formData, setFormData] = useState<PaymentDetailsForm>(initialFormData);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form data submitted, check console");
  
    // Reset form data
    // setFormData(initialFormData);
  };
  
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="py-3 font-semibold">Payment Details</div>
        <div className="p-3 rounded-xl bg-[#E7E7EE] items-center">
          <ChevronUpIcon />
        </div>
      </div>
      <div className="flex gap-10 space-y-2">
        <RadioCheckboxInput
          type="radio"
          name="paymentStatus"
          label="Paid"
          checked={formData.paymentStatus === "paid"}
          onChange={() => setFormData({ ...formData, paymentStatus: "paid" })}
        />
        <RadioCheckboxInput
          type="radio"
          name="paymentStatus"
          label="Unpaid"
          checked={formData.paymentStatus === "unpaid"}
          onChange={() => setFormData({ ...formData, paymentStatus: "unpaid" })}
        />
      </div>
      <TextInput label="Bill Number" name="billNumber" onChange={handleChange} />
      <TextInput label="Bill Date" name="billDate" type="date" onChange={handleChange} />
      <TextInput label="Paid Amount" name="paidAmount" onChange={handleChange} />
      <TextInput label="Paid Date" name="paidDate" type="date" onChange={handleChange} />
      <TextInput label="Due Date" name="dueDate" type="date" onChange={handleChange} />
      <TextInput label="Payment Mode" name="paymentMode" onChange={handleChange} />
      <TextInput label="Currency" name="currency" onChange={handleChange} />
      <TextInput label="Bank Transaction Ref" name="bankTransactionRef" onChange={handleChange} />
      <TextInput label="Total Amount" name="totalAmount" onChange={handleChange} />
      <TextInput label="Tax Amount" name="taxAmount" onChange={handleChange} />
      <TextInput label="Total Amount (GBP)" name="totalAmountGBP" onChange={handleChange} />
      <TextInput label="Tax Amount (GBP)" name="taxAmountGBP" onChange={handleChange} />
      <TextInput label="Fix Rate" name="fixRate" onChange={handleChange} />
      <div className="flex justify-between items-center">
        <span className="py-3 font-semibold">Description</span>
        <span className="p-3 rounded-xl bg-[#E7E7EE] items-center">
          <ChevronUpIcon />
        </span>
      </div>
      <span className=" font-medium text-muted">Line Item</span>
      <div className="flex gap-10 space-y-1">
        <RadioCheckboxInput
          type="radio"
          name="lineItem"
          label="Single"
          checked={formData.lineItem === "single"}
          onChange={() => setFormData({ ...formData, lineItem: "single" })}
        />
        <RadioCheckboxInput
          type="radio"
          name="lineItem"
          label="Multiple"
          checked={formData.lineItem === "multiple"}
          onChange={() => setFormData({ ...formData, lineItem: "multiple" })}
                  
        />
      </div>
      <div className="border-b border-gray-300 -mt-1.5"></div>

      <TextInput label="Type Comment" placeholder="Enter Description" name="descriptionType"  onChange={handleChange}/>
      <div className="flex w-full justify-between items-center">
        <div className="p-3 rounded-xl bg-[#E7E7EE] ">
          <ChevronLeftIcon />
        </div>
        <div className="flex space-x-0.5">
          <span className="w-3 h-3 rounded-full bg-purple-600"></span>
          <span className="w-3 h-3 rounded-full bg-purple-300"></span>
        </div>

        <div className="p-3 rounded-xl bg-[#E7E7EE] ">
          <ChevronRightIcon />
        </div>
      </div>

      <Button
        label="Save"
        btnType="btn-secondary-outline"
        className="py-2.5 cursor-pointer"
        onClick={handleSubmit}
        // disabled={true}
      />
      <Button
        label="Publish"
        btnType="btn-primary"
        iconRight={
          <ChevronDownIcon className="w-4 h-4" pathClassName="fill-white" />
        }
              onClick={handleSubmit}
      />
    </>
  );
};

export default PaymentDetails;
