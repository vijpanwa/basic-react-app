interface ButtonProps {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}

export const Button = ({ children, onClick, color }: ButtonProps) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};
