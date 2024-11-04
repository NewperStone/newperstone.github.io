"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6855],{9026:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"tasks/informationextraction/universalNER_2023","title":"UniversalNER","description":"UniversalNER \uc774\ub77c\ub294 \ubcc4\uba85\uc744 \uac00\uc9c0\uace0 \ub098\uc628 \ub17c\ubb38\uc774 \ub450 \uac1c \uc788\uc2b5\ub2c8\ub2e4. 1\ub144 \uc815\ub3c4 \ubc16\uc5d0 \uc2dc\uac04 \ucc28\uc774\uac00 \ub098\uc9c0 \uc54a\ub294\ub370 \uc800\uc790\ub3c4, \ub0b4\uc6a9\ub3c4 \uc804\ud600 \ub2e4\ub985\ub2c8\ub2e4.","source":"@site/docs/tasks/informationextraction/universalner.md","sourceDirName":"tasks/informationextraction","slug":"/tasks/informationextraction/universalNER_2023","permalink":"/docs/tasks/informationextraction/universalNER_2023","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/tasks/informationextraction/universalner.md","tags":[],"version":"current","sidebarPosition":100,"frontMatter":{"id":"universalNER_2023","sidebar_position":100},"sidebar":"InformationextractionSidebar","previous":{"title":"Information Extraction","permalink":"/docs/tasks/informationextraction/hello"},"next":{"title":"UniversalNER: 2024","permalink":"/docs/tasks/informationextraction/universalner_2024"}}');var a=t(4848),i=t(8453);const r={id:"universalNER_2023",sidebar_position:100},s="UniversalNER",l={},c=[{value:"UniversalNER: 2023",id:"universalner-2023",level:2},{value:"\ub370\uc774\ud130",id:"\ub370\uc774\ud130",level:3},{value:"1. Annotation Guidelines",id:"1-annotation-guidelines",level:4},{value:"2. Sourcing Data",id:"2-sourcing-data",level:4},{value:"3. Sourcing Annotator &amp; Annotation Tool",id:"3-sourcing-annotator--annotation-tool",level:4},{value:"4. Secondary Annotator",id:"4-secondary-annotator",level:4},{value:"5. Annotation Difference and Resolution &amp; Other tag",id:"5-annotation-difference-and-resolution--other-tag",level:4},{value:"6. Dataset Transfer",id:"6-dataset-transfer",level:4},{value:"\ubaa8\ub378 &amp; \uc131\ub2a5",id:"\ubaa8\ub378--\uc131\ub2a5",level:3}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"universalner",children:"UniversalNER"})}),"\n",(0,a.jsx)(e.p,{children:"UniversalNER \uc774\ub77c\ub294 \ubcc4\uba85\uc744 \uac00\uc9c0\uace0 \ub098\uc628 \ub17c\ubb38\uc774 \ub450 \uac1c \uc788\uc2b5\ub2c8\ub2e4. 1\ub144 \uc815\ub3c4 \ubc16\uc5d0 \uc2dc\uac04 \ucc28\uc774\uac00 \ub098\uc9c0 \uc54a\ub294\ub370 \uc800\uc790\ub3c4, \ub0b4\uc6a9\ub3c4 \uc804\ud600 \ub2e4\ub985\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"\uccab \ubc88\uc9f8 \ub17c\ubb38\uc740 2023\ub144 11\uc6d4\uc5d0 \ucd9c\ud310\ub418\uc5c8\uace0 \ub450 \ubc88\uc9f8 \ub17c\ubb38\uc740 2024\ub144 1\uc6d4\uc5d0 \ucd9c\ud310\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uace0\uc791 2\ub2ec \uc815\ub3c4 \ubc16\uc5d0 \ucc28\uc774\uac00 \uc548 \ub098\ub294\ub370 \uc774 \ub450 \ub17c\ubb38\uc740 \uc5b8\uc5b4 \uc774\ud574 \ubd84\uc57c\uc5d0\uc11c \uc5bc\ub9c8\ub098 \ube60\ub974\uac8c \ubcc0\ud654\uac00 \uc77c\uc5b4\ub098\uace0 \uc788\ub294\uc9c0 \ubcf4\uc5ec\uc8fc\ub294 \ub17c\ubb38\ub4e4\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(e.p,{children:["2023\ub144\uc758 \ub17c\ubb38\uc740 \uc804\ud1b5\uc801\uc778 NER \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud588\uace0, 2024\ub144\uc758 \ub17c\ubb38\uc740 LLM \uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. Universal\uc758 \uc758\ubbf8\ub3c4 \ub2e4\ub985\ub2c8\ub2e4. 2023\ub144\ub3c4\uc758 \ub17c\ubb38\uc740 ",(0,a.jsx)(e.strong,{children:'"Universal Language NER"'})," \uc774\ub77c\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4. 2024\ub144\ub3c4\uc758 \ub17c\ubb38\uc740 ",(0,a.jsx)(e.strong,{children:'"Universal Name(Class)"'})," \uc758 \uc758\ubbf8\ub97c \uac00\uc9d1\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.p,{children:"\uc774 \uae00\uc5d0\uc11c\ub294 \ub450 \uac00\uc9c0 \ub17c\ubb38\uc744 \ub458\ub2e4 \ub2e4\ub8e8\ub824\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h2,{id:"universalner-2023",children:"UniversalNER: 2023"}),"\n",(0,a.jsxs)(e.p,{children:['2023\ub144\ub3c4 Universal NER \ub17c\ubb38\uc758 "Universal" \uc740 ',(0,a.jsx)(e.strong,{children:"\uc5b8\uc5b4\uc758 \uc885\ub958"})," \uce21\uba74\uc5d0\uc11c Universal\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub9e4\uc6b0 \ub2e4\uc591\ud55c \uc5b8\uc5b4\ub85c, \ud55c\uc815\ub41c entity type : ",(0,a.jsx)(e.code,{children:"PERSON"}),", ",(0,a.jsx)(e.code,{children:"LOCATION"}),", ",(0,a.jsx)(e.code,{children:"ORGANIZATION"})," - \uc5d0 \ub300\ud55c NER \ubaa8\ub378\uc744 \ud559\uc2b5\ud558\ub294 \uac83\uc774 \uc8fc\uc694\ud55c \ubaa9\ud45c\uc785\ub2c8\ub2e4. \uc774 \ub17c\ubb38\uc758 Contribution\uc740 ",(0,a.jsx)(e.strong,{children:"\ub370\uc774\ud130\uc151 \uad6c\ucd95"})," \uacfc\uc815\uc785\ub2c8\ub2e4. \ud574\ub2f9 \ub17c\ubb38\uc740 ",(0,a.jsx)(e.strong,{children:"12\uac1c\uc758 \uc5b8\uc5b4, 18\uac1c\uc758 \ub370\uc774\ud130\uc151"}),"\uc5d0 \ub300\ud574\uc11c NER \ub370\uc774\ud130\uc151\uc744 \uad6c\ucd95\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \uc800\uc790\ub4e4\uc774 \uc0ac\uc6a9\ud55c \ub370\uc774\ud130\uc758 \uc591\uc2dd, annotation \ubc29\ubc95\uacfc \uc815\uc81c \ub85c\uc9c1\ub4f1\uc744 \ub514\uc790\uc778\uc744 \uc704\uc8fc\ub85c \uc18c\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.h3,{id:"\ub370\uc774\ud130",children:"\ub370\uc774\ud130"}),"\n",(0,a.jsxs)(e.p,{children:["Universal NER \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ub370\uc774\ud130 \uc0dd\uc131\uc744 \uc704\ud55c \uccab \ubc88\uc9f8 \ub2e8\uacc4\ub294 \ub2e4\uc591\ud55c \uc5b8\uc5b4\uc5d0\uc11c \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 common tagset \uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4. UD, UPOS \ud504\ub85c\uc81d\ud2b8\ub294 \ub2e4\uc591\ud55c \uc5b8\uc5b4\uc5d0 \uac78\uccd0 \uad6c\ubb38 \uad6c\uc870 ; \ud488\uc0ac \uccb4\uacc4\ub77c\ub294 \uacf5\ud1b5\uc801\uc778 entity set \uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc640 \uac19\uc774 UNER \uc5d0\uc11c\ub294 3\uac00\uc9c0\uc758 cross-language  entity type: person (",(0,a.jsx)(e.code,{children:"PER"}),"), location (",(0,a.jsx)(e.code,{children:"LOC"}),") \uadf8\ub9ac\uace0 organization (",(0,a.jsx)(e.code,{children:"ORG"}),") \ub77c\ub294 3\uac00\uc9c0 entity type \uc5d0 \ub300\ud574 annotation\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.h4,{id:"1-annotation-guidelines",children:"1. Annotation Guidelines"}),"\n",(0,a.jsx)(e.p,{children:"UniversalNER \uc740 NorNE \ud504\ub85c\uc81d\ud2b8 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \ud65c\uc6a9\ud574\uc11c \ucd94\uac00 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. tag description \uacfc \ud568\uaed8 \ub2e4\uc591\ud55c \uc0c1\ud669 : \uc774\uba54\uc77c, \uc8fc\uc18c \uadf8\ub9ac\uace0 \uc624\ud0c0 - \uc5d0\uc11c\uc758 annotation rule \uc744 \uc81c\uc2dc\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uac00\uc774\ub4dc\ub77c\uc778, changelog \uadf8\ub9ac\uace0 \ub370\uc774\ud130\uc151\uc744 \uac00\uc774\ub4dc\ub77c\uc778 \ubc84\uc804\uc5d0 \ub530\ub77c \uad00\ub9ac\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h4,{id:"2-sourcing-data",children:"2. Sourcing Data"}),"\n",(0,a.jsx)(e.p,{children:"Universal Dependency (UD) Corpra \uac00 \uc774\ubbf8 \ub370\uc774\ud130 \uc218\uc9d1, \uc815\uc81c, \ud1a0\ud06c\ub098\uc774\uc9d5, \ub77c\uc774\uc13c\uc2f1\uacfc \uac19\uc740 \ub9ce\uc740 \uc791\uc5c5\uc744 \uc9c4\ud589\ud588\uae30 \ub54c\ubb38\uc5d0 UniversalNER \uc740 \uc774 \ub370\uc774\ud130\uc5d0 \ub300\ud574 \ucd94\uac00\uc801\uc778 annotation \uc791\uc5c5\ub9cc \uc9c4\ud589\ud588\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"UD annotation\uc740 \uc6cc\ub4dc \ub808\ubca8\uc5d0\uc11c \uc9c4\ud589\ub418\uc5c8\uae30\uc5d0 UNER \uc5ed\uc2dc \uc6cc\ub4dc\ub808\ubca8 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc9c4\ud589\ud588\uc73c\uba70 {B-X, I-X, O} \ud0dc\uae45 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. \ub610\ud55c UNER\uc740 UD treebank \uc5d0 NER \ud0dc\uae45\ud558\ub294 \uc791\uc5c5\ub4e4\ub3c4 \uc801\uadf9\uc801\uc73c\ub85c \ud65c\uc6a9\ud588\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h4,{id:"3-sourcing-annotator--annotation-tool",children:"3. Sourcing Annotator & Annotation Tool"}),"\n",(0,a.jsx)(e.p,{children:"\uc81c\uc77c \uc911\uc694\ud55c \ubd80\ubd84\uc774\uc8e0. UniversalNER \ud504\ub85c\uc81d\ud2b8\ub294 native speaker annotator \uc744 \ubaa8\uc9d1\ud574\uc11c \uc218\uae30 \uac80\uc218\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.p,{children:"TALEN annotation tool\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4. TALEN \uc740 \uba87 \uac00\uc9c0 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\ub294\ub370, \uadf8 \uc911 \ud55c\uac00\uc9c0\ub294 annotation propagation\uc785\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc740 document \uc758 \uc5b4\ub5a4 \ub2e8\uc5b4\ub97c annotation\ud558\uba74 \uadf8 \ubb38\uc11c \ub0b4\uc758 \ubaa8\ub4e0 \ud574\ub2f9 \ub2e8\uc5b4\ub97c \ub3d9\uc77c\ud558\uac8c annotation \ud574\uc8fc\ub294 \uae30\ub2a5\uc778\ub370, \ub370\uc774\ud130 \uc0dd\uc131 \uc18d\ub3c4\ub97c \ud06c\uac8c \ud5a5\uc0c1 \uc2dc\ucf1c\uc8fc\uc9c0\ub9cc \ub178\uc774\uc988 \uc5ed\uc2dc \uaf64 \uc99d\uac00\ud588\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h4,{id:"4-secondary-annotator",children:"4. Secondary Annotator"}),"\n",(0,a.jsx)(e.p,{children:"\ud558\ub098\uc758 \ub370\uc774\ud130\uc151\uc744 \uc804\ub2f4\ud558\ub294 \uac80\uc218\uc790\uc640 \ubcc4\uac1c\ub85c \uac01 \ub370\uc774\ud130\uc758 subset (\ucd5c\uc18c \uc804\uccb4 \ub370\uc774\ud130\uc758 5% \uc774\uc0c1 \ud06c\uae30) \ub97c \uac80\uc218\ud558\ub294 secondary annotator \uac00 \uc788\uc2b5\ub2c8\ub2e4. secondary annotation\uc758 \ubaa9\uc801\uc740 inter-annotator agreement \ud655\uc778\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(e.p,{children:["\ud558\ub098\uc758 document\uc5d0 \ub300\ud574\uc11c \uc5ec\ub7ec \uba85\uc758 annotator\uac00 \uc788\uc744 \uacbd\uc6b0 ",(0,a.jsx)(e.strong,{children:'"\uac00\uc7a5 \ub9ce\uc740 annotation"'})," \uc744 \ub9cc\ub4e0 \uac80\uc218\uc790\uc758 \uac80\uc218 \uacb0\uacfc\ub97c \ub77c\ubca8\ub85c\uc368 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub370\uc774\ud130\uc151\uc740 \uc774\ub7ec\ud55c document-annotation\uc744 \ubaa8\uc544\uc11c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc989 \ud558\ub098\uc758 \ub370\uc774\ud130\uc151\uc740 \uc5ec\ub7ec \uba85\uc758 annotator\uc758 \uae30\uc5ec\ub85c \uc0dd\uc131\ub418\uc9c0\ub9cc \ud558\ub098\uc758 document \ub294 \uacf5\uc2dd\uc801\uc73c\ub85c \ud55c \uba85\uc758 annotator \ub9cc \uae30\uc5ec\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.h4,{id:"5-annotation-difference-and-resolution--other-tag",children:"5. Annotation Difference and Resolution & Other tag"}),"\n",(0,a.jsx)(e.p,{children:"Annotator \uac04 Annotation \ubd88\uc77c\uce58\uac00 \uc788\uc744 \uacbd\uc6b0 \ub450 Annotator\uac04 \ud569\uc758\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. (...) \ub450 Annotator \uac04 \uac00\uc774\ub4dc \ub77c\uc778 \ud574\uc11d\uc5d0\uc11c \ubd88\uc77c\uce58\uac00 \uc788\uc744 \uacbd\uc6b0 \uac00\uc774\ub4dc \ub77c\uc778 \ud574\uc11d\uc774 \uc77c\uce58\ud558\ub3c4\ub85d \ubcf4\uc870\ud558\uace0, \uadfc\ubcf8\uc801\uc778 Annotation\uc5d0 \ub300\ud55c \ubd88\uc77c\uce58\uac00 \uc788\uc744 \uacbd\uc6b0 official annotation\uc744 \ub530\ub985\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(e.p,{children:["\ub610\ud55c, ",(0,a.jsx)(e.code,{children:"PER"}),", ",(0,a.jsx)(e.code,{children:"LOC"}),", ",(0,a.jsx)(e.code,{children:"ORG"})," \uc678\uc758 ",(0,a.jsx)(e.code,{children:"OTHER"})," tag\ub97c \uc720\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub294 mention, entity \ub85c\uc368 \ucda9\ubd84\ud788 \uae30\ub2a5\ud558\uc9c0\ub9cc \uc138 \uac00\uc9c0 entity type\uc5d0 \ud574\ub2f9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0."]}),"\n",(0,a.jsx)(e.h4,{id:"6-dataset-transfer",children:"6. Dataset Transfer"}),"\n",(0,a.jsx)(e.p,{children:"\uba87 \uba87 \ub370\uc774\ud130\uc758 \uacbd\uc6b0 \uae30\uc874 annotated dataset \uc744 \ud65c\uc6a9\ud558\ub418, UniversalNER annotation guide \uc5d0 \ub9de\uac8c \uc57d\uac04 \uc218\uc815\ud558\uc5ec \uc0ac\uc6a9\ud558\uc600\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h3,{id:"\ubaa8\ub378--\uc131\ub2a5",children:"\ubaa8\ub378 & \uc131\ub2a5"}),"\n",(0,a.jsx)(e.p,{children:"XLM-R-large \ubaa8\ub378\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub370\uc774\ud130\uc151 \ub17c\ubb38\uc774\uae30\uc5d0 \ubaa8\ub378 \uc131\ub2a5 \uc5ed\uc2dc \ub370\uc774\ud130\uc151\uc5d0 \ub300\ud55c \ubd84\uc11d \ub290\ub08c\uc785\ub2c8\ub2e4. \uac04\ub2e8\ud558\uac8c\ub9cc \uc815\ub9ac\ud558\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"\uc5b8\uc5b4\uc801 \ud2b9\uc131\uacfc annotation\uc758 \ub09c\ub3c4\uac00 \ubaa8\ub378\uc758 \uc131\ub2a5\uc5d0 \uac70\uc758 \uc9c1\uc811\uc801\uc778 \uc601\ud5a5"}),"\uc774 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b9\ud788, \uc5b8\uc5b4\uc758 \uad6c\uc870\uc0c1\uc73c\ub85c annotation\uc774 \ub9e4\uc6b0 \ud798\ub4e0 \uc911\uad6d\uc5b4\uc5d0\uc11c \uac00\uc7a5 \ub0ae\uc740 cross-lingual transfer \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc92c\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(e.p,{children:"\uac19\uc740 \uad00\uc810\uc5d0\uc11c cross-annotator agreement \uc810\uc218\uac00 PERSON\uc5d0\uc11c \uac00\uc7a5 \ub192\uace0 ORG, LOC \uc810\uc218\uac00 \ube44\uad50\uc801 \ub0ae\uc558\uc2b5\ub2c8\ub2e4. \ub2f9\uc5f0\ud788 \uc0ac\ub78c\ubcf4\ub2e4\ub294 \uae30\uad00\uacfc \uc7a5\uc18c\uac00 \ud5f7\uac08\ub9b4 \uc5ec\uc9c0\uac00 \ub9ce\uc740\ub370 \ubaa8\ub378 \uc131\ub2a5 \uc5ed\uc2dc \uc774\ub7ec\ud55c \ud2b9\uc131\uc744 \ub530\ub77c\uac00\uc11c ORG\uc640 LOC \uc640 \uad00\ub828\ub41c tag-level performance\uc758 \uc131\ub2a5\uc774 \uac00\uc7a5 \ub0ae\uc558\ub2e4\uace0 \ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(e.h1,{id:"ref",children:"Ref"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://arxiv.org/pdf/2311.09122.pdf",children:"UniversalNER"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>s});var o=t(6540);const a={},i=o.createContext(a);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);