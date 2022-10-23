import { FC } from 'react';

import Layout from '@/components/layout/Layout';

import Meta from '@/utils/meta/Meta';

const Home: FC = () => {
  return (
    <Meta title="Music" description="Listen to music in Betify.">
      <Layout>
        <div>Home</div>
      </Layout>
    </Meta>
  );
};

export default Home;
