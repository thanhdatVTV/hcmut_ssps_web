import { Route, Routes } from "react-router-dom";
import LoginNew from '../../components/Login/Login';
import TablePageSize from '../../components/PageSize/TablePageSize';
import TablePrinter from '../../components/Printer/TablePrinter';
import Users from '../../components/ManageUsers/Users';
import Home from '../../components/Home';
import TableFileType from '../../components/FileType/TableFileType';
import PrivateRoutes from "./PrivateRoutes";
import UploadFile from "../UploadFile/UploadFile";

const AppRoutes = () => {
    return (
        <>
            <PrivateRoutes path="/users" element={Users} />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/users" element={<TableUsers />} /> */}
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/Login" element={<LoginNew />} />

                {/* <Route path="/printer" element={<TablePrinter />} />
                <Route path="/file-type" element={<TableFileType />} />
                <Route path="/page-size" element={<TablePageSize />} /> */}

                {/* <Route path='/users' element={<Users />} /> */}
                <Route path='/upload' element={<UploadFile />} />
            </Routes>
        </>
    )
}

export default AppRoutes;