﻿import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';


@inject(EventAggregator)
export class Map {

    constructor(eventAggregator) {
        this.marker = {};
        // todo: replace this data with database data
        this.pointers = [
            new google.maps.LatLng(50.6043691, 26.2232106),
            new google.maps.LatLng(50.5543691, 26.2332106),
            new google.maps.LatLng(50.6043691, 26.2132106),
        ];
    }

    attached() {
        // google map options.
        let opts = {
            mapElementSelector: 'mapfeed',
            pinCenter: true,
            type: 'ROADMAP',
            minZoom: 6,
            maxZoom: 20
        };
        
        this.drawMap(opts);

    }
    /**
     * Get data from database and use it for create markers.
     * @param {current map} map 
     * @param {current data from database} pointers 
     * @returns {} 
     */
    initPoints(map, pointers) {
        for (var i = 0; i < pointers.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                position: pointers[i],
                title: 'Description'
            });
        }
    }
    /**
     * Initializate map, points
     * @param {google map options} options 
     * @returns {} 
     */
    drawMap(options) {
                
        window.infoWindow = new google.maps.InfoWindow();

        let self = this;
        let center = new google.maps.LatLng(50.6143691, 26.2632106);

        window.map = new google.maps.Map(document.getElementById(options.mapElementSelector), {
            center: center,
            zoom: 13,
            draggableCursor: 'crosshair',
            mapTypeId: google.maps.MapTypeId[options.type],
            minZoom: options.minZoom,
            maxZoom: options.maxZoom
        });

        this.initPoints(window.map, self.pointers);
        
        this.marker = new google.maps.Marker({
            map: window.map,

            position: center,
            title: 'Description'
        });


        let that = this;
        window.map.addListener('click', function(e) {
            that.moveMarker(e.latLng);
        });

        this.marker.info = new google.maps.InfoWindow({
            content: '<b>Speed:</b> ' + 12 + ' knots'
        });

        google.maps.event.addListener(this.marker, 'click', function() {
            that.marker.info.open(window.map, that.marker);

            position: center
        });

        window.map.addListener('click', function(e) {
            self.moveMarker(e.latLng);

        });
    }
    /**
     * Change the position of current marker.
     * @param {new position} latLng 
     * @returns {} 
     */
    moveMarker(latLng) {
        var lat = latLng.lat();
        var lng = latLng.lng();

        this.marker.setPosition(latLng);
    }


    getGoogleMapsGeoCoords(geo) {
        return new google.maps.LatLng(50.6143691, 26.2632106);
    }
}
