import clsx from "clsx";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
            inline-flex 
            justify-center 
            py-2 
            px-4 
            border 
            border-transparent 
            shadow-sm 
            text-sm 
            font-medium 
            rounded-md 
            text-white 
            focus:outline-none 
            focus:ring-2 
            focus:ring-offset-2 
            focus:ring-indigo-500 
            `,
        {
          "w-full": fullWidth,
          "bg-indigo-600 hover:bg-indigo-700": !secondary && !danger,
          "bg-gray-600 hover:bg-gray-700": secondary,
          "bg-red-600 hover:bg-red-700": danger,
          "cursor-not-allowed opacity-50": disabled,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
