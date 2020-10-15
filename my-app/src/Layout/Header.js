import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="l-nav">
                    <div className="container clearfix">
                        <ul className="left-awesome">
                            <li>
                                <li><i className="fa fa-phone-square" aria-hidden="true"></i> 84.024.3533.3621</li>
                                <li><i className="fa fa-envelope-o" aria-hidden="true"></i> info@bca-thanglong.vn</li>
                            </li>
                        </ul>
                        <ul className="right-awesome">
                            <li>
                                <li><i className="fa fa-sign-in" aria-hidden="true"></i> Đăng nhập</li>
                                <li><i className="fa fa-search" aria-hidden="true"></i></li>
                                <li><i className="fa fa-plane" aria-hidden="true"></i></li>
                                <li><i className="fa fa-ambulance " aria-hidden="true"></i></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
