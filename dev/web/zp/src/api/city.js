/*
 * @Author: liuyr 
 * 城市模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: Ryan
 * @Last Modified time: 2019-12-25 10:47:34
 */
import axios from '@/utils/axios'
/* 查找数据 */
export  function findAllCity() {
  return axios.get('/City/findAll');
}
/**
 * 通过id删除城市信息
 * @param {object} param {id：''}
 */
export function deleteCityById(param){
  return axios.post('/City/deleteById',param);
}

 /**
 * 通过id查找城市信息
 */
export function findCityById(param){
  return axios.get('/City/findById',{params: param});
}

/**
 * 通过省份查找城市信息
 */
export function findCityByProvinceId(param){
  return axios.get('/City/findByProvinceId',{params: param});
}

/**
 * 通过保存或者更新查找城市信息
 */
export function saveOrUpdateCity(param){
    return axios.post('/City/saveOrUpdate',param);
}