import React, { ChangeEvent } from "react";

interface SearchBoxInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxInput: React.FC<SearchBoxInputProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="search"
      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-sm font-normal text-black bg-white bg-clip-padding border border-solid border-primary rounded transition ease-in-out m-0 focus:text-primary focus:bg-white focus:border-primary focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBoxInput;
