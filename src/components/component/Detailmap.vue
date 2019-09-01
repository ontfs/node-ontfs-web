<template>
  <div class="detail-map-container" id="detail-map-container" :style="mapSize">
      <!-- <MapTools @marker="addMarker" @polyline="addPolyline" @polygon="addPolygon"></MapTools> -->
  </div>
</template>

<script>
import MapTools from "@/components/component/MapTools.vue";
export default {
  name: "mapView",
  props: {
    mapWidth: {
      type: String
    },
    mapHeight: {
      type: String
    },
/*     longitude: {
      type: Number,
      default:0
    },
    latitude: {
      type: Number,
      default:0
    } */
  },
  components: {
      MapTools
  },
  computed: {
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    },
    offchaindata() {
        return this.$store.getters.nodeoffchaininfo || {};
    },
  },
  data() {
    return {
      map: null,
      mapboxurl: 'https://api.mapbox.com/styles/v1/tony1duan/cjyqy7w2s02lh1cqoqoppsx5g/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidG9ueTFkdWFuIiwiYSI6ImNqeW82NDd4czExY3czYnF1eGhxZ29hMnEifQ.hzvWApDHuwy26QZFZArSkQ',
      option:{
        zoom:6,
        maxZoom:18,
        minZoom:3,
        renderWorldCopies:true,
        id: 'mapbox.streets'
      }
    };
  },
  watch:{
    "offchaindata":function(){
      this.latitude = this.offchaindata.latitude
      this.longitude = this.offchaindata.longitude
      this.mapInit()
    }
  },
  mounted() {
  },
  methods: {
    mapInit(){
        var southWest = L.latLng(this.latitude-8, this.longitude-16),
            northEast = L.latLng(this.latitude+8, this.longitude+16),
            bounds = L.latLngBounds(southWest, northEast);
        this.map = this.$utils.map.createMap("detail-map-container",{
            zoomControl: false,
            maxBounds: bounds,
            maxZoom: 7
        });
        
        // 加载 open street map 图层服务
        this.$utils.map.createTileLayer(this.map, this.mapboxurl, this.option);

        // 设施地图视图 中心位置
        this.map.setView([this.latitude, this.longitude],5);
        let cluster = this.$utils.map.createMakerCluster();
        let latlng = {
            lat : this.latitude,
            lng : this.longitude
        }
        let maker = this.$utils.map.createMakerByLatlng(latlng);
        cluster.addLayer(maker);
        this.map.addLayer(cluster);
    },
  },
};
</script>
<style >
.map-container {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>