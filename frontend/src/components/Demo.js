import { MapContainer, TileLayer, useMap, Popup, Marker, CircleMarker, Tooltip } from 'react-leaflet'
import React, { useEffect } from 'react';

import "../styles.scss";
import data from "../data";

export default function Demo() {

    return (
        <div className="demoContainer">
            <h2> Demo</h2>
            <a href="/">Back to Home</a>
            <p> This is a demo of our model. </p>
            <div className="leafMap">
                <MapContainer
                className="markercluster-map"
                center={[45.0, -95.0]}
                zoom={4}
                maxZoom={18}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />

                        {/* <Marker position={[49.8397, 24.0297]} /> */}
                    {/* <MarkerClusterGroup> */}
                        {/* <Marker position={[52.2297, 21.0122]} /> */}
                        
                        {/* <Marker position={[36.9572, -118.387]} />
                        <Marker position={[38.9572, -115.387]} /> */}
                        
                        {
                            data.fires.map((fire, i) => {
                                return (
                                    <CircleMarker
                                      key={i}
                                      center={[fire["coordinates"][0], fire["coordinates"][1]]}
                                      radius={1 * (fire["AQI"]-150)}
                                      fillOpacity={0.5}
                                      stroke={false}
                                    >
                                      <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                                        <span>{fire["name"] + ": " + "AQI" + " " + fire["AQI"]}</span>
                                      </Tooltip>
                                    </CircleMarker>
                                  );
                            })
                        }


                        {/* <Marker position={[52.2297, 21.0122]} /> */}
                        {/* <Marker position={[51.5074, -0.0901]} /> */}
                    {/* </MarkerClusterGroup> */}
                </MapContainer>
            </div>
        </div>
    );
  }
  