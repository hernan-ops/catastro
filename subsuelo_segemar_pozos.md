# PARTE B — Subsuelo / perforaciones / hidrogeología (Las Minas + Mallín)

**Objetivo:** datos reales de subsuelo cerca de los candidatos, sin perforar.
**Resultado corto:** la cartografía hidrogeológica vectorial pública **NO cubre** la
cordillera de Río Negro online; el dato fino de pozos hay que **pedirlo presencial**.
Lo que SÍ se consiguió es contexto geológico regional (citable) y las vías formales.

## 1. SEGEMAR — SIGAM (geoservicios probados)
Endpoints OGC vivos (verificados 30-jun-2026):
- WMS: `https://sigam.segemar.gov.ar/geoserver217/ows?SERVICE=WMS&REQUEST=GetCapabilities`
- WFS: `https://sigam.segemar.gov.ar/geoserver217/wfs?...`

Capas relevantes encontradas y su cobertura en NUESTRO bbox:
| Capa SEGEMAR | typeName | ¿cubre Las Minas/Mallín? |
|---|---|---|
| Unidad Hidrogeológica 250K | `250KUnidadHidrogeologica` (WMS) / `sigam:e250K_Unidadhidro` (WFS) | **NO** — sólo 8 polígonos en todo el país, todos en la **Pampa (BA, lat −33/−34)**. 0 features en Patagonia. |
| Unidad Geológica 250K | `sigam:e250K_UnidadGeologica` | **NO** — GetFeatureInfo "sin features" en los 3 puntos. Hoja no vectorizada. |
| Unidad Litológica 250K | `sigam:e250K_UnidadLitologica` | **NO** — 0 features en bbox (muestreo cae en Salta). |

→ La **Hoja Geológica 4172-IV San Carlos de Bariloche (1:250.000)** (cubre El Bolsón
y la zona) existe **sólo como PDF** en el repositorio SEGEMAR, no como capa WFS:
`https://repositorio.segemar.gob.ar/handle/308849217/174` (Giacosa & Heredia, 2002).
La capa WMS `250KUnidadHidrogeologica` se dejó igual como capa conmutable en
`mapa_master.html` (sale en blanco acá; útil si se navega a zonas con cobertura).

## 2. Perforaciones / pozos — qué hay y qué falta
| Fuente | Acceso | Dato de pozos en la zona |
|---|---|---|
| **DPA Río Negro** (dpa.rionegro.gov.ar) | Web institucional, **sin capa/REST de pozos abierta** | Registro de perforaciones existe pero **no online**: pedir por nota/expediente. |
| **SIAS** (Sistema Información Aguas Subterráneas, COHIFE) | Visor web `cohife.org/SIAS` | Base nacional de pozos, **sin API/descarga masiva abierta**; consulta puntual. |
| **IGN — Aguas subterráneas** | Story map IDE-IGN | Sólo cartografía general 1:M, sin pozos puntuales. |
| **Cooperativas locales** (CAPED / Coop. de agua El Bolsón, juntas de riego Mallín) | Presencial | Tienen datos de captaciones/pozos propios — vía contacto provincial de Hernán. |

**→ A PEDIR PRESENCIAL (lista para Hernán):**
1. **DPA Río Negro – Delegación El Bolsón/Bariloche:** registro de perforaciones y
   permisos de captación en el ejido Mallín Ahogado y paraje Las Minas/Río Villegas
   (profundidad, caudal, nivel freático, conductividad).
2. **SEGEMAR:** Hoja Hidrogeológica / Geofísica 4172-IV (si hay versión hidro) y
   datos de sondeos geoeléctricos previos.
3. **INTA / Reserva Forestal Loma del Medio–Río Azul:** estudios de suelo y agua
   (la Reserva administra parte del Mallín; tiene caracterización edáfica).
4. **CFI:** *"Suelos en el área de El Bolsón y Mallín Ahogado, RN"* (~15.000 ha
   mapeadas) — base edáfica/aptitud riego, descargable en biblioteca CFI.

## 3. Geología/hidrogeología regional (contexto cualitativo, fuentes públicas)
- **Relleno de valle:** los fondos de El Bolsón–Mallín Ahogado y del corredor de Las
  Minas/Río Villegas son **depósitos glacifluviales y aluviales cuaternarios**
  (gravas y arenas) sobre el **Batolito Patagónico** (granitoides cretácicos) y
  volcanitas. Las gravas de valle son el **acuífero libre somero** más probable y
  productivo; el basamento granítico sólo da agua por fracturas.
- **Recarga premium Mallín:** el **Río Azul nace en el glaciar Hielo Azul** → agua
  glaciar de baja mineralización; recarga directa al acuífero de gravas del valle.
- **Implicancia para el estudio de campo:** priorizar **sondeo eléctrico vertical
  (SEV)/TEM + perforación exploratoria en el relleno de gravas del fondo de valle**,
  cerca del curso, no sobre el granito de ladera.

> Reitero el alcance: esto define DÓNDE y QUÉ tipo de acuífero esperar. Caudal y
> composición ("agua mineral") sólo se confirman con perforación + aforo + análisis
> fisicoquímico de campo.
