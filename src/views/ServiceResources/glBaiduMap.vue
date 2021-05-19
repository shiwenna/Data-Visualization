<!--
 * @Descripttion: 百度地图WebGL
 * @params: flex：弹性布局
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2020-06-23 17:36:14
 -->
<template>
  <div>
    <div id="map_container"></div>
    <div class="eChartMap-data">
      <p>服务组织</p>
      <ul class="eChartMap-tab">
        <li class="eChartMap-tab-select front-overflow"
            :class="{'eChartMap-tab-select-this':eChartTabSelect}"
            v-for="(item,index) in datas"
            :key="index"
            >
            <!-- @click=tabClick(index) -->
          <i class="eChartMap-tab-select-icon"
             :class="`icon${item.icon}`"></i>
          <span> {{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import loadBDMap from '@/mixins/loadBDMap.js'
import styleJson from "../../../public/json/custom_map_config_new.json";
export default {
  props: {
    mapCenterLng: {
      type: [Number],
      default: 119.878163
    },
    mapCenterLat: {
      type: [Number],
      default: 35.836494

    },
    zoom: {
      type: [Number],
      default: 11

    },
    cityName: {
      type: [String],
      default: '黄岛区'
    },
    // datas: {
    //   type: [Object],
    //   default(){
    //     return {}
    //   }
    // },
  },
  data () {
    return {
      bmapgl: {},
      datas: {},
      eChartTabSelect: true
    }
  },

  mounted () {
    this.initMap()
  },

  created () {
    // 测试数据
    this.datas = {
      agency: {
        name: '养老机构',
        icon: 1,
        company_list: [
          { uid: "1363", name: "青岛市黄岛区灵山卫街道开山口社区老年人日间照料中心", longitude: 120.110904, latitude: 35.937653 },
          { uid: "1364", name: "青岛市黄岛区灵山卫街道大楼社区老年人日间照料中心", longitude: 119.925717, latitude: 35.84547 },
        ],
        list: [
          { longitude: 120.130164, latitude: 35.932363, company_id: "1363" },
          { longitude: 120.084817, latitude: 35.904887, company_id: "1363" },
          { longitude: 120.162431, latitude: 35.938968, company_id: "1363" },
          { longitude: 119.884248, latitude: 35.708656, company_id: "1364" },
          { longitude: 120.137026, latitude: 35.921404, company_id: "1364" },
          { longitude: 120.083847, latitude: 35.943614, company_id: "1364" },
        ]
      },
      service: {
        name: '合作服务商',
        icon: 2,

        company_list: [
          { uid: "1365", name: "青岛市黄岛区灵山卫街道大湾社区老年人日间照料中心", longitude: 119.678503, latitude: 35.789276 },
        ],
        list: [
          { longitude: 120.146968, latitude: 35.943886, company_id: "1365" },
          { longitude: 119.739369, latitude: 35.920794, company_id: "1365" },
          { longitude: 120.147327, latitude: 35.944179, company_id: "1365" },
        ]
      },
      center: {
        name: '居家和社区养老服务中心',
        icon: 5,

        company_list: [
          { uid: "1367", name: "青岛市黄岛区灵山卫街道大楼社区老年人日间照料中心", longitude: 120.133258, latitude: 36.01719 },
        ],
        list: [
          { longitude: 120.156039, latitude: 36.03307, company_id: "1367" },
          { longitude: 119.775589, latitude: 35.919391, company_id: "1367" },
          { longitude: 119.73707, latitude: 35.788334, company_id: "1367" },
        ]
      }
    };

  },
  methods: {
    initMap () {
      loadBDMap('1.0', 'WPOQci8ySGioCEGt2zMtgjrLofr937E7', 'webgl').then(
        () => {
          this.createMap(this.mapCenterLng, this.mapCenterLat, this.zoom)
          this.addMapOverlay(this.cityName)
        }
      ).catch(err => {
        console.log('地图加载失败', err)
      })
    },
    createMap (lng, lat, zoom) {
      // 1. 创建地图实例
      this.bmapgl = new BMapGL.Map('map_container', {
        restrictCenter: false,
        style: { styleJson: styleJson }
      });
      this.bmapgl.enableKeyboard();
      this.bmapgl.enableScrollWheelZoom();
      this.bmapgl.enableInertialDragging();
      this.bmapgl.enableContinuousZoom();
      var point = new BMapGL.Point(lng, lat);
      this.bmapgl.centerAndZoom(point, zoom);
      this.bmapgl.setTilt(40);
      this.bmapgl.setHeading(0);

      this.addFlyLine(this.datas);
      

    },
    addMapOverlay (cityName) {
      let bdary = new BMapGL.Boundary();
      bdary.get(cityName, rs => {  //获取行政区域 

        let EN_JW = "180, 90;";  //东北角
        let NW_JW = "-180, 90;";  //西北角
        let WS_JW = "-180, -90;";  //西南角
        let SE_JW = "180, -90;"; //东南角

        // 添加环形遮罩层
        let ply1 = new BMapGL.Polygon(SE_JW + WS_JW + NW_JW + EN_JW + SE_JW + ';' + rs.boundaries[0] + ';' + rs.boundaries[0].split(";")[0] + ';', {
          strokeColor: 'none',
          fillColor: "#061230",
          fillOpacity: 1,
          strokeOpacity: 0.5
        }
        );
        // 建立多边形覆盖物
        // this.bmapgl.addOverlay(ply1);
        var ply = new BMapGL.Polygon(rs.boundaries[0], { strokeWeight: 2, strokeColor: "#DDD", fillOpacity: 0 });
        ply.disableMassClear()
        this.bmapgl.addOverlay(ply);
      });
    },
    addMarker (pointInfo,iconNum) {
      var that = this;
      //建立标注点
      var point = new BMapGL.Point(pointInfo.longitude, pointInfo.latitude); //将标注点转化成地图上的点
      var myIcon = new BMapGL.Icon(require(`../../assets/img/iconMap2_${iconNum}.png`),
        new BMapGL.Size(100, 106), { anchor: new BMapGL.Size(50, 75) });
      var marker = new BMapGL.Marker(point, { icon: myIcon });  // 创建标注
      this.bmapgl.addOverlay(marker);  //将标注点添加到地图上
      //添加监听事件
      var thePoint = pointInfo;
      marker.addEventListener("click",
        //显示信息的方法
        function () {
          that.showInfo(this, thePoint);
        });
    },
    addFlyLine(datas){
      var curve = new mapvgl.BezierCurve();

      var data = [];
      for (var key in datas) {

        // 连接线
        while (datas[key].list.length > 0) {
          let item = datas[key].list.pop()
          let temp = datas[key].company_list.filter(_ => _.uid == item.company_id)
          if (temp.length < 1) {
            return;
          }
          var startPoint = { lng: temp[0].longitude, lat: temp[0].latitude };
          this.addMarker(temp[0],this.datas[key].icon)
          var endPoint = { lng: item.longitude, lat: item.latitude };

          curve.setOptions({
            start: [startPoint.lng, startPoint.lat],
            end: [endPoint.lng, endPoint.lat]
          });
          var curveModelData = curve.getPoints();

          data.push({
            geometry: {
              type: 'LineString',
              coordinates: curveModelData
            },
          });
        }
      }
      var view = new mapvgl.View({
        map: this.bmapgl
      });

      var flylineLayer = new mapvgl.FlyLineLayer({
        style: 'chaos', //飞线动画速度不均匀
        step: 0.1, //飞线动画的步长，步长越大动画速度越快
        color: '#fff', //底线颜色
        textureColor: '#56ccdd', //飞线动画颜色
        textureWidth: 20, //飞线动画的宽度
        textureLength: 30 //飞线动画的长度，占整条线的百分比，取值0-100
      });
      view.addLayer(flylineLayer);
      flylineLayer.setData(data);

    },
    showInfo (thisMarker, point) {
      //获取点的信息
      var sContent =
        '<ul style="margin:0 0 5px 0;padding:0.2em 0">'
        + '<li style="line-height: 26px;font-size: 15px;">'
        + '<span style="width: 50px;display: inline-block;">名称：</span>' + point.name + '</li>'
        + '</ul>';
      var infoWindow = new BMapGL.InfoWindow(sContent); //创建信息窗口对象
      thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
    },
    // tabClick (index) {
    //   this.eChartTabSelect=index;
    //   // this.datas.filter=this.datas

    //   this.bmapgl.clearOverlays();
    //   // this.addFlyLine({[index]:this.datas[index]});
    //   // this.addFlyLine(this.datas);
    // }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
#map_container {
  width: 100%;
  height: 75vh;
  background-color: #061230 !important;
}

.eChartMap-data {
  display: flex;
  position: absolute;
  bottom: 0;
  background-color: rgba(10, 23, 39, 0.8);
  padding: 10px;
  width: 100%;
  z-index: 10;
}

ul.eChartMap-tab {
  display: flex;
  align-items: center;
}
.eChartMap-tab-select {
  min-width: 220px;
  height: 34px;
  margin-left: -20px;
  background-image: url(../../assets/img/tab2.png);
  text-align: center;
  line-height: 34px;
  color: #9fceff;
  font-size: 14px;
  display: flex;
  justify-content: center;
}
.eChartMap-tab-select-this {
  background-image: url(../../assets/img/tab1.png);
}
.eChartMap-data > p {
  line-height: 48px;
  width: 150px;
  text-align: center;
  font-size: 16px;
  color: #9fceff;
}
.eChartMap-tab-select-icon {
  width: 21px;
  height: 21px;
  display: block;
  margin-top: 8px;
}
.icon1 {
  background-image: url(../../assets/img/icon1.png);
}
.icon2 {
  background-image: url(../../assets/img/icon2.png);
}
.icon3 {
  background-image: url(../../assets/img/icon3.png);
}
.icon4 {
  background-image: url(../../assets/img/icon4.png);
}
.icon5 {
  background-image: url(../../assets/img/icon5.png);
}
li.eChartMap-tab-select > span {
  display: block;
  margin-left: 10px;
}

#fuwu_xinxi .xinxi_top {
  width: 100%;
  overflow: hidden;
  background: #938def;
  float: left;
}
#fuwu_xinxi .xinxi_top .xinxi_left {
  width: 30%;
  height: 100%;
  /*background: green;*/
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
#fuwu_xinxi .xinxi_top .xinxi_left img {
  width: 60%;
  height: 80%;
  border-radius: 50%;
  margin: 5px;
}
#fuwu_xinxi .xinxi_top .xinxi_right {
  float: left;
  width: 70%;
}
#fuwu_xinxi .xinxi_top .xinxi_right h3 {
  color: white;
}
#fuwu_xinxi .xinxi_top .xinxi_right p {
  color: #bbb8f4;
}
#fuwu_xinxi .xinxi_bottom {
  width: 100%;
  overflow: hidden;
  background: #a29df2;
  float: left;
}
#fuwu_xinxi .xinxi_bottom .margin_center {
  margin: 1.2vh;
}
#fuwu_xinxi .xinxi_bottom .margin_center p {
  color: #e8e6fc;
}
</style>

