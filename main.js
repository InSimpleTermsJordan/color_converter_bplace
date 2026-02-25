// =======================
//   Wplace Main Script
// =======================

/*
  [0,0,0],[60,60,60],[120,120,120],[170,170,170],[210,210,210],[255,255,255],
  [96,0,24],[165, 14, 30],[237,28,36],[250,128,114],[228,92,26],[255,127,39],[246,170,9],
  [249,221,59],[255,250,188],[156,132,49],[197,173,49],[232,212,95],[74,107,58],[90,148,74],[132,197,115],
  [14,185,104],[19,230,123],[135,255,94],[12,129,110][16,174,166],[19,225,190],[15,121,159],[96,247,242],
  [187,250,242],[40,80,158],[64,147,228],[125,199,255],[77,49,184],[107,80,246],[153,177,251],
  [74,66,132],[122,113,196],[181,174,241],[181, 174, 241],[170,56,185],[224,159,249],
  [203,0,122],[236,31,128],[243,141,169],[155,82,73],[209,128,120],[250,182,164],
  [104,70,52],[149,104,42],[219,164,99],[123,99,82],[156,132,107],[214,181,148],
  [209,128,81],[248,178,119],[255,197,165],[109,100,63],[148,140,107],[205,197,158],
  [51,57,65],[109,117,141],[179,185,209]
*/

// One canonical source of truth for all colors, in UI order:
const MASTER_PALETTE = [
// free
[253,206,206],[252,165,165],[239,68,68],[185,28,28],[127,29,29],
[255,229,194],[253,186,116],[249,115,22],[194,65,12],[124,45,18],
[254,247,175],[252,211,77],[234,179,8],[161,98,7],[113,63,18],
[203,251,220],[134,239,172],[34,197,94],[21,128,61],[20,83,45],
[189,223,255],[147,197,253],[59,130,246],[29,78,216],[30,58,138],
[204,216,255],[165,180,252],[99,102,241],[67,56,202],[49,46,129],
[219,211,253],[196,181,253],[139,92,246],[109,40,217],[76,29,146],
[250,214,239],[249,168,212],[236,72,153],[190,24,93],[131,24,67],
[243,244,246],[209,213,219],[107,114,128],[55,65,81],[17,24,39],
[255,255,255],[0,0,0],
// super-paid (50k)
[212,163,64],[154,154,154],[217,226,236],[43,59,51],
// regular paid (5k for 5)
[229,251,183],[190,242,100],[132,204,22],[77,124,15],[54,83,20],
[184,249,236],[94,234,212],[20,184,166],[15,118,110],[19,78,74],
[207,250,254],[103,232,249],[6,182,212],[14,116,144],[22,78,99],
[245,209,255],[240,171,252],[217,70,239],[162,28,175],[112,26,117],
[255,209,215],[253,164,175],[244,63,94],[190,18,60],[136,19,55],
[245,228,224],[232,195,186],[180,120,100],[136,84,58],[74,43,28],
[234,222,209],[220,195,174],[168,117,72],[127,82,41],[77,50,25],
[227,224,217],[205,201,191],[137,128,107],[100,92,73],[62,57,45]
];


// --- Color name mapping ---
const colorNames = {
  "253,206,206": "Pastel red",
  "252,165,165": "Light red",
  "239,68,68": "Red",
  "185,28,28": "Dark red",
  "127,29,29": "Deep red",
  "255,229,194": "Pastel orange",
  "253,186,116": "Light orange",
  "249,115,22": "Orange",
  "194,65,12": "Dark orange",
  "124,45,18": "Deep orange",
  "254,247,175": "Pastel yellow",
  "252,211,77": "Light yellow",
  "234,179,8": "Yellow",
  "161,98,7": "Dark yellow",
  "113,63,18": "Deep yellow",
  "203,251,220": "Pastel green",
  "134,239,172": "Light green",
  "34,197,94": "Green",
  "21,128,61": "Dark green",
  "20,83,45": "Deep green",
  "189,223,255": "Pastel blue",
  "147,197,253": "Light blue",
  "59,130,246": "Blue",
  "29,78,216": "Dark blue",
  "30,58,138": "Deep blue",
  "204,216,255": "Pastel indigo",
  "165,180,252": "Light indigo",
  "99,102,241": "Indigo",
  "67,56,202": "Dark indigo",
  "49,46,129": "Deep indigo",
  "219,211,253": "Pastel purple",
  "196,181,253": "Light purple",
  "139,92,246": "Purple",
  "109,40,217": "Dark purple",
  "76,29,146": "Deep purple",
  "250,214,239": "Pastel pink",
  "249,168,212": "Light pink",
  "236,72,153": "Pink",
  "190,24,93": "Dark Pink",
  "131,24,67": "Deep Pink",
  "243,244,246": "Pastel gray",
  "209,213,219": "Light gray",
  "107,114,128": "Gray",
  "55,65,81": "Dark gray",
  "17,24,39": "Deep gray",
  "255,255,255": "White",
  "0,0,0": "Black",
  "212,163,64": "Gold (average)",
  "154,154,154": "Silver (average)",
  "217,226,236": "Holographic (average)",
  "43,59,51": "Dark Holographic (average)",
  "229,251,183": "Pastel lime",
  "190,242,100": "Light lime",
  "132,204,22": "Lime",
  "77,124,15": "Dark lime",
  "54,83,20": "Deep lime",
  "184,249,236": "Pastel teal",
  "94,234,212": "Light teal",
  "20,184,166": "Teal",
  "15,118,110": "Dark teal",
  "19,78,74": "Deep teal",
  "207,250,254": "Pastel cyan",
  "103,232,249": "Light cyan",
  "6,182,212": "Cyan",
  "14,116,144": "Dark cyan",
  "22,78,99": "Deep cyan",
  "245,209,255": "Pastel fuchsia",
  "240,171,252": "Light fuchsia",
  "217,70,239": "Fuchsia",
  "162,28,175": "Dark fuchsia",
  "112,26,117": "Deep fuchsia",
  "255,209,215": "Pastel rose",
  "253,164,175": "Light rose",
  "244,63,94": "Rose",
  "190,18,60": "Dark rose",
  "136,19,55": "Deep rose",
  "245,228,224": "Pastel skin",
  "232,195,186": "Light skin",
  "180,120,100": "Skin",
  "136,84,58": "Dark skin",
  "74,43,28": "Deep skin",
  "234,222,209": "Pastel brown",
  "220,195,174": "Light brown",
  "168,117,72": "Brown",
  "127,82,41": "Dark brown",
  "77,50,25": "Deep brown",
  "227,224,217": "Pastel mud",
  "205,201,191": "Light mud",
  "137,128,107": "Mud",
  "100,92,73": "Dark mud",
  "62,57,45": "Deep mud"
};


