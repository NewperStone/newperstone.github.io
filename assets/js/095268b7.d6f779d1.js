"use strict";(self.webpackChunklogicbaron=self.webpackChunklogicbaron||[]).push([[2004],{4350:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>o,default:()=>u,frontMatter:()=>h,metadata:()=>p,toc:()=>g});var a=n(4848),i=n(8453);const l=n.p+"assets/images/decoding-0-9e182aec4789a23f8ea1d64b193a7ac6.png",r=n.p+"assets/images/decoding-1-c1b28616c7fe1efce7340d1f690c344f.png",t=n.p+"assets/images/decoding-2-a2e77c950ee8af5b3260a77f5029a0eb.png",c=n.p+"assets/images/decoding-3-ca17392473dba5918e015b7a837a35d3.png",d=n.p+"assets/images/decoding-4-a1a7bea3e4632e8710576da78d70989f.png",m=n.p+"assets/images/decoding-5-323a27007f4f1e41e84f76775aa3aa4c.png",h={id:"decoding",sidebar_position:1},o="Decoding Method",p={id:"concepts/largemodel/decoding",title:"Decoding Method",description:"Generation Model \uc5d0\uc11c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub514\ucf54\ub529 \uc774\ub77c\ub294 \uacfc\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",source:"@site/docs/concepts/largemodel/decoding.md",sourceDirName:"concepts/largemodel",slug:"/concepts/largemodel/decoding",permalink:"/docs/concepts/largemodel/decoding",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/largemodel/decoding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"decoding",sidebar_position:1},sidebar:"LargeModelConceptSidebar",previous:{title:"Large Models",permalink:"/docs/concepts/largemodel/introduction"}},x={},g=[{value:"Greedy Search",id:"greedy-search",level:2},{value:"Beam Search",id:"beam-search",level:2},{value:"Sampling",id:"sampling",level:2},{value:"Top-k Sampling",id:"top-k-sampling",level:2},{value:"Top-p Sampling (Nucleus Sampling)",id:"top-p-sampling-nucleus-sampling",level:2}];function j(e){const s={a:"a",annotation:"annotation",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",mtext:"mtext",munder:"munder",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"decoding-method",children:"Decoding Method"}),"\n",(0,a.jsxs)(s.p,{children:["Generation Model \uc5d0\uc11c \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,a.jsx)(s.strong,{children:"\ub514\ucf54\ub529"})," \uc774\ub77c\ub294 \uacfc\uc815\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(s.p,{children:["\ud604\ub300\uc758 Generation Model \uc740 Neural Network \ub97c \uae30\ubc18\uc73c\ub85c ",(0,a.jsx)(s.strong,{children:"\uc5b4\ub5a4 \ud1a0\ud070\uc774 \ub098\ud0c0\ub0a0 \ud655\ub960"}),"\uc744 \uad6c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uc774 \uc77c\ub828\uc758 \ud1a0\ud070 \ud655\ub960\ub85c\ubd80\ud130 \ucd5c\uc885\uc801\uc778 \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\ud574\ub0b4\ub294 \uacfc\uc815\uc744 ",(0,a.jsx)(s.strong,{children:"\ub514\ucf54\ub529"})," \uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(s.p,{children:'\uc608\ub97c \ub4e4\uc5b4\uc11c "\uba39\uc5c8\ub2e4" \ub77c\ub294 \ud1a0\ud070\uc774 \uc55e\uc5d0\uc11c \ub098\uc654\ub2e4\uba74 \ub4a4\uc758 \ud1a0\ud070 \ud655\ub960 1\uc704\uac00 "\ucc45\uc0c1" \uc774\ub354\ub77c\ub3c4 2\uc704\uc778 "\uc0ac\uacfc"\ub97c \uc120\ud0dd\ud558\ub294 \uac8c \ub354  \ud604\uba85\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 text\ub97c \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ud1a0\ud070\uc744 \uc120\ud0dd\ud558\ub294 5\uac00\uc9c0\uc758 \ub514\ucf54\ub529 \uc804\ub7b5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4.'}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Greedy Search"}),"\n",(0,a.jsx)(s.li,{children:"Beam Search : BERT \uacc4\uc5f4 encoder-decoder generator \uc5d0\uc11c \ud65c\uc6a9"}),"\n",(0,a.jsx)(s.li,{children:"Top-k Sampling : GPT-2, GPT-3"}),"\n",(0,a.jsx)(s.li,{children:"Top-p Sampling : GPT-3 ,GPT-4"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"greedy-search",children:"Greedy Search"}),"\n",(0,a.jsx)(s.p,{children:"Greedy Search \ubc29\uc2dd\uc740 \ud604\uc7ac\uae4c\uc9c0 \uc0dd\uc131\ub41c \ud14d\uc2a4\ud2b8\ub85c\ubd80\ud130 \uac00\uc7a5 \ud655\ub960\uc774 \ub192\uc740 \ud1a0\ud070\uc744 \ub2e4\uc74c \ud1a0\ud070\uc73c\ub85c \uc120\ud0dd\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.span,{className:"katex-display",children:(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"t"})]}),(0,a.jsx)(s.mo,{children:"="}),(0,a.jsx)(s.mi,{children:(0,a.jsxs)(s.munder,{children:[(0,a.jsx)(s.mo,{children:(0,a.jsx)(s.mtext,{children:"argmax"})}),(0,a.jsx)(s.mi,{children:"w"})]})}),(0,a.jsx)(s.mtext,{children:"\xa0"}),(0,a.jsx)(s.mi,{children:"P"}),(0,a.jsx)(s.mo,{stretchy:"false",children:"("}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,a.jsxs)(s.msub,{children:[(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{children:":"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mo,{children:"\u2212"}),(0,a.jsx)(s.mn,{children:"1"})]})]}),(0,a.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"w_t = \\underset{w}{\\text{argmax}} \\ P(w | w_{1:t-1})"})]})})}),(0,a.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.2806em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(s.span,{className:"mrel",children:"="}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1.6444em",verticalAlign:"-0.8944em"}}),(0,a.jsx)(s.span,{className:"mord",children:(0,a.jsx)(s.span,{className:"mop op-limits",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsxs)(s.span,{className:"vlist",style:{height:"0.4306em"},children:[(0,a.jsxs)(s.span,{style:{top:"-2.2056em",marginLeft:"0em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"})})})]}),(0,a.jsxs)(s.span,{style:{top:"-3em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(s.span,{children:(0,a.jsx)(s.span,{className:"mop",children:(0,a.jsx)(s.span,{className:"mord text",children:(0,a.jsx)(s.span,{className:"mord",children:"argmax"})})})})]})]}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.8944em"},children:(0,a.jsx)(s.span,{})})})]})})}),(0,a.jsx)(s.span,{className:"mspace",children:"\xa0"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,a.jsx)(s.span,{className:"mopen",children:"("}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(s.span,{className:"vlist-r",children:[(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(s.span,{className:"mord mtight",children:[(0,a.jsx)(s.span,{className:"mord mtight",children:"1"}),(0,a.jsx)(s.span,{className:"mrel mtight",children:":"}),(0,a.jsx)(s.span,{className:"mord mathnormal mtight",children:"t"}),(0,a.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,a.jsx)(s.span,{className:"mord mtight",children:"1"})]})})]})}),(0,a.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.2083em"},children:(0,a.jsx)(s.span,{})})})]})})]}),(0,a.jsx)(s.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,a.jsx)(s.p,{children:"\ud1a0\ud070 \uc120\ud0dd\uc758 \ud750\ub984\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)("div",{style:{textAlign:"Center"},children:(0,a.jsx)("img",{src:l,style:{border:"solid",width:600}})}),"\n",(0,a.jsx)(s.p,{children:"Greedy Search \uc54c\uace0\ub9ac\uc998\uc758 \uac00\uc7a5 \ud070 \uc7a5\uc810\uc740 \uc9c1\uad00\uc801\uc774\uba70 \uacc4\uc0b0 \ube44\uc6a9\uc774 \ub9e4\uc6b0 \ub0ae\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(s.p,{children:["Greedy Search \ubc29\uc2dd\uc740 ",(0,a.jsx)(s.strong,{children:"\ub450 \uac00\uc9c0 \ubb38\uc81c\uc810"}),"\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uccab \ubc88\uc9f8\ub85c\ub294 \ubb38\uc7a5 \uc0dd\uc131 \uacfc\uc815\uc5d0\uc11c \ud604\uc7ac \uc2dc\uc810\uc5d0\uc11c\uc758 best \uc804\ub7b5\ub9cc \uc120\ud0dd\ud558\ub2e4\ubcf4\ub2c8 ",(0,a.jsx)(s.strong,{children:"\ubbf8\ub798 \uc2dc\uc810\uc5d0\uc11c \ub354 \uc88b\uc740 \ud1a0\ud070 \ubc30\uc5f4\uc744 \ud655\uc778\ud560 \uc218 \uc5c6\ub2e4"}),'\ub294 \uc810\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4\uc11c \uadf8\ub9bc\uc5d0\uc11c\ub294 "The nice woman" \ubb38\uc7a5\uc758 \ud655\ub960\ubcf4\ub2e4 "The dog has" \uc758 \ud655\ub960\uc774 \ucd5c\uc885\uc801\uc73c\ub85c \ub192\uc9c0\ub9cc Greedy Search \ubc29\uc2dd\uc73c\ub85c\ub294 \uc774 \ubb38\uc7a5\uc744 \uc0dd\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.']}),"\n",(0,a.jsx)(s.p,{children:"\ub450 \ubc88\uc9f8 \ubb38\uc81c\uc810\uc740 Greedy Search \ubc29\uc2dd\uc5d0\uc11c\ub294 \ub3d9\uc5b4 \ubc18\ubcf5\uc774 \ud2b9\ud788 \uc790\uc8fc \ubc1c\uc0dd\ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.h2,{id:"beam-search",children:"Beam Search"}),"\n",(0,a.jsxs)(s.p,{children:['Beam Search\ub294 \uac01 \uc2dc\uc810\uc5d0\uc11c \uac00\uc7a5 \ud655\ub960\uc774 \ub192\uc740 \ud1a0\ud070\ub9cc\uc744 \uc120\ud0dd\ud558\uc9c0 \uc54a\uace0 N\uac1c \uae4c\uc9c0\uc758 \uc120\ud0dd\uc9c0\ub97c \uac19\uc774 \uc0b4\ud3b4\ubd05\ub2c8\ub2e4. \uc774 \uc804\ub7b5\uc744 \uadf8\ub9bc\uc73c\ub85c \ud45c\ud604\ud558\uba74 \uc544\ub798\uc640 \uac19\uc774 \uc5ec\ub7ec\uac1c\uc758 \ubd89\uc740 \uc0c9 \uc120\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 "\uac00\uc9c0(prune)" \uc744 \ubcf4\uac8c\ub418\ub294\ub370 Beam Search \ubc29\uc2dd\uc5d0\uc11c\ub294 \uc774 \uac00\uc9c0\ub4e4\uc744 ',(0,a.jsx)(s.strong,{children:"Beam"})," \uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)("div",{style:{textAlign:"Center"},children:(0,a.jsx)("img",{src:r,style:{border:"solid",width:600}})}),"\n",(0,a.jsx)(s.p,{children:"Beam Search \uc758 \uc7a5\uc810\uc740 \ud604\uc7ac \uc2dc\uc810\uc5d0\uc11c \uc54c \uc218 \uc5c6\ub294 \ub354 \ub192\uc740 \ud655\ub960\uc758 \ud1a0\ud070 \ubc30\uc5f4\uae4c\uc9c0 \ucc3e\uc544\ub0bc \uc218 \uc788\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"\ud558\uc9c0\ub9cc Beam Search \ub294 n\uc774 \ucee4\uc9d0\uc5d0 \ub530\ub77c \uacc4\uc0b0\ub7c9\uc774 \uc99d\uac00\ud55c\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \uc0dd\uc131\ud558\ub294 \ud14d\uc2a4\ud2b8\uac00 \uae38\uc5b4\uc9c8\uc218\ub85d \uc774 \ubd80\ubd84\uc740 \uaf64 \ud070 \ubd80\ub2f4\uc73c\ub85c \ub2e4\uac00\uc624\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"\uadf8\ub9ac\uace0 \uc5ed\uc2dc Greedy Search \uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ub3d9\uc5b4 \ubc18\ubcf5 \ubb38\uc81c\uac00 \uaf64 \uc790\uc8fc \ubc1c\uc0dd\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.h2,{id:"sampling",children:"Sampling"}),"\n",(0,a.jsx)(s.p,{children:"Greedy Search & Beam Search \ubc29\uc2dd\uc740 \ub2e4\uc74c \ud1a0\ud070\uc758 \ud655\ub960\uc5d0 \ub530\ub77c \ud655\uc815\uc801\uc778(deterministic) \uc54c\uace0\ub9ac\uc998\uc785\ub2c8\ub2e4. \uc774 \ubc29\uc2dd\uc740 \uc0dd\uc131\ub41c \ud14d\uc2a4\ud2b8\uc758 \ub2e4\uc591\uc131\uc774 \ub9e4\uc6b0 \ub5a8\uc5b4\uc9c0\uac8c \ub429\ub2c8\ub2e4. \ub610\ud55c \uc55e\ubd80\ubd84\uc758 \uc644\uc131\ub3c4\uac00 \ub5a8\uc5b4\uc9c0\ub294 \ud14d\uc2a4\ud2b8\ub97c \uc0dd\uc131\uc740 \ud559\uc2b5 \uacfc\uc815\uc5d0\uc11c \ud53c\ub4dc\ubc31 \uc790\uccb4\uac00 \uc774\ub8e8\uc5b4\uc9c0\uc9c0 \uc54a\uace0, \uc774\ub85c \uc778\ud574 \uc9e7\uc740 \ubb38\uc7a5 \uc704\uc8fc\ub85c \uc0dd\uc131\ub418\uba70 \ub3d9\uc5b4 \ubc18\ubcf5\uc774 \uc790\uc8fc \uc77c\uc5b4\ub098\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:"Sampling \ubc29\uc2dd\uc740 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub2e4\uc74c \ub2e8\uc5b4\uc758 \uc0dd\uc131\uc744 \ud1a0\ud070 \ud655\ub960\ub85c \ubd80\ud130 \uc0d8\ud50c\ub9c1 \ud558\ub294 \ubc29\uc2dd\uc774 \ub3c4\uc785\ub429\ub2c8\ub2e4. \uc774 \ubc29\uc2dd\uc73c\ub85c \ubaa8\ub378\uc740 \ud604\uc7ac \uc2dc\uc810\uc5d0\uc11c \uc77c\uc5b4\ub0a0 \ud655\ub960\uc774 \ub9e4\uc6b0 \ub0ae\uc740 \ud1a0\ud070\ub3c4 \uc0dd\uc131\ud558\uba70, \ud559\uc2b5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)("div",{style:{textAlign:"Center"},children:(0,a.jsx)("img",{src:t,style:{border:"solid",width:600}})}),"\n",(0,a.jsxs)(s.p,{children:["\ud655\ub960\uc5d0 \ub530\ub978 \ud655\uc815\uc801\uc778 \uc54c\uace0\ub9ac\uc998\uc774 \uc544\ub2c8\ubbc0\ub85c \uc774 \uc2dc\uc810\ubd80\ud130\ub294 \ud1a0\ud070\ub4e4\uc758 \ud655\ub960 \ubd84\ud3ec \ud615\ud0dc \uc790\uccb4\uac00 \uc911\uc694\ud574\uc9d1\ub2c8\ub2e4. GPT \ubaa8\ub378\ub4e4\uc744 \uc0ac\uc6a9\ud560 \ub54c temperature \uac00 \uc0ac\uc6a9\ub418\ub294 \uc774\uc720\uac00 \uc774 \ubd80\ubd84\uc785\ub2c8\ub2e4. cross-entropy loss\uc5d0\uc11c \ucc98\uc74c \uc0ac\uc6a9\ub41c temperature hyperparameter\ub294 \ud070 \uac12\uc77c\uc218\ub85d softmax function \uc73c\ub85c \uacc4\uc0b0\ub418\uc5b4\uc9c0\ub294 \ud655\ub960 \ubd84\ud3ec\ub97c \ub354\uc6b1 ",(0,a.jsx)(s.strong,{children:"\uc644\ub9cc\ud558\uac8c"})," \ub9cc\ub4e4\uc5b4\ub0c5\ub2c8\ub2e4. (Temperature\uc5d0 \ub300\ud55c \ubd80\ubd84\uc740 \ub530\ub85c \uc815\ub9ac\ub97c \ud558\ub824\uace0 \ud569\ub2c8\ub2e4.)"]}),"\n",(0,a.jsx)("div",{style:{textAlign:"Center"},children:(0,a.jsx)("img",{src:c,style:{border:"solid",width:600}})}),"\n",(0,a.jsx)(s.p,{children:"\uc989, temperature\uac00 \ub192\uc744\uc218\ub85d \uc5ec\ub7ec \ud1a0\ud070\ub4e4\uc774 \ub354\uc6b1 \uade0\uc77c\ud55c \ud655\ub960\ub85c \uc0dd\uc131\ub420 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \ub2f9\uc5f0\ud788 \ubaa8\ub378\uc758 \uacb0\uacfc\ub294 \ub354\uc6b1 \ucc3d\uc758\uc801\uc774\uace0 \ub2e4\uc591\ud574\uc9d1\ub2c8\ub2e4. GPT-api\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Temperature\uc5d0 \ub300\ud55c \uc124\uba85\uc5d0 \uc774\ub7ec\ud55c \ubc30\uacbd\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.h2,{id:"top-k-sampling",children:"Top-k Sampling"}),"\n",(0,a.jsx)(s.p,{children:"Sampling \ubc29\uc2dd\uc740 \ubaa8\ub378 \ub2f5\ubcc0 \uc0dd\uc131\uc774 \ub2e4\uc591\ud574\uc9c0\uc9c0\ub9cc \ub54c\ub85c\ub294 \ub108\ubb34 \ubd80\uc815\ud655\ud55c \ub2f5\ubcc0\uc774 \uc0dd\uc131\ub41c\ub2e4\ub294 \ubb38\uc81c\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \uc81c\uc548\ub41c \ubc29\uc2dd\uc740 \uc0d8\ud50c\ub9c1 \ub300\uc0c1\uc774 \ub418\ub294 \ud1a0\ud070\uc758 pool\uc744 \uc81c\ud55c\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)("div",{style:{textAlign:"Center"},children:(0,a.jsx)("img",{src:m,style:{border:"solid",width:600}})}),"\n",(0,a.jsx)(s.p,{children:"\uccab \ubc88\uc9f8 \ubc29\uc2dd\uc740 \ud655\ub960\uc774 \ub192\uc740 \uc21c\uc11c\ub300\ub85c k\uac1c\uc758 \ud1a0\ud070 pool\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)(s.p,{children:'\uc774 \ubc29\uc2dd\uc758 \ub2e8\uc810\uc740 \uade0\uc77c\ud55c \ud655\ub960 \ubd84\ud3ec\uc5d0\uc11c \uac00\ub2a5\uc131\uc774 \ub192\uc740 \ud1a0\ud070\uc744 \uc0dd\uc131\ud558\uc9c0 \ubabb\ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 top-k \uadf8\ub9bc\uc5d0\uc11c\ub294 \uc2e4\uc81c\ub85c top-1 \uc778 "nice" token\uacfc sampling pool \uc5d0\uc11c \ubc97\uc5b4\ub09c "people" token\uc758 \ud655\ub960\uc774 \ube44\uc2b7\ud568\uc5d0\ub3c4 "people" \ud1a0\ud070\uc740 \uace0\ub824\ub418\uc9c0 \ubabb\ud569\ub2c8\ub2e4.'}),"\n",(0,a.jsxs)(s.p,{children:["\ud2b9\ud788 \ud604\ub300 LLM\uc5d0\uc11c\ub294 temeprature\uc758 \uc870\uc808\uc774 \ud575\uc2ec\uc801\uc73c\ub85c \uc791\uc6a9\ud558\ub294\ub370 top-k \ubc29\uc2dd\uc740 ",(0,a.jsx)(s.strong,{children:"\ud655\ub960 \ubd84\ud3ec\ub97c \uc644\ub9cc\ud558\uac8c \ub9cc\ub4dc\ub294 \ub192\uc740 temperature \uc5d0\uc11c \uc131\ub2a5\uc774 \ud06c\uac8c \ud558\ub77d"}),"\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(s.h2,{id:"top-p-sampling-nucleus-sampling",children:"Top-p Sampling (Nucleus Sampling)"}),"\n",(0,a.jsx)(s.p,{children:"Nuclues Sampling \ubc29\uc2dd\uc740 top-k \ubc29\uc2dd\uc758 \ub2e8\uc810\uc740 \ubcf4\ucda9\ud558\uba74\uc11c, Sampling \ubc29\uc2dd\uc758 \ucc3d\uc758\uc801\uc778 \ub2f5\ubcc0 \uc0dd\uc131 \ub2a5\ub825\uc740 \uacc4\uc2b9\ud569\ub2c8\ub2e4. top-k \ubc29\uc2dd\uacfc top-p \ubc29\uc2dd \ub458 \ub2e4 sampling pool\uc758 \ud1a0\ud070\uc744 \uc81c\ud55c\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \ucc28\uc774\uc810\uc740 top-k \ubc29\uc2dd\uc740 \ud655\ub960\uc774 \ub192\uc740 k\uac1c \ud1a0\ud070\uc744 sampling pool\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc18\uba74, top-p \ubc29\uc2dd\uc740 \ucd1d \ud655\ub960\uc774 p\uac00 \ub418\ub3c4\ub85d sampling pool\uc744 \ud615\uc131\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."}),"\n",(0,a.jsx)("div",{style:{textAlign:"Center"},children:(0,a.jsx)("img",{src:d,style:{border:"solid",width:700}})}),"\n",(0,a.jsx)(s.p,{children:"\uc774 \ubc29\uc2dd\uc740 \uade0\uc77c\ud55c \ubd84\ud3ec\uc5d0\uc11c\ub294 \ud6e8\uc52c \ub2e4\uc591\ud55c \ud1a0\ud070\ub4e4\uc744 \uc0d8\ud50c\ub9c1 \ub300\uc0c1\uc73c\ub85c \uc0ac\uc6a9\ud558\uace0, \uade0\uc77c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 \ud655\ub960\uc774 \ub192\uc740 \ud1a0\ud070\ub4e4\uc744 \uc704\uc8fc\ub85c sampling pool\uc744 \ud615\uc131\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(s.p,{children:["\ud604\ub300\uc758 \ub300\ubd80\ubd84 ",(0,a.jsx)(s.strong,{children:"LLM \ub4e4\uc740 nucleus sampling"}),"\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub610\ud55c, \uacfc\uac70\uc758 BERT-BART \uc640 \uac19\uc740 \ubaa8\ub378\ub4e4\uc774 \uc0ac\uc6a9\ud55c beam search \ubc29\uc2dd\uc744 nucleus sampling\uc73c\ub85c \ub300\uccb4\ud558\ub294 \uc5f0\uad6c\ub3c4 \uc9c4\ud589\ub418\uace0 \uc788\uc73c\uba70 \uc758\ubbf8\uc788\ub294 \uc131\ub2a5 \uac1c\uc120\uc744 \ubcf4\uc5ec\uc8fc\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(s.h1,{id:"reference",children:"Reference"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://huggingface.co/blog/how-to-generate?fbclid=IwAR19kbEiW_sF19TeSr4BE4jQZSIqz0GzOFD2013fIGEH32DReW9pAFq6vDM",children:"https://huggingface.co/blog/how-to-generate?fbclid=IwAR19kbEiW_sF19TeSr4BE4jQZSIqz0GzOFD2013fIGEH32DReW9pAFq6vDM"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://littlefoxdiary.tistory.com/46",children:"https://littlefoxdiary.tistory.com/46"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>t});var a=n(6540);const i={},l=a.createContext(i);function r(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);