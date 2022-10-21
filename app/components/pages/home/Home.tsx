import { FC } from 'react';

import Layout from '@/components/layout/Layout';

import Meta from '@/utils/meta/Meta';

const Home: FC = () => {
  return (
    <Layout>
      <Meta title="Music" description="Listen to music in Betify.">
        <div>Home</div>
      </Meta>
    </Layout>
  );
};

export default Home;
