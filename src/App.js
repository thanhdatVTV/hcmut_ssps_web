import './App.scss';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, Link } from "react-router-dom";
import Nav from './components/Navigation/Nav';
import Home from './components/Home';
import TableUsers from './components/TableUsers';
import TableFileType from './components/FileType/TableFileType';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import LoginNew from './components/Login/Login';
import TablePageSize from './components/PageSize/TablePageSize';
import TablePrinter from './components/Printer/TablePrinter';
import Users from './components/ManageUsers/Users';
import { useState } from 'react';
import { useEffect } from 'react';
import _ from "lodash"

function App() {
  const [account, setAccount] = useState();

  useEffect(() => {
    let session = sessionStorage.getItem('account');
    if (session) {
      setAccount(JSON.parse(session));
    }
  }, []);

  return (
    <>
      <div className='app-container'>
        {account && !_.isEmpty(account) && account.isAuthenticated && <Nav />}
        {/* <Header /> */}
        {/* <Container> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/users" element={<TableUsers />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/Login/Login" element={<LoginNew />} />
          <Route path="/file-type" element={<TableFileType />} />
          <Route path="/page-size" element={<TablePageSize />} />
          <Route path="/printer" element={<TablePrinter />} />
          <Route path='/users' element={<Users />} />
        </Routes>
        {/* </Container> */}


      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
