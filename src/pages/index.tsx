// Layout
import MainLayout from '../layouts/MainLayout';

// Components
import Hero from '../components/layout/Hero';

// Types
import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
