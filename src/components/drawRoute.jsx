export const drawRoute = (map, coordinates) => {
	map.flyTo({
		center: coordinates[0],
		zoom: 12
	});

	map.addLayer({
		id: "route",
		type: "line",
		source: {
			type: "geojson",
			data: {
				type: "Feature",
				properties: {},
				geometry: {
					type: "LineString",
					coordinates
				}
			}
		},
		layout: {
			"line-join": "round",
			"line-cap": "round"
		},
		paint: {
			"line-color": "#0000FF",
			"line-width": 6
		}
	});
};