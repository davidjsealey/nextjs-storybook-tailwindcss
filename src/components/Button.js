const Button = ({ href, styles, disabled, label }) => {
  let classes = [
    "py-2",
    "px-8",
    "rounded-full",
    "border",
    "border-blue-500",
    "focus:outline-none",
    "shadow-md",
    "active:shadow-none",
    "mr-2",
    "text-sm",
    "no-underline",
    "font-sans",
    "font-semibold",
  ];

  if (disabled === true) {
    const disabledClasses = ["opacity-50", "pointer-events-none"];
    classes = [...classes, ...disabledClasses];
  }

  return <button
    href={`${href}`}
    className={`${styles} ${classes.join(' ')}`}
    disabled={disabled}>{label}</button>;
};

export default Button;
