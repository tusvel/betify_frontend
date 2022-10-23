import type { NextPage } from 'next';

import Layout from '@/components/layout/Layout';

import Meta from '@/utils/meta/Meta';

const Error404: NextPage = () => {
  return (
    <Meta title="Page not found">
      <Layout>
        <div>404 - page not found</div>
      </Layout>
    </Meta>
  );
};

export default Error404;
