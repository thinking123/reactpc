export default class {

  static VERSION = '__BUILD_VERSION__';
  static ICP_INFO = '京ICP备12048196';
  static APIS = {
    baseUrl: 'http://47.93.242.118:10080',
    items: {
      '/auth': {
        'signin': ['post', '/signin'],
        'user_create': ['post', '/addAdminUser'],
        'user_update': ['put', '/updateAdminUser'],
      },
      '/system': {
        'banner_index': ['get', '/banners'],
        'banner_create': ['post', '/banner'],
        'banner_delete': ['delete', '/banner/{id}'],
        'banner_update': ['put', '/banner/{id}'],
      },
      '/customer': {
        'dashboard_index': ['get', '/home'],
        'myexhibition_index': ['get', '/booth/list/'],
      },
    }
  };

  static ROUTES = [
    '/registers/step1',
    '/registers/step2',

    '/admin/orders/index',

    '/admin/my-exhibition/index',
    '/admin/my-exhibition/show/:id',
    '/admin/my-exhibition/add-step1',
    '/admin/my-exhibition/add-step2',

    '/admin/worker/index',
    '/admin/worker/show/:id',
    '/admin/worker/add-step1',
    '/admin/worker/add-step2',

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

    '/admin/user-company/index',
  ];
}



