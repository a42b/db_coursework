/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bc43b2c84d3cc207552339672abbecc2"
  },
  {
    "url": "assets/css/0.styles.2a3f8792.css",
    "revision": "dfcade3ee3c2338ddf434e291cd568fc"
  },
  {
    "url": "assets/img/1.29d230c6.jpg",
    "revision": "29d230c68a623eeea58a8e1abd029a1b"
  },
  {
    "url": "assets/img/2.dcd71252.jpg",
    "revision": "dcd712524bcb87f7888b48bad9513822"
  },
  {
    "url": "assets/img/3.27f25fba.jpg",
    "revision": "27f25fbad1a48a514835881c311b9084"
  },
  {
    "url": "assets/img/4.aded7ef4.jpg",
    "revision": "aded7ef427efe656f6ac689e3fd74d6f"
  },
  {
    "url": "assets/img/5.56e0836f.jpg",
    "revision": "56e0836ff330662db8f94492492ae22e"
  },
  {
    "url": "assets/img/6.a85d14f5.jpg",
    "revision": "a85d14f5a20301941823c71ce852d1c8"
  },
  {
    "url": "assets/img/7.d4895532.jpg",
    "revision": "d489553286081a949b64a8997edfe8ef"
  },
  {
    "url": "assets/img/8.894c1e7d.jpg",
    "revision": "894c1e7d538545b6b0c0116872d6a05e"
  },
  {
    "url": "assets/img/9.cc4b1be7.jpg",
    "revision": "cc4b1be7ffea8dbeeb2520eccbca9940"
  },
  {
    "url": "assets/img/relation-diagram.60415180.png",
    "revision": "604151805a60802b9e5d02489fbbe1d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f6c1e4d1.js",
    "revision": "a3145ae0ffa7cbd172e8648859973530"
  },
  {
    "url": "assets/js/10.200c73de.js",
    "revision": "5fef30ea1c8438120e98a6295c254e54"
  },
  {
    "url": "assets/js/13.ac7c90f9.js",
    "revision": "88b3d09c2367d0a941eb645d2df91231"
  },
  {
    "url": "assets/js/14.e86df337.js",
    "revision": "45777450b85a76658cde80305f571b48"
  },
  {
    "url": "assets/js/15.00535908.js",
    "revision": "d76250d354bd606158c4550f926eb489"
  },
  {
    "url": "assets/js/16.f8fd2ec4.js",
    "revision": "8c8deb1492d4888a5e43481d2e77a260"
  },
  {
    "url": "assets/js/17.bd08642f.js",
    "revision": "db50a546f5122071dbffef94f861795c"
  },
  {
    "url": "assets/js/18.96407d7d.js",
    "revision": "84a217f1e02852dccbc332d5b7581ec3"
  },
  {
    "url": "assets/js/19.acb8cca9.js",
    "revision": "9e60978f51b6a272287ea7698ec95a4c"
  },
  {
    "url": "assets/js/2.f5e75340.js",
    "revision": "f78157a4e78d0e6d655e0e136eb638ac"
  },
  {
    "url": "assets/js/20.3c2f8a8b.js",
    "revision": "e57483f3afb07ace243110bfbac1bc72"
  },
  {
    "url": "assets/js/21.1a887d24.js",
    "revision": "480adfd63a1786e1f9884eaf548f714d"
  },
  {
    "url": "assets/js/22.d9198426.js",
    "revision": "f36aaf35fb799e91da30cae5a0e808a8"
  },
  {
    "url": "assets/js/23.366f581e.js",
    "revision": "c88a901a31499a9eaf3c30be8235065b"
  },
  {
    "url": "assets/js/24.bcdcb93f.js",
    "revision": "dd64c28747df560ab501c3b0e327c5cd"
  },
  {
    "url": "assets/js/25.4029e3c4.js",
    "revision": "d991b2f33832e46ad0e8cb036b7aa81d"
  },
  {
    "url": "assets/js/26.3e800f54.js",
    "revision": "a92c2d95d85167ec475a448c8670dc4c"
  },
  {
    "url": "assets/js/27.94eca684.js",
    "revision": "869ccebb00180082b4603bbdf360e5ef"
  },
  {
    "url": "assets/js/28.d633f568.js",
    "revision": "dbfff9cf70e6909cad5dbc31fdfd2e49"
  },
  {
    "url": "assets/js/29.b01b2656.js",
    "revision": "7e681bd62e1e37f2373a0ef264eb4a0f"
  },
  {
    "url": "assets/js/3.ae2a1c17.js",
    "revision": "be0de2729fe4acf2c646df30d9a8e65e"
  },
  {
    "url": "assets/js/30.02af65a0.js",
    "revision": "4d8a0bead3955c5d58dba71368515660"
  },
  {
    "url": "assets/js/31.06f413b6.js",
    "revision": "40eca1b8ccddbe3d6af0042c6b0f841b"
  },
  {
    "url": "assets/js/32.ea111e5a.js",
    "revision": "4ee8c75bccf9fd7f8b3ffc1fb259f541"
  },
  {
    "url": "assets/js/33.df82e13a.js",
    "revision": "ca8f963433e4a8f59f33a3162461f9f2"
  },
  {
    "url": "assets/js/34.6c2c1110.js",
    "revision": "6125b3542b3016422edefa234abad285"
  },
  {
    "url": "assets/js/35.410eb393.js",
    "revision": "ca0f81a1a04ce03f5f74ddb09c86e10a"
  },
  {
    "url": "assets/js/36.097f8c0e.js",
    "revision": "6eb273b1ce1adb95b10b52470535fdc8"
  },
  {
    "url": "assets/js/37.d97c9a8a.js",
    "revision": "4af0ed9244388cc64d1e97fed8a56626"
  },
  {
    "url": "assets/js/38.4475423e.js",
    "revision": "dd191d40728a64e00e34aee15c924808"
  },
  {
    "url": "assets/js/39.9e66daf8.js",
    "revision": "c8a5cb5495aed2db8aa4aa18acdc89cd"
  },
  {
    "url": "assets/js/4.060334ba.js",
    "revision": "b623eacb816f7e6137e53880ccaa57e9"
  },
  {
    "url": "assets/js/41.6a7b897e.js",
    "revision": "5edd5b9d5b6b89c47d05c7ef76d14996"
  },
  {
    "url": "assets/js/5.6e6c35a1.js",
    "revision": "a0fcaf61f524e92d18eadc3f49141417"
  },
  {
    "url": "assets/js/6.a47209f5.js",
    "revision": "c6ccece35fee2a0c42a07992c6faed0b"
  },
  {
    "url": "assets/js/7.3e5714c3.js",
    "revision": "5fa0cca93141a037aa37803625279aec"
  },
  {
    "url": "assets/js/8.e774d706.js",
    "revision": "f7f3262cb8ca3b7d4bf32bb3e2392058"
  },
  {
    "url": "assets/js/9.6bbb0021.js",
    "revision": "c5bb576d11bb812309633811e64d7647"
  },
  {
    "url": "assets/js/app.a29a078b.js",
    "revision": "6fd2abec8646df096a0d6eccbba840e6"
  },
  {
    "url": "assets/js/vendors~docsearch.5ae385c2.js",
    "revision": "f4e9a97e95fb046f2c1bb16e8f6b0347"
  },
  {
    "url": "conclusion/index.html",
    "revision": "5598ceb68f5a9daf517f4ad603a188e1"
  },
  {
    "url": "design/index.html",
    "revision": "81d7e20f266483b06d6ac04da1f6ec0b"
  },
  {
    "url": "index.html",
    "revision": "2e7b3d6deed3e6d818bf0a9f6553a03e"
  },
  {
    "url": "intro/index.html",
    "revision": "ffcfc9d17b6988e2ac6691eb8220050f"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b791b7547a39eed35164b560b279c556"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "73494ef0ce507db8c68e0571a63c43fe"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bd732c325a542062d3706e875af43141"
  },
  {
    "url": "software/index.html",
    "revision": "be45fd05d7b25b8dc9d45d4f72d18ab3"
  },
  {
    "url": "test/index.html",
    "revision": "a88f4cf4e495c496879b0ce5d21cade2"
  },
  {
    "url": "use cases/index.html",
    "revision": "167a6d5d9e79a672761d8f41a75dfc19"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