// Used for displaying different colors in color list
const paidColors = new Set([
  "253,206,206",  // Pastel red
  "252,165,165",  // Light red
  "239,68,68",    // Red
  "185,28,28",    // Dark red
  "127,29,29",    // Deep red
  "255,229,194",  // Pastel orange
  "253,186,116",  // Light orange
  "249,115,22",   // Orange
  "194,65,12",    // Dark orange
  "124,45,18",    // Deep orange
  "254,247,175",  // Pastel yellow
  "252,211,77",   // Light yellow
  "234,179,8",    // Yellow
  "161,98,7",     // Dark yellow
  "113,63,18",    // Deep yellow
  "203,251,220",  // Pastel green
  "134,239,172",  // Light green
  "34,197,94",    // Green
  "21,128,61",    // Dark green
  "20,83,45",     // Deep green
  "189,223,255",  // Pastel blue
  "147,197,253",  // Light blue
  "59,130,246",   // Blue
  "29,78,216",    // Dark blue
  "30,58,138",    // Deep blue
  "204,216,255",  // Pastel indigo
  "165,180,252",  // Light indigo
  "99,102,241",   // Indigo
  "67,56,202",    // Dark indigo
  "49,46,129",    // Deep indigo
  "219,211,253",  // Pastel purple
  "196,181,253",  // Light purple
  "139,92,246",   // Purple
  "109,40,217",   // Dark purple
  "76,29,146",    // Deep purple
  "250,214,239",  // Pastel pink
  "249,168,212",  // Light pink
  "236,72,153",   // Pink
  "190,24,93",    // Dark Pink
  "131,24,67",    // Deep Pink
  "243,244,246",  // Pastel gray
  "209,213,219",  // Light gray
  "107,114,128",  // Gray
  "55,65,81",     // Dark gray
  "17,24,39",     // Deep gray
  "255,255,255",  // White
  "0,0,0",        // Black
  "212,163,64",   // Gold (average)
  "154,154,154",  // Silver (average)
  "217,226,236",  // Holographic (average)
  "43,59,51",     // Dark Holographic (average)
  "229,251,183",  // Pastel lime
  "190,242,100",  // Light lime
  "132,204,22",   // Lime
  "77,124,15",    // Dark lime
  "54,83,20",     // Deep lime
  "184,249,236",  // Pastel teal
  "94,234,212",   // Light teal
  "20,184,166",   // Teal
  "15,118,110",   // Dark teal
  "19,78,74",     // Deep teal
  "207,250,254",  // Pastel cyan
  "103,232,249",  // Light cyan
  "6,182,212",    // Cyan
  "14,116,144",   // Dark cyan
  "22,78,99",     // Deep cyan
  "245,209,255",  // Pastel fuchsia
  "240,171,252",  // Light fuchsia
  "217,70,239",   // Fuchsia
  "162,28,175",   // Dark fuchsia
  "112,26,117",   // Deep fuchsia
  "255,209,215",  // Pastel rose
  "253,164,175",  // Light rose
  "244,63,94",    // Rose
  "190,18,60",    // Dark rose
  "136,19,55",    // Deep rose
  "245,228,224",  // Pastel skin
  "232,195,186",  // Light skin
  "180,120,100",  // Skin
  "136,84,58",    // Dark skin
  "74,43,28",     // Deep skin
  "234,222,209",  // Pastel brown
  "220,195,174",  // Light brown
  "168,117,72",   // Brown
  "127,82,41",    // Dark brown
  "77,50,25",     // Deep brown
  "227,224,217",  // Pastel mud
  "205,201,191",  // Light mud
  "137,128,107",  // Mud
  "100,92,73",    // Dark mud
  "62,57,45",     // Deep mud
]);

function bindChipsToPalette() {
  const chips = Array.from(document.querySelectorAll('#colors-free .toggle-color, #colors-paid .toggle-color'));
  chips.forEach((btn, i) => {
    const rgb = MASTER_PALETTE[i];
    if (!rgb) return;
    btn.dataset.key = `${rgb[0]},${rgb[1]},${rgb[2]}`;
  });
}
if (document.readyState !== 'loading') bindChipsToPalette();
else document.addEventListener('DOMContentLoaded', bindChipsToPalette);

// Utility: clamp zoom to a reasonable range
const widthInput  = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');

let padrao = [];

function rgbFromChip(btn) {
  const key = btn?.dataset?.key;
  if (!key) return null;
  const parts = key.split(',').map(n => +n);
  return (parts.length === 3 && parts.every(Number.isFinite)) ? parts : null;
}

function updatePadraoFromActiveButtons() {
  padrao = [];
  const activeButtons = document.querySelectorAll(
    '#colors-free .toggle-color.active, #colors-paid .toggle-color.active'
  );

  activeButtons.forEach(btn => {
    const rgb = rgbFromChip(btn);
    if (rgb) padrao.push(rgb);
  });

  // Update paid colors total cost
  updatePaidColorsTotalCost();

  if (originalImage) {
    reprocessWithCurrentPalette();
  }
}

// Update paid colors total cost
// TODO: rewrite to deal with different costs
function updatePaidColorsTotalCost() {
  const activePaidButtons = document.querySelectorAll('#colors-paid .toggle-color.active');
  const totalPaidColors = activePaidButtons.length;
  const costPerColor = 240000 / 44; // average price, highly thrown off by the four Chromas Georg colors
  const totalCost = totalPaidColors * costPerColor;

  const costElement = document.getElementById('paid-total-cost');
  if (costElement) {
    if (totalPaidColors > 0) {
      costElement.textContent = `(${totalCost.toLocaleString()}💧*)`;
    } else {
      costElement.textContent = '';
    }
  }
}

const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });
const downloadLink = document.getElementById('download');

// Clipboard
document.getElementById('clipboard').addEventListener('click', async function () {
  // Prefer processedCanvas; fallback to main canvas if needed
  const c = finalizeToPalette();


  const lang = (typeof getCurrentLang === 'function' ? getCurrentLang() : 'en');
  const t = (typeof translations !== 'undefined' && translations[lang]) || {};

  if (!c || !c.width || !c.height) {
    showToast(t.imageNotFound || "No image loaded.", "error");
    return;
  }

  // Don't copy if fully transparent
  const empty = (typeof canvasIsEmpty === 'function')
    ? canvasIsEmpty(c)
    : (() => {
        const ctx = c.getContext('2d');
        const data = ctx.getImageData(0, 0, c.width, c.height).data;
        for (let i = 3; i < data.length; i += 4) if (data[i] !== 0) return false;
        return true;
      })();

  if (empty) {
    showToast(t.imageNotFound || "No image loaded.", "error");
    return;
  }

  const doCopy = (blob) => {
    if (!blob) { showToast(t.copyFailed || "Copy failed.", "error"); return; }
    navigator.clipboard.write([ new ClipboardItem({ 'image/png': blob }) ])
      .then(() => showToast(t.copiedClipboard || "Copied to clipboard!", "success"))
      .catch(() => showToast(t.copyFailed || "Copy failed.", "error"));
  };

  if (c.toBlob) {
    c.toBlob(doCopy, 'image/png');
  } else {
    // Fallback for older browsers
    const dataURL = c.toDataURL('image/png');
    const b64 = dataURL.split(',')[1] || "";
    const bin = atob(b64);
    const u8  = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    doCopy(new Blob([u8], { type: 'image/png' }));
  }
});

// Draw the *processed* image into the already-sized visible canvas,
// without changing canvas width/height or reading layout.
function repaintPreviewSameSize() {
  const src = processedCanvas || canvas;
  if (!src || !canvas) return;
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(src, 0, 0, src.width, src.height, 0, 0, w, h);
}

function resetVisibleToScaled() {
  if (!scaledCanvas) return;
  canvas.width  = scaledCanvas.width;
  canvas.height = scaledCanvas.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(scaledCanvas, 0, 0);
}

