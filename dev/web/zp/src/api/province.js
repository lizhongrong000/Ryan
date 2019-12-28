/*
 * @Author: liuyr 
 * 城市模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: Ryan
 * @Last Modified time: 2019-12-25 11:13:07
 */
import axios from '@/utils/axios'
/* 查找数据 */
export  function findAllProvince() {
  return axios.get('/Province/findAll');
}
/**
 * 通过id删除城市信息
 * @param {object} param {id：''}
 */
export function deleteProvinceById(param){
  return axios.post('/Province/deleteById',param);
}


 /**
 * 通过id查找城市信息
 */
export function findProvinceyId(param){
  return axios.get('/Province/findById',{params: param});
}

/**
 * 通过保存或者更新查找城市信息
 */
export function saveOrUpdateProvince(param){
    return axios.post('/Province/saveOrUpdate',param);
}