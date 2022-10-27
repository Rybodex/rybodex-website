// Components
import Header from '../../components/layout/Header';

// Styles
import * as styles from './MainLayout.styles';

// Types
import type { IProps } from './MainLayout.types';

const MainLayout = ({ children }: IProps) => {
  return (
    <div className={styles.base}>
      <Header />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
