/*
 * @Descripttion: 
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-09-21 16:14:20
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-08-02 11:57:46
 */
export default {
  data () {
    return {
     sooId:''
    }
  },
 
  mounted () {
    this.getLocationHref()
  },
  methods: {
    getLocationHref() {
      if(sessionStorage.getItem(sessionStorage.getItem('hrefQuery_type'))){
      this.adId = sessionStorage.getItem(sessionStorage.getItem('hrefQuery_type')).adId
      this.sooId = sessionStorage.getItem(sessionStorage.getItem('hrefQuery_type')).sooId
      this.sooCode = sessionStorage.getItem(sessionStorage.getItem('hrefQuery_type')).sooCode
    }
  },
  },
  created () {
    
    
  },
  
}