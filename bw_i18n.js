/* Bold Water — motor de internacionalización ES/EN (i18n).
 * Sitio 100% estático (GitHub Pages): la detección de país se hace en el
 * navegador por geo-IP; si el visitante entra desde una IP de EE.UU. el sitio
 * arranca en inglés. Siempre hay un toggle manual ES | EN que persiste.
 *
 * Cómo funciona
 * -------------
 *  - Idioma = override manual guardado (localStorage 'bw_lang')  ->  si no,
 *    resultado de geo-IP cacheado (sessionStorage 'bw_geo')  ->  si no, fetch
 *    a una API gratuita; país == 'US'  =>  'en', si no 'es'.
 *  - Traducción en runtime: recorre los nodos de texto y atributos y aplica un
 *    diccionario (match exacto para textos fijos + sustitución de frases para
 *    los textos dinámicos de los mapas). Un MutationObserver reaplica sobre el
 *    DOM que los mapas agregan al vuelo (popups, paneles).
 *  - Páginas largas (RESUMEN) usan una gemela en inglés: si el idioma resuelto
 *    no coincide con el de la página y existe una gemela, redirige.
 *
 * Configuración opcional por página (definir ANTES de cargar este script):
 *    window.BW_PAGE_LANG = 'en';                 // esta página YA está en inglés
 *    window.BW_TWIN = { en:'RESUMEN.en.html' };  // gemela para el idioma dado
 */
