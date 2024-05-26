"use client"
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

import { useRouter } from 'next/navigation';
import { useEffect, useState ,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { getClients } from './redux/features/jobs/jobsSlice';

 
export default function Home() {

  const { clients } = useSelector((state: RootState) => state.jobsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [isrefresh, setRefresh] = useState(false)
  const router = useRouter();
  useEffect(() => {

    dispatch(getClients({}));
  }, [isrefresh]);
  console.log(clients, "clientsss");

  const handleRefresh = () => {
    setRefresh(!isrefresh)

  }

  console.log(clients)

  return (
    <div>
      <button onClick={handleRefresh}>refresh</button>
      <Head>
        <title>James Smith - Portfolio</title>
        <meta name="description" content="Portfolio of James Smith, a creative designer from New York" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Footer />
    </div>
  );
}
// has context menu