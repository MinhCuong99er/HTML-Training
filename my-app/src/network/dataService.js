import request from './request';
let dataService = {
  // getAvailabilityByHotels: params => {
  //   let url = 'api/hotels/availability-by-hotels';
  //   return request.post(params, url);
  // },
  getListBanner: (params) => {
    let url = 'api/banner/get-all-banners';
    return request.post(params, url);
  },

};

export default dataService;
