if(!self.define){let s,e={};const a=(a,r)=>(a=new URL(a+".js",r).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(r,i)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let c={};const f=s=>a(s,d),b={module:{uri:d},exports:c,require:f};e[d]=Promise.all(r.map((s=>b[s]||f(s)))).then((s=>(i(...s),c)))}}define(["./workbox-1ab968a5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/1.html-0DqsfSdF.js",revision:"46e289fcd54b7ade13bf27305d3a4970"},{url:"assets/1.html-1Tnzt2nU.js",revision:"aea354fcedf306664edef7e44855c90f"},{url:"assets/1.html-5ERl4JHL.js",revision:"14c13ff8b3a58d12c61e4335abd9341f"},{url:"assets/1.html-amzExNIY.js",revision:"7bbaf6a11eddb547517c52806276a8e7"},{url:"assets/1.html-B0DOR7x9.js",revision:"ab792e20ffc70ddb1cb6d588a0c4b579"},{url:"assets/1.html-B9hn-jJy.js",revision:"bb9d23fe6ef93f38599b894a97090c82"},{url:"assets/1.html-Bc0xpFfA.js",revision:"be443b7ffe0d045d2bdb5e28fd267369"},{url:"assets/1.html-BDGyKBGq.js",revision:"ad2cabead393ab76e71371d5034899c7"},{url:"assets/1.html-BHDwYGve.js",revision:"ab9a6b14584f88029a75bdf441b70519"},{url:"assets/1.html-BOI5rkyA.js",revision:"fc81a0cfab0ef8dc4451a56fc44029f2"},{url:"assets/1.html-BOix3PvU.js",revision:"3d77f4375430a07addbb9edbe6a76e34"},{url:"assets/1.html-BpeRIwc4.js",revision:"735a3c085ff619716cb0973abc2f1e3b"},{url:"assets/1.html-BTzZj9eq.js",revision:"0144b2dc16208728d8d2713f6c435296"},{url:"assets/1.html-Bvtmf7fj.js",revision:"3ad5782f95e54754b1a5d4045edeeabb"},{url:"assets/1.html-CaDmrOdj.js",revision:"55f24b0c8dff7992a3ae007e6af852d9"},{url:"assets/1.html-CgvpJ1Zv.js",revision:"ad0fd41eb8b6a6ea35a545bd8f5f6748"},{url:"assets/1.html-COxQhtoc.js",revision:"aafb1dd7b8197fd4b862c13a179cebe0"},{url:"assets/1.html-CUCuUAJc.js",revision:"6f6f82b0e7ba0fe2a96ea79bf2137307"},{url:"assets/1.html-CvHnN1Qt.js",revision:"c8ee68a60b5a4577777cb55434fdd6c9"},{url:"assets/1.html-CwKSo4yS.js",revision:"31ab4e95ec2a7619f2e2019c23855679"},{url:"assets/1.html-D_EL1s4i.js",revision:"43ea8f510af19f2958f1042a769f1918"},{url:"assets/1.html-D-toWseo.js",revision:"00ba53a2c5b3971e7213ac0687e83de8"},{url:"assets/1.html-D134floV.js",revision:"55d5a7d153845bb17d0c22df3f298d3f"},{url:"assets/1.html-D4XB1u_C.js",revision:"bc1e883a5a30bc5a2248350a99be4bbc"},{url:"assets/1.html-DA5t0Bly.js",revision:"021c15e0cd7200bc851c67c714bccace"},{url:"assets/1.html-DCQq3APQ.js",revision:"1d6c1a94447a4ea0a2f44cdef38523af"},{url:"assets/1.html-DQ4yYLgJ.js",revision:"6a2426ba2f6d9d70a6e5dbc96e4dd0b9"},{url:"assets/1.html-Dwuh1n9I.js",revision:"48205c1b22bad276a0fe1c26b5d75301"},{url:"assets/1.html-gWWeR437.js",revision:"56863d348b864947e33e23647e9cd67b"},{url:"assets/1.html-iDsecfLW.js",revision:"6a45e278a8b0b858651b1d0d4b482520"},{url:"assets/1.html-IWXKLbkJ.js",revision:"c62dd0e2d89d9fce32418f6addef33ae"},{url:"assets/1.html-kiGUZlNw.js",revision:"ba14650fec165695f680bf98f302f8ff"},{url:"assets/1.html-MmCEx-A_.js",revision:"05ab9a26d9ce2db15444685a8e9e0b0a"},{url:"assets/1.html-o1iGBPa9.js",revision:"bab5d1347bde6e87e48af04b226eb8fa"},{url:"assets/1.html-PtSi8KQw.js",revision:"51cb93e223eabc70db995831aad5e357"},{url:"assets/1.html-Srf-mbF4.js",revision:"245e4032f17a7a2ac28e6db05385d3cb"},{url:"assets/1.html-UQZpRksg.js",revision:"1d6a8226408bd1c574a38e8f42e25678"},{url:"assets/1.html-vruxTUkU.js",revision:"39d79ffa7442f434e0f4f2e1ff73fc64"},{url:"assets/1.html-Yss0Q4MO.js",revision:"8778939815a3a1a5ab09d0268a6244e6"},{url:"assets/2.html-BpaBS9Ky.js",revision:"cf7a000fafebbb0523511e47585409fb"},{url:"assets/2.html-BZl3vkmT.js",revision:"32127d8a70086c5c4a02b13c322276e8"},{url:"assets/210209.html-BnrbUGKQ.js",revision:"29c68c7aea53bad75ad6c483aa667cf9"},{url:"assets/210913.html-D2EqnXfe.js",revision:"be06d0e4d4f40aa4c40bbaaf92ecb5d9"},{url:"assets/220301.html-BrXXv7Id.js",revision:"3f8e214e31216799b157f23ecc838037"},{url:"assets/220505.html-CKnPApyT.js",revision:"bd33136f38772fb3184994e542ee8efa"},{url:"assets/220601.html-5yMOWCeS.js",revision:"f9a478a014b0ecb953506ef423d38747"},{url:"assets/220925.html-rSAcFkXw.js",revision:"deb90b82a1f8813d5ec1403c3d8dde9e"},{url:"assets/230831.html-7sGE_LJ2.js",revision:"9d7695e4e5b219ac4dafabb599b87c4d"},{url:"assets/3.html-CsJDRx35.js",revision:"b5c54f3ebed39af27575a6194bb04a84"},{url:"assets/404.html-BFiFNksH.js",revision:"d84cbcf9d12829518040682c6af14f2c"},{url:"assets/bds-server.html-I4Xx1o6y.js",revision:"adb23202e4f7fd7cbeb12e1393be3f2e"},{url:"assets/chrome.html-BndV0Zgz.js",revision:"2e5784a79a1ba48a1375f6a941b324c7"},{url:"assets/docker.html-BFKlC1X5.js",revision:"6eba7158fd689139759404a03ea249c6"},{url:"assets/flarum.html-CWrXExmu.js",revision:"3d91ff7aab7d357f1135c0b480871451"},{url:"assets/friendship-link.html-BKtd9Yfb.js",revision:"287e7fa9128abca75a594bb83c8599f5"},{url:"assets/frp.html-2nmssTbf.js",revision:"cab6f267ad1641d12cc56a83dcdf4109"},{url:"assets/giscus-aTimukGI-CKTvSCx2.js",revision:"49998312474e73b233dd9f9e68b41341"},{url:"assets/giscus-theme-dark.css",revision:"3cf7c64a431a026961c5d12ea0db59cb"},{url:"assets/giscus-theme.css",revision:"0c68524a970592496dfff657f2851d97"},{url:"assets/go.html-DswTiK52.js",revision:"ab5376df78a0bcdb368ba4ff1449f18c"},{url:"assets/img_upyun_php.html-B9gr076O.js",revision:"1b720386bc28542cec3d0949daeb7f51"},{url:"assets/imgapi.html-DvHBJGFQ.js",revision:"457e40a8b5af58d9001fe25db9004534"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-DcBKgyEv.js",revision:"d9f3cdade50739bc15b95938b4048c61"},{url:"assets/instruction.html-CMwt_RlE.js",revision:"a48df2d4cd7bd4b68a01430d87ffd842"},{url:"assets/java-server.html-CuEJewQC.js",revision:"d058900542f8eb34d17ad3b9ff9489e0"},{url:"assets/java8.html-D84Bf-y7.js",revision:"6bf4c39e22e62a0cd6100525fdbd70b2"},{url:"assets/markdown.html-DEU9cKbI.js",revision:"89fca401fb1f4f5ab86fc23dc1716b6f"},{url:"assets/mcsm.html-gH3wnYuJ.js",revision:"4f473d05cc7cd9571f73fce26699070e"},{url:"assets/mcsm9.html-CeHicDVg.js",revision:"c22236fc5770c8cbe5806e1dabd6aa59"},{url:"assets/netplus.html-DMMn6anS.js",revision:"0244ce1ba760612103bfe6c84dd4fbdc"},{url:"assets/nextcloud.html-C5hn84rj.js",revision:"8abc57e78246e9c0e151f046c8dab77d"},{url:"assets/node.html-BykGqZ1Z.js",revision:"47cb60728f4f5f58b9992ec5494c487d"},{url:"assets/node.html-DCFg5Fdu.js",revision:"69680e615ed069ec18506d4e530582d4"},{url:"assets/posts.html-D6jTi_20.js",revision:"1bdee19b7a04b78e29ab3a9f0f9a0570"},{url:"assets/pterodactyl_docker.html-yLAlOI5o.js",revision:"13dce7d051372f7d1f4a9720de509a54"},{url:"assets/pterodactyl.html-D6zdzgil.js",revision:"00123e9b27804fc73b7c8773c44fdb8e"},{url:"assets/python3.9.html-YkMJIPh8.js",revision:"4c96c994b50c9a8cf995f61dc33899af"},{url:"assets/reco-valine-BI2JzRng.js",revision:"4d2463af5e36be45cc074299117ed469"},{url:"assets/selinux.html-CqGdOqCR.js",revision:"5682dbc97fe46f091fe250bb1c31ab10"},{url:"assets/style-DMwwAQd0.css",revision:"93edf10ed42199a14e118304de0f0e1c"},{url:"assets/taken-8ZGYccs_.svg",revision:"ff5b846addb97c521208fc91efed5647"},{url:"assets/timeline.html-DrGWhd_o.js",revision:"67971475eaee32f039b9418fcd4944ad"},{url:"assets/vuepress-blog-on-github.html-DfbxBAaH.js",revision:"7c41be0311837eba3a444464b2eddc09"},{url:"assets/yutto.html-geTHLlOx.js",revision:"22ce44575abcafa98161ddf0e20d1fec"},{url:"bg.svg",revision:"56fa499cc43cb4b0dd1cf4037b309d3c"},{url:"icon_vuepress_vlssu.svg",revision:"17aa327002484349e4c087a638848d8f"},{url:"index.html",revision:"81bf4da750803eed02dab611df791277"},{url:"404.html",revision:"8e4936661d449a1439922af92d39dcf2"},{url:"assets/bds-server_1-3ZMTEdY2.png",revision:"4a7c1686ddce0f5bf0d665898a758dcf"},{url:"assets/bds-server_2-BAKfZFEV.png",revision:"8f7e31f0f62645f02ea1e664d90f5de9"},{url:"assets/flarum_1-CvGMRtQR.png",revision:"62277a9ac46ac3bfbc0ac95fc72d0131"},{url:"assets/frp_1-BxhZsG5B.png",revision:"5ecf807e02b08d811c4b2cbdf8b7034b"},{url:"assets/frp_2-DXPrcbWL.png",revision:"026a3340583581934236c8206d4d1947"},{url:"assets/imgapi_1-sCpZP1W_.png",revision:"6ca88dcb6e401969c9f5a35577ba8924"},{url:"assets/imgapi_10-DaTKDTpu.png",revision:"532764d4dbb61ce602bf7d6480334128"},{url:"assets/imgapi_11-BKAmb4Jf.png",revision:"b51a650d229d3d70dd0835ab4484dfa3"},{url:"assets/imgapi_12-D9glm-WC.png",revision:"3ea12f2988adae2080d2d6ff004f6dc7"},{url:"assets/imgapi_2-DdWoMjhD.png",revision:"3717ca981b62f7298e624d5206829f59"},{url:"assets/imgapi_3-BYR3dENc.png",revision:"0bc89b9c64f26705adf56026b37a1108"},{url:"assets/imgapi_4-BUlId-JP.png",revision:"d085fab259815e2e3012e4d8898fdc79"},{url:"assets/imgapi_5-Bwzj1V1S.png",revision:"97c1d0a7130a3d6c76ab49d79ab747fc"},{url:"assets/imgapi_6-BIF1NyTr.png",revision:"3a0c57f86438696d8b2f807b34a46a0d"},{url:"assets/imgapi_7-V2taPOcr.png",revision:"c549384edc66826b3eb1c7e99f5eea68"},{url:"assets/imgapi_8-BJynHYsl.png",revision:"98ea5d32686ab39940fcea62f6496c39"},{url:"assets/imgapi_9-59VUKyua.png",revision:"b1d7d0d804ae77ba0129c4278488eefb"},{url:"assets/java-server_1-Mf8fd9lI.png",revision:"8a989bb42c90c8107fde0e12e63dcb34"},{url:"assets/java-server_10-9RUf51IV.png",revision:"1042695b8b289048a923f43ef98de355"},{url:"assets/java-server_11-MP_SEiSn.png",revision:"0cb03cccfbd644ca21bb602f05118188"},{url:"assets/java-server_12-B5b5ZEby.png",revision:"e98d776ae46e4359a3a6f843477ef46c"},{url:"assets/java-server_13-CMO0T1dw.png",revision:"96e316af689a80a28ed202879f4ab5fa"},{url:"assets/java-server_14-DBJEwj9B.png",revision:"3f9868d78e01d799eac8b0a0b38e1c41"},{url:"assets/java-server_15-D0H3BCcn.png",revision:"cd9151c119bcfcfe995cf42a41e9a8d8"},{url:"assets/java-server_16-JWprDSMS.png",revision:"5590bf496702955eee4a13e245570ad3"},{url:"assets/java-server_17-Czj_dIkM.png",revision:"4ebb2427fccf7f0c507aac4dbfb85894"},{url:"assets/java-server_2-BqpN9uc7.png",revision:"add7e36816eb363b5e5e69222d40bddf"},{url:"assets/java-server_3-CzrXmWjG.png",revision:"8245dff8bc979c06e76246945762103d"},{url:"assets/java-server_4-Qp4uAXux.png",revision:"7c8a05c821bbf8a3e9603158ccde8f6f"},{url:"assets/java-server_5-Boag0xVj.png",revision:"ce17e47b303465f08033eb9ad57c139e"},{url:"assets/java-server_6-C9qAiZJd.png",revision:"ac8b89ae7a7cf7a4900767d5f5e1492f"},{url:"assets/java-server_7-DKIMdRDo.png",revision:"e4cea0138a74241dd6c65290796d4d23"},{url:"assets/java-server_8-GEWCnwZ6.png",revision:"3853fdda372a9f1eccaa7b8a91d35892"},{url:"assets/java-server_9-DQKIDSqr.png",revision:"7302f05395df8ed8bcdaab366c07920b"},{url:"assets/java8_1-D33N7VEM.png",revision:"170a03caf0f72640e6898ff835864e70"},{url:"assets/java8_2-C5GlYPlJ.png",revision:"b416f1d9f5afd578eb76241b0015001a"},{url:"assets/java8_4-CBG-6KXb.png",revision:"e0ac3bd776ffe6fb33494e6ea7297d40"},{url:"assets/mcsm_1-ate9x0FT.png",revision:"d65b698c03ffc8bcc21478c585965bd7"},{url:"assets/mcsm_2-NfKOjrE8.png",revision:"82bb89dc614b9371105ec2dcf9a34629"},{url:"assets/mcsm_3-DlSCNFkK.png",revision:"58404c9ad9b6493b11861d54975bd032"},{url:"assets/netplus_1-CJnU_Lpa.jpg",revision:"666aba4e7b65bddce380a43fc2e2a635"},{url:"assets/netplus_10-ChKRgVMI.png",revision:"93868539ea780280947732ad076c4043"},{url:"assets/netplus_11-Bgx4Lc88.png",revision:"365063e6f6080f5deb6b3f8972f64da5"},{url:"assets/netplus_12-QriLjOWu.png",revision:"0b26bb08f07ebd0cecc553a0613a2e5d"},{url:"assets/netplus_13-DG709pLg.png",revision:"0e93b3221545e651bb8781ec56d40447"},{url:"assets/netplus_14-B1mR1miU.png",revision:"aebe7e2703e092d6caeeacd7501e3ef2"},{url:"assets/netplus_15-CzfDT3cL.png",revision:"f9214ca51a295cb10156d695e85b201a"},{url:"assets/netplus_16-R2WfYrHl.png",revision:"e6a107346623fe6ae97269e068a7e0ef"},{url:"assets/netplus_2-EUYuM5pS.jpg",revision:"5f3f0d7fbaf22372b0ab28fad744492d"},{url:"assets/netplus_3-BOIYX995.png",revision:"3e30eb7ed206090c0b2884fe15e98a04"},{url:"assets/netplus_4-BmyVZyex.png",revision:"0801331c0a834ba796513a878c10213b"},{url:"assets/netplus_5-C5A9Iy0N.png",revision:"73be0c0c4fda6d6245bd66e455ae9d15"},{url:"assets/netplus_6-Rqt8s6bB.png",revision:"8e492dc4dcacbe75068cf66908fda8cb"},{url:"assets/netplus_7-BlVRki14.png",revision:"456621a8ecfb312ddc9f3ef9f3b6d609"},{url:"assets/netplus_8-HJYr7PUB.png",revision:"458d74fcc07bcc54144eda2cbfa2ac4b"},{url:"assets/netplus_9-BMLW-iYV.png",revision:"3dd172b95ba02e7988c268193e3ef2ec"},{url:"assets/nextcloud_1-BFK9WHmT.png",revision:"fecba4ae54aa9bd376b82217b33fadde"},{url:"assets/nextcloud_10-DXsuUNjN.png",revision:"5d3abf587c508e3a62c748d5873e51ae"},{url:"assets/nextcloud_11-ov2XGW3K.png",revision:"3c4e78548a7fab8f8efd1b20916b93fb"},{url:"assets/nextcloud_2-DrGl8s23.png",revision:"9bf1139908ebd26fed3df2d8bb1da3cf"},{url:"assets/nextcloud_3-C9i7STFB.png",revision:"8f5b6ca3ab89ac7fce766f67aca90e20"},{url:"assets/nextcloud_4-B8zKwJrB.png",revision:"e84bfe2f35c128fc0bff69f55412d885"},{url:"assets/nextcloud_5-D4qdqeRI.png",revision:"8752d289eb392b238eadacce6a200d3d"},{url:"assets/nextcloud_6-BEUyKMFx.png",revision:"c09b9e7c3ae6ba6acf96fc03f60f7da3"},{url:"assets/nextcloud_7-YPgDrZr8.png",revision:"320940bfe93edcb7191c8a2a6a3f486c"},{url:"assets/nextcloud_8-BKLg3A2w.png",revision:"651f0eec2849621d47064bf42f9d2108"},{url:"assets/nextcloud_9-BdimUvDU.png",revision:"a36d6c338feac3f1687fcf61124e7b87"},{url:"assets/pterodactyl_1-CLlDCLNV.png",revision:"0b7bb98ca6e676396504c855603eef4f"},{url:"assets/pterodactyl_2-DjDDzDBR.png",revision:"e15e4adadfa913b5043909f9e4e70691"},{url:"assets/pterodactyl_3-Cz1WDvX3.jpg",revision:"ac996c9bb0734ee4cc13e0c38d2f5692"},{url:"assets/pterodactyl_4-CHE__Ggt.png",revision:"3fd6bc95931f1e824cf403b69d8e0912"},{url:"assets/pterodactyl_5-DARqCNNN.png",revision:"0069e01564c44b0732cbd06f6a987b8c"},{url:"assets/pterodactyl_6-5XYQFFZ9.png",revision:"70b3f4599104672f8a97eae4f1f45b5c"},{url:"comment.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"head.png",revision:"ace9329cafce4e18f7b10d05a3717823"},{url:"logo.png",revision:"1493ed742e50c594fc943cbbef775e0a"},{url:"WechatIMG3.jpg",revision:"3151a0a716a1ed2569fa5185b132202d"}],{}),s.cleanupOutdatedCaches()}));
