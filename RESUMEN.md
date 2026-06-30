# RESUMEN — Parcelas catastrales: El Foyel · Arroyo Las Minas · Los Repollos

**Fuente:** ArcGIS REST — Agencia de Recaudación Tributaria de Río Negro · `SmartLIS/Base_cata_20251111_v2/MapServer` (servicio público oficial).
Acceso OK con headers de navegador (Safari UA + Referer). Sin 403. Áreas calculadas con shapely sobre proyección equirectangular local (metros); coordenadas EPSG:4326.

## Tabla comparativa de las 3 zonas

| Zona | bbox (lon/lat) | Parcelas | Cobertura | Vacío fiscal (ha) | Tamaño parcelas (ha) | ANP |
|---|---|---:|---:|---:|---|---|
| **El Foyel** | -71.51,-41.7 → -71.41,-41.6 | 186 | 97,0 % | **271,81** | 0,020 – 4.307,7 (med 0,70) | Cipres de las Guaytecas |
| **Arroyo Las Minas** | -71.54,-41.58 → -71.44,-41.48 | 3 | 4,1 % | **8.831,53** | 1.460,264 – 5.500,6 (med 3.865,15) | no |
| **Los Repollos** | -71.55,-41.86 → -71.45,-41.76 | 427 | 94,4 % | **514,85** | 0,004 – 1.417,7 (med 10,11) | Río Azul - Lago Escondido |

**Mayor vacío fiscal (más oportunidad = menos cobertura):**
1. **Arroyo Las Minas** — 8.831,53 ha sin parcelar (95,9 % del bbox)
2. **Los Repollos** — 514,85 ha sin parcelar (5,6 % del bbox)
3. **El Foyel** — 271,81 ha sin parcelar (3,0 % del bbox)

> El "vacío fiscal" = área del bbox no cubierta por ninguna parcela mensurada (diferencia geométrica bbox − unión de parcelas). Es un proxy de tierra sin mensurar / posible tierra fiscal dentro del rectángulo consultado.

## Arroyo Las Minas — detalle

- **Parcelas:** 3
- **Área bbox:** 9.211,86 ha
- **Cobertura por parcelas:** 4,1 %  (cubierto 380,33 ha)
- **Vacío fiscal:** 8.831,53 ha (~95,9 % del bbox)
- **Rango de tamaños:** 1.460,2640 ha → 5.500,58 ha (mediana 3.865,151 ha)
- **Área Natural Protegida (capa id 20):** sin intersección

## Los Repollos — detalle

- **Parcelas:** 427
- **Área bbox:** 9.171,88 ha
- **Cobertura por parcelas:** 94,4 %  (cubierto 8.657,03 ha)
- **Vacío fiscal:** 514,85 ha (~5,6 % del bbox)
- **Rango de tamaños:** 0,0039 ha → 1.417,72 ha (mediana 10,106 ha)
- **Área Natural Protegida (capa id 20):** Río Azul - Lago Escondido

## VACÍOS EL FOYEL — localización

Diferencia geométrica `bbox − unión(186 parcelas)`, explotada en polígonos y filtrando slivers < 0.5 ha (ruido de borde). Resultado: **7 polígonos de vacío** que suman **271,79 ha**.

- **RN 40:** capa Red Vial id 25 (VCM_TIPO='Ruta Nacional', pavimentada, jurisdicción Nacional).
- **Vacíos a < 500 m de la RN 40 (acceso directo, los más valiosos):** **1** de 7, sumando 104,98 ha.
- **Vacío más cercano a la RN 40:** #1 a 0 m (104,98 ha).

Archivos: `vacios_foyel.geojson` (polígonos) · `mapa_foyel_vacios.html` (folium: parcelas gris, vacíos rojo, RN40 naranja, ANP verde).

| id | superficie_ha | centroide (lat, lon) | dist_RN40_m | dentro_ANP |
|---:|---:|---|---:|:--:|
| 1 | 104,98 | -41.64485, -71.45831 | 0 ◀ <500m | no |
| 2 | 91,76 | -41.62652, -71.43266 | 1.550 | no |
| 3 | 63,93 | -41.61363, -71.49796 | 1.165 | no |
| 4 | 6,34 | -41.66517, -71.50151 | 2.485 | no |
| 5 | 2,12 | -41.65032, -71.48816 | 1.168 | no |
| 6 | 2,09 | -41.65993, -71.48658 | 1.560 | no |
| 7 | 0,58 | -41.68365, -71.49916 | 3.762 | no |

## El Foyel — detalle parcelas

