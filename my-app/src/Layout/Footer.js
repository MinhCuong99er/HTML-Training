import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="l-footer">
                    <div className="container">
                        <div className="net2">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h4> Liên hệ </h4>
                                    <div> 
                                        <img src={process.env.PUBLIC_URL + 'images/logo-lien-he.png'} 
                                            alt="images/logo-lien-he.png" /> Trụ sở chính: 
                                    </div>
                                    <div> 
                                        <img src={process.env.PUBLIC_URL + 'images/logo-lien-he.png'} 
                                            alt="images/logo-lien-he.png" /> Chi nhánh: 
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <h4>Giới thiệu </h4>
                                    <ul> 
                                        <li>Về chúng tôi</li>
                                        <li>Lịch sử hình thành</li> 
                                        <li>Cơ cấu tổ chức</li>
                                        <li>Thư ngỏ</li>  
                                        <li>Năng lực nhân sự</li>
                                        <li>Đối tác & nhà cung cấp</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <h4> Tìm chúng tôi </h4>
                                    <div className="l-footer__smallLogo"> 
                                        <ul>
                                            <li> 
                                                <img src={process.env.PUBLIC_URL + 'images/logofacebook.png'} 
                                                alt="images/logofacebook.png" /> 
                                            </li>
                                            <li> 
                                                <img src={process.env.PUBLIC_URL + 'images/LogoViber.png'} 
                                                alt="images/LogoViber.png" />  
                                            </li>
                                            <li> 
                                                <img src={process.env.PUBLIC_URL + 'images/logo-sdt.png'} 
                                                alt="images/logo-sdt.png" /> 
                                            </li>
                                            <li>     
                                                <img src={process.env.PUBLIC_URL + 'images/LogoSkype.png'} 
                                                alt="images/LogoSkype.png" /> 
                                            </li>
                                            <li>
                                                 <img src={process.env.PUBLIC_URL + 'images/LogoZalo.png'} 
                                                alt="images/LogoZalo.png" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c-copyRight">
                    © 2016 THĂNG LONG BCA, All Rights Reserved.
                </div>
            </div>
        )
    }
}
