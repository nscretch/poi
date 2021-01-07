// wrapper function to convert to Minecraft "x,z" coordinate system (-z is North)
var xz = function(x, z) {
  if (L.Util.isArray(x)) {
    return L.latLng(x[1] * -1, x[0]);
  }
  return L.latLng(z * -1, x);
};

var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -2
});

var bounds = [[1024, 1024], [-1024, -1024]];
var image = L.imageOverlay('images/origin_map.png', bounds).addTo(map);

var poi1 = xz(51, 6);
var poi2 = xz(-719, 171);
var poi3 = xz(65, -400);
var poi4 = xz(516, 254);
var poi5 = xz(-54, -48);
var poi6 = xz(47, 115);
var poi7 = xz(540, 55);
var poi8 = xz(0, 6);
var poi9 = xz(-1011, 349);
var poi10 = xz(-1020, 352);
var poi11 = xz(88, 61);
var poi12 = xz(-604, 309);

L.marker(poi1).addTo(map).bindPopup('Base');
L.marker(poi2).addTo(map).bindPopup('Base');
L.marker(poi3).addTo(map).bindPopup('Rest Area');
L.marker(poi4).addTo(map).bindPopup('Rest Area');
L.marker(poi5).addTo(map).bindPopup('Rest Area');
L.marker(poi6).addTo(map).bindPopup('Village');
L.marker(poi7).addTo(map).bindPopup('Village');
L.marker(poi8).addTo(map).bindPopup('Portal');
L.marker(poi9).addTo(map).bindPopup('Ruined Portal');
L.marker(poi10).addTo(map).bindPopup('Spawner');
L.marker(poi11).addTo(map).bindPopup('Portal');
L.marker(poi12).addTo(map).bindPopup('Ruined Portal');

map.fitBounds(bounds);
