"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9425],{9199:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"concepts/deeplearning/taxonomy/prob","title":"Probabilistic Models","description":"\uae30\uc874\uc758 \uba38\uc2e0 \ub7ec\ub2dd \ubaa8\ub378, \ud2b9\ud788 Representation Learning \ubaa8\ub378\ub4e4\uc758 \ubaa9\uc801\uc740 \ub370\uc774\ud130\uc758 \uc218\ud559\uc801 \ud45c\ud604\uc778 Embedding\uc744 \ud559\uc2b5\ud558\ub294 \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 embedding\uc740 Tensor \ub77c\ub294 \uc218\ud559\uc801 \ud615\uc2dd\uc73c\ub85c \ud45c\ud604\ub418\uba70 vecotr, matrix\uc640 \uac70\uc758 \ub611\uac19\uc2b5\ub2c8\ub2e4.","source":"@site/docs/concepts/deeplearning/taxonomy/probabilistic.md","sourceDirName":"concepts/deeplearning/taxonomy","slug":"/concepts/deeplearning/taxonomy/prob","permalink":"/docs/concepts/deeplearning/taxonomy/prob","draft":false,"unlisted":false,"editUrl":"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/concepts/deeplearning/taxonomy/probabilistic.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"prob","sidebar_position":2},"sidebar":"DeepLearningSidebar","previous":{"title":"Metric Learning","permalink":"/docs/concepts/deeplearning/taxonomy/metric_learning"},"next":{"title":"Image Generation","permalink":"/docs/concepts/deeplearning/taxonomy/image_generation"}}');var i=n(4848),l=n(8453);const t={id:"prob",sidebar_position:2},r="Probabilistic Models",m={},c=[{value:"How to Represent?",id:"how-to-represent",level:2},{value:"Limitation",id:"limitation",level:2},{value:"Computation Limitation",id:"computation-limitation",level:3},{value:"Inductive Uncertainty",id:"inductive-uncertainty",level:3},{value:"However...",id:"however",level:2}];function h(s){const e={annotation:"annotation",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",mspace:"mspace",msub:"msub",mtext:"mtext",munderover:"munderover",ol:"ol",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,l.R)(),...s.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"probabilistic-models",children:"Probabilistic Models"})}),"\n",(0,i.jsxs)(e.p,{children:["\uae30\uc874\uc758 \uba38\uc2e0 \ub7ec\ub2dd \ubaa8\ub378, \ud2b9\ud788 Representation Learning \ubaa8\ub378\ub4e4\uc758 \ubaa9\uc801\uc740 \ub370\uc774\ud130\uc758 \uc218\ud559\uc801 \ud45c\ud604\uc778 ",(0,i.jsx)(e.strong,{children:"Embedding"}),"\uc744 \ud559\uc2b5\ud558\ub294 \uac83\uc774\uc5c8\uc2b5\ub2c8\ub2e4. \uc774 embedding\uc740 ",(0,i.jsx)(e.strong,{children:"Tensor"})," \ub77c\ub294 \uc218\ud559\uc801 \ud615\uc2dd\uc73c\ub85c \ud45c\ud604\ub418\uba70 ",(0,i.jsx)(e.strong,{children:"vecotr, matrix"}),"\uc640 \uac70\uc758 \ub611\uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"\ud558\uc9c0\ub9cc \uc815\ub9d0 \uc138\uc0c1\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc784\ubca0\ub529 \uacf5\uac04 \uc0c1\uc758 \ud55c \uc9c0\uc810\uc73c\ub85c \ud45c\ud604\ud560 \uc218 \uc788\uc744\uae4c\uc694?"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Alt text",src:n(6352).A+"",width:"2162",height:"1098"})}),"\n",(0,i.jsxs)(e.p,{children:["\uc0dd\uac01\ubcf4\ub2e4 \uc5b4\ub5a4 \ub370\uc774\ud130\ub4e4\uc740 ",(0,i.jsx)(e.strong,{children:"\uba85\ud655"}),"\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \ub370\uc774\ud130\ub4e4\uc740 \ubaa8\ud638\ud558\uace0, \ub54c\ub85c\ub294 \uc911\uc758\uc801\uc774\uae30\uae4c\uc9c0 \ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\ubaa8\ud638\ud55c \ub370\uc774\ud130"}),'\uc758 \uc608\ub97c \ub4e4\uc5b4\ubcfc\uae4c\uc694? \uc608\ub97c \ub4e4\uc5b4\uc11c "\uac1c" \ub77c\ub294 \ud14d\uc2a4\ud2b8\ub294 \uc138\uc0c1\uc758 \uc815\ub9d0 \ub9ce\uc740 "\uac1c" \ub97c \ub098\ud0c0\ub0b4\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 "\uac1c" \ub77c\ub294 \ud14d\uc2a4\ud2b8\uc758 \ubaa8\ud638\uc131\uc744 \ub098\ud0c0\ub0b4\uc8e0. \uc774\ub7ec\ud55c \ubaa8\ud638\uc131\uc740 \uaf64 \uad6c\uccb4\uc801\uc778 \ud14d\uc2a4\ud2b8-\ub610\ub294 \ub370\uc774\ud130\ub97c \uc0c1\uc815\ud558\ub354\ub77c\ub3c4 \uc5b8\uc81c\ub098 \ub0a8\uc544\uc788\uac8c\ub429\ub2c8\ub2e4. "\ubc14\ub098\ub098 \uc6b0\uc720" \ub77c\uace0 \ud574\ub3c4 \uc6b0\ub9ac\ub294 \ube0c\ub79c\ub4dc, \uc6a9\ub7c9 \ub4f1\uc758 \ub610 \ub2e4\ub978 \ud2b9\uc9d5\ub4e4\uc740 \ud655\uc778\ud558\uc9c0 \ubabb\ud55c\ucc44\ub85c \ubaa8\ud638\ud558\uac8c \ub0a8\uaca8\ub194\uc57c \ud569\ub2c8\ub2e4.']}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\uc911\uc758\uc801\uc778 \ub370\uc774\ud130"}),'\uc758 \uc608\ub85c\ub294 "rock"\uacfc \uac19\uc740 \ub2e8\uc5b4\uac00 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \uc774 \ub2e8\uc5b4\ub294 "\ub3cc\ub9f9\uc774, \ubc14\uc704" \ub4f1\uacfc \uad00\ub828\ub41c \ub2e8\uc5b4\uc758 \uc758\ubbf8\uc640 "\ub77d \uc74c\uc545" \uacfc \uad00\ub828\ub41c \ub2e8\uc5b4\uc758 \uc758\ubbf8\ub97c \ubaa8\ub450 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ub2e8\uc5b4\uc758 \uc784\ubca0\ub529\uc740 \uc5b4\ub5bb\uac8c \ud45c\ud604\ud558 \uc218 \uc788\uc744\uae4c\uc694?']}),"\n",(0,i.jsxs)(e.p,{children:["Probabilistic Embedding \uc740 \uc774\ub7ec\ud55c \ub370\uc774\ud130\uc758 ",(0,i.jsx)(e.strong,{children:"\ubaa8\ud638\uc131\uacfc \uc911\uc758\uc131"}),"\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud574 \ub4f1\uc7a5\ud588\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.h2,{id:"how-to-represent",children:"How to Represent?"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Alt text",src:n(3362).A+"",width:"992",height:"405"})}),"\n",(0,i.jsx)(e.p,{children:"\ube44\uc2b7\ud55c \ub370\uc774\ud130\ub4e4\uc774 \uc11c\ub85c \ubb49\uccd0\uc788\uace0 \uc11c\ub85c \ub2e4\ub978 \ub370\uc774\ud130\ub294 \ub5a8\uc5b4\uc838\uc788\ub294 \uc784\ubca0\ub529 \uacf5\uac04\uc744 \uc0c1\uc815\ud574\ubd05\uc2dc\ub2e4."}),"\n",(0,i.jsx)(e.p,{children:'\uc608\ub97c \ub4e4\uc5b4\uc11c, "\uac1c"\uc640 \uad00\ub828\ub41c \ub370\uc774\ud130\ub4e4\uc740 \uc784\ubca0\ub529 \uacf5\uac04\uc0c1\uc5d0\uc11c \uc5b4\ub290\uc815\ub3c4 \uc11c\ub85c \ubb49\uccd0\uc788\uc744 \uac83\uc785\ub2c8\ub2e4. "\ubc14\ub098\ub098 \uc6b0\uc720"\ub294 "\uac1c" \ubcf4\ub2e4\ub294 \uc870\uae08 \ub354 \uc801\uc740 \ub370\uc774\ud130\uac00 \uc870\uae08 \ub354 \ubc00\uc9d1\ub41c \uacf5\uac04\uc5d0 \ubb49\uccd0\uc788\uc744 \uc218 \uc788\uaca0\uc8e0.'}),"\n",(0,i.jsxs)(e.p,{children:['\uc774 \uacf5\uac04\uc0c1\uc5d0\uc11c\ub294 \uc5b4\ub5a4 \ud14d\uc2a4\ud2b8-\ub370\uc774\ud130\uc640 \uad00\ub828\ub41c \ub370\uc774\ud130\uac00 \ubb49\uccd0\uc788\ub294 \uacf5\uac04\uacfc \uadf8 \ubc00\ub3c4\ub97c "',(0,i.jsx)(e.strong,{children:"\ubaa8\ud638\ud55c \ub2e8\uc5b4\uc758 \ud45c\ud604"}),'"\uc774\ub77c\uace0 \ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\ub7ec\ud55c \ub370\uc774\ud130\ub4e4\uc774 \ubb49\uccd0\uc788\ub294 \uacf5\uac04, \ubc94\uc704 \uadf8\ub9ac\uace0 \ubc00\ub3c4 \ub4f1\uc744 \ud45c\ud604\ud558\ub294 \ubc29\ubc95\uc740 ',(0,i.jsx)(e.strong,{children:"\ud655\ub960 \ubd84\ud3ec"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["\uadf8\ub807\ub2e4\uba74 ",(0,i.jsx)(e.strong,{children:"\uc911\uc758\uc801\uc778 \ud45c\ud604"}),"\uc740 \uc5b4\ub5bb\uac8c \ud45c\ud604\ud560 \uc218 \uc788\uc744\uae4c\uc694?"]}),"\n",(0,i.jsxs)(e.p,{children:["\uc911\uc758\uc801\uc778 \ud45c\ud604\uc740 \uc11c\ub85c \ubb49\uccd0\uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,i.jsx)(e.strong,{children:"\ub2e4\ub978 \uc758\ubbf8\uc774\ub2c8\ub9cc\ud07c \uc784\ubca0\ub529 \uacf5\uac04 \uc0c1\uc5d0\uc11c \uc720\uc758\ubbf8\ud55c \uac70\ub9ac\ub97c \uac00\uc9c0\uace0 \ub5a8\uc5b4\uc838 \uc788\uc744 \uac83"}),'\uc785\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uace0 \uc774 \ub450 \uc758\ubbf8\uc758 \ud3c9\uade0\uacfc \uac19\uc740 \uac12\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \uc801\uc808\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. "rock" \uc774\ub77c\ub294 \ub2e8\uc5b4\ub294 \uba85\ud655\ud558\uac8c "\ub3cc" \ub610\ub294 "\ub77d \uc74c\uc545"\uc744 \uc758\ubbf8\ud558\uc9c0 \uadf8 \uc911\uac04\uc758 \uc5b4\ub5a4 \uc758\ubbf8\ub97c \uac00\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.']}),"\n",(0,i.jsxs)(e.p,{children:['\uc26c\uc6b4 \ubc29\ubc95\uc740 \ud558\ub098\uc758 \ub2e8\uc5b4\uc5d0 \ub300\ud574 \ud558\ub098 \uc774\uc0c1\uc758 \ud45c\ud604 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. "rock" \uc774\ub77c\ub294 \ub2e8\uc5b4\uc758 \ud45c\ud604\uc73c\ub85c \ub450 \uac1c\uc758 \uc784\ubca0\ub529 list\ub97c \ud65c\uc6a9\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc "\ub3cc" \ub610\ub294 "\ub77d \uc74c\uc545" \uc774\ub77c\ub294 \ub2e8\uc5b4 \uc5ed\uc2dc \ub9e4\uc6b0 \ubaa8\ud638\ud558\ub2e4\ub294 \ud2b9\uc9d5\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uac01\uac01\uc758 \uc758\ubbf8\ub97c \uc704\uc5d0\uc11c \ub17c\uc758\ud55c \uac83\uacfc \uac19\uc740 \ud655\ub960 \ubd84\ud3ec \ud615\ud0dc\ub85c \ud45c\ud604\ud55c\ub2e4\uba74 "rock" \uc774\ub77c\ub294 \ub2e8\uc5b4\ub294 ',(0,i.jsx)(e.strong,{children:"\ub450 \ud655\ub960 \ubd84\ud3ec\uc758 \uc911\ucca9"}),"\uc73c\ub85c \ud45c\ud604\uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsxs)(e.p,{children:["\uadf8\ub807\ub2e4\uba74 ",(0,i.jsx)(e.strong,{children:"\ubaa8\ud638\ud558\uace0 \uc911\uc758\uc801\uc778 \ud45c\ud604"}),"\uc744 \uc124\uba85\ud558\uae30 \uc704\ud55c \uac15\ub825\ud55c \uc218\ud559\uc801 \ud615\uc2dd\uc774 \uc900\ube44 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",(0,i.jsxs)(e.strong,{children:[(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"K"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"K"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"K"})]})})]}),"\uac1c \ud655\ub960 \ubd84\ud3ec\uc758 \uc911\ucca9"]})," \ud615\uc2dd\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.span,{className:"katex-display",children:(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"F"}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsxs)(e.munderover,{children:[(0,i.jsx)(e.mo,{children:"\u2211"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.mi,{children:"K"})]}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"w"}),(0,i.jsx)(e.mi,{children:"k"})]}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"f"}),(0,i.jsx)(e.mi,{children:"k"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:"("}),(0,i.jsxs)(e.mover,{accent:"true",children:[(0,i.jsx)(e.mi,{children:"x"}),(0,i.jsx)(e.mo,{children:"^"})]}),(0,i.jsx)(e.mo,{stretchy:"false",children:")"}),(0,i.jsx)(e.mspace,{width:"1em"}),(0,i.jsx)(e.mtext,{children:"where"}),(0,i.jsx)(e.mspace,{width:"1em"}),(0,i.jsxs)(e.munderover,{children:[(0,i.jsx)(e.mo,{children:"\u2211"}),(0,i.jsxs)(e.mrow,{children:[(0,i.jsx)(e.mi,{children:"k"}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.mi,{children:"K"})]}),(0,i.jsxs)(e.msub,{children:[(0,i.jsx)(e.mi,{children:"w"}),(0,i.jsx)(e.mi,{children:"k"})]}),(0,i.jsx)(e.mo,{children:"="}),(0,i.jsx)(e.mn,{children:"1"})]}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"F(x) = \\sum_{k=1}^{K} w_k f_k(\\hat{x}) \\quad \\text{where} \\quad \\sum_{k=1}^{K} w_k = 1"})]})})}),(0,i.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"3.1304em",verticalAlign:"-1.3021em"}}),(0,i.jsx)(e.span,{className:"mop op-limits",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.8283em"},children:[(0,i.jsxs)(e.span,{style:{top:"-1.8479em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{children:(0,i.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,i.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"})})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.3021em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1076em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mopen",children:"("}),(0,i.jsx)(e.span,{className:"mord accent",children:(0,i.jsx)(e.span,{className:"vlist-t",children:(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsxs)(e.span,{className:"vlist",style:{height:"0.6944em"},children:[(0,i.jsxs)(e.span,{style:{top:"-3em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"})]}),(0,i.jsxs)(e.span,{style:{top:"-3em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(e.span,{className:"accent-body",style:{left:"-0.2222em"},children:(0,i.jsx)(e.span,{className:"mord",children:"^"})})]})]})})})}),(0,i.jsx)(e.span,{className:"mclose",children:")"}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"1em"}}),(0,i.jsx)(e.span,{className:"mord text",children:(0,i.jsx)(e.span,{className:"mord",children:"where"})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"1em"}}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(e.span,{className:"mop op-limits",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsxs)(e.span,{className:"vlist",style:{height:"1.8283em"},children:[(0,i.jsxs)(e.span,{style:{top:"-1.8479em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsxs)(e.span,{className:"mord mtight",children:[(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"}),(0,i.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,i.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]}),(0,i.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{children:(0,i.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,i.jsxs)(e.span,{style:{top:"-4.3em",marginLeft:"0em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07153em"},children:"K"})})})]})]}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"1.3021em"},children:(0,i.jsx)(e.span,{})})})]})}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsxs)(e.span,{className:"mord",children:[(0,i.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,i.jsx)(e.span,{className:"msupsub",children:(0,i.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(e.span,{className:"vlist-r",children:[(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,i.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0269em",marginRight:"0.05em"},children:[(0,i.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,i.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})]})}),(0,i.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(e.span,{className:"vlist-r",children:(0,i.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,i.jsx)(e.span,{})})})]})})]}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(e.span,{className:"mrel",children:"="}),(0,i.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(e.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,i.jsx)(e.h2,{id:"limitation",children:"Limitation"}),"\n",(0,i.jsx)(e.p,{children:"\uadf8\ub807\ub2e4\uba74 \uc65c \uc774\ub7ec\ud55c \ud655\ub960 \uae30\ubc18\uc758 \ud45c\ud604 \ubc29\uc2dd\uc744 \ub110\ub9ac \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744\uae4c\uc694? \ub300\ud45c\uc801\uc73c\ub85c \ub450 \uac00\uc9c0 \ud070 \ubb38\uc81c\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(e.h3,{id:"computation-limitation",children:"Computation Limitation"}),"\n",(0,i.jsxs)(e.p,{children:["\ud655\ub960 \uae30\ubc18 \ud45c\ud604 \ubc29\uc2dd\uc740 \uc5ec\ub7ec \uac00\uc9c0 \ud55c\uacc4\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ub2e8 \ubb34\uc5c7\ubcf4\ub2e4 \ud655\ub960 \ubd84\ud3ec\ub97c \ub2e4\ub8e8\ub824\uba74 ",(0,i.jsx)(e.strong,{children:"\uc5c4\uccad\ub09c \uacc4\uc0b0\ub7c9"}),"\uc774 \uc694\uad6c\ub429\ub2c8\ub2e4. \ud655\ub960 \ubd84\ud3ec\uc5d0\uc11c \ud558\ub098\uc758 \uc0d8\ud50c\uc744 \uc0d8\ud50c\ub9c1\ud558\ub294 \uac83\ub9cc\ud574\ub3c4 \uacc4\uc0b0\ub7c9\uc774 \uaf64 \ub192\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\ub450 \uac1c\uc758 \ub2e8\uc5b4 \uc720\uc0ac\ub3c4\ub97c \ube44\uad50"}),"\ud558\ub824\uba74 \uc5b4\ub5a8\uae4c\uc694? \uac00\uc7a5 \uc720\uba85\ud55c \ubc29\ubc95 \uc911 \ud558\ub098\uc778 ",(0,i.jsx)(e.strong,{children:"monte-carlo method"}),"\ub294 \uc548 \uadf8\ub798\ub3c4 \ubb34\uac70\uc6b4 \uc5f0\uc0b0\uc778 \uc0d8\ud50c\ub9c1\uc744 \uc5ec\ub7ec \ubc88 \uc218\ud589\ud574, \ud655\ub960 \ubd84\ud3ec\uc758 \uc720\uc0ac\ub3c4\ub97c \uc0d8\ud50c\ub4e4\uc758 \uc720\uc0ac\ub3c4\ub97c \ud1b5\ud574 \ube44\uad50\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4. \ud559\uc2b5 \uacfc\uc815\uc5d0\uc11c \ubaa8\ub4e0 \ub370\uc774\ud130\uc758 \ud655\ub960 \ud45c\ud604\uc744 \ube44\uad50\ud558\uae30 \uc704\ud55c \uc5f0\uc0b0\ub4e4\uc740 \ub2f9\uc5f0\ud788 bottle neck\uc73c\ub85c \uc791\uc6a9\ud574 \ud559\uc2b5 \uc18d\ub3c4\ub97c \uc2ec\uac01\ud558\uac8c \uc800\ud574\uc2dc\ud0b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.h3,{id:"inductive-uncertainty",children:"Inductive Uncertainty"}),"\n",(0,i.jsx)(e.p,{children:"\ub450 \ubc88\uc9f8 \ubb38\uc81c\uc810\uc740 \ub0b4\uc7ac\ub41c \ubd88\ud655\uc2e4\uc131\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.p,{children:['\ud655\ub960 \ubd84\ud3ec \ud45c\ud604\ud615\uc73c\ub85c\ubd80\ud130 \ud558\ub098\uc758 \ub370\uc774\ud130\ub97c \uc0d8\ud50c\ub9c1\ud574\uc11c \uc0ac\uc6a9\ud55c\ub2e4\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. "\uac1c"\uc758 \uc784\ubca0\ub529\uc774 \uc798 \ud559\uc2b5\ub418\uc5c8\uc9c0\ub9cc \uc5b4\ub514\uae4c\uc9c0\ub098 \ud655\ub960 \ubd84\ud3ec\uc778 \ub9cc\ud07c \uc815\ub9d0 \ub0ae\uc740 \ud655\ub960\ub85c "\uace0\uc591\uc774"\uc758 \ud45c\ud604\uc5d0 \uac00\uae4c\uc6b4 \uc784\ubca0\ub529\uc774 \uc0d8\ud50c\ub9c1 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubb3c\ub860 \uc815\ub9d0 \ub0ae\uc740 \ud655\ub960\uc774\uc9c0\ub9cc, ',(0,i.jsx)(e.strong,{children:"\ud655\ub960 \uae30\ubc18\uc758 \ubc29\ubc95\uc740 \uc5b4\uca54 \uc218 \uc5c6\uc774 \uc5c9\ub6b1\ud55c \uacb0\uacfc\ub97c \ubcf4\uc5ec\uc904 \uac00\ub2a5\uc131"}),"\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ubc29\ubc95\ub860\uc5d0 \ub0b4\uc7ac\ub41c \ud55c\uacc4\uc774\uae30\uc5d0 \uc5b4\ucc0c\ud558\uae30 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.h2,{id:"however",children:"However..."}),"\n",(0,i.jsxs)(e.p,{children:["\uadf8\ub7ec\ub098 \ud655\ub960 \uae30\ubc18\uc758 \ud45c\ud604\ud615\uc740 \uadf8 \ud559\uc2b5 \ubc29\ubc95\uc5d0 \ub179\uc544\uc838 \uc788\ub294 ",(0,i.jsx)(e.strong,{children:"\uc778\uc0ac\uc774\ud2b8\uac00 \uc77c\ubc18\uc801\uc778 \uc784\ubca0\ub529 \uae30\ubc18\uc758 \ubc29\ubc95\ubcf4\ub2e4 \ud6e8\uc52c \ud604\uc2e4\uc5d0 \uc798 \ubc18\uc601\ud569\ub2c8\ub2e4."})," \uc2e4\uc81c\ub85c \ub525 \ub7ec\ub2dd \ubaa8\ub378\ub4e4\uc774 \ubc1c\uc804\ud558\uba74\uc11c \uc810\uc810 \ubaa8\ud638\ud558\uace0 \uc911\uc758\uc801\uc778 \ub2e8\uc5b4\ub4e4\uc744 \ub2e4\ub8e8\ub824\ub294 \uc2dc\ub3c4\ub4e4\uc5d0\uc11c \uc784\ubca0\ub529 \uae30\ubc18 \ubc29\ubc95\uc758 \ud55c\uacc4\uac00 \ub4dc\ub7ec\ub098\uba70 \ud655\ub960 \uae30\ubc18 \ubc29\ubc95\ub860\uc774 \ub354\uc6b1 \ud65c\ubc1c\ud788 \uc5f0\uad6c\ub418\uc5b4\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(e.p,{children:"\uc774 \uae00\uc5d0\uc11c\ub294 \ub300\ud45c\uc801\uc778 \uba87 \uac00\uc9c0 Probabilistic Embedding Model\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"VAE"}),"\n",(0,i.jsx)(e.li,{children:"Probabilistic Embeddings for Cross-Modal Retrieval"}),"\n",(0,i.jsx)(e.li,{children:"Probabilistic Compositional Embeddings for MultiModal Image Retrieval"}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,i.jsx)(e,{...s,children:(0,i.jsx)(h,{...s})}):h(s)}},6352:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/image-1-f04e4d77503e62cedb7abbfc82849a8a.png"},3362:(s,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/image-6200e7e2db432b9572f711c5bc9466fc.png"},8453:(s,e,n)=>{n.d(e,{R:()=>t,x:()=>r});var a=n(6540);const i={},l=a.createContext(i);function t(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);