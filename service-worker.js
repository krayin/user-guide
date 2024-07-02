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
    "url": "2.0/activity/activities.html",
    "revision": "efc79a73e4d8358e7eb3da69747195ec"
  },
  {
    "url": "2.0/configure/configuration.html",
    "revision": "0d0d12a25dd92330ef06eb2b7d35e928"
  },
  {
    "url": "2.0/contact/contacts.html",
    "revision": "90f602ff0ba80ab9c093cb5b823ce5a7"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "4b0a4d557fa1b0ba2a70909bd982b12e"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "83db89bb572b97b30d975cfc27eb8ee2"
  },
  {
    "url": "2.0/lead/leads.html",
    "revision": "78d597541938cd7c39cfcd71f9b0baee"
  },
  {
    "url": "2.0/mail/mails.html",
    "revision": "03badf89ec05794e736ade71fb59b535"
  },
  {
    "url": "2.0/product/products.html",
    "revision": "a138e6e6317523b88404e578ea60f70f"
  },
  {
    "url": "2.0/quote/quotes.html",
    "revision": "5f6de173f7a89303af4e0ed2572323c0"
  },
  {
    "url": "2.0/settings/attribute.html",
    "revision": "7a3bebf4ba7fa382d6582ad8d1780fcd"
  },
  {
    "url": "2.0/settings/emailtemplate.html",
    "revision": "f3033c6cdcd38328d4f01ef31f35283a"
  },
  {
    "url": "2.0/settings/group.html",
    "revision": "f73b2d2f4b95e0ca5275afa8cae75d27"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "9371b1360f3296596bdeb6f98e2446b4"
  },
  {
    "url": "2.0/settings/pipeline.html",
    "revision": "682029db792d37cba7755fecb7ac04f2"
  },
  {
    "url": "2.0/settings/role.html",
    "revision": "b17b2c9b125f1b24da57902e845d216b"
  },
  {
    "url": "2.0/settings/source.html",
    "revision": "fd80132d8d6a3bfbeb108991e71adf38"
  },
  {
    "url": "2.0/settings/tags.html",
    "revision": "779159029939d1b4eb86f51061d5a9e7"
  },
  {
    "url": "2.0/settings/type.html",
    "revision": "c60b3206026d2a480720282cb6770a9a"
  },
  {
    "url": "2.0/settings/user.html",
    "revision": "8fdbdc0683d4d300e1bc960eefb3663b"
  },
  {
    "url": "2.0/settings/webforms.html",
    "revision": "58b58a30072bbaaa11a91c790f52b5b4"
  },
  {
    "url": "2.0/settings/workflow.html",
    "revision": "a4b096410fa13272c8f5856d8a6b6ebf"
  },
  {
    "url": "404.html",
    "revision": "348e9a8515d492f7f34b1aee42d468eb"
  },
  {
    "url": "assets/css/0.styles.ab9466d3.css",
    "revision": "a7946032f7d67be5525dcdbe05829b9e"
  },
  {
    "url": "assets/img/activity.84b9d87d.png",
    "revision": "84b9d87df2efc746ed3522ab63512b3f"
  },
  {
    "url": "assets/img/activityGrid.48c01b3b.png",
    "revision": "48c01b3b77d2141d66226a6e5104b913"
  },
  {
    "url": "assets/img/addressInformation.56af3a0c.png",
    "revision": "56af3a0c3995b45e80f4c62703725e3b"
  },
  {
    "url": "assets/img/arabic.0a93391c.png",
    "revision": "0a93391c61099d616361b157e3abb4a9"
  },
  {
    "url": "assets/img/attribute.d87399ac.png",
    "revision": "d87399ac1144f6c5759204627af4bfea"
  },
  {
    "url": "assets/img/attributeGrid.78f077f5.png",
    "revision": "78f077f5bc9cd558df7fea8542069eb6"
  },
  {
    "url": "assets/img/composeEmail.20de2d71.png",
    "revision": "20de2d71bd5baad67647f47e07d1d9ee"
  },
  {
    "url": "assets/img/contactDetails.e9cbf2d4.png",
    "revision": "e9cbf2d4cfc4f9024f838b649a270ac5"
  },
  {
    "url": "assets/img/createActivity.b4dbe33e.png",
    "revision": "b4dbe33e1714bab0dec571c60663897d"
  },
  {
    "url": "assets/img/createAttribute.7fe860f5.png",
    "revision": "7fe860f5d4d519e754952c632c459eee"
  },
  {
    "url": "assets/img/createGroup.5c2b130f.png",
    "revision": "5c2b130fe03fbdcc2bb1cfd5893e7fe3"
  },
  {
    "url": "assets/img/createLead.2572e3a4.png",
    "revision": "2572e3a421e5d0c4783f338d50accddd"
  },
  {
    "url": "assets/img/createOrganization.163f3263.png",
    "revision": "163f32635cb7d24498d6d0566bc62c71"
  },
  {
    "url": "assets/img/createPerson.302c6328.png",
    "revision": "302c632826726787897184658d2ab0c2"
  },
  {
    "url": "assets/img/createPipeline.8f5b4884.png",
    "revision": "8f5b4884438bf6a6e30da2076bbe3f71"
  },
  {
    "url": "assets/img/createProduct.71539366.png",
    "revision": "7153936670c271e10fe2b6ca9d1be449"
  },
  {
    "url": "assets/img/createQuote.a8289d7e.png",
    "revision": "a8289d7e8feef601b4631ff7866eeae1"
  },
  {
    "url": "assets/img/createRoles.ed099bc6.png",
    "revision": "ed099bc622162b727b24b909a0ece8bb"
  },
  {
    "url": "assets/img/createSource.89eff8f3.png",
    "revision": "89eff8f3942e370c570f36e9ba4f9f01"
  },
  {
    "url": "assets/img/createTags.86fd04f0.png",
    "revision": "86fd04f09559722af0d87b1aa91d7a95"
  },
  {
    "url": "assets/img/createTemplate.0683691f.png",
    "revision": "0683691fe5ce5c1a9df10ce5978632dd"
  },
  {
    "url": "assets/img/createType.00de4ef5.png",
    "revision": "00de4ef5b0aba2890997a336f976e8a3"
  },
  {
    "url": "assets/img/createUser.76c94c54.png",
    "revision": "76c94c54310c0c7ecc8ee609082bc74b"
  },
  {
    "url": "assets/img/createwebForm.0e6d83d3.png",
    "revision": "0e6d83d34b1bc267a8ccd09481e6a6b4"
  },
  {
    "url": "assets/img/createWorkflow.0178f529.png",
    "revision": "0178f529ccd5c32d0b39a3093690c475"
  },
  {
    "url": "assets/img/emailSmtp.fc81a9c7.png",
    "revision": "fc81a9c792b541e98720f2029591fff8"
  },
  {
    "url": "assets/img/emailTemplate.eba7557f.png",
    "revision": "eba7557fd4db6aa55f98a6e666ce561b"
  },
  {
    "url": "assets/img/group.781b0108.png",
    "revision": "781b01089a411a7026a3d2e19d5cc168"
  },
  {
    "url": "assets/img/groupGrid.f4324efb.png",
    "revision": "f4324efbd91717ba05da53dcf7ad5d02"
  },
  {
    "url": "assets/img/leadDetails.eed9754d.png",
    "revision": "eed9754d2fac4522c2b4a8e9b6e75738"
  },
  {
    "url": "assets/img/leadOutput.29b9877c.png",
    "revision": "29b9877cf7fafd8bb4905cc8d7f328fc"
  },
  {
    "url": "assets/img/locale.a0a2adc1.png",
    "revision": "a0a2adc19974a4b40ad055e7a5491490"
  },
  {
    "url": "assets/img/mailInbox.08c4ece6.png",
    "revision": "08c4ece64c56b67010b013d2b8266134"
  },
  {
    "url": "assets/img/mailOutbox.4a309202.png",
    "revision": "4a309202d0b670c9212fcc22874ee319"
  },
  {
    "url": "assets/img/mailSent.cb887ca5.png",
    "revision": "cb887ca57ba6c5725fb81be71907f590"
  },
  {
    "url": "assets/img/mailTrash.f2046ea7.png",
    "revision": "f2046ea7873e52213d5f43787e06043d"
  },
  {
    "url": "assets/img/option.dfdb5c94.png",
    "revision": "dfdb5c944ff1e4ad70ed17a675f7b400"
  },
  {
    "url": "assets/img/organization.09772cfb.png",
    "revision": "09772cfb78ed42982b26fbbdf1342810"
  },
  {
    "url": "assets/img/organizationGrid.aedf4e32.png",
    "revision": "aedf4e3216f69616e05c4b481d20ab2c"
  },
  {
    "url": "assets/img/person.5d4728a8.png",
    "revision": "5d4728a8b44f36dcea739ff2df5140d8"
  },
  {
    "url": "assets/img/personGrid.1a0e6dc7.png",
    "revision": "1a0e6dc79b210b97ea99db081806cfda"
  },
  {
    "url": "assets/img/pipeline.c78ab5f6.png",
    "revision": "c78ab5f6a84d3cc450ebcfc78f3e38f7"
  },
  {
    "url": "assets/img/pipeline.dd8c5adf.png",
    "revision": "dd8c5adf30a4fa2c1fad007eba3008c2"
  },
  {
    "url": "assets/img/pipelineGrid.330820ce.png",
    "revision": "330820ceaa8e9b4723c2b20603a114af"
  },
  {
    "url": "assets/img/product.946ea409.png",
    "revision": "946ea409738c6f5f8a842c90cffd58ac"
  },
  {
    "url": "assets/img/productDetails.88d112af.png",
    "revision": "88d112af4fd9b5ea3ba02f62890adf3e"
  },
  {
    "url": "assets/img/productGrid.401f3283.png",
    "revision": "401f328349f49ccf37d72473901b12cc"
  },
  {
    "url": "assets/img/quoteGrid.6ac5176f.png",
    "revision": "6ac5176f72ff88ff4094ca630035a5d0"
  },
  {
    "url": "assets/img/quoteInformation.e136cdf8.png",
    "revision": "e136cdf881f7be022d7d9f56d8131ba0"
  },
  {
    "url": "assets/img/quotesItems.cc5bc08f.png",
    "revision": "cc5bc08fe4369a473f7e8853816df709"
  },
  {
    "url": "assets/img/role.efe64b08.png",
    "revision": "efe64b088a7a7ef33d94273057802599"
  },
  {
    "url": "assets/img/roleGrid.001cd3ed.png",
    "revision": "001cd3ed7a063cfa735983c697798845"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/source.2776d0d2.png",
    "revision": "2776d0d20eeca24fc1a19207126524fb"
  },
  {
    "url": "assets/img/sourceGrid.2a199045.png",
    "revision": "2a19904521c47e37a781f1b32ab016f7"
  },
  {
    "url": "assets/img/tags.e87acb86.png",
    "revision": "e87acb8697bc271ae5567fc7f76939f4"
  },
  {
    "url": "assets/img/tagsGrid.43a32e8d.png",
    "revision": "43a32e8d745862bcc36a15fdc2fad813"
  },
  {
    "url": "assets/img/templateGrid.39b7a491.png",
    "revision": "39b7a491f9504b2283602126d379062d"
  },
  {
    "url": "assets/img/templateWorkflow.93147d38.png",
    "revision": "93147d383f4f8830e2c7df223f30938d"
  },
  {
    "url": "assets/img/type.c23a4f28.png",
    "revision": "c23a4f28ddfd29678d07e4d8dc4c44a8"
  },
  {
    "url": "assets/img/typeGrid.bae8f055.png",
    "revision": "bae8f0556d784d165263e6cb060996ea"
  },
  {
    "url": "assets/img/user.135f79c0.png",
    "revision": "135f79c00ad7f5043c558b06dbcce123"
  },
  {
    "url": "assets/img/userGrid.1910859d.png",
    "revision": "1910859d5ea4ddb1c5232d3328f4c870"
  },
  {
    "url": "assets/img/webform.bcb0ead1.png",
    "revision": "bcb0ead192e685d4f45f64bbf3622ff7"
  },
  {
    "url": "assets/img/webformGrid.5dc79039.png",
    "revision": "5dc79039525090180844f58614c0679b"
  },
  {
    "url": "assets/img/workflow.82953700.png",
    "revision": "829537008dac0c8933f743e81873f457"
  },
  {
    "url": "assets/img/workflowGrid.b74678e7.png",
    "revision": "b74678e733c101de59d8f8ffc963461c"
  },
  {
    "url": "assets/js/1.f5c9e279.js",
    "revision": "6b5a672143a868b5df2393d391c604d2"
  },
  {
    "url": "assets/js/10.6a87a0dc.js",
    "revision": "8fc8ce78a5d39690f2cac50d6df01b29"
  },
  {
    "url": "assets/js/11.9b088907.js",
    "revision": "c37c255b4e70d1f9213ccf288a0850ce"
  },
  {
    "url": "assets/js/12.f61ef63c.js",
    "revision": "e2094d61df0c189db742aba5da42644d"
  },
  {
    "url": "assets/js/13.670cfc0f.js",
    "revision": "97da67682606b893487439f1fd564d5a"
  },
  {
    "url": "assets/js/14.a2eae3a0.js",
    "revision": "91f438303c2edb6e104699c154f7bda4"
  },
  {
    "url": "assets/js/15.9cf419b6.js",
    "revision": "933b3e2594abffb4a4d572c1e52916b0"
  },
  {
    "url": "assets/js/16.5120c96e.js",
    "revision": "c2a6b87aac980c412bb6513b353ab1ba"
  },
  {
    "url": "assets/js/17.fe04b0d1.js",
    "revision": "097c2f6791afb181120702402ae896ec"
  },
  {
    "url": "assets/js/18.e546db43.js",
    "revision": "576657fbbff0b6965cb0e17b4d244e07"
  },
  {
    "url": "assets/js/19.6eef67ba.js",
    "revision": "f1aa2563cd2a0a68084e144aee0f609c"
  },
  {
    "url": "assets/js/2.f33d2980.js",
    "revision": "748ccaa407a8564f8663f5b4b9b85207"
  },
  {
    "url": "assets/js/20.b06e4b63.js",
    "revision": "bec3f465446548bc96a19b5cfd53033e"
  },
  {
    "url": "assets/js/21.c0879781.js",
    "revision": "5f1f8e3d013b946f6b1d89515645d768"
  },
  {
    "url": "assets/js/22.992a08a5.js",
    "revision": "15ef06638f6adabd4bd1e43520feeced"
  },
  {
    "url": "assets/js/23.7c3b5f40.js",
    "revision": "200d510fc03dde7be959d6cb0ec00b59"
  },
  {
    "url": "assets/js/24.a40018b6.js",
    "revision": "ba87e72ef56b2aa932d418b594a4e54e"
  },
  {
    "url": "assets/js/25.deba7b35.js",
    "revision": "d4f4c8164cb262e9cec4cf5be1471688"
  },
  {
    "url": "assets/js/26.3a2d603f.js",
    "revision": "2c88aa5ed998f6fae4ba47ac679ed868"
  },
  {
    "url": "assets/js/27.7d2494f0.js",
    "revision": "056a39dc1ba2ad824dc4dd66e846ba00"
  },
  {
    "url": "assets/js/28.04aa4584.js",
    "revision": "5e68b4486fe3f29f148cb8c3682e03b2"
  },
  {
    "url": "assets/js/29.e83faabb.js",
    "revision": "b46b7326cab820da516f29be87a356a6"
  },
  {
    "url": "assets/js/3.1ef4c261.js",
    "revision": "a41e008667cd9d22407fd31bc14d2d37"
  },
  {
    "url": "assets/js/30.2ed12dbc.js",
    "revision": "ff82850bb438d70a792f6cffd8a7ba72"
  },
  {
    "url": "assets/js/31.b873237f.js",
    "revision": "11b6df34cf33fb0aafd3bd8180a2a530"
  },
  {
    "url": "assets/js/32.7ceec3a2.js",
    "revision": "26525b6d5adf2d8161646f16e2f0ed83"
  },
  {
    "url": "assets/js/33.e5163e19.js",
    "revision": "fe0b675113d206e58d192dacab28ab15"
  },
  {
    "url": "assets/js/34.868da75b.js",
    "revision": "93e8a459c0276a026e733bcaa308a688"
  },
  {
    "url": "assets/js/35.bf59c232.js",
    "revision": "cfc9fbd62c12febbfe69041de99385d5"
  },
  {
    "url": "assets/js/36.3bba4e17.js",
    "revision": "cd7006f0e94a88c12381e62fc6dde489"
  },
  {
    "url": "assets/js/37.41e66f0d.js",
    "revision": "ebfce1050f5cbc54cdf5967f874db42f"
  },
  {
    "url": "assets/js/38.890af6b9.js",
    "revision": "962bd96d62b068d317e81da754805681"
  },
  {
    "url": "assets/js/39.ab754b0f.js",
    "revision": "07f46d209abfd1bb6058e230599b47df"
  },
  {
    "url": "assets/js/4.9b20bae7.js",
    "revision": "832baa0113093ddb3bdff010eec8409b"
  },
  {
    "url": "assets/js/40.07458647.js",
    "revision": "a335851a13aa87f43a0ef17fc814d7e3"
  },
  {
    "url": "assets/js/41.17821c4f.js",
    "revision": "66cff29ff1d09dc3ae34636b4330c4d8"
  },
  {
    "url": "assets/js/42.30575e23.js",
    "revision": "6a2ab9016d11684da1e9d2a3f27ddede"
  },
  {
    "url": "assets/js/5.eca9d624.js",
    "revision": "a171fc41aa0e80902671198096a0b8f7"
  },
  {
    "url": "assets/js/8.f0946bd7.js",
    "revision": "175e877214ccf34f966461bf9138dfbb"
  },
  {
    "url": "assets/js/9.f40986bb.js",
    "revision": "e033f0488079148ba04691c89d523f49"
  },
  {
    "url": "assets/js/app.8cff5f3b.js",
    "revision": "97cb2573399b61b782f66dc30060ff01"
  },
  {
    "url": "assets/js/vendors~docsearch.43717ccd.js",
    "revision": "23a5df6151c94ebbb38b3e4a497c5882"
  },
  {
    "url": "index.html",
    "revision": "73ba60cb40b6bb88131feb81fa5773bf"
  },
  {
    "url": "logo.png",
    "revision": "8c22925599c4ca272c95a5be8779680f"
  },
  {
    "url": "logoBot.png",
    "revision": "efd0d8a4bfd44b3e2c264040d5529d16"
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
