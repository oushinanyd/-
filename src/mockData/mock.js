/**
 * Created by yn137 on 2019/5/17.
 */
import Mock from 'mockjs'

import homeData from './homeData.json'
import categoryList from './category.json'

//homeData接口
Mock.mock('/home', {code:0,data:homeData})
// category接口
Mock.mock('/category', {code:0,data:categoryList})