// Handle paste events to allow image pasting
document.addEventListener('paste', function (event) {
  if (!event.clipboardData) return;
  const items = event.clipboardData.items;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
      const file = items[i].getAsFile();
      if (file) {
        const reader = new FileReader();
        reader.onload = function (evt) {
          const img = new Image();
          img.onload = function () {
            originalImage = img;
            currentImageWidth = img.width;
            currentImageHeight = img.height;
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            processarImagem();
            showImageInfo(currentImageWidth, currentImageHeight);
          };
          img.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
      event.preventDefault();
      break;
    }
  }
});

// Function to find the closest color in the pattern
function corMaisProxima(r, g, b) {
  let menorDist = Infinity;
  let cor = [0, 0, 0];
  for (let i = 0; i < padrao.length; i++) {
    const [pr, pg, pb] = padrao[i];
    //const dist = Math.sqrt((pr - r) ** 2 + (pg - g) ** 2 + (pb - b) ** 2);
    //https://www.compuphase.com/cmetric.htm#:~:text=A%20low%2Dcost%20approximation
    const rmean = (pr + r) / 2;
    const rdiff = pr - r;
    const gdiff = pg - g;
    const bdiff = pb - b;
    const x = (512 + rmean) * rdiff * rdiff >> 8;
    const y = 4 * gdiff * gdiff;
    const z = (767 - rmean) * bdiff * bdiff >> 8;
    const dist = Math.sqrt(x + y + z);
    if (dist < menorDist) {
      menorDist = dist;
      cor = [pr, pg, pb];
    }
  }
  return cor;
}

function hardClampToPalette(c, palette) {
  if (!c) return;
  const ctx = c.getContext('2d');
  const img = ctx.getImageData(0, 0, c.width, c.height);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i+3] === 0) continue; // skip transparent
    const [nr, ng, nb] = corMaisProxima(d[i], d[i+1], d[i+2]);
    d[i] = nr; d[i+1] = ng; d[i+2] = nb; d[i+3] = 255;
  }
  ctx.putImageData(img, 0, 0);
}

function finalizeToPalette() {
  // ensure processedCanvas exists
  if (!processedCanvas) {
    processedCanvas = document.createElement('canvas');
    processedCtx = processedCanvas.getContext('2d', { willReadFrequently: true });
    processedCanvas.width  = canvas.width;
    processedCanvas.height = canvas.height;
    processedCtx.drawImage(canvas, 0, 0);
  }

  // clamp everything to palette and zero RGB for transparent pixels
  const pctx = processedCanvas.getContext('2d');
  const img  = pctx.getImageData(0, 0, processedCanvas.width, processedCanvas.height);
  const d    = img.data;

  for (let i = 0; i < d.length; i += 4) {
    if (d[i+3] === 0) {          // fully transparent -> zero RGB
      d[i] = d[i+1] = d[i+2] = 0;
      continue;
    }
    const [nr, ng, nb] = corMaisProxima(d[i], d[i+1], d[i+2]);
    d[i]   = nr;
    d[i+1] = ng;
    d[i+2] = nb;
    d[i+3] = 255;
  }

  pctx.putImageData(img, 0, 0);
  return processedCanvas;
}

// Global variables for image size
let currentImageWidth = null;
let currentImageHeight = null;
let fileName = "";

// --- Make Home honor ?lang=xx on load and sync UI ---
(function ensureLangFromURL() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && window.setCurrentLang) {
    // setCurrentLang persists to localStorage, sets <html lang>, and decorates links
    window.setCurrentLang(q);
  } else if (window.initLang) {
    // fall back to normal init (reads localStorage / <html lang>)
    window.initLang();
  }
  // apply translations right away
  window.applyTranslations?.(document);

  // sync both selectors to the active lang
  const lang = (window.getCurrentLang && window.getCurrentLang()) || "en";
  ["lang-select", "lang-select-menu"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = lang;
    el?.addEventListener("change", (e) => {
      window.setCurrentLang(e.target.value);
      window.applyTranslations?.(document);
    });
  });
})();

// Dithering helper function
function clampByte(v){ return v < 0 ? 0 : v > 255 ? 255 : v; }

function processWithFloydSteinberg(ctx, palette, transparentHideActive) {
  const w = canvas.width, h = canvas.height;
  const img = ctx.getImageData(0, 0, w, h);
  const d  = img.data;

  // float buffer to carry diffusion error
  const buf = new Float32Array(d.length);
  for (let i = 0; i < d.length; i++) buf[i] = d[i];

  const colorCounts = {};

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;

      let r = buf[idx], g = buf[idx+1], b = buf[idx+2], a = buf[idx+3];

      // Handle semi‑transparent input pixels
      if (a < 255 && a > 0) {
        if (transparentHideActive) {
          // hide and skip diffusion
          d[idx] = d[idx+1] = d[idx+2] = 0;
          d[idx+3] = 0;
          continue;
        } else {
          a = 255; // treat as opaque for processing
        }
      }

      // Quantize to nearest palette color
      const [nr, ng, nb] = corMaisProxima(r|0, g|0, b|0);
      const key = `${nr},${ng},${nb}`;

      // --- Per‑color hide: make transparent and skip diffusion/count ---
      if (typeof hiddenColors !== 'undefined' && hiddenColors.has(key)) {
        d[idx] = d[idx+1] = d[idx+2] = 0;
        d[idx+3] = 0;
        continue; // do NOT diffuse error from hidden pixels
      }

      // Write quantized color
      d[idx]   = nr;
      d[idx+1] = ng;
      d[idx+2] = nb;
      d[idx+3] = (a === 0) ? 0 : 255;

      // Count only visible pixels
      if (d[idx+3] !== 0) {
        colorCounts[key] = (colorCounts[key] || 0) + 1;
      }

      // Error terms
      const er = r - nr;
      const eg = g - ng;
      const eb = b - nb;

      // Diffuse error to neighbors (Floyd–Steinberg)
      const push = (xx, yy, fr) => {
        if (xx < 0 || xx >= w || yy < 0 || yy >= h) return;
        const j = (yy * w + xx) * 4;
        buf[j  ] = clampByte(buf[j  ] + er * fr);
        buf[j+1] = clampByte(buf[j+1] + eg * fr);
        buf[j+2] = clampByte(buf[j+2] + eb * fr);
      };

      push(x+1, y  , 7/16);
      push(x-1, y+1, 3/16);
      push(x  , y+1, 5/16);
      push(x+1, y+1, 1/16);
    }
  }

  ctx.putImageData(img, 0, 0);
  return colorCounts;
}


//Zoom helper
function fitZoomToViewport() {
  const vp = document.getElementById('canvasViewport');
  if (!processedCanvas || !vp) return 1;
  const w = processedCanvas.width, h = processedCanvas.height;
  const fit = Math.min(vp.clientWidth / w, vp.clientHeight / h, 1);
  return (fit > 0 && isFinite(fit)) ? fit : 1;
}

function getColorsListOrder() {
  const fromInput = document.querySelector('input[name="colors-list-order"]:checked')?.value
  return fromInput || 'original'
}

// Image processing
let _colorCounts

