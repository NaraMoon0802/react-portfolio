import * as React from 'react';
// import '../scss/component/_actionButton.scss';

interface ButtonProps {
  /**
   * action
   */
  action: 'edit' | 'save' | 'delete';
  /**
   * button size
   */
  size?: 'small' | 'large';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ActionButton = ({
  action = 'edit',
  size = 'large',
  ...props
}: ButtonProps) => {
  let mode = 'c-actionBtn';
  let label = '';
  switch (action) {
    case 'edit':
      mode = `${mode}--edit`;
      label = '編集';
      break;
    case 'save':
      mode = `${mode}--save`;
      label = '保存';
      break;
    case 'delete':
      mode = `${mode}--delete`;
      label = '削除';
      break;
    default:
      break;
  }

  return (
    <button
      type="button"
      className={['c-actionBtn', `c-actionBtn--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
