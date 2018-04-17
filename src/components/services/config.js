export default class {

  static VERSION = '__BUILD_VERSION__';
  static ICP_INFO = '京ICP备12048196';
  static APIS = {
    baseUrl: `//${location.host}`,
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
        // 首页
        'dashboard_index': ['get', '/home'],

        // 我的报馆
        'myexhibition_index': ['get', '/booth/list/'],

        //施工人员
        'constructor_index': ['get', '/constructor/list/'],//施工人员列表
        'constructor_create': ['post', '/constructor/list/'],//添加施工人员
        'constructor_delete': ['get', '/constructor/delete/'],//删除施工人员
        'constructor_update': ['post', '/constructor/update/'],//添加或更新施工人员
        'constructor_upload_insurance': ['post', '/constructor/upload_insurance/'],//上传保险单

        //银行汇款水单
        'invoice_remittance_receipt_index': ['get', '/invoice/remittance_receipt/list/'],//银行汇款水单列表

        //个人和公司
        'profile_detail': ['get', '/profile/detail/'],//查看个人和公司

      },
      '/finance': {
        'payment_notice_index': ['get', '/api/billheads/{id}/info/'],//付款通知单列表
      },
      '/notice': {
        'notice_index': ['get', '/notifications/'],//通知列表
        'notice_search': ['get', '/notifications/search/'],//搜索列表
        'notice_detail': ['get', '/notifications/{id}/'],//获取通知详情
        'sms_send_code': ['post', '/sms/send_code/'],//发送短信验证码
        'sms_verify_code': ['post', '/sms/verify_code/'],//验证短信验证码
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