function processarImagem() {
  if (!canvas || !ctx) return;

  const transparentHideActive =
    document.getElementById('transparentButton').classList.contains('active');

  let colorCounts;

  if (isDitheringOn && isDitheringOn()) {
    // ---- DITHERED PATH ----
    colorCounts = processWithFloydSteinberg(ctx, padrao, transparentHideActive);
  } else {
    // ---- NON-DITHERED PATH ----
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    colorCounts = {};

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];

      const [nr, ng, nb] = corMaisProxima(r, g, b);
      const key = `${nr},${ng},${nb}`;

      // Per-color HIDE
      if (hiddenColors.has(key)) {
        data[i] = data[i + 1] = data[i + 2] = 0;
        data[i + 3] = 0;
        continue;
      }

      // Write quantized color
      data[i] = nr; data[i + 1] = ng; data[i + 2] = nb;

      // Alpha handling
      if (a === 0) {
        data[i + 3] = 0;
      } else if (a < 255) {
        data[i + 3] = transparentHideActive ? 0 : 255;
      } else {
        data[i + 3] = 255;
      }

      if (data[i + 3] !== 0) {
        colorCounts[key] = (colorCounts[key] || 0) + 1;
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

// --- keep processedCanvas/UI in sync right here ---
processedCanvas = document.createElement('canvas');
processedCtx = processedCanvas.getContext('2d', { willReadFrequently: true });
processedCanvas.width  = canvas.width;
processedCanvas.height = canvas.height;
processedCtx.clearRect(0, 0, processedCanvas.width, processedCanvas.height);
processedCtx.drawImage(canvas, 0, 0);

// Final authoritative palette pass + export
const exportCanvas = finalizeToPalette();
downloadLink.href = exportCanvas.toDataURL('image/png');

// Normalize filename to .png (handles svg/jpg/etc.)
const base = (fileName || 'image').replace(/\.[^.]+$/,'').trim() || 'image';
downloadLink.download = `converted_${base}.png`;

showImageInfo(canvas.width, canvas.height);
if (colorCounts) showColorUsage(colorCounts, getColorsListOrder());

_colorCounts = colorCounts;

return colorCounts;
}

let _lastAppliedScale = 1;
(function wrapApplyScale(){
  const _orig = applyScale;
  applyScale = function() {
    _orig();
    _lastAppliedScale = parseFloat(scaleRange.value) || 1;
  };
})();

function reprocessWithCurrentPalette() {
  if (!originalImage) return;

  const targetScale = parseFloat(scaleRange.value) || 1;
  const needRescale = (targetScale !== _lastAppliedScale);

  if (needRescale) {
    // Slow path: scale changed — normal/full pipeline keeps layout correct
    applyScale();
    applyPreview();
    return;
  }

  // Fast path: only palette/visibility changed
  const vp = document.getElementById('canvasViewport');

  // 1) remember absolute scroll (cheap)
  const keepSL = vp ? vp.scrollLeft : 0;
  const keepST = vp ? vp.scrollTop  : 0;

  // 2) if we don't have a base image, fall back to slow path once
  if (!scaledCanvas) {
    applyScale();
    applyPreview();
    return;
  }

  // 3) temporarily switch the visible canvas to base resolution
  const prevW   = canvas.width;
  const prevH   = canvas.height;
  const prevCSSW = canvas.style.width;
  const prevCSSH = canvas.style.height;

  canvas.width  = scaledCanvas.width;
  canvas.height = scaledCanvas.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(scaledCanvas, 0, 0);

  // 4) re‑quantize at base resolution (this updates processedCanvas)
  processarImagem();

  // 5) restore visible canvas size (don’t recompute layout/center)
  canvas.width  = prevW;
  canvas.height = prevH;
  canvas.style.width  = prevCSSW;
  canvas.style.height = prevCSSH;

  // 6) repaint processed image into the current visible size (no resize/center math)
  repaintPreviewSameSize();

  // 7) restore the same scroll offsets
  if (vp) {
    vp.scrollLeft = keepSL;
    vp.scrollTop  = keepST;
  }
}

// Image info display
function showImageInfo(width, height) {
  if (width == null || height == null) return;

  const wIn = document.getElementById("widthInput");
  const hIn = document.getElementById("heightInput");
  const aBx = document.getElementById("area");

  if (wIn) wIn.value = width;
  if (hIn) hIn.value = height;

  if (aBx) {
    const area = width * height;
    if ("value" in aBx) aBx.value = area;
    else aBx.textContent = String(area);
  }
}

// Read column choice (default 3)
function getColorColumnCount() {
  const defaultColumns = 3;
  const maxColumns = 4;
  const columnCount = document.getElementById('color-columns-manual-count');
  const value = columnCount ? parseInt(columnCount.value, 10) : defaultColumns;
  return Number.isFinite(value) && value > 0 ? Math.min(maxColumns, value) : defaultColumns;
}

// Read chosen mode: 'dynamic' or 'manual'
function getColumnMode() {
  const dynamic = document.getElementById('color-columns-dynamic');
  return (dynamic && dynamic.checked) ? 'dynamic' : 'manual';
}

// Enable/Disable the select based on the current mode
function syncColumnCountSelectState() {
  const columnCount = document.getElementById('color-columns-manual-count');
  if (!columnCount) return;
  const mode = getColumnMode();
  columnCount.disabled = (mode === 'dynamic');
  columnCount.setAttribute('aria-disabled', String(columnCount.disabled));
}

// Color usage display
function showColorUsage(colorCounts = {}, order = 'original') {
  const colorListDiv = document.getElementById('color-list');
  if (!colorListDiv) return;

  // Persist for re-renders triggered by column controls
  window._colorCounts = colorCounts;

  // --- Column layout (dynamic/manual) ---
  const mode = (typeof getColumnMode === 'function' && getColumnMode()) || 'manual';
  const cols = (typeof getColorColumnCount === 'function' && getColorColumnCount()) || 3;

  // Toggle dynamic class and manual template var
  if (mode === 'dynamic') {
    colorListDiv.classList.add('dynamic');
    // ensure manual var doesn't interfere
    colorListDiv.style.removeProperty('--color-list-template');
  } else {
    colorListDiv.classList.remove('dynamic');
    colorListDiv.style.setProperty('--color-list-template', `repeat(${cols}, minmax(0, 1fr))`);
  }

  // Keep palette order, show if count > 0 or hidden
  const rows = padrao.map(([r, g, b]) => {
    const key    = `${r},${g},${b}`;
    const name   = colorNames[key] || `rgb(${r}, ${g}, ${b})`;
    const count  = colorCounts[key] || 0;
    const hidden = typeof hiddenColors !== 'undefined' && hiddenColors.has(key);
    return { r, g, b, key, name, count, hidden };
  }).filter(item => item.count > 0 || item.hidden);

  colorListDiv.innerHTML = '';

  const rowsSorted = order === 'original'
    ? rows
    : rows.toSorted((a, b) => b.count - a.count);

  rowsSorted.forEach(({ r, g, b, key, name, count, hidden }) => {
    const row = document.createElement('div');
    row.className = 'usage-item' + (hidden ? ' hidden' : '');
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.gap = '10px';
    row.style.marginBottom = '6px';

    const swatch = document.createElement('span');
    swatch.style.display = 'inline-block';
    swatch.style.width = '20px';
    swatch.style.height = '20px';
    swatch.style.border = '1px solid #ccc';
    swatch.style.background = `rgb(${r},${g},${b})`;

    const label = document.createElement('span');
    if (hidden && count === 0) {
      label.textContent = `${name}: `;
      const eyeIcon = document.createElement('span');
      eyeIcon.className = 'usage-hide-icon';
      label.appendChild(eyeIcon);
    } else {
      label.textContent = `${name}: ${count} px`;

      
      // Differentiate Paid colors
      const isPaid = (typeof paidColors !== 'undefined') && paidColors.has(key);
      if (isPaid) label.style.color = 'gold';
    }

    row.appendChild(swatch);
    row.appendChild(label);
    colorListDiv.appendChild(row);
  });
}


// --- Script for Select All buttons (translation-free, label via data-attrs) ---

(function selectAllSection({
  masterId,
  scopeSelector,
  dataType,
  storageKey,
  defaultOn = false, // free: true (on first visit), paid: false
  fallbackSelect,
  fallbackUnselect
}) {
  document.addEventListener("DOMContentLoaded", () => {
    const masterBtn   = document.getElementById(masterId);
    const colorBtns   = Array.from(document.querySelectorAll(`${scopeSelector} .toggle-color[data-type="${dataType}"]`));
    if (!masterBtn || !colorBtns.length) return;

    // ---- helpers ----
    function getExportCanvas() {
      return (typeof processedCanvas !== "undefined" && processedCanvas) ? processedCanvas : canvas;
    }

    const getLabels = () => {
      const select   = masterBtn.getAttribute("data-label-select")   || fallbackSelect;
      const unselect = masterBtn.getAttribute("data-label-unselect") || fallbackUnselect;
      return { select, unselect };
    };

    function updateMasterLabel() {
      const { select, unselect } = getLabels();
      const allActive = colorBtns.every(b => b.classList.contains("active"));
      masterBtn.textContent = allActive ? unselect : select;
    }

    function saveState() {
      const activeIds = colorBtns.filter(b => b.classList.contains("active")).map(b => b.id);
      localStorage.setItem(storageKey, JSON.stringify(activeIds));
    }

    // ---- load state ----
    const raw   = localStorage.getItem(storageKey);
    const firstVisit = raw === null;
    let savedIds = [];
    if (!firstVisit) {
      try { savedIds = JSON.parse(raw); } catch { /* ignore parse errors */ }
    }

    // apply state
    colorBtns.forEach(b => {
      const shouldBeActive = firstVisit ? defaultOn : savedIds.includes(b.id);
      b.classList.toggle("active", shouldBeActive);
    });

    // initial render and derived updates
    window.addEventListener("load", updateMasterLabel);
    if (!firstVisit) updatePadraoFromActiveButtons();

    // single-button toggle
    colorBtns.forEach(b => {
      b.addEventListener("click", () => {
        b.classList.toggle("active");
        // microtask to let layout settle before expensive work
        setTimeout(() => {
          updateMasterLabel();
          saveState();
          updatePadraoFromActiveButtons();
          if (window.originalImage) {
            reprocessWithCurrentPalette();
          }
        }, 0);
      });
    });

    // master toggle
    masterBtn.addEventListener("click", () => {
      const allActive = colorBtns.every(b => b.classList.contains("active"));
      colorBtns.forEach(b => b.classList.toggle("active", !allActive));

      updateMasterLabel();
      saveState();
      updatePadraoFromActiveButtons();
    });
  });
})({
  // Free Colors
  masterId: "unselect-all-free",
  scopeSelector: "#colors-free",
  dataType: "free",
  storageKey: "activeColors",
  defaultOn: true,
  fallbackSelect: "Select All Free Colors",
  fallbackUnselect: "Unselect All Free Colors"
});

(function selectAllSectionPaid() {
  // Paid Colors
  (function selectAllSection(config) {
    document.addEventListener("DOMContentLoaded", () => {
      const masterBtn   = document.getElementById(config.masterId);
      const colorBtns   = Array.from(document.querySelectorAll(`${config.scopeSelector} .toggle-color[data-type="${config.dataType}"]`));
      if (!masterBtn || !colorBtns.length) return;

      const getLabels = () => {
        const select   = masterBtn.getAttribute("data-label-select")   || config.fallbackSelect;
        const unselect = masterBtn.getAttribute("data-label-unselect") || config.fallbackUnselect;
        return { select, unselect };
      };

      function updateMasterLabel() {
        const { select, unselect } = getLabels();
        const allActive = colorBtns.every(b => b.classList.contains("active"));
        masterBtn.textContent = allActive ? unselect : select;
      }

      function saveState() {
        const activeIds = colorBtns.filter(b => b.classList.contains("active")).map(b => b.id);
        localStorage.setItem(config.storageKey, JSON.stringify(activeIds));
      }

      const raw = localStorage.getItem(config.storageKey);
      let savedIds = [];
      if (raw !== null) { try { savedIds = JSON.parse(raw); } catch {} }

      // default OFF for paid if nothing saved
      colorBtns.forEach(b => {
        const shouldBeActive = raw !== null ? savedIds.includes(b.id) : false;
        b.classList.toggle("active", shouldBeActive);
      });

      window.addEventListener("load", updateMasterLabel);
      updatePadraoFromActiveButtons();

      colorBtns.forEach(b => {
        b.addEventListener("click", () => {
          b.classList.toggle("active");
          setTimeout(() => {
            updateMasterLabel();
            saveState();
            updatePadraoFromActiveButtons();
          }, 0);
        });
      });

      masterBtn.addEventListener("click", () => {
        const allActive = colorBtns.every(b => b.classList.contains("active"));
        colorBtns.forEach(b => b.classList.toggle("active", !allActive));

        updateMasterLabel();
        saveState();
        updatePadraoFromActiveButtons();
        if (window.originalImage) {
          reprocessWithCurrentPalette();
        }
      });
    });
  })({
    masterId: "select-all-paid",
    scopeSelector: "#colors-paid",
    dataType: "paid",
    storageKey: "activeColorsPaid",
    fallbackSelect: "Select All Paid Colors",
    fallbackUnselect: "Unselect All Paid Colors"
  });
})();

// --End of Script for buttons--



// --- Hidden colors (per-chip eye toggle) -------------------------------
const hiddenColors = new Set();

function rgbKeyFromButton(btn) {
  if (btn?.dataset?.key) return btn.dataset.key; // <-- primary path
  // fallback
  const bg = getComputedStyle(btn).backgroundColor;
  const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return m ? `${+m[1]},${+m[2]},${+m[3]}` : null;
}

function updateEyeForButton(btn) {
  const key = rgbKeyFromButton(btn);
  const eye = btn.querySelector('.hide-eye');
  const hidden = key ? hiddenColors.has(key) : false;
  if (eye) {
    eye.classList.toggle('is-off', hidden);
  }
  btn.classList.toggle('color-hidden', hidden);
}

function augmentColorChipsWithEye() {
  const nodeList = document.querySelectorAll('#colors-free .toggle-color, #colors-paid .toggle-color');
  Array.from(nodeList).forEach(btn => {
    if (!btn.querySelector('.hide-eye')) {
      const eye = document.createElement('button');
      eye.type = 'button';
      eye.className = 'hide-eye';
      eye.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = rgbKeyFromButton(btn);
        if (!key) return;
        if (hiddenColors.has(key)) hiddenColors.delete(key);
        else hiddenColors.add(key);
        updateEyeForButton(btn);
        refreshMasterEyes();
        if (originalImage) { applyScale?.(); applyPreview?.(); }
      });
      btn.appendChild(eye);
    }
    updateEyeForButton(btn);
  });
}


