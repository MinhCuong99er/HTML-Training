// import api from './index'
import config from '../config';
// let cors = require('cors');
//import api from '../Components/Global/api';
const request = {
    get: (url) => {
        if (!url) url = 'api/rest'
        url = config.HOST + '/' + url
        return fetch(url)
            .catch(err => { console.log(err) })
            .then((response) => response.json())
    },
    post: async (data, url) => {
        url = config.HOST + '/' + url
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer customer',
            'Accept-Language': 'vi'
        }
        process.env.NODE_ENV === 'development' && console.log(`\n %c-----------------------------[ POST ]-------------------------------------- \n [` + url + ` ] \n `, 'color:red;font-size:15px', headers, data, ' \n----------------------------------------------------------------------------- \n');
        try {
            let response = await fetch(url, {
                crossDomain: true,
                method: 'POST',
                headers,
                'Accept-Language': 'vi',
                body: JSON.stringify(data),
            });

            let rs = await response.json();
            process.env.NODE_ENV === 'development' && console.log(`\n %c-----------------------------[ RESPONSE ]------------------------------------ \n [` + url + ` ] \n `, 'color:green;font-size:15px', 'Data Post', data, `\n`, ' Respone  ', rs, ' \n----------------------------------------------------------------------------- \n');
            switch (response.status) {
                case 200: return rs
                case 401: return logoutUser()
                default: {
                    console.log('err')
                    throw (rs.message)
                }
            }
        } catch (error) {
            console.log(error)
            if (error.msg) {
                console.log(error.msg)
            }
            throw error

        }

    }
}
function logoutUser() {
    // alert('Phiên làm việc của bạn đã hết hạn. vui lòng đăng nhập lại')
    localStorage.clear('USER')
    // window.location.href = "/";
}
export default request