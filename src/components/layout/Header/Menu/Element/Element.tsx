// Functions
import cn from 'classnames';
import Link from 'next/link';

// Styles
import * as styles from './Element.style';

// Types
import type { IProps } from './Element.types';

const Element = ({ text, url, active }: IProps) => {
  return (
    <Link href={url}>
      <a className={cn(styles.base, { [styles.active]: active })}>{text}</a>
    </Link>
  );
};

export default Element;
