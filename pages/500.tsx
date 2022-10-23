import type { NextPage } from 'next';

import Layout from '@/components/layout/Layout';

import Meta from '@/utils/meta/Meta';

const Error500: NextPage = () => {
  return (
    <Meta title="Page not found">
      <Layout>
        <div>500 - Server-side error occurred</div>
      </Layout>
    </Meta>
  );
};

export default Error500;
