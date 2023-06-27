ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([352827.776949, 6298881.054531, 353258.364329, 6299074.974299]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MZ_GENERAL_1 = new ol.format.GeoJSON();
var features_MZ_GENERAL_1 = format_MZ_GENERAL_1.readFeatures(json_MZ_GENERAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MZ_GENERAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MZ_GENERAL_1.addFeatures(features_MZ_GENERAL_1);
var lyr_MZ_GENERAL_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MZ_GENERAL_1, 
                style: style_MZ_GENERAL_1,
                interactive: true,
                title: '<img src="styles/legend/MZ_GENERAL_1.png" /> MZ_GENERAL'
            });
var format_GRILLAV2_2 = new ol.format.GeoJSON();
var features_GRILLAV2_2 = format_GRILLAV2_2.readFeatures(json_GRILLAV2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_GRILLAV2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRILLAV2_2.addFeatures(features_GRILLAV2_2);
var lyr_GRILLAV2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRILLAV2_2, 
                style: style_GRILLAV2_2,
                interactive: false,
                title: '<img src="styles/legend/GRILLAV2_2.png" /> GRILLA V2'
});



//NUEVA ACTUALIZACIÓN DE BUFFER 
var format_BUFFERS26_1 = new ol.format.GeoJSON();
var features_BUFFERS26_1 = format_BUFFERS26_1.readFeatures(json_BUFFERS26_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_BUFFERS26_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERS26_1.addFeatures(features_BUFFERS26_1);
var lyr_BUFFERS26_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUFFERS26_1, 
                style: style_BUFFERS26_1,
                interactive: false,
    title: 'BUFFER S26<br />\
    <img src="styles/legend/BUFFERS26_1_0.png" /> 200<br />\
    <img src="styles/legend/BUFFERS26_1_1.png" /> 400<br />\
    <img src="styles/legend/BUFFERS26_1_2.png" /> 800<br />'
});


var format_AVANCE_MUESTREO_4 = new ol.format.GeoJSON();
var features_AVANCE_MUESTREO_4 = format_AVANCE_MUESTREO_4.readFeatures(json_AVANCE_MUESTREO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_AVANCE_MUESTREO_4 = new ol.source.Vector({
    attributions: ' ',
});

jsonSource_AVANCE_MUESTREO_4.addFeatures(features_AVANCE_MUESTREO_4);
var lyr_AVANCE_MUESTREO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AVANCE_MUESTREO_4, 
                style: style_AVANCE_MUESTREO_4,
                interactive: true,
    title: 'AVANCE_MUESTREO<br />\
    <img src="styles/legend/AVANCE_MUESTREO_4_0.png" /> Entre 1 y 40%<br />\
    <img src="styles/legend/AVANCE_MUESTREO_4_1.png" /> Entre 41 y 80%<br />\
    <img src="styles/legend/AVANCE_MUESTREO_4_2.png" /> Entre 81 y 100%<br />\
    <img src="styles/legend/AVANCE_MUESTREO_4_3.png" /> Sin Muestreo<br />'
        });
var format_NUMERO_MANZANA_5 = new ol.format.GeoJSON();
var features_NUMERO_MANZANA_5 = format_NUMERO_MANZANA_5.readFeatures(json_NUMERO_MANZANA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_NUMERO_MANZANA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NUMERO_MANZANA_5.addFeatures(features_NUMERO_MANZANA_5);
var lyr_NUMERO_MANZANA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NUMERO_MANZANA_5, 
                style: style_NUMERO_MANZANA_5,
                interactive: true,
                title: '<img src="styles/legend/NUMERO_MANZANA_5.png" /> NUMERO_MANZANA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MZ_GENERAL_1.setVisible(true);lyr_GRILLAV2_2.setVisible(false);lyr_BUFFERS26_1.setVisible(true);lyr_AVANCE_MUESTREO_4.setVisible(false);lyr_NUMERO_MANZANA_5.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_MZ_GENERAL_1,lyr_GRILLAV2_2,lyr_BUFFERS26_1,lyr_AVANCE_MUESTREO_4,lyr_NUMERO_MANZANA_5];
lyr_MZ_GENERAL_1.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'Grilla': 'Grilla', 'MZ o id': 'MZ o id', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'ID_MANZTXT': 'ID_MANZTXT', });
lyr_GRILLAV2_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GRILLARM_I': 'GRILLARM_I', });
lyr_BUFFERS26_1.set('fieldAliases', {'Id': 'Id', 'layer': 'layer', });
lyr_AVANCE_MUESTREO_4.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'Grilla': 'Grilla', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'PORC_AVAN': 'PORC_AVAN', 'INTER_AVAN': 'INTER_AVAN', });
lyr_NUMERO_MANZANA_5.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'Grilla': 'Grilla', 'MZ o id': 'MZ o id', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'ID_MANZTXT': 'ID_MANZTXT', });
lyr_MZ_GENERAL_1.set('fieldImages', {'fid': '', 'area': 'TextEdit', 'Grilla': 'TextEdit', 'MZ o id': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'Range', 'ID_MANZTXT': 'TextEdit', });
lyr_GRILLAV2_2.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GRILLARM_I': 'TextEdit', });
lyr_BUFFERS26_1.set('fieldImages', {'Id': 'Range', 'layer': 'TextEdit', });
lyr_AVANCE_MUESTREO_4.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'Grilla': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'PORC_AVAN': 'TextEdit', 'INTER_AVAN': 'TextEdit', });
lyr_NUMERO_MANZANA_5.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'Grilla': 'TextEdit', 'MZ o id': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'ID_MANZTXT': 'TextEdit', });
lyr_MZ_GENERAL_1.set('fieldLabels', {'fid': 'inline label', 'area': 'inline label', 'Grilla': 'inline label', 'MZ o id': 'no label', 'Sector': 'inline label', 'ID_MANZA': 'no label', 'ID_MANZTXT': 'no label', });
lyr_GRILLAV2_2.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'GRILLARM_I': 'no label', });
lyr_BUFFERS26_1.set('fieldLabels', {'Id': 'no label', 'layer': 'no label', });
lyr_AVANCE_MUESTREO_4.set('fieldLabels', {'fid': 'inline label', 'area': 'inline label', 'Grilla': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'PORC_AVAN': 'inline label', 'INTER_AVAN': 'header label', });
lyr_NUMERO_MANZANA_5.set('fieldLabels', {'fid': 'no label', 'area': 'no label', 'Grilla': 'no label', 'MZ o id': 'no label', 'Sector': 'no label', 'ID_MANZA': 'no label', 'ID_MANZTXT': 'no label', });
lyr_NUMERO_MANZANA_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});