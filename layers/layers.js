ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([352546.580318, 6298732.782444, 353478.292802, 6299219.916862]);
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
var format_Entre81y100_2 = new ol.format.GeoJSON();
var features_Entre81y100_2 = format_Entre81y100_2.readFeatures(json_Entre81y100_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Entre81y100_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entre81y100_2.addFeatures(features_Entre81y100_2);
var lyr_Entre81y100_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entre81y100_2, 
                style: style_Entre81y100_2,
                interactive: true,
                title: '<img src="styles/legend/Entre81y100_2.png" /> Entre 81 y 100% '
            });
var format_Entre41y80_3 = new ol.format.GeoJSON();
var features_Entre41y80_3 = format_Entre41y80_3.readFeatures(json_Entre41y80_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Entre41y80_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entre41y80_3.addFeatures(features_Entre41y80_3);
var lyr_Entre41y80_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entre41y80_3, 
                style: style_Entre41y80_3,
                interactive: true,
                title: '<img src="styles/legend/Entre41y80_3.png" /> Entre 41 y 80%'
            });
var format_Entre1y40_4 = new ol.format.GeoJSON();
var features_Entre1y40_4 = format_Entre1y40_4.readFeatures(json_Entre1y40_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Entre1y40_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entre1y40_4.addFeatures(features_Entre1y40_4);
var lyr_Entre1y40_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Entre1y40_4, 
                style: style_Entre1y40_4,
                interactive: true,
                title: '<img src="styles/legend/Entre1y40_4.png" /> Entre 1 y 40%'
            });
var format_SinMuestreo_5 = new ol.format.GeoJSON();
var features_SinMuestreo_5 = format_SinMuestreo_5.readFeatures(json_SinMuestreo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_SinMuestreo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SinMuestreo_5.addFeatures(features_SinMuestreo_5);
var lyr_SinMuestreo_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SinMuestreo_5, 
                style: style_SinMuestreo_5,
                interactive: true,
                title: '<img src="styles/legend/SinMuestreo_5.png" /> Sin Muestreo'
            });
var format_BUFF800L_6 = new ol.format.GeoJSON();
var features_BUFF800L_6 = format_BUFF800L_6.readFeatures(json_BUFF800L_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_BUFF800L_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFF800L_6.addFeatures(features_BUFF800L_6);
var lyr_BUFF800L_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUFF800L_6, 
                style: style_BUFF800L_6,
                interactive: false,
                title: '<img src="styles/legend/BUFF800L_6.png" /> BUFF800L'
            });
var format_BUFF400L_7 = new ol.format.GeoJSON();
var features_BUFF400L_7 = format_BUFF400L_7.readFeatures(json_BUFF400L_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_BUFF400L_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFF400L_7.addFeatures(features_BUFF400L_7);
var lyr_BUFF400L_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUFF400L_7, 
                style: style_BUFF400L_7,
                interactive: false,
                title: '<img src="styles/legend/BUFF400L_7.png" /> BUFF400L'
            });
var format_BUFF200L_8 = new ol.format.GeoJSON();
var features_BUFF200L_8 = format_BUFF200L_8.readFeatures(json_BUFF200L_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_BUFF200L_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFF200L_8.addFeatures(features_BUFF200L_8);
var lyr_BUFF200L_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUFF200L_8, 
                style: style_BUFF200L_8,
                interactive: false,
                title: '<img src="styles/legend/BUFF200L_8.png" /> BUFF200L'
            });
var format_GRILLAV2_9 = new ol.format.GeoJSON();
var features_GRILLAV2_9 = format_GRILLAV2_9.readFeatures(json_GRILLAV2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_GRILLAV2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRILLAV2_9.addFeatures(features_GRILLAV2_9);
var lyr_GRILLAV2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GRILLAV2_9, 
                style: style_GRILLAV2_9,
                interactive: false,
                title: '<img src="styles/legend/GRILLAV2_9.png" /> GRILLA V2'
            });
var format_CENTROID_MZ_10 = new ol.format.GeoJSON();
var features_CENTROID_MZ_10 = format_CENTROID_MZ_10.readFeatures(json_CENTROID_MZ_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CENTROID_MZ_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROID_MZ_10.addFeatures(features_CENTROID_MZ_10);
var lyr_CENTROID_MZ_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROID_MZ_10, 
                style: style_CENTROID_MZ_10,
                interactive: true,
                title: '<img src="styles/legend/CENTROID_MZ_10.png" /> CENTROID_MZ'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MZ_GENERAL_1.setVisible(true);lyr_Entre81y100_2.setVisible(false);lyr_Entre41y80_3.setVisible(false);lyr_Entre1y40_4.setVisible(false);lyr_SinMuestreo_5.setVisible(false);lyr_BUFF800L_6.setVisible(true);lyr_BUFF400L_7.setVisible(true);lyr_BUFF200L_8.setVisible(true);lyr_GRILLAV2_9.setVisible(false);lyr_CENTROID_MZ_10.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_MZ_GENERAL_1,lyr_Entre81y100_2,lyr_Entre41y80_3,lyr_Entre1y40_4,lyr_SinMuestreo_5,lyr_BUFF800L_6,lyr_BUFF400L_7,lyr_BUFF200L_8,lyr_GRILLAV2_9,lyr_CENTROID_MZ_10];
