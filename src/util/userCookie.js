import Cookies from 'js-cookie';

export function setCookie(info) {
  const arrInfo = Object.entries(info);
  for (let i = 0; i < arrInfo.length; i += 1) {
    Cookies.set(arrInfo[i][0], arrInfo[i][1]);
  }
  return true;
}

/**
 * 获取用户的cookie信息
 */
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

/**
 * 删除用户的cookie信息
 */
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
