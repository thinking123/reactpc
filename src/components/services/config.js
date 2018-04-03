export default class {

  static VERSION = '__BUILD_VERSION__';
  static ICP_INFO = '京ICP备12048196';
  static APIS = {
    baseUrl: `//${location.host}`,
    items: {
      '/admin': {
        'user_index': ['get', '/getAdminUserList'],
        'user_create': ['post', '/addAdminUser'],
        'user_update': ['put', '/updateAdminUser'],
      },
      '/system': {
        'banner_index': ['get', '/banners'],
        'banner_create': ['post', '/banner'],
        'banner_delete': ['delete', '/banner/{id}'],
        'banner_update': ['put', '/banner/{id}'],
      },
      '/register': {
        'banner_index': ['get', '/banners'],
        'banner_create': ['post', '/banner'],
        'banner_delete': ['delete', '/banner/{id}'],
        'banner_update': ['put', '/banner/{id}'],
      }
    }
  };

  static ROUTES = [
    '/register/index',

    '/admin/orders/index',

    '/admin/my-exhibition/index',
    '/admin/my-exhibition/show/:id',
    '/admin/my-exhibition/add',

    '/admin/worker/index',
    '/admin/worker/show/:id',
    '/admin/worker/add',

    '/admin/payment-notice/index',
    '/admin/payment-notice/show/:id',

    '/admin/account-settings/index',
    '/admin/certificate-records/index',
    '/admin/dashboards/index',

    '/admin/illegal-records/index',
    '/admin/illegal-records/show',

    '/admin/notifications/index',
    '/admin/notifications/show',

    '/admin/bank-flow/index',
    '/admin/bank-flow/show',
    '/admin/bank-flow/add',
  ];
}



