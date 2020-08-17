const baseUrl =  `${process.env.REACT_APP_API_BASE_URL}/api/v1`;

const UrlService = {
    LOGIN: `${baseUrl}/login`,
    REGISTER: `${baseUrl}/user`,
    GET_DASHBOARD_DETAILS: `${baseUrl}/dashboarddetails`,
    GET_TOP_SELLING_PRODUCTS: `${baseUrl}/topselling`,
    GET_ORDERS: `${baseUrl}/orders`,
    GET_CATEGORIES: `${baseUrl}/categories`,
    CREATE_CATEGORY: `${baseUrl}/category`,
    DELETE_CATEGORY: `${baseUrl}/category`,
    EDIT_CATEGORY: `${baseUrl}/category`,
    GET_CATEGORY_BY_ID: `${baseUrl}/category`,
    GET_FRONT_SLIDES: `${baseUrl}/frontslides`,
    GET_PRODUCTS: `${baseUrl}/products`,
    UPLOAD_IMAGE: `${baseUrl}/uploads.php`,
}

export default UrlService;