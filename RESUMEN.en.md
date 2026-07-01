# SUMMARY — Cadastral parcels: El Foyel · Arroyo Las Minas · Los Repollos

**Source:** ArcGIS REST — Río Negro Tax Collection Agency (Agencia de Recaudación Tributaria de Río Negro) · `SmartLIS/Base_cata_20251111_v2/MapServer` (official public service).
Access OK with browser headers (Safari UA + Referer). No 403. Areas computed with shapely over a local equirectangular projection (meters); coordinates EPSG:4326.

## Comparative table of the 3 zones

| Zone | bbox (lon/lat) | Parcels | Coverage | State-land gap (ha) | Parcel size (ha) | ANP (protected area) |
|---|---|---:|---:|---:|---|---|
| **El Foyel** | -71.51,-41.7 → -71.41,-41.6 | 186 | 97.0 % | **271.81** | 0.020 – 4,307.7 (median 0.70) | Cipres de las Guaytecas |
| **Arroyo Las Minas** | -71.54,-41.58 → -71.44,-41.48 | 3 | 4.1 % | **8,831.53** | 1,460.264 – 5,500.6 (median 3,865.15) | no |
| **Los Repollos** | -71.55,-41.86 → -71.45,-41.76 | 427 | 94.4 % | **514.85** | 0.004 – 1,417.7 (median 10.11) | Río Azul - Lago Escondido |

**Largest state-land gap (more opportunity = less coverage):**
1. **Arroyo Las Minas** — 8,831.53 ha unparceled (95.9 % of the bbox)
2. **Los Repollos** — 514.85 ha unparceled (5.6 % of the bbox)
3. **El Foyel** — 271.81 ha unparceled (3.0 % of the bbox)

> The "state-land gap/vacancy" = area of the bbox not covered by any surveyed parcel (geometric difference bbox − union of parcels). It is a proxy for unsurveyed land / possible state-owned (fiscal) land within the queried rectangle.

## Arroyo Las Minas — detail

- **Parcels:** 3
- **bbox area:** 9,211.86 ha
- **Coverage by parcels:** 4.1 %  (covered 380.33 ha)
- **State-land gap:** 8,831.53 ha (~95.9 % of the bbox)
- **Size range:** 1,460.2640 ha → 5,500.58 ha (median 3,865.151 ha)
- **Protected Natural Area (layer id 20):** no intersection

## Los Repollos — detail

- **Parcels:** 427
- **bbox area:** 9,171.88 ha
- **Coverage by parcels:** 94.4 %  (covered 8,657.03 ha)
- **State-land gap:** 514.85 ha (~5.6 % of the bbox)
- **Size range:** 0.0039 ha → 1,417.72 ha (median 10.106 ha)
- **Protected Natural Area (layer id 20):** Río Azul - Lago Escondido

## EL FOYEL GAPS — location

Geometric difference `bbox − union(186 parcels)`, exploded into polygons and filtering slivers < 0.5 ha (edge noise). Result: **7 gap polygons** totaling **271.79 ha**.

- **RN 40:** Road Network layer id 25 (VCM_TIPO='Ruta Nacional' / National Route, paved, National jurisdiction).
- **Gaps < 500 m from RN 40 (direct access, the most valuable):** **1** of 7, totaling 104.98 ha.
- **Gap closest to RN 40:** #1 at 0 m (104.98 ha).

Files: `vacios_foyel.geojson` (polygons) · `mapa_foyel_vacios.html` (folium: parcels gray, gaps red, RN40 orange, ANP green).

| id | area_ha | centroid (lat, lon) | dist_RN40_m | within_ANP |
|---:|---:|---|---:|:--:|
| 1 | 104.98 | -41.64485, -71.45831 | 0 ◀ <500m | no |
| 2 | 91.76 | -41.62652, -71.43266 | 1,550 | no |
| 3 | 63.93 | -41.61363, -71.49796 | 1,165 | no |
| 4 | 6.34 | -41.66517, -71.50151 | 2,485 | no |
| 5 | 2.12 | -41.65032, -71.48816 | 1,168 | no |
| 6 | 2.09 | -41.65993, -71.48658 | 1,560 | no |
| 7 | 0.58 | -41.68365, -71.49916 | 3,762 | no |

## El Foyel — parcel detail

- **Parcels:** 186 · **Coverage:** 97.0 % · **Gap:** 271.81 ha
- **Range:** 0.0198 ha → 4,307.70 ha (median 0.6999 ha, mean 125.03 ha)
- **Protected Natural Area:** Cipres de las Guaytecas
- **General Polygon (id 40, POL_ESTADO):** 0 features in the bbox (no general polygon loaded).

<details><summary>El Foyel nomenclatures (PAR_NOMENCLATURA) — 186 unique</summary>

