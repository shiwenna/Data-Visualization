<!--
 * @Descripttion: BorderB 基础边框-大 
 * @params: flex：弹性布局
 * @version:
 * @Author: Caoshuangna
 * @Date: 2019-10-14 10:30:07
 * @LastEditors: Caoshuangna
 * @LastEditTime: 2021-07-05 14:39:23
 -->
<template>
  <div id="container"></div>
</template>
<script>
import loadBDMap from '@/mixins/loadBDMap.js'
// import styleJson from "../../../public/json/custom_map_config.json";
import styleJson from "../../../public/json/custom_map_config_new.json";
export default {
  props: {
    mapCenterLng: {
      type: [Number],
      default: 119.995518
    },
    mapCenterLat: {
      type: [Number],
      default: 35.875138

    },
    zoom: {
      type: [Number],
      default: 11

    },
    cityName: {
      type: [String],
      default: '黄岛区'
    },
    // heatPoints: {
    //   type: [Array],
    //   default(){
    //     return []
    //   }
    // },
    heatFlag: {
      type: [Boolean],
      default: false
    },

  },
  data () {
    return {
      map: {},
      heatPoints: []
    }
  },

  mounted () {
    this.initMap()
  },
 
  created () {
    this.heatPoints = [
      { "lng": 120.089879, "lat": 35.98421, "count": 50 },
      { "lng": 119.985244, "lat": 35.942143, "count": 51 },
      { "lng": 119.888084, "lat": 35.836409, "count": 15 },
      { "lng": 119.784024, "lat": 35.804099, "count": 40 },
      { "lng": 119.864512, "lat": 35.93326, "count": 100 },
      { "lng": 119.954199, "lat": 35.842495, "count": 6 }
      ]
  },
  methods: {
    initMap(){
      loadBDMap('3.0','WPOQci8ySGioCEGt2zMtgjrLofr937E7').then(
        ()=>{
          this.createMap(this.mapCenterLng, this.mapCenterLat, this.zoom)
          this.addMapOverlay(this.cityName)
        }
      ).catch(err => {
          console.log('地图加载失败',err)
        })
    },
    createMap (lng, lat, zoom) {
      this.map = new BMap.Map("container");
      this.map.centerAndZoom(new BMap.Point(lng, lat), zoom);
      this.map.setMapStyleV2({
        styleJson: styleJson
      });
      this.map.enableScrollWheelZoom(true);
      this.map.enableDragging();
      if (this.heatPoints.length > 0) {
        let heatmapOverlay = new BMapLib.HeatmapOverlay({ "radius": 20 });
        heatmapOverlay.show();
        this.map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({ data: this.heatPoints, max: 100 });
      }
    },
    addMapOverlay (cityName) {
      let bdary = new BMap.Boundary();
      bdary.get(cityName, rs => {  //获取行政区域 
     
        let EN_JW = "180, 90;";  //东北角
        let NW_JW = "-180, 90;";  //西北角
        let WS_JW = "-180, -90;";  //西南角
        let SE_JW = "180, -90;"; //东南角
        
        // 添加环形遮罩层
        let ply1 = new BMap.Polygon(rs.boundaries[0]+';' +rs.boundaries[0].split(";")[0]+';'+ SE_JW + WS_JW + NW_JW + EN_JW + SE_JW, {
          strokeColor: "none",
          fillColor: "#061230",
          fillOpacity: 1,
          strokeOpacity: 0.5
        }
        );
        // 建立多边形覆盖物
        this.map.addOverlay(ply1);
        var ply = new BMap.Polygon(rs.boundaries[0], { strokeWeight: 2, strokeColor: "rgba(26,45,79)", fillColor: "" });
        this.map.addOverlay(ply);
      });
    }
  },
  computed: {

  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
  background-color: #061230 !important
}

</style>

