import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Circle, DrawingManager, } from '@react-google-maps/api';
import { Box, TextField, Button, Typography, Switch, FormControlLabel } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const defaultCenter = { lat: 4.8472, lng: 6.9746 }; 
 
const CitySelectorMap = () => {
    const [shapes, setShapes] = useState<google.maps.OverlayView[] | any>([]);
    const mapRef = useRef<google.maps.Map | null>(null);
  
  const [center, setCenter] = useState(defaultCenter);
  const [radius, setRadius] = useState(5000); // meters

//   const libraries: (
//     | 'drawing'
//     | 'places'
//     | 'geometry'
//     | 'visualization'
//   )[] = ['drawing'];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyATDY5CEfwIiOTsvyg-mjJyMBiyHMalq7Y',
    libraries: ['drawing'],
    id: 'google-map-script',
  });

  const onLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };
  
  const handleOverlayComplete = (e: google.maps.drawing.OverlayCompleteEvent) => {
    console.log('Overlay Completed:', e.type);
    if (e.overlay) {
      setShapes((prev: google.maps.OverlayView[]) => [...prev, e.overlay]);
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      google.maps.event.trigger(mapRef.current, 'resize');
    }
  }, [isLoaded]);

  return isLoaded ? (
    <Box>
            <Typography variant="subtitle1">Adjust Radius (meters)</Typography>
            <TextField
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              sx={{ mb: 2 }}
              fullWidth
            />
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
                onLoad={onLoad}
              >
                <DrawingManager
                    onLoad={(drawingManager) => console.log('DrawingManager Loaded', drawingManager)}
                    onOverlayComplete={handleOverlayComplete}
                    options={{
                    drawingControl: true,
                    drawingMode: google.maps.drawing.OverlayType.MARKER,
                    drawingControlOptions: {
                        position: google.maps.ControlPosition.TOP_RIGHT,
                        drawingModes: [
                          google.maps.drawing.OverlayType.CIRCLE,
                          google.maps.drawing.OverlayType.POLYGON,
                          google.maps.drawing.OverlayType.RECTANGLE,
                          google.maps.drawing.OverlayType.POLYLINE,
                        ],
                    },
                    circleOptions: {
                        fillColor: '#1976d2',
                        fillOpacity: 0.5,
                        strokeWeight: 2,
                        clickable: true,
                        editable: true,
                        zIndex: 9999,
                    },
                    polygonOptions: {
                        fillColor: '#388e3c',
                        fillOpacity: 0.5,
                        strokeWeight: 2,
                        clickable: true,
                        editable: true,
                        zIndex: 999,
                    },
                    rectangleOptions: {
                        fillColor: '#f57c00',
                        fillOpacity: 0.5,
                        strokeWeight: 2,
                        clickable: true,
                        editable: true,
                        zIndex: 999,
                    },
                    markerOptions: {
                        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                    },
                    }}
                />
              </GoogleMap>
      <Typography mt={3}>
        <strong>Selected Center:</strong> Lat: {center.lat.toFixed(4)}, Lng: {center.lng.toFixed(4)} <br />
        <strong>Radius:</strong> {radius} meters
      </Typography>
    </Box>
  ):(<Typography>Loading Map...</Typography>);
};

export default CitySelectorMap;
