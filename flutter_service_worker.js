'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"favicon.ico": "7cb1fffb3bd017976eb44a4b3336db13",
"index.html": "bee141cade1b2031ddbb588199562b4b",
"/": "bee141cade1b2031ddbb588199562b4b",
"main.dart.js": "e080931b92b687cd89efb1a121233861",
"icons/Icon-192.png": "85180cfcc108c2332ff6eb354dc301ce",
"icons/Icon-maskable-192.png": "0f1da3447810956922b636beb817802c",
"icons/Icon-maskable-512.png": "c8aabc493a9441d0d4a70b726eb74644",
"icons/Icon-512.png": "c8aabc493a9441d0d4a70b726eb74644",
"manifest.json": "03d3a4dd3b227a42508090e2da936206",
"assets/AssetManifest.json": "f023472b9bb73e42157f8d757bc765e7",
"assets/NOTICES": "04c2c43dd8a18e2d592223a1f203ba80",
"assets/FontManifest.json": "ea8f07d23bf9d2759cb2cef6608bafc6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/me.png": "d7f1e5df444eff1fd16304f91756320f",
"assets/assets/images/projects/%25D8%25AA%25D8%25AF%25D9%2584%25D9%2584%2520%25D9%2583%25D8%25A7%25D8%25A8%25D8%25AA%25D9%2586%2520-Tdllal.png": "4464e17438f50882b8576fca2e793b6b",
"assets/assets/images/projects/%25D9%2585%25D8%25AA%25D8%25AC%25D8%25B1%2520%25D8%25AF%25D9%2581%25D9%258A%25D9%2586%25D8%25A7%2520%25D8%25B3%25D8%25AA%25D9%2588%25D8%25B1.png": "1bb4d43b0e937a1651dd427025dcf33d",
"assets/assets/images/projects/%25D8%25A7%25D8%25B3%25D8%25B1%2520%25D9%2585%25D9%2586%25D8%25AA%25D8%25AC%25D8%25A9.png": "b00d4692bcd01f49df1492ee8aa43e8b",
"assets/assets/images/projects/InDesign.png": "5f41517156843816ed4411e0826392b3",
"assets/assets/images/projects/%25D8%25AA%25D8%25AF%25D9%2584%25D9%2584-Tdllal.png": "963fb2bd5d5fdde5ac8657414506eb45",
"assets/assets/images/projects/%25D9%2585%25D8%25B2%25D8%25A7%25D8%25AF%25D9%258A.png": "89a082268f79be362952c70dfe941ffa",
"assets/assets/images/projects/%25D8%25A3%25D9%2588%25DA%25A4%25D8%25B1.png": "9f5e2cde9f8af569335aff8273926da5",
"assets/assets/images/projects/%25D8%25A7%25D9%2581%25D8%25A7%25D9%2582%2520%25D9%2584%25D9%2584%25D9%2588%25D8%25B3%25D8%25A7%25D8%25B7%25D9%2587.png": "69e173ca183ffb2e62f477de37408f92",
"assets/assets/images/projects/%25D8%25B3%25D9%2586%25D8%25A7%25D8%25A8%25D9%2584.png": "75cadab981b8c645e8b3657772d15b78",
"assets/assets/images/projects/T-One.png": "89578a07e0551ea8a5c5eb8c05bd24a6",
"assets/assets/images/projects/El%2520Mwslaty-Delivery.png": "2005ffdb89e068b15f08cb5aa4d5ab7f",
"assets/assets/images/projects/Hoper.png": "d32c9b3fc180c9df2aed4f479d332d3a",
"assets/assets/images/projects/GFS.png": "e015266777ef9a8c957122937f4dac35",
"assets/assets/images/projects/%25D9%2586%25D9%2582%25D9%2584%2520%25D8%25B4%25D8%25A7%25D9%2585%25D9%2584.png": "5dab7c5f8aff8660bc5358255cc0ab53",
"assets/assets/images/projects/%25D9%2588%25D8%25B8%25D9%258A%25D9%2581%25D8%25AA%25D9%2583%2520%25D8%25B9%25D9%2584%25D9%258A%25D9%2586%25D8%25A7.png": "2c9ad61b0b623fc19a8959208a6518de",
"assets/assets/images/logo.png": "01369fb0ced64861f2de34e3baeaa134",
"assets/assets/fonts/Tajawal-Regular.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