// Run once and re-run if the lists are rebuilt
document.addEventListener('DOMContentLoaded', augmentColorChipsWithEye);
const rootsToWatch = ['colors-free','colors-paid']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const mo = new MutationObserver(augmentColorChipsWithEye);
rootsToWatch.forEach(root => mo.observe(root, { childList: true, subtree: true }));

// --- Master eye (hide/show all in a section) -----------------------------
function sectionChips(selector) {
  return Array.from(document.querySelectorAll(`${selector} .toggle-color`));
}

function hideShowAllInSection(selector, hide) {
  const chips = sectionChips(selector);
  chips.forEach(btn => {
    const key = rgbKeyFromButton(btn);
    if (!key) return;
    if (hide) hiddenColors.add(key); else hiddenColors.delete(key);
    updateEyeForButton(btn);
  });
  if (originalImage) {
    reprocessWithCurrentPalette();
  }
}

function updateMasterEye(selector, btn) {
  const chips = sectionChips(selector);
  if (!chips.length) { btn.classList.remove('active'); return; }
  const allHidden = chips.every(b => {
    const key = rgbKeyFromButton(b);
    return key && hiddenColors.has(key);
  });
  btn.classList.toggle('active', allHidden);
  btn.title = allHidden ? 'Show all colors' : 'Hide all colors';
}