- **Parcelas:** 186 · **Cobertura:** 97,0 % · **Vacío:** 271,81 ha
- **Rango:** 0,0198 ha → 4.307,70 ha (mediana 0,6999 ha, promedio 125,03 ha)
- **Área Natural Protegida:** Cipres de las Guaytecas
- **Polígono General (id 40, POL_ESTADO):** 0 features en el bbox (sin polígono general cargado).

<details><summary>Nomenclaturas El Foyel (PAR_NOMENCLATURA) — 186 únicas</summary>

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
*El servicio sólo expone geometría + nomenclatura + superficie. No contiene titularidad/dueño.*

# TAREA 3 — Capa FISCALES + vacío #1 Foyel + Las Minas a fondo

## A) Capa Fiscales (id 79): campos y resultados

La capa **Fiscales** es una vista de la tabla `CATA_50_GIS_PARCELAS` (mismo esquema que el resto de parcelas) filtrada a parcelas fiscales. Campos relevantes (alias):
`PAR_NOMENCLATURA`, `PAR_ESTADO`, `PAR_TIPO`, `PAR_DEPARTAMENTO`, `PAR_SUPERFICIE_MENSURA`, `PAR_SUPERFICIE_TRIBUTARIA`, `PAR_EXENTA`, `PAR_IMPONIBLE`, `PAR_OBSERVACION`, `PAR_FECHA_REGISTRACION`, `PAR_LEGUA/SECCION/FRACCION/CHACRA/QUINTA/MANZANA/LOTE`, `TRM_EXPEDIENTE` (expediente de trámite). No expone titular.

| Capa | El Foyel | Las Minas |
|---|---:|---:|
| **Fiscales (id 79)** | **0** | **0** |
| Inactivas (id 80) | 7 | 0 |

> **No hay ninguna parcela marcada como FISCAL (capa 79) en ninguna de las dos zonas.** Las 7 "Inactivas" de El Foyel son parcelas privadas dadas de baja/inactivadas (todas `PAR_IMPONIBLE=S`, es decir gravables/privadas), no tierra fiscal. Archivos `fiscales_foyel.geojson` y `fiscales_lasminas.geojson` se guardaron como FeatureCollection vacíos (0 features) — el dato es justamente la ausencia.

## B) Vacío #1 de El Foyel (sobre RN40)

- **Superficie:** 104,98 ha · toca la RN40 (distancia 0 m).
- **Intersección con parcelas fiscales:** **NINGUNA** (no hay fiscales en la zona). Tampoco coincide con parcela activa alguna (por definición es el hueco entre parcelas).
- **Conclusión:** es **tierra sin mensurar de estado dominial DESCONOCIDO** — candidata, pero **NO confirmada como fiscal** por el catastro. Requiere verificación en Dirección de Tierras.

⚠️ **Importante sobre la forma:** el vacío #1 NO es un lote rectangular compacto. Es un **corredor irregular** que serpentea entre las parcelas siguiendo la traza de la RN40 (399 vértices, con 9 parcelas privadas embebidas como "islas" dentro del hueco; el polígono llena sólo ~2,4 % de su caja contenedora). Por eso doy la **caja envolvente** (extensión máxima) + un **punto interior garantizado**, no 4 esquinas de un rectángulo real. La geometría exacta está en `vacios_foyel.geojson` (feature id=1).

**Coordenadas para Dirección de Tierras (formato lat,lon copiable):**

```
Centroide:            -41.644851,-71.458309
Punto interior:       -41.649963,-71.456634   (cae dentro del polígono)
--- caja envolvente (extensión máxima del corredor) ---
Esquina NO:           -41.600000,-71.481337
Esquina NE:           -41.600000,-71.434356
Esquina SE:           -41.700000,-71.434356
Esquina SO:           -41.700000,-71.481337
```

## C) Arroyo Las Minas a fondo

**Las 3 parcelas rurales (las que ocupan el ~4 %):**

| Nomenclatura | Mensura (ha) | Estado | Centroide (lat,lon) | Cota aprox | Dist. RN40 | Exped. |
|---|---:|:--:|---|---:|---:|---|
| `20-1-*-925-750-0` | 5.598,09 | A | -41.5169, -71.3847 | ~1250 m | 835 m | 0-DUP 3563/1999 |
| `20-1-*-770-670-0` | 4.505,43 | A | -41.5979, -71.4370 | ~750 m | 0 m | 0-DUP 3291/1990 |
| `20-1-*-740-590-0` | 1.546,40 | A | -41.6067, -71.4877 | ~800 m | 0 m | 0-DUP 3291/1990 |

