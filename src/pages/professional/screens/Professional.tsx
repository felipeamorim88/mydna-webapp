import { useProfessionalContext } from '../contexts/index';

export default () => {
	const {
		route,
		setRoute,
		route2,
		setRoute2,
		isARC, setIsARC,
		isREA, setIsREA,
		isREH, setIsREH,
		nearby, setNearby,
		getDistance,
		getBearing,
		MapboxGL,
		mapCoordinate,
		zoom,
		setZoom,
		setMapCoordinate
	} = useMapNavigationContext();

	const service = new MapService()

	useEffect(() => {

		const getRoute = async () => {
			setVFR2(routeVFR2.filter((rN: { type: string; }) => rN.type === 'VFR'));
		}
		getRoute()
	}, [])


	return (
		<>
					{isARC &&
						arcs.map((arc: any) => {
							return (
								<MapboxGL.RasterSource
									id={arc.id}
									key={arc.id}
									tileUrlTemplates={[arc.path + '{z}/{x}/{y}']}
									minZoomLevel={3}
									maxZoomLevel={11}
								>
									<MapboxGL.RasterLayer
										id={arc.id}

										sourceID={arc.id}
										style={{ rasterOpacity: arcOpacity, visibility: isARC ? 'visible' : 'none' }}
									>
									</MapboxGL.RasterLayer>
								</MapboxGL.RasterSource>)
						})
					}
		</>
	);
}