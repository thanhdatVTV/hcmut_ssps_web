import { Button } from "react-bootstrap";
import './Home.scss'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {

    const { user } = useContext(UserContext);
    console.log(user)

    return (
        <>
            <div className="home-container">
                <div className="col-12 w-100">
                    <Button className="col-md-4 col-6 btn btn-primary btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> In tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-secondary btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> In tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-success btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> In tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-danger btn-home">
                        <span className="title"> <i className="fa-brands fa-freebsd"></i>In tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-warning btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> In tài liệu</span>
                    </Button>
                    <Button className="col-md-4 col-6 btn btn-info btn-home">
                        <span className="title"><i className="fa-brands fa-freebsd"></i> In tài liệu</span>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home;