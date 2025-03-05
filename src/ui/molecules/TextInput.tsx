interface TextInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder = "Start Typing",
  type = "text",
  value,
  name,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full mb-4">
      {/* Label */}
      <label className="text-gray-600 text-sm">{label}</label>

      {/* Input Field */}
      <input
        type={type}
        name={name}
        className="w-full text-muted font-medium border-b border-gray-300 focus:outline-none focus:border-muted placeholder:text-muted mt-1 py-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
