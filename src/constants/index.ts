import { bill_image } from "../assets";

export type BillData = {
  id: number;
  image: string;
  title: string;
  date: string;
  amount: number;
};

const dummyCardData: BillData[] = [
  {
    id: 1,
    image: bill_image,
    title: "Bill 1",
    date: "Nov 1 2019",
    amount: 50.59,
  },
  {
    id: 2,
    image: bill_image,
    title: "Bill 2",
    date: "Nov 2 2019",
    amount: 50.59,
  },
  {
    id: 3,
    image: bill_image,
    title: "Bill 3",
    date: "Nov 3 2019",
    amount: 50.59,
  },
  {
    id: 4,
    image: bill_image,
    title: "Bill 4",
    date: "Nov 4 2019",
    amount: 50.59,
  },
  {
    id: 5,
    image: bill_image,
    title: "Bill 5",
    date: "Nov 5 2019",
    amount: 50.59,
  },
  {
    id: 6,
    image: bill_image,
    title: "Bill 6",
    date: "Nov 6 2019",
    amount: 50.59,
  },
  {
    id: 7,
    image: bill_image,
    title: "Bill 7",
    date: "Nov 1 2019",
    amount: 50.59,
  },
  {
    id: 8,
    image: bill_image,
    title: "Bill 8",
    date: "Nov 8 2019",
    amount: 50.59,
  },
  {
    id: 9,
    image: bill_image,
    title: "Bill 9",
    date: "Nov 9 2019",
    amount: 50.59,
  },
];


export { dummyCardData };