document.addEventListener('DOMContentLoaded', () => {
  const freeBtn = document.getElementById('hide-toggle-free');
  const paidBtn = document.getElementById('hide-toggle-paid');

  if (freeBtn) {
    updateMasterEye('#colors-free', freeBtn);
    freeBtn.addEventListener('click', () => {
      const makeHide = !freeBtn.classList.contains('active');
      hideShowAllInSection('#colors-free', makeHide);
      updateMasterEye('#colors-free', freeBtn);
    });
  }

  if (paidBtn) {
    updateMasterEye('#colors-paid', paidBtn);
    paidBtn.addEventListener('click', () => {
      const makeHide = !paidBtn.classList.contains('active');
      hideShowAllInSection('#colors-paid', makeHide);
      updateMasterEye('#colors-paid', paidBtn);
    });
  }
});

function refreshMasterEyes() {
  const freeBtn = document.getElementById('hide-toggle-free');
  const paidBtn = document.getElementById('hide-toggle-paid');
  if (freeBtn) updateMasterEye('#colors-free', freeBtn);
  if (paidBtn) updateMasterEye('#colors-paid', paidBtn);
}

// Scale, Zoom, and Dimension functionality
const scaleRange   = document.getElementById('scaleRange');
const scaleValue   = document.getElementById('scaleValue');
const zoomRange    = document.getElementById('zoomRange');
const zoomValue    = document.getElementById('zoomValue');

let originalImage     = null;
let scaledCanvas      = null;
let scaledCtx         = null;
let processedCanvas   = null;
let processedCtx      = null;

// Utility: initialize width/height fields when a new image loads
function initDimensions() {
  if (!originalImage) return;
  widthInput.value  = originalImage.width;
  heightInput.value = originalImage.height;
}

// Update only the display text of scale/zoom sliders
scaleRange.addEventListener('input', () => {
  scaleValue.textContent = parseFloat(scaleRange.value).toFixed(2) + 'x';
});
zoomRange.addEventListener('input', () => {
  // update the label
  zoomValue.textContent = parseFloat(zoomRange.value).toFixed(2) + 'x';
  // and call the preview
  applyPreview();
});


// ---------- Deferred validation for width/height ----------

const TYPE_PAUSE_MS = 500; // commit after short pause
let widthDebounce  = null;
let heightDebounce = null;

// Helpers to safely parse and clamp against max scale
function commitFromWidth() {
  if (!originalImage) return;

  const raw = widthInput.value.trim();
  if (raw === '') return;               // allow empty while typing

  const reqW = parseInt(raw, 10);
  if (!Number.isFinite(reqW)) return;

  const maxScale = parseFloat(scaleRange.max) || 5;
  const maxW = Math.round(originalImage.width * maxScale);
  const newW = Math.min(Math.max(reqW, 1), maxW);

  const scale = newW / originalImage.width;
  const newH  = Math.round(originalImage.height * scale);

  // sync UI once
  widthInput.value        = newW;
  heightInput.value       = newH;
  scaleRange.value        = scale.toFixed(2);
  scaleValue.textContent  = scale.toFixed(2) + 'x';

  applyScale();
  applyPreview();
}

function commitFromHeight() {
  if (!originalImage) return;

  const raw = heightInput.value.trim();
  if (raw === '') return;

  const reqH = parseInt(raw, 10);
  if (!Number.isFinite(reqH)) return;

  const maxScale = parseFloat(scaleRange.max) || 5;
  const maxH = Math.round(originalImage.height * maxScale);
  const newH = Math.min(Math.max(reqH, 1), maxH);

  const scale = newH / originalImage.height;
  const newW  = Math.round(originalImage.width * scale);

  heightInput.value       = newH;
  widthInput.value        = newW;
  scaleRange.value        = scale.toFixed(2);
  scaleValue.textContent  = scale.toFixed(2) + 'x';

  applyScale();
  applyPreview();
}

// Ignore commits mid‑composition (IME)
function cancelWidthDebounce(){ if (widthDebounce)  { clearTimeout(widthDebounce);  widthDebounce  = null; } }
function cancelHeightDebounce(){ if (heightDebounce){ clearTimeout(heightDebounce); heightDebounce = null; } }

widthInput.addEventListener('compositionstart', cancelWidthDebounce);
heightInput.addEventListener('compositionstart', cancelHeightDebounce);
widthInput.addEventListener('compositionend',   () => { commitFromWidth();  });
heightInput.addEventListener('compositionend',  () => { commitFromHeight(); });

// When user types a new width
widthInput.addEventListener('input', () => {
  cancelWidthDebounce();
  widthDebounce = setTimeout(commitFromWidth, TYPE_PAUSE_MS);
});
widthInput.addEventListener('blur', commitFromWidth);
widthInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') commitFromWidth();
});

// When user types a new height
heightInput.addEventListener('input', () => {
  cancelHeightDebounce();
  heightDebounce = setTimeout(commitFromHeight, TYPE_PAUSE_MS);
});
heightInput.addEventListener('blur', commitFromHeight);
heightInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') commitFromHeight();
});


// Core: scale the original image into a temp canvas and draw it
function applyScale() {
  const scale = parseFloat(scaleRange.value);
  if (!originalImage) return;

  const newWidth  = Math.round(originalImage.width * scale);
  const newHeight = Math.round(originalImage.height * scale);

  // update dimension fields
  widthInput.value  = newWidth;
  heightInput.value = newHeight;

  // prepare off-screen canvas
  if (!scaledCanvas) {
    scaledCanvas = document.createElement('canvas');
    scaledCtx    = scaledCanvas.getContext('2d');
  }
  scaledCanvas.width  = newWidth;
  scaledCanvas.height = newHeight;
  scaledCtx.clearRect(0, 0, newWidth, newHeight);
  scaledCtx.drawImage(
    originalImage,
    0, 0,
    originalImage.width,
    originalImage.height,
    0, 0,
    newWidth,
    newHeight
  );

  // draw onto main canvas & process
  canvas.width  = newWidth;
  canvas.height = newHeight;
  ctx.clearRect(0, 0, newWidth, newHeight);
  ctx.drawImage(scaledCanvas, 0, 0);

  processarImagem();
}

