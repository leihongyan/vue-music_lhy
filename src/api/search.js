import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios/index'

export function getHotkey(singerId) {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    hostUin: 0,
    format: 'json',
    uin: 0,
    platform: 'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function search(query, page, zhida, perpage) {
  const url = '/api/search'
  const data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all ',
    format: 'json',
    g_tk: '1467468050'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
