/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2020-06-09 14:58:14
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-09 15:30:55
 */ 
export default {
  data () {
    return {
      orderStatus: [
        {
          id: '1',
          name: '未接单'
        },
        {
          id: '2',
          name: '已接单'
        },
        {
          id: '3',
          name: '服务中'
        },
        {
          id: '4',
          name: '已完成'
        }
      ],
      orderStatusValue:{
        "1": "未接单", 
        "2": "已接单",
        "3": "服务中",
        "4": "已完成"
      },
    }
  }
}