// Core: zoom the processed image into the visible canvas
function applyPreview() {
  const src = processedCanvas || canvas;
  if (!src) { 
    console.warn('No source for preview'); 
    return; 
  }

  let zoom = parseFloat(zoomRange?.value);
  if (!Number.isFinite(zoom) || zoom <= 0) zoom = 1;

  // no longer clamp zoom to fit — let user zoom out freely
  const effectiveZoom = zoom;

  const vp = document.getElementById('canvasViewport');
  const baseW = src.width;
  const baseH = src.height;

  // keep viewport center while zooming
  let cx = 0.5, cy = 0.5;
  if (vp && canvas.offsetWidth && canvas.offsetHeight) {
    cx = (vp.scrollLeft + vp.clientWidth  / 2) / Math.max(1, canvas.offsetWidth);
    cy = (vp.scrollTop  + vp.clientHeight / 2) / Math.max(1, canvas.offsetHeight);
  }

  // target draw size
  let pw = Math.max(1, Math.round(baseW * effectiveZoom));
  let ph = Math.max(1, Math.round(baseH * effectiveZoom));

  // draw (crisp pixels)
  canvas.width  = pw;
  canvas.height = ph;
  ctx.clearRect(0, 0, pw, ph);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(src, 0, 0, baseW, baseH, 0, 0, pw, ph);

  // element size so viewport can scroll/pan
  canvas.style.width  = pw + 'px';
  canvas.style.height = ph + 'px';

  if (vp) {
    const smallerThanViewport = pw <= vp.clientWidth && ph <= vp.clientHeight;

    if (smallerThanViewport) {
      // center image if smaller than viewport
      vp.scrollLeft = 0;
      vp.scrollTop  = 0;
      vp.style.display = 'grid';
      vp.style.placeContent = 'center';
    } else {
      // restore normal layout for panning
      vp.style.display = '';
      vp.style.placeContent = '';
      vp.scrollLeft = Math.max(0, canvas.offsetWidth  * cx - vp.clientWidth  / 2);
      vp.scrollTop  = Math.max(0, canvas.offsetHeight * cy - vp.clientHeight / 2);
    }
  }

  // update label
  zoomValue.textContent = effectiveZoom.toFixed(2) + 'x';
}




// When slider stops (or on change), actually re-scale & re-preview
scaleRange.addEventListener('change', () => {
  applyScale();
  applyPreview();
});

// ---- Upload handler: fit-to-viewport + center on load ----
upload.addEventListener('change', e => {
  const file = e.target.files?.[0];
  if (!file) return;
  fileName = file.name;

  const img = new Image();
  img.onload = () => {
    originalImage       = img;
    currentImageWidth   = img.width;
    currentImageHeight  = img.height;

    // seed canvas
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    // controls + info
    scaleRange.value = 1.0;
    scaleValue.textContent = '1.00x';
    _lastAppliedScale = parseFloat(scaleRange.value) || 1
    initDimensions?.();
    showImageInfo(currentImageWidth, currentImageHeight);

    // process -> fills processedCanvas
    processarImagem?.();

    // reset viewport scroll
    const vp = document.getElementById('canvasViewport');
    if (vp) { vp.scrollLeft = 0; vp.scrollTop = 0; }

    // fit AFTER layout so vp sizes are correct
    requestAnimationFrame(() => {
      const MIN = 0.05;
      const fit = fitZoomToViewport?.() ?? 1;   // contain
      const z   = Math.max(fit, MIN);

      zoomRange.min = '0.05';
      zoomRange.value = z.toFixed(3);
      zoomValue.textContent = z.toFixed(2) + 'x';

      applyPreview?.(); // this will center if smaller than viewport
    });
  };

  // object URL is simpler/faster than FileReader
  img.src = URL.createObjectURL(file);
});



// --- Drag & Drop Support ---
(function () {
  const dropTarget = document.querySelector('.custom-upload');
  const fileInput = document.getElementById('upload');
  if (!dropTarget || !fileInput) return;

  // Highlight on dragover
  ['dragenter', 'dragover'].forEach(evt => {
    dropTarget.addEventListener(evt, e => {
      e.preventDefault();
      e.stopPropagation();
      dropTarget.classList.add('dragover');
    });
  });

  // Remove highlight on dragleave/drop
  ['dragleave', 'dragend', 'drop'].forEach(evt => {
    dropTarget.addEventListener(evt, e => {
      e.preventDefault();
      e.stopPropagation();
      dropTarget.classList.remove('dragover');
    });
  });

  // Handle file drop
  dropTarget.addEventListener('drop', e => {
    const files = e.dataTransfer?.files;
    if (!files?.length) return;
    fileInput.files = files;
    fileInput.dispatchEvent(new Event('change', { bubbles: true }));
  });
})();


// Reset controls on unload (optional)
window.addEventListener('beforeunload', () => {
  scaleRange.value = 1.0;
  scaleValue.textContent = '1.00x';
  zoomRange.value  = 1.0;
  zoomValue.textContent  = '1.00x';
});


// Initial refresh
showImageInfo(currentImageWidth, currentImageHeight);

// Transparent button
document.getElementById('transparentButton').addEventListener('click', function () {
  this.classList.toggle('active');
  localStorage.setItem('transparentHide', this.classList.contains('active'));
  updatePadraoFromActiveButtons();

if (originalImage) {
  reprocessWithCurrentPalette();
}

});

// Only keep for dynamic info (no static translations here)
function applyTranslations(lang) {
  if (currentImageWidth && currentImageHeight) {
    showImageInfo(currentImageWidth, currentImageHeight);
  }
}


// --- Extra viewport interactions: drag-to-pan + Ctrl/Meta + wheel zoom ---
(function enhanceViewport() {
  const vp = document.getElementById('canvasViewport');
  const cv = document.getElementById('canvas');
  if (!vp || !cv) return;

  // ---- Drag-to-pan ----
  let down = false, sx = 0, sy = 0, sl = 0, st = 0;
  vp.addEventListener('mousedown', e => {
    if (e.button !== 0) return;
    down = true;
    sx = e.clientX; sy = e.clientY;
    sl = vp.scrollLeft; st = vp.scrollTop;
    e.preventDefault();
  });
  window.addEventListener('mousemove', e => {
    if (!down) return;
    vp.scrollLeft = sl - (e.clientX - sx);
    vp.scrollTop  = st - (e.clientY - sy);
  });
  window.addEventListener('mouseup', () => { down = false; });

  // ---- Robust Ctrl/Meta + wheel zoom (log-scale, min 0.05) ----
  const WHEEL_OPTS = { passive: false };
  const handleZoomWheel = (e) => {
    const wantsZoom = e.ctrlKey || e.metaKey; // Ctrl on Win/Linux, ⌘ on macOS
    if (!wantsZoom) return;

    // Stop browser page zoom
    e.preventDefault();

    const slider = document.getElementById('zoomRange');
    if (!slider) return;

    const MIN = 0.05;
    const MAX = parseFloat(slider.max) || 10;
    let cur    = parseFloat(slider.value) || 1;

    // log-scale step (smooth & never stuck at tiny values)
    const STEP = 0.05;
    let logZ = Math.log(Math.max(cur, MIN));   // floor at MIN so recovery works
    logZ += (e.deltaY < 0 ? +STEP : -STEP);
    let next = Math.exp(logZ);

    if (next < MIN) next = MIN;
    if (next > MAX) next = MAX;

    slider.value = next.toFixed(3);
    applyPreview();
  };

  // Attach to BOTH viewport and canvas so it works wherever the cursor is
  vp.addEventListener('wheel', handleZoomWheel, WHEEL_OPTS);
  cv.addEventListener('wheel', handleZoomWheel, WHEEL_OPTS);

  // Also enforce MIN on manual slider moves
  const slider = document.getElementById('zoomRange');
  if (slider) {
    slider.min = '0.05'; // ensure HTML min matches the logic
    slider.addEventListener('input', () => {
      const MIN = 0.05;
      const MAX = parseFloat(slider.max) || 10;
      let z = parseFloat(slider.value) || 1;
      if (z < MIN) z = MIN;
      if (z > MAX) z = MAX;
      slider.value = z.toFixed(3);
      applyPreview();
    });
  }
})();

