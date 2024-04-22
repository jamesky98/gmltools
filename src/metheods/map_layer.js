const EMAP_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP_B",
    title: "臺灣通用電子地圖",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP5/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  obj.setVisible(true);
  return obj;
};
const EMAP15_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP15_B",
    title: "臺灣通用電子地圖(套疊等高線無門牌)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP15/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP15",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP5_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP5_B",
    title: "臺灣通用電子地圖(套疊等高線+門牌)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP5/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP5",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP6_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP6_B",
    title: "臺灣通用電子地圖(+門牌,不含等高線)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP6/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP6",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP16_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP16_B",
    title: "臺灣通用電子地圖(不含等高線及門牌)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP16/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP16",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP01_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP01_B",
    title: "臺灣通用電子地圖(灰階)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP01/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP01",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP8_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP8_B",
    title: "Taiwan e-Map",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP8/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP8",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2_B = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2_B",
    title: "正射影像(航照圖)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO_MIX_B = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO_MIX_B",
    title: "正射影像(航照混合)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO_MIX/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO_MIX",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP9_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP9_B",
    title: "臺灣通用電子地圖(無鐵公路)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP9/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP9",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP99_B = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP99_B",
    title: "臺灣通用電子地圖(向量)",
    type: "base",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAPX99/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP99",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP",
    title: "國土利用現況調查成果圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LUIMAP/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LUIMAP",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const URBAN = function () {
  const obj = new ol.layer.Tile({
    name: "URBAN",
    title: "都市計畫使用分區圖(111年4月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/URBAN/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "URBAN",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const DMAPS = function () {
  const obj = new ol.layer.Tile({
    name: "DMAPS",
    title: "地籍圖(僅供參考)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://landmaps.nlsc.gov.tw/S_Maps/wmts/DMAPS/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "DMAPS",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const LANDSECT = function () {
  const obj = new ol.layer.Tile({
    name: "LANDSECT",
    title: "地段外圍圖(段籍圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LANDSECT/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LANDSECT",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LANDSECT2 = function () {
  const obj = new ol.layer.Tile({
    name: "LANDSECT2",
    title: "地段外圍圖(段籍圖)(測量類別)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LANDSECT2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LANDSECT2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LAND_OPENDATA = function () {
  const obj = new ol.layer.Tile({
    name: "LAND_OPENDATA",
    title: "公有土地〈僅管理機關已同意開放者〉",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LAND_OPENDATA/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LAND_OPENDATA",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SCHOOL = function () {
  const obj = new ol.layer.Tile({
    name: "SCHOOL",
    title: "各級學校範圍圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/SCHOOL/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "SCHOOL",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const HSR = function () {
  const obj = new ol.layer.Tile({
    name: "HSR",
    title: "高鐵二側禁限建範圍",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/HSR/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "HSR",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const nURBAN = function () {
  const obj = new ol.layer.Tile({
    name: "nURBAN",
    title: "非都市土地使用分區圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/nURBAN/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "nURBAN",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const nURBAN1 = function () {
  const obj = new ol.layer.Tile({
    name: "nURBAN1",
    title: "非都市土地使用分區圖(II)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/nURBAN1/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "nURBAN1",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const nURBAN2 = function () {
  const obj = new ol.layer.Tile({
    name: "nURBAN2",
    title: "非都市土地使用地類別圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/nURBAN2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "nURBAN2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const INDI_RESV = function () {
  const obj = new ol.layer.Tile({
    name: "INDI_RESV",
    title: "原住民保留地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/INDI_RESV/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "INDI_RESV",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const INDI_AREA = function () {
  const obj = new ol.layer.Tile({
    name: "INDI_AREA",
    title: "原住民族傳統領域",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/INDI_AREA/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "INDI_AREA",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Hillside = function () {
  const obj = new ol.layer.Tile({
    name: "Hillside",
    title: "山坡地範圍圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/Hillside/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Hillside",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SecurityForest = function () {
  const obj = new ol.layer.Tile({
    name: "SecurityForest",
    title: "保安林分布概略圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/SecurityForest/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "SecurityForest",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TREEBLOCK = function () {
  const obj = new ol.layer.Tile({
    name: "TREEBLOCK",
    title: "林班圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TREEBLOCK/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TREEBLOCK",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Urban_UrbanPlan = function () {
  const obj = new ol.layer.Tile({
    name: "Urban_UrbanPlan",
    title: "臺北市政府土地使用分區圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Urban/UrbanPlan/MapServer/WMTS/tile/1.0.0/Urban_UrbanPlan/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png",
      layer: "Urban_UrbanPlan",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const PHOTO2 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2",
    title: "臺灣通用正射影像(最新)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Afasi_taiwan_img = function () {
  const obj = new ol.layer.Tile({
    name: "Afasi_taiwan_img",
    title: "農航所全台鑲嵌正射影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://maps.nlsc.gov.tw/proxyAfasi/wmts/taiwan_img/taiwan_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "Afasi_taiwan_img",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO1 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO1",
    title: "92~94年正射影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO1/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO1",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2014 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2014",
    title: "103年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2014/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2014",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2015 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2015",
    title: "104年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2015/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2015",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2016 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2016",
    title: "105年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2016/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2016",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2017 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2017",
    title: "106年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2017/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2017",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2018 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2018",
    title: "107年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2018/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2018",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2019 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2019",
    title: "108年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2019/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2019",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2020 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2020",
    title: "109年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2020/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2020",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO2021 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO2021",
    title: "110年正射影像圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2021/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO2021",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO_VA = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO_VA",
    title: "蘭嶼鄉正射影像(109年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO_VA/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO_VA",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO_W106 = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO_W106",
    title: "金門縣正射影像(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "118.373617,24.449655 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts//PHOTO_W106/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO_W106",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const PHOTO_W = function () {
  const obj = new ol.layer.Tile({
    name: "PHOTO_W",
    title: "金門縣正射影像(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "118.373617,24.449655 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PHOTO_W/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PHOTO_W",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Arial_Ortho_M109 = function () {
  const obj = new ol.layer.Tile({
    name: "Arial_Ortho_M109",
    title: "臺北市航測影像(109年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2020/MapServer/WMTS/tile/1.0.0/Aerial_Ortho_2020/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Arial_Ortho_M109",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Arial_Ortho_M108 = function () {
  const obj = new ol.layer.Tile({
    name: "Arial_Ortho_M108",
    title: "臺北市航測影像(108年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2019/MapServer/WMTS/tile/1.0.0/Aerial_Ortho_2019/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Arial_Ortho_M108",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Arial_Ortho_M107 = function () {
  const obj = new ol.layer.Tile({
    name: "Arial_Ortho_M107",
    title: "臺北市航測影像(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2018/MapServer/WMTS/tile/1.0.0/Aerial_Ortho_2018/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Arial_Ortho_M107",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Arial_Ortho_M106 = function () {
  const obj = new ol.layer.Tile({
    name: "Arial_Ortho_M106",
    title: "臺北市航測影像(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2017/MapServer/WMTS/tile/1.0.0/Aerial_Ortho_2017/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Arial_Ortho_M106",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Arial_Ortho_M104 = function () {
  const obj = new ol.layer.Tile({
    name: "Arial_Ortho_M104",
    title: "臺北市航測影像(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2015/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Arial_Ortho_M104",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Arial_Ortho_M102 = function () {
  const obj = new ol.layer.Tile({
    name: "Arial_Ortho_M102",
    title: "臺北市航測影像(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/Aerial/Ortho_2013/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Arial_Ortho_M102",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const Ortho_2018 = function () {
  const obj = new ol.layer.Tile({
    name: "Ortho_2018",
    title: "嘉義市航測影像(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.449312,23.471082",
    source: new ol.source.WMTS({
      url: "https://3dmap.chiayi.gov.tw/arcgis/rest/services/Image/Ortho_2018/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Ortho_2018",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Ortho_2014 = function () {
  const obj = new ol.layer.Tile({
    name: "Ortho_2014",
    title: "嘉義市航測影像(103年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.449312,23.471082",
    source: new ol.source.WMTS({
      url: "https://3dmap.chiayi.gov.tw/arcgis/rest/services/Image/Ortho_2014/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Ortho_2014",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOBILE = function () {
  const obj = new ol.layer.Vector({
    name: "MOBILE",
    title: "山區手機可通訊點KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/林務局山區手機可通訊點標示.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const PARK = function () {
  const obj = new ol.layer.Tile({
    name: "PARK",
    title: "國家公園",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PARK/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PARK",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Scenic = function () {
  const obj = new ol.layer.Tile({
    name: "Scenic",
    title: "國家風景區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/Scenic/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Scenic",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const ForestRecreation = function () {
  const obj = new ol.layer.Tile({
    name: "ForestRecreation",
    title: "森林遊樂區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/ForestRecreation/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "ForestRecreation",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const P32Aera = function () {
  const obj = new ol.layer.Tile({
    name: "P32Aera",
    title: "棲蘭、明池遊樂區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/P32Aera/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "P32Aera",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const WILDLIFE = function () {
  const obj = new ol.layer.Tile({
    name: "WILDLIFE",
    title: "野生動物保護區及棲息環境",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/WILDLIFE/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "WILDLIFE",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const INDUSTRY = function () {
  const obj = new ol.layer.Tile({
    name: "INDUSTRY",
    title: "工業區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/INDUSTRY/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "INDUSTRY",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const WATER = function () {
  const obj = new ol.layer.Tile({
    name: "WATER",
    title: "飲用水水源水質保護區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/WATER/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "WATER",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LANDFILL = function () {
  const obj = new ol.layer.Tile({
    name: "LANDFILL",
    title: "垃圾衛生掩埋場",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LANDFILL/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LANDFILL",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const lyr_0 = function () {
  const obj = new ol.layer.Tile({
    name: "lyr_0",
    title: "國家重要濕地(WMS)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.TileWMS({
      url: "https://giss.tcd.gov.tw/tcdmap/services/WebService/WETLANDS_OF_IMPORTANCE/MapServer/WmsServer",
      params: {
        LAYERS: "0",
        VERSION: "1.1.0",
        FORMAT: "image/png",
        SRS: "EPSG:3857",
        TILED: true,
      },
      projection: "EPSG:3857",
      serverType: "geoserver",
      tileGrid: tileGrid_wms,
    }),
    style: "default",
  });
  return obj;
};
const coastal = function () {
  const obj = new ol.layer.Tile({
    name: "coastal",
    title: "海岸地區範圍",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/coastal/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "coastal",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const IntertidalZone = function () {
  const obj = new ol.layer.Tile({
    name: "IntertidalZone",
    title: "潮間帶",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/IntertidalZone/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "IntertidalZone",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MiningArea = function () {
  const obj = new ol.layer.Vector({
    name: "MiningArea",
    title: "礦區範圍",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/礦區範圍20200803.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const MiningLand = function () {
  const obj = new ol.layer.Vector({
    name: "MiningLand",
    title: "礦業用地範圍",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/礦業用地20200803.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML1001 = function () {
  const obj = new ol.layer.Vector({
    name: "KML1001",
    title: "集水區範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/集水區範圍.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const ROAD = function () {
  const obj = new ol.layer.Tile({
    name: "ROAD",
    title: "道路路網",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/ROAD/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "ROAD",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FarmRoad = function () {
  const obj = new ol.layer.Vector({
    name: "FarmRoad",
    title: "農路圖KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/農路圖2012.KML",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const ROADTREES = function () {
  const obj = new ol.layer.Vector({
    name: "ROADTREES",
    title: "林道分布圖KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/林道分布圖_81條.KML",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const EMAP2 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP2",
    title: "臺灣通用電子地圖透明",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP12 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP12",
    title: "臺灣通用電子地圖透明(無門牌)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP12/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP12",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP7 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP7",
    title: "臺灣通用電子地圖EN(透明)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP7/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP7",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const HIGHWAY2 = function () {
  const obj = new ol.layer.Tile({
    name: "HIGHWAY2",
    title: "國道里程",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/HIGHWAY2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "HIGHWAY2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const WAYMETER = function () {
  const obj = new ol.layer.Tile({
    name: "WAYMETER",
    title: "省道里程",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/WAYMETER/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "WAYMETER",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SideWalk = function () {
  const obj = new ol.layer.Tile({
    name: "SideWalk",
    title: "全國人行道",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/SideWalk/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "SideWalk",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const BIKE_B = function () {
  const obj = new ol.layer.Vector({
    name: "BIKE_B",
    title: "臺中市自行車道(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/臺中市自行車道位置資料1070702_1.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIKE_I = function () {
  const obj = new ol.layer.Vector({
    name: "BIKE_I",
    title: "嘉義市自行車道(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_lonlat: "120.453030,23.479182",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/嘉義市自行車道.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIKE = function () {
  const obj = new ol.layer.Tile({
    name: "BIKE",
    title: "自行車道(環島1號線)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/BIKE/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "BIKE",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const BiKE_NORTH = function () {
  const obj = new ol.layer.Vector({
    name: "BiKE_NORTH",
    title: "自行車道(北部)KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.538407,25.042070",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/201905_NORTH.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BiKE_MIDDLE = function () {
  const obj = new ol.layer.Vector({
    name: "BiKE_MIDDLE",
    title: "自行車道(中部)KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.683834,24.137831",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/201905_MIDDLE.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BiKE_SOUTH = function () {
  const obj = new ol.layer.Vector({
    name: "BiKE_SOUTH",
    title: "自行車道(南部)KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.327932,22.765114",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/201905_SOUTH.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BiKE_EAST = function () {
  const obj = new ol.layer.Vector({
    name: "BiKE_EAST",
    title: "自行車道(東部)KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.151906,22.961250",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/201905_EAST.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A1 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A1",
    title: "臺北信義路(自駕車場域109年A2測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.543456,25.034086",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A2台北信義路.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A2 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A2",
    title: "桃園青埔(自駕車場域109年A3測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.220108,25.022669",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A3桃園青埔.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A3 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A3",
    title: "臺中臺灣大道(自駕車場域109年A5測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.654723,24.159937",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A5台中台灣大道.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A4 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A4",
    title: "臺中水湳(自駕車場域109年A5測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.656802,24.183526",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A5台中水湳.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A5 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A5",
    title: "彰濱工業區(自駕車場域109年A1測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.406598,24.067838",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A1彰濱工業區.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A6 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A6",
    title: "臺南沙崙(自駕車場域109年A6測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.288190,22.928144",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A6台南沙崙.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A7 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A7",
    title: "臺南南科I(自駕車場域109年A3測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.290446,23.104542",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A3台南南科(I).kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const HDMAP_A8 = function () {
  const obj = new ol.layer.Vector({
    name: "HDMAP_A8",
    title: "臺南南科II(自駕車場域109年A4測區示意圖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.281562,23.103476",
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/hdmap/A4台南南科(II).kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const JM20K_1904 = function () {
  const obj = new ol.layer.Tile({
    name: "JM20K_1904",
    title: "日治臺灣堡圖(明治版1904)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1904-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "JM20K_1904",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const JM20K_1921 = function () {
  const obj = new ol.layer.Tile({
    name: "JM20K_1921",
    title: "日治臺灣堡圖(大正版1921)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1921-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "JM20K_1921",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const JM25K_1921 = function () {
  const obj = new ol.layer.Tile({
    name: "JM25K_1921",
    title: "日治地形圖(1921)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM25K_1921-png-{TileMatrix}-{TileCol}-{TileRow} ",
      layer: "JM25K_1921",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const JM50K_1924 = function () {
  const obj = new ol.layer.Tile({
    name: "JM50K_1924",
    title: "日治地形圖(陸地測量部1924)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM50K_1924-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "JM50K_1924",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const AM50K_1944 = function () {
  const obj = new ol.layer.Tile({
    name: "AM50K_1944",
    title: "美軍地形圖(1944)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=AM50K_1944-png-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "AM50K_1944",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Landuse_1956 = function () {
  const obj = new ol.layer.Tile({
    name: "Landuse_1956",
    title: "臺灣土地利用及林型圖(1956)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=1956_Landuse-png-{TileMatrix}-{TileCol}-{TileRow} ",
      layer: "Landuse_1956",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const happyman = function () {
  const obj = new ol.layer.Tile({
    name: "happyman",
    title: "魯地圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://tile.happyman.idv.tw/map/rudy/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "happyman",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const CTL = function () {
  const obj = new ol.layer.Tile({
    name: "CTL",
    title: "基本控制點",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/CTL/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "CTL",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const ConvenienceStore = function () {
  const obj = new ol.layer.Tile({
    name: "ConvenienceStore",
    title: "便利商店(超商)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/ConvenienceStore/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "ConvenienceStore",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const KML1002 = function () {
  const obj = new ol.layer.Vector({
    name: "KML1002",
    title: "機場四周禁止施放有礙飛航安全物體範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/禁止施放有礙飛航安全物體範圍.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const PlaceNameZH = function () {
  const obj = new ol.layer.Tile({
    name: "PlaceNameZH",
    title: "地名(聚落)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/PlaceNameZH/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "PlaceNameZH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const WomensWA = function () {
  const obj = new ol.layer.Tile({
    name: "WomensWA",
    title: "婦女福利機構",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/WomensWA/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "WomensWA",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LandOffice = function () {
  const obj = new ol.layer.Tile({
    name: "LandOffice",
    title: "地政事務所轄區圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LandOffice/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LandOffice",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const CITYROAD = function () {
  const obj = new ol.layer.Vector({
    name: "CITYROAD",
    title: "縣道KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/縣道2021.KML",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const TOWNROAD = function () {
  const obj = new ol.layer.Vector({
    name: "TOWNROAD",
    title: "鄉道KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/鄉道2021.KML",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const TourFac = function () {
  const obj = new ol.layer.Tile({
    name: "TourFac",
    title: "觀光工廠(WMS)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.TileWMS({
      url: "https://maps.moea.gov.tw/moeagis/services/EGIS_Basic/MapServer/WMSServer?",
      params: {
        LAYERS: "TourFac",
        VERSION: "1.1.0",
        FORMAT: "image/png",
        SRS: "EPSG:3857",
        TILED: true,
      },
      projection: "EPSG:3857",
      serverType: "geoserver",
      tileGrid: tileGrid_wms,
    }),
    style: "default",
  });
  return obj;
};
const FS5_2018_2NC = function () {
  const obj = new ol.layer.Tile({
    name: "FS5_2018_2NC",
    title: "福爾摩沙衛星五號_衛星影像(自然色)2018_2",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://maps.nlsc.gov.tw/proxyAfasi/wmts/FS2018_2NC_MASKED_3857_tiles_sw/FS_MASKED_3857_grid_sw/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "FS5_2018_2NC",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FS5_2018_NC = function () {
  const obj = new ol.layer.Tile({
    name: "FS5_2018_NC",
    title: "福爾摩沙衛星五號_衛星影像(自然色)2018",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://maps.nlsc.gov.tw/proxyAfasi/wmts/FS2018NC_MASKED_3857_tiles_sw/FS_MASKED_3857_grid_sw/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "FS5_2018_NC",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FS5_2018_FC = function () {
  const obj = new ol.layer.Tile({
    name: "FS5_2018_FC",
    title: "福爾摩沙衛星五號_衛星影像(假色)2018",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://maps.nlsc.gov.tw/proxyAfasi/wmts/FS2018FC_MASKED_3857_tiles_sw/FS_MASKED_3857_grid_sw/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "FS5_2018_FC",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const KML01 = function () {
  const obj = new ol.layer.Vector({
    name: "KML01",
    title: "原住民古道",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/原住民古道.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML02 = function () {
  const obj = new ol.layer.Vector({
    name: "KML02",
    title: "樟之細路",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/樟之細路.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML06 = function () {
  const obj = new ol.layer.Vector({
    name: "KML06",
    title: "脊梁山脈",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/脊梁山脈.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML03 = function () {
  const obj = new ol.layer.Vector({
    name: "KML03",
    title: "百年大圳",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/百年大圳.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML04 = function () {
  const obj = new ol.layer.Vector({
    name: "KML04",
    title: "台糖鐵道",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/台糖鐵道.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML07 = function () {
  const obj = new ol.layer.Vector({
    name: "KML07",
    title: "淡蘭古道",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/淡蘭古道.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const KML05 = function () {
  const obj = new ol.layer.Vector({
    name: "KML05",
    title: "山海圳",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/山海圳.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const EMAP95 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP95",
    title: "臺灣通用電子地圖(無高速公路註記)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP95/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP95",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP97 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP97",
    title: "Taiwan e-Map(new)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP97/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP97",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP98 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP98",
    title: "臺灣通用電子地圖(新)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP98/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP98",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const EMAP96 = function () {
  const obj = new ol.layer.Tile({
    name: "EMAP96",
    title: "臺灣通用電子地圖(高DPI字)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/EMAP96/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "EMAP96",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FLOOR = function () {
  const obj = new ol.layer.Tile({
    name: "FLOOR",
    title: "樓層數(參考用)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/FLOOR/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FLOOR",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const NLSCVET = function () {
  const obj = new ol.layer.VectorTile({
    name: "NLSCVET",
    title: "臺灣通用電子地圖(文字向量)",
    type: "vectortile",
    opacity: 1.0,
    visible: false,
    source: new ol.source.VectorTile({
      format: format,
      tileGrid: tileGrid,
      strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({ maxZoom: 20 })),
      url: "https://wmts.nlsc.gov.tw/T09Vet/vt/V01/{z}/{y}/{x}",
    }),
    style: qtStyle(),
  });
  return obj;
};
const EMAPV06 = function () {
  const obj = new ol.layer.VectorTile({
    name: "EMAPV06",
    title: "郵筒(信筒)㊮",
    type: "vectortile",
    opacity: 1.0,
    visible: false,
    source: new ol.source.VectorTile({
      format: format,
      tileGrid: tileGrid,
      strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({ maxZoom: 20 })),
      url: "https://wmts.nlsc.gov.tw/T09Vet/vt/EMAPV06/{z}/{y}/{x}",
    }),
    style: qtStyle(),
  });
  return obj;
};
const EMAPV98 = function () {
  const obj = new ol.layer.VectorTile({
    name: "EMAPV98",
    title: "地標(向量)",
    type: "vectortile",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    source: new ol.source.VectorTile({
      format: format,
      tileGrid: tileGrid,
      strategy: ol.loadingstrategy.tile(ol.tilegrid.createXYZ({ maxZoom: 20 })),
      url: "https://wmts.nlsc.gov.tw/T09Vet/vt/EMAPV98/{z}/{y}/{x}",
    }),
    style: qtStyle(),
  });
  return obj;
};
const BUILD = function () {
  const obj = new ol.layer.Tile({
    name: "BUILD",
    title: "建物區塊",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/BUILD/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "BUILD",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const BUILDX = function () {
  const obj = new ol.layer.Tile({
    name: "BUILDX",
    title: "建物區塊分戶",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/BUILDX/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "BUILDX",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_REDERER = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_REDERER",
    title: "渲染圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_SHADERMAP/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_REDERER",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_Contour = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_Contour",
    title: "等高線圖(2003-2005)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_CONTOUR/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_Contour",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_Contour_2 = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_Contour_2",
    title: "等高線圖(2010-2015)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_CONTOUR_2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_Contour_2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_Shade = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_Shade",
    title: "陰影圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_HILLSHADE/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_Shade",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_Aspect = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_Aspect",
    title: "坡向圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_ASPECT/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_Aspect",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_SLOPEP_LV7 = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_SLOPEP_LV7",
    title: "坡度圖-7級(2003-2005)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_SLOPEP_LV7/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_SLOPEP_LV7",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_SLOPEP_LV7_2 = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_SLOPEP_LV7_2",
    title: "坡度圖-7級(2010-2015)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_SLOPEP_LV7_2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_SLOPEP_LV7_2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_SLOPEP_GT30 = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_SLOPEP_GT30",
    title: "坡度圖-30%坡(2003-2005)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_SLOPEP_GT30/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_SLOPEP_GT30",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MOI_SLOPEP_GT30_2 = function () {
  const obj = new ol.layer.Tile({
    name: "MOI_SLOPEP_GT30_2",
    title: "坡度圖-30%坡(2010-2015)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MOI_SLOPEP_GT30_2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MOI_SLOPEP_GT30_2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Landsat8 = function () {
  const obj = new ol.layer.Tile({
    name: "Landsat8",
    title: "Landsat8衛星影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/landsat8/file-exists.php?img=20171011_121128711_023631090_07_000_RSImage_Satellite_Landsat8-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "Landsat8",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2021 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2021",
    title: "SPOT衛星影像2021",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2021NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2021",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2020 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2020",
    title: "SPOT衛星影像2020",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2020NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2020",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2019 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2019",
    title: "SPOT衛星影像2019",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2019NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2019",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2018 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2018",
    title: "SPOT衛星影像2018",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2018NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2018",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2017 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2017",
    title: "SPOT衛星影像2017",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2017NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2017",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2016 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2016",
    title: "SPOT衛星影像2016",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2016NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2016",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2015 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2015",
    title: "SPOT衛星影像2015",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2015NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2015",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2014 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2014",
    title: "SPOT衛星影像2014",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2014NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2014",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SPOT2013 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2013",
    title: "SPOT衛星影像2013",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2013NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2013",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SPOT2012 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2012",
    title: "SPOT衛星影像2012",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2012NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2012",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2011 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2011",
    title: "SPOT衛星影像2011",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2011NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2011",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SPOT2010 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2010",
    title: "SPOT衛星影像2010",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2010NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2010",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SPOT2009 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2009",
    title: "SPOT衛星影像2009",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2009NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2009",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SPOT2008 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2008",
    title: "SPOT衛星影像2008",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2008NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2008",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SPOT2007 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2007",
    title: "SPOT衛星影像2007",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2007NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2007",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2006 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2006",
    title: "SPOT衛星影像2006",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2006NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2006",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2005 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2005",
    title: "SPOT衛星影像2005",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2005NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2005",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2004 = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2004",
    title: "SPOT衛星影像2004",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP/wmts/SP2004NC_3857/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2004",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2021_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2021_PH",
    title: "SPOT衛星影像2021 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2021NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2021_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2020_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2020_PH",
    title: "SPOT衛星影像2020 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2020NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2020_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2019_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2019_PH",
    title: "SPOT衛星影像2019 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2019NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2019_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2018_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2018_PH",
    title: "SPOT衛星影像2018 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2018NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2018_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2017_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2017_PH",
    title: "SPOT衛星影像2017 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2017NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2017_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2016_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2016_PH",
    title: "SPOT衛星影像2016 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2016NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2016_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2015_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2015_PH",
    title: "SPOT衛星影像2015 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2015NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2015_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2014_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2014_PH",
    title: "SPOT衛星影像2014 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2014NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2014_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2013_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2013_PH",
    title: "SPOT衛星影像2013 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2013NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2013_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2012_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2012_PH",
    title: "SPOT衛星影像2012 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2012NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2012_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2011_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2011_PH",
    title: "SPOT衛星影像2011 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2011NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2011_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2010_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2010_PH",
    title: "SPOT衛星影像2010 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2010NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2010_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2009_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2009_PH",
    title: "SPOT衛星影像2009 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2009NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2009_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2008_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2008_PH",
    title: "SPOT衛星影像2008 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2008NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2008_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2007_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2007_PH",
    title: "SPOT衛星影像2007 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2007NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2007_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2006_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2006_PH",
    title: "SPOT衛星影像2006 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2006NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2006_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2005_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2005_PH",
    title: "SPOT衛星影像2005 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2005NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2005_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SPOT2004_PH = function () {
  const obj = new ol.layer.Tile({
    name: "SPOT2004_PH",
    title: "SPOT衛星影像2004 (澎湖)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 10,
    map_show_lonlat: "119.567337,23.463487",
    source: new ol.source.WMTS({
      url: "https://data.csrsr.ncu.edu.tw/SP_PH/SP2004NC_PH_3857/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SPOT2004_PH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const SensitiveArea2 = function () {
  const obj = new ol.layer.Tile({
    name: "SensitiveArea2",
    title: "山崩與地滑地質敏感區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://landslide.geologycloud.tw/jlwmts/jetlink/SensitiveArea/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "SensitiveArea2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Dislope = function () {
  const obj = new ol.layer.Tile({
    name: "Dislope",
    title: "順向坡目錄",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://landslide.geologycloud.tw/jlwmts/jetlink/Dislope/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "Dislope",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const gm50000 = function () {
  const obj = new ol.layer.Tile({
    name: "gm50000",
    title: "五萬分之一全島地質圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://landslide.geologycloud.tw/jlwmts/jetlink/gm50000/GoogleMapsCompatible/{TileMatrix}/{TileCol}/{TileRow}.png",
      layer: "gm50000",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const fireplug = function () {
  const obj = new ol.layer.Tile({
    name: "fireplug",
    title: "消防栓",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/fireplug/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "fireplug",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const AED = function () {
  const obj = new ol.layer.Tile({
    name: "AED",
    title: "AED位置",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/AED/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "AED",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SHELTERS = function () {
  const obj = new ol.layer.Tile({
    name: "SHELTERS",
    title: "避難收容所",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/SHELTERS/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "SHELTERS",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const GeoSensitive = function () {
  const obj = new ol.layer.Tile({
    name: "GeoSensitive",
    title: "地質敏感區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/GeoSensitive/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "GeoSensitive",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const GeoSensitive2 = function () {
  const obj = new ol.layer.Tile({
    name: "GeoSensitive2",
    title: "地質敏感區(山崩與地滑)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/GeoSensitive2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "GeoSensitive2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TSUNAMIO = function () {
  const obj = new ol.layer.Tile({
    name: "TSUNAMIO",
    title: "海嘯溢淹潛勢圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TSUNAMIO/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TSUNAMIO",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const KML152081 = function () {
  const obj = new ol.layer.Vector({
    name: "KML152081",
    title: "111年度36處大規模崩塌潛勢區KML",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/111年度36處大規模崩塌潛勢區.KML",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const MUDSLIDE = function () {
  const obj = new ol.layer.Tile({
    name: "MUDSLIDE",
    title: "土石流潛勢溪流圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MUDSLIDE/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MUDSLIDE",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MUDSLIDE_CATCH = function () {
  const obj = new ol.layer.Tile({
    name: "MUDSLIDE_CATCH",
    title: "土石流潛勢溪流集水區圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MUDSLIDE_CATCH/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MUDSLIDE_CATCH",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MUDSLIDE_PG = function () {
  const obj = new ol.layer.Tile({
    name: "MUDSLIDE_PG",
    title: "土石流潛勢溪流影響範圍圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MUDSLIDE_PG/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MUDSLIDE_PG",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SoilLiquefaction = function () {
  const obj = new ol.layer.Tile({
    name: "SoilLiquefaction",
    title: "土壤液化潛勢圖(初級)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/SoilLiquefaction/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "SoilLiquefaction",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const SoilLiquefaction2 = function () {
  const obj = new ol.layer.Tile({
    name: "SoilLiquefaction2",
    title: "土壤液化潛勢圖(中級)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/SoilLiquefaction2/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "SoilLiquefaction2",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded24H200 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded24H200",
    title: "淹水潛勢圖24小時200mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded24H200",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded24H350 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded24H350",
    title: "淹水潛勢圖24小時350mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded24H350",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded24H500 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded24H500",
    title: "淹水潛勢圖24小時500mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded24H500",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded24H650 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded24H650",
    title: "淹水潛勢圖24小時650mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded24H650",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded12H200 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded12H200",
    title: "淹水潛勢圖12小時200mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded12H200",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded12H300 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded12H300",
    title: "淹水潛勢圖12小時300mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded12H300",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded12H400 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded12H400",
    title: "淹水潛勢圖12小時400mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded12H400",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded6H150 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded6H150",
    title: "淹水潛勢圖6小時150mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded6H150",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded6H250 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded6H250",
    title: "淹水潛勢圖6小時250mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded6H250",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Flooded6H350 = function () {
  const obj = new ol.layer.Tile({
    name: "Flooded6H350",
    title: "淹水潛勢圖6小時350mm",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Flooded6H350",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM00 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM00",
    title: "農地資源盤查_總覽",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/農地盤查109總覽圖/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM00",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM12 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM12",
    title: "農地資源盤查_農糧作物",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L1_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM12",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM02 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM02",
    title: "農地資源盤查_養殖魚塭",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L2_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM02",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM04 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM04",
    title: "農地資源盤查_畜牧使用",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L3_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM04",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM03 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM03",
    title: "農地資源盤查_林業使用",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L4_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM03",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM01 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM01",
    title: "農地資源盤查_休閒農場",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L5_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM01",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM05 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM05",
    title: "農地資源盤查_農水路使用",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L7_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM05",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM10 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM10",
    title: "農地資源盤查_河川及水利設施",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L10_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM10",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM06 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM06",
    title: "農地資源盤查_農舍",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L11_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM06",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM07 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM07",
    title: "農地資源盤查_疑似工廠",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L13_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM07",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM08 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM08",
    title: "農地資源盤查_道路或道路設施(含停車場)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L9_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM08",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM09 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM09",
    title: "農地資源盤查_其他建築使用",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L20_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM09",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM11 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM11",
    title: "農地資源盤查_公共及公用設施",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L17_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM11",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const FARM13 = function () {
  const obj = new ol.layer.Tile({
    name: "FARM13",
    title: "農地資源盤查_潛在可供農業使用",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://map.coa.gov.tw/server/rest/services/FarmlandSurvey/L8_109/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "FARM13",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Agricultural = function () {
  const obj = new ol.layer.Tile({
    name: "Agricultural",
    title: "農地資源分布圖(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/Agricultural/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Agricultural",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 18,
    }),
  });
  return obj;
};
const LUIMAP00 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP00",
    title: "國土利用現況調查成果圖-總覽",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LUIMAP/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LUIMAP00",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP01 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP01",
    title: "國土利用現況調查-農業利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP02 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP02",
    title: "國土利用現況調查-森林利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP03 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP03",
    title: "國土利用現況調查-交通利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP04 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP04",
    title: "國土利用現況調查-水利利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP05 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP05",
    title: "國土利用現況調查-建築利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP06 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP06",
    title: "國土利用現況調查-公共利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP07 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP07",
    title: "國土利用現況調查-遊憩利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP08 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP08",
    title: "國土利用現況調查-礦鹽利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP09 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP09",
    title: "國土利用現況調查-其他利用土地",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP82 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP82",
    title: "國土利用現況調查成果圖82年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP82",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP95 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP95",
    title: "國土利用現況調查成果圖95-97年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP95",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP98 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP98",
    title: "國土利用現況調查成果圖98年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP98",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP99 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP99",
    title: "國土利用現況調查成果圖99年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP99",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP100 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP100",
    title: "國土利用現況調查成果圖100年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP100",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP101 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP101",
    title: "國土利用現況調查成果圖101年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP101",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP102 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP102",
    title: "國土利用現況調查成果圖102年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP102",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP103 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP103",
    title: "國土利用現況調查成果圖103年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP103",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP104 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP104",
    title: "國土利用現況調查成果圖104年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP104",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP105 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP105",
    title: "國土利用現況調查成果圖105年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP105",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP106 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP106",
    title: "國土利用現況調查成果圖106年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP106",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP107 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP107",
    title: "國土利用現況調查成果圖107年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP107",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP108 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP108",
    title: "國土利用現況調查成果圖108年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP108",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP109 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP109",
    title: "國土利用現況調查成果圖109年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP109",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LUIMAP110 = function () {
  const obj = new ol.layer.Tile({
    name: "LUIMAP110",
    title: "國土利用現況調查成果圖110年更新區",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "LUIMAP110",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111A06 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111A06",
    title: "臺北市士林陽明山夢幻湖111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.559494,25.166946",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111A06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111A05 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111A05",
    title: "臺北市士林陽明山馬槽111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.561380,25.175549",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111A05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111A04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111A04",
    title: "臺北市士林陽明山大油坑111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.579831,25.172771",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111A04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111A03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111A03",
    title: "臺北市萬華111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.491101,25.039279",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111A03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111A02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111A02",
    title: "臺北市北投111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.469042,25.113718",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111A02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110A01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110A01",
    title: "臺北市士林110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.566634,25.172439",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110A01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109A01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109A01",
    title: "臺北市士林109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.566634,25.172439",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109A01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108A03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108A03",
    title: "臺北市士林區夢幻湖108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.559495,25.167064",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108A03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108A02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108A02",
    title: "臺北市士林區馬槽108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.561084,25.175355",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108A02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108A01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108A01",
    title: "臺北市士林區大油坑108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.579870,25.172644",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108A01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107A01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107A01",
    title: "臺北市士林區大油坑107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.579870,25.172644",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107A01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107A02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107A02",
    title: "臺北市士林區馬槽107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.561084,25.175355",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107A02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107A03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107A03",
    title: "臺北市士林區夢幻湖107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.559495,25.167064",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107A03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106A03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106A03",
    title: "臺北市士林區馬槽106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.561084,25.175355",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106A03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106A01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106A01",
    title: "臺北市士林(大油坑)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.579870,25.172644",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106A01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106A02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106A02",
    title: "臺北市北投(夢幻湖)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.559495,25.167064",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106A02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105A02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105A02",
    title: "臺北市士林(馬槽)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.561084,25.175355",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105A02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105A01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105A01",
    title: "臺北市士林(大油坑)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.579870,25.172644",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105A01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105A03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105A03",
    title: "臺北市北投(夢幻湖)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.559495,25.167064",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105A03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107F01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107F01",
    title: "新北市金山區107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.590919,25.179502",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107F01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106F02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106F02",
    title: "新北市樹林區(國3樹林交流道)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.395568,24.951278",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106F02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106F01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106F01",
    title: "新北市烏來區106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.583436,24.761669",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106F01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108G01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108G01",
    title: "宜蘭縣五結鄉108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.817763,24.656831",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108G01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107G01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107G01",
    title: "宜蘭縣南澳鄉107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.743698,24.378870",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107G01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105H04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105H04",
    title: "桃園市觀音區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "121.146500,25.066865 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105H04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105H03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105H03",
    title: "桃園市蘆竹區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "121.264115,25.069240 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105H03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105H02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105H02",
    title: "桃園市新屋區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "121.036637,24.982378",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105H02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105H01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105H01",
    title: "桃園市平鎮區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "121.241680,24.893474",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105H01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106H03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106H03",
    title: "桃園市觀音區106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.146351,25.066581",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106H03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106H02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106H02",
    title: "桃園市新屋區106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.073405,24.971793",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106H02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106H01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106H01",
    title: "桃園市平鎮區106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "121.241647,24.893541",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106H01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103H01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103H01",
    title: "桃園市(中路計畫區段徵收)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.291988,24.999968 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103H01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102H01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102H01",
    title: "桃園市龜山區102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.390830,25.046649 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102H01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105O01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105O01",
    title: "新竹市香山區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.927868,24.787394 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105O01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106O01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106O01",
    title: "新竹市北區(台68線)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.932365,24.845079 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106O01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107O01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107O01",
    title: "新竹市107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.947407,24.795303",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107O01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107J02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107J02",
    title: "新竹縣尖石鄉107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.400505,24.580502",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107J02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107J01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107J01",
    title: "新竹縣新豐鄉107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.963637,24.906426",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107J01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109K02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109K02",
    title: "苗栗縣苗栗市109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.820862,24.545960",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109K02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109K01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109K01",
    title: "苗栗縣西湖109年UAS(UAV)@ ",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.741597,24.571019",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106K01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106K01",
    title: "苗栗縣苑裡鎮(火炎山)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.725627,24.364611",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107K02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107K02",
    title: "苗栗縣通霄鎮107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.696138,24.538310",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107K02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104K02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104K02",
    title: "苗栗縣造橋鄉(台13甲線)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.828833,24.610215",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104K02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107K01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107K01",
    title: "苗栗縣銅鑼鎮107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.789423,24.480531",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104K01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104K01",
    title: "苗栗縣獅潭鄉(汶水橋)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.883451,24.449575",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103K01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103K01",
    title: "苗栗縣銅鑼鄉(銅鑼科學園區)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.772335,24.468701",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101K02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101K02",
    title: "苗栗縣後龍鎮101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.720136,24.592446 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101K02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101K01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101K01",
    title: "苗栗縣卓蘭鎮101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.814284,24.324263",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110B03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110B03",
    title: "臺中市霧峰110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 19,
    map_show_lonlat: "120.734445,24.035790",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110B03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110B02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110B02",
    title: "臺中市烏日110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.627184,24.044288",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110B02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110B01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110B01",
    title: "臺中市豐原110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.724175,24.274922",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110B01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109B01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109B01",
    title: "臺中市梧棲109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.530027,24.270643",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109B01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108B01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108B01",
    title: "臺中市后里區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.677364,24.296839",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108B01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107B02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107B02",
    title: "臺中市和平區107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.003878,24.203042",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107B02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107D01",
    title: "臺中市龍井區107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.484724,24.190892",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B14 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B14",
    title: "臺中市(水湳機場)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.653980,24.187260",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B13 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B13",
    title: "臺中市(太平新光地區)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.714162,24.150148",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B11 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B11",
    title: "臺中市太平區(坪林森林公園)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.729976,24.148207 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B12 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B12",
    title: "臺中市(廍子地區)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.728351,24.165012",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B10 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B10",
    title: "臺中市(捷運北屯機廠)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.707512,24.189596",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B09 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B09",
    title: "臺中市(振興路以南)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.700313,24.127280 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B08 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B08",
    title: "臺中市潭子區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.705324,24.226392",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B07 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B07",
    title: "臺中市霧峰區105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.692135,24.014006",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B06 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B06",
    title: "臺中市(第13期)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.643398,24.122874",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B05 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B05",
    title: "臺中市(台中車站)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.692301,24.137434",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B04",
    title: "臺中市(豐原車站)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.723459,24.254245",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B03",
    title: "臺中市(潭子車站)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.705830,24.212804",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B02",
    title: "臺中市(太原車站)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.699914,24.164383",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B01",
    title: "臺中市(大慶車站)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.648471,24.119406",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105B15 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105B15",
    title: "臺中市(第14期)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.682328,24.191671",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105B15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107B01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107B01",
    title: "臺中市大安區107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.579694,24.351719",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107B01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const floraexpo2018 = function () {
  const obj = new ol.layer.Tile({
    name: "floraexpo2018",
    title: "2018臺中世界花卉博覽會航拍影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.718507,24.300461",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/2018floraexpo/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "floraexpo2018",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110N01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110N01",
    title: "彰化縣芳苑110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.305368,23.906680",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110N01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107D02",
    title: "彰化縣伸港鄉107年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.484724,24.190892",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106N01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106N01",
    title: "彰化縣大城鄉(152線)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.351254,23.853292 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106N01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104N01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104N01",
    title: "彰化縣芳苑鄉(台61線)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.363489,23.985526 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104N01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103N01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103N01",
    title: "彰化縣福興鄉(台61線)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.394349,24.029156",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103N01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105N01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105N01",
    title: "彰化縣田中鎮105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.568517,23.897220",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105N01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102M01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102M01",
    title: "南投縣南投市(航遙測校正場)102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.658820,23.927606",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102M01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106M01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106M01",
    title: "南投縣草屯鎮(九九峰)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.783909,24.008821",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106M01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103M04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103M04",
    title: "南投縣仁愛鄉(清境農場)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.164778,24.058372",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103M04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105M02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105M02",
    title: "南投縣草屯鎮105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.748916,23.954083",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105M02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105M01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105M01",
    title: "南投縣竹山鎮105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.660171,23.767960 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105M01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103M03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103M03",
    title: "南投縣南投市(國3南投交流道)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.685042,23.924311",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103M03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103M02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103M02",
    title: "南投縣國姓鄉(國6北山交流道)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.882922,23.980906",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103M02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103M01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103M01",
    title: "南投縣南投市(航遙測校正場)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.658820,23.927606",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103M01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106I02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106I02",
    title: "嘉義市西區(湖子內區段徵收)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.436833,23.449372",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106I02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106I01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106I01",
    title: "嘉義市東區(彌陀路拓寬工程)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.469821,23.463877 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106I01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110Q02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110Q02",
    title: "嘉義縣鹿草110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.309331,23.411479",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110Q02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110Q01",
    title: "嘉義縣朴子110年UAS(UAV)@ ",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.284422,23.485462",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109Q01",
    title: "嘉義縣義竹109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.250738,23.336440",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108Q01",
    title: "嘉義縣布袋鎮①108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.168774,23.360835",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108Q02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108Q02",
    title: "嘉義縣布袋鎮②108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.162484,23.379519",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108Q02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103Q01",
    title: "嘉義縣大林鎮(大埔美重劃區)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.512280,23.589133",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102Q02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102Q02",
    title: "嘉義縣番路鄉102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.582708,23.447716 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102Q02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102Q01",
    title: "嘉義縣阿里山鄉102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "120.702790,23.466508",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101Q01",
    title: "嘉義縣東石鄉101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.200735,23.458512",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111D01",
    title: "臺南市柳營111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.318933,23.280831",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D05 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D05",
    title: "臺南市西港110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.208072,23.118047",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D07 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D07",
    title: "臺南市歸仁110年②UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.312800,22.933232",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D08 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D08",
    title: "臺南市歸仁110年①UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.288232,22.944947",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D03",
    title: "臺南市安南110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.173184,23.062895",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D04",
    title: "臺南市新營110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.304738,23.299549",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D02",
    title: "臺南市南化110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.447078,23.046782",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D01",
    title: "臺南市永康110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.262145,23.034994",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110D06 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110D06",
    title: "臺南市永康110年②UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.247884,23.047746",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110D06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109D01",
    title: "臺南市麻豆109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.279342,23.192714",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108D05 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108D05",
    title: "臺南市永康區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.248262,23.047351",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108D05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108D04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108D04",
    title: "臺南市關廟區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.332306,22.975239(",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108D04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108D03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108D03",
    title: "臺南市七股區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.097051,23.270265",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108D03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108D02",
    title: "臺南市下營區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.257522,23.228717",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108D01",
    title: "臺南市安南區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.188687,23.081182",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106D03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106D03",
    title: "臺南市七股區(西濱公路)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.087996,23.120980",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106D03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104D04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104D04",
    title: "臺南市安平區104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.157098,23.000093",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104D04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103D04 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103D04",
    title: "臺南市學甲區(台84線)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.219539,23.230786",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103D04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102D03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102D03",
    title: "臺南市安南區102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.182012,23.020593 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102D03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102D02",
    title: "臺南市七股區(台江國家公園)102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.055790,23.132534",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106D02",
    title: "臺南市東區(平實市地重劃)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.237308,22.994859",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106D01",
    title: "臺南市安南區(台江大道)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.117313,23.070491",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104D03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104D03",
    title: "臺南市安南區(九份子重劃區)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.181891,23.020524",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104D03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104D02",
    title: "臺南市新市區(新和重劃區)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.290281,23.081711",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104D01",
    title: "臺南市新化區(台19甲外環)104年UAV",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.314584,23.040100 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103D02",
    title: "臺南市永康區103年UAV",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.247831,23.043753 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103D03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103D03",
    title: "臺南市麻豆區103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.228254,23.185379",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103D03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103D01",
    title: "臺南市南區(台86線)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.188707,22.934133",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102D01",
    title: "臺南市七股區(台61線)102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.056335,23.132413",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101D02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101D02",
    title: "臺南市關廟區101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.347689,22.992495 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101D02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101D01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101D01",
    title: "臺南市安南區101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.182108,23.020374 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101D01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111E01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111E01",
    title: "高雄市永安111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.215433,22.853831",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111E01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110E02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110E02",
    title: "高雄市大社110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.376773,22.749379",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110E02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110E01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110E01",
    title: "高雄市桃源區110年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.787594,23.189486",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110E01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109E01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109E01",
    title: "高雄市岡山109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.289685,22.783518",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109E01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV108E01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV108E01",
    title: "高雄市大寮區108年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.428947,22.605330",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV108E01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104E01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104E01",
    title: "高雄市仁武區(國1鼎金交流道)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.328997,22.674569",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104E01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104E03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104E03",
    title: "高雄市前鎮區(經貿園區65期)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.311673,22.596344",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104E03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104E02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104E02",
    title: "高雄市前鎮區(氣爆災點)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.327304,22.615107",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104E02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109T03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109T03",
    title: "屏東縣高樹109年UAS(UAV)@ ",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.614553,22.824323",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109T03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109T02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109T02",
    title: "屏東縣屏東市109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.503789,22.645575",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109T02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109T01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109T01",
    title: "屏東縣東港109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.467500,22.460095",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107T02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107T02",
    title: "屏東縣海豐外環道107年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.518124,22.700789",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107T02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV107T01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV107T01",
    title: "屏東縣屏東交流道107年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.526311,22.718511",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV107T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104T01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104T01",
    title: "屏東縣里港鄉(國10里港交流道)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.484240,22.794556",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103T01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103T01",
    title: "屏東縣霧台鄉(台24谷川大橋)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.704353,22.746808",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102T02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102T02",
    title: "屏東縣滿州鄉102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "120.873793,22.110805",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102T02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102T01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102T01",
    title: "屏東縣里港鄉102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.55535,22.7990",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101T01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101T01",
    title: "屏東縣滿州鄉101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 18,
    map_show_lonlat: "120.873793,22.110805 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109U03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109U03",
    title: "花蓮縣光復109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.409681,23.613041",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109U03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109U02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109U02",
    title: "花蓮縣卓溪②109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.252652,23.424496",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109U02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109U01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109U01",
    title: "花蓮縣卓溪①109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.270640,23.526090",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109U01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106U01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106U01",
    title: "花蓮縣卓溪鄉106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.245541,23.315964 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106U01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105U01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105U01",
    title: "花蓮縣花蓮市105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.606649,24.004290",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105U01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101U02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101U02",
    title: "花蓮縣壽豐鄉101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.525165,23.864705",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101U02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101U01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101U01",
    title: "花蓮縣壽豐鄉豐平大橋101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.471654,23.803469",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101U01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV102V01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV102V01",
    title: "臺東縣大武鄉102年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.924452,22.457651 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV102V01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV101V01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV101V01",
    title: "臺東縣太麻里鄉101年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.979449,22.596845",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV101V01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111P02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111P02",
    title: "雲林縣口湖111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.145735,23.582544",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111P02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV111P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV111P01",
    title: "雲林縣臺西111年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.202629,23.746409",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV111P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110P01",
    title: "雲林縣外傘頂沙洲-春季UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.053264,23.453248",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV110P02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV110P02",
    title: "雲林縣外傘頂沙洲-秋季UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.053264,23.453248",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV110P02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV109P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV109P01",
    title: "雲林縣古坑109年UAS(UAV)@",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.558711,23.660908",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV109P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV106P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV106P01",
    title: "雲林縣斗六市(湖山水庫)106年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.629113,23.689106",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV106P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105P03 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105P03",
    title: "雲林縣古坑鄉(國3古坑交流道)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.570797,23.645051",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105P03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105P02 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105P02",
    title: "雲林縣古坑鄉(崁頭厝)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "120.603915,23.616308",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105P02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV105P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV105P01",
    title: "雲林縣古坑鄉(樟湖)105年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.634905,23.604588 ",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV105P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV104P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV104P01",
    title: "雲林縣虎尾鎮(雲林高鐵站)104年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.413929,23.734758",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV104P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const UAV103P01 = function () {
  const obj = new ol.layer.Tile({
    name: "UAV103P01",
    title: "雲林縣麥寮鄉(台61線)103年UAS(UAV)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.254075,23.761986",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "UAV103P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const CITY = function () {
  const obj = new ol.layer.Tile({
    name: "CITY",
    title: "縣市界",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/CITY/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "CITY",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN",
    title: "鄉鎮市區界",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOWN/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOWN",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village = function () {
  const obj = new ol.layer.Tile({
    name: "Village",
    title: "村里界圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/Village/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Village",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN201809 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN201809",
    title: "鄉鎮市區界(107年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN201809",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN201810 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN201810",
    title: "鄉鎮市區界(107年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN201810",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN201910 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN201910",
    title: "鄉鎮市區界(108年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN201910",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202003 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202003",
    title: "鄉鎮市區界(109年3月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202003",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202007 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202007",
    title: "鄉鎮市區界(109年7月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202007",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202008 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202008",
    title: "鄉鎮市區界(109年8月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202008",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202009 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202009",
    title: "鄉鎮市區界(109年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202009",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202010 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202010",
    title: "鄉鎮市區界(109年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202010",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202103 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202103",
    title: "鄉鎮市區界(110年3月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202103",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOWN202104 = function () {
  const obj = new ol.layer.Tile({
    name: "TOWN202104",
    title: "鄉鎮市區界(110年4月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOWN202104",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201709 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201709",
    title: "村里界(106年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201709",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201712 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201712",
    title: "村里界(106年12月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201712",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201801 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201801",
    title: "村里界(107年1月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201801",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201803 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201803",
    title: "村里界(107年3月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201803",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201804 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201804",
    title: "村里界(107年4月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201804",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201805 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201805",
    title: "村里界(107年5月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201805",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201806 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201806",
    title: "村里界(107年6月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201806",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201807 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201807",
    title: "村里界(107年7月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201807",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201808 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201808",
    title: "村里界(107年8月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201808",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201809 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201809",
    title: "村里界(107年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201809",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201810 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201810",
    title: "村里界(107年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201810",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201907 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201907",
    title: "村里界(108年7月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201907",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202108 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202108",
    title: "村里界(108年8月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202108",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village201910 = function () {
  const obj = new ol.layer.Tile({
    name: "Village201910",
    title: "村里界(108年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village201910",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202003 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202003",
    title: "村里界(109年3月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202003",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202004 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202004",
    title: "村里界(109年4月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202004",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202006 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202006",
    title: "村里界(109年6月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202006",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202007 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202007",
    title: "村里界(109年7月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202007",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202008 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202008",
    title: "村里界(109年8月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202008",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202009 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202009",
    title: "村里界(109年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202009",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202009A = function () {
  const obj = new ol.layer.Tile({
    name: "Village202009A",
    title: "村里界(109年9月15日)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202009A",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202010 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202010",
    title: "村里界(109年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202010",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202012 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202012",
    title: "村里界(109年12月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202012",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202103 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202103",
    title: "村里界(110年3月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202103",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202104 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202104",
    title: "村里界(110年4月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202104",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202106 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202106",
    title: "村里界(110年6月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202106",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202107 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202107",
    title: "村里界(110年7月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202107",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202109 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202109",
    title: "村里界(110年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202109",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202110 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202110",
    title: "村里界(110年10月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202110",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202112 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202112",
    title: "村里界(110年12月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202112",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202204 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202204",
    title: "村里界(111年4月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202204",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202205 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202205",
    title: "村里界(111年5月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202205",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202206 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202206",
    title: "村里界(111年6月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202206",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Village202209 = function () {
  const obj = new ol.layer.Tile({
    name: "Village202209",
    title: "村里界(111年9月)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "Village202209",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TerritorialSeaTile = function () {
  const obj = new ol.layer.Tile({
    name: "TerritorialSeaTile",
    title: "領海基線",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TerritorialSea/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TerritorialSeaTile",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TerritorialSeaPoint = function () {
  const obj = new ol.layer.Vector({
    name: "TerritorialSeaPoint",
    title: "領海基點(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/領海基點.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const TerritorialSea = function () {
  const obj = new ol.layer.Vector({
    name: "TerritorialSea",
    title: "領海基線(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/領海基線.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const TerritorialSea12 = function () {
  const obj = new ol.layer.Vector({
    name: "TerritorialSea12",
    title: "12浬領海外界線(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/12浬領海外界線.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const TerritorialSea24 = function () {
  const obj = new ol.layer.Vector({
    name: "TerritorialSea24",
    title: "24浬鄰接區外界線(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/24浬鄰接區外界線.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const TOPO_DGN_M108 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO_DGN_M108",
    title: "臺北市1/1000地形圖(108年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/TOPO/DGN_2019/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO_DGN_M108",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const TOPO_DGN_M106 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO_DGN_M106",
    title: "臺北市1/1000地形圖(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/TOPO/DGN_2017/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO_DGN_M106",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const TOPO_DGN_M104 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO_DGN_M104",
    title: "臺北市1/1000地形圖(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/TOPO/DGN_2015/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO_DGN_M104",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const TOPO_DGN_M102 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO_DGN_M102",
    title: "臺北市1/1000地形圖(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.557108,25.066895",
    source: new ol.source.WMTS({
      url: "https://www.historygis.udd.gov.taipei/arcgis/rest/services/TOPO/DGN_2013/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO_DGN_M102",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 21,
    }),
  });
  return obj;
};
const TOPO01K_K04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K04",
    title: "南庄都市計畫區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.999390,24.602291",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K02",
    title: "公館都市計畫區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.826375,24.504474",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K15",
    title: "頭屋都市計畫區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.852982,24.575692",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K13",
    title: "銅鑼都市計畫區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.788999,24.487677",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K12",
    title: "通霄都市計畫區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.680439,24.486887",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K11",
    title: "苑裡都市計畫區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.655316,24.438664",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K17",
    title: "造橋都市計畫區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.866830,24.641838",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K07",
    title: "後龍都市計畫區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.792165,24.616439",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K01",
    title: "三義都市計畫區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.772490,24.415472",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K14",
    title: "頭份交流道特定區(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.931976,24.688119",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K05",
    title: "大湖都市計畫區(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.867044,24.423464",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K06",
    title: "後龍外埔漁港特定區(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.776098,24.648545",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K08",
    title: "新竹科學園區竹南基地暨周邊地區特定區(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.908864,24.709323",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K10",
    title: "竹南頭份都市計畫區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.890907,24.686000",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K09",
    title: "明德水庫特定區(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.897500,24.588082",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K16",
    title: "苗栗都市計畫區(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.820995,24.567688",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K18",
    title: "高速鐵路苗栗車站特定區(92年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.826555,24.606658",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_K03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_K03",
    title: "卓蘭都市計畫區(89年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.828222,24.309884",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_K03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_O01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_O01",
    title: "新竹市1/1000地形圖(104~106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.945015,24.791523",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_O01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M22",
    title: "鹿谷都市計畫區(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.759859,23.741715",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M02",
    title: "中興新村都市計畫區(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.697691,23.942671",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M01",
    title: "中寮都市計畫區(95~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.765369,23.881273",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M18",
    title: "集集都市計畫區(95~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.788333,23.827363",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M12",
    title: "水里都市計畫區(95~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.852726,23.813390",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M06",
    title: "名間都市計畫區(95~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.698956,23.839311",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M04",
    title: "南投(含南崗地區)都市計畫區_南崗部分(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.670859,23.932538",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M08",
    title: "埔里都市計畫區(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.968947,23.966089",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M05",
    title: "南投(含南崗地區)都市計畫區_南投部分(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.685009,23.906756",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M19",
    title: "霧社都市計畫區(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.133133,24.019486",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M17",
    title: "草屯都市計畫區(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.691209,23.976152",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M15",
    title: "竹山(含延平地區)都市計畫區_竹山部分(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.683939,23.756744",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M14",
    title: "竹山(含延平地區)都市計畫區_延平部分(94~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.705476,23.766470",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M07",
    title: "國姓都市計畫區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.856309,24.040802",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M03",
    title: "八卦山脈風景特定區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.638430,23.905625",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M09",
    title: "廬山風景特定區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.184864,24.025257",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M10",
    title: "日月潭特定區計畫(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.920720,23.856991",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M11",
    title: "東埔風景特定區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.925526,23.566026",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M13",
    title: "溪頭森林遊樂特定區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.792643,23.691280",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M16",
    title: "翠峰風景特定區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.197524,24.104447",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_M21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_M21",
    title: "鳳凰谷風景特定區(93~98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.786398,23.737029",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_M21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_C01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_C01",
    title: "基隆市都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.716144,25.118524",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_C01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J01",
    title: "新竹縣北埔都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.053157,24.702685",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J03",
    title: "新竹縣新埔都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.078310,24.825804",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J04",
    title: "新竹縣新豐山崎仔地區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.994971,24.874222",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J05",
    title: "新竹縣新豐新庄子地區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.987747,24.901579",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J06",
    title: "新竹縣湖口都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.050019,24.892675",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J10",
    title: "新竹縣關西都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.179826,24.788872",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J08",
    title: "新竹縣竹東都市計畫(93~94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.066930,24.757524",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J02",
    title: "新竹縣寶山都市計畫(93~94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.000528,24.769127",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J09",
    title: "新竹縣芎林都市計畫(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.065067,24.784966",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_J07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_J07",
    title: "新竹縣竹北都市計畫(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.029609,24.819108",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_J07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G13",
    title: "宜蘭縣羅東都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.768293,24.677061",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G11",
    title: "宜蘭縣東北角暨宜蘭海岸國家風景區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 11,
    map_show_lonlat: "121.817805,24.792824",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G10",
    title: "宜蘭縣宜蘭市(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.758037,24.751605",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G12",
    title: "宜蘭縣梅花湖風景特定區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.732687,24.644016",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G06",
    title: "宜蘭縣南澳南強都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.802444,24.463553",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G05",
    title: "宜蘭縣冬山及蘇澳(含新馬)都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.833501,24.604819",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G04",
    title: "宜蘭縣冬山(順安地區)都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.767884,24.660628",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G01",
    title: "宜蘭縣三星都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.654367,24.667255",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G02",
    title: "宜蘭縣五峰旗風景特定區及礁溪都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.760272,24.825359",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G03",
    title: "宜蘭縣五結(學進地區)及五結都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.782268,24.696630",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G07",
    title: "宜蘭縣員山都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.721987,24.746669",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G08",
    title: "宜蘭縣壯圍都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.790238,24.745053",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G09",
    title: "宜蘭縣大湖風景特定區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.689309,24.740069",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G14",
    title: "宜蘭縣頭城都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.825173,24.861070",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_G15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_G15",
    title: "宜蘭縣龍潭湖風景特定區及四城地區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.749659,24.785828",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_G15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U18",
    title: "花蓮縣花蓮吉安新城都市計畫(109年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.605550,23.986822",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U14",
    title: "花蓮縣秀林(崇德地區)都市計畫(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.654287,24.161697",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U13",
    title: "花蓮縣秀林(和平地區)都市計畫(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.755257,24.304496",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U12",
    title: "花蓮縣磯崎風景特定區(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.547875,23.706191",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U11",
    title: "花蓮縣石梯秀姑巒風景特定區(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.502291,23.476314",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U07",
    title: "花蓮縣新城秀林都市計畫(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.639519,24.132305",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U16",
    title: "花蓮縣鯉魚潭風景特定區(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.514505,23.927526",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U10",
    title: "花蓮縣瑞穗都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.384228,23.494694",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U09",
    title: "花蓮縣玉里都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.316323,23.333341",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U05",
    title: "花蓮縣富里都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.249427,23.178931",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U04",
    title: "花蓮縣壽豐都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.511046,23.871441",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U08",
    title: "花蓮縣東華大學城特定區(105年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.549083,23.905982",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U01",
    title: "花蓮縣光復都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.425878,23.668471",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U02",
    title: "花蓮縣吉安(鄉公所附近地區)都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.571178,23.977858",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U03",
    title: "花蓮縣吉安都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.589961,23.977273",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U06",
    title: "花蓮縣新城(北埔地區)都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.607377,24.021270",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U15",
    title: "花蓮縣花蓮都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.612454,23.993150",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_U17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_U17",
    title: "花蓮縣鳳林都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.449930,23.744908",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_U17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X06",
    title: "澎湖縣鎖港都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "119.601290,23.525108",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X01",
    title: "澎湖縣二崁都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "119.519656,23.608403",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X04",
    title: "澎湖縣花宅聚落(103年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "119.500645,23.369200",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X03",
    title: "澎湖縣白沙鄉(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "119.583379,23.662189",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X07",
    title: "澎湖縣馬公都市計畫(97-98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "119.589737,23.563301",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X02",
    title: "澎湖縣林投都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "119.652319,23.561909",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_X05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_X05",
    title: "澎湖縣西嶼西台都市計畫(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "119.491433,23.567238",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_X05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F29 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F29",
    title: "新北市鶯歌區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.352988,24.954318",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F29",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F11",
    title: "新北市新莊區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.436232,25.031923",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F01",
    title: "新北市三峽區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.376572,24.927233",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F21",
    title: "新北市瑞芳區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.838252,25.097377",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F18",
    title: "新北市淡水區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.458815,25.193778",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F17",
    title: "新北市泰山區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.417926,25.054567",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F14",
    title: "新北市樹林區(105年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.402460,24.978885",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F02",
    title: "新北市三芝區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.487307,25.238271",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F25",
    title: "新北市蘆洲區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.471642,25.085477",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F23",
    title: "新北市石門區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.565358,25.268283",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F22",
    title: "新北市石碇區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.657821,24.991531",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F20",
    title: "新北市烏來區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.550986,24.856562",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F19",
    title: "新北市深坑區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.609999,24.999625",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F15",
    title: "新北市永和區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.513279,25.006333",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F10",
    title: "新北市新店區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.522487,24.948032",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F08",
    title: "新北市坪林區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.706876,24.935539",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F04",
    title: "新北市中和區(104年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.496432,24.991305",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F07",
    title: "新北市土城區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.446813,24.972343",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F03",
    title: "新北市三重區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.485697,25.062447",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F28 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F28",
    title: "新北市雙溪區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.861897,25.036123",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F28",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F27",
    title: "新北市金山區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.618553,25.228747",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F09",
    title: "新北市平溪區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.760024,25.032480",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F24",
    title: "新北市萬里區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.660899,25.198509",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F12",
    title: "新北市板橋區(103年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.459893,25.010872",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F16",
    title: "新北市汐止區(102年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.643761,25.078290",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F13",
    title: "新北市林口區(101年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.358056,25.096492",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F06",
    title: "新北市八里區(101年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.411723,25.132322",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F05",
    title: "新北市五股區(101年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.435175,25.095797",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_F26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_F26",
    title: "新北市貢寮區(100年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "121.927355,25.041545",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_F26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const Topo_2018 = function () {
  const obj = new ol.layer.Tile({
    name: "Topo_2018",
    title: "嘉義市1/1000地形圖(107年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.449312,23.471082",
    source: new ol.source.WMTS({
      url: "https://3dmap.chiayi.gov.tw/arcgis/rest/services/UP/Topo_2018/MapServer/tile/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "Topo_2018",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N34 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N34",
    title: "彰化縣高速鐵路彰化車站特定區(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.576324,23.875118",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N34",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N24",
    title: "彰化縣田尾都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.528890,23.891178",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N21",
    title: "彰化縣溪湖都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.479339,23.959037",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N11",
    title: "彰化縣和美都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.498970,24.111248",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N23",
    title: "彰化縣田尾園藝特定區(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.530506,23.903635",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N33 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N33",
    title: "彰化縣高速公路彰化交流道特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.519039,24.068961",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N33",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N22",
    title: "彰化縣田中都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.589104,23.857199",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N15",
    title: "彰化縣埤頭都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.461607,23.891410",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N13",
    title: "彰化縣埔心都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.540840,23.953194",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N18",
    title: "彰化縣彰化市都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.542854,24.076628",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N12",
    title: "彰化縣員林都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.574368,23.960494",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N32 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N32",
    title: "彰化縣高速公路員林交流道特定區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.510117,23.949100",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N32",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N31 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N31",
    title: "彰化縣芳苑都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.320459,23.924312",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N31",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N30 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N30",
    title: "彰化縣花壇都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.543919,24.024566",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N30",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N29 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N29",
    title: "彰化縣芬園都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.630443,24.016512",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N29",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N27",
    title: "彰化縣竹塘都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.426526,23.859670",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N26",
    title: "彰化縣秀水都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.498406,24.031139",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N19",
    title: "彰化縣永靖都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.550010,23.923527",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N16",
    title: "彰化縣大城都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.321014,23.854844",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N09",
    title: "彰化縣八卦山脈風景特定區_百果山地區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.605064,23.954014",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N08",
    title: "彰化縣八卦山脈風景特定區_松柏嶺地區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.626143,23.832522",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N07",
    title: "彰化縣八卦山脈風景特定區_東源地區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.608217,23.854084",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N06",
    title: "彰化縣八卦山脈風景特定區_文山橫山地區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.629945,23.904484",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N05",
    title: "彰化縣八卦山脈風景特定區_各區道路(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.630198,23.957295",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N04",
    title: "彰化縣八卦山脈風景特定區_八卦山地區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.564699,24.067210",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N01",
    title: "彰化縣二林都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.372198,23.899452",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N02",
    title: "彰化縣二水都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.618759,23.809594",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N03",
    title: "彰化縣伸港都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.487268,24.150539",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N10",
    title: "彰化縣北斗都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.526374,23.873585",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N14",
    title: "彰化縣埔鹽都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.473486,23.995612",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N17",
    title: "彰化縣大村都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.541595,23.993361",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N20",
    title: "彰化縣溪州都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.498605,23.852397",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N25",
    title: "彰化縣社頭都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.588665,23.896757",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N28 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N28",
    title: "彰化縣線西都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.467201,24.133366",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N28",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_N35 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_N35",
    title: "彰化縣鹿港福興都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.438212,24.056914",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_N35",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q13",
    title: "嘉義縣曾文水庫特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.556591,23.258939",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q08",
    title: "嘉義縣大埔都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.594597,23.299309",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q01",
    title: "嘉義縣中埔和睦地區都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.466291,23.451309",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q02",
    title: "嘉義縣中埔都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.524369,23.422194",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q03",
    title: "嘉義縣中崙風景特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.563270,23.374592",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q27",
    title: "嘉義縣鹿草都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.310308,23.412710",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q21",
    title: "嘉義縣竹崎都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.549692,23.519442",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q05",
    title: "嘉義縣仁義潭風景特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.519857,23.466164",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q24",
    title: "嘉義縣阿里山達邦地區都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.752045,23.458807",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q07",
    title: "嘉義縣吳鳳廟特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.537145,23.444998",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q25",
    title: "嘉義縣高速公路嘉義交流道特定區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.380177,23.496969",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q23",
    title: "嘉義縣義竹都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.245672,23.338885",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q19",
    title: "嘉義縣水上都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.399478,23.429982",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q18",
    title: "嘉義縣水上北回都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.415609,23.457655",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q11",
    title: "嘉義縣布袋都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.174893,23.378375",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q06",
    title: "嘉義縣六腳蒜頭都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.292626,23.492022",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q04",
    title: "嘉義縣中正大學特定區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.474144,23.562210",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q09",
    title: "嘉義縣大林都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.456828,23.602923",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q12",
    title: "嘉義縣新港都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.346242,23.558578",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q15",
    title: "嘉義縣梅山都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.554699,23.584947",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q16",
    title: "嘉義縣民雄都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.428077,23.553620",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q17",
    title: "嘉義縣民雄頭橋地區都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.447062,23.528695",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q20",
    title: "嘉義縣溪口都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.396974,23.604130",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q26",
    title: "嘉義縣高速鐵路嘉義車站特定區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.322996,23.458372",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q22",
    title: "嘉義縣縣治所在地都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.300123,23.459324",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q14",
    title: "嘉義縣朴子都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.244798,23.459897",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Q10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Q10",
    title: "嘉義縣太保都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.336403,23.453748",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Q10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_DA2 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_DA2",
    title: "臺南市都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.271996,23.106593",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_DA2",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_DA1 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_DA1",
    title: "臺南市都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.109215,23.028389",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_DA1",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_DA0 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_DA0",
    title: "臺南市都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.239136,23.118398",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_DA0",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_D99 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_D99",
    title: "臺南市都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.293288,22.968321",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_D99",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_D97 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_D97",
    title: "臺南市都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.253019,23.026406",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_D97",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_D93 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_D93",
    title: "臺南市都市計畫(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.300243,23.289358",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_D93",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H16",
    title: "桃園市桃園都市計畫(103~105年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.309410,24.993959",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H20",
    title: "桃園市石門都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.245126,24.830894",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H18",
    title: "桃園市楊梅都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.163989,24.913961",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H15",
    title: "桃園市林口都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.347200,25.051213",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H28 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H28",
    title: "桃園市高鐵桃園車站特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.213093,25.012694",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H28",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H19",
    title: "桃園市石門水庫水源特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.290102,24.808925",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H17",
    title: "桃園市楊梅富岡豐野都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.080087,24.936840",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H14",
    title: "桃園市新屋都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.104018,24.972858",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H11",
    title: "桃園市巴陵達觀山風景特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.394527,24.680344",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H10",
    title: "桃園市小烏來風景特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.369686,24.793733",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H08",
    title: "桃園市大溪埔頂都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.285109,24.910677",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H02",
    title: "桃園市中壢等區都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.161097,24.960143",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H01",
    title: "桃園市中壢平鎮都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.234564,24.962836",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H27",
    title: "桃園市中壢內壢交流道特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.209396,24.973106",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H25",
    title: "桃園市觀音草漯都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.140194,25.042690",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H21",
    title: "桃園市桃園內壢間都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.278075,24.985004",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H31 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H31",
    title: "桃園市龜山都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.335263,24.993032",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H31",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H29 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H29",
    title: "桃園市龍壽迴龍都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.403807,25.018493",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H29",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H23",
    title: "桃園市蘆竹大竹都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.258560,25.020817",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H12",
    title: "桃園市平鎮山子頂都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.207719,24.910521",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H07",
    title: "桃園市大園都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.197352,25.065492",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H06",
    title: "桃園市大園果林都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.257803,25.077356",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H22",
    title: "桃園市航空城特定區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.181033,25.059344",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H30 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H30",
    title: "桃園市龍潭都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.214850,24.864215",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H30",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H03",
    title: "桃園市中壢龍岡都市計畫(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.247442,24.937342",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H26",
    title: "桃園市觀音都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.082258,25.033132",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H24",
    title: "桃園市觀音新坡都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.134943,25.014021",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H13",
    title: "桃園市復興都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.350762,24.817030",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H05",
    title: "桃園市南崁都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.287388,25.040679",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H09",
    title: "桃園市大溪都市計畫(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.292018,24.882173",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_H04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_H04",
    title: "桃園市八德大湳都市計畫(92年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.300777,24.965282",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_H04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T29 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T29",
    title: "屏東縣鹽埔漁港特定區(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.441142,22.483635",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T29",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T08",
    title: "屏東縣小琉球風景特定區(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.371059,22.340602",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T07",
    title: "屏東縣大鵬灣風景特定區(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.478407,22.446765",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T25",
    title: "屏東縣車城都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.713426,22.073818",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T24",
    title: "屏東縣萬巒都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.570215,22.573088",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T22",
    title: "屏東縣竹田都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.544677,22.584058",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T20",
    title: "屏東縣滿州都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.838534,22.020518",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T10",
    title: "屏東縣崁頂都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.512231,22.513868",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T06",
    title: "屏東縣南州都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.511127,22.491114",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T31 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T31",
    title: "屏東縣麟洛都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.526026,22.650702",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T31",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T30 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T30",
    title: "屏東縣鹽埔都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.576970,22.756007",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T30",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T28 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T28",
    title: "屏東縣高樹都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.601087,22.824193",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T28",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T27",
    title: "屏東縣長治都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.521166,22.678204",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T26",
    title: "屏東縣里港都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.496449,22.777110",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T23",
    title: "屏東縣萬丹都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.489137,22.586725",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T18",
    title: "屏東縣林邊都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.512008,22.443483",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T17",
    title: "屏東縣枋寮都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.599298,22.366115",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T16",
    title: "屏東縣枋寮水底寮地區都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.596802,22.386592",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T14",
    title: "屏東縣新埤都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.550160,22.469049",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T13",
    title: "屏東縣新園都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.461781,22.544432",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T12",
    title: "屏東縣新園烏龍地區都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.456503,22.490239",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T11",
    title: "屏東縣恆春都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.744448,22.003662",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T05",
    title: "屏東縣內埔都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.566531,22.613661",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T04",
    title: "屏東縣內埔龍泉地區都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.602879,22.674221",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T03",
    title: "屏東縣內埔豐田地區都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.543612,22.628708",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T02",
    title: "屏東縣佳冬都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.556232,22.423840",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T01",
    title: "屏東縣九如都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.490421,22.733053",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T19",
    title: "屏東縣林邊都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.512008,22.443483",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T15",
    title: "屏東縣東港都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.461599,22.467818",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T21",
    title: "屏東縣潮州都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.540771,22.551047",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_T09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_T09",
    title: "屏東縣屏東都市計畫(93-94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.490543,22.674848",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_T09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_W01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_W01",
    title: "金門縣都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "118.373617,24.449655",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_W01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_Z01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_Z01",
    title: "連江縣都市計畫(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "119.958274,26.163632",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_Z01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B32 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B32",
    title: "臺中市都市計畫(107年修測)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.672582,24.157553",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B32",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B30 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B30",
    title: "臺中市大甲(日南地區)都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.655047,24.388048",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B30",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B29 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B29",
    title: "臺中市大安都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.588699,24.344311",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B29",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B28 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B28",
    title: "臺中市外埔都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.654268,24.330370",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B28",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B27",
    title: "臺中市大肚都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.541895,24.156423",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B26",
    title: "臺中市大甲都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.623580,24.345387",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B25",
    title: "臺中市后里都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.714646,24.308394",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B24",
    title: "臺中市大雅都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.654793,24.219123",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B23",
    title: "臺中市谷關都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.002356,24.201779",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B22",
    title: "臺中市梨山都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.258909,24.257346",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B21",
    title: "臺中市梨山(環山地區)都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.294676,24.318326",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B20",
    title: "臺中市梨山(松茂地區)都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.266553,24.283719",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B19",
    title: "臺中市梨山(新佳陽地區)都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 17,
    map_show_lonlat: "121.228260,24.245909",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B18",
    title: "臺中市大里都市計畫(96年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.684508,24.106554",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B17",
    title: "臺中市臺中港特定區(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.546942,24.249202",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B16",
    title: "臺中市王田交流道附近特定區(95年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.580458,24.116047",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B15",
    title: "臺中市豐原都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.722509,24.252734",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B14",
    title: "臺中市豐原交流道附近特定區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.686973,24.222018",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B13",
    title: "臺中市潭子都市計畫(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.706148,24.215970",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B10",
    title: "臺中市中部科學工業園區臺中基地特定區(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.621256,24.212835",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B12",
    title: "臺中市鐵砧山風景特定區(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.645385,24.359083",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B09",
    title: "臺中市霧峰都市計畫(92年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.699092,24.060994",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B04",
    title: "臺中市大里(草湖地區)都市計畫(91年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.696194,24.087661",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B05",
    title: "臺中市新社都市計畫(91年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.808987,24.244735",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B06",
    title: "臺中市東勢都市計畫(91年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.833556,24.245802",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B07",
    title: "臺中市烏日都市計畫(91年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.637586,24.100162",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B08",
    title: "臺中市石岡水壩都市計畫(91年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.781472,24.279938",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_B01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_B01",
    title: "臺中市太平都市計畫(90年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.716787,24.132638",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_B01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E16",
    title: "高雄市楠梓交流道特定區鳳山厝部分(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.351912,22.746506",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E08",
    title: "高雄市大樹九曲堂地區都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.420223,22.654155",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E24 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E24",
    title: "高雄市路竹都市計畫(106年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.262927,22.860361",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E24",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E21 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E21",
    title: "高雄市美濃都市計畫(105年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.542772,22.900454",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E21",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E10",
    title: "高雄市大社都市計畫(105年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.349626,22.726805",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E07",
    title: "高雄市大寮都市計畫(105年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.393359,22.604463",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E25 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E25",
    title: "高雄市阿蓮都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.329996,22.880152",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E25",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E18",
    title: "高雄市燕巢都市計畫(104年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.361302,22.791270",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E27 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E27",
    title: "高雄市都市計畫(含三民苓雅新興前金鹽埕前鎮)(102年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.314401,22.619655",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E27",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E29 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E29",
    title: "高雄市鳥松都市計畫及澄清湖特定區(鳥松區)(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.368903,22.654658",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E29",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E23 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E23",
    title: "高雄市蚵仔寮近海漁業特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.256099,22.727363",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E23",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E22 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E22",
    title: "高雄市茄萣都市計畫及興達港漁業特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.191289,22.888522",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E22",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E20 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E20",
    title: "高雄市美濃中正湖風景特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.554371,22.908566",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E20",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E17",
    title: "高雄市湖內含大湖地區都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.229678,22.892469",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E15",
    title: "高雄市梓官都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.266873,22.760711",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E12",
    title: "高雄市彌陀都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.245127,22.784645",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E30 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E30",
    title: "高雄市鳳山都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.358956,22.610501",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E30",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E01",
    title: "高雄市仁武都市計畫及澄清湖特定區(仁武區)(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.349290,22.695529",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E26 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E26",
    title: "高雄市高速公路岡山交流道特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.330134,22.787534",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E26",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E19",
    title: "高雄市甲仙都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.585411,23.079597",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E14",
    title: "高雄市月世界風景特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.389766,22.887024",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E13",
    title: "高雄市旗山都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.480653,22.887477",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E06",
    title: "高雄市大坪頂特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.391584,22.563115",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E02",
    title: "高雄市六龜彩蝶谷風景特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.636107,23.022499",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E11",
    title: "高雄市岡山都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.294836,22.795891",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E05",
    title: "高雄市大坪頂以東地區88以南(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 12,
    map_show_lonlat: "120.407523,22.532156",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E28 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E28",
    title: "高雄市高雄新市鎮特定區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.316521,22.757586",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E28",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E04",
    title: "高雄市大坪頂以東地區88以北(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "120.414575,22.616510",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E03",
    title: "高雄市大坪頂以東地區88以北(93年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.401847,22.627881",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_E09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_E09",
    title: "高雄市大樹都市計畫(92年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.432619,22.691441",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_E09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P02",
    title: "雲林縣元長都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.313750,23.650381",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P03",
    title: "雲林縣古坑都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.562458,23.644794",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P01",
    title: "雲林縣二崙都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.412871,23.770631",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P09",
    title: "雲林縣斗六都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.542911,23.708270",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P10",
    title: "雲林縣斗南交流道特定區(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.474076,23.699273",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P04",
    title: "雲林縣台西都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.197449,23.700986",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P05",
    title: "雲林縣四湖都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.226541,23.636806",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P06",
    title: "雲林縣大埤都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.429382,23.645275",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P07",
    title: "雲林縣崙背都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.352833,23.758713",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P08",
    title: "雲林縣斗六嘉東特定區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.554617,23.682635",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P11",
    title: "雲林縣東勢都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.257694,23.673427",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P12",
    title: "雲林縣林內都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.614003,23.757559",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P13",
    title: "雲林縣箔子寮漁港特定區(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.141586,23.620823",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P14",
    title: "雲林縣草嶺都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "120.694191,23.583914",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_P15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_P15",
    title: "雲林縣褒忠都市計畫(97年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "120.313577,23.695008",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_P15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V19 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V19",
    title: "臺東縣蘭嶼地形圖(109年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.544486,22.047531",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V19",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V01 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V01",
    title: "臺東縣三仙台風景特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.408404,23.121910",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V01",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V16 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V16",
    title: "臺東縣長濱都市計畫(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.457618,23.317505",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V16",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V13 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V13",
    title: "臺東縣綠島風景特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.491207,22.658353",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V13",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V02 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V02",
    title: "臺東縣八仙洞風景特定區(101年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 16,
    map_show_lonlat: "121.476701,23.395322",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V02",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V14 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V14",
    title: "臺東縣臺東都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.145945,22.753278",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V14",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V10 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V10",
    title: "臺東縣知本溫泉風景特定區(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.020536,22.695035",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V10",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V08 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V08",
    title: "臺東縣東河都市計畫(100年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.303319,22.967911",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V08",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V03 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V03",
    title: "臺東縣卑南南王都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.123541,22.781080",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V03",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V12 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V12",
    title: "臺東縣紅葉溫泉風景特定區(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.070805,22.892806",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V12",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V09 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V09",
    title: "臺東縣池上都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.216024,23.124321",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V09",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V04 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V04",
    title: "臺東縣大武都市計畫(99年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "120.899362,22.349968",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V04",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V18 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V18",
    title: "臺東縣鹿野都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.126468,22.905844",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V18",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V17 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V17",
    title: "臺東縣關山都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.163924,23.047238",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V17",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V07 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V07",
    title: "臺東縣成功都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.377763,23.101653",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V07",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V05 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V05",
    title: "臺東縣太麻里都市計畫(98年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.004540,22.609805",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V05",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V06 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V06",
    title: "臺東縣小野柳風景特定區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 15,
    map_show_lonlat: "121.196451,22.803635",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V06",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V11 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V11",
    title: "臺東縣知本鐵路車站地區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 14,
    map_show_lonlat: "121.058110,22.712053",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V11",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO01K_V15 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO01K_V15",
    title: "臺東縣臺東鐵路新站地區(94年)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    map_show_zoom: 13,
    map_show_lonlat: "121.112677,22.771916",
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO01K_V15",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const B5000 = function () {
  const obj = new ol.layer.Tile({
    name: "B5000",
    title: "1/5000基本地形圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/B5000/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "B5000",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MB5000 = function () {
  const obj = new ol.layer.Tile({
    name: "MB5000",
    title: "1/5000圖幅框",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/MB5000/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "MB5000",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_110 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_110",
    title: "1/5000基本地形圖110年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_110",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_109 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_109",
    title: "1/5000基本地形圖109年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_109",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_108 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_108",
    title: "1/5000基本地形圖108年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_108",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_107 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_107",
    title: "1/5000基本地形圖107年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_107",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_106 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_106",
    title: "1/5000基本地形圖106年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_106",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_105 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_105",
    title: "1/5000基本地形圖105年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_105",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_104 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_104",
    title: "1/5000基本地形圖104年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_104",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_103 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_103",
    title: "1/5000基本地形圖103年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_103",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_102 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_102",
    title: "1/5000基本地形圖102年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_102",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_101 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_101",
    title: "1/5000基本地形圖101年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_101",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_100 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_100",
    title: "1/5000基本地形圖100年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_100",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_99 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_99",
    title: "1/5000基本地形圖99年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_99",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_98 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_98",
    title: "1/5000基本地形圖98年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_98",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_96 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_96",
    title: "1/5000基本地形圖96年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_96",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_92 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_92",
    title: "1/5000基本地形圖92年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_92",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_91 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_91",
    title: "1/5000基本地形圖91年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_91",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_90 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_90",
    title: "1/5000基本地形圖90年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_90",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_88 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_88",
    title: "1/5000基本地形圖88年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_88",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_87 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_87",
    title: "1/5000基本地形圖87年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_87",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_86 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_86",
    title: "1/5000基本地形圖86年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_86",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05K_84 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05K_84",
    title: "1/5000基本地形圖84年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO05K_84",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO10KPHOTO = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO10KPHOTO",
    title: "1/10000像片基本圖69年至72年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO10KPHOTO/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO10KPHOTO",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_065 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_065",
    title: "1/5000像片基本圖65年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_065/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_065",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_066 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_066",
    title: "1/5000像片基本圖66年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_066/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_066",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_067 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_067",
    title: "1/5000像片基本圖67年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_067/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_067",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_068 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_068",
    title: "1/5000像片基本圖68年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_068/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_068",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_069 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_069",
    title: "1/5000像片基本圖69年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_069/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_069",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_070 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_070",
    title: "1/5000像片基本圖70年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_070/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_070",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_071 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_071",
    title: "1/5000像片基本圖71年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_071/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_071",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_072 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_072",
    title: "1/5000像片基本圖72年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_072/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_072",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_073 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_073",
    title: "1/5000像片基本圖73年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_073/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_073",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_074 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_074",
    title: "1/5000像片基本圖74年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_074/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_074",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_075 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_075",
    title: "1/5000像片基本圖75年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_075/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_075",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_076 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_076",
    title: "1/5000像片基本圖76年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_076/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_076",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_078 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_078",
    title: "1/5000像片基本圖78年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_078/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_078",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_079 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_079",
    title: "1/5000像片基本圖79年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_079/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_079",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_080 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_080",
    title: "1/5000像片基本圖80年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_080/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_080",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_081 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_081",
    title: "1/5000像片基本圖81年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_081/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_081",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_083 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_083",
    title: "1/5000像片基本圖83年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_083/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_083",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_084 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_084",
    title: "1/5000像片基本圖84年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_084/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_084",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_086 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_086",
    title: "1/5000像片基本圖86年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_086/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_086",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_087 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_087",
    title: "1/5000像片基本圖87年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_087/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_087",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_088 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_088",
    title: "1/5000像片基本圖88年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_088/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_088",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_089 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_089",
    title: "1/5000像片基本圖89年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_089/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_089",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_090 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_090",
    title: "1/5000像片基本圖90年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_090/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_090",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_091 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_091",
    title: "1/5000像片基本圖91年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_091/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_091",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_092 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_092",
    title: "1/5000像片基本圖92年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_092/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_092",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_093 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_093",
    title: "1/5000像片基本圖93年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_093/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_093",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_094 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_094",
    title: "1/5000像片基本圖94年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_094/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_094",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_095 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_095",
    title: "1/5000像片基本圖95年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_095/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_095",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_096 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_096",
    title: "1/5000像片基本圖96年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_096/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_096",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_097 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_097",
    title: "1/5000像片基本圖97年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_097/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_097",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_098 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_098",
    title: "1/5000像片基本圖98年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_098/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_098",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_099 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_099",
    title: "1/5000像片基本圖99年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_099/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_099",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_100 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_100",
    title: "1/5000像片基本圖100年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_100/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_100",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_101 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_101",
    title: "1/5000像片基本圖101年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_101/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_101",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_102 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_102",
    title: "1/5000像片基本圖102年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_102/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_102",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_103 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_103",
    title: "1/5000像片基本圖103年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_103/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_103",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_104 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_104",
    title: "1/5000像片基本圖104年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_104/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_104",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_105 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_105",
    title: "1/5000像片基本圖105年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_105/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_105",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_106 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_106",
    title: "1/5000像片基本圖106年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_106/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_106",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_107 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_107",
    title: "1/5000像片基本圖107年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_107/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_107",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 19,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_108 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_108",
    title: "1/5000像片基本圖108年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_108/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_108",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_109 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_109",
    title: "1/5000像片基本圖109年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_109/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_109",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO05KPHOTO_110 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO05KPHOTO_110",
    title: "1/5000像片基本圖110年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/TOPO05KPHOTO_110/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "TOPO05KPHOTO_110",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MB25000 = function () {
  const obj = new ol.layer.Vector({
    name: "MB25000",
    title: "1/25000圖幅框(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/25000圖幅框.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const B25000 = function () {
  const obj = new ol.layer.Tile({
    name: "B25000",
    title: "1/25000經建版地形圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/B25000/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "B25000",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 17,
    }),
  });
  return obj;
};
const TOPO25K_110 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO25K_110",
    title: "1/25000經建版地形圖110年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO25K_110",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO25K_109 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO25K_109",
    title: "1/25000經建版地形圖109年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO25K_109",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO25K_108 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO25K_108",
    title: "1/25000經建版地形圖108年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO25K_108",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO25K_107 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO25K_107",
    title: "1/25000經建版地形圖107年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO25K_107",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MB50000 = function () {
  const obj = new ol.layer.Vector({
    name: "MB50000",
    title: "1/50000圖幅框(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/50000圖幅框.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const B50000 = function () {
  const obj = new ol.layer.Tile({
    name: "B50000",
    title: "1/50000經建版地形圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/B50000/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "B50000",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 16,
    }),
  });
  return obj;
};
const TOPO50K_111 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO50K_111",
    title: "1/50000經建版地形圖111年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO50K_111",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO50K_110 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO50K_110",
    title: "1/50000經建版地形圖110年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO50K_110",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO50K_109 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO50K_109",
    title: "1/50000經建版地形圖109年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO50K_109",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO50K_107 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO50K_107",
    title: "1/50000經建版地形圖107年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO50K_107",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const MB100000 = function () {
  const obj = new ol.layer.Vector({
    name: "MB100000",
    title: "1/100000圖幅框(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/100000圖幅框.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const B100000 = function () {
  const obj = new ol.layer.Tile({
    name: "B100000",
    title: "1/100000經建版地形圖",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/B100000/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "B100000",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 16,
    }),
  });
  return obj;
};
const TOPO10M_111 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO10M_111",
    title: "1/100000經建版地形圖111年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO10M_111",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO10M_110 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO10M_110",
    title: "1/100000經建版地形圖110年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO10M_110",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO10M_109 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO10M_109",
    title: "1/100000經建版地形圖109年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO10M_109",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TOPO10M_107 = function () {
  const obj = new ol.layer.Tile({
    name: "TOPO10M_107",
    title: "1/100000經建版地形圖107年",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts",
      layer: "TOPO10M_107",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TM25K_1989 = function () {
  const obj = new ol.layer.Tile({
    name: "TM25K_1989",
    title: "臺灣經建1版地形圖(1989)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_1989-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "TM25K_1989",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TM25K_1993 = function () {
  const obj = new ol.layer.Tile({
    name: "TM25K_1993",
    title: "臺灣經建2版地形圖(1993)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_1993-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "TM25K_1993",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TM25K_2001 = function () {
  const obj = new ol.layer.Tile({
    name: "TM25K_2001",
    title: "臺灣經建3版地形圖(2001)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_2001-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "TM25K_2001",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const TM25K_2003 = function () {
  const obj = new ol.layer.Tile({
    name: "TM25K_2003",
    title: "臺灣經建4版地形圖(2003)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_2003-jpg-{TileMatrix}-{TileCol}-{TileRow}",
      layer: "TM25K_2003",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const BIO_eBird = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_eBird",
    title: "eBird水鳥熱點(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/_eBird水鳥熱點_20200508.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_TPlantArea = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_TPlantArea",
    title: "受脅植物重要棲地(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/_受脅植物重要棲地_20200511.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_TPlantNVU = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_TPlantNVU",
    title: "國家易危(NVU)之受脅植物分布點位緩衝帶(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/_受脅植物分布點位緩衝帶_國家易危(NVU)_20200511.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_TPlantNEN = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_TPlantNEN",
    title: "國家瀕危(NEN)之受脅植物分布點位緩衝帶(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/_受脅植物分布點位緩衝帶_國家瀕危(NEN)_20200511.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_TPlantNCR = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_TPlantNCR",
    title: "國家極危(NCR)之受脅植物分布點位緩衝帶(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/_受脅植物分布點位緩衝帶_國家極危(NCR)_20200511.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A01 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A01",
    title: "「八哥」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/八哥.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A02 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A02",
    title: "「大杓鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/大杓鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A03 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A03",
    title: "「大冠鷲」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/大冠鷲.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A04 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A04",
    title: "「大濱鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/大濱鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A05 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A05",
    title: "「小燕鷗」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/小燕鷗.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A06 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A06",
    title: "「山麻雀」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/山麻雀.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A07 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A07",
    title: "「水雉」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/水雉.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A08 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A08",
    title: "「半蹼鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/半蹼鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A09 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A09",
    title: "「白琵鷺」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/白琵鷺.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A10 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A10",
    title: "「石虎」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/石虎.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A11 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A11",
    title: "「灰面鵟鷹」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/灰面鵟鷹.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A12 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A12",
    title: "「赤腹鷹」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/赤腹鷹.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A13 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A13",
    title: "「東方白鸛」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/東方白鸛.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A14 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A14",
    title: "「東方蜂鷹」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/東方蜂鷹.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A15 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A15",
    title: "「東方澤鵟」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/東方澤鵟.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A16 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A16",
    title: "「東方鵟」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/東方鵟.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A17 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A17",
    title: "「松雀鷹」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/松雀鷹.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A18 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A18",
    title: "「金線蛙」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/金線蛙.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A19 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A19",
    title: "「紅尾伯勞」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/紅尾伯勞.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A20 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A20",
    title: "「紅隼」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/紅隼.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A21 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A21",
    title: "「紅腹濱鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/紅腹濱鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A22 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A22",
    title: "「紅燕鷗」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/紅燕鷗.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A23 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A23",
    title: "「紅頭綠鳩」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/紅頭綠鳩.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A24 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A24",
    title: "「食蟹獴」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/食蟹獴.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A25 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A25",
    title: "「唐白鷺」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/唐白鷺.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A26 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A26",
    title: "「柴棺龜」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/柴棺龜.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A27 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A27",
    title: "「烏頭翁」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/烏頭翁.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A28 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A28",
    title: "「草花蛇」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/草花蛇.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A29 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A29",
    title: "「彩鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/彩鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A30 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A30",
    title: "「野鵐」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/野鵐.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A31 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A31",
    title: "「魚鷹」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/魚鷹.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A32 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A32",
    title: "「黃鸝」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黃鸝.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A33 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A33",
    title: "「黑尾鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黑尾鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A34 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A34",
    title: "「黑面琵鷺」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黑面琵鷺.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A35 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A35",
    title: "「黑翅鳶」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黑翅鳶.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A36 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A36",
    title: "「黑鳶」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黑鳶.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A37 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A37",
    title: "「黑嘴鷗」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黑嘴鷗.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A38 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A38",
    title: "「黑頭文鳥」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黑頭文鳥.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A39 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A39",
    title: "「遊隼」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/遊隼.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A40 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A40",
    title: "「臺灣畫眉」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/臺灣畫眉.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A41 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A41",
    title: "「臺灣黑眉錦蛇」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/臺灣黑眉錦蛇.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A42 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A42",
    title: "「臺灣藍鵲」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/臺灣藍鵲.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A43 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A43",
    title: "「鳳頭蒼鷹」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/鳳頭蒼鷹.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A44 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A44",
    title: "「鳳頭燕鷗」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/鳳頭燕鷗.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A45 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A45",
    title: "「燕隼」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/燕隼.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A46 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A46",
    title: "「燕鴴」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/燕鴴.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A47 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A47",
    title: "「環頸雉」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/環頸雉.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A48 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A48",
    title: "「黦鷸」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/黦鷸.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const BIO_A49 = function () {
  const obj = new ol.layer.Vector({
    name: "BIO_A49",
    title: "「麝香貓」潛在分布範圍(KML)",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.Vector({
      url: "https://maps.nlsc.gov.tw/demo/生物多樣性/麝香貓.kml",
      format: new ol.format.KML({
        extractStyles: true,
        extractAttributes: true,
        maxDepth: 2,
      }),
    }),
  });
  return obj;
};
const LiDAR2021 = function () {
  const obj = new ol.layer.Tile({
    name: "LiDAR2021",
    title: "110年空載光達正射影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LiDAR2021/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LiDAR2021",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LiDAR2020 = function () {
  const obj = new ol.layer.Tile({
    name: "LiDAR2020",
    title: "109年空載光達正射影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LiDAR2020/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LiDAR2020",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
const LiDAR2019 = function () {
  const obj = new ol.layer.Tile({
    name: "LiDAR2019",
    title: "108年空載光達正射影像",
    type: "overlay",
    opacity: 1.0,
    visible: false,
    source: new ol.source.WMTS({
      url: "https://wmts.nlsc.gov.tw/wmts/LiDAR2019/default/EPSG:3857/{TileMatrix}/{TileRow}/{TileCol}",
      layer: "LiDAR2019",
      requestEncoding: "REST",
      matrixSet: "GoogleMapsCompatible",
      format: "image/png",
      transparente: true,
      projection: projection,
      tileGrid: new ol.tilegrid.WMTS({
        origin: ol.extent.getTopLeft(projectionExtent),
        matrixIds: matrixIds,
        resolutions: resolutions,
      }),
      style: "default",
      maxZoom: 20,
    }),
  });
  return obj;
};
function mapsadd() {
  baselayGroupArray.push(EMAP_B());
  baselayGroupArray2.push(EMAP_B());
  baselayGroupArray.push(EMAP15_B());
  baselayGroupArray2.push(EMAP15_B());
  baselayGroupArray.push(EMAP5_B());
  baselayGroupArray2.push(EMAP5_B());
  baselayGroupArray.push(EMAP6_B());
  baselayGroupArray2.push(EMAP6_B());
  baselayGroupArray.push(EMAP16_B());
  baselayGroupArray2.push(EMAP16_B());
  baselayGroupArray.push(EMAP01_B());
  baselayGroupArray2.push(EMAP01_B());
  baselayGroupArray.push(EMAP8_B());
  baselayGroupArray2.push(EMAP8_B());
  baselayGroupArray.push(PHOTO2_B());
  baselayGroupArray2.push(PHOTO2_B());
  baselayGroupArray.push(PHOTO_MIX_B());
  baselayGroupArray2.push(PHOTO_MIX_B());
  baselayGroupArray.push(EMAP9_B());
  baselayGroupArray2.push(EMAP9_B());
  baselayGroupArray.push(EMAP99_B());
  baselayGroupArray2.push(EMAP99_B());
}
