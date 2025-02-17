ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([68.997401, 23.028844, 80.085202, 30.107368]);
var wms_layers = [];


        var lyr_hybrid_0 = new ol.layer.Tile({
            'title': 'hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_ALL_ULB_305_Updated_1 = new ol.format.GeoJSON();
var features_ALL_ULB_305_Updated_1 = format_ALL_ULB_305_Updated_1.readFeatures(json_ALL_ULB_305_Updated_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ALL_ULB_305_Updated_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALL_ULB_305_Updated_1.addFeatures(features_ALL_ULB_305_Updated_1);
var lyr_ALL_ULB_305_Updated_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALL_ULB_305_Updated_1, 
                style: style_ALL_ULB_305_Updated_1,
                popuplayertitle: 'ALL_ULB_305_Updated',
                interactive: true,
                title: '<img src="styles/legend/ALL_ULB_305_Updated_1.png" /> ALL_ULB_305_Updated'
            });

lyr_hybrid_0.setVisible(true);lyr_ALL_ULB_305_Updated_1.setVisible(true);
var layersList = [lyr_hybrid_0,lyr_ALL_ULB_305_Updated_1];
lyr_ALL_ULB_305_Updated_1.set('fieldAliases', {'S_No': 'S_No', 'Ulb_Name': 'Ulb_Name', 'Ulb_Catego': 'Ulb_Catego', 'Division': 'Division', 'District': 'District', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ULB_Code': 'ULB_Code', 'Name_of_EO': 'Name_of_EO', 'Mobile_No_': 'Mobile_No_', 'Land_Line': 'Land_Line', 'Link_offic': 'Link_offic', 'Designatio': 'Designatio', 'Mobile_Num': 'Mobile_Num', 'F22': 'F22', 'Mobile_EO': 'Mobile_EO', 'Mobile_Lin': 'Mobile_Lin', });
lyr_ALL_ULB_305_Updated_1.set('fieldImages', {'S_No': 'TextEdit', 'Ulb_Name': 'TextEdit', 'Ulb_Catego': 'TextEdit', 'Division': 'TextEdit', 'District': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ULB_Code': 'TextEdit', 'Name_of_EO': 'TextEdit', 'Mobile_No_': 'TextEdit', 'Land_Line': 'TextEdit', 'Link_offic': 'TextEdit', 'Designatio': 'TextEdit', 'Mobile_Num': 'TextEdit', 'F22': 'TextEdit', 'Mobile_EO': 'TextEdit', 'Mobile_Lin': 'TextEdit', });
lyr_ALL_ULB_305_Updated_1.set('fieldLabels', {'S_No': 'hidden field', 'Ulb_Name': 'inline label - always visible', 'Ulb_Catego': 'inline label - always visible', 'Division': 'inline label - always visible', 'District': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'ULB_Code': 'inline label - always visible', 'Name_of_EO': 'inline label - always visible', 'Mobile_No_': 'hidden field', 'Land_Line': 'inline label - always visible', 'Link_offic': 'hidden field', 'Designatio': 'inline label - always visible', 'Mobile_Num': 'hidden field', 'F22': 'hidden field', 'Mobile_EO': 'inline label - always visible', 'Mobile_Lin': 'inline label - always visible', });
lyr_ALL_ULB_305_Updated_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});