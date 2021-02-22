const Button = ({ href, styles, disabled, label }) => {
  let classes = [
    "rounded-full",
    "border",
    "focus:outline-none",
    "mr-2",
    "px-24", 
    "py-3",
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
    href={href}
    className={`${styles} ${classes.join(' ')}`}
    disabled={disabled}>{label}</button>;
};

export default Button;
