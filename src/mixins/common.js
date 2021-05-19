/*
 * @Descripttion: 基础js
 * @version: 
 * @Author: Caoshuangna
 * @Date: 2019-09-21 16:14:20
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2019-10-10 18:08:34
 */
export default {
  methods: {
    /* 图片文件压缩
     参数
     img：图片
     quantity：压缩质量 参数0-1
    **/
    compressImgFile (img, quantity) {
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')
      console.log('img.width=', img.width)
      var width = img.width,
        height = img.height
      var scale = width / height
      // 图片宽度大于1000像素的同比例压缩为1000像素
      var widthTemp = img.width
      if (widthTemp > 1000) {
        widthTemp = 1000
      }

      var w = widthTemp,
        h = parseInt(widthTemp / scale)
      var anw = document.createAttribute('width')
      anw.nodeValue = w
      var anh = document.createAttribute('height')
      anh.nodeValue = h
      canvas.setAttributeNode(anw)
      canvas.setAttributeNode(anh)
      ctx.drawImage(img, 0, 0, w, h)

      var base64 = canvas.toDataURL('image/jpeg', quantity)
      console.log('图片大小', base64.length)
      return base64
    },
    // base64转成bolb对象
    dataURItoBlob (base64Data) {
      var byteString
      if (base64Data.split(',')[0].indexOf('base64') >= 0) { byteString = atob(base64Data.split(',')[1]) } else { byteString = unescape(base64Data.split(',')[1]) }
      var mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]
      var ia = new Uint8Array(byteString.length)
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ia], {type: mimeString })
    },
  /**
   * dataURL转换为File对象
   * @param dataurl
   */
    dataURLtoFile (dataurl, filename) {
      let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, {type: mime})
    }
  }
}
