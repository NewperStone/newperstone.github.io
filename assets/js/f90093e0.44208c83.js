"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7679],{124:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=e(4848),r=e(8453);const a=e.p+"assets/images/nuextract-79d3e4be6b32db125249d954bdc45077.png",o={id:"nuextract",sidebar_position:400},s="NuExtract",c={id:"tasks/informationextraction/nuextract",title:"nuextract",description:"Information Extraction Task \uc758 \uc5b4\ub824\uc6c0 \uc911 \ud558\ub098\ub294 \ucd94\ucd9c\ud574\uc57c \ud558\ub294 \uc815\ubcf4\ub97c \uc815\uc758\ud558\ub294 \uc77c\uc785\ub2c8\ub2e4.",source:"@site/docs/tasks/informationextraction/nuextract.md",sourceDirName:"tasks/informationextraction",slug:"/tasks/informationextraction/nuextract",permalink:"/docs/tasks/informationextraction/nuextract",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/tasks/informationextraction/nuextract.md",tags:[],version:"current",sidebarPosition:400,frontMatter:{id:"nuextract",sidebar_position:400},sidebar:"InformationextractionSidebar",previous:{title:"GNER",permalink:"/docs/tasks/informationextraction/gner"},next:{title:"AVEQA & MAVEQA",permalink:"/docs/tasks/informationextraction/Attribute Extraction/hello"}},l={},d=[{value:"\ucee8\uc149 \uc774\ud574",id:"\ucee8\uc149-\uc774\ud574",level:2},{value:"Framework",id:"framework",level:2},{value:"Train",id:"train",level:2},{value:"Finetune",id:"finetune",level:2}];function u(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Information Extraction Task \uc758 \uc5b4\ub824\uc6c0 \uc911 \ud558\ub098\ub294 \ucd94\ucd9c\ud574\uc57c \ud558\ub294 \uc815\ubcf4\ub97c \uc815\uc758\ud558\ub294 \uc77c\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"UniversalNER \uc744 \ud3ec\ud568\ud55c LLM \ub4f1\uc7a5 \uc774\uc804\uc758 \uc5f0\uad6c\ub4e4\uc758 \ubc29\ud5a5\uc740 \uc774\ub7ec\ud55c \uc5b4\ub824\uc6c0\uc744 '\uc77c\ubc18\uc801\uc73c\ub85c \uc801\uc6a9\uac00\ub2a5\ud55c entity type \uccb4\uacc4' \ub97c \uc0ac\uc6a9\ud574\uc11c \ud574\uacb0\ud574\uc654\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"GPT-3 \uc758 \ub4f1\uc7a5 \uc774\ud6c4\ub85c\ub294 LLM \uc774 \ud559\uc2b5\ud55c \ub370\uc774\ud130\uc5d0 \uc774\ubbf8 \ucda9\ubd84\ud55c entity type \uc815\ubcf4\uac00 \ub179\uc544 \uc788\uc744 \uac83\uc774\ub77c\ub294 \uac00\uc815\ud558\uc5d0 prompt \ub97c \uac1c\uc120\ud558\uba70 entity type \uccb4\uacc4\ub97c \uc815\uc758\ud558\uc9c0 \uc54a\ub294 \ubc29\uc2dd\uc774 \uc120\ud638\ub418\uc5b4 \uc654\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.p,{children:["NuExtract \ub294 entity type \uccb4\uacc4\ub97c \uc815\uc758\ud574\uc8fc\uba74 LLM \uc774 \ub354\uc6b1 \uc815\ud655\ud558\uac8c \ub370\uc774\ud130\ub97c \ucd94\ucd9c\ud558\uba70, \ud2b9\ud788 ",(0,i.jsx)(n.strong,{children:"\uc6d0\ubb38 \ud14d\uc2a4\ud2b8\uc5d0 \uc788\ub294 \ub370\uc774\ud130"})," \ucd94\ucd9c \uc815\ud655\ub3c4\uac00 \uc62c\ub77c\uac04\ub2e4\uace0 \uc8fc\uc7a5\ud569\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74, \ubb38\uc81c\ub294 entity type \uccb4\uacc4\ub97c \uc5b4\ub5bb\uac8c \uc815\uc758\ud574\uc8fc\ub0d0 \uc77c\ud150\ub370 \ub17c\ubb38\uc5d0\uc11c\ub294 template \uc0dd\uc131\uc744 LLM \uc744 \ud1b5\ud574 \uc9c4\ud589\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h1,{id:"nuextract",children:"NuExtract"}),"\n",(0,i.jsx)(n.p,{children:"Numind \uc5d0\uc11c \uc81c\uc548\ud558\uace0 \ubc1c\ud45c\ud55c llm \uc744 \ud65c\uc6a9\ud55c information extraction \uc758 framework \uc785\ub2c8\ub2e4. \ubaa8\ub378\uc774 \uc544\ub2c8\uace0 framework \ub77c\uace0 \uc124\uba85\ud55c \uc774\uc720\ub294 \ub370\uc774\ud130\uc758 \uc218\uc9d1, \ud504\ub86c\ud504\ud2b8 \uc791\uc131 \uadf8\ub9ac\uace0 \ubaa8\ub378 \ud559\uc2b5\uae4c\uc9c0\uc758 \uc804 \uacfc\uc815\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uae30 \ub584\ubb38\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"NuExtract Framework \ud575\uc2ec\uc740 \ud06c\uac8c \ub450 \uac00\uc9c0 \uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Template \uc744 \ud65c\uc6a9\ud574 \uc6d0\ud558\ub294 \uc591\uc2dd\uc5d0 \ub9de\ub294 information extraction output \uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"large-LLM \uc744 \ud65c\uc6a9\ud574 \ub370\uc774\ud130\ub97c \uad6c\ucd95\ud558\uace0, small-LLM \uc5d0 \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\uc544\ub798 \uadf8\ub9bc\uc740 NuExtract \ud504\ub808\uc784\uc6cc\ud06c \uc804\uccb4 \uacfc\uc815\uc744 \uc815\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)("div",{style:{textAlign:"Center"},children:(0,i.jsx)("img",{src:a,style:{border:"solid",width:500}})}),"\n",(0,i.jsx)(n.p,{children:"\uba3c\uc800 Llama3 \uc640 \uac19\uc740 Large-LLM \uc744 \ud65c\uc6a9\ud574 Information Extraction \uacfc\uc81c\uc758 input-output \uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc740 zero-shot \uc73c\ub85c \uc218\ud589\ud569\ub2c8\ub2e4. NuExtract \uc758 \ud2b9\uc774\uc810\uc740 \uc704\uc5d0\uc11c \uc5b8\uae09\ud588\ub4ef output \uc758 template \uc744 \uc81c\uacf5\ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \ube14\ub85c\uadf8\uc5d0\uc11c NuExtract \uc5d0\uc11c \uc0ac\uc6a9\ud55c prompt\uc640, prompt \ub97c \uc0ac\uc6a9\ud574 \uc0dd\uc131\ud55c \ub370\uc774\ud130\uc758 \uc608\uc2dc\ub97c \uc804\ubd80 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ucee8\uc149-\uc774\ud574",children:"\ucee8\uc149 \uc774\ud574"}),"\n",(0,i.jsx)(n.p,{children:"\uba3c\uc800 inference \uacfc\uc815\uc740 \uc544\ub798\uc640 \uac19\uc740 propmt \ub97c \uc0ac\uc6a9\ud55c\ub2e4\uace0 \uc774\ud574\ud558\uba74 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4. input text \uc640 \ud568\uaed8 infromation extraction \uc758 entity template \uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc740 template \uc5d0 \ub9de\ucdb0\uc11c input text \ub85c \ubd80\ud130 entity value \ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Given the following JSON template and text, return a version of the JSON template filled in with the relevant data. Don\'t return anything besides the filled in JSON content.\n\n{\n  "reactants" : [{\u201dname\u201d : \u201c\u201d , \u201cquantity\u201d : \u201c\u201d}],\n  "reagents" : [{\u201dname\u201d : \u201d\u201d, \u201cquantity\u201d : \u201d\u201d}],\n  "solvents" : [{\u201dname\u201d : \u201d\u201d, \u201cquantity\u201d : \u201d\u201d}],\n  "catalysts" : [{\u201dname\u201d : \u201d\u201d, \u201cquantity\u201d : \u201d\u201d}],\n  "time" : [\u201c\u201d],\n  "temperature" : [\u201c\u201d]\n}\n\nInput: *<input>*\n\nOutput:\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\ub17c\ubb38\uc5d0\uc11c\ub294 ",(0,i.jsx)(n.strong,{children:"ICL \uc744 \ud65c\uc6a9\ud558\ub294 \ud3b8\uc774 \ub2e8\uc21c\ud788 template \uc744 \uc81c\uacf5\ud558\uac70\ub098 \uac01 field \uc5d0 \ub300\ud55c description \uc744 \ucd94\uac00\ud558\ub294 \uac83\ubcf4\ub2e4 \ub354 \uc131\ub2a5\uc774 \uc88b\ub2e4"}),"\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4. \uc608\uc2dc\uc5d0 \ud6e8\uc52c \ub9ce\uc740 \uc815\ubcf4\uac00 \ub179\uc544\uc788\ub2e4\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4. \ub610\ud55c ",(0,i.jsx)(n.strong,{children:"ICL \ubcf4\ub2e4\ub294 fine-tuning\uc774 \ub354 \uc131\ub2a5\uc774 \uc88b\ub2e4"}),"\uace0 \uc774\uc57c\uae30\ud569\ub2c8\ub2e4.\n\uba3c\uc800 prompt \uc758 \uc608\uc2dc\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h2,{id:"framework",children:"Framework"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NuExtract \uc758 \ud559\uc2b5 \ub370\uc774\ud130 \uad6c\uc131\uc744 \uc704\ud55c \ub370\uc774\ud130 \uad6c\ucd95 \ubc29\ubc95"}),"\uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c C4 \ub370\uc774\ud130\uc151\uc5d0 \ud3ec\ud568\ub41c english document \ub4e4\uc744 \ub370\uc774\ud130\ub85c \ud65c\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uba3c\uc800 ",(0,i.jsx)(n.strong,{children:"LLM \uc744 \uc0ac\uc6a9\ud574 \uac01 \ub370\uc774\ud130\ub85c\ubd80\ud130 template(schema) \ub97c \ucd94\ucd9c"}),"\ud569\ub2c8\ub2e4. \ub17c\ubb38\uc5d0\uc11c\ub294 baseline LLM \uc73c\ub85c Llama3 \ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c\ub294 value \ub294 \ucd94\ucd9c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"!!!START Context!!!\n\n*<text-to-annotate>*\n\n!!!END Context!!!\n\nGoal: Generate an information extraction dataset.\n\nInput: Text document + instructions for annotation.\n\nOutput: 1 JSON object (schema).\n\nSchema:\nDescribes the information to be extracted.\nEach field should:\nBe a clear and concise name representing the extracted data.\nONLY STRING TYPE ARE ALLOWED AS VALUES (it can be an array of strings, or an object with string values, or an array of objects with string values...).\nNO BOOLEAN, INT, ENUM, ETC.\nThe schema can focus only on part of the context document, or on the whole document.\n\nConstraints:\nExtracted information should be thematically coherent and form a well-structured JSON schema with a clear relationship between fields.\n\n*<few-shot examples>*\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ub2e4\uc74c\uc73c\ub85c \uc5ed\uc2dc LLM \uc744 \ud65c\uc6a9\ud574 \uc0dd\uc131\ud55c template \uc744 \ud65c\uc6a9\ud574 entity value \ub97c \ucd94\ucd9c\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c input document text \ub97c \ubcc0\ud615\ud569\ub2c8\ub2e4. \uc808\ubc18\uc740 full-text  \ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud558\uace0 \ub098\uba38\uc9c0 \uc808\ubc18\uc740 \ud14d\uc2a4\ud2b8\uc758 \uc77c\ubd80\ub97c \uc0ad\uc81c\ud569\ub2c8\ub2e4. (template \uc740 \uc720\uc9c0\ud569\ub2c8\ub2e4.)"}),"\n",(0,i.jsxs)(n.p,{children:["template \uc774 input document \ub97c \ud65c\uc6a9\ud574\uc11c \uc0dd\uc131\ub418\uc5c8\uae30\uc5d0 \uc0ac\uc2e4\uc0c1 negative entity type : \uc544\ubb34\ub7f0 value \uac00 \uc5c6\ub294 entity type - \uc774 \uc788\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c ",(0,i.jsx)(n.strong,{children:"\ud14d\uc2a4\ud2b8\ub97c \uc804\ubd80 \uc0ac\uc6a9\ud574\uc11c \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\uba74 \ubaa8\ub378\uc740 \uc0ac\uc2e4\uc0c1 negative entity \ub97c \ud559\uc2b5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"}),". non-negative dataset \uc744 \ud1b5\ud574 \ud559\uc2b5\ud55c LLM \uc740 \ub2f9\uc5f0\ud788 template \uc744 \uc804\ubd80 \ucc44\uc6b0\ub294 \ubc29\ud5a5\uc73c\ub85c hallucination \uc774 \uc2ec\ud55c output \uc744 \uc0dd\uc131\ud558\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc800\uc790\ub4e4\uc740 \ud14d\uc2a4\ud2b8\uc758 \uc77c\ubd80\ub97c \uc0ad\uc81c\ud558\ub294 \uac83\uc744 hallucination \ubb38\uc81c \ud574\uacb0\uc744 \uc704\ud55c ",(0,i.jsx)(n.strong,{children:"negative sampling \uc758 \uc77c\uc885"}),"\uc774\ub77c\uace0 \uc124\uba85\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'!!!START Context!!!\n\n*<text-to-annotate>*\n\n!!!END Context!!!\n\nGoal: Extract strings from the text corresponding to the given schema.\n\nInput: Text document + schema.\n\nOutput: 1 JSON object\n\nSchema:\nThe schema describes the information to be extracted.\nONLY STRING TYPE ARE ALLOWED AS VALUES (it can be an array of strings, or an object with string values, or an array of objects with string values...).\nNO BOOLEAN, INT, ENUM, ETC.\nThe schema can focus only on part of the context document, or on the whole document.\n\nOutput:\nTHE OUTPUT SHOULD FOLLOW EXACTLY THE SCHEMA.\nIt should respect the schema and contain the extracted information from the context document.\nTHE STRING SHOULD BE PRESENT EXACTLY AS IT IS IN THE CONTEXT DOCUMENT. NO PARAPHRASING ALLOWED.\nIf the information is NOT PRESENT in the context, return "" for empty string and [] for empty array. If the list of object is empty, return [].\nReturn only the information extracted as JSON. Do not output anything else or says anything else.\n\nInformation to extract:\n\n*<schema>*\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\ub17c\ubb38\uc5d0\uc11c\ub294 \uc774\ub807\uac8c \uc0dd\uc131\ub41c \ub370\uc774\ud130\uc151\uc758 \uc7a5\uc810\uc774\uc790 \ub2e8\uc810\uc73c\ub85c output\uc774 ",(0,i.jsx)(n.strong,{children:"copy-pasting \uad6c\uc870, \uc989 \uc6d0\ubb38 \ud14d\uc2a4\ud2b8\uc5d0\uc11c \uc720\ub798"}),"\ub428\uc744 \uac15\uc870\ud569\ub2c8\ub2e4. \ubaa8\ub378\uc758 \uc774\ub7ec\ud55c \ud2b9\uc131\uc740 negative sampling \uc5d0\uc11c \uc720\ub798\ub418\uc5c8\ub2e4\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.p,{children:"300k pair \uc5d0\uc11c \ucd5c\uc885\uc801\uc73c\ub85c 50k \uac1c\uc758 \ub370\uc774\ud130 \ud398\uc5b4\ub97c \uc0dd\uc131\ud558\uc5ec \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"train",children:"Train"}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ub807\uac8c \uc0dd\uc131\ud55c \ub300\ud615 \ub370\uc774\ud130\uc151\uc744 \ud1b5\ud574 NuExtract Framework \ub97c \ud559\uc2b5\uc2dc\ud0b5\ub2c8\ub2e4. \uadf8 \ud6c4 \ud3c9\uac00\ud55c \uacb0\uacfc NuExtract \ub294 \uc77c\ubc18\uc801\uc778 \uacfc\uc81c\uc5d0\uc11c \uaf64 \ub192\uc740 \uc218\uc900\uc758 bench mark score \ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:e(9742).A+"",width:"1718",height:"1291"})}),"\n",(0,i.jsx)(n.h2,{id:"finetune",children:"Finetune"}),"\n",(0,i.jsx)(n.p,{children:"NuExtract \uc758 \uc2dc\uc0ac\uc810 \uc911 \ud558\ub098\ub294 finetuning \uc73c\ub85c \uc778\ud574 \uc791\uc740 \ubaa8\ub378\uc758 \uc131\ub2a5\uc774 \ud06c\uac8c \uc624\ub978\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \ud2b9\ud788, \ub9e4\uc6b0 \ub113\uc740 \ub3c4\uba54\uc778\uc758 \uc804\ubb38 \uc9c0\uc2dd\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\uc740 specific taks \uc758 \uacbd\uc6b0 LLM \uc744 \ud65c\uc6a9\ud558\ub294 \uac83\uc774 \ub9e4\uc6b0 \ubd80\ub2f4\uc2a4\ub7fd\uc2b5\ub2c8\ub2e4. NuExtract \uc758 Finetuning task \ub294 \uc791\uc740 \ubaa8\ub378\ub85c\ub3c4 \ucda9\ubd84\ud788 \ud2b9\uc815 \ub3c4\uba54\uc778\uc5d0\uc11c LLM \uc758 \ubc94\uc6a9\uc131\uacfc \ud568\uaed8 domain specific knowledge \ub97c \uc804\ubd80 \uc0ac\uc6a9\ud558\ub294 \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ud0ac \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \uc2dc\uc0bd\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:e(4868).A+"",width:"1718",height:"1266"})}),"\n",(0,i.jsxs)(n.p,{children:['\uc804\ubc18\uc801\uc73c\ub85c \uc57d 10% \uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc9c0\ub9cc, tiny-model \uc758 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \ub208\uc5d0 \ub450\ub4dc\ub9ac\uc9d1\ub2c8\ub2e4. \ubaa8\ub378 \uc0ac\uc774\uc988\uc5d0 \ub530\ub978 finetuning \ud6a8\uacfc\ub97c \uadf8\ub798\ud504\ub85c \uadf8\ub9ac\uba74 \uc5b4\ub290 \uc21c\uac04 saturation \uc774 \ubc1c\uc0dd\ud560 \uac83\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4. \uadf8\ub9bc\uac19\uc740 \uacbd\uc6b0 "\ud654\ud559" \ubd84\uc57c\uc5d0 \ub300\ud55c finetuning \uacb0\uacfc \uc785\ub2c8\ub2e4. \uc544\ub9c8\ub3c4 \uaf64 \ub113\uc740 \ubc94\uc704\ub354\ub77c\ub3c4 finetuning \ud65c\uc6a9\uc740 \ubaa8\ub378\uc758 \uc131\ub2a5\uc5d0 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce58\uba70, \uc774\ub294 \ud2b9\ud788 ',(0,i.jsx)(n.strong,{children:"\ub113\uc740 \ubc94\uc704\uc5d0\uc11c \ub514\ud14c\uc77c\ud55c \uc815\ubcf4\ub97c \uae30\uc5b5\ud560 \ub2a5\ub825\uc740 \ubd80\uc871\ud55c tiny \ubaa8\ub378\uc5d0\uc11c \ub450\ub4dc\ub7ec\uc9c0\ub294 \uac83"}),"\uc73c\ub85c \ubcf4\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ub97c \ub2ec\ub9ac \ud45c\ud604\ud558\uba74, \uc791\uc740 \ubaa8\ub378\uc774\ub77c\ub3c4 \ud2b9\uc815 domain \uc5d0 \ub300\ud574\uc11c\ub294 finetuning \ub4f1\uc744 \ud1b5\ud574 \ucda9\ubd84\ud788 large model \uacfc \ube44\uc2b7\ud55c \uc218\uc900\uc758 \uc131\ub2a5\uc744 \ubcf4\uc5ec\uc904 \uc218 \uc788\ub2e4\ub294 \uc0ac\uc2e4\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h1,{id:"ref",children:"Ref"}),"\n",(0,i.jsxs)(n.p,{children:["1.",(0,i.jsx)(n.a,{href:"https://numind.ai/blog/nuextract-a-foundation-model-for-structured-extraction",children:"NuExtract Blog"})]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://arxiv.org/pdf/2402.15343",children:"NuNER Paper"})}),"\n"]})]})}function h(t={}){const{wrapper:n}={...(0,r.R)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},4868:(t,n,e)=>{e.d(n,{A:()=>i});const i=e.p+"assets/images/image-1-3efade504093a4786b88ecde62647676.png"},9742:(t,n,e)=>{e.d(n,{A:()=>i});const i=e.p+"assets/images/image-e8f418185534b7d6c3e679698091c432.png"},8453:(t,n,e)=>{e.d(n,{R:()=>o,x:()=>s});var i=e(6540);const r={},a=i.createContext(r);function o(t){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),i.createElement(a.Provider,{value:n},t.children)}}}]);