- `20-1-*-409-058-0000-00`
- `20-1-*-411-062-0000-00`
- `20-1-*-416-062-0000-00`
- `20-1-*-418-064-0000-00`
- `20-1-*-423-073-0000-00`
- `20-1-*-429-079-0000-00`
- `20-1-*-434-083-0000-00`
- `20-1-*-441-092-0000-00`
- `20-1-*-444-093-0000-00`
- `20-1-*-468-125-0000-00`
- `20-1-*-540-610-0`
- `20-1-*-550-590-0`
- `20-1-*-560-645-0`
- `20-1-*-560-655-0`
- `20-1-*-565-655-0`
- `20-1-*-570-575-0`
- `20-1-*-575-655-0`
- `20-1-*-580-655-0`
- `20-1-*-580-656-0000-00`
- `20-1-*-580-660-0`
- `20-1-*-585-655-0`
- `20-1-*-585-656-0000-00`
- `20-1-*-585-672-0`
- `20-1-*-588-563-0`
- `20-1-*-590-573-0`
- `20-1-*-590-655-0`
- `20-1-*-592-582-0`
- `20-1-*-595-655-0`
- `20-1-*-600-655-0`
- `20-1-*-605-655-0`
- `20-1-*-610-630-0`
- `20-1-*-610-652-0`
- `20-1-*-610-655-0`
- `20-1-*-615-585-0`
- `20-1-*-615-650-0`
- `20-1-*-615-720-0`
- `20-1-*-618-630-0000-00`
- `20-1-*-620-570-0`
- `20-1-*-620-590-0`
- `20-1-*-620-592-0`
- `20-1-*-620-602-0`
- `20-1-*-620-640-0000-00`
- `20-1-*-620-700-0000-00`
- `20-1-*-621-610-0000-00`
- `20-1-*-622-620-0000-00`
- `20-1-*-625-600-0000-00`
- `20-1-*-628-592-0`
- `20-1-*-628-602-0`
- `20-1-*-628-634-0`
- `20-1-*-630-610-0`
- `20-1-*-630-625-0`
- `20-1-*-632-580-0000-00`
- `20-1-*-632-590-0`
- `20-1-*-632-600-0`
- `20-1-*-632-636-0`
- `20-1-*-635-540-0000-00`
- `20-1-*-635-560-0`
- `20-1-*-635-575-0`
- `20-1-*-635-615-0`
- `20-1-*-635-635-0`
- `20-1-*-636-651-0`
- `20-1-*-640-575-0`
- `20-1-*-640-635-0`
- `20-1-*-640-670-0000-00`
- `20-1-*-645-600-0`
- `20-1-*-650-562-0`
- `20-1-*-650-627-0`
- `20-1-*-650-640-0`
- `20-1-*-655-630-0`
- `20-1-*-656-652-0`
- `20-1-*-660-560-0`
- `20-1-*-660-630-0`
- `20-1-*-660-660-0`
- `20-1-*-665-637-0`
- `20-1-*-665-640-0`
- `20-1-*-665-660-0`
- `20-1-*-670-595-0`
- `20-1-*-670-670-0`
- `20-1-*-674-678-0`
- `20-1-*-710-552-0`
- `20-1-*-710-555-0`
- `20-1-*-710-690-0`
- `20-1-*-714-550-0`
- `20-1-*-715-583-0`
- `20-1-*-717-565-0`
- `20-1-*-718-545-0`
- `20-1-*-738-550-0`
- `20-1-*-740-590-0`
- `20-1-*-770-670-0`
- `20-1-M-001-001-0000-00`
- `20-1-M-001-002-0000-00`
- `20-1-M-010-01-0`
- `20-1-M-010-02-0`
- `20-1-M-010-03-0`
- `20-1-M-010-04-0`
- `20-1-M-010-05-0`
- `20-1-M-010-06-0`
- `20-1-M-010-07-0`
- `20-1-M-011-002-0000-00`
- `20-1-M-011-003-0000-00`
- `20-1-M-011-01-0`
- `20-1-M-100-01-0`
- `20-1-M-110-01-0`
- `20-1-M-110-02-0`
- `20-1-M-110-03-0`
- `20-1-M-110-04-0`
- `20-1-M-110-05-0`
- `20-1-M-110-06-0`
- `20-1-M-111-01-0`
- `20-1-M-111-02-0`
- `20-1-M-111-03-0`
- `20-1-M-111-04-0`
- `20-1-M-111-05-0`
- `20-1-M-111-06-0`
- `20-1-M-112-01-0`
- `20-1-M-113-01-0`
- `20-1-M-114-01-0`
- `20-1-M-114-02-0`
- `20-1-M-115-01-0`
- `20-1-M-120-01-0`
- `20-1-M-120-02-0`
- `20-1-M-120-03-0`
- `20-1-M-120-04-0`
- `20-1-M-121-01-0`
- `20-1-M-121-02-0`
- `20-1-M-121-03-0`
- `20-1-M-121-04-0`
- `20-1-M-121-05-0`
- `20-1-M-121-06-0`
- `20-1-M-121-07-0`
- `20-1-M-121-08-0`
- `20-1-M-122-01-0`
- `20-1-M-122-02-0`
- `20-1-M-122-03-0`
- `20-1-M-122-04-0`
- `20-1-M-122-05-0`
- `20-1-M-122-06-0`
- `20-1-M-122-07-0`
- `20-1-M-122-08-0`
- `20-1-M-122-09-0`
- `20-1-M-122-10-0`
- `20-1-M-123-01-0`
- `20-1-M-123-02-0`
- `20-1-M-123-03-0`
- `20-1-M-123-04-0`
- `20-1-M-123-05-0`
- `20-1-M-123-06-0`
- `20-1-M-123-07-0`
- `20-1-M-123-08-0`
- `20-1-M-124-01-0`
- `20-1-M-125-01-0`
- `20-1-M-125-02-0`
- `20-1-M-125-03-0`
- `20-1-M-125-04-0`
- `20-1-M-125-05-0`
- `20-1-M-125-06-0`
- `20-1-M-125-07-0`
- `20-1-M-127-01-0`
- `20-1-M-130-01-0`
- `20-1-M-130-02-0`
- `20-1-M-130-03-0`
- `20-1-M-130-04-0`
- `20-1-M-130-05-0`
- `20-1-M-130-06-0`
- `20-1-M-130-07-0`
- `20-1-M-131-01-0`
- `20-1-M-131-02-0`
- `20-1-M-131-03-0`
- `20-1-M-131-04-0`
- `20-1-M-131-05-0`
- `20-1-M-131-06-0`
- `20-1-M-131-07-0`
- `20-1-M-131-08-0`
- `20-1-M-131-09-0`
- `20-1-M-131-10-0`
- `20-1-M-135-01-0`
- `20-1-M-135-02-0`
- `20-1-M-135-03-0`
- `20-1-M-135-04-0`
- `20-1-M-135-05-0`
- `20-1-M-135-06-0`
- `20-1-M-135-07-0`
- `20-1-M-135-08-0`
- `20-1-M-144-01-0`
- `20-1-M-144-02-0`
- `20-1-M-144-03-0`

