"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1071],{7408:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"concepts/largemodel/tuning/0","title":"Instruction Tuning","description":"Instruction Tuning?","source":"@site/docs/concepts/largemodel/tuning/Tuning.md","sourceDirName":"concepts/largemodel/tuning","slug":"/concepts/largemodel/tuning/","permalink":"/docs/concepts/largemodel/tuning/","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/largemodel/tuning/Tuning.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"id":"0","sidebar_position":0},"sidebar":"LargeModelConceptSidebar","previous":{"title":"Retrieval-Augmented Generation (RAG)","permalink":"/docs/concepts/largemodel/prompt/rag"},"next":{"title":"LoRA","permalink":"/docs/concepts/largemodel/tuning/lora"}}');var s=e(4848),r=e(8453);const l=e.p+"assets/images/tuning-1474d686708796249184ad472ada2308.png",o={id:0,sidebar_position:0},c="Instruction Tuning",d={},u=[{value:"Instruction Tuning?",id:"instruction-tuning-1",level:2},{value:"Instruction Tuning vs. Finetuning",id:"instruction-tuning-vs-finetuning",level:3},{value:"Varations of Instruction Tuning",id:"varations-of-instruction-tuning",level:2},{value:"\ub370\uc774\ud130 \uad00\uc810",id:"\ub370\uc774\ud130-\uad00\uc810",level:3},{value:"\ud559\uc2b5 \ubc29\ubc95 \uad00\uc810",id:"\ud559\uc2b5-\ubc29\ubc95-\uad00\uc810",level:3},{value:"Ref",id:"ref",level:2}];function a(n){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"instruction-tuning",children:"Instruction Tuning"})}),"\n",(0,s.jsx)(i.h2,{id:"instruction-tuning-1",children:"Instruction Tuning?"}),"\n",(0,s.jsx)(i.p,{children:'Large Language Model(LLM) \uc758 \uac00\uc7a5 \ud070 \ud2b9\uc9d5\uc774\uc790 \ub192\uc740 task \uc218\ud589\ub825\uc758 \uc6d0\uc778\uc740 pre-train \uacfc\uc815\uc5d0\uc11c \uc720\uc785\ub41c \ubc29\ub300\ud55c \ud559\uc2b5 \ub370\uc774\ud130\uc785\ub2c8\ub2e4. LLM\uc740 \uae30\uc874 Language Model\uc5d0 \ube44\ud574 \uc555\ub3c4\uc801\uc73c\ub85c \ub9ce\uc740 Parameter\ub97c \uac00\uc9c0\uace0 \uc788\uace0 \ubc29\ub300\ud55c \ub370\uc774\ud130\ub85c \ud559\uc2b5\ud558\uae30 \ub54c\ubb38\uc5d0 \ubaa8\ub378 \uc790\uccb4\uac00 \uc54c\uace0\uc788\ub294 "\uc815\ubcf4"\uc758 \uc591\uc740 \ucda9\ubd84\ud569\ub2c8\ub2e4.'}),"\n",(0,s.jsxs)(i.p,{children:["\uadf8\ub807\uae30\uc5d0 LLM \uc758 \uad00\uac74\uc740 ",(0,s.jsx)(i.strong,{children:'"\ubaa8\ub378\uc774 \uc0ac\ub78c\uc758 \ub9d0(Instruction)\uc744 \uc5bc\ub9c8\ub098 \uc798 \uc774\ud574\ud558\ub294\uac00"'})," \uc5d0 \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. \uc798 \uc54c\ub824\uc9c4 Propmt Engineering \uae30\ubc95 \uc911 \ud558\ub098\uc778 ICL \uc740 \ubaa8\ub378\uc5d0\uac8c \uc9c8\ubb38\uc5d0 \ub300\ud55c \uc815\ub2f5\uc758 \uc608\uc2dc\ub97c \uc81c\uacf5\ud568\uc73c\ub85c\uc368 \ubaa8\ub378\uc774 \uc0ac\ub78c\uc758 \uc9c8\ubb38\uc744 \ub354 \uc798 \uc774\ud574\ud560 \uc218 \uc788\ub3c4\ub85d \uc720\ub3c4\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \uc0ac\ub78c\uc740 \uc77c\ubc18\uc801\uc73c\ub85c ",(0,s.jsx)(i.strong,{children:"\ub300\ub2f5\uc758 \ud615\uc2dd \uc815\ub3c4\ub9cc\uc744 \uc54c\ub824\uc904 \ubfd0, \uc815\ub2f5\uc744 \ucc3e\uae30 \uc704\ud55c \uc815\ubcf4\ub97c \ucd94\uac00\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})," ",(0,s.jsx)(i.strong,{children:"\ubaa8\ub378\uc774 \uc815\ub2f5\uc744 \ucc3e\uae30 \uc704\ud55c \ucda9\ubd84\ud55c \uc9c0\uc2dd\uc744 \uac00\uc9c0\uace0 \uc788\ub2e4\uace0 \uac00\uc815"}),"\ud558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.h3,{id:"instruction-tuning-vs-finetuning",children:"Instruction Tuning vs. Finetuning"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Instruction Tuning\uc758 \uc778\uc0ac\uc774\ud2b8\uc640 \ubaa9\uc801"})," \uc5ed\uc2dc ",(0,s.jsx)(i.strong,{children:'"\ubaa8\ub378\uc740 \ucda9\ubd84\ud55c \uc9c0\uc2dd\uc744 \uac00\uc9c0\uace0 \uc788\uc73c\ub2c8 Instruction \uc744 \ub354 \uc798 \uc774\ud574\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\uc790"'})," \uc785\ub2c8\ub2e4. ",(0,s.jsx)(i.strong,{children:"Finetuning \uc758 \ubaa9\uc801\uacfc\ub294 \ud06c\uac8c \uc0c1\uc774"}),"\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("div",{style:{textAlign:"Center"},children:(0,s.jsx)("img",{src:l,style:{border:"solid",width:600}})}),"\n",(0,s.jsxs)(i.p,{children:["\uc77c\ubc18\uc801\uc778 \ubaa8\ub378\uc740 general task\ub97c \ubcc4 \ubb38\uc81c \uc5c6\uc774 \uc218\ud589\ud560 \uc218 \uc788\uc744 \uc815\ub3c4\uc758 \uc9c0\uc2dd\uc744 \ud559\uc2b5\ud558\uc9c0\ub3c4, \uc9c0\uc2dd\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud55c parameter \ub3c4 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 finetuning \uc758 \uc8fc\ubaa9\uc801\uc740 ",(0,s.jsx)(i.strong,{children:"\ud2b9\uc815 task\uc5d0 \ub9de\ub3c4\ub85d \ubaa8\ub378\uc758 \uc9c0\uc2dd\uc744 \uc5c5\ub370\uc774\ud2b8"}),"\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 Finetuning \ubc29\uc2dd\uc740 \ucda9\ubd84\ud55c \uc9c0\uc2dd - \ucda9\ubd84\ud55c \ub370\uc774\ud130; \ub97c \ud544\uc694\ub85c \ud558\uba70 \uace0\uc9c8\uc801\uc73c\ub85c zero-shot \uc218\ud589\ub2a5\ub825\uc5d0\uc11c \ud55c\uacc4\ub97c \ubcf4\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(i.p,{children:["Instruction Tuning \uc740 Finetuning \uc758 \ud55c\uacc4\ub97c \ubd84\uba85\ud558\uac8c \ub6f0\uc5b4\ub118\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c ",(0,s.jsx)(i.strong,{children:"Finetuning\uc740 \uba87 \ub9cc\uac74~\uba87 \uc2ed\ub9cc\uac74\uc758 \ucda9\ubd84\ud55c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9"}),"\ud569\ub2c8\ub2e4. task\uc640 \uad00\ub828\ub41c \uac70\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ud55c\ubc88\uc529 \ubaa8\ub378\uc774 \ud559\uc2b5\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \ubaa9\ud45c\uac00 \ub418\ub2c8\uae4c\uc694. \ubc18\uba74 ",(0,s.jsx)(i.strong,{children:"Instruction Tuning \uc740 \uba87 \ubc31 \uac74 \uc218\uc900\uc758 \ub370\uc774\ud130\ub85c\ub3c4 \ucda9\ubd84\ud55c \uc131\ub2a5"}),"\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc9c0\uc2dd\uc740 \ucda9\ubd84\ud558\uace0 \uc9c8\uc758\uc751\ub2f5\uc758 \uc608\uc2dc\ub9cc \ubaa8\ub378\uc5d0\uac8c \ubcf4\uc5ec\uc8fc\uba74 \ub418\ub2c8\uae4c\uc694!"]}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Instruction Tuning vs. Fine-Tuning"})}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Instruction Tuning"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\ucda9\ubd84\ud55c \uc9c0\uc2dd\uc744 \uac00\uc9c4 \ubaa8\ub378\uc774 \uc9c8\uc758 \uc751\ub2f5\uc758 \ud615\uc2dd, Instruction \uc704\uc8fc\ub85c \ud559\uc2b5\ud558\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \ubaa9\uc801."}),"\n",(0,s.jsx)(i.li,{children:"\uba87 \ubc31\uac74 ~ \uba87 \ucc9c\uac74 \uc218\uc900\uc758 \ub370\uc774\ud130\ub85c\ub3c4 \ucda9\ubd84\ud788 \ud559\uc2b5."}),"\n",(0,s.jsx)(i.li,{children:"\ubaa8\ub378\uc758 \uc9c0\uc2dd \uae30\ubc18\uc73c\ub85c \ub192\uc740 zero-shot \uc131\ub2a5 \uae30\ub300 \uac00\ub2a5."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Fine-Tuning"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\uc81c\ud55c\ub41c \uc9c0\uc2dd\uc744 \uac00\uc9c0\uace0 \uc788\uace0(\uac00\uc9c8 \uc218 \uc788\ub294) \ubaa8\ub378\uc5d0\uac8c task\uc5d0 \ub9de\ub294 \uc9c0\uc2dd\uc744 \ud559\uc2b5\ud558\ub3c4\ub85d \ud558\ub294 \uac83\uc774 \ubaa9\uc801."}),"\n",(0,s.jsx)(i.li,{children:"\uba87 \ub9cc\uac74 \uc774\uc0c1\uc758 \ub370\uc774\ud130\uac00 \ud544\uc694."}),"\n",(0,s.jsx)(i.li,{children:"\uace0\uc9c8\uc801\uc73c\ub85c \ub0ae\uc740 zero-shot \uc131\ub2a5."}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(i.h2,{id:"varations-of-instruction-tuning",children:"Varations of Instruction Tuning"}),"\n",(0,s.jsxs)(i.p,{children:["Instruction Tuning \ubc29\ubc95\uc740 1) ",(0,s.jsx)(i.strong,{children:"\ub370\uc774\ud130\ub97c \uc5b4\ub5bb\uac8c \uc0dd\uc131\ud558\ub294\uac00"})," \uadf8\ub9ac\uace0 2) ",(0,s.jsx)(i.strong,{children:"\ubaa8\ub378\uc744 \uc5b4\ub5bb\uac8c \ud6a8\uc728\uc801\uc73c\ub85c \ud559\uc2b5\uc2dc\ud0a4\ub294\uac00"})," \ub85c \ub098\ub258\uc5b4\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(i.h3,{id:"\ub370\uc774\ud130-\uad00\uc810",children:"\ub370\uc774\ud130 \uad00\uc810"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"RLHF"}),"\n",(0,s.jsx)(i.li,{children:"RRHF"}),"\n",(0,s.jsx)(i.li,{children:"SliC-HF"}),"\n",(0,s.jsx)(i.li,{children:"DPO"}),"\n",(0,s.jsx)(i.li,{children:"RFT"}),"\n",(0,s.jsx)(i.li,{children:"LiMA"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"\ud559\uc2b5-\ubc29\ubc95-\uad00\uc810",children:"\ud559\uc2b5 \ubc29\ubc95 \uad00\uc810"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"./lora",children:(0,s.jsx)(i.strong,{children:"LORA"})})}),"\n",(0,s.jsx)(i.li,{children:"STILITs"}),"\n",(0,s.jsx)(i.li,{children:"MTL"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"ref",children:"Ref"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://openai.com/research/instruction-following",children:"OpenAI Instruction Following"})}),"\n"]})]})}function g(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>l,x:()=>o});var t=e(6540);const s={},r=t.createContext(s);function l(n){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function o(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);