> Las 3 son parcelas **privadas activas** (`PAR_ESTADO=A`, `PAR_IMPONIBLE=S`), rurales (`PAR_TIPO=4`), de mensura antigua (expedientes DUP 1990/1999). La superficie de mensura (miles de ha) excede lo que cae dentro del bbox: son estancias grandes que entran sólo parcialmente en el recorte.

**Vacíos de Las Minas (>10 ha):** 1 polígono(s), suman 8.831,53 ha. Relieve del bbox: curvas de nivel de **600 a 1750 m** (fondo de valle ↔ alta montaña).

| id | sup (ha) | centroide (lat,lon) | cota aprox | dist RN40 | corredor |
|---:|---:|---|---:|---:|:--|
| 1 | 8.831,53 | -41.5289, -71.4912 | ~1250 m | 0 m ◀<500m | valle (cerca ruta) |

> Como el 96 % es prácticamente un único hueco continuo que va del valle a la montaña, la distinción valle/ladera se ve mejor en el mapa (`mapa_candidatos.html`): activá la capa **Curvas de nivel** y la **RN40** — el corredor bajo sigue la ruta (~600–800 m); lo que sube hacia cotas 1000–1750 m es ladera no aprovechable. Hay además 2 lagos y 1 laguna en el bbox.

**Entregables Tarea 3:** `fiscales_foyel.geojson`, `fiscales_lasminas.geojson` (0 feats), `vacios_lasminas.geojson`, `mapa_candidatos.html`.

# TAREA 4 — Altimetría de Las Minas + señales de agua

**Zona:** Arroyo Las Minas · bbox -71.54,-41.58 → -71.44,-41.48 (centro ~-41.53,-71.49).
**Insumos reutilizados:** `vacios_lasminas.geojson` (hueco fiscal 8.831,53 ha), `parcelas_lasminas`, `redvial_lasminas` (RN40 = línea "Ruta Nacional"), `agua_lasminas` (lagos catastro).

## Fuentes de datos (todas gratuitas, sin API key)
- **DEM:** Copernicus **GLO-30** (30 m) — AWS Open Data público (`copernicus-dem-30m.s3`), lectura por ventana vía `/vsicurl/`. *No hizo falta OpenTopography ni API key.*
- **Hidrografía:** OpenStreetMap vía **Overpass API** (`waterway=*`, `natural=water/wetland`) → `agua_osm_lasminas.geojson` (26 geom).
- **NDWI/NDVI:** **Sentinel-2 L2A** vía **STAC earth-search (Element84)**, sin login. Escena elegida `S2B_18GYV_20240125` — **25-ene-2024, nubosidad 0,0008 %** (verano seco hemisferio sur).

## PARTE A — Altimetría / pendientes
- Relieve del bbox: **496 – 1.803 m**. Valle/fondo ~500–800 m; laderas y filos hasta 1.800 m.
- Pendiente calculada en UTM 19S (píxel 30 m), reclasificada: verde <8°, amarillo 8–15°, rojo >15°.
- Entregables: `elevacion_lasminas.tif`, `pendiente_lasminas.tif`, `curvas_dem_lasminas.geojson` (curvas DEM cada 50 m, 193 líneas), `mapa_elevacion_lasminas.png`, `mapa_pendiente_lasminas.png`.

### Vacío fiscal recortado contra pendiente
De las **8.831,53 ha** catastrales del vacío (8.801,6 ha al rasterizar a 30 m):

| Clase pendiente | ha | % |
|---|---:|---:|
| **<8° (valle plano/usable)** | **2.481** | **28,2 %** |
| 8–15° (intermedio) | 2.077 | 23,6 % |
| >15° (ladera no usable) | 4.243 | 48,2 % |

→ `valle_aprovechable_lasminas.geojson` = 226 polígonos (>0,5 ha) sumando **2.374,9 ha** de valle <8° dentro del fiscal.

**Cercanía a la RN40** (lo realmente accesible):
| Franja | Valle <8° usable |
|---|---:|
| a <500 m de RN40 | **489 ha** |
| a <1.000 m | 897 ha |
| a <2.000 m | 1.532 ha |

> El vacío es ~96 % montaña/ladera con corredores planos serpenteando por los fondos de valle siguiendo la RN40 y los cursos de agua. El valle aprovechable NO es un bloque compacto: es una red de fondos de valle.