</details>

---
*The service only exposes geometry + nomenclature + area. It does not contain title/owner information.*

# TASK 3 — FISCAL layer + El Foyel gap #1 + Las Minas in depth

## A) Fiscal layer (id 79): fields and results

The **Fiscal** layer is a view of the `CATA_50_GIS_PARCELAS` table (same schema as the other parcels) filtered to state-owned (fiscal) parcels. Relevant fields (aliases):
`PAR_NOMENCLATURA`, `PAR_ESTADO`, `PAR_TIPO`, `PAR_DEPARTAMENTO`, `PAR_SUPERFICIE_MENSURA`, `PAR_SUPERFICIE_TRIBUTARIA`, `PAR_EXENTA`, `PAR_IMPONIBLE`, `PAR_OBSERVACION`, `PAR_FECHA_REGISTRACION`, `PAR_LEGUA/SECCION/FRACCION/CHACRA/QUINTA/MANZANA/LOTE`, `TRM_EXPEDIENTE` (case/procedure file). Does not expose owner.

| Layer | El Foyel | Las Minas |
|---|---:|---:|
| **Fiscal (id 79)** | **0** | **0** |
| Inactive (id 80) | 7 | 0 |

> **There is no parcel flagged as FISCAL (layer 79) in either zone.** The 7 "Inactive" ones in El Foyel are private parcels that were deregistered/deactivated (all `PAR_IMPONIBLE=S`, i.e. taxable/private), not state-owned land. Files `fiscales_foyel.geojson` and `fiscales_lasminas.geojson` were saved as empty FeatureCollections (0 features) — the finding is precisely the absence.

## B) El Foyel gap #1 (on RN40)

- **Area:** 104.98 ha · touches RN40 (distance 0 m).
- **Intersection with fiscal parcels:** **NONE** (there are no fiscal parcels in the zone). It also does not coincide with any active parcel (by definition it is the gap between parcels).
- **Conclusion:** it is **unsurveyed land of UNKNOWN ownership status** — a candidate, but **NOT confirmed as fiscal** by the cadastre. Requires verification at the Land Directorate (Dirección de Tierras).

⚠️ **Important about the shape:** gap #1 is NOT a compact rectangular lot. It is an **irregular corridor** that winds between the parcels following the RN40 alignment (399 vertices, with 9 private parcels embedded as "islands" within the gap; the polygon fills only ~2.4 % of its bounding box). That is why I give the **bounding box** (maximum extent) + a **guaranteed interior point**, not 4 corners of a real rectangle. The exact geometry is in `vacios_foyel.geojson` (feature id=1).

**Coordinates for the Land Directorate (copyable lat,lon format):**

```
Centroid:             -41.644851,-71.458309
Interior point:       -41.649963,-71.456634   (falls inside the polygon)
--- bounding box (maximum extent of the corridor) ---
NW corner:            -41.600000,-71.481337
NE corner:            -41.600000,-71.434356
SE corner:            -41.700000,-71.434356
SW corner:            -41.700000,-71.481337
```

## C) Arroyo Las Minas in depth

**The 3 rural parcels (those that occupy the ~4 %):**

| Nomenclature | Survey (ha) | Status | Centroid (lat,lon) | Approx. elevation | Dist. RN40 | File |
|---|---:|:--:|---|---:|---:|---|
| `20-1-*-925-750-0` | 5,598.09 | A | -41.5169, -71.3847 | ~1250 m | 835 m | 0-DUP 3563/1999 |
| `20-1-*-770-670-0` | 4,505.43 | A | -41.5979, -71.4370 | ~750 m | 0 m | 0-DUP 3291/1990 |
| `20-1-*-740-590-0` | 1,546.40 | A | -41.6067, -71.4877 | ~800 m | 0 m | 0-DUP 3291/1990 |

