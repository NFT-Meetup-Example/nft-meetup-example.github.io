(function(e){function t(t){for(var a,i,u=t[0],o=t[1],p=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08d1":function(e,t,n){},"0fc8":function(e,t,n){"use strict";n("92d1")},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),s=n.n(r),i=n("130e"),u=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"mint"},[n("h1",[e._v("NFT Meetup Example")]),n("h3",[e._v("NFT left : "+e._s(e.nftLeft))]),this.walletStatus?n("button",{on:{click:function(t){return e.getNFT()}}},[n("img",{attrs:{src:"/snowflake.svg"}}),e._v(" Mint ")]):n("button",{on:{click:function(t){return e.connect()}}},[e._v("Connect Wallet")]),n("a",{attrs:{href:"https://opensea.io/collection/non-fungible-token-8"}},[e._v("VIEW AN NFT ON OPENSEA")])])])},p=[],c=n("c7eb"),l=n("1da1"),d=(n("4795"),{name:"Mint",data:function(){return{walletStatus:!1,nftLeft:"0",loadNFT:!1}},mounted:function(){var e=this;setInterval(Object(l["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.walletStatus=e.walletManager.walletStatus,e.loadNFT||(e.loadNFT=!0,e.loadNFTLeft());case 2:case"end":return t.stop()}}),t)}))),100)},methods:{connect:function(){var e=this;return Object(l["a"])(Object(c["a"])().mark((function t(){var n;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.walletManager.connectToMetamask();case 2:n=t.sent,""!=n&&(window.location="https://metamask.app.link/dapp/nft-meetup-example.github.io");case 4:case"end":return t.stop()}}),t)})))()},getNFT:function(){var e=this;return Object(l["a"])(Object(c["a"])().mark((function t(){var n,a;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.walletManager.web3Global.getSigner();case 2:return n=t.sent,a=e.walletManager.nft.connect(n),t.prev=4,t.next=7,a.mint({value:e.walletManager.ethers.utils.parseUnits("25","ether"),gasLimit:15e4});case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](4),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[4,9]])})))()},loadNFTLeft:function(){var e=this;return Object(l["a"])(Object(c["a"])().mark((function t(){return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.walletManager.checkId();case 2:setTimeout(Object(l["a"])(Object(c["a"])().mark((function t(){var n;return Object(c["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.walletManager.nft.totalSupply();case 2:n=t.sent,e.nftLeft=1024-n;case 4:case"end":return t.stop()}}),t)}))),1e3);case 3:case"end":return t.stop()}}),t)})))()}}}),y=d,f=(n("a7a5"),n("2877")),m=Object(f["a"])(y,o,p,!1,null,"b4f5ae56",null),b=m.exports,w=[{path:"/",name:"home",component:b}],h=new u["a"]({history:!0,mode:"history",routes:w}),v=h,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"main_container"}},[n("router-view")],1)])},O=[],x={name:"Index"},g=x,k=(n("0fc8"),Object(f["a"])(g,T,O,!1,null,null,null)),M=k.exports,j=n("d4ec"),I=n("bee2"),_=n("ade3"),S=n("c030"),F=n("f5cb"),N={method:"wallet_addEthereumChain",params:[{chainId:"0x89",chainName:"Matic Mainnet",nativeCurrency:{name:"Polygon",symbol:"MATIC",decimals:18},rpcUrls:["https://polygon-rpc.com/"],blockExplorerUrls:["https://polygonscan.com/"]}]},A=N,P=function(){function e(){Object(j["a"])(this,e),Object(_["a"])(this,"walletStatus",!1),Object(_["a"])(this,"web3Global",!1),Object(_["a"])(this,"ethers",S),Object(_["a"])(this,"nftAddr","0x5BA0199Fe60b2422a59940ec7c7dE188359388B1"),this.connectToMetamask(),this.connectToContract()}return Object(I["a"])(e,[{key:"connectToMetamask",value:function(){var e=Object(l["a"])(Object(c["a"])().mark((function e(){var t,n=this;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="",!window.ethereum){e.next=14;break}return this.web3Global=new S.providers.Web3Provider(window.ethereum),e.prev=3,e.next=6,window.ethereum.enable();case 6:this.walletStatus=!0,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),t=e.t0;case 12:e.next=16;break;case 14:this.web3Global=new S.providers.JsonRpcProvider(A.params[0].rpcUrls[0]),t="Metamask not found!";case 16:if(!window.ethereum){e.next=21;break}return e.next=19,window.ethereum.request(A)["catch"]((function(e){n.walletStatus=!1,t=e}));case 19:return e.next=21,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:A.params[0].chainId}]})["catch"]((function(e){n.walletStatus=!1,t=e}));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e,this,[[3,9]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"connectToContract",value:function(){var e=Object(l["a"])(Object(c["a"])().mark((function e(){return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.nft||(this.nft=new S.Contract(this.nftAddr,F.abi,this.web3Global));case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"checkId",value:function(){var e=Object(l["a"])(Object(c["a"])().mark((function e(){var t;return Object(c["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.web3Global.getNetwork();case 2:if(t=e.sent,t.chainId==A.params[0].chainId){e.next=6;break}return e.next=6,this.connectToMetamask();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getStatus",value:function(){return this.walletStatus}}]),e}(),C={install:function(e,t){e.prototype.walletManager=new P}},E=C;a["a"].router=v,a["a"].use(u["a"]),a["a"].use(i["a"],s.a),a["a"].use(E),new a["a"]({render:function(e){return e(M)},el:"#app",router:v})},"92d1":function(e,t,n){},a7a5:function(e,t,n){"use strict";n("08d1")},f5cb:function(e){e.exports=JSON.parse('{"contractName":"NFT","abi":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}')}});
//# sourceMappingURL=app.b13afcf7.js.map