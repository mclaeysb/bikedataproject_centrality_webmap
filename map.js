
// Specifying access tokens
mapboxgl.accessToken = 'pk.eyJ1IjoibWNsYWV5c2IiLCJhIjoiY2loZ3dtanZlMDRyaHRyajdhOGZwZ3VqZSJ9.-VlodpvODHjL3GEVNyxDgQ';

// Create map with baselayer
var map = new mapboxgl.Map({
  container: 'map',

  // Standard Mapbox base layer
  style: 'mapbox://styles/mclaeysb/ckm9i3n7d2h9n17qimyvumqxa',

  center: [4.35043, 50.84787],
  zoom: 14,
  minZoom: 13
});

// Stuff to do when the map is loaded
map.on('load', function () {

  // enumerate ids of the layers
  var toggleableLayerIds = ['count', 'betweenness_max_min', 'betweenness_vs_count'];
  var toggleableLayerNames = ['Actual Trips', 'Predicted Trips', 'Comparison'];
  var filter = document.getElementById('filter');

  // set up the corresponding toggle button for each layer
  for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];
    var name = toggleableLayerNames[i];
     
    var link = document.createElement('a');
    link.href = '#';
    link.className = '';
    link.id = id;
    link.textContent = name;
     
    link.onclick = function (e) {
      var clickedLayerId = this.id;
      e.preventDefault();
      e.stopPropagation();
       
      // var visibility = map.getLayoutProperty(clickedLayerId, 'visibility');

      for (var j = 0; j < toggleableLayerIds.length; j++) {
        if (toggleableLayerIds[j] != clickedLayerId){
          map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'none');
          filter.children[j].className = ''
        } else {
          map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'visible');
          this.className = 'active';
        }
      }
    };
     
    filter.appendChild(link);
  }

  // Add zoom controls
  map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'top-left');  

  // Click comparison layer
  document.getElementById('betweenness_vs_count').click()
})