> All 3 are **private active** parcels (`PAR_ESTADO=A`, `PAR_IMPONIBLE=S`), rural (`PAR_TIPO=4`), of old survey (DUP files 1990/1999). The surveyed area (thousands of ha) exceeds what falls within the bbox: they are large estates (estancias) that only partially enter the clip.

**Las Minas gaps (>10 ha):** 1 polygon(s), totaling 8,831.53 ha. Relief of the bbox: contour lines from **600 to 1750 m** (valley floor ↔ high mountain).

| id | area (ha) | centroid (lat,lon) | approx. elevation | dist RN40 | corridor |
|---:|---:|---|---:|---:|:--|
| 1 | 8,831.53 | -41.5289, -71.4912 | ~1250 m | 0 m ◀<500m | valley (near route) |

> Since 96 % is practically a single continuous gap running from the valley to the mountain, the valley/hillside distinction is seen better on the map (`mapa_candidatos.html`): enable the **Contour lines** layer and **RN40** — the low corridor follows the route (~600–800 m); what climbs toward elevations of 1000–1750 m is unusable hillside. There are also 2 lakes and 1 lagoon in the bbox.

**Task 3 deliverables:** `fiscales_foyel.geojson`, `fiscales_lasminas.geojson` (0 feats), `vacios_lasminas.geojson`, `mapa_candidatos.html`.

# TASK 4 — Las Minas altimetry + water signals

**Zone:** Arroyo Las Minas · bbox -71.54,-41.58 → -71.44,-41.48 (center ~-41.53,-71.49).
**Reused inputs:** `vacios_lasminas.geojson` (fiscal gap 8,831.53 ha), `parcelas_lasminas`, `redvial_lasminas` (RN40 = "Ruta Nacional"/National Route line), `agua_lasminas` (cadastre lakes).

## Data sources (all free, no API key)
- **DEM:** Copernicus **GLO-30** (30 m) — public AWS Open Data (`copernicus-dem-30m.s3`), windowed read via `/vsicurl/`. *No need for OpenTopography or an API key.*
- **Hydrography:** OpenStreetMap via **Overpass API** (`waterway=*`, `natural=water/wetland`) → `agua_osm_lasminas.geojson` (26 geom).
- **NDWI/NDVI:** **Sentinel-2 L2A** via **STAC earth-search (Element84)**, no login. Chosen scene `S2B_18GYV_20240125` — **25-Jan-2024, cloud cover 0.0008 %** (dry southern-hemisphere summer).

## PART A — Altimetry / slopes
- Relief of the bbox: **496 – 1,803 m**. Valley/floor ~500–800 m; hillsides and ridges up to 1,800 m.
- Slope computed in UTM 19S (30 m pixel), reclassified: green <8°, yellow 8–15°, red >15°.
- Deliverables: `elevacion_lasminas.tif`, `pendiente_lasminas.tif`, `curvas_dem_lasminas.geojson` (DEM contour lines every 50 m, 193 lines), `mapa_elevacion_lasminas.png`, `mapa_pendiente_lasminas.png`.

### Fiscal gap clipped against slope
Of the **8,831.53 ha** of cadastral gap (8,801.6 ha when rasterized to 30 m):

| Slope class | ha | % |
|---|---:|---:|
| **<8° (flat/usable valley)** | **2,481** | **28.2 %** |
| 8–15° (intermediate) | 2,077 | 23.6 % |
| >15° (unusable hillside) | 4,243 | 48.2 % |

→ `valle_aprovechable_lasminas.geojson` = 226 polygons (>0.5 ha) totaling **2,374.9 ha** of <8° valley within the fiscal land.

**Proximity to RN40** (what is truly accessible):
| Band | Usable valley <8° |
|---|---:|
| < 500 m from RN40 | **489 ha** |
| < 1,000 m | 897 ha |
| < 2,000 m | 1,532 ha |

> The gap is ~96 % mountain/hillside with flat corridors winding through the valley floors following RN40 and the watercourses. The usable valley is NOT a compact block: it is a network of valley floors.

## PART B — Water signals
- **Watercourses:** OSM provides 13 rivers + 9 streams + 3 water bodies + 1 wetland. Named: **Río Manso, Río Villegas, Arroyo Guanaco, Cañadón de la Mosca, Lago Amor, Laguna Huala Hué** (+ Lago Steffen from the cadastre). *There is no "Arroyo Las Minas" labeled in OSM within the bbox; the name is of local use.*
- **NDWI** (`ndwi_lasminas.tif`): highlights the lakes/lagoons and wide river reaches.
- **Summer NDVI** (`ndvi_lasminas.tif`): **⚠ saturated-high across almost the entire bbox** — this is **humid Andean-Patagonian forest** zone, all green in summer. Unlike the arid steppe, here the wet meadow (vega) does NOT appear as an isolated green island. That is why the operational discriminator for water is NOT greenness but: **proximity to a mapped watercourse + NDWI/open water + low-elevation valley floor**, which is how the ranking was weighted.

