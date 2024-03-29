import AppBase, {$config, $route} from 'components/scripts/index';
export default class {
  static infoPush(inMsg) {
    AppBase.notify(inMsg, 'info');
    $route.push(inUrl);
  }

  static successPush(inMsg, inUrl) {
    AppBase.notify(inMsg, 'success');
    $route.push(inUrl);
  }

  static formLayout(inArray) {
    const columns = inArray || [6, 16];
    return {
      labelCol: {span: columns[0]},
      wrapperCol: {span: columns[1]},
    };
  }
}
