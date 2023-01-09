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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "406b0f44252618a598de916e42393770"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.64c88fc9.css",
    "revision": "e94ec1a50dfb576425e2c8fd1670a243"
  },
  {
    "url": "assets/img/deleteRequest.4ac1c9d8.png",
    "revision": "4ac1c9d8554d686e70c64f7c205e2efa"
  },
  {
    "url": "assets/img/deleteRequestResult.27931ce1.png",
    "revision": "27931ce15c92e0dead989e40b6ff9e9d"
  },
  {
    "url": "assets/img/getRequest.2b7c626d.png",
    "revision": "2b7c626def2eeca67effaf82cd5ff1d9"
  },
  {
    "url": "assets/img/postRequest.06fd5242.png",
    "revision": "06fd52421c548c5d9f9e6241ca58e42f"
  },
  {
    "url": "assets/img/putRequest.a86de8c5.png",
    "revision": "a86de8c51b7321ba27e6de32d3759adb"
  },
  {
    "url": "assets/img/putRequestResult.2b1bffdd.png",
    "revision": "2b1bffdd4bcb42a82f0ffa61cab9c757"
  },
  {
    "url": "assets/img/relschem.5f1506d9.png",
    "revision": "5f1506d9145e9c9e25de0207eb8e0df6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/startServer.66095588.png",
    "revision": "66095588ae1ea65c722d0e94ef0b555d"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.603171d8.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.444454cf.js",
    "revision": "c4ca31f6fbb2510d0f5d61643fdb6c0c"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.e35a6dc4.js",
    "revision": "f732684eaab501586c368a3ad236eeb0"
  },
  {
    "url": "assets/js/17.901329f4.js",
    "revision": "937caaa9daa2c6ecb2561a51d0970837"
  },
  {
    "url": "assets/js/18.e93cda26.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.6211caff.js",
    "revision": "0d6a31793c403df9ed592c112495d350"
  },
  {
    "url": "assets/js/2.74b7323d.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.c946e184.js",
    "revision": "8baa0b90f7c1b8e16b76fdfb9ac334ba"
  },
  {
    "url": "assets/js/21.184ae4b5.js",
    "revision": "f1a92d371ef9acaca1545bf254f4b62e"
  },
  {
    "url": "assets/js/22.fac1de68.js",
    "revision": "3b075f417837b612e02a66685cc2556c"
  },
  {
    "url": "assets/js/23.fcf6b7d4.js",
    "revision": "cda53591ca1fa313657eaa7dee376304"
  },
  {
    "url": "assets/js/24.089d9900.js",
    "revision": "e960987f8ca3d23e02fe1c0289bf0578"
  },
  {
    "url": "assets/js/26.f5424b81.js",
    "revision": "24923da10b396b1a8796fc5698e01360"
  },
  {
    "url": "assets/js/3.93d3d32c.js",
    "revision": "6a9ff25a1b02ef9d20a9ca939e9b2652"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.6cd70278.js",
    "revision": "7a8e773b0b2158f77779ca991c47cef5"
  },
  {
    "url": "assets/js/7.352b63be.js",
    "revision": "3f7fa61d3aa5a271836c22f2a98033ed"
  },
  {
    "url": "assets/js/8.acae36a2.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.94146761.js",
    "revision": "8c725a44919097cd3c2bef92f8ce0769"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3c1d5750d9c79b9819efe670955b71c6"
  },
  {
    "url": "design/index.html",
    "revision": "e7c3f87decd1201812e1e2cd811bce42"
  },
  {
    "url": "index.html",
    "revision": "9351bd59e9381f35f2c807e8e9f5c248"
  },
  {
    "url": "intro/index.html",
    "revision": "a77b628b3756b5a8c486493b0c30eb05"
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
    "revision": "e6085ffbe31fc95fb508bd2cd5bc8b9c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8fd5a96baed62c395e579e5539519740"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ad6fab164409a096d27690dec7f5ec58"
  },
  {
    "url": "software/index.html",
    "revision": "116c030ed2668b59390193e5ae1b91ec"
  },
  {
    "url": "test/index.html",
    "revision": "dcbe726118a383b29a7fe9f321e030e6"
  },
  {
    "url": "use cases/index.html",
    "revision": "c4787088bbf9f40b93184a831cb091b2"
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
