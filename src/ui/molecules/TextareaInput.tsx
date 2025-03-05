interface TextareaInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaInput: React.FC<TextareaInputProps> = ({
  label,
  placeholder = "Start Typing",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Label */}
      <label className="text-lg font-semibold text-muted mb-1">{label}</label>

      {/* Textarea */}
      <textarea
        className="w-full p-2 text-muted border-b border-gray-300 focus:outline-none focus:border-primary placeholder:text-muted"
        rows={3}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {/* Bottom Border */}
      {/* <div className="border-b border-gray-300 mt-2"></div> */}
    </div>
  );
};

export default TextareaInput;
