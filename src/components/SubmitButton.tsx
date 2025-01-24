import { SubmitButtonProps } from "@/types/form";

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, className = "" }) => {
  return (
    <button
      type="submit"
      className={`bg-primary border border-secondary shadow-solid shadow-secondary hover:shadow-none transition-all duration-300 text-secondary rounded-md py-2`}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