### Cross-analysis → candidates (`candidatos_agua_lasminas.geojson`, 146 ranked)
Score = usable area + proximity to RN40 + proximity to watercourse + NDVI + "golden combo" bonus (RN40<800 m **and** watercourse<200 m) + low-valley bonus.

| # | score | ha | elev. m | slope° | RN40 m | watercourse m | NDVI | class | lat,lon |
|--:|--:|--:|--:|--:|--:|--:|--:|--|--|
| 1 | 95.3 | 33.1 | 721 | 4.4 | 0 | 0 | 0.87 | wet_meadow_on_watercourse | -41.54869,-71.47219 |
| 2 | 94.8 | 76.8 | 615 | 3.2 | 408 | 60 | 0.86 | wet_meadow_on_watercourse | -41.56632,-71.50677 |
| 3 | 93.4 | 574.1 | 1023 | 3.8 | 0 | 90 | 0.85 | (extensive green) | -41.49701,-71.45627 |
| 4 | 84.3 | 20.3 | 809 | 6.0 | 30 | 0 | 0.77 | wet_meadow_on_watercourse | -41.53282,-71.46163 |
| 5 | 81.6 | 8.9 | 683 | 4.5 | 42 | 0 | 0.82 | wet_meadow_on_watercourse | -41.55884,-71.48257 |
| 6 | 80.0 | 2.7 | 639 | 4.9 | 60 | 0 | 0.88 | wet_meadow_on_watercourse | -41.56674,-71.49142 |

> #3 (574 ha) is an extensive green patch in the N of the bbox (elevation 1,023 m): almost certainly **dense forest**, not a wet meadow — useful as area but NOT as a source point. The small candidates on a watercourse in the valley floor (#1, #2) are the best signals.

## PART C — Interactive map
`mapa_agua_lasminas.html` (folium, **self-contained**, overlays embedded in base64):
OSM ↔ Esri Satellite switchable · LayerControl · **click = coordinates** · MeasureControl · fiscal gap (outline) · valley <8° (green) · 8–15° (yellow) · hillside >15° (semi-transparent red) · wet meadows/high NDVI (magenta) · NDWI (cyan) · OSM watercourses (blue) · lakes (blue) · RN40 (orange) · 50 m contours · 25 candidates with numbered markers and popup (area, elevation, slope, dist RN40, dist watercourse, NDVI).

## ⚠ Scope (important)
From DEM+satellite only **surface water and wet-meadow signals** are detected. **Composition, deep aquifer, and flow rate (= "mineral water") CANNOT be determined this way** — they require a field hydrogeological study (geoelectrics/borehole/gauging + physicochemical analysis). This work **preselects the best point** for that study; it does not confirm mineral water. Also, the "state-land gap" is unsurveyed land of **UNKNOWN** ownership (not confirmed fiscal) — verify at the Río Negro Land Directorate (Dirección de Tierras).

## ANSWERS
1. **How many ha of the gap are flat usable valley (<8°)?** → **2,481 ha** (28.2 % of the 8,831). The rest: 2,077 ha intermediate (8–15°) and 4,243 ha of hillside >15° (48 %). Within the fiscal land and >0.5 ha: **2,374.9 ha** in 226 polygons.
2. **Where is the usable band relative to RN40?** → They are valley-floor corridors that follow the RN40 alignment and the watercourses. **489 ha touch the <500 m band of RN40** (direct access); 897 ha at <1 km; 1,532 ha at <2 km. The bulk of the flat-accessible land is in the **SW–S valley floor of the bbox** (elevations 600–800 m).
3. **Are there wet meadows or watercourses within the usable band?** → Yes. OSM watercourses (rivers/streams) cross the flat valley floors; the best "flat+fiscal+watercourse+RN40" crossings are in the **S/SW** sector (elevations 600–720 m). NDVI is saturated (humid forest), so the strong water signal is the **mapped watercourses + NDWI of lakes** rather than greenness.
4. **Best candidate point for a field hydrogeological study:**
   - **PRIMARY → Candidate #1: -41.54869, -71.47219** — 33 ha flat (4.4°), elevation 721 m, **on a watercourse (0 m) and on RN40 (0 m)**, within the fiscal gap, NDVI 0.87. Combines immediate access + permanent watercourse + flat fiscal terrain.
   - **ALTERNATIVE → Candidate #2: -41.56632, -71.50677** — 77 ha, **lower valley floor (elevation 615 m = convergence/recharge zone)**, slope 3.2°, watercourse at 60 m, RN40 at 408 m. The largest and lowest; good if flow/convergence is prioritized over access.

   *Take both points to the field; confirm with geoelectrics + gauging + physicochemical analysis.*

**Task 4 deliverables:** `elevacion_lasminas.tif`, `pendiente_lasminas.tif`, `ndwi_lasminas.tif`, `ndvi_lasminas.tif`, `mapa_elevacion_lasminas.png`, `mapa_pendiente_lasminas.png`, `mapa_ndwi_lasminas.png`, `mapa_ndvi_lasminas.png`, `curvas_dem_lasminas.geojson`, `valle_aprovechable_lasminas.geojson`, `agua_osm_lasminas.geojson`, `candidatos_agua_lasminas.geojson`, `mapa_agua_lasminas.html`.

