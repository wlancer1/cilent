import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

export const accountLogin = (name, password) => fetch('/api/login_user.html', {name, password}, 'GET');
export const getUser = () => fetch('/api/queryUser_user.html', {uid: getStore('user_id')},'GET');
export const getproduct = pageNo => fetch('/api/query_data.html', {pageNo},'GET');