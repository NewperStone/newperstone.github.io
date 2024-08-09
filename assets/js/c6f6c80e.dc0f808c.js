"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9796],{547:(i,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var e=t(4848),a=t(8453);const o={id:"mhainitialization",title:"MHA Initialization",sidebar_position:10},r="Multi Head Attention Initialization",l={id:"models/aimodel/Transformer/mhainitialization",title:"MHA Initialization",description:"\ucd9c\ucc98\ub294 \uc54c \uc218 \uc5c6\ub294\ub370, \ub2e4\ub978\ubd84\uc774 \uc815\ub9ac\ud574\uc8fc\uc2e0 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud569\ub2c8\ub2e4.",source:"@site/docs/models/aimodel/Transformer/mha_initialization.md",sourceDirName:"models/aimodel/Transformer",slug:"/models/aimodel/Transformer/mhainitialization",permalink:"/docs/models/aimodel/Transformer/mhainitialization",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/models/aimodel/Transformer/mha_initialization.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"mhainitialization",title:"MHA Initialization",sidebar_position:10},sidebar:"AIModelSidebar",previous:{title:"Cross Attention",permalink:"/docs/models/aimodel/Transformer/crossattention"},next:{title:"BERT",permalink:"/docs/models/aimodel/Bert/"}},s={},d=[{value:"Random Initialization?",id:"random-initialization",level:2},{value:"Concatenation between headers?",id:"concatenation-between-headers",level:2},{value:"Summation vs Concatenation?",id:"summation-vs-concatenation",level:2},{value:"Ref",id:"ref",level:2}];function c(i){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{id:"multi-head-attention-initialization",children:"Multi Head Attention Initialization"}),"\n",(0,e.jsx)(n.p,{children:"\ucd9c\ucc98\ub294 \uc54c \uc218 \uc5c6\ub294\ub370, \ub2e4\ub978\ubd84\uc774 \uc815\ub9ac\ud574\uc8fc\uc2e0 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,e.jsx)(n.h2,{id:"random-initialization",children:"Random Initialization?"}),"\n",(0,e.jsx)(n.p,{children:"\uc804\uccb4 weight \ub97c random initialization \ud574\ub3c4 FFN \uacfc \uac19\uc740 \ub2e8\uc21c\ud55c linear layer \uac19\uc740 \uacbd\uc6b0\uc5d0\ub294 \ud559\uc2b5 \ub4a4 \ube44\uc2b7\ud55c \uc88b\uc740 \uacb0\uacfc\ub97c \uc5bb\uc744 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc attention \uc5d0 \ud574\ub2f9\ud558\ub294 weight \ub4e4\uc740 \uadf8\ub807\uac8c \uc27d\uc9c0\uac00 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsx)(n.p,{children:"Attention \uc740 Random initialization \uc5d0 \ub530\ub77c \uacb0\uacfc\uac00 \ud06c\uac8c \ub2ec\ub77c\uc9c0\uac8c \ub418\ub294\ub370, \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \uc801\uc6a9\ub418\ub294 \ubc29\ubc95\uc774 multi-head attention \uc785\ub2c8\ub2e4. \uc5ec\ub7ec\uac1c\uc758 random initialization \uc744 \ub9cc\ub4e4\uc5b4\uc11c \uc88b\uc740 \ub140\uc11d\uc774 \ub098\ud0c0\ub0a0 \ud655\ub960\uc744 \ub192\uc774\ub294 \uc2dd\uc785\ub2c8\ub2e4."}),"\n",(0,e.jsx)(n.p,{children:"\uc774\uc5d0 \ub300\ud55c \uad00\ub828 \uc5f0\uad6c\uac00 \uad49\uc7a5\ud788 \ub9ce\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74 head \ub2e8\uc704\ub85c pruning \uc744 \ud574 \ubcf8 \uc5f0\uad6c\ub4dc\ub3c4 \ub9ce\uace0 header \ub9c8\ub2e4 weight \ub4e4\uc758 \ud2b9\uc9d5\uc774 \ub9e4\uc6b0 \ub2e4\ub974\ub2e4\ub294 \uc5f0\uad6c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsx)(n.h2,{id:"concatenation-between-headers",children:"Concatenation between headers?"}),"\n",(0,e.jsx)(n.p,{children:"attention \uacb0\uacfc\ubb3c\uc744 summation \ud558\uc9c0\uc54a\uace0 concatenation \uc744 \ud558\ub294 \uc774\uc720\ub294 \ubb58\uae4c\uc694?"}),"\n",(0,e.jsx)(n.p,{children:"\uc704\uc5d0\uc11c \ub9d0\ud588\ub4ef attention \uacb0\uacfc\ubb3c\uc740 initialization \uc5d0 \ub530\ub77c \ud06c\uac8c \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. summation \uc740 \uc548 \uc88b\uc740 \uacb0\uacfc\uc640 \uc88b\uc740 \uacb0\uacfc\ub97c \uc804\ubd80 \uc11e\uc5b4\ubc84\ub9ac\ub294 \uc5f0\uc0b0\uc785\ub2c8\ub2e4. concatenation \ud6c4 linear layer \ub97c \uac70\uce58\ub294 \ubc29\uc2dd\uc740 \ubaa8\ub378\uc774 \uc88b\uc740 attention \uacb0\uacfc\uc5d0 \uc9d1\uc911\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."}),"\n",(0,e.jsx)(n.p,{children:"\uc989, \ud0dc\uc0dd\uc801\uc73c\ub85c header \ub4e4\uc740 \ud655\ub960\uc801\uc73c\ub85c \ub9e4\uc6b0 \uc88b\uac70\ub098 \ub9e4\uc6b0 \ub098\uc060 \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \ubaa8\ub378 transformer \uad6c\uc870 \uace0\ubbfc\uc5d0 \ub179\uc544 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsx)(n.h2,{id:"summation-vs-concatenation",children:"Summation vs Concatenation?"}),"\n",(0,e.jsx)(n.p,{children:"\uadf8\ub7fc, \ubaa8\ub378 \uad6c\uc870\uc5d0 \ub300\ud574 \ub450\uac00\uc9c0 Intuition \uc744 \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:"Sum \ubcf4\ub2e4 Concat \uc5f0\uc0b0\uc744 \uc801\uc6a9\ud55c \uacb0\uacfc \ubaa8\ub378\uc758 \uc131\ub2a5\uc774 \ub354 \uc88b\uc544\uc9c4\ub2e4\uba74 \ubaa8\ub378 \uad6c\uc870\uc0c1 \uac01 branch \uc758 \uacb0\uacfc \ubd84\ud3ec\uac00 \ud06c\uac8c \ub2e4\ub97c \ud655\ub960\uc774 \ub192\ub2e4."}),"\n",(0,e.jsx)(n.li,{children:"attention \uc740 Initialization \uc5d0 FFN \uc5d0 \ube44\ud574 \ub9e4\uc6b0 \uc608\ubbfc\ud558\ub2e4."}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:"ref",children:"Ref"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"https://github.com/bigscience-workshop/bigscience/blob/master/train/lessons-learned.md?fbclid=IwAR3b4LBTtjcSrXLx0YLqL1KD2u9YUVCFOxj3Ik2U3lf7vMDo4OK5pBnYWyU#using-a-formulaic-std-init",children:"weight initialization \uad00\ub828 \uc2e4\ud5d8 \uc815\ub9ac github"})}),"\n"]})]})}function m(i={}){const{wrapper:n}={...(0,a.R)(),...i.components};return n?(0,e.jsx)(n,{...i,children:(0,e.jsx)(c,{...i})}):c(i)}},8453:(i,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var e=t(6540);const a={},o=e.createContext(a);function r(i){const n=e.useContext(o);return e.useMemo((function(){return"function"==typeof i?i(n):{...n,...i}}),[n,i])}function l(i){let n;return n=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:r(i.components),e.createElement(o.Provider,{value:n},i.children)}}}]);