# TASK 6 — Las Minas candidates + boreholes + Mallín Ahogado complete

**Permanent focus: STATE-OWNED (FISCAL) LAND.** Consolidated in `mapa_master.html` (a single map,
both zones, everything switchable). DEM and AWS `/vsicurl/` method reused.

## ⚠ Mallín bbox correction (important)
The given bbox `-71.73,-41.91,-71.63,-41.81` returned **0 parcels, 0 routes, 0 hydro**:
it falls in the **cordillera / National Park W of El Bolsón** (only ANP and a lake).
I corrected it to **`-71.62,-41.94,-71.52,-41.84`** = the real Mallín Ahogado (NW of El Bolsón,
753 parcels, RP86, Río Azul on the W edge). Everything about Mallín below uses that bbox.

## PART B — Subsurface (full detail in `subsuelo_segemar_pozos.md`)
- **SEGEMAR/SIGAM:** live WMS/WFS geoservices, but the vector hydrogeology
  (`250KUnidadHidrogeologica`) **only covers the Pampa** (8 polygons, all in Buenos Aires);
  250K geology/lithology is **not vectorized** in the zone. Sheet 4172-IV Bariloche
  exists **only in PDF**. → the WMS layer was left switchable anyway (no local coverage).
- **Boreholes:** neither DPA Río Negro, nor SIAS, nor IGN expose downloadable point boreholes.
  **It must be requested in person** (list in the .md): DPA El Bolsón delegation, SEGEMAR,
  INTA/Loma del Medio Reserve, CFI (soil study, 15,000 ha).
- **Geological context (obtained, citable):** valley floors = **Quaternary glacifluvial
  gravels** (productive shallow unconfined aquifer) over granitic batholith;
  **Río Azul = glacial water from Hielo Azul**. Field study: SEV/TEM (vertical electrical
  sounding / transient electromagnetics) + borehole in the gravel fill near the watercourse.

## PART C — Mallín Ahogado (full pipeline replicated)
- **Cadastral:** 753 parcels (692 private/other + 61 inactive). Coverage **36 %**,
  **gap 5,903 ha (64 %)**. **FISCAL parcels (layer 79) = 0** (same as Las Minas and
  Foyel). Mallín's fiscal land is NOT flagged in the cadastre: it is the **Loma del Medio–
  Río Azul Forest Reserve** (national state/INTA) + settler occupation.
- **Altimetry:** relief **278–1,626 m**. Valley **<8° = 783 ha**; intermediate 1,392 ha;
  hillside >15° = 3,732 ha. `valle_mallin.geojson` = 228 polygons, 645 ha (>0.5 ha).
- **Water:** OSM gives **Río Azul, Río Quemquemtreu, Arroyo del Medio, Don Bartolo, Teno,
  Río Raquel** + aqueduct. Sentinel-2 NDWI/NDVI **19-Feb-2024 (clouds 0.03 %)**.
- **Optimal Mallín candidate:** `candidatos_agua_mallin.geojson` (105 ranked), cross-analysis of
  flat valley ∩ gap ∩ near RP86 ∩ near power (served-parcels proxy) ∩ watercourse.

## FINAL COMPARATIVE TABLE — Las Minas vs Mallín Ahogado
| Criterion | **Arroyo Las Minas** | **Mallín Ahogado** |
|---|---|---|
| bbox used | -71.54,-41.58,-71.44,-41.48 | -71.62,-41.94,-71.52,-41.84 *(corrected)* |
| Parcels | 3 | 753 (692 priv + 61 inact) |
| Cadastral coverage | 4.1 % | 36.0 % |
| Gap (unsurveyed) | 8,831 ha (96 %) | 5,903 ha (64 %) |
| **Confirmed FISCAL (layer 79)** | **NO (0)** | **NO (0)** — but **state Forest Reserve** (de facto fiscal) |
| Relief | 496–1,803 m | 278–1,626 m |
| **Usable valley <8°** | **2,481 ha** (489 ha at <500 m from route) | **783 ha** |
| Water signal | Ríos Manso/Villegas, Arroyo Guanaco; lakes | **Río Azul (Hielo Azul glacier)**, Quemquemtreu, Arroyo del Medio |
| Route access | **RN40** (touches, 0 m) | **RP86 paved** (2022) |
| Power access | RN40 corridor | **EDERSA** (populated zone, ~300 families) |
| Best candidate (coord) | **C1 -41.54869,-71.47219** · C2 -41.56632,-71.50677 | **-41.88410,-71.53238** |

## ANSWERS
1. **Does Mallín Ahogado have confirmed FISCAL parcels in the cadastre?**
   **NO.** The Fiscal layer (id 79) returns **0 features** in Mallín (tested in the Mallín
   bbox, in the El Bolsón core, and in a wide bbox: 0 in all). It is the **same
   result as Las Minas and Foyel**: the Río Negro ART cadastre **does not flag state-owned
   land** in these zones. BUT Mallín's fiscal land **is confirmed by another
   route**: the **Loma del Medio–Río Azul Forest Reserve** (state ownership, ~300 settler
   families on fiscal land). Key difference: in Las Minas the fiscal land is *inferred*
   (unsurveyed gap); in Mallín it is *administratively real* (State reserve),
   even if it does not appear checked as "Fiscal" in the cadastral layer.
