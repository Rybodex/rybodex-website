// Components
import Element from './Element';
import * as Dialog from '@radix-ui/react-dialog';

// Functions
import cn from 'classnames';

// Hooks
import { useState, useContext } from 'react';
import { useBreakpoints } from '../../../../hooks/useBreakpoints';

// Icons
import { IconMenu } from '@tabler/icons';

// Styles
import * as styles from './Menu.styles';

// Types
import type { IProps } from './Menu.types';
import Button from '../../../common/Button';

// TODO: Add custom type
// TODO: Animated "Hamburger" icon
const Menu = ({ elements, direction = 'row', gap = 0 }: IProps) => {
  return (
    <>
      <div className={cn(styles.base, `flex:${direction}`, `gap:${gap}`)}>
        {elements.map((element: any) => (
          <Element key={element.id} text={element.text} url={element.url} active={element.active} />
        ))}
      </div>

      <Button className={styles.button} type={'primary'} roundness={'round'}>
        Open App
      </Button>
    </>
  );
};

export default Menu;
