import React from 'react';
import './App.scss';
import { useAppSelector } from './utils/hook';
import { LinearProgress } from '@mui/material'
import { ErrorSnackbar } from './components/ErrorSnackbar/ErrorSnackbar';
import Header from './components/Header/Header';
import { Main } from './components/Main/Main';

function App() {

  const loading = useAppSelector(state => state.app.statusLoading)

  return (
    <div>
      <Header />
      {loading && <LinearProgress sx={linearStyle} />}
      <Main />
      <ErrorSnackbar />
    </div>
  );
}

let linearStyle: React.CSSProperties = {
  position: 'absolute',
  top: '1vh',
  width: '1440px',
  height: '5px'
}


export default App;
