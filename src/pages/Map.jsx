import React, {useEffect, useRef} from "react"
import "../App.css"
import mapboxgl from "mapbox-gl"
import ToProfileForm from "../components/ToProfileForm";
import TaxiOrderForm from "../components/TaxiOrderForm";
import {useSelector} from "react-redux";
import {drawRoute} from "../components/drawRoute";
//https://medium.com/@kyrcha/mapbox-with-react-hooks-365cc569ea0a

const Map = () => {
	const savedCardSuccess = useSelector(({saveCard}) => saveCard.success)
	const coordinates = useSelector(({route}) => route.coordinates)
	const node = useRef(null);

	useEffect(() => {
		mapboxgl.accessToken = "pk.eyJ1IjoiZ2thc2giLCJhIjoiY2toenpyeThhMGpzczJ5b2g4MDB2bnZ6ZCJ9.r8rKu9uGFk_j47ZadWEd4w";
		const map = new mapboxgl.Map({
			container: node.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [30.31, 59.94],
			zoom: 12,
		});
		
		map.on("load", () => {
			if (coordinates) drawRoute(map, coordinates);
		});

		return () => {
			map.remove();
		};
	}, [node.current, coordinates]);

	return (
		<div ref={node} className="map-wrapper">
			<div>
				{ savedCardSuccess ? <TaxiOrderForm/> : <ToProfileForm/>}
			</div>
		</div>

	)
}

export default Map