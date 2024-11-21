'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f8bfe61d1538c983f3d48c0fe9d56e1b",
"index.html": "f2213fdb0821b6cc964c55742edd0e96",
"/": "f2213fdb0821b6cc964c55742edd0e96",
"main.dart.js": "4d694e77def5010589804cd931378c69",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90d5a5850138bf3665ea0a24beba1529",
".git/config": "92f692cf869e9bf7c6cbfb9cc8f7282f",
".git/objects/61/9e395e1c92df0c2cbe0e1c2ba0114aade87f7f": "645935ba93424d43a5d59cab4266907c",
".git/objects/59/7e8b7121b0a2479eb390d5767ca51a2357d7dc": "bb4b7cb85141e5b990c34159be9b6549",
".git/objects/92/2e9df960c72692343ae2c3f8bbde2cecee721e": "6626264853bc4be3a9a5ed184867db20",
".git/objects/3e/61c8a25d4a861a75bec44c1075469fc8abea06": "c10e4a0dfe825e05e64f542614cc2b4a",
".git/objects/6f/c3c179c0bbe092a19fa391b3eafb60a70c0bec": "437fc99d1df3167f0a557a2cd92673f3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6a/4594fdcaf1fddd481a19f8510e50b9684cdcd7": "996c381d6bfd85905eed4deb124726ca",
".git/objects/32/03c50c043ede3643a9cd0b664cbad8ef5d928d": "e0c828a0b2079b0741618427fcbe026f",
".git/objects/56/39d7e81f199b43c4fe2f2a12fc4b07fac2992e": "706e40d18135a7c35f0c5b7e67406757",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/b5/fa9fb360ae8a2af6cfeca0272d1004c602feab": "7729c98c09d311ca3092a76767a4a2ba",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/df/e0b54739484b43244ff8a51600c3e45b3770a2": "6366138bf5dc64c91879bcd5dc1e2d3d",
".git/objects/b4/22f1829759a1a28c970c573aa588c502529567": "2a9804bcf9db77b6b5f3ebaf876423f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a5f74ed879aab64bf464c4614c18f8f55abcd4": "dc03d24160a5e3bd88513c1811b8c133",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/521f9146fb5e14f3560c8dae7cc26d0c447696": "b02f30ffebfacd472b3b6f0483c1c9d7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/4b/63fb95da4003a5410ffb2a398ae96c1b3d0d09": "c1a3ffdbaa370feec762795a5f24cd3f",
".git/objects/7d/e276cf0496b0dc3425b8d1afab3b6f0b98be93": "a47d706bcaa213d9963856b1ad8799c1",
".git/objects/7c/27689a0c53b2356838e61f7011278cbbecb0bc": "3530a561b2b29d4cf4b871c88ec32fb3",
".git/objects/7c/2bbfe3a661baa77bdc00a29f36484d0f44b97b": "5c6b00c1964e531117fd6f1a713d0c1b",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/52b915717193db71409f0acb3fc975f0f32a46": "db496494e7113c0abd5f0feca624d709",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/546a14dae9cc121bd368eb778d45dd9fbc04ef": "e58efbdaa99ac8516cc07e452ca168f7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ee0d6185d50406e221cbe642ad5fd06c56aa51": "6eab04d95dfbfbb1d3c67165c757cada",
".git/objects/07/7628ac58bd114085a5dc73821df4379c78b979": "cda17c00c2b7569ca736ed300ab87eed",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/38/306d72a69ac3bb8e4e2c03dd9f53a10e2ffa7b": "16f174c6a4a9193a49743c2570fda7b2",
".git/objects/31/3ad4ea2462976078a4ab28270957a72b83ce63": "9cfe328177c02bfc86632cc76c50589c",
".git/objects/96/478eee7e50fce48e700812d4ba072aea251073": "71213246fc07b8aceb5ee6c633603a51",
".git/objects/3f/e47864397e06bd30a9e21fc71846c2736e0c84": "0432073998194976feb4fab88e2c1649",
".git/objects/6c/ae6c13d36bc7c4f7a0518e55142fb0630c0097": "777db3b9914af63a5e26233bbf672bb0",
".git/objects/55/bacce79c5e10c2d60f58acf2424a4c9d884288": "f442ec07416e0acd2404bba254369b34",
".git/objects/d3/5b8645d55675c60ee816e1576c7999816a456b": "200e3dcbc9846b82eddf7670678d09fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/aa/51c62cf79bdcfc49167aef12e83c2580e44210": "849dd1cae998d9844bb6d0f5ac52d391",
".git/objects/af/cfcaf24edce48ee80dda5976af88351e497d75": "6d518f06f858a46dd83db2852af65207",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/e6/26563bcff67200450b4a0982bfe20657e80be9": "0bf9bba250ae4a18bf991c6dc48d3b29",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/68f92afebffd643fc7bdec9b6e68f345d460df": "b91ead2932466b1b4c25aa721c3e2b50",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f8/b8b11c961232b7aeee26582d3092ad68e0a86c": "468f5860a84e9e865da6e0afb7da3121",
".git/objects/e0/d8cd074e9a06dc9277a8a052c86feeb5c156d2": "7bda3ad10a3ae3c3ea8738983be4ec7a",
".git/objects/41/d4e48fc3807ff1659d2f80ffe65f89ac8736a3": "ea7c203e2c1680d642eebea89709ed29",
".git/objects/4a/8a1d5b6d382db3fadbcb4b6ef56e4c337e3924": "d5cdcb631df128d0a3b06b04d1b673a5",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/15/84f76c399d1bf6abdda9fd89cbad4bf60aa4d3": "6a1e3c87aaf1101188a4562508906ff6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/78/07b6ebef71de86f851f95f00e4a48a9fd95c72": "b0516160bf3cd408455c0ab21d3c705b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2535fdaf9b0f7db3b0c6d662b7167686",
".git/logs/refs/heads/main": "2535fdaf9b0f7db3b0c6d662b7167686",
".git/logs/refs/remotes/origin/main": "0ee05ae31e32c0f972471225e5379618",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "97f2e27f001e8ef165e2e5e4371ecbd0",
".git/refs/remotes/origin/main": "97f2e27f001e8ef165e2e5e4371ecbd0",
".git/index": "d9c035804ea5fc89dd5885e817a4c965",
".git/COMMIT_EDITMSG": "f468f9623e594f2b71649f85a551066b",
"assets/AssetManifest.json": "0001ae9deb174c2c26a41ba3276dcef0",
"assets/NOTICES": "b2b5772d3689ed18b826ec8f4d9e48b2",
"assets/FontManifest.json": "08640ddded4f65f9d53ad2470ed24e39",
"assets/AssetManifest.bin.json": "78365349e180d0cc0ddf2164d650ddfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e58ac32617dd9f1aaab64fcc8539210d",
"assets/fonts/MaterialIcons-Regular.otf": "4b487f916b22f4e94911ea2790c14f59",
"assets/assets/templates/shablon_akta.docx": "313bd68061a874fc7be8b48beaa43a0d",
"assets/assets/fonts/futura-pt-book-oblique.ttf": "02738f97b87fd3e6979a5de80beb58bd",
"assets/assets/fonts/futura-pt-book.ttf": "0d987efe9bc0b858a7bc0367c2d5922c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
