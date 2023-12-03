import { useState, useContext } from 'react'
import './Login.scss'
import { toast } from 'react-toastify';
import { loginApi } from '../../services/UserService';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { UserContext } from '../context/UserContext';


const Login = () => {
    const { loginContext, user } = useContext(UserContext)

    const navigate = useNavigate();

    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassword: true
    }
    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput);

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput);

        let regx = /\S+@\S+\.\S+/;
        if (!regx.test(valueLogin)) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.error("Vui lòng nhập đúng định dạng email!")
            return;
        }

        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.error("Vui lòng nhập Email!")
            return;
        }

        if (!password) {
            setObjValidInput({ ...defaultObjValidInput, isValidPassword: false })
            toast.error("Vui lòng nhật mật khẩu!")
            return;
        }

        let resLogin = await loginApi(valueLogin, password);
        if (resLogin && +resLogin.status == 1) {
            toast.success("Đăng nhập thành công.");
            let codeId = resLogin.response.type == 0 ? resLogin.response.studentId : resLogin.response.studentId.teacherId;
            let fullName = resLogin.response.fullName;
            let data = {
                isAuthenticated: true,
                token: 'fake token',
                account: {
                    fullName, codeId
                }
            }
            sessionStorage.setItem('account', JSON.stringify(data));
            loginContext(data);
            console.log('/Login-data', data)
            console.log('/Login', user)
            navigate("/")
            //window.location.reload();
        }
        else {
            toast.error("Đăng nhập thất bại!");
        }
    }

    const handlePressEnter = (event) => {
        if (event.charCode === 13 && event.code === "Enter") {
            handleLogin();
        }
    }

    return (
        <div className="login-container">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <div className="brand">
                            SSPS PRINT
                        </div>
                        <div className="detail">
                            SSPS PRINT giúp bạn in ấn và chia sẻ tài liệu với mọi người một cách dể dàng.
                        </div>
                    </div>
                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
                        <div className="brand d-sm-none">
                            SSPS PRINT
                        </div>
                        <input
                            type="text"
                            className={objValidInput.isValidValueLogin ? 'form-control' : 'is-invalid form-control'}
                            placeholder="Email or username..."
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}
                        />
                        <div className="input-2">
                            <input
                                type={isShowPassword === true ? "text" : "password"}
                                className={objValidInput.isValidPassword ? 'form-control' : 'is-invalid form-control'}
                                placeholder="Password..."
                                value={password}
                                onChange={(event) => { setPassword(event.target.value) }}
                                onKeyPress={(event) => handlePressEnter(event)}
                            />
                            <i className={isShowPassword === true ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            ></i>
                        </div>
                        <button className='btn btn-primary' onClick={() => handleLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login