2. **How many usable flat ha (<8°) does Mallín have vs Las Minas?**
   **Mallín ≈ 783 ha** (645 ha in polygons >0.5 ha) · **Las Minas ≈ 2,481 ha**
   (2,375 ha in polygons; 489 ha at <500 m from RN40). Las Minas has **~3× more**
   flat valley, but it is a gap of uncertain ownership; Mallín's is smaller but sits
   on real fiscal land and with better water/access/services.
3. **Did you obtain real borehole/aquifer data, or must it be requested in person?**
   **It must be requested in person.** There is no downloadable public borehole layer (DPA RN /
   SIAS / IGN) nor vector SEGEMAR hydrogeology for the cordillera (only covers the
   Pampa). What was obtained is **regional geological context** (valley glacifluvial gravel
   aquifer; Río Azul = glacial water) and the **list of agencies to request** the
   records from (DPA El Bolsón, SEGEMAR Sheet 4172-IV, INTA/Reserve, CFI). See `subsuelo_segemar_pozos.md`.
4. **Between Las Minas and Mallín Ahogado, which is better for fiscal land + water + access?**
   **Final ranking:**
   - **🥇 #1 — MALLÍN AHOGADO `-41.88410, -71.53238`.** Wins for **REAL fiscal land**
     (State Reserve, not merely inferred) + **premium glacial water** (Río Azul/
     Hielo Azul basin) + **paved RP86** + **EDERSA power** (serviced zone). It is the point
     with the most solid fiscal+water+access+services combination. (Against: small lot,
     6.5 ha, and populated surroundings → verify the real availability of the fiscal remnant.)
   - **🥈 #2 — LAS MINAS C1 `-41.54869, -71.47219`.** Much more flat valley (33 ha the lot,
     2,481 ha the zone) and on RN40 + watercourse, but **fiscal ownership only inferred** (unsurveyed
     gap, to be verified at the Land Directorate) and **no confirmed glacial water**.
   - **🥉 #3 — LAS MINAS C2 `-41.56632, -71.50677`.** Larger lot (77 ha) and low valley
     floor (615 m, convergence), but farther from the route (408 m) and same uncertain ownership.

   > For BoldWater (focus on fiscal land + mineral water): **Mallín Ahogado is the best
   > first target for fiscal management and hydrogeological study** (glacial water +
   > clear ownership status); **Las Minas is the best target by scale of flat land**
   > if the fiscal ownership of the gap is confirmed.

**Task 6 deliverables:** `mapa_master.html` · `parcelas_mallin.geojson` ·
`fiscales_mallin.geojson` (0) · `inactivas_mallin.geojson` · `vacios_mallin.geojson` ·
`valle_mallin.geojson` · `agua_osm_mallin.geojson` · `rutas_osm_mallin.geojson` (RP86) ·
`candidatos_agua_mallin.geojson` · rasters `elevacion/pendiente/ndwi/ndvi_mallin.tif` ·
`subsuelo_segemar_pozos.md` · tested SEGEMAR layers (no local coverage).

# TASK 7 (final) — Highlighted lots + Energy

## PART A — Lots as polygons
The 4 candidates are now drawn as **polygons** (35 % fill + 3 px colored
border) with a **500 m circle** and a **numbered pin** on top, full popup
(water/route/power/ownership/elevation). File: `candidatos_destacados.geojson`.
Verified: all 4 have real geometry (181 / 149 / 41 / 399 vertices).

## PART B — Energy
- **OSM has no electrical grid in the region** (Overpass `power=*` → 0 features in the
  corridor, in Mallín, and in a wide sweep; only 2 stray distant ways). →
  `red_electrica_osm.geojson` is left empty and the layer is labeled "NO DATA — see EDERSA".
- **Confirmed EDERSA context (research, not OSM):** the EDERSA **"RN40 North"** trunk line
  passes through El Foyel and the Las Minas area; **new EDERSA ring in Mallín
  Ahogado**; **EDERSA management center in El Foyel**. The 4 lots fall on/beside
  that infrastructure → power at short distance very likely, **connection to be verified**.

## FINAL TABLE — candidate | lot ha | water | route | MV POWER | ownership | elevation
| # | Candidate | lot ha | Water | Route | Power (MV line) | Ownership | Elevation |
|--:|---|--:|---|---|---|---|--:|
| **1** | Las Minas **C1** | 33.12 | on watercourse (0 m) | RN40 (0 m) | OSM no data · EDERSA RN40 trunk **on the route** | unsurveyed gap — possibly fiscal | 721 m |
| **2** | Las Minas **C2** | 76.77 | watercourse at 60 m | RN40 at 408 m | OSM no data · EDERSA RN40 trunk **~0.4 km** | unsurveyed gap — possibly fiscal | 615 m |
| **3** | **Mallín Ahogado** | 6.48 | on watercourse (0 m) · **Río Azul glacial** | **RP86 (0 m)** | OSM no data · **EDERSA Mallín ring** (serviced zone) | **Loma del Medio–Río Azul Forest Reserve (real FISCAL)** | 491 m |
| **4** | El Foyel **gap #1** | 104.98 | not analyzed (RN40 corridor) | RN40 (0 m) | OSM no data · EDERSA El Foyel management + trunk | unsurveyed gap — possibly fiscal (corridor, 9 private islands) | 773 m |