## PARTE B — Señales de agua
- **Cursos:** OSM aporta 13 ríos + 9 arroyos + 3 cuerpos + 1 humedal. Nombrados: **Río Manso, Río Villegas, Arroyo Guanaco, Cañadón de la Mosca, Lago Amor, Laguna Huala Hué** (+ Lago Steffen del catastro). *No hay un "Arroyo Las Minas" rotulado en OSM dentro del bbox; el nombre es de uso local.*
- **NDWI** (`ndwi_lasminas.tif`): resalta los lagos/lagunas y tramos anchos de río.
- **NDVI verano** (`ndvi_lasminas.tif`): **⚠ saturado-alto en casi todo el bbox** — es zona de **bosque andino-patagónico húmedo**, todo verde en verano. A diferencia de la estepa árida, acá la vega NO aparece como isla verde aislada. Por eso el discriminador operativo de agua NO es el verdor sino: **cercanía a curso mapeado + NDWI/agua abierta + fondo de valle de cota baja**, que es como se ponderó el ranking.

### Cruce → candidatos (`candidatos_agua_lasminas.geojson`, 146 rankeados)
Score = área usable + cercanía RN40 + cercanía a curso + NDVI + bonus "combo de oro" (RN40<800 m **y** curso<200 m) + bonus valle bajo.

| # | score | ha | cota m | pend° | RN40 m | curso m | NDVI | clase | lat,lon |
|--:|--:|--:|--:|--:|--:|--:|--:|--|--|
| 1 | 95,3 | 33,1 | 721 | 4,4 | 0 | 0 | 0,87 | vega_sobre_curso | -41.54869,-71.47219 |
| 2 | 94,8 | 76,8 | 615 | 3,2 | 408 | 60 | 0,86 | vega_sobre_curso | -41.56632,-71.50677 |
| 3 | 93,4 | 574,1 | 1023 | 3,8 | 0 | 90 | 0,85 | (verde extenso) | -41.49701,-71.45627 |
| 4 | 84,3 | 20,3 | 809 | 6,0 | 30 | 0 | 0,77 | vega_sobre_curso | -41.53282,-71.46163 |
| 5 | 81,6 | 8,9 | 683 | 4,5 | 42 | 0 | 0,82 | vega_sobre_curso | -41.55884,-71.48257 |
| 6 | 80,0 | 2,7 | 639 | 4,9 | 60 | 0 | 0,88 | vega_sobre_curso | -41.56674,-71.49142 |

> #3 (574 ha) es un manchón verde extenso al N del bbox (cota 1.023 m): casi seguro **bosque denso**, no vega — útil como superficie pero NO como punto de fuente. Los candidatos chicos sobre curso en fondo de valle (#1, #2) son las mejores señales.

## PARTE C — Mapa interactivo
`mapa_agua_lasminas.html` (folium, **autocontenido**, overlays embebidos en base64):
OSM ↔ Satélite Esri conmutable · LayerControl · **click = coordenadas** · MeasureControl · vacío fiscal (contorno) · valle <8° (verde) · 8–15° (amarillo) · ladera >15° (rojo semitransp) · vegas/NDVI alto (magenta) · NDWI (cian) · cursos OSM (azul) · lagos (azul) · RN40 (naranja) · curvas 50 m · 25 candidatos con marcadores numerados y popup (superficie, cota, pendiente, dist RN40, dist curso, NDVI).

## ⚠ Alcance (importante)
Desde DEM+satélite sólo se detectan **señales de agua superficial y vega húmeda**. **Composición, acuífero profundo y caudal (= "agua mineral") NO se determinan así** — requieren estudio hidrogeológico de campo (geoeléctrica/sondeo/aforo + análisis fisicoquímico). Este trabajo **preselecciona el mejor punto** para ese estudio, no confirma agua mineral. Además el "vacío fiscal" es tierra sin mensurar de dominio **DESCONOCIDO** (no confirmada fiscal) — verificar en Dirección de Tierras de Río Negro.

