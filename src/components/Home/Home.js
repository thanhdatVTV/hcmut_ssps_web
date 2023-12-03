import { Button } from "react-bootstrap";
import './Home.scss'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const redirectToOtherPage = (item) => {
        if (item === 1) {
            navigate("/upload")
        }
        if (item === 2) {
            navigate("/upload")
        }
        if (item === 3) {
            navigate("/upload")
        }
        if (item === 4) {
            navigate("/upload")
        }
        if (item === 5) {
            navigate("/upload")
        }
        if (item === 6) {
            navigate("/upload")
        }
        if (item === 7) {
            navigate("/upload")
        }
    };

    return (
        <>
            <div className="home-container">
                <div className="col-12 w-100">
                    <Button className="col-md-4 col-6 btn btn-primary btn-home" onClick={() => redirectToOtherPage(1)}>
                        <span className="title"><i className="fa-brands fa-freebsd"></i> In tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-secondary btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> Mua trang in</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-success btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> Lịch sử in ấn</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-danger btn-home">
                        <span className="title"> <i className="fa-brands fa-freebsd"></i>Kho tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-warning btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> Xuất báo cáo</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-info btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> Quản lý danh mục</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-info btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> Thông tin cá nhân</span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home;