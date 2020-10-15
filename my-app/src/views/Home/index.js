import React, { useEffect, useState } from 'react';
import dataService from '../../network/dataService';

function Home(props) {
    const [count, setCount] = useState(0);
    const [data, setData] = useState();
    useEffect(() => {
        const getBanner = async () => {
            let result = await dataService.getListBanner()
            setData(result.data)
        }
        getBanner()
    }, [])
    return (
        <>
            <div className="c-block is-bg"> 
                <div className="container">
                    <div className="c-action"> 
                        <ul className="clearfix"> 
                            <li>TRANG CHỦ</li>
                            <li>GIỚI THIỆU</li>
                            <li >LĨNH VỰC HOẠT ĐỘNG </li>
                            <li>SẢN PHẨM</li>
                            <li>DỰ ÁN</li>
                            <li>TIN TỨC</li>
                            <li>TUYỂN DỤNG</li>
                            <li>LIÊN HỆ</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-img"> 
                <img src={process.env.PUBLIC_URL + '/images/App-Banner-Vinareseach.png'} 
                    alt="App-Banner-Vinareseach"/>
                <div className="centerTextInImg">
                    <h1> LIÊN HỆ</h1>
                    <h4>Trang chủ / Liên hệ</h4>
                </div>
            </div>
            <div className="location">
                <div className="container"> 
                    <ul>
                        <li>
                            <button className="btn btn-primary">          
                            <img src={process.env.PUBLIC_URL + 'images/logo-lien-he.png'} 
                            alt="images/logo-lien-he.png" /> Ha Noi</button>
                        </li>
                        <li>
                            <button className="btn btn-primary">
                            <img src={process.env.PUBLIC_URL + 'images/logo-lien-he.png'} 
                            alt="images/logo-lien-he.png" /> Ho Chi Minh</button>       
                        </li>
                    </ul>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.676323152793!2d105.84126381429738!3d21.0056079939456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2shk!4v1601702488906!5m2!1svi!2shk" 
                    width="100%" height="480" frameborder="0" allowfullscreen="" aria-hidden="false" 
                    tabindex="0"></iframe>
                </div>
            </div>
            <div className="container">
                <div className="set"> 
                    <div className="row">
                        <div className="col-sm-4"> 
                            <h5>THÔNG TIN LIÊN HỆ</h5>
                           <div>Trụ sở chính:</div>
                           <div>Chi nhánh:</div>
                         </div>
                        <div className="col-sm-8">
                           <h5>LIÊN HỆ VỚI CHÚNG TÔI</h5> 
                           <form>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Họ và tên *"></input>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-sm-6">
                                        <input className="form-control" placeholder="Điện thoại *"></input>
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="form-control" placeholder="Email *"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Nội dung *" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Gửi đi</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>    
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}> Click me </button>
                <div>
                    {data ? data.map((item, index) => {
                        return  <div key={index}>{item.id}</div>
                    }):null}
                </div> 
                <div>
                    {data ? data.map((item, index) => {
                        let my_timestamp = item.createdAt;
                        var time = new Date(my_timestamp);

                        var t = Number(time);
                        return <div key={index}>{item.createdAt + " - " + time.getDate() +"/" + 
                        time.getMonth() + "/" + time.getFullYear() + " - " +
                        t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " - " + t.toLocaleString()}</div>
                    }):null}
                </div>
            </div>
            
        </>
    )
}
export default Home