lyr_MZ_GENERAL_1.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'Grilla': 'Grilla', 'MZ o id': 'MZ o id', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'ID_MANZTXT': 'ID_MANZTXT', });
lyr_Entre81y100_2.set('fieldAliases', {'area': 'area', 'Grilla': 'Grilla', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'PORC_AVANC': 'PORC_AVANC', 'INTER_AVAN': 'INTER_AVAN', });
lyr_Entre41y80_3.set('fieldAliases', {'area': 'area', 'Grilla': 'Grilla', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'PORC_AVANC': 'PORC_AVANC', 'INTER_AVAN': 'INTER_AVAN', });
lyr_Entre1y40_4.set('fieldAliases', {'area': 'area', 'Grilla': 'Grilla', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'PORC_AVAN': 'PORC_AVAN', 'INTER_AVAN': 'INTER_AVAN', });
lyr_SinMuestreo_5.set('fieldAliases', {'area': 'area', 'Grilla': 'Grilla', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'PORC_AVAN': 'PORC_AVAN', 'INTER_AVAN': 'INTER_AVAN', });
lyr_BUFF800L_6.set('fieldAliases', {'Id': 'Id', });
lyr_BUFF400L_7.set('fieldAliases', {'Id': 'Id', });
lyr_BUFF200L_8.set('fieldAliases', {'Id': 'Id', });
lyr_GRILLAV2_9.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GRILLARM_I': 'GRILLARM_I', });
lyr_CENTROID_MZ_10.set('fieldAliases', {'fid': 'fid', 'area': 'area', 'Grilla': 'Grilla', 'MZ o id': 'MZ o id', 'Sector': 'Sector', 'ID_MANZA': 'ID_MANZA', 'ID_MANZTXT': 'ID_MANZTXT', });
lyr_MZ_GENERAL_1.set('fieldImages', {'fid': '', 'area': 'TextEdit', 'Grilla': 'TextEdit', 'MZ o id': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'Range', 'ID_MANZTXT': 'TextEdit', });
lyr_Entre81y100_2.set('fieldImages', {'area': 'TextEdit', 'Grilla': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'PORC_AVANC': '', 'INTER_AVAN': '', });
lyr_Entre41y80_3.set('fieldImages', {'area': 'TextEdit', 'Grilla': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'PORC_AVANC': '', 'INTER_AVAN': '', });
lyr_Entre1y40_4.set('fieldImages', {'area': 'TextEdit', 'Grilla': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'PORC_AVAN': '', 'INTER_AVAN': '', });
lyr_SinMuestreo_5.set('fieldImages', {'area': 'TextEdit', 'Grilla': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'PORC_AVAN': '', 'INTER_AVAN': '', });
lyr_BUFF800L_6.set('fieldImages', {'Id': 'Range', });
lyr_BUFF400L_7.set('fieldImages', {'Id': 'Range', });
lyr_BUFF200L_8.set('fieldImages', {'Id': 'Range', });
lyr_GRILLAV2_9.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GRILLARM_I': 'TextEdit', });
lyr_CENTROID_MZ_10.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', 'Grilla': 'TextEdit', 'MZ o id': 'TextEdit', 'Sector': 'TextEdit', 'ID_MANZA': 'TextEdit', 'ID_MANZTXT': 'TextEdit', });
lyr_MZ_GENERAL_1.set('fieldLabels', {'fid': 'inline label', 'area': 'inline label', 'Grilla': 'inline label', 'MZ o id': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'ID_MANZTXT': 'no label', });
lyr_Entre81y100_2.set('fieldLabels', {'area': 'inline label', 'Grilla': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'PORC_AVANC': 'inline label', 'INTER_AVAN': 'no label', });
lyr_Entre41y80_3.set('fieldLabels', {'area': 'inline label', 'Grilla': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'PORC_AVANC': 'inline label', 'INTER_AVAN': 'no label', });
lyr_Entre1y40_4.set('fieldLabels', {'area': 'inline label', 'Grilla': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'PORC_AVAN': 'inline label', 'INTER_AVAN': 'no label', });
lyr_SinMuestreo_5.set('fieldLabels', {'area': 'inline label', 'Grilla': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'PORC_AVAN': 'inline label', 'INTER_AVAN': 'no label', });
lyr_BUFF800L_6.set('fieldLabels', {'Id': 'no label', });
lyr_BUFF400L_7.set('fieldLabels', {'Id': 'no label', });
lyr_BUFF200L_8.set('fieldLabels', {'Id': 'no label', });
lyr_GRILLAV2_9.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'GRILLARM_I': 'no label', });
lyr_CENTROID_MZ_10.set('fieldLabels', {'fid': 'inline label', 'area': 'inline label', 'Grilla': 'inline label', 'MZ o id': 'inline label', 'Sector': 'inline label', 'ID_MANZA': 'inline label', 'ID_MANZTXT': 'inline label', });
lyr_CENTROID_MZ_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});