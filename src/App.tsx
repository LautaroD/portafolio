import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePageEN, HomePageES } from './pages/';
import { getAllProjects } from './redux/actions/actionsProjects';
import { useAppDispatch } from './redux/hooks/redux-hooks';

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageEN />} />
        <Route path="/es" element={<HomePageES />} />
      </Routes>
    </BrowserRouter>
  );
};
