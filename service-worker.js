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
    "revision": "8b5c2ce5387f52a7a4caca407d11ab6d"
  },
  {
    "url": "2.0/configure/configuration.html",
    "revision": "33da4c829aa2387d58e7467e014f0189"
  },
  {
    "url": "2.0/contact/contacts.html",
    "revision": "69de47110f0c9ed865f64758862aabff"
  },
  {
    "url": "2.0/introduction/index.html",
    "revision": "a3644e8df1fbd5b034b1e73811a6b647"
  },
  {
    "url": "2.0/introduction/introductions.html",
    "revision": "abc8ec1636f0787637d3d48a3488eb15"
  },
  {
    "url": "2.0/lead/leads.html",
    "revision": "bf5ff707c6b36583d0a6c54fcde1a51b"
  },
  {
    "url": "2.0/mail/mails.html",
    "revision": "f46bca78236d9a633c39ce1bd6ad33ac"
  },
  {
    "url": "2.0/product/products.html",
    "revision": "2eb69edb202faf0de34b4c334a778b31"
  },
  {
    "url": "2.0/quote/quotes.html",
    "revision": "a1c3aee225bb8adae267c346f2539620"
  },
  {
    "url": "2.0/settings/attribute.html",
    "revision": "7be19ec293090c71b4dc2f682123e92c"
  },
  {
    "url": "2.0/settings/emailtemplate.html",
    "revision": "564b6a61bdb4a569720e0e0da461bfb0"
  },
  {
    "url": "2.0/settings/group.html",
    "revision": "a2e33f130fd189669d8351363c270232"
  },
  {
    "url": "2.0/settings/index.html",
    "revision": "38c1d7cacf0d8b4d3d4200467ef6c9f2"
  },
  {
    "url": "2.0/settings/pipeline.html",
    "revision": "2ef1438efe58dcf4138ab761a3f0f759"
  },
  {
    "url": "2.0/settings/role.html",
    "revision": "d66dfb533b19daf2d10a46b4776ed4cd"
  },
  {
    "url": "2.0/settings/source.html",
    "revision": "83ea8ae457e1b9685bc51a9e8d0a2217"
  },
  {
    "url": "2.0/settings/tags.html",
    "revision": "2a49890a9886d7dcd848f43b08b63cb8"
  },
  {
    "url": "2.0/settings/type.html",
    "revision": "86185a39de18cd1dc4f44b4ae44f0c43"
  },
  {
    "url": "2.0/settings/user.html",
    "revision": "965a8d5cb58337e499a8d83707bec8db"
  },
  {
    "url": "2.0/settings/webforms.html",
    "revision": "5b8929dc238fb2b5a0dae9808c39d016"
  },
  {
    "url": "2.0/settings/workflow.html",
    "revision": "6e652606a61bbaa2e4857af8b0aefdcb"
  },
  {
    "url": "404.html",
    "revision": "9e5124d3224586ea361fdbe3a9595b3c"
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
    "url": "assets/js/1.b4424842.js",
    "revision": "0454f7a9f70530e96406f6c5a433c2b1"
  },
  {
    "url": "assets/js/10.6a87a0dc.js",
    "revision": "8fc8ce78a5d39690f2cac50d6df01b29"
  },
  {
    "url": "assets/js/11.45998932.js",
    "revision": "ddcf01f61163ab0eff6af4f7d8664842"
  },
  {
    "url": "assets/js/12.f61ef63c.js",
    "revision": "e2094d61df0c189db742aba5da42644d"
  },
  {
    "url": "assets/js/13.8d43f0f6.js",
    "revision": "9a4fd68a4fa22b5ed63a68e850aa2f82"
  },
  {
    "url": "assets/js/14.6b5a0d08.js",
    "revision": "62c5b8344da47d662d33873e54eeda3a"
  },
  {
    "url": "assets/js/15.6a4d753d.js",
    "revision": "4e639c556709c9af8aac204b1e85c6bf"
  },
  {
    "url": "assets/js/16.82d14177.js",
    "revision": "698036eaf96e3d816c646d5e58fcab79"
  },
  {
    "url": "assets/js/17.74a1855e.js",
    "revision": "fa171dc3b99828a372108ebf97599eb6"
  },
  {
    "url": "assets/js/18.4312cfc1.js",
    "revision": "76cc2ac0bb9b21460ae96b0ecf4e93c7"
  },
  {
    "url": "assets/js/19.f79aca12.js",
    "revision": "1dc105c27133ddabf952c85d1832b3ed"
  },
  {
    "url": "assets/js/2.c6ccb9bd.js",
    "revision": "da681a775610109bbe5d97c7688ebb7c"
  },
  {
    "url": "assets/js/20.f18130ba.js",
    "revision": "916ed201b4d4368bc4841975cd819af8"
  },
  {
    "url": "assets/js/21.6780b2b1.js",
    "revision": "dc0c4e6a0c1904a1de797dbc14829ad9"
  },
  {
    "url": "assets/js/22.21cf2177.js",
    "revision": "768518b182bd03c33259cb6bccfd05d0"
  },
  {
    "url": "assets/js/23.a578fc86.js",
    "revision": "e7fdfa40db60bf94a16f8cc82aed3f97"
  },
  {
    "url": "assets/js/24.559c0c0e.js",
    "revision": "a5e1193dd3a4841b7746f478c1bf6a4e"
  },
  {
    "url": "assets/js/25.0d4d5ff6.js",
    "revision": "7437d6866d030eae97bb8bc52c22fd27"
  },
  {
    "url": "assets/js/26.1e85c8b3.js",
    "revision": "b590acc2f094dd61ccdbfa6260f94e5f"
  },
  {
    "url": "assets/js/27.8311adbb.js",
    "revision": "0120dd4cc8ef6f8d6c3b8ede6ae127e2"
  },
  {
    "url": "assets/js/28.0cff3b06.js",
    "revision": "bebe76e5d31967e6fa2c1c4705bc353c"
  },
  {
    "url": "assets/js/29.17a001ec.js",
    "revision": "41348f679b8984eee86fb878710e9ca6"
  },
  {
    "url": "assets/js/3.1603bf7d.js",
    "revision": "c5e038160a1ac98690ac848df2d8c7cf"
  },
  {
    "url": "assets/js/30.d0af696b.js",
    "revision": "8f886dd67ea7c96eaac5eb199cee5d42"
  },
  {
    "url": "assets/js/31.4630d2d1.js",
    "revision": "0c75ff63a09fa512612afb042a673c61"
  },
  {
    "url": "assets/js/32.38ee4185.js",
    "revision": "9a76cff1b32544cc9b53a022f8f35a8c"
  },
  {
    "url": "assets/js/33.96535f6a.js",
    "revision": "cd0ef49ef25d5c0ac12781d63bf943d6"
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
    "url": "assets/js/36.792b044a.js",
    "revision": "2d990e1d88cf2bd15d383c0be83eb2d7"
  },
  {
    "url": "assets/js/37.41e66f0d.js",
    "revision": "ebfce1050f5cbc54cdf5967f874db42f"
  },
  {
    "url": "assets/js/38.8d16ca90.js",
    "revision": "3cbbfed93d1427048651a4166f4dc6a7"
  },
  {
    "url": "assets/js/39.6d7d7336.js",
    "revision": "0f0caafa1847a7f69791ef1991333304"
  },
  {
    "url": "assets/js/4.cfb17b3d.js",
    "revision": "c408a9b43839237f0aa2b8927b976a52"
  },
  {
    "url": "assets/js/40.d0a6e7cb.js",
    "revision": "4be98d7098d966eecd1bbb52f766ebff"
  },
  {
    "url": "assets/js/41.53ad139f.js",
    "revision": "7a7f92190738ab414029851be29b610e"
  },
  {
    "url": "assets/js/42.2027c577.js",
    "revision": "c79ad6e531582f73b6b4130eb8788acf"
  },
  {
    "url": "assets/js/5.34898121.js",
    "revision": "bfe4d326488fd8689c60b46fe66075c3"
  },
  {
    "url": "assets/js/8.e90be738.js",
    "revision": "73f67cd66957ea160168842ba4f3a4aa"
  },
  {
    "url": "assets/js/9.dd89f0c3.js",
    "revision": "caa503d06b6b148717bef702fd2e1d67"
  },
  {
    "url": "assets/js/app.2a62d211.js",
    "revision": "f1b742b17bff4b0a4270e8c8cd912746"
  },
  {
    "url": "assets/js/vendors~docsearch.f9a45896.js",
    "revision": "b7a4944e7adaa84dd9574c35f6c68deb"
  },
  {
    "url": "index.html",
    "revision": "5cea94555d6674026346124a42860238"
  },
  {
    "url": "logo.png",
    "revision": "25c27b529904596b3db2054ebc47be50"
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
