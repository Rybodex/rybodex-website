// Components
import { motion, AnimatePresence } from 'framer-motion';
import Menu from './Menu';
import Logo from '../../common/Logo';

// Functions
import cn from 'classnames';

// Hooks
import { useEffect, useRef, useState } from 'react';
import { useClickOutside } from '@react-hooks-library/core';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { useBreakpoints } from '../../../hooks/useBreakpoints';

// Variables
import { elements } from '../../../data/constants';

// Styles
import * as styles from './Header.styles';

// Types
import type { IProps } from './Header.types';
import { IconMenu, IconX } from '@tabler/icons';

const Header = ({}: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { tablet } = useBreakpoints();
  const scrollPosition = useScrollPosition();
  const headerRef = useRef(null);

  useClickOutside(headerRef, () => {
    setMenuOpen(false);
  });

  useEffect(() => {
    if (tablet && menuOpen) setMenuOpen(false);
  }, [tablet]);

  return (
    <header className={styles.base}>
      <div
        ref={headerRef}
        className={cn(styles.container, { [styles.scrolled]: scrollPosition > 15 || menuOpen })}
      >
        <div className="flex w:100% jc:space-between gap-x:32">
          <Logo size="medium" classNames={styles.logo} />

          {tablet ? (
            <Menu elements={elements} gap={16} />
          ) : (
            <div onClick={() => setMenuOpen((prev) => !prev)} className={styles.hamburger}>
              {menuOpen ? <IconX stroke={1.5} /> : <IconMenu stroke={1.5} />}
            </div>
          )}
        </div>

        <AnimatePresence>
          {!tablet && menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 312, opacity: 1 }}
              exit={{
                height: 0,
                opacity: 0,
                transition: { opacity: { duration: 0.25 } },
              }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.1 }}
              className={styles.menu}
            >
              <Menu elements={elements} direction="col" gap={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
