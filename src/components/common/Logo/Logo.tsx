// Functions
import cn from 'classnames';
import * as styles from './Logo.styles';

// Hooks
import { useBreakpoints } from '../../../hooks/useBreakpoints';

// Icons
import { IconFishHook } from '@tabler/icons';

// Types
import type { IProps } from './Logo.types';

const Logo = ({ size, classNames }: IProps) => {
  const { tablet } = useBreakpoints();

  return (
    <div className={cn(styles.base, classNames)}>
      {tablet ? (
        <span className={cn(styles.logo({ size }))}>Rybodex</span>
      ) : (
        <IconFishHook stroke={3} />
      )}
    </div>
  );
};

export default Logo;
