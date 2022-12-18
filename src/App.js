import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import NFTList from './pages/NFTList';
import NFTProfile from './pages/NFTProfile'
import NFTCheckOut from './pages/NFTCheckOut';
import HelpCenter from './pages/HelpCenter'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nft-list' element={<NFTList/>} />
        <Route path='/nft-profile' element={<NFTProfile/>} />
        <Route path='/nft-checkout' element={<NFTCheckOut/>} />
        <Route path='/help' element={<HelpCenter/>} />
      </Routes>
    </>
  );
}

export default App;
