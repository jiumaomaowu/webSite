import {pget, ppost} from '../index'


export function _getBlog (params={}) {
  return  pget('/api/admin/blog/list',params)
}

export function _getDesc (params={}) {
  return  ppost('/api/admin/blog/desc',params)
}