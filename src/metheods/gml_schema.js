// 點
const utl_point={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_點',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
  ]
}

// 人手孔
const utl_handHole={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_人手孔',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['人手孔編號','O','string'],
    ['孔蓋種類','M','number'],
    ['尺寸單位','M','number'],
    ['蓋部寬度','M','number'],
    ['蓋部長度','M','number'],
    ['閘門名稱','O','string'],
    ['地盤高','M','number'],
    ['孔深','M','number'],
    ['孔蓋型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['內容物','O','string'],
    ['備註','O','string']
  ]
}

// 開關閥
const utl_switch={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_開關閥',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['開關閥編號','O','string'],
    ['閥類編號','O','string'],
    ['口徑','M','number'],
    ['名稱','O','string'],
    ['地盤高','M','number'],
    ['埋設深度','M','number'],
    ['開關閥型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}
// 消防栓
const utl_fireHydrat={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_消防栓',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['消防栓編號','O','string'],
    ['管身口徑','M','number'],
    ['出水口口徑','M','number'],
    ['埋設深度','M','number'],
    ['消防栓型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}

// 電桿
const utl_ePole={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_電桿',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['電桿編號','O','string'],
    ['長度','M','number'],
    ['材質','M','string'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}

// 號誌
const utl_signal={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_號誌',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['號誌編號','O','string'],
    ['號誌種類','O','string'],
    ['號誌架設方式','M','number'],
    ['長度','O','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}

// 其他設施
const utl_other={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_其他設施',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['設施編號','O','string'],
    ['設施名稱','M','string'],
    ['設施長度','O','number'],
    ['設施寬度','O','number'],
    ['設施高度','O','number'],
    ['設施型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}
// 維護口
const utl_mainten={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_維護口',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['維護口編號','O','string'],
    ['名稱','O','string'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}
// 站場
const utl_stations={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_站場',
  type: 'Point',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['場站名稱','M','string'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string']
  ]
}
// 線
const utl_line={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_線',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
  ]
}
// 管線
const utl_pipeLine={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管線',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['管線編號','O','string'],
    ['尺寸單位','M','number'],
    ['管徑寬度','M','number'],
    ['管徑高度','M','number'],
    ['涵管條數','M','number'],
    ['管線材料','M','string'],
    ['起點埋設深度','M','number'],
    ['終點埋設深度','M','number'],
    ['管線長度','M','number'],
    ['管線型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string'],

  ]
}

// 管線_自來水
const utl_tapWater={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管線_自來水',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['管線編號','O','string'],
    ['尺寸單位','M','number'],
    ['管徑寬度','M','number'],
    ['管徑高度','M','number'],
    ['涵管條數','M','number'],
    ['管線材料','M','string'],
    ['起點埋設深度','M','number'],
    ['終點埋設深度','M','number'],
    ['管線長度','M','number'],
    ['管線型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string'],
    ['輸送物質','M','string'],
  ]
}

// 管線_供氣
const utl_gas={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管線_供氣',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['管線編號','O','string'],
    ['尺寸單位','M','number'],
    ['管徑寬度','M','number'],
    ['管徑高度','M','number'],
    ['涵管條數','M','number'],
    ['管線材料','M','string'],
    ['起點埋設深度','M','number'],
    ['終點埋設深度','M','number'],
    ['管線長度','M','number'],
    ['管線型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string'],
    ['壓力區分','M','number'],
    ['輸送物質','M','string'],
  ]
}
// 管線_輸油
const utl_oil={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管線_輸油',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['管線編號','O','string'],
    ['尺寸單位','M','number'],
    ['管徑寬度','M','number'],
    ['管徑高度','M','number'],
    ['涵管條數','M','number'],
    ['管線材料','M','string'],
    ['起點埋設深度','M','number'],
    ['終點埋設深度','M','number'],
    ['管線長度','M','number'],
    ['管線型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string'],
    ['壓力區分','M','number'],
    ['輸送物質','M','string'],
  ]
}
// 管線_工業
const utl_industry={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管線_工業',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['管線編號','O','string'],
    ['尺寸單位','M','number'],
    ['管徑寬度','M','number'],
    ['管徑高度','M','number'],
    ['涵管條數','M','number'],
    ['管線材料','M','string'],
    ['起點埋設深度','M','number'],
    ['終點埋設深度','M','number'],
    ['管線長度','M','number'],
    ['管線型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string'],
    ['壓力區分','M','number'],
    ['輸送物質','M','string'],
  ]
}
// 管中管
const utl_withinTube={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管中管',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
  ]
}
// 管道
const utl_tubing={
  header: "<UTL xmlns:gml='http://www.opengis.net/gml' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:ngis_primitive='http://standards.moi.gov.tw/schema/ngis_primitive/' xmlns:gco='http://www.isotc211.org/2005/gco' xmlns:gmd='http://www.isotc211.org/2005/gmd' xmlns='https://standards.moi.gov.tw/schema/utilityex' xsi:schemaLocation='https://standards.moi.gov.tw/schema/utilityex utilityex.xsd'>\n",
  tag: 'UTL_管道',
  type: 'LineString',
  colume: [
    ['類別碼','M','string'],
    ['識別碼','M','string'],
    ['起點編號','O','string'],
    ['終點編號','O','string'],
    ['管理單位','M','string'],
    ['作業區分','M','number'],
    ['設置日期','M','date'],
    ['管道編號','O','string'],
    ['尺寸單位','M','number'],
    ['管徑寬度','M','number'],
    ['管徑高度','M','number'],
    ['涵管條數','M','number'],
    ['管線材料','M','string'],
    ['起點埋設深度','M','number'],
    ['終點埋設深度','M','number'],
    ['管線長度','M','number'],
    ['管線型態','M','number'],
    ['使用狀態','M','number'],
    ['資料狀態','M','number'],
    ['備註','O','string'],
  ]
}

const schemalist = [
  utl_point, 
  utl_handHole, 
  utl_switch, 
  utl_fireHydrat,
  utl_ePole,
  utl_signal,
  utl_other,
  utl_mainten,
  utl_stations,
  utl_line,
  utl_pipeLine,
  utl_tapWater,
  utl_gas,
  utl_oil,
  utl_industry,
  utl_withinTube,
  utl_tubing,
];

export { 
  schemalist
};