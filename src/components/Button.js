const Button = ({ href, styles, disabled, label }) => {
  const classes = [
    "py-2",
    "px-4",
    "shadow-md",
    "no-underline",
    "rounded-full",
    "font-sans",
    "font-semibold",
    "text-sm",
    "border",
    "border-blue-500",
    "btn-primary",
    "focus:outline-none",
    "active:shadow-none",
    "mr-2",
  ];

  return <button
    href={`${href}`}
    className={`${styles} ${classes.join(' ')}`}
    disabled={disabled}>{label}</button>;
};

export default Button;