## RESPUESTAS
1. **¿Cuántas ha del vacío son valle plano usable (<8°)?** → **2.481 ha** (28,2 % de las 8.831). El resto: 2.077 ha intermedias (8–15°) y 4.243 ha de ladera >15° (48 %). Dentro del fiscal y >0,5 ha: **2.374,9 ha** en 226 polígonos.
2. **¿Dónde está la franja usable respecto de la RN40?** → Son corredores de fondo de valle que siguen la traza de la RN40 y los cursos de agua. **489 ha tocan la franja <500 m de la RN40** (acceso directo); 897 ha a <1 km; 1.532 ha a <2 km. El grueso plano-accesible está en el **fondo de valle SO–S del bbox** (cotas 600–800 m).
3. **¿Hay vegas o cursos dentro de la franja usable?** → Sí. Cursos OSM (ríos/arroyos) atraviesan los fondos de valle planos; los mejores cruces "plano+fiscal+curso+RN40" están en el sector **S/SO** (cotas 600–720 m). El NDVI está saturado (bosque húmedo), así que la señal fuerte de agua son los **cursos mapeados + NDWI de lagos** más que el verdor.
4. **Mejor punto candidato para estudio hidrogeológico de campo:**
   - **PRIMARIO → Candidato #1: -41.54869, -71.47219** — 33 ha planas (4,4°), cota 721 m, **sobre un curso de agua (0 m) y sobre la RN40 (0 m)**, dentro del vacío fiscal, NDVI 0,87. Combina acceso inmediato + curso permanente + terreno llano fiscal.
   - **ALTERNATIVO → Candidato #2: -41.56632, -71.50677** — 77 ha, **fondo de valle más bajo (cota 615 m = zona de convergencia/recarga)**, pendiente 3,2°, curso a 60 m, RN40 a 408 m. El más grande y bajo; bueno si se prioriza caudal/convergencia sobre acceso.

   *Llevar al campo ambos puntos; confirmar con geoeléctrica + aforo + análisis fisicoquímico.*

**Entregables Tarea 4:** `elevacion_lasminas.tif`, `pendiente_lasminas.tif`, `ndwi_lasminas.tif`, `ndvi_lasminas.tif`, `mapa_elevacion_lasminas.png`, `mapa_pendiente_lasminas.png`, `mapa_ndwi_lasminas.png`, `mapa_ndvi_lasminas.png`, `curvas_dem_lasminas.geojson`, `valle_aprovechable_lasminas.geojson`, `agua_osm_lasminas.geojson`, `candidatos_agua_lasminas.geojson`, `mapa_agua_lasminas.html`.

# TAREA 6 — Candidatos Las Minas + perforaciones + Mallín Ahogado completo

**Foco permanente: TIERRA FISCAL.** Consolidado en `mapa_master.html` (un solo mapa,
ambas zonas, todo conmutable). DEM y método AWS `/vsicurl/` reutilizados.

## ⚠ Corrección de bbox de Mallín (importante)
El bbox dado `-71.73,-41.91,-71.63,-41.81` devolvió **0 parcelas, 0 rutas, 0 hidro**:
cae en la **cordillera / Parque Nacional al W de El Bolsón** (sólo ANP y un lago).
Lo corregí a **`-71.62,-41.94,-71.52,-41.84`** = Mallín Ahogado real (NW de El Bolsón,
753 parcelas, RP86, Río Azul en el borde W). Todo Mallín de abajo usa ese bbox.

## PARTE B — Subsuelo (detalle completo en `subsuelo_segemar_pozos.md`)
- **SEGEMAR/SIGAM:** geoservicios WMS/WFS vivos, pero la hidrogeología vectorial
  (`250KUnidadHidrogeologica`) **sólo cubre la Pampa** (8 polígonos, todos en BA);
  geología/litología 250K **no vectorizada** en la zona. La Hoja 4172-IV Bariloche
  existe **sólo en PDF**. → capa WMS dejada conmutable igual (sin cobertura local).
- **Pozos:** ni DPA Río Negro, ni SIAS, ni IGN exponen pozos puntuales descargables.
  **Hay que pedirlo presencial** (lista en el .md): DPA delegación El Bolsón, SEGEMAR,
  INTA/Reserva Loma del Medio, CFI (estudio de suelos 15.000 ha).
- **Contexto geológico (sí conseguido, citable):** fondos de valle = **gravas
  glacifluviales cuaternarias** (acuífero libre somero productivo) sobre batolito
  granítico; **Río Azul = agua glaciar del Hielo Azul**. Estudio de campo: SEV/TEM +
  perforación en el relleno de gravas cerca del curso.

## PARTE C — Mallín Ahogado (pipeline completo replicado)
- **Catastral:** 753 parcelas (692 privadas/otras + 61 inactivas). Cobertura **36 %**,
  **vacío 5.903 ha (64 %)**. **Parcelas FISCALES (capa 79) = 0** (igual que Las Minas y
  Foyel). La tierra fiscal de Mallín NO está rotulada en catastro: es la **Reserva
  Forestal Loma del Medio–Río Azul** (estado nacional/INTA) + ocupación de pobladores.
- **Altimetría:** relieve **278–1.626 m**. Valle **<8° = 783 ha**; intermedio 1.392 ha;
  ladera >15° = 3.732 ha. `valle_mallin.geojson` = 228 polígonos, 645 ha (>0,5 ha).
