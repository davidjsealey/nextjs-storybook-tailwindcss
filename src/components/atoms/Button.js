import { useState } from 'react'
import PropTypes from 'prop-types'

const classes = [
  'inline-flex',
  'rounded-full',
  'border',
  'focus:outline-none',
  'mr-2',
  'px-24', 
  'py-3',
  'text-sm',
  'no-underline',
  'font-sans',
  'font-semibold',
];

const ButtonPrimary = ({ href, disabled, label }) => {

  const [isActive, setIsActive] = useState(false);

  const styles = [
    'bg-white', 
    'border-blue-500',
  ];

  if (disabled === true) {
    styles.push('cursor-not-allowed opacity-50 pointer-events-none');
  }

  if (isActive) {
    styles.push('bg-blue-500 border-blue-500 text-white');
  } else {
    styles.push('text-blue-500');
  }

  return <button
    href={href}
    className={`${styles.join(' ')} ${classes.join(' ')}`}
    disabled={disabled}
    onClick={() => !isActive ? setIsActive(true) : setIsActive(false)}
    data-selected={!isActive ? 'false' : 'true'}
  >{label}</button>;
};

const ButtonSecondary = ({ href, disabled, label }) => {

  const styles = [
    'border-black', 
    'bg-black', 
    'text-white',
    'uppercase'
  ];

  if (disabled === true) {
    styles.push('opacity-50 pointer-events-none');
  }

  return <button
    href={href}
    className={`${styles.join(' ')} ${classes.join(' ')}`}
    disabled={disabled}>{label}</button>;
};

const Button = props => {
  switch (props.variant.toLowerCase()) {
    case 'primary':
      return <ButtonPrimary {...props} />;
      break;
    case 'secondary':
    default:
      return <ButtonSecondary {...props} />;
  }
}

const basePropTypes = {
  href: PropTypes.string, 
  disabled: PropTypes.bool, 
  label: PropTypes.string.isRequired
}

ButtonPrimary.propTypes = {
  ...basePropTypes
}

ButtonSecondary.propTypes = {
  ...basePropTypes
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button;
