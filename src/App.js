import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar';
import Footer from './components/views/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { fetchTables } from './redux/tableRedux';
import { fetchStatuses } from './redux/statusRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import TableDetails from './components/pages/TableDetails';
import EditTable from './components/pages/EditTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => fetchStatuses(dispatch), [dispatch]);
  useEffect(() => fetchTables(dispatch), [dispatch]);

  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/table/:id'} element={<TableDetails />} />
        <Route path={'/table/update/:id'} element={<EditTable />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