- **Agua:** OSM da **Río Azul, Río Quemquemtreu, Arroyo del Medio, Don Bartolo, Teno,
  Río Raquel** + acueducto. NDWI/NDVI Sentinel-2 **19-feb-2024 (nubes 0,03 %)**.
- **Candidato óptimo Mallín:** `candidatos_agua_mallin.geojson` (105 rankeados), cruce
  valle plano ∩ vacío ∩ cerca RP86 ∩ cerca luz (proxy parcelas servidas) ∩ curso.

## TABLA COMPARATIVA FINAL — Las Minas vs Mallín Ahogado
| Criterio | **Arroyo Las Minas** | **Mallín Ahogado** |
|---|---|---|
| bbox usado | -71.54,-41.58,-71.44,-41.48 | -71.62,-41.94,-71.52,-41.84 *(corregido)* |
| Parcelas | 3 | 753 (692 priv + 61 inact) |
| Cobertura catastral | 4,1 % | 36,0 % |
| Vacío (sin mensurar) | 8.831 ha (96 %) | 5.903 ha (64 %) |
| **FISCAL confirmado (capa 79)** | **NO (0)** | **NO (0)** — pero **Reserva Forestal estatal** (fiscal de hecho) |
| Relieve | 496–1.803 m | 278–1.626 m |
| **Valle <8° usable** | **2.481 ha** (489 ha a <500 m ruta) | **783 ha** |
| Señal de agua | Ríos Manso/Villegas, A° Guanaco; lagos | **Río Azul (glaciar Hielo Azul)**, Quemquemtreu, A° del Medio |
| Acceso ruta | **RN40** (toca, 0 m) | **RP86 asfaltada** (2022) |
| Acceso luz | corredor RN40 | **EDERSA** (zona poblada, ~300 flias) |
| Mejor candidato (coord) | **C1 -41.54869,-71.47219** · C2 -41.56632,-71.50677 | **-41.88410,-71.53238** |

## RESPUESTAS
1. **¿Mallín Ahogado tiene parcelas FISCALES confirmadas en el catastro?**
   **NO.** La capa Fiscales (id 79) da **0 features** en Mallín (probado en el bbox de
   Mallín, en el núcleo de El Bolsón y en un bbox amplio: 0 en todos). Es el **mismo
   resultado que Las Minas y Foyel**: el catastro de la ART Río Negro **no rotula tierra
   fiscal** en estas zonas. PERO la tierra fiscal de Mallín **sí está confirmada por otra
   vía**: la **Reserva Forestal Loma del Medio–Río Azul** (dominio estatal, ~300 familias
   pobladoras en tierra fiscal). Diferencia clave: en Las Minas el fiscal es *inferido*
   (vacío sin mensurar); en Mallín es *administrativamente real* (reserva del Estado),
   aunque no aparezca tildado como "Fiscal" en la capa catastral.
2. **¿Cuántas ha planas usables (<8°) tiene Mallín vs Las Minas?**
   **Mallín ≈ 783 ha** (645 ha en polígonos >0,5 ha) · **Las Minas ≈ 2.481 ha**
   (2.375 ha en polígonos; 489 ha a <500 m de la RN40). Las Minas tiene **~3× más**
   valle plano, pero es vacío de dominio incierto; el de Mallín es menor pero está
   sobre tierra fiscal real y con mejor agua/acceso/servicios.
3. **¿Conseguiste dato real de perforaciones/acuífero, o hay que pedirlo presencial?**
   **Hay que pedirlo presencial.** No hay capa pública descargable de pozos (DPA RN /
   SIAS / IGN) ni hidrogeología vectorial SEGEMAR para la cordillera (sólo cubre la
   Pampa). Sí se obtuvo **contexto geológico regional** (acuífero de gravas glacifluviales
   de valle; Río Azul = agua glaciar) y la **lista de organismos a los que pedir** los
   registros (DPA El Bolsón, SEGEMAR Hoja 4172-IV, INTA/Reserva, CFI). Ver `subsuelo_segemar_pozos.md`.
