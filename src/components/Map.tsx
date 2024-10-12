import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Post } from '@/types/post';

interface MapProps {
  posts: Post[];
  selectedPost: Post | null;
  onMarkerClick: (post: Post) => void;
}

const Map: React.FC<MapProps> = ({ posts, selectedPost, onMarkerClick }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const selectedMarkerRef = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    // Initialize the map
    mapInstance.current = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiZG91Z2xhc2t5cml1cyIsImEiOiJjbTE3NTZ5aXAwcTkwMnVva280amlpa3E1In0.XjYeWPJGI9TMPudTSQXRLg',
      container: mapContainerRef.current as HTMLElement,
      style: 'mapbox://styles/mapbox/streets-v12', // Default style
      center: [-54.205, -23.06], // Default center (Naviraí)
      zoom: 13,
    });

    mapInstance.current.on('load', () => {
      // Remove unnecessary layers
      const layersToHide = ['poi-label', 'transit-label'];
      layersToHide.forEach((layer) => {
        if (mapInstance.current?.getLayer(layer)) {
          mapInstance.current?.setLayoutProperty(layer, 'visibility', 'none');
        }
      });
    });
    return () => {
      // Clean up the map instance on component unmount
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    // Remove previous markers (if any)
    // document
    //   .querySelectorAll('.custom-marker')
    //   .forEach((marker) => marker.remove());
    document
      .querySelectorAll('.mapboxgl-marker-anchor-center')
      .forEach((marker) => marker.remove());

    // Add markers for each post
    posts.forEach((post) => {
      let marker;
      if (selectedPost && selectedPost.id === post.id) {
        // If the marker is selected, show a pin icon
        if (selectedMarkerRef.current) {
          selectedMarkerRef.current.remove();
        }

        marker = new mapboxgl.Marker({ color: 'red' })
          .setLngLat(post.coordinates)
          .addTo(map);

        selectedMarkerRef.current = marker;
      } else {
        const markerElement = document.createElement('div');
        markerElement.style.width = '20px';
        markerElement.style.height = '20px';
        markerElement.style.borderRadius = '50%';
        markerElement.style.border = '2px solid white';
        markerElement.style.backgroundColor = post.color; // Color based on the post
        markerElement.style.cursor = 'pointer';
        markerElement.className = 'custom-marker';
        markerElement.addEventListener('click', () => onMarkerClick(post));

        // Add the marker to the map
        new mapboxgl.Marker(markerElement)
          .setLngLat(post.coordinates)
          .addTo(map);
      }
    });
  }, [posts, selectedPost, onMarkerClick]);

  useEffect(() => {
    const map = mapInstance.current;
    if (map && selectedPost) {
      // Center the map on the selected post
      map.flyTo({
        center: selectedPost.coordinates,
        zoom: 16,
        essential: true, // This ensures the animation happens smoothly
      });
    }
  }, [selectedPost]);

  return (
    <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
  );
};

export default Map;
