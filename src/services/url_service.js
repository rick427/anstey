const baseUrl =  `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

const UrlService = {
    LOGIN: `${baseUrl}/login`,
    GET_DASHBOARD_DETAILS: `${baseUrl}/dashboarddetails`,
    GET_TOP_SELLING_PRODUCTS: `${baseUrl}/topselling`,
    GET_ORDERS: `${baseUrl}/orders`,
    GET_CATEGORIES: `${baseUrl}/categories`,
    GET_FRONT_SLIDES: `${baseUrl}/frontslides`,
    GET_PRODUCTS: `${baseUrl}/products`
}

export default UrlService;