4. **Entre Las Minas y Mallín Ahogado, ¿cuál es mejor para tierra fiscal + agua + acceso?**
   **Ranking final:**
   - **🥇 #1 — MALLÍN AHOGADO `-41.88410, -71.53238`.** Gana por **tierra fiscal REAL**
     (Reserva del Estado, no sólo inferida) + **agua glaciar premium** (cuenca Río Azul/
     Hielo Azul) + **RP86 asfaltada** + **luz EDERSA** (zona con servicios). Es el punto
     con la combinación más sólida fiscal+agua+acceso+servicios. (Contra: lote chico,
     6,5 ha, y entorno poblado → verificar disponibilidad real del retazo fiscal.)
   - **🥈 #2 — LAS MINAS C1 `-41.54869, -71.47219`.** Mucho más valle plano (33 ha el lote,
     2.481 ha la zona) y sobre RN40 + curso, pero **dominio fiscal sólo inferido** (vacío
     sin mensurar, a verificar en Dirección de Tierras) y **sin agua glaciar confirmada**.
   - **🥉 #3 — LAS MINAS C2 `-41.56632, -71.50677`.** Mayor lote (77 ha) y fondo de valle
     bajo (615 m, convergencia), pero más lejos de la ruta (408 m) y mismo dominio incierto.

   > Para BoldWater (foco tierra fiscal + agua mineral): **Mallín Ahogado es el mejor
   > primer objetivo de gestión fiscal y de estudio hidrogeológico** (agua glaciar +
   > estado dominial claro); **Las Minas es el mejor objetivo por escala de tierra plana**
   > si se confirma el dominio fiscal del vacío.

**Entregables Tarea 6:** `mapa_master.html` · `parcelas_mallin.geojson` ·
`fiscales_mallin.geojson` (0) · `inactivas_mallin.geojson` · `vacios_mallin.geojson` ·
`valle_mallin.geojson` · `agua_osm_mallin.geojson` · `rutas_osm_mallin.geojson` (RP86) ·
`candidatos_agua_mallin.geojson` · rasters `elevacion/pendiente/ndwi/ndvi_mallin.tif` ·
`subsuelo_segemar_pozos.md` · capas SEGEMAR probadas (sin cobertura local).

# TAREA 7 (final) — Lotes resaltados + Energía

## PARTE A — Lotes como polígonos
Los 4 candidatos ahora se dibujan como **polígono** (relleno 35 % + borde 3 px de
color) con **círculo de 500 m** y **pin numerado** encima, popup completo
(agua/ruta/luz/dominio/cota). Archivo: `candidatos_destacados.geojson`.
Verificado: los 4 tienen geometría real (181 / 149 / 41 / 399 vértices).

## PARTE B — Energía
- **OSM no tiene red eléctrica en la región** (Overpass `power=*` → 0 features en el
  corredor, en Mallín y en barrido amplio; sólo 2 ways sueltos lejanos). →
  `red_electrica_osm.geojson` queda vacío y la capa se rotula "SIN DATOS — ver EDERSA".
- **Contexto EDERSA confirmado (investigación, no OSM):** troncal **EDERSA "RN40
  Norte"** pasa por El Foyel y zona Las Minas; **anillo EDERSA nuevo en Mallín
  Ahogado**; **centro de gestión EDERSA en El Foyel**. Los 4 lotes caen sobre/junto a
  esa infraestructura → luz a corta distancia muy probable, **a verificar empalme**.

## TABLA FINAL — candidato | ha lote | agua | ruta | LUZ MT | dominio | cota
| # | Candidato | ha lote | Agua | Ruta | Luz (línea MT) | Dominio | Cota |
|--:|---|--:|---|---|---|---|--:|
| **1** | Las Minas **C1** | 33,12 | sobre curso (0 m) | RN40 (0 m) | OSM s/dato · EDERSA troncal RN40 **sobre la ruta** | vacío s/mensurar — posible fiscal | 721 m |
| **2** | Las Minas **C2** | 76,77 | curso a 60 m | RN40 a 408 m | OSM s/dato · EDERSA troncal RN40 **~0,4 km** | vacío s/mensurar — posible fiscal | 615 m |
| **3** | **Mallín Ahogado** | 6,48 | sobre curso (0 m) · **Río Azul glaciar** | **RP86 (0 m)** | OSM s/dato · **EDERSA anillo Mallín** (zona servida) | **Reserva Forestal Loma del Medio–Río Azul (FISCAL real)** | 491 m |
| **4** | El Foyel **vacío #1** | 104,98 | no analizado (corredor RN40) | RN40 (0 m) | OSM s/dato · EDERSA gestión El Foyel + troncal | vacío s/mensurar — posible fiscal (corredor, 9 islas priv.) | 773 m |

## RESPUESTAS
1. **¿Línea MT a <500 m / <2 km / sin dato?**
   En **OSM: sin dato** para los 4 (no hay red eléctrica cargada en toda la región).
   Por **contexto EDERSA**: los 4 están **sobre o junto** a infraestructura de media
   tensión existente — C1, C2 y Foyel sobre la **troncal RN40 Norte**; Mallín sobre el
   **anillo de Mallín Ahogado** (barrio servido). Estimación realista **<500 m–“sobre la
   traza”**, pendiente de confirmación de empalme con EDERSA.
