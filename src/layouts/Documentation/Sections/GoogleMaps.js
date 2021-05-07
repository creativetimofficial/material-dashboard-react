import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

// @material-ui/core components
// @material-ui/icons
//core components

const googlemapexample = `import React from "react";

const Maps = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          stylers: [{ saturation: 43 }, { lightness: -11 }, { hue: "#0088ff" }],
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            { hue: "#ff0000" },
            { saturation: -100 },
            { lightness: 99 },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#808080" }, { lightness: 54 }],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [{ color: "#ece2d9" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [{ color: "#ccdca1" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#767676" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        { featureType: "poi", stylers: [{ visibility: "off" }] },
        {
          featureType: "landscape.natural",
          elementType: "geometry.fill",
          stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
        },
        { featureType: "poi.park", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.sports_complex",
          stylers: [{ visibility: "on" }],
        },
        { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
        {
          featureType: "poi.business",
          stylers: [{ visibility: "simplified" }],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Material Dashboard React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Material Dashboard React</h2>' +
      "<p>A premium Admin for React, Material-UI, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div ref={mapRef}></div>
    </>
  );
};

export default Maps;
`;

class GoogleMaps extends React.Component {
  render() {
    return (
      <div>
        <h1>Google Maps</h1>
        <ol>
          <li>
            Go to{" "}
            <a
              href="https://developers.google.com/maps/documentation/javascript/get-api-key"
              rel="nofollow"
            >
              https://developers.google.com/maps/documentation/javascript/get-api-key
            </a>
          </li>
          <li>
            Scroll to the “Get an API key” Title and press “Get a Key” Button
          </li>
          <li>
            Choose a name for your project then press on Create and Enable API
          </li>
          <li>
            Get the Key and place it in your project where is this script (
            <code className="highlighter-rouge language-plaintext">
              public/index.html
            </code>
            ):
            <code class=" highlighter-rouge language-plaintext">
              &lt;script type="text/javascript"
              src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"&gt;&lt;script&gt;
            </code>
          </li>
        </ol>
        <SyntaxHighlighter language="jsx" style={prism}>
          {googlemapexample}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default GoogleMaps;
