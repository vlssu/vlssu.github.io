if(!self.define){let s,e={};const a=(a,r)=>(a=new URL(a+".js",r).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(r,i)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let d={};const f=s=>a(s,c),b={module:{uri:c},exports:d,require:f};e[c]=Promise.all(r.map((s=>b[s]||f(s)))).then((s=>(i(...s),d)))}}define(["./workbox-1ab968a5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/1.html-_inek8w8.js",revision:"b92a04b7a46c0e10f1af895795417d45"},{url:"assets/1.html-99uHRJlK.js",revision:"50241fda42b333c5c962b27c6d342759"},{url:"assets/1.html-B_8Hhq3B.js",revision:"78d338d60761c9395e22418a841b5a7c"},{url:"assets/1.html-B_pLJPDw.js",revision:"e3a48f82623ee6e3c98913241937079f"},{url:"assets/1.html-B4_UAh_8.js",revision:"14ab3dd5ca9d7e20e35714c69e0c8dba"},{url:"assets/1.html-B6zGjs10.js",revision:"f6a624428d87f8f274bf1578f60727b5"},{url:"assets/1.html-BAJhrkUr.js",revision:"ccbf00c36b78483a337c54bbcdac7671"},{url:"assets/1.html-Bb5WCy79.js",revision:"6cece7445609db002f0c80eecf0fad86"},{url:"assets/1.html-BF4zKHtc.js",revision:"8bb125d6cf6b99995d6dbc20a77c5b7a"},{url:"assets/1.html-Bi7s55zr.js",revision:"46aa26ff9f74ab1e36e074c894c12e86"},{url:"assets/1.html-Bigy0mja.js",revision:"adf1b82676ffdb77a69ae860d62b7150"},{url:"assets/1.html-BIoixOO3.js",revision:"80f812766735b3cd8686f25e1c88c028"},{url:"assets/1.html-BuVBnxvJ.js",revision:"42c1e517b83d3a63c98aa1a818e1f85f"},{url:"assets/1.html-C50a5y4z.js",revision:"e0a2adf25908145ec3a97ded3196233a"},{url:"assets/1.html-C5zWC4gg.js",revision:"134bd258fc31e8a7987a54f4030d8c61"},{url:"assets/1.html-C9DsXj_a.js",revision:"27b572888271532883fd66b7b583ce78"},{url:"assets/1.html-Ceniwuft.js",revision:"2439f5d16548a792f5f7d0d5e07760dc"},{url:"assets/1.html-CfkFjD4J.js",revision:"f74f4058e48e5e81e5179601b16cb39e"},{url:"assets/1.html-CG5jNvX4.js",revision:"6a0d2e8c975e6584f63a7997905c310c"},{url:"assets/1.html-CMdkwPmW.js",revision:"bbc05c7eab89f13d105286cc2e64b782"},{url:"assets/1.html-cmOcwv-R.js",revision:"f95a0150a61fe906a7b203dfc6cb0b45"},{url:"assets/1.html-CruG6OKT.js",revision:"ca8e4c0a655e9d1d51688974f389ce8e"},{url:"assets/1.html-CTRn7ycB.js",revision:"f92b303822644b44be85e9776fc0eff0"},{url:"assets/1.html-CU6WLace.js",revision:"0ae2b0d9240a0a5980b211b9e60d1d79"},{url:"assets/1.html-CW7AEFWk.js",revision:"b625f4624d656ca250bbf0f84433cbad"},{url:"assets/1.html-D_IT3Jts.js",revision:"5a6ba5b3302b7fb677ee16627e51ab5a"},{url:"assets/1.html-D-UI9r8y.js",revision:"10cfdffb197fcdd38fcc3cf3b40f8afc"},{url:"assets/1.html-D297Zk73.js",revision:"aa151864b3af2ec70e8a1a035f97a032"},{url:"assets/1.html-D3oJdBHt.js",revision:"49dc98871d60a11b3a13a6cb0439c3a5"},{url:"assets/1.html-DDXrYwyb.js",revision:"5a3a88558bda61439cb8642198a00345"},{url:"assets/1.html-De8-Ca45.js",revision:"f5bf9c722324d1ab1fbcca2ac4238761"},{url:"assets/1.html-DjijD4db.js",revision:"96aba57fd093cee3d29f397595cb2292"},{url:"assets/1.html-DQZ-48rV.js",revision:"fa1a71586a4c8ec347c7c45c7ccf2e03"},{url:"assets/1.html-DY9kLEjr.js",revision:"99b81223cbac0510563537022a0501d1"},{url:"assets/1.html-fEEz1VN2.js",revision:"f6584a0d6d23e0301185c84b3bda0376"},{url:"assets/1.html-HgaXekPr.js",revision:"7935cce65f8c1d52cab5a15feff750b9"},{url:"assets/1.html-IrgqSfLd.js",revision:"a9d3a479e0aac1b897dea14d06a5e8c7"},{url:"assets/1.html-TeBON9hH.js",revision:"1eef80475638cff33805d54a95a814c5"},{url:"assets/1.html-WwE_qlsT.js",revision:"5a5a47c0ec3d1b53ec49d50f6bfef4a0"},{url:"assets/2.html-8L-kjUIH.js",revision:"951df0cfcc84a8eb2ace37f7d24b408f"},{url:"assets/2.html-BaoY2MXW.js",revision:"ed38d300bf1183ccabb0b58992c1262a"},{url:"assets/210209.html-DrqOeD9h.js",revision:"c5a241eaf39face346226c712697471f"},{url:"assets/210913.html-XAOKry_x.js",revision:"c7da67d022bbb892605ebe914a9945ea"},{url:"assets/220301.html-58n-gaTG.js",revision:"375669efd029165204ee9c954e1fc16b"},{url:"assets/220505.html-D60jWg4V.js",revision:"23d2e260b32f8a0dd1e364c094d5f0e3"},{url:"assets/220601.html-CdPzhs76.js",revision:"5854c3199ec4108cf9f3f8ab03862a9e"},{url:"assets/220925.html-CUGkV6M6.js",revision:"ee9f454b0783c328925d15755c771883"},{url:"assets/230831.html-B3CWzLqR.js",revision:"ddcd925e3b004d74574845770f1de64e"},{url:"assets/3.html-CcUdJpvl.js",revision:"cb9221cb47b477cbe45bdd0b0c4f09d0"},{url:"assets/404.html-BgXtrnAP.js",revision:"387a66a313dfb5bc8136a13a442e1382"},{url:"assets/bds-server.html-Cub2E5GK.js",revision:"8ab5811a28287b4595e45851c154749c"},{url:"assets/chrome.html-Bma02h0B.js",revision:"2737a57953b4a194e630b0177cc7d350"},{url:"assets/docker.html-BlCEAN46.js",revision:"28bb03e6b3875f0009b14b2afc004cff"},{url:"assets/flarum.html-OmVZ82jY.js",revision:"09db79aca8ba6a18b4adfb92420f7472"},{url:"assets/friendship-link.html-CojoHpvV.js",revision:"11480ac12da2eecd7220fed67c5e25f2"},{url:"assets/frp.html-D8vmkeEc.js",revision:"0dc66a75c967134d52d263943576ed19"},{url:"assets/giscus-aTimukGI-CKTvSCx2.js",revision:"49998312474e73b233dd9f9e68b41341"},{url:"assets/giscus-theme-dark.css",revision:"3cf7c64a431a026961c5d12ea0db59cb"},{url:"assets/giscus-theme.css",revision:"0c68524a970592496dfff657f2851d97"},{url:"assets/go.html-nFKaXuHX.js",revision:"2e3927891794de19f6dcd0318bfb9d6b"},{url:"assets/img_upyun_php.html-DgsfzhqH.js",revision:"729a3cf8f7ba08329dffd1045342ff5c"},{url:"assets/imgapi.html-CxZ7MXl7.js",revision:"326ed5fa80f46aaf549eb603169e0c8b"},{url:"assets/index-DTEEl-sV.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-BIhFF2fq.js",revision:"6b9d94ea22480521620a9886f81739ea"},{url:"assets/instruction.html-BXvlTzJe.js",revision:"c60c6bba1e6a763fe0067b9b1cdad613"},{url:"assets/java-server.html-C_iJtTs6.js",revision:"810738c865a39e9bc59ece5903eb3e29"},{url:"assets/java8.html-B5vLWwcr.js",revision:"db2600edf579ed1b4786ae390f1d5a9f"},{url:"assets/markdown.html-CfG8qsre.js",revision:"f6765f91f9784ddb445b027aa1fccbcc"},{url:"assets/mcsm.html-Co4B7YS7.js",revision:"a4589b71032cd2f90c1871e3e6a6d934"},{url:"assets/mcsm9.html-DD9CDnJr.js",revision:"06022292bb8a20b9b3f1535636f5a3f3"},{url:"assets/netplus.html-C42ItJ41.js",revision:"92bbcbf1f399de611e2c75ffd283f6b7"},{url:"assets/nextcloud.html-BMBKPUYl.js",revision:"f8fd538a6260d5e35d55972c518d06c6"},{url:"assets/node.html-DBnSyLRq.js",revision:"99ee74fcd7c5fc11d8deb26145116299"},{url:"assets/node.html-OEw-U4sI.js",revision:"6411dafa95422385aae5cb9f0b244916"},{url:"assets/posts.html-BuaDgbR1.js",revision:"4f0ad8ab9711722f31580175fad83d32"},{url:"assets/pterodactyl_docker.html-z5z6mH3d.js",revision:"1779a5ffdfcf8357dd29bd0597738c39"},{url:"assets/pterodactyl.html-DXuOaqjG.js",revision:"aa85dcd3afd88bf333b562ea88d52f04"},{url:"assets/python3.9.html-BtxQuCdh.js",revision:"fe087f7d6a914719af68c2a57116870a"},{url:"assets/reco-valine-BI2JzRng.js",revision:"4d2463af5e36be45cc074299117ed469"},{url:"assets/selinux.html-DXdQRZFW.js",revision:"8b7d28fede65048ba0a21f97eec76198"},{url:"assets/style-BSS7DbJX.css",revision:"3e0097b773d231088875e1e0e536d00d"},{url:"assets/taken-8ZGYccs_.svg",revision:"ff5b846addb97c521208fc91efed5647"},{url:"assets/timeline.html-D4qfj-JZ.js",revision:"4dfe13e86a8f95938ed5dbedfc0b58b4"},{url:"assets/vuepress-blog-on-github.html-CvtP-_iF.js",revision:"56bf093f43c502b89482ad68e1475bdf"},{url:"assets/yutto.html-Bb9LYTMK.js",revision:"3647eeebbe2915c99d5bf3a64e23cf55"},{url:"bg.svg",revision:"56fa499cc43cb4b0dd1cf4037b309d3c"},{url:"icon_vuepress_vlssu.svg",revision:"17aa327002484349e4c087a638848d8f"},{url:"index.html",revision:"3d10f80264d21a2596807653203e9a99"},{url:"404.html",revision:"86bbecc9c731dce94dbbc55138437248"},{url:"assets/bds-server_1-3ZMTEdY2.png",revision:"4a7c1686ddce0f5bf0d665898a758dcf"},{url:"assets/bds-server_2-BAKfZFEV.png",revision:"8f7e31f0f62645f02ea1e664d90f5de9"},{url:"assets/flarum_1-CvGMRtQR.png",revision:"62277a9ac46ac3bfbc0ac95fc72d0131"},{url:"assets/frp_1-BxhZsG5B.png",revision:"5ecf807e02b08d811c4b2cbdf8b7034b"},{url:"assets/frp_2-DXPrcbWL.png",revision:"026a3340583581934236c8206d4d1947"},{url:"assets/imgapi_1-sCpZP1W_.png",revision:"6ca88dcb6e401969c9f5a35577ba8924"},{url:"assets/imgapi_10-DaTKDTpu.png",revision:"532764d4dbb61ce602bf7d6480334128"},{url:"assets/imgapi_11-BKAmb4Jf.png",revision:"b51a650d229d3d70dd0835ab4484dfa3"},{url:"assets/imgapi_12-D9glm-WC.png",revision:"3ea12f2988adae2080d2d6ff004f6dc7"},{url:"assets/imgapi_2-DdWoMjhD.png",revision:"3717ca981b62f7298e624d5206829f59"},{url:"assets/imgapi_3-BYR3dENc.png",revision:"0bc89b9c64f26705adf56026b37a1108"},{url:"assets/imgapi_4-BUlId-JP.png",revision:"d085fab259815e2e3012e4d8898fdc79"},{url:"assets/imgapi_5-Bwzj1V1S.png",revision:"97c1d0a7130a3d6c76ab49d79ab747fc"},{url:"assets/imgapi_6-BIF1NyTr.png",revision:"3a0c57f86438696d8b2f807b34a46a0d"},{url:"assets/imgapi_7-V2taPOcr.png",revision:"c549384edc66826b3eb1c7e99f5eea68"},{url:"assets/imgapi_8-BJynHYsl.png",revision:"98ea5d32686ab39940fcea62f6496c39"},{url:"assets/imgapi_9-59VUKyua.png",revision:"b1d7d0d804ae77ba0129c4278488eefb"},{url:"assets/java-server_1-Mf8fd9lI.png",revision:"8a989bb42c90c8107fde0e12e63dcb34"},{url:"assets/java-server_10-9RUf51IV.png",revision:"1042695b8b289048a923f43ef98de355"},{url:"assets/java-server_11-MP_SEiSn.png",revision:"0cb03cccfbd644ca21bb602f05118188"},{url:"assets/java-server_12-B5b5ZEby.png",revision:"e98d776ae46e4359a3a6f843477ef46c"},{url:"assets/java-server_13-CMO0T1dw.png",revision:"96e316af689a80a28ed202879f4ab5fa"},{url:"assets/java-server_14-DBJEwj9B.png",revision:"3f9868d78e01d799eac8b0a0b38e1c41"},{url:"assets/java-server_15-D0H3BCcn.png",revision:"cd9151c119bcfcfe995cf42a41e9a8d8"},{url:"assets/java-server_16-JWprDSMS.png",revision:"5590bf496702955eee4a13e245570ad3"},{url:"assets/java-server_17-Czj_dIkM.png",revision:"4ebb2427fccf7f0c507aac4dbfb85894"},{url:"assets/java-server_2-BqpN9uc7.png",revision:"add7e36816eb363b5e5e69222d40bddf"},{url:"assets/java-server_3-CzrXmWjG.png",revision:"8245dff8bc979c06e76246945762103d"},{url:"assets/java-server_4-Qp4uAXux.png",revision:"7c8a05c821bbf8a3e9603158ccde8f6f"},{url:"assets/java-server_5-Boag0xVj.png",revision:"ce17e47b303465f08033eb9ad57c139e"},{url:"assets/java-server_6-C9qAiZJd.png",revision:"ac8b89ae7a7cf7a4900767d5f5e1492f"},{url:"assets/java-server_7-DKIMdRDo.png",revision:"e4cea0138a74241dd6c65290796d4d23"},{url:"assets/java-server_8-GEWCnwZ6.png",revision:"3853fdda372a9f1eccaa7b8a91d35892"},{url:"assets/java-server_9-DQKIDSqr.png",revision:"7302f05395df8ed8bcdaab366c07920b"},{url:"assets/java8_1-D33N7VEM.png",revision:"170a03caf0f72640e6898ff835864e70"},{url:"assets/java8_2-C5GlYPlJ.png",revision:"b416f1d9f5afd578eb76241b0015001a"},{url:"assets/java8_4-CBG-6KXb.png",revision:"e0ac3bd776ffe6fb33494e6ea7297d40"},{url:"assets/mcsm_1-ate9x0FT.png",revision:"d65b698c03ffc8bcc21478c585965bd7"},{url:"assets/mcsm_2-NfKOjrE8.png",revision:"82bb89dc614b9371105ec2dcf9a34629"},{url:"assets/mcsm_3-DlSCNFkK.png",revision:"58404c9ad9b6493b11861d54975bd032"},{url:"assets/netplus_1-CJnU_Lpa.jpg",revision:"666aba4e7b65bddce380a43fc2e2a635"},{url:"assets/netplus_10-ChKRgVMI.png",revision:"93868539ea780280947732ad076c4043"},{url:"assets/netplus_11-Bgx4Lc88.png",revision:"365063e6f6080f5deb6b3f8972f64da5"},{url:"assets/netplus_12-QriLjOWu.png",revision:"0b26bb08f07ebd0cecc553a0613a2e5d"},{url:"assets/netplus_13-DG709pLg.png",revision:"0e93b3221545e651bb8781ec56d40447"},{url:"assets/netplus_14-B1mR1miU.png",revision:"aebe7e2703e092d6caeeacd7501e3ef2"},{url:"assets/netplus_15-CzfDT3cL.png",revision:"f9214ca51a295cb10156d695e85b201a"},{url:"assets/netplus_16-R2WfYrHl.png",revision:"e6a107346623fe6ae97269e068a7e0ef"},{url:"assets/netplus_2-EUYuM5pS.jpg",revision:"5f3f0d7fbaf22372b0ab28fad744492d"},{url:"assets/netplus_3-BOIYX995.png",revision:"3e30eb7ed206090c0b2884fe15e98a04"},{url:"assets/netplus_4-BmyVZyex.png",revision:"0801331c0a834ba796513a878c10213b"},{url:"assets/netplus_5-C5A9Iy0N.png",revision:"73be0c0c4fda6d6245bd66e455ae9d15"},{url:"assets/netplus_6-Rqt8s6bB.png",revision:"8e492dc4dcacbe75068cf66908fda8cb"},{url:"assets/netplus_7-BlVRki14.png",revision:"456621a8ecfb312ddc9f3ef9f3b6d609"},{url:"assets/netplus_8-HJYr7PUB.png",revision:"458d74fcc07bcc54144eda2cbfa2ac4b"},{url:"assets/netplus_9-BMLW-iYV.png",revision:"3dd172b95ba02e7988c268193e3ef2ec"},{url:"assets/nextcloud_1-BFK9WHmT.png",revision:"fecba4ae54aa9bd376b82217b33fadde"},{url:"assets/nextcloud_10-DXsuUNjN.png",revision:"5d3abf587c508e3a62c748d5873e51ae"},{url:"assets/nextcloud_11-ov2XGW3K.png",revision:"3c4e78548a7fab8f8efd1b20916b93fb"},{url:"assets/nextcloud_2-DrGl8s23.png",revision:"9bf1139908ebd26fed3df2d8bb1da3cf"},{url:"assets/nextcloud_3-C9i7STFB.png",revision:"8f5b6ca3ab89ac7fce766f67aca90e20"},{url:"assets/nextcloud_4-B8zKwJrB.png",revision:"e84bfe2f35c128fc0bff69f55412d885"},{url:"assets/nextcloud_5-D4qdqeRI.png",revision:"8752d289eb392b238eadacce6a200d3d"},{url:"assets/nextcloud_6-BEUyKMFx.png",revision:"c09b9e7c3ae6ba6acf96fc03f60f7da3"},{url:"assets/nextcloud_7-YPgDrZr8.png",revision:"320940bfe93edcb7191c8a2a6a3f486c"},{url:"assets/nextcloud_8-BKLg3A2w.png",revision:"651f0eec2849621d47064bf42f9d2108"},{url:"assets/nextcloud_9-BdimUvDU.png",revision:"a36d6c338feac3f1687fcf61124e7b87"},{url:"assets/pterodactyl_1-CLlDCLNV.png",revision:"0b7bb98ca6e676396504c855603eef4f"},{url:"assets/pterodactyl_2-DjDDzDBR.png",revision:"e15e4adadfa913b5043909f9e4e70691"},{url:"assets/pterodactyl_3-Cz1WDvX3.jpg",revision:"ac996c9bb0734ee4cc13e0c38d2f5692"},{url:"assets/pterodactyl_4-CHE__Ggt.png",revision:"3fd6bc95931f1e824cf403b69d8e0912"},{url:"assets/pterodactyl_5-DARqCNNN.png",revision:"0069e01564c44b0732cbd06f6a987b8c"},{url:"assets/pterodactyl_6-5XYQFFZ9.png",revision:"70b3f4599104672f8a97eae4f1f45b5c"},{url:"comment.webp",revision:"c9e6254ff7429e52b5b7f56d8acfb44a"},{url:"head.png",revision:"ace9329cafce4e18f7b10d05a3717823"},{url:"logo.png",revision:"1493ed742e50c594fc943cbbef775e0a"},{url:"WechatIMG3.jpg",revision:"3151a0a716a1ed2569fa5185b132202d"}],{}),s.cleanupOutdatedCaches()}));
