<template>
  <div>
    <div v-loading.fullscreen.lock="fullscreenLoading" class="map-container" id="map-container" :style="mapSize"></div>
    <!-- <MapTools></MapTools> -->
  </div>
</template>

<script>
import MapTools from "@/components/component/MapTools.vue";
import { debuglog } from 'util';
export default {
  name: "mapView",
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    }
  },
  components: {
      MapTools,
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    },
    mapnodelists() {
        return this.$store.getters.nodeMapList || {};
    },
  },
  watch:{
      "mapnodelists":function() {
          /* console.log(this.mapnodelists) */
          this.mapInit(this.mapnodelists)
      }
  },
  data() {
    return {
      map: null,
      loading:true,
      fullscreenLoading: false,
      mapboxurl: 'https://api.mapbox.com/styles/v1/tony1duan/cjyqy7w2s02lh1cqoqoppsx5g/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidG9ueTFkdWFuIiwiYSI6ImNqeW82NDd4czExY3czYnF1eGhxZ29hMnEifQ.hzvWApDHuwy26QZFZArSkQ',
      option:{
        zoom: 3,
        maxZoom:18,
        minZoom:1,
        renderWorldCopies:true,
        id: 'mapbox.streets'
      }
    };
  },
  mounted() {
    this.getMapNodeList()
  },
  methods: {
    mapInit(mapnodelists){
        var southWest = L.latLng(-90, -180),
            northEast = L.latLng(90, 180),
            bounds = L.latLngBounds(southWest, northEast);
        this.map = this.$utils.map.createMap("map-container",{
            zoomControl: true,
            maxBounds: bounds,
            zoom: 3,
            maxZoom: 18,
            minZoom: 3
        });
        
        // 加载 open street map 图层服务
        this.$utils.map.createTileLayer(this.map, this.mapboxurl, this.option);

        // 设施地图视图 中心位置
        this.map.setView([0, 0], 3);
        let cluster = this.$utils.map.createMakerCluster();
        for (let i = 0; i < mapnodelists.length; i++) {
            /* let latlng = this.$utils.map.getRandomLatLng(this.map); */
            let latlng = {
                lat : mapnodelists[i].latitude,
                lng : mapnodelists[i].longitude
            }
            let maker = this.$utils.map.createMakerByLatlng(latlng);
            cluster.addLayer(maker);
            this.addToolitps(mapnodelists[i].ip,maker)
        }
        this.map.addLayer(cluster);
        this.fullscreenLoading =false
        
    },
    addMarker() {
        this.$utils.map.createMakerByXY(this.map, [31.505, 44.09]);
    },
    getMapNodeList(){
        this.fullscreenLoading =true
        this.$store.dispatch("getNodeMapList", { size: this.pageSize, page: 1 }).then();
    },
    addPopUp() {
        let popup = this.$utils.map.createPopup(this.map, {
            maxWidth: 200,
            minWidth: 100,
            className: "sample-popup"
        });

        popup
            .setLatLng(this.$utils.map.createLatlonByArray([51.505, -0.09]))
            .setContent(
            `<h1>popup demo</h1><p>This is the content of the popup demo. The length of the content might be so very that maybe beyond the maxWidth that we set on the popup</p>`
        )
            .openOn(this.map);
    },
    addToolitps(ip,marker) {
        let pngJpgIcon = this.$utils.map.createIcon({
            /* iconUrl: require("./../assets/images/tree.png"), */
            iconSize: [52, 42]
        });
        let toolitps = () => {
            let tpl = `<p>`+ ip +`</p>`;
            return tpl;
        };
        // 为 tooltips 指定 class 类名
        marker.bindTooltip(toolitps,{className: "sample-tooltips"});
    }
  }
};
</script>
<style >
.map-container {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 480px;
}
.marker-cluster-large{
  background-color: #48a3ff;
}
.marker-cluster-large div{
  background-color: #48a3ff;
}
.marker-cluster-medium{
  background-color: #48a3ff;
}
.marker-cluster-medium div{
  background-color: #48a3ff;
}
.marker-cluster-small{
  background-color: #48a3ff;
}
.marker-cluster-small div{
  background-color: #48a3ff;
}
.leaflet-control-zoom-in{
  color:#000;
}
</style>