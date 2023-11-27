import './App.scss';
import { ToastContainer } from 'react-toastify';
import { Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import TableUsers from './components/TableUsers';
import TableFileType from './components/FileType/TableFileType';
import Container from 'react-bootstrap/Container';
import Login from './components/Login';
import TablePageSize from './components/PageSize/TablePageSize';
import TablePrinter from './components/Printer/TablePrinter';

function App() {


  return (
    <>
      <div className='app-container'>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<TableUsers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/file-type" element={<TableFileType />} />
            <Route path="/page-size" element={<TablePageSize />} />
            <Route path="/printer" element={<TablePrinter />} />
          </Routes>
        </Container>


      </div>
      <ToastContainer
        position="top-right"
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
