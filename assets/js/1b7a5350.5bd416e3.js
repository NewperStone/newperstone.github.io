"use strict";(self.webpackChunklogicbaron=self.webpackChunklogicbaron||[]).push([[9197],{7362:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=i(4848),s=i(8453);const o=i.p+"assets/images/gollie_io-191caf74826a1df253d4f36363a795eb.png",r=i.p+"assets/images/gollie_dataset-32d549a5ed21b780866c8ef29dfb0a57.png",l={id:"gollie",sidebar_position:350},a="GoLLIE",d={id:"tasks/informationextraction/gollie",title:"GoLLIE",description:"ANNOTATION GUIDELINES IMPROVE ZERO-SHOT INFORMATION-EXTRACTION",source:"@site/docs/tasks/informationextraction/Gollie.md",sourceDirName:"tasks/informationextraction",slug:"/tasks/informationextraction/gollie",permalink:"/docs/tasks/informationextraction/gollie",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/tasks/informationextraction/Gollie.md",tags:[],version:"current",sidebarPosition:350,frontMatter:{id:"gollie",sidebar_position:350},sidebar:"InformationextractionSidebar",previous:{title:"GliNER",permalink:"/docs/tasks/informationextraction/gliner"},next:{title:"GNER",permalink:"/docs/tasks/informationextraction/gner"}},c={},h=[{value:"ANNOTATION GUIDELINES IMPROVE ZERO-SHOT INFORMATION-EXTRACTION",id:"annotation-guidelines-improve-zero-shot-information-extraction",level:2},{value:"Data",id:"data",level:2},{value:"Model",id:"model",level:2},{value:"Training &amp; Result",id:"training--result",level:2},{value:"Result",id:"result",level:3},{value:"Conclusion",id:"conclusion",level:2}];function u(n){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"gollie",children:"GoLLIE"}),"\n",(0,t.jsx)(e.h2,{id:"annotation-guidelines-improve-zero-shot-information-extraction",children:"ANNOTATION GUIDELINES IMPROVE ZERO-SHOT INFORMATION-EXTRACTION"}),"\n",(0,t.jsx)(e.p,{children:"UniversalNER \uc744 \ud3ec\ud568\ud574\uc11c LLM\uc758 \ub4f1\uc7a5\uc774\ud6c4 NER\uacfc \uac19\uc740 Informatino Extraction task\uc758 scheme\uc774 \ud06c\uac8c \ubc14\ub00c\uc5c8\uc2b5\ub2c8\ub2e4. LLM\uc758 \uc5b8\uc5b4 \uc774\ud574 \ub2a5\ub825\uc744 \ud65c\uc6a9\ud574\uc11c zero-shot \ub610\ub294 supervised IE\ub97c \uc218\ud589\ud558\ub294 \ubc29\uc2dd\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 \ubd84\uc57c\uc758 de factor\ucc98\ub7fc \uc0ac\uc6a9\ub418\ub294 \ub17c\ubb38\uc740 UniversalNER\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"UniversalNER\uc758 \ub17c\ubb38\uc5d0\uc11c NER \uacfc\uc815\uc5d0\uc11c named entity label \ub300\uc2e0 entity description\uc744 \uc0dd\uc131\ud558\uace0 \uc774\ub97c inference\uc5d0 \ud65c\uc6a9\ud558\ub294 \uc2e4\ud5d8\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc800\uc790\ub4e4\uc740 entity description\uc744 \ud65c\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774 \uc131\ub2a5 \uc9c0\ud45c\ub294 \uc548 \uc88b\uc544\uc84c\uc9c0\ub9cc entity paraphrasing \uad00\uc810\uc5d0\uc11c\ub294 \uc624\ud788\ub824 \uac15\uc778\ud574\uc84c\ub2e4\uace0 \ud3c9\uac00\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(e.p,{children:["GoLLIE \ub17c\ubb38\uc740 \uc774 \uc2e4\ud5d8\uc758 \ud655\uc7a5\ud310\uc774\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc774 \ub17c\ubb38\uc5d0\uc11c\ub294 \ub2e8\uc21c\ud788 entity type name\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c ",(0,t.jsx)(e.strong,{children:"human annotator\uac00 \ucc38\uc870\ud558\ub294 annotation guideline\uc744 \uc0ac\uc6a9"}),"\ud574\uc11c LLM\uc774 IE \uacfc\uc81c\ub97c \uc218\ud589\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub610\ud55c \ub2e4\uc591\ud55c IE task\uc5d0 \uc77c\ubc18\ud654\ub41c input-output\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,t.jsx)(e.strong,{children:"python code \ud615\ud0dc\uc758 input-output"}),"\uc744 \ud65c\uc6a9\ud588\ub2e4\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4. \uc0ac\uc2e4 generation \uae30\ubc18\uc758 IE task\uc758 \uadfc\ubcf8\uc801\uc778 \ubb38\uc81c\uc810 \uc911 \ud558\ub098\ub294 generated text\uc758 \ud574\uc11d\uc785\ub2c8\ub2e4. \uc774 \ub17c\ubb38\uc5d0\uc11c\ub294 output \ud615\uc2dd \uc5ed\uc2dc \uc81c\ud55c\ud574\uc11c \ud574\uc11d\uc758 \uc6a9\uc774\ud568\uc744 \ub354\ud558\uae30\ub3c4 \ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("div",{style:{textAlign:"Center"},children:(0,t.jsx)("img",{src:o,style:{border:"solid"}})}),"\n",(0,t.jsx)(e.h2,{id:"data",children:"Data"}),"\n",(0,t.jsx)(e.p,{children:"\ub2e4\uc591\ud55c domain\uc758 \ub370\uc774\ud130\uc151\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. zero-shot\uc744 \uc704\ud574\uc11c\ub294 training\uc5d0 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc740 \ub370\uc774\ud130\uc151\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4.  \ucd5c\uadfc LLM\uc758 \uc5f0\uad6c \ub3d9\ud5a5\uc740 LLM\uc758 \uc131\ub2a5\uc740 \ub2e4\uc591\ud55c domain, \ub2e4\uc591\ud55c task\ub97c \ud559\uc2b5\ud560 \uc218\ub85d \uc88b\uc544\uc9c4\ub2e4\uace0 \uc774\uc57c\uae30 \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)("div",{style:{textAlign:"Center"},children:(0,t.jsx)("img",{src:r,style:{border:"solid"}})}),"\n",(0,t.jsx)(e.h2,{id:"model",children:"Model"}),"\n",(0,t.jsx)(e.p,{children:"fine-tuned version of Code-LLaMA \ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. LLaMa \ub610\ub294 LLaMa-2, Falcon \uacfc \uac19\uc740 \ubaa8\ub378\ub3c4 \uace0\ub824\ub418\uc5c8\ub294\ub370 GoLLIE \uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 code input-output \ud615\ud0dc\uc5d0 \uac00\uc7a5 \uc801\ud569\ud55c \ubaa8\ub378\uc740 Code-LLaMA \uc600\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"\ub17c\ubb38\uc5d0\uc11c\ub294 7B \ubaa8\ub378\uc744 \uc774\uc6a9\ud55c \ubaa8\ub378\uc758 \ubd84\uc11d\uc744 \uc9c4\ud589\ud588\uace0 \ub2e8\uc21c\ud55c \uc131\ub2a5 \uc9c0\ud45c\ub294 13B \ubaa8\ub378\uacfc 34B \ubaa8\ub378\ub3c4 \ud568\uaed8 \ud6c8\ub828\uc2dc\ucf1c\uc11c \uae30\uc7ac\ud574\ub1a8\uc2b5\ub2c8\ub2e4. scaling law\uc5d0 \ub9de\uac8c \ud070 \ubaa8\ub378\uc77c\uc218\ub85d \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc92c\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.h2,{id:"training--result",children:"Training & Result"}),"\n",(0,t.jsx)(e.p,{children:"QLoRA framework\ub97c \uc0ac\uc6a9\ud574\uc11c \ubaa8\ub378\uc744 \ud6c8\ub828\uc2dc\ucf30\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.p,{children:"\ubaa8\ub378 \ud6c8\ub828 \uacfc\uc815\uc5d0\uc11c Regularization\uc744 \uc704\ud574\uc11c\ub294 5\uac00\uc9c0 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Class order Shuffling"})," : \uc785\ub825 entity type \uc21c\uc11c\ub97c \ub79c\ub364\uc73c\ub85c \uc11e\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Class dropout"})," : entity type \uc744 \ub79c\ub364\ud558\uac8c dropout \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Guideline paraphrasing"})," : guideline\uc744 \ubcc0\ud615\uc2dc\ucf1c\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Representative candidate sampling"})," : entity type\uc5d0 \ub300\ud574 fixed 10 candidate \uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"class name masking"})," : class \uba85\uc744 \ub9c8\uc2a4\ud0b9\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"result",children:"Result"}),"\n",(0,t.jsx)(e.p,{children:"GuideLine\uc744 \uc774\uc6a9\ud574\uc11c \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ud0a4\uace0 inference\ub97c \uc9c4\ud589\ud558\ub294 \uacfc\uc815\uc5d0\uc11c GoLLIE\uc758 \uc800\uc790\ub4e4\uc774 \ubaa9\ud45c\ub85c \ud558\ub294 \uac83\uc740 \ud06c\uac8c \ub450 \uac00\uc9c0\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Entity paraphrasing\uc5d0 \ub300\uc751\ud558\uace0, \ubaa8\ub378\uc774 entity type\uc5d0 \ub300\ud574 \uc870\uae08 \ub354 \ud48d\ubd80\ud55c \uc774\ud574\ub97c \ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4."}),"\n",(0,t.jsx)(e.li,{children:"entity type\uc5d0 \ub300\ud55c \ud48d\ubd80\ud55c \uc774\ud574\ub97c \ubc14\ud0d5\uc73c\ub85c zero-shot entity type\uc5d0 \ub300\uc751\uac00\ub2a5\ud558\ub3c4\ub85d \ud55c\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\ubaa8\ub378\uc758 \uc2e4\ud5d8 \uacb0\uacfc\uac00 \uc778\uc0ac\uc774\ud2b8\uc640 \uc77c\uce58\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Supervised Evaluation"}),"\uc758 \uacbd\uc6b0 GoLLIE \uac00 \uc77c\ubc18\uc801\uc73c\ub85c fine-tuning \uc2dc\ud0a8 \ubaa8\ub378\uacfc \ube44\uc2b7\ud558\uae34 \ud558\uc9c0\ub9cc \uc57d f1@0.3 \uc815\ub3c4 \uc131\ub2a5\uc774 \ub5a8\uc5b4\uc9d1\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.p,{children:["\ubc18\uba74 ",(0,t.jsx)(e.strong,{children:"Zero-shot Evaluation"}),"\uc5d0\uc11c GoLLIE \ub294 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \ub9e4\uc6b0 \ud070 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc5ec\uc92c\uc2b5\ub2c8\ub2e4. Baseline \ubaa8\ub378\uacfc \ube44\uad50\ud558\uc5ec f1@13 \uc810\uc744 \ud3c9\uade0\uc801\uc73c\ub85c \uc55e\uc11c\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, Unseen Labels\uc5d0 \ub300\ud574\uc11c\ub3c4 GoLLIE\ub294 baseline\uc5d0 \ube44\ud574 \ub354 Seen label\uacfc \ube44\uad50\ud558\uc5ec \ub354 \uc801\uc740 f1 gap \uc744 \ubcf4\uc5ec\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. \ub450 \uac00\uc9c0 \uc2e4\ud5d8 \uacb0\uacfc\uc5d0\uc11c GoLLIE\uac00 guideline\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ubaa8\ub378\uc5d0 \ube44\ud574 generalization\uc774 \ub354 \uc798 \ub418\uace0 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \uc720\ucd94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\uc5d0\ub7ec \uce90\uc774\uc2a4\uc5d0 \ub300\ud55c \ubd84\uc11d"})," \uc5ed\uc2dc \ub17c\ubb38\uc5d0 \uc126\uba85\ub418\uc5b4 \uc788\ub294\ub370 \uac04\ub2e8\ud558\uac8c \uc815\ub9ac\ud558\uaca0\uc2b5\ub2c8\ub2e4. GoLLIE \uac00 \uc88b\uc740 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc8fc\uc9c0 \ubabb\ud55c \uacbd\uc6b0\ub4e4\uc744 \uba87 \uac00\uc9c0\ub85c \ubd84\uc11d\ud588\ub294\ub370 \uc81c\uac00 \uc77d\uc5b4\ubcf4\uae30\uc5d0 \ud06c\uac8c 3\uac00\uc9c0 \uc815\ub3c4\ub85c \ubd84\ub958\ub418\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4. 1) \ub2e4\uc758\uc131\uc774 \uc788\ub294 \uacbd\uc6b0, 2) \ubaa8\ud638\ud55c \ub808\uc774\ube14\uc758 \uacbd\uc6b0, 3) entity type \uac04\uc758 \ucda9\ub3cc: \ud2b9\ud788 \ub113\uc740 \uc758\ubbf8\uc758 label \uacfc \uc138\ubd80\uc801\uc778 \uc758\ubbf8\uc758 label \uc0ac\uc774\uc5d0\uc11c."]}),"\n",(0,t.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(e.p,{children:"IE \uacfc\uc81c\ub97c \uc218\ud589\ud558\ub2e4 \ubcf4\uba74 entity type\uc758 \ubaa8\ud638\uc131\uc774 \uc815\ub9d0 \ud06c\uac8c \uc640\ub2ff\uc2b5\ub2c8\ub2e4. \uc774\uac78 \uc774\ub807\uac8c \ubd84\ub958\ud558\ub294 \uac8c \ub9de\uc744\uae4c? \ub77c\ub294 \ubb38\uc81c\uc8e0. \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub9ce\uc740 \ubc29\ubc95\ub4e4\uc774 \uace0\ub824\ub418\uc5c8\ub294\ub370 \ucd5c\uadfc\uc5d0 \uc800\ub294 entity type\uc5d0 \ub300\ud55c \uc124\uba85\uc774 \ud544\uc218\ub77c\ub294 \uc0dd\uac01\uc744 \ud558\uace0 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \uad00\uc810\uc5d0\uc11c \uc88b\uc740 solution\uc744 \uc81c\uc2dc\ud55c \ub17c\ubb38\uc774\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.h1,{id:"ref",children:"Ref"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"https://www.semanticscholar.org/reader/3f40edfcafc018b2cb54612a9aaa9d6b43a11a26",children:"GOLLIE : ANNOTATION GUIDELINES IMPROVE ZERO-SHOT INFORMATION-EXTRACTION"})}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var t=i(6540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);