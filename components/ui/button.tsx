interface ButtonProps {
  classNames?: string;
  onClick: () => void;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { classNames, children, onClick } = props;

  const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow ${
        classNames ?? ""
      }`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

export default Button;