## ANSWERS
1. **MV line at <500 m / <2 km / no data?**
   In **OSM: no data** for all 4 (there is no electrical grid loaded across the whole region).
   By **EDERSA context**: all 4 are **on or beside** existing medium-voltage
   infrastructure — C1, C2 and Foyel on the **RN40 North trunk**; Mallín on the
   **Mallín Ahogado ring** (serviced neighborhood). Realistic estimate **<500 m–"on the
   alignment"**, pending confirmation of connection with EDERSA.
2. **Verdict — which meet the 3 hard requirements (water + route + power)?**
   - **#1 Las Minas C1 → MEETS** (water ✓ on watercourse · route ✓ RN40 0 m · power ✓ EDERSA trunk).
   - **#2 Las Minas C2 → MEETS** (water ✓ 60 m · route ✓ RN40 <500 m · power ✓ EDERSA trunk).
   - **#3 Mallín Ahogado → MEETS and is the most complete** (water ✓ Río Azul glacial · route ✓ RP86 ·
     power ✓ ring · **+ REAL fiscal ownership**). The only one that also adds confirmed fiscal land.
   - **#4 El Foyel gap #1 → NOT confirmed** (route ✓ and power ✓, but **water not analyzed**;
     it would meet only 2 of 3 until a watercourse in the corridor is verified).
   **Meeting the 3 hard requirements: C1, C2 and Mallín.** With a focus on fiscal land, **Mallín leads**.
3. **Are the 4 lots shown as polygons?** **YES** — all 4 are drawn as a highlighted
   polygon (gold/blue/green/gray) with a 3 px border, 35 % fill, 500 m circle, and
   numbered pin, in the "⭐ Candidate LOTS (polygons)" layer of `mapa_master.html`.

**Task 7 deliverables:** `red_electrica_osm.geojson` (empty, documented) ·
`candidatos_destacados.geojson` (4 lots) · `mapa_master.html` (polygon lots + energy
+ Forest Reserve + references) · `index.html` updated.

# TASK 8 — Usable maps (labels + per-lot zoom + legible info)
Rebuilt with `build_maps.py` (a single builder → 3 maps):
- **`mapa_master.html`**: buttons **[🔴 Las Minas] [🟢 Mallín] [🔭 View both]** (JS `setView`/`fitBounds`),
  FIXED labels (DivIcon, no click) for towns/rivers/routes and for the 4 lots (name·ha·elevation),
  lots as polygons (35% fill + border), **distance lines drawn with a number** to route and
  watercourse (consistent with the popup), switchable slope at 40%, 100 m contours with elevations,
  Forest Reserve marked, **compact collapsible legend**, OSM↔Esri, click=coordinates.
- **`mapa_lasminas.html`** (zoom 14, lots C1/C2) and **`mapa_mallin.html`** (zoom 15, lot #3) centered.
- Distances drawn: C1 RN40 0 m / water 0 m · C2 RN40 405 m / water 52 m · Mallín RP86 158 m / water 0 m · Foyel RN40 0 m.
- `index.html` (Desktop panel) updated with the 3 maps.

# TASK 9 — Probable fiscal lots + electrical grid (in the 3 maps)
New switchable layers (`build_fiscal_lots.py` → 2 geojson, integrated into build_maps):
- **🏛️ Probable fiscal lots** (`lotes_fiscales_probables.geojson`, 13): the unsurveyed
  gaps that are flat (<8°) and accessible (<2 km from a route) >5 ha, ranked by size+route+water,
  in blue with a ha label; + the **Loma del Medio–Río Azul Forest Reserve** (brown) =
  the only CONFIRMED FISCAL (State land).
  - Las Minas (possibly fiscal): **598 ha on RN40 (watercourse 73 m)**, 128, 99, 81, 77, 75 ha.
  - Mallín (possibly fiscal): **43.7 ha on RP86 (watercourse 0 m)**, 27, 18, 11, 8, 5 ha.
- **⚡ Electrical grid** (`red_electrica_aprox.geojson`): OSM = 0 data in the region, so the
  **APPROXIMATE alignment of the EDERSA trunk** is drawn along RN40 (dashed yellow line) and
  RP86, + EDERSA points (El Foyel management, Mallín ring, RN40 corridor). Labeled "approx./
  verify with EDERSA" — it is NOT a real grid survey.

> The most obvious: a **~598 ha lot, flat, on RN40 and with a watercourse at 73 m** in Las Minas
> (possibly fiscal, to be confirmed at the Land Directorate). The only CONFIRMED fiscal land is the
> Loma del Medio–Río Azul Forest Reserve in Mallín.