(function () {
  "use strict";
  var LS = "bw_lang", SS = "bw_geo";
  var pageLang = (window.BW_PAGE_LANG || document.documentElement.lang || "es").slice(0, 2);
  var twin = window.BW_TWIN || {};

  /* ---------- diccionario ES -> EN ------------------------------------ */
  // Coincidencia EXACTA (nodo/atributo completo, sin espacios laterales).
  var EXACT = {
    // -- portada (index) --
    "Bold Water": "Bold Water",
    "· Scouting de fuente · Río Negro": "· Water-source scouting · Río Negro",
    "Scouting de fuente — Bariloche / El Bolsón": "Water-source scouting — Bariloche / El Bolsón",
    "⭐ Candidatos — acceso directo (click = ir al mapa)": "⭐ Candidates — direct access (click = go to map)",
    "⭐ Ver todos los candidatos — acceso directo al mapa": "⭐ See all candidates — direct link to the map",
    "🏔️ Presentación — Vista 3D + Street View": "🏔️ Presentation — 3D view + Street View",
    "🛣️ Street View — punto de ruta más cercano a cada lote (abre en Google Maps)":
      "🛣️ Street View — nearest road point to each parcel (opens in Google Maps)",
    "🗺️ Mapas interactivos": "🗺️ Interactive maps",
    "📄 Informe": "📄 Report",
    "🛰️ Rasters / análisis (Las Minas)": "🛰️ Rasters / analysis (Las Minas)",
    "📂 Datos (GeoJSON / GeoTIFF)": "📂 Data (GeoJSON / GeoTIFF)",
    "📋 RESUMEN completo (HTML)": "📋 Full REPORT (HTML)",
    "📝 RESUMEN.md (texto)": "📝 REPORT.md (raw text)",
    "Las 3 zonas, vacíos fiscales, altimetría, señales de agua y respuestas. Versión legible.":
      "The 3 zones, state-land gaps, elevation, water signals and answers. Readable version.",
    "Mismo informe en Markdown crudo.": "Same report in raw Markdown.",
    "🏔️ Vista 3D del valle — volá sobre el terreno": "🏔️ 3D view of the valley — fly over the terrain",
    "🌎 Ver todo": "🌎 View all",
    "🗺️ Mapa 2D": "🗺️ 2D map",
    "← Volver": "← Back",
    // -- KPIs / hero --
    "Las Minas: vacío fiscal 8.831 ha": "Las Minas: state-land gap 8,831 ha",
    "Valle <8° usable: 2.481 ha": "Usable valley <8°: 2,481 ha",
    "489 ha a <500 m de RN40": "489 ha within <500 m of RN40",
    "Mejor punto agua: -41.54869, -71.47219": "Best water point: -41.54869, -71.47219",
    // -- leyenda / referencias / botones de mapa --
    "Leyenda": "Legend", "Referencias": "Legend", "Análisis": "Analysis",
    "Ver ambas": "View both", "Ver en 3D": "View in 3D", "Mapa OSM": "OSM map",
    "Las Minas — leyenda": "Las Minas — legend", "Mallín — leyenda": "Mallín — legend",
    "Santo Tomás (análisis)": "Santo Tomás (analysis)",
    "Rutas": "Roads", "Rutas RN40 / RP86": "Roads RN40 / RP86",
    "Ruta Nacional": "National route", "RN237 (a Neuquén)": "RN237 (to Neuquén)",
    "Red eléctrica (traza EDERSA)": "Power grid (EDERSA route)",
    "Arroyos / captación": "Streams / intake", "Cursos · captación de agua": "Watercourses · water intake",
    "Captación de agua": "Water intake", "Punto prioritario de captación": "Priority intake point",
    "Vega sobre curso": "Wet meadow over watercourse", "Vega": "Wet meadow", "NDVI (vega)": "NDVI (wet meadow)",
    "Vertiente / manantial (OSM)": "Spring (OSM)", "Vertientes (agua mineral)": "Springs (mineral water)",
    "Acuífero": "Aquifer", "Señal": "Signal",
    // -- clases de dominio / fiscal --
    "Tierra fiscal": "State-owned land", "Tierra fiscal / vacíos": "State-owned land / gaps",
    "Tierra fiscal provincial": "Provincial state-owned land", "Fiscal": "State-owned",
    "Fiscal provincial": "Provincial state land", "Mejores lotes fiscales": "Best state-owned parcels",
    "Lotes fiscales probables": "Probable state-owned parcels", "Fiscal pendiente <8°": "State land, slope <8°",
    "FISCAL CONFIRMADO ✓": "STATE-OWNED CONFIRMED ✓", "FISCAL CONFIRMADO — Reserva del Estado": "STATE-OWNED CONFIRMED — State Reserve",
    "Reserva Forestal — fiscal confirmado": "Forest Reserve — state-owned confirmed",
    "Reserva Forestal — fiscal real": "Forest Reserve — real state land",
    "Reserva Forestal (fiscal real)": "Forest Reserve (real state land)",
    "Reserva Forestal Loma del Medio–Río Azul (FISCAL real)": "Loma del Medio–Río Azul Forest Reserve (real STATE land)",
    "Reserva Nacional Nahuel Huapi (APN)": "Nahuel Huapi National Reserve (APN)",
    "Posible fiscal (sin mensurar)": "Possible state land (unsurveyed)",
    "Posible fiscal — tierra sin mensurar": "Possible state land — unsurveyed",
    "Vacío sin mensurar (proxy fiscal)": "Unsurveyed gap (state-land proxy)",
    "Privado (con dueño)": "Private (owned)",
    "Marrón = fiscal seguro · Azul = posible fiscal (verificar) · Gris = privado":
      "Brown = confirmed state land · Blue = possible state land (verify) · Gray = private",
    "Candidato prioritario": "Priority candidate",
    // -- claves de popup (tarjetas) --
    "Zona": "Zone", "Superficie": "Area", "Dominio": "Ownership", "Cota": "Elevation",
    "Lote": "Parcel", "Parcela": "Parcel", "A curso": "To watercourse", "A ruta": "To road",
    "Pozo objetivo — mejor agua (O#)": "Target well — best water (O#)",
    "Pozo objetivo — tierra fiscal (P#)": "Target well — state-owned land (P#)",
    "Pozo objetivo O# (mejor agua)": "Target well O# (best water)",
    "Pozo objetivo P# (tierra fiscal)": "Target well P# (state-owned land)",
    "Objetivos de perforación: O# (mejor agua) + F# (tierra fiscal/vacío).":
      "Drilling targets: O# (best water) + F# (state-owned land/gap).",
    // -- subtítulos / hints de mapas --
    "Acercá el zoom para ver el detalle de cada lote · click = coordenadas · capas ▸ arriba dcha":
      "Zoom in to see each parcel in detail · click = coordinates · layers ▸ top right",
    "Altimetría: relieve sombreado hipsométrico (terrain colormap + hillshade).":
      "Elevation: hypsometric shaded relief (terrain colormap + hillshade).",
    "Altimetría: relieve sombreado hipsométrico de Mallín.": "Elevation: hypsometric shaded relief of Mallín.",
    // -- hint del 3D --
    "Cargando terreno 3D del valle…": "Loading 3D terrain of the valley…",
    "Volver al panel": "Back to dashboard",
    // -- pie de página --
    "Enlaces sueltos también en": "Individual links also in",
    "🟢 fiscal confirmado · 🔵 posible fiscal (vacío sin mensurar) · 🟤 dominio en litigio. Click en cualquier candidato abre el mapa centrado en el lote.":
      "🟢 confirmed state land · 🔵 possible state land (unsurveyed gap) · 🟤 title in litigation. Clicking any candidate opens the map centered on the parcel.",
    "Fuentes: Catastro ARTRN (ArcGIS) · Copernicus GLO-30 (AWS) · OpenStreetMap (Overpass) · Sentinel-2 L2A (STAC Element84).":
      "Sources: ARTRN Cadastre (ArcGIS) · Copernicus GLO-30 (AWS) · OpenStreetMap (Overpass) · Sentinel-2 L2A (STAC Element84).",
    "🌎 Ver todo el corredor": "🌎 View the whole corridor",
    // -- tarjetas de mapas (portada) --
    "🛣️ Corredor RN40 + RN237 → Santo Tomás (NQN)": "🛣️ RN40 + RN237 corridor → Santo Tomás (NQN)",
    "⭐ Santo Tomás — Agua MINERAL + tierra fiscal (Neuquén)": "⭐ Santo Tomás — MINERAL water + state-owned land (Neuquén)",
    "💧 Prospección de vertientes — Mallín Ahogado": "💧 Spring prospecting — Mallín Ahogado",
    "⭐ MAPA MASTER — Las Minas + Mallín (con botones de vista)": "⭐ MASTER MAP — Las Minas + Mallín (with view buttons)",
    "🔴 Mapa Las Minas (zoom cerca)": "🔴 Las Minas map (close zoom)",
    "🟢 Mapa Mallín Ahogado (zoom cerca)": "🟢 Mallín Ahogado map (close zoom)",
    "🗺️ Mapa AGUA + Altimetría — Arroyo Las Minas": "🗺️ WATER + elevation map — Arroyo Las Minas",
    "🗺️ Mapa Candidatos / Vacíos — Las Minas": "🗺️ Candidates / Gaps map — Las Minas",
    "🗺️ Mapa Vacíos — El Foyel": "🗺️ Gaps map — El Foyel",
    "📋 RESUMEN completo (HTML)": "📋 Full REPORT (HTML)",
    "Todo el tramo de la RN40 y la RN237 desde El Bolsón hasta Santo Tomás (Collón Curá, Neuquén), con el empalme RN40/RN237 marcado y las zonas de estudio de Río Negro como referencia.":
      "The whole RN40 and RN237 stretch from El Bolsón to Santo Tomás (Collón Curá, Neuquén), with the RN40/RN237 junction marked and the Río Negro study zones for reference.",
    "Modelo de surgencias: vega (NDVI alto) al pie de ladera (quiebre de pendiente). 281 zonas probables sobre 1.886 ha de vega alimentada por napa. Puntos para verificar en campo.":
      "Spring-emergence model: wet meadow (high NDVI) at the foot of the slope (slope break). 281 probable zones over 1,886 ha of water-table-fed wet meadow. Points to verify in the field.",
    "Mapa único de trabajo: botones [Las Minas][Mallín][Ver ambas], etiquetas fijas de pueblos/ríos/rutas, los 4 lotes como polígono con cota y distancias dibujadas a ruta/agua. Leyenda compacta. Foco tierra fiscal.":
      "Single working map: [Las Minas][Mallín][View both] buttons, fixed labels for towns/rivers/roads, the 4 parcels as polygons with elevation and drawn distances to road/water. Compact legend. Focus on state-owned land.",
    "Centrado en Las Minas (zoom 14): lotes C1/C2 con distancias, valle<8°, cursos, RN40, curvas 100 m.":
      "Centered on Las Minas (zoom 14): parcels C1/C2 with distances, valley <8°, watercourses, RN40, 100 m contours.",
    "Centrado en Mallín (zoom 15): lote #3, Reserva Forestal fiscal, Río Azul, RP86, parcelas, curvas 100 m.":
      "Centered on Mallín (zoom 15): parcel #3, state Forest Reserve, Río Azul, RP86, parcels, 100 m contours.",
    "Tarea 4. Valle <8°, ladera >15°, vegas/NDVI, NDWI, cursos, RN40, curvas y candidatos de agua rankeados. Click = coordenadas.":
      "Task 4. Valley <8°, hillside >15°, wet meadows/NDVI, NDWI, watercourses, RN40, contours and ranked water candidates. Click = coordinates.",
    "Tarea 3. Vacío fiscal 8.831 ha, parcelas, curvas de nivel, RN40, lagos.":
      "Task 3. State-land gap 8,831 ha, parcels, contour lines, RN40, lakes.",
    "Tareas 1–2. 186 parcelas, 7 vacíos fiscales, RN40, Área Natural Protegida.":
      "Tasks 1–2. 186 parcels, 7 state-land gaps, RN40, Protected Natural Area.",
    "Enlaces sueltos también en <a href=\"streetview_links.md\">streetview_links.md</a>. La verificación por API de metadata de Street View requiere key (omitida); Google ajusta el panorama al más cercano disponible.":
      "Individual links also in streetview_links.md. Street View metadata API verification requires a key (omitted); Google snaps the panorama to the nearest available.",
    "La verificación por API de metadata de Street View requiere key (omitida); Google ajusta el panorama al más cercano disponible.":
      "Street View metadata API verification requires a key (omitted); Google snaps the panorama to the nearest available.",
    "Elevación (Copernicus GLO-30)": "Elevation (Copernicus GLO-30)",
    "Pendiente (verde<8° · rojo>15°)": "Slope (green <8° · red >15°)",
    "NDVI verano 25-ene-2024 (vegas/bosque)": "NDVI summer 25-Jan-2024 (wet meadows/forest)",
    "NDWI (agua superficial)": "NDWI (surface water)",
    "Lotes fiscales + Energía": "State-owned parcels + Power",
    "El Bolsón": "El Bolsón",
    "Los Repollos": "Los Repollos"
  };

  // Sustitución de FRASES (para textos dinámicos: "… 76,8 ha · posible fiscal").
  // Se aplican en orden, sobre el texto ya pasado por EXACT si no hubo match.
  // Ordenar de más larga/específica a más corta para no romper coincidencias.
  var PHRASES = [
    ["posible fiscal", "possible state land"],
    ["ex-fiscal en litigio", "former state land in litigation"],
    ["FISCAL real (Reserva Forestal)", "real STATE land (Forest Reserve)"],
    ["FISCAL provincial (Neuquén)", "provincial STATE land (Neuquén)"],
    ["FISCAL real", "real STATE land"],
    ["tierra fiscal", "state-owned land"],
    ["Tierra fiscal", "State-owned land"],
    ["cuenca Río Azul (glaciar)", "Río Azul basin (glacier)"],
    ["sobre curso", "on watercourse"],
    ["curso a", "watercourse at"],
    ["Reserva Forestal", "Forest Reserve"],
    ["9 islas privadas", "9 private enclaves"],
    ["corredor RN40", "RN40 corridor"],
    ["Verificar en Dir. de Tierras de Río Negro", "Verify with the Río Negro Land Office"],
    ["verificar en Dir. de Tierras", "verify with the Land Office"],
    ["del lote", "from the parcel"],
    ["Street View sobre", "Street View on"],
    ["punto más cercano", "nearest point"],
    ["disponible", "available"]
  ];

  function tr(s) {
    var key = s.replace(/\s+/g, " ").trim();
    if (!key) return s;
    if (EXACT.hasOwnProperty(key)) {
      // preservar espacios laterales del original
      var lead = s.match(/^\s*/)[0], tail = s.match(/\s*$/)[0];
      return lead + EXACT[key] + tail;
    }
    var out = s, hit = false;
    for (var i = 0; i < PHRASES.length; i++) {
      if (out.indexOf(PHRASES[i][0]) !== -1) {
        out = out.split(PHRASES[i][0]).join(PHRASES[i][1]);
        hit = true;
      }
    }
    return hit ? out : s;
  }

  /* ---------- aplicar / restaurar traducción -------------------------- */
  var TEXT_ATTRS = ["title", "placeholder", "aria-label", "alt"];
  function walk(root, toEN) {
    // nodos de texto
    var it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false), n;
    while ((n = it.nextNode())) {
      if (n.parentNode && /^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) continue;
      if (toEN) {
        if (n.__bw_es == null) n.__bw_es = n.nodeValue;
        var t = tr(n.__bw_es);
        if (t !== n.nodeValue) n.nodeValue = t;
      } else if (n.__bw_es != null) {
        n.nodeValue = n.__bw_es;
      }
    }
    // atributos
    var els = root.querySelectorAll ? root.querySelectorAll("*") : [];
    for (var e = 0; e < els.length; e++) {
      for (var a = 0; a < TEXT_ATTRS.length; a++) {
        var at = TEXT_ATTRS[a];
        if (!els[e].hasAttribute(at)) continue;
        var store = "__bw_" + at;
        if (toEN) {
          if (els[e][store] == null) els[e][store] = els[e].getAttribute(at);
          var v = tr(els[e][store]);
          if (v !== els[e].getAttribute(at)) els[e].setAttribute(at, v);
        } else if (els[e][store] != null) {
          els[e].setAttribute(at, els[e][store]);
        }
      }
    }
  }

  var current = pageLang, observer = null;
  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;
    // ¿hay que saltar a la gemela?
    if (lang !== pageLang && twin[lang]) { location.replace(twin[lang]); return; }
    var toEN = (lang === "en" && pageLang === "es");
    walk(document.body, toEN);
    if (toEN && !observer) {
      observer = new MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          for (var j = 0; j < muts[i].addedNodes.length; j++) {
            var nd = muts[i].addedNodes[j];
            if (nd.nodeType === 1) walk(nd, true);
            else if (nd.nodeType === 3 && nd.parentNode) walk(nd.parentNode, true);
          }
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
    if (!toEN && observer) { observer.disconnect(); observer = null; }
    if (EXACT[document.title.trim()]) document.title = EXACT[document.title.trim()];
    setToggle(lang);
  }

  /* ---------- toggle flotante ES | EN --------------------------------- */
  var toggleEl = null;
  function buildToggle() {
    var box = document.createElement("div");
    box.id = "bw-lang";
    box.setAttribute("style",
      "position:fixed;top:8px;left:50%;transform:translateX(-50%);z-index:2147483000;" +
      "display:flex;gap:2px;background:rgba(17,28,38,.9);border:1px solid rgba(255,255,255,.18);" +
      "border-radius:20px;padding:3px;box-shadow:0 2px 10px rgba(0,0,0,.3);" +
      "font:700 12px system-ui,-apple-system,Segoe UI,Roboto,sans-serif");
    ["es", "en"].forEach(function (lg) {
      var b = document.createElement("button");
      b.type = "button"; b.dataset.lg = lg; b.textContent = lg.toUpperCase();
      b.setAttribute("style",
        "cursor:pointer;border:0;border-radius:16px;padding:4px 12px;color:#dfe7ee;" +
        "background:transparent;font:inherit;transition:.15s");
      b.onclick = function () { try { localStorage.setItem(LS, lg); } catch (e) {} apply(lg); };
      box.appendChild(b);
    });
    (document.body || document.documentElement).appendChild(box);
    toggleEl = box;
  }
  function setToggle(lang) {
    if (!toggleEl) return;
    var bs = toggleEl.querySelectorAll("button");
    for (var i = 0; i < bs.length; i++) {
      var on = bs[i].dataset.lg === lang;
      bs[i].style.background = on ? "#1f8fd0" : "transparent";
      bs[i].style.color = on ? "#fff" : "#dfe7ee";
    }
  }

  /* ---------- resolución de idioma (manual -> geo-IP) ----------------- */
  function geoResolve(cb) {
    var done = false, finish = function (lang) { if (!done) { done = true; cb(lang); } };
    var t = setTimeout(function () { finish("es"); }, 3500); // no bloquear si la API tarda
    fetch("https://ipapi.co/country/", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
      .then(function (c) { clearTimeout(t); finish(c.trim().toUpperCase() === "US" ? "en" : "es"); })
      .catch(function () {
        fetch("https://ipwho.is/?fields=country_code", { cache: "no-store" })
          .then(function (r) { return r.json(); })
          .then(function (j) { clearTimeout(t); finish((j.country_code || "").toUpperCase() === "US" ? "en" : "es"); })
          .catch(function () { clearTimeout(t); finish("es"); });
      });
  }

  function start() {
    buildToggle();
    var manual = null; try { manual = localStorage.getItem(LS); } catch (e) {}
    if (manual === "es" || manual === "en") { apply(manual); return; }
    var geo = null; try { geo = sessionStorage.getItem(SS); } catch (e) {}
    if (geo === "es" || geo === "en") { apply(geo); return; }
    apply(pageLang); // mostrar algo mientras resuelve
    geoResolve(function (lang) {
      try { sessionStorage.setItem(SS, lang); } catch (e) {}
      apply(lang);
    });
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", start);
  else start();
})();
