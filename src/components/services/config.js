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
      }
    }
  };

  static ROUTES = [
    '/admin/orders/index',
    '/admin/builders/index',
    '/admin/building-businesses/index',
    '/admin/building-businesses/show/:id',

    '/admin/newspaper-offices/index',
    '/admin/newspaper-offices/show/:id',

    '/admin/builders/index',
    '/admin/builders/show/:id',

    '/admin/account-settings/index',
    '/admin/certificate-records/index',
    '/admin/dashboards/index',
    '/admin/illegal-records/index',
    '/admin/newspaper-offices/index',
    '/admin/notifications/index',
    '/admin/truck-infomations/index',
  ];
}



