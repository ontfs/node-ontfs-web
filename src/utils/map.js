// utils/map.js

import "leaflet/dist/leaflet.css"
import $L from "leaflet";
// 引入 leaflet.markercluster
import "leaflet.markercluster/dist/MarkerCluster.css"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster";
// 解决 leaflet 默认 maker 无法显示的问题
import icon from "../assets/img/map/map-pin.png";
let DefaultIcon = $L.icon({
  iconUrl: icon
});
$L.Marker.prototype.options.icon = DefaultIcon;

const createMap = (divId, options) => {
  let map = $L.map(divId, options);
  return map;
};

const createTileLayer = async (map, url, options) => {
    let tileLayer = await $L.tileLayer(url, options);
    tileLayer.addTo(map);
    return tileLayer;
};

const createPopup = (map, options) => {
    let popup = $L.popup(options);
    popup.addTo(map);
    return popup;
  };
  
  // 通过数组创建 latlng
const createLatlonByArray = (coordinate) => {
    let latLng = $L.latLng(coordinate[0],coordinate[1]);
    return latLng;
};

const createIcon = options => {
    return $L.icon(options);
  };
  
  /**
   * 通过 [x, y] 坐标添加 Maker
   *
   * @param {Object} map
   * @param {Object} latLng
   * @param {Object} options
   * 
   */
const createMakerByXY = (map, coordinate, options = {}) => {
    let marker = $L.marker($L.latLng(coordinate[1], coordinate[0]), options);
    marker.addTo(map);
    return marker;
};

/**
 * 创建线要素
 *
 * @param {Object} map
 * @param {Array} linePath
 * @param {Object} lineOpts
 */

const createPolyline = (map, linePath, lineOpts) => {
    let polyline = $L.polyline(linePath, lineOpts);
    polyline.addTo(map);
    return polyline;
};
const createMakerCluster = () => {
    return $L.markerClusterGroup();
};
const getRandomLatLng = map => {
    let bounds = map.getBounds(),
      southWest = bounds.getSouthWest(),
      northEast = bounds.getNorthEast(),
      lngSpan = northEast.lng - southWest.lng,
      latSpan = northEast.lat - southWest.lat;
  
    return $L.latLng(
      southWest.lat + 2 * latSpan * Math.random(),
      southWest.lng + 4 * lngSpan * Math.random()
    );
  };
  
  
const createMakerByLatlng = (latlng, options) => {
    return $L.marker(latlng, options);
};
export default { createMap,createTileLayer,createPopup,createLatlonByArray,createIcon,createMakerByXY,createPolyline,createMakerCluster,getRandomLatLng,createMakerByLatlng };
