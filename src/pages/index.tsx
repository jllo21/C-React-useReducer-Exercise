import type { NextPage } from 'next';
import Head from 'next/head';
import { Exercise } from '../Exercise';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Form Time!</title>
        <meta name="description" content="IABBB Form Exercise" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Form Exercise</h1>
        <Exercise />
      </main>
    </div>
  );
};

export default Home;
