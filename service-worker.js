if(!self.define){let s,e={};const a=(a,r)=>(a=new URL(a+".js",r).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(r,i)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const f=s=>a(s,c),b={module:{uri:c},exports:d,require:f};e[c]=Promise.all(r.map((s=>b[s]||f(s)))).then((s=>(i(...s),d)))}}define(["./workbox-1ab968a5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/1.html--21RBuWp.js",revision:"2a79e24ae681711db2c267d774193c68"},{url:"assets/1.html-BFRZbwN1.js",revision:"cd46c642f3b01cb23601a5ca402dcb48"},{url:"assets/1.html-BHyBU-P1.js",revision:"5e9d093f58a9a0680efeb9230feb004e"},{url:"assets/1.html-BkGtBn-A.js",revision:"f73fa1613651f4b47131d664798fc67a"},{url:"assets/1.html-BPb_JVl0.js",revision:"aa6ca9749421985d9ff844333d46e69d"},{url:"assets/1.html-BST4GIz_.js",revision:"d7560544f1160fdc9ffaba46cd4376c8"},{url:"assets/1.html-BTy_zCWc.js",revision:"a3a6eb4f2027f06944b2046516e7bf0e"},{url:"assets/1.html-BUJhdkUf.js",revision:"925a92cbb4a361bb99797fdf4209a7c0"},{url:"assets/1.html-BVqrAK9K.js",revision:"37929130f5b9750fbbc5755315b2c849"},{url:"assets/1.html-C0hCWBZ5.js",revision:"aab0a679a77169c90e173acdcc7fd04a"},{url:"assets/1.html-C3TBkENw.js",revision:"50f62919c5a33797d370cfcefce3364b"},{url:"assets/1.html-C5uHV4d5.js",revision:"2875bb951c2db2b3e3e7e22bad7bcabc"},{url:"assets/1.html-CBr-nu8p.js",revision:"d49b624c4a924db7cbd4351d09f02311"},{url:"assets/1.html-CCuKxVst.js",revision:"c5f1d551006064a87654f1c1a1031241"},{url:"assets/1.html-CgXINqpR.js",revision:"b081bccd515f4693f542df09c755c043"},{url:"assets/1.html-CJWj_E5P.js",revision:"d18d0da698f2b87de7008c2cc561a99f"},{url:"assets/1.html-CK6IdvSO.js",revision:"cee7891efa3ab7439cb170879a29bb08"},{url:"assets/1.html-CpdL3eHj.js",revision:"d85d14f63276e801268420ab7ef01afd"},{url:"assets/1.html-CTDjeFAI.js",revision:"a3a7a79e9f21283485b294b0a7716e71"},{url:"assets/1.html-CWYkIyif.js",revision:"1235c1a0e3f84f9ec7b271ca57af5695"},{url:"assets/1.html-Cx1u4ChQ.js",revision:"e2f175af3083c5babe6d1e3113ad9905"},{url:"assets/1.html-CXRkokvB.js",revision:"ab07b56d77ff1f60c7c3e0555d47d690"},{url:"assets/1.html-DD6mirAJ.js",revision:"24a99cd2a79e1a758e832cc8a86f5f6e"},{url:"assets/1.html-DhZ_YaaQ.js",revision:"cb35283cdbd6016b669c9afeee3bb682"},{url:"assets/1.html-DKezXyL8.js",revision:"6525421235151cebc671cb666520d549"},{url:"assets/1.html-Dkhoyfh3.js",revision:"5e6a634c0dbec6703f5acab7b88a620a"},{url:"assets/1.html-FVps7jpf.js",revision:"e81174617cfbf68a2f975451b2069608"},{url:"assets/1.html-he4B9dzt.js",revision:"a5c02f1165543265b0cf5260d6405f62"},{url:"assets/1.html-HIXqOqeH.js",revision:"23c8300c2106f3833640d681b257f90c"},{url:"assets/1.html-iH-gpDgB.js",revision:"1b85a1939d100e84e775abac0a79ff9d"},{url:"assets/1.html-iHF32psy.js",revision:"308d4d74adc89291013950033f007fab"},{url:"assets/1.html-jJAiE5hg.js",revision:"fe9953d92f40f7396bbb5b2aab7644c5"},{url:"assets/1.html-M46mqEf0.js",revision:"be970a404bf8d7e771a3e1521e38c100"},{url:"assets/1.html-mE6UfYFH.js",revision:"e91d775087dc1f04ebeff9e222aa9ee1"},{url:"assets/1.html-MKr2RNhI.js",revision:"0ddc341c564cdd9b2683620234d3582e"},{url:"assets/1.html-P7Kf4d35.js",revision:"2dc40394b794b69ba923ab0885ebf069"},{url:"assets/1.html-pSqHMl6Y.js",revision:"b27da5b81c3e0b41c84ea102592f64c1"},{url:"assets/1.html-tsKro0wl.js",revision:"9c15f8dc675cd486423e47cfc63b6902"},{url:"assets/1.html-z8Hl7ISC.js",revision:"acbb5e43371631071f46928941e84fcc"},{url:"assets/2.html-BTeHhP0L.js",revision:"c52e90728622e92da9499c07e3dab85d"},{url:"assets/2.html-Cbr7j4ti.js",revision:"7fded522ea0eb6b20b4167344001fe79"},{url:"assets/210209.html-hsAdJS4R.js",revision:"a422d7765f071e1b5da2ffbd83775b13"},{url:"assets/210913.html-B4b7JGlm.js",revision:"8ec56cb5c775fbee215f97094e2b65ec"},{url:"assets/220301.html-ZNbPcGAI.js",revision:"672d6a42bc171eca650aab17fefb3dd9"},{url:"assets/220505.html-S6QAU9m6.js",revision:"e7797f4ec7df2db3d64d3a76cf89ba1a"},{url:"assets/220601.html-BuFQpQky.js",revision:"253ac7541087b06be052c24802e3c4a5"},{url:"assets/220925.html-DvS0AGXu.js",revision:"c9945f0482f749b3f9b1850299701bae"},{url:"assets/230831.html-CKEUWCkh.js",revision:"874ef411278011c5da2f87a090e22396"},{url:"assets/3.html-BOEHGkdY.js",revision:"211746ed93435d6883ebb60d52a02574"},{url:"assets/404.html-b9VMkNFh.js",revision:"1990b869122ec21784bdb86e27d0e98e"},{url:"assets/bds-server.html-BVIIVyWV.js",revision:"def7d0942b662910701eaa5d8a6e2c45"},{url:"assets/chrome.html-BBRWsY7O.js",revision:"134cbd4fb724229e32c4b44fb5a8e107"},{url:"assets/docker.html-_LqdLr-D.js",revision:"c80a60d2b9523ce01f0aba9300b92e94"},{url:"assets/flarum.html-BLKXcX6j.js",revision:"0127bd0b37af972d9e65a9a287e90114"},{url:"assets/friendship-link.html-DFMr4YrN.js",revision:"2f79fc0a2f5755b4cd9efb92b01fb1d0"},{url:"assets/frp.html-VC4NW6gC.js",revision:"c43c047b00fb9026d72b31bbcf780722"},{url:"assets/giscus-aTimukGI-CKTvSCx2.js",revision:"49998312474e73b233dd9f9e68b41341"},{url:"assets/giscus-theme-dark.css",revision:"3cf7c64a431a026961c5d12ea0db59cb"},{url:"assets/giscus-theme.css",revision:"0c68524a970592496dfff657f2851d97"},{url:"assets/go.html-BWNtE1Lj.js",revision:"0fc695796f5e09c00aa6034030cdcebe"},{url:"assets/img_upyun_php.html-kC3Tr-tm.js",revision:"eb35075e8a1d8ac0d2b5a695a1a14d56"},{url:"assets/imgapi.html-1oIRN5XD.js",revision:"be557cd579aa016d1b3aa017dbd32a5f"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-9MTCctlr.js",revision:"75f98e23e9cc1204f4e72f8057247bfb"},{url:"assets/instruction.html-D7Bu2Cv1.js",revision:"dc3ba8ee367cf67a3d891b8e335a2d3b"},{url:"assets/java-server.html-B3Wu-IRX.js",revision:"25962521d2d2b04eb25c724be558d188"},{url:"assets/java8.html-cCMU98qg.js",revision:"e2f0efe2ef6675f4ff1020cfb6a76d07"},{url:"assets/markdown.html-CwGpOX9E.js",revision:"6ae95f04022e34af158ad8aaaa9d4407"},{url:"assets/mcsm.html-MjNL4GYL.js",revision:"d73cd5a8b6cb726816df9394bec36fac"},{url:"assets/mcsm9.html-XCHhld7X.js",revision:"239609388453cc13ec43ee2f6a9ebf9b"},{url:"assets/netplus.html-B1cGwj5M.js",revision:"a69ab4b5133b651fac4ed58f2c3aea47"},{url:"assets/nextcloud.html-DYIZQ43Y.js",revision:"e933c94afe7a6547a24b93e6d87b6899"},{url:"assets/node.html-D_ItT1_v.js",revision:"4de6f24aba31f24ae74ff3d9ebccd5cd"},{url:"assets/node.html-DRl3L-UP.js",revision:"40505bc2d918e18de01282da49374de1"},{url:"assets/posts.html-BbySmgaw.js",revision:"a5395aad2ca57410c4f2b759471e706e"},{url:"assets/pterodactyl_docker.html-D4WQBVZt.js",revision:"bd49974c2fe4597cad9cec2518952ae4"},{url:"assets/pterodactyl.html-BWNjXZ3R.js",revision:"964a7d98cabca71df319aaa1abc1a09e"},{url:"assets/python3.9.html-Lw2APHgf.js",revision:"f676f3e1b460297c9916ef56a476862f"},{url:"assets/reco-valine-BI2JzRng.js",revision:"4d2463af5e36be45cc074299117ed469"},{url:"assets/selinux.html-D03MRjJ-.js",revision:"43f4379e560e8e7f018f94442cd3085d"},{url:"assets/style-CLT9aUPn.css",revision:"6b94fb497bc9981e0e02eaf83f1acd9d"},{url:"assets/taken-8ZGYccs_.svg",revision:"ff5b846addb97c521208fc91efed5647"},{url:"assets/timeline.html-yRp-uRrx.js",revision:"8a6e37a8ee96301c1f64d43df34f3953"},{url:"assets/vuepress-blog-on-github.html-BQEY8NnM.js",revision:"61ea31bdf21bf72be1d1db21d6163775"},{url:"assets/yutto.html-7puFIzgQ.js",revision:"2ab9cc2af1ce9810699a5f1868e0bb22"},{url:"bg.svg",revision:"56fa499cc43cb4b0dd1cf4037b309d3c"},{url:"icon_vuepress_vlssu.svg",revision:"17aa327002484349e4c087a638848d8f"},{url:"index.html",revision:"b313c59fb25eecc21cdca43d08907642"},{url:"404.html",revision:"dd03d8ca7cf4ce630b061f35c8016a4c"},{url:"assets/bds-server_1-3ZMTEdY2.png",revision:"4a7c1686ddce0f5bf0d665898a758dcf"},{url:"assets/bds-server_2-BAKfZFEV.png",revision:"8f7e31f0f62645f02ea1e664d90f5de9"},{url:"assets/flarum_1-CvGMRtQR.png",revision:"62277a9ac46ac3bfbc0ac95fc72d0131"},{url:"assets/frp_1-BxhZsG5B.png",revision:"5ecf807e02b08d811c4b2cbdf8b7034b"},{url:"assets/frp_2-DXPrcbWL.png",revision:"026a3340583581934236c8206d4d1947"},{url:"assets/imgapi_1-sCpZP1W_.png",revision:"6ca88dcb6e401969c9f5a35577ba8924"},{url:"assets/imgapi_10-DaTKDTpu.png",revision:"532764d4dbb61ce602bf7d6480334128"},{url:"assets/imgapi_11-BKAmb4Jf.png",revision:"b51a650d229d3d70dd0835ab4484dfa3"},{url:"assets/imgapi_12-D9glm-WC.png",revision:"3ea12f2988adae2080d2d6ff004f6dc7"},{url:"assets/imgapi_2-DdWoMjhD.png",revision:"3717ca981b62f7298e624d5206829f59"},{url:"assets/imgapi_3-BYR3dENc.png",revision:"0bc89b9c64f26705adf56026b37a1108"},{url:"assets/imgapi_4-BUlId-JP.png",revision:"d085fab259815e2e3012e4d8898fdc79"},{url:"assets/imgapi_5-Bwzj1V1S.png",revision:"97c1d0a7130a3d6c76ab49d79ab747fc"},{url:"assets/imgapi_6-BIF1NyTr.png",revision:"3a0c57f86438696d8b2f807b34a46a0d"},{url:"assets/imgapi_7-V2taPOcr.png",revision:"c549384edc66826b3eb1c7e99f5eea68"},{url:"assets/imgapi_8-BJynHYsl.png",revision:"98ea5d32686ab39940fcea62f6496c39"},{url:"assets/imgapi_9-59VUKyua.png",revision:"b1d7d0d804ae77ba0129c4278488eefb"},{url:"assets/java-server_1-Mf8fd9lI.png",revision:"8a989bb42c90c8107fde0e12e63dcb34"},{url:"assets/java-server_10-9RUf51IV.png",revision:"1042695b8b289048a923f43ef98de355"},{url:"assets/java-server_11-MP_SEiSn.png",revision:"0cb03cccfbd644ca21bb602f05118188"},{url:"assets/java-server_12-B5b5ZEby.png",revision:"e98d776ae46e4359a3a6f843477ef46c"},{url:"assets/java-server_13-CMO0T1dw.png",revision:"96e316af689a80a28ed202879f4ab5fa"},{url:"assets/java-server_14-DBJEwj9B.png",revision:"3f9868d78e01d799eac8b0a0b38e1c41"},{url:"assets/java-server_15-D0H3BCcn.png",revision:"cd9151c119bcfcfe995cf42a41e9a8d8"},{url:"assets/java-server_16-JWprDSMS.png",revision:"5590bf496702955eee4a13e245570ad3"},{url:"assets/java-server_17-Czj_dIkM.png",revision:"4ebb2427fccf7f0c507aac4dbfb85894"},{url:"assets/java-server_2-BqpN9uc7.png",revision:"add7e36816eb363b5e5e69222d40bddf"},{url:"assets/java-server_3-CzrXmWjG.png",revision:"8245dff8bc979c06e76246945762103d"},{url:"assets/java-server_4-Qp4uAXux.png",revision:"7c8a05c821bbf8a3e9603158ccde8f6f"},{url:"assets/java-server_5-Boag0xVj.png",revision:"ce17e47b303465f08033eb9ad57c139e"},{url:"assets/java-server_6-C9qAiZJd.png",revision:"ac8b89ae7a7cf7a4900767d5f5e1492f"},{url:"assets/java-server_7-DKIMdRDo.png",revision:"e4cea0138a74241dd6c65290796d4d23"},{url:"assets/java-server_8-GEWCnwZ6.png",revision:"3853fdda372a9f1eccaa7b8a91d35892"},{url:"assets/java-server_9-DQKIDSqr.png",revision:"7302f05395df8ed8bcdaab366c07920b"},{url:"assets/java8_1-D33N7VEM.png",revision:"170a03caf0f72640e6898ff835864e70"},{url:"assets/java8_2-C5GlYPlJ.png",revision:"b416f1d9f5afd578eb76241b0015001a"},{url:"assets/java8_4-CBG-6KXb.png",revision:"e0ac3bd776ffe6fb33494e6ea7297d40"},{url:"assets/mcsm_1-ate9x0FT.png",revision:"d65b698c03ffc8bcc21478c585965bd7"},{url:"assets/mcsm_2-NfKOjrE8.png",revision:"82bb89dc614b9371105ec2dcf9a34629"},{url:"assets/mcsm_3-DlSCNFkK.png",revision:"58404c9ad9b6493b11861d54975bd032"},{url:"assets/netplus_1-CJnU_Lpa.jpg",revision:"666aba4e7b65bddce380a43fc2e2a635"},{url:"assets/netplus_10-ChKRgVMI.png",revision:"93868539ea780280947732ad076c4043"},{url:"assets/netplus_11-Bgx4Lc88.png",revision:"365063e6f6080f5deb6b3f8972f64da5"},{url:"assets/netplus_12-QriLjOWu.png",revision:"0b26bb08f07ebd0cecc553a0613a2e5d"},{url:"assets/netplus_13-DG709pLg.png",revision:"0e93b3221545e651bb8781ec56d40447"},{url:"assets/netplus_14-B1mR1miU.png",revision:"aebe7e2703e092d6caeeacd7501e3ef2"},{url:"assets/netplus_15-CzfDT3cL.png",revision:"f9214ca51a295cb10156d695e85b201a"},{url:"assets/netplus_16-R2WfYrHl.png",revision:"e6a107346623fe6ae97269e068a7e0ef"},{url:"assets/netplus_2-EUYuM5pS.jpg",revision:"5f3f0d7fbaf22372b0ab28fad744492d"},{url:"assets/netplus_3-BOIYX995.png",revision:"3e30eb7ed206090c0b2884fe15e98a04"},{url:"assets/netplus_4-BmyVZyex.png",revision:"0801331c0a834ba796513a878c10213b"},{url:"assets/netplus_5-C5A9Iy0N.png",revision:"73be0c0c4fda6d6245bd66e455ae9d15"},{url:"assets/netplus_6-Rqt8s6bB.png",revision:"8e492dc4dcacbe75068cf66908fda8cb"},{url:"assets/netplus_7-BlVRki14.png",revision:"456621a8ecfb312ddc9f3ef9f3b6d609"},{url:"assets/netplus_8-HJYr7PUB.png",revision:"458d74fcc07bcc54144eda2cbfa2ac4b"},{url:"assets/netplus_9-BMLW-iYV.png",revision:"3dd172b95ba02e7988c268193e3ef2ec"},{url:"assets/nextcloud_1-BFK9WHmT.png",revision:"fecba4ae54aa9bd376b82217b33fadde"},{url:"assets/nextcloud_10-DXsuUNjN.png",revision:"5d3abf587c508e3a62c748d5873e51ae"},{url:"assets/nextcloud_11-ov2XGW3K.png",revision:"3c4e78548a7fab8f8efd1b20916b93fb"},{url:"assets/nextcloud_2-DrGl8s23.png",revision:"9bf1139908ebd26fed3df2d8bb1da3cf"},{url:"assets/nextcloud_3-C9i7STFB.png",revision:"8f5b6ca3ab89ac7fce766f67aca90e20"},{url:"assets/nextcloud_4-B8zKwJrB.png",revision:"e84bfe2f35c128fc0bff69f55412d885"},{url:"assets/nextcloud_5-D4qdqeRI.png",revision:"8752d289eb392b238eadacce6a200d3d"},{url:"assets/nextcloud_6-BEUyKMFx.png",revision:"c09b9e7c3ae6ba6acf96fc03f60f7da3"},{url:"assets/nextcloud_7-YPgDrZr8.png",revision:"320940bfe93edcb7191c8a2a6a3f486c"},{url:"assets/nextcloud_8-BKLg3A2w.png",revision:"651f0eec2849621d47064bf42f9d2108"},{url:"assets/nextcloud_9-BdimUvDU.png",revision:"a36d6c338feac3f1687fcf61124e7b87"},{url:"assets/pterodactyl_1-CLlDCLNV.png",revision:"0b7bb98ca6e676396504c855603eef4f"},{url:"assets/pterodactyl_2-DjDDzDBR.png",revision:"e15e4adadfa913b5043909f9e4e70691"},{url:"assets/pterodactyl_3-Cz1WDvX3.jpg",revision:"ac996c9bb0734ee4cc13e0c38d2f5692"},{url:"assets/pterodactyl_4-CHE__Ggt.png",revision:"3fd6bc95931f1e824cf403b69d8e0912"},{url:"assets/pterodactyl_5-DARqCNNN.png",revision:"0069e01564c44b0732cbd06f6a987b8c"},{url:"assets/pterodactyl_6-5XYQFFZ9.png",revision:"70b3f4599104672f8a97eae4f1f45b5c"},{url:"comment.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"head.png",revision:"ace9329cafce4e18f7b10d05a3717823"},{url:"logo.png",revision:"1493ed742e50c594fc943cbbef775e0a"},{url:"WechatIMG3.jpg",revision:"3151a0a716a1ed2569fa5185b132202d"}],{}),s.cleanupOutdatedCaches()}));
