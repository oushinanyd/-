/**
 * 接口文档
 */

import ajax from './ajax'
//获取homeData接口
export const reqHomeData=() => ajax('/home')
//获取category接口
export const reqCategoryData=()=>ajax('/category')