// --- Dithering toggle ---
const DITHER_KEY = 'ditherOn';

function isDitheringOn() {
  const v = localStorage.getItem(DITHER_KEY);
  return v === null ? false : v === 'true';   // default OFF
}

(function initDitherButton(){
  const btn = document.getElementById('ditherButton');
  if (!btn) return;

  // Determine initial state (default OFF first time)
  const saved = localStorage.getItem(DITHER_KEY);
  const on = saved === null ? false : saved === 'true';
  if (saved === null) localStorage.setItem(DITHER_KEY, 'false');

  // Sync UI
  btn.classList.toggle('active', on);


  // Click handler
  btn.addEventListener('click', () => {
    const next = !btn.classList.contains('active');
    btn.classList.toggle('active', next);
    localStorage.setItem(DITHER_KEY, String(next));

    if (originalImage) {
      applyScale();
      applyPreview();
    }
  });
})();


// Advanced options: toggle visibility of all "hide color" controls
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('opt-toggle-hide-ui');
  if (!btn) return;

  const apply = () => {
    const on = btn.classList.contains('active');
    // on = show eyes; off = hide them
    document.body.classList.toggle('hide-ui-off', !on);
    // keep master eye visual state in sync
    if (typeof refreshMasterEyes === 'function') refreshMasterEyes();
  };

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    apply();
  });

  apply(); // set initial state
});

Array.from(document.querySelectorAll('input[name="colors-list-order"]'))
  .forEach(radio => {
    radio.addEventListener('change', (event) => {
      if (_colorCounts) showColorUsage(_colorCounts, event.target.value);
    });
  });


// Utility: check if a canvas has only transparent pixels
function canvasIsEmpty(c) {
  if (!c) return true;
  const ctx = c.getContext("2d");
  const data = ctx.getImageData(0, 0, c.width, c.height).data;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] !== 0) return false; // found a non-transparent pixel
  }
  return true;
}

// Utility: pick the right canvas (processed if exists, else main)
function getTargetCanvas() {
  return (typeof processedCanvas !== "undefined" && processedCanvas) ? processedCanvas : canvas;
}

// ===============================
// Save Image to Gallery (localStorage)
// ===============================
async function saveImageToGallery(blob) {
  // Use the same IndexedDB as gallery.js
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("wplaceGallery", 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id", autoIncrement: true })
          .createIndex("created", "created", { unique: false });
      }
    };
    req.onsuccess = () => {
      const db = req.result;
      const tx = db.transaction("images", "readwrite");
      const store = tx.objectStore("images");
      const rec = { blob, created: Date.now() };
      store.add(rec);
      tx.oncomplete = resolve;
      tx.onerror = reject;
    };
    req.onerror = () => reject(req.error);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const dynamic     = document.getElementById('color-columns-dynamic');
  const manual      = document.getElementById('color-columns-manual');
  const columnCount = document.getElementById('color-columns-manual-count');

  const triggerRerender = () => {
    syncColumnCountSelectState();
    if (window._colorCounts) showColorUsage(window._colorCounts, getColorsListOrder());
  };

  // Restore saved prefs
  const savedMode = localStorage.getItem("colorColumnMode");
  if (savedMode === "dynamic" && dynamic) dynamic.checked = true;
  else if (savedMode === "manual" && manual) manual.checked = true;

  const savedCountRaw = localStorage.getItem("columnCount");
  if (columnCount && savedCountRaw !== null) {
    const parsed = parseInt(savedCountRaw, 10);
    if (Number.isFinite(parsed) && parsed >= 1 && parsed <= 4) {
      columnCount.value = String(parsed);
    }
  }

  // Initial sync + render
  triggerRerender();

  // Persist changes and re-render
  dynamic?.addEventListener('change', () => {
    localStorage.setItem("colorColumnMode", getColumnMode());
    triggerRerender();
  });
  manual?.addEventListener('change', () => {
    localStorage.setItem("colorColumnMode", getColumnMode());
    triggerRerender();
  });
  columnCount?.addEventListener('change', () => {
    localStorage.setItem("columnCount", getColorColumnCount());
    triggerRerender();
  });

  document.querySelectorAll('input[name="colors-list-order"]').forEach(r => {
    r.addEventListener('change', () => {
      if (window._colorCounts) showColorUsage(window._colorCounts, getColorsListOrder());
    });
  });
});


// ===============================
// Add to Gallery
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("addToGallery");
  if (!btn) return;
  if (btn.dataset.bound === "true") return;
  btn.dataset.bound = "true";

  btn.addEventListener("click", () => {
    // Always use the clamped/processed canvas
    const c = (typeof finalizeToPalette === "function")
      ? finalizeToPalette()
      : (typeof getTargetCanvas === "function" ? getTargetCanvas() : document.getElementById("canvas"));

    const lang = (typeof getCurrentLang === "function" ? getCurrentLang() : "en");
    const t = (typeof window.translations !== "undefined" && window.translations[lang]) || {};

    if (!c || !c.width || !c.height) {
      showToast(t.imageNotFound || "No image to add.", "error");
      return;
    }

    // Don’t add fully transparent canvases
    const isEmpty = (function isCanvasEmpty(canvasEl){
      const _ctx = canvasEl.getContext("2d");
      const d = _ctx.getImageData(0, 0, canvasEl.width, canvasEl.height).data;
      for (let i = 3; i < d.length; i += 4) if (d[i] !== 0) return false;
      return true;
    })(c);

    if (isEmpty) {
      showToast(t.imageNotFound || "No image to add.", "error");
      return;
    }

    btn.disabled = true;
    btn.setAttribute("aria-busy", "true");

    const finish = async (blob) => {
      if (!blob) {
        btn.disabled = false;
        btn.removeAttribute("aria-busy");
        showToast(t.saveFailed || "Failed to save image.", "error");
        return;
      }
      try {
        // Save to localStorage as data URL (PNG)
        await saveImageToGallery(blob);

        // Make sure the gallery area is visible *now* (when it exists on this page)
        const area = document.getElementById("galleryArea");
        if (area) area.hidden = false;

        // Mark last action (optional, gallery can read this)
        localStorage.setItem("gallery:lastAddedAt", String(Date.now()));

        showToast(t.imageSaved || "Added to gallery!", "success");

      } catch (err) {
        console.error(err);
        let msg = t.saveFailed || "Failed to save image.";
        // Surface quota issues nicely
        if (String(err).toLowerCase().includes("quota")) {
          msg = t.storageFull || "Your browser storage is full. Remove some items from the gallery and try again.";
        }
        showToast(msg, "error");
        btn.disabled = false;
        btn.removeAttribute("aria-busy");
      }
    };

    // Always export PNG
    if (c.toBlob) {
      c.toBlob(finish, "image/png");
    } else {
      const dataURL = c.toDataURL("image/png");
      const b64 = dataURL.split(",")[1] || "";
      const bin = atob(b64);
      const u8  = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
      finish(new Blob([u8], { type: "image/png" }));
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => updatePadraoFromActiveButtons());
});
