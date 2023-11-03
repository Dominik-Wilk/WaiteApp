import React from 'react';
import RenderTable from '../features/RenderTable';
import { useSelector } from 'react-redux';
import { getTables } from '../../redux/tableRedux';

const Home = () => {
  const table = useSelector(getTables);
  return (
    <>
      <h1>All tables</h1>
      {table.length === 0 ? <h2 id='ApiInfo'>Loading...</h2> : <RenderTable />}
    </>
  );
};

export default Home;
