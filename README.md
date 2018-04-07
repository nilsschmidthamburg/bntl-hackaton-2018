<h1>Hackathon 2018</h1>
Dies ist die Repository des Baunataler Hackathons 2018


/* ALL */
/*
area[name="Baunatal"];
(way(area)[highway][highway!~"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway)$"];);
out geom;
*/

/* Spielstraße */
area[name="Baunatal"];
(way(area)[highway=living_street];);
out geom;

/* = 30 */
area[name="Baunatal"];
(way(area)[highway][maxspeed=30][highway!~"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway|living_area)$"]
 (if: (is_number(t[maxspeed]) && t[maxspeed] <= 30)););
out geom;

/* > 30 && <= 50 */
area[name="Baunatal"];
(way(area)[highway][highway!~"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway|living_area)$"]
 (if: (is_number(t[maxspeed]) && t[maxspeed] > 30 && t[maxspeed] < 51)););
out geom;

/* > 50 */
area[name="Baunatal"];
(way(area)[highway][highway!~"^(turning_circle|traffic_signals|footway|pedestrian|path|track|service|steps|bridleway|living_area)$"]
 (if: (is_number(t[maxspeed]) && t[maxspeed] > 50) || !is_tag(maxspeed)););
out geom;

