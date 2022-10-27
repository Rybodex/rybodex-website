// Types
import * as styles from './Button.styles';

// Types
import type { IProps } from './Button.types';

const Button = ({ children, type, roundness, disabled, className }: IProps) => {
  return (
    <div
      className={styles.button({
        type,
        roundness,
        disabled,
        class: className ?? '',
      })}
    >
      {children}
    </div>
  );
};

export default Button;
