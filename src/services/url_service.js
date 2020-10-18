const baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

const UrlService = {
  LOGIN: `${baseUrl}/login`,
  REGISTER: `${baseUrl}/user`,
  GET_DASHBOARD_DETAILS: `${baseUrl}/dashboarddetails`,
  GET_TOP_SELLING_PRODUCTS: `${baseUrl}/topselling`,
  GET_ORDERS: `${baseUrl}/orders`,
  GET_ORDER_BY_ID: `${baseUrl}/orderdetails/`,
  GET_CATEGORIES: `${baseUrl}/categories`,
  CREATE_CATEGORY: `${baseUrl}/category`,
  DELETE_CATEGORY: `${baseUrl}/category`,
  EDIT_CATEGORY: `${baseUrl}/category`,
  GET_CATEGORY_BY_ID: `${baseUrl}/category`,
  GET_FRONT_SLIDES: `${baseUrl}/frontslides`,
  GET_PRODUCTS: `${baseUrl}/products`,
  CREATE_PRODUCTS: `${baseUrl}/product`,
  DELETE_PRODUCTS: `${baseUrl}/product`,
  GET_PRODUCTS_BY_ID: `${baseUrl}/product`,
  UPLOAD_IMAGE: `${baseUrl}/uploads.php`,
  REGISTER_CART: `${baseUrl}/register/cart`,
  ADD_TO_CART: `${baseUrl}/carts`,
  GET_CART: `${baseUrl}/mycart`,
  EDIT_CART: `${baseUrl}/carts`,
  DELETE_CART_ITEM: `${baseUrl}/deletecartitem`,
  CHECKOUT: `${baseUrl}/checkout`,
  CAPTURE_PAYMENT: `${baseUrl}/payment/capture`,
  GET_COUPONS: `${baseUrl}/coupons`,
  CREATE_COUPON: `${baseUrl}/coupon`,
  DELETE_COUPON: `${baseUrl}/coupon`,
  EDIT_COUPON: `${baseUrl}/coupon`,
  GET_COUPON_BY_ID: `${baseUrl}/coupon`,
  GET_COUPON_BY_CODE: `${baseUrl}/coupon/code`,


};

export default UrlService;
