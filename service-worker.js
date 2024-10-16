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
    "revision": "f61bbfa024f7217921092979e7cf9c7a"
  },
  {
    "url": "2.0/configure/configuration.html",
    "revision": "8f96ec595f71ad626bf1d4245155f7aa"
  },
  {
    "url": "2.0/contact/contacts.html",
    "revision": "0513ac14410ab627bf5cd5dea78da856"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "5352e01a1bbd0bb86f595be9ceaa5b0a"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "85157f0d344d90530cc051e7828ea7c7"
  },
  {
    "url": "2.0/lead/leads.html",
    "revision": "aeaac6b465385a6cfd89f885922a5c66"
  },
  {
    "url": "2.0/mail/mails.html",
    "revision": "5406439678b46421e6fcf8dd495bd9fd"
  },
  {
    "url": "2.0/product/products.html",
    "revision": "ac4bf63259be76d00edae59a1ce5adeb"
  },
  {
    "url": "2.0/quote/quotes.html",
    "revision": "aac056bc57614179c67f2085b9db2d43"
  },
  {
    "url": "2.0/settings/attribute.html",
    "revision": "764c5c60a6a76cc05a3fb28e0f07b777"
  },
  {
    "url": "2.0/settings/emailtemplate.html",
    "revision": "940c6f5a3482cd46976ea96511cd6b17"
  },
  {
    "url": "2.0/settings/group.html",
    "revision": "19e9b4ef0dbbaa7a27e13f93916ba0cf"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "35dbc585a47bd5241cabdd2102c0adbd"
  },
  {
    "url": "2.0/settings/pipeline.html",
    "revision": "a8ce3bff864d2ac103b123090eb28b35"
  },
  {
    "url": "2.0/settings/role.html",
    "revision": "8fc1fcd48e2c97a8185eba57bde7da82"
  },
  {
    "url": "2.0/settings/source.html",
    "revision": "045640c4969f4f2e6089c5afb2272c6d"
  },
  {
    "url": "2.0/settings/tags.html",
    "revision": "b3110dda721ef4439e0077a6923609f5"
  },
  {
    "url": "2.0/settings/type.html",
    "revision": "6d26efd47d305df712d8f7ac1e9fbedc"
  },
  {
    "url": "2.0/settings/user.html",
    "revision": "aa913295b396146403f88435a1934390"
  },
  {
    "url": "2.0/settings/webforms.html",
    "revision": "6345a29b75f0f7a12a42731e04dcfe4a"
  },
  {
    "url": "2.0/settings/workflow.html",
    "revision": "02b3200ce7c881d56f31ff662ace7cd0"
  },
  {
    "url": "404.html",
    "revision": "5cbdf303dc6772c6354df694ba655889"
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
    "url": "assets/img/contactDetails.3f9a4733.png",
    "revision": "3f9a4733e149eac387beef6094a6199d"
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
    "url": "assets/img/createLead.30243a18.png",
    "revision": "30243a1807e9baa42b98b349ed35ccb8"
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
    "url": "assets/img/leadDetails.6fd6a244.png",
    "revision": "6fd6a244f209959763eac809378de09c"
  },
  {
    "url": "assets/img/leadOutput.b6aef900.png",
    "revision": "b6aef9007424acb68223d24a6563f2a7"
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
    "url": "assets/img/pipeline.0b6ee564.png",
    "revision": "0b6ee5640f70e0f82b451968f9d9d64e"
  },
  {
    "url": "assets/img/pipeline.c78ab5f6.png",
    "revision": "c78ab5f6a84d3cc450ebcfc78f3e38f7"
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
    "url": "assets/img/productDetails.9b5ade25.png",
    "revision": "9b5ade259b0755954574a131fa95c362"
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
    "url": "assets/js/14.63ae41ad.js",
    "revision": "f8f29286e99893a4df0dbd950322ed5b"
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
    "url": "assets/js/17.e16f8b25.js",
    "revision": "b2cd412b50d66c8ae26dcf75f11c9f76"
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
    "url": "assets/js/26.4682a364.js",
    "revision": "6e487eb0235e7bb0e948da373a9cb14e"
  },
  {
    "url": "assets/js/27.99b6f2d3.js",
    "revision": "e7db6ca0900eff4493c2481ffcfb62a7"
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
    "url": "assets/js/30.647d85b2.js",
    "revision": "ec8d0c2d116545fec92e4cffe80267cd"
  },
  {
    "url": "assets/js/31.9eebf37d.js",
    "revision": "818dd2b25643baad75ee48a8209ff1d8"
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
    "url": "assets/js/38.f45cb0e7.js",
    "revision": "5795c0a8910f89c5b205952b5c1fa307"
  },
  {
    "url": "assets/js/39.61605aa5.js",
    "revision": "dc0d3c842481a0f808d9c3df2f2c3af0"
  },
  {
    "url": "assets/js/4.9b20bae7.js",
    "revision": "832baa0113093ddb3bdff010eec8409b"
  },
  {
    "url": "assets/js/40.e09750ad.js",
    "revision": "55f2a0f0c7da26c3fa47cdd42a4b333f"
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
    "url": "assets/js/app.02f7f7e2.js",
    "revision": "e2f88a0ccf5b0ef04de92c1c61dbdf49"
  },
  {
    "url": "assets/js/vendors~docsearch.43717ccd.js",
    "revision": "23a5df6151c94ebbb38b3e4a497c5882"
  },
  {
    "url": "index.html",
    "revision": "137a5fac4e6b932332b1e89f5acc4243"
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
