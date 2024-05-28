// import { Card } from '@mantine/core';
import { Button } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { getPortfolioByUserId } from '../API';
import PortfolioCard from '../components/Card/Card';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    getPortfolioByUserId('663c88991e2a269319ca4ded').then((res) => {
      console.log('res', res.data.data), setPortfolios(res?.data?.data);
    });
  }, []);
  return (
    <>
      {' '}
      <div className=" flex items-center justify-end pb-3">
        {' '}
        <div>
          <Button className="mr-8">Add New</Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-4">
        {portfolios.map((portfolio, i) => {
          return <PortfolioCard portfolio={portfolio} key={i} />;
        })}
      </div>
    </>
  );
};

export default Portfolio;
