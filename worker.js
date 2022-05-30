const filesToCache = [
	"MinivMac.dsk",
	"MinivMac.htm",
	"MinivMac.js",
	"MinivMac.json",
	"MinivMac.png",
	"MinivMac.wasm",
	"MinivMacFavIcon_16x16.png",
	"MinivMacFavIcon_192x192.png",
	"MinivMacFavIcon_512x512.png",
	"MinivMacShare.png"
];

const staticCacheName = "minivmac-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});