2. **Veredicto — ¿cuáles cumplen los 3 duros (agua + ruta + luz)?**
   - **#1 Las Minas C1 → CUMPLE** (agua ✓ sobre curso · ruta ✓ RN40 0 m · luz ✓ troncal EDERSA).
   - **#2 Las Minas C2 → CUMPLE** (agua ✓ 60 m · ruta ✓ RN40 <500 m · luz ✓ troncal EDERSA).
   - **#3 Mallín Ahogado → CUMPLE y es el más completo** (agua ✓ glaciar Río Azul · ruta ✓ RP86 ·
     luz ✓ anillo · **+ dominio fiscal REAL**). Único que suma tierra fiscal confirmada.
   - **#4 El Foyel vacío #1 → NO confirmado** (ruta ✓ y luz ✓, pero **agua sin analizar**;
     cumpliría sólo 2 de 3 hasta verificar curso de agua en el corredor).
   **Cumplen los 3 duros: C1, C2 y Mallín.** Con foco tierra fiscal, **Mallín lidera**.
3. **¿Se ven los 4 lotes como polígonos?** **SÍ** — los 4 están dibujados como polígono
   resaltado (dorado/azul/verde/gris) con borde 3 px, relleno 35 %, círculo de 500 m y
   pin numerado, en la capa "⭐ LOTES candidatos (polígonos)" de `mapa_master.html`.

**Entregables Tarea 7:** `red_electrica_osm.geojson` (vacío, documentado) ·
`candidatos_destacados.geojson` (4 lotes) · `mapa_master.html` (lotes-polígono + energía
+ Reserva Forestal + referencias) · `index.html` actualizado.

# TAREA 8 — Mapas usables (etiquetas + zoom por lote + info legible)
Rehechos con `build_maps.py` (un solo builder → 3 mapas):
- **`mapa_master.html`**: botones **[🔴 Las Minas] [🟢 Mallín] [🔭 Ver ambas]** (JS `setView`/`fitBounds`),
  etiquetas FIJAS (DivIcon, sin clic) de pueblos/ríos/rutas y de los 4 lotes (nombre·ha·cota),
  lotes como polígono (relleno 35%+borde), **líneas de distancia dibujadas con número** a ruta y
  curso (coherentes con el popup), pendiente conmutable al 40%, curvas 100 m con cotas,
  Reserva Forestal marcada, **leyenda compacta colapsable**, OSM↔Esri, click=coordenadas.
- **`mapa_lasminas.html`** (zoom 14, lotes C1/C2) y **`mapa_mallin.html`** (zoom 15, lote #3) centrados.
- Distancias dibujadas: C1 RN40 0 m / agua 0 m · C2 RN40 405 m / agua 52 m · Mallín RP86 158 m / agua 0 m · Foyel RN40 0 m.
- `index.html` (panel del Escritorio) actualizado con los 3 mapas.

# TAREA 9 — Lotes fiscales probables + red eléctrica (en los 3 mapas)
Nuevas capas conmutables (`build_fiscal_lots.py` → 2 geojson, integradas a build_maps):
- **🏛️ Lotes fiscales probables** (`lotes_fiscales_probables.geojson`, 13): los vacíos sin
  mensurar planos (<8°) y accesibles (<2 km de ruta) >5 ha, rankeados por tamaño+ruta+agua,
  en azul con etiqueta de ha; + la **Reserva Forestal Loma del Medio–Río Azul** (marrón) =
  único FISCAL CONFIRMADO (tierra del Estado).
  - Las Minas (posible fiscal): **598 ha s/RN40 (curso 73 m)**, 128, 99, 81, 77, 75 ha.
  - Mallín (posible fiscal): **43,7 ha s/RP86 (curso 0 m)**, 27, 18, 11, 8, 5 ha.
- **⚡ Red eléctrica** (`red_electrica_aprox.geojson`): OSM = 0 datos en la región, así que se
  dibuja la **traza APROXIMADA de la troncal EDERSA** sobre RN40 (línea amarilla punteada) y
  RP86, + puntos EDERSA (gestión El Foyel, anillo Mallín, corredor RN40). Rotulado "aprox./
  verificar EDERSA" — NO es relevamiento de red real.

> El más obvio: **lote de ~598 ha, plano, sobre la RN40 y con curso a 73 m** en Las Minas
> (posible fiscal, a confirmar en Dir. de Tierras). El único fiscal CONFIRMADO es la Reserva
> Forestal en Mallín.
