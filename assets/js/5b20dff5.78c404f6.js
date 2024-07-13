"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8529],{7862:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var r=n(4848),t=n(8453);const o=n.p+"assets/images/zero-56f2f2553f3946614e53cc129843a5d2.png",l=n.p+"assets/images/zero_result-2277fec3e719026ab196cc2061639645.png",a=n.p+"assets/images/zero_result2-fd5df151380c9fff189e94f97333b7a0.png",s=n.p+"assets/images/zero_result3-f971e046a13c3329278413c99003a495.png",c={id:1,sidebar_position:1},d="ZERO",h={id:"practice/efficienttrain/1",title:"ZERO",description:"Deepspeed \uc5d0\uc11c \ubc1c\ud45c\ud55c \ube45\ubaa8\ub378\uc744 \uc704\ud55c \uba54\ubaa8\ub9ac \ucd5c\uc801\ud654 \ubc29\uc548\uc778 ZERO \uc5d0 \ub300\ud55c \ub9ac\ubdf0.",source:"@site/docs/practice/efficienttrain/zero.md",sourceDirName:"practice/efficienttrain",slug:"/practice/efficienttrain/1",permalink:"/docs/practice/efficienttrain/1",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/practice/efficienttrain/zero.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"1",sidebar_position:1},sidebar:"EfficienttrainSidebar",previous:{title:"Efficient Training",permalink:"/docs/practice/efficienttrain/Efficient Train"},next:{title:"ZERO INFINITY",permalink:"/docs/practice/efficienttrain/zero_infinity"}},m={},p=[{value:"Background",id:"background",level:2},{value:"Zero-DP",id:"zero-dp",level:2},{value:"Zero-1 : Optimizer state Partitioning (32-bit)",id:"zero-1--optimizer-state-partitioning-32-bit",level:3},{value:"Zero-2 : Gradient Partitioning (32-bit)",id:"zero-2--gradient-partitioning-32-bit",level:3},{value:"Zero-3 : Parameter Partitioning (16-bit)",id:"zero-3--parameter-partitioning-16-bit",level:3},{value:"Zero-R",id:"zero-r",level:2},{value:"ZeRO-R-P_a: partitioned Activation Checkpointing",id:"zero-r-p_a-partitioned-activation-checkpointing",level:3},{value:"ZeRO-R_C_B : Constant Size Buffers",id:"zero-r_c_b--constant-size-buffers",level:3},{value:"ZeRO-R_M_D : Memory Defragmentation",id:"zero-r_m_d--memory-defragmentation",level:3}];function u(i){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...i.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"zero",children:"ZERO"}),"\n",(0,r.jsx)(e.h1,{id:"zero-memory-optimization-toward-training-trillion-parameter-models",children:"ZERO: Memory Optimization Toward Training Trillion Parameter Models"}),"\n",(0,r.jsx)(e.p,{children:"Deepspeed \uc5d0\uc11c \ubc1c\ud45c\ud55c \ube45\ubaa8\ub378\uc744 \uc704\ud55c \uba54\ubaa8\ub9ac \ucd5c\uc801\ud654 \ubc29\uc548\uc778 ZERO \uc5d0 \ub300\ud55c \ub9ac\ubdf0."}),"\n",(0,r.jsx)(e.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(e.p,{children:"large model training strategy \ub85c \ud06c\uac8c MP, \uadf8\ub9ac\uace0 DP \uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"MP \uc758 \uacbd\uc6b0 \uba54\ubaa8\ub9ac \ud6a8\uc6a9\uc131\uc740 \uc88b\uc73c\ub098 communication cost \uac00 \ucee4\uc11c, multi-GPU \ud658\uacbd\uc5d0\uc11c\ub294 \uc131\ub2a5\uc774 \uc88b\uc9c0\ub9cc multi-machine \uc5d0\uc11c \uc131\ub2a5\uc774 \uae09\uaca9\ud558\uac8c \uc548 \uc88b\uc544\uc9c4\ub2e4\ub294 \ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"DP \ub294 \ubaa8\ub378 \uc804\uccb4\uc758 replication \uc744 \ud544\uc694\ub85c \ud574\uc11c \uba54\ubaa8\ub9ac \ud6a8\uc728\uc131\uc774 \ub9e4\uc6b0 \ub0ae\uc740 \ub300\uc2e0, communication \ud6a8\uc6a9\uc131\uc740 \ub192\uc2b5\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.p,{children:"ZERO \uc5d0\uc11c\ub294 MP \uc640 DP \uc758 \uc7a5\uc810\uc744 \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\uba74\uc11c large model \uc744 \uba54\ubaa8\ub9ac\uc5d0 \uc62c\ub9ac\uace0 \ud559\uc2b5\uc744 \uac00\ub2a5\ud558\uac8c \ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4."}),"\n",(0,r.jsx)(e.h2,{id:"zero-dp",children:"Zero-DP"}),"\n",(0,r.jsx)(e.p,{children:"\uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub418\ub294 Zero-3stage. model state memory \ud6a8\uc6a9\uc131\uc5d0 \uc9d1\uc911."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\uc8fc\uc694 \uc778\uc0ac\uc774\ud2b8","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"DP \uc758 communication efficiency \uc640 MP \uc758 memory efficiency \ub97c \ud569\uccd0\ubcf4\uc790."}),"\n",(0,r.jsx)(e.li,{children:"\ubaa8\ub378 partitioning \ud574\uc11c \ubd84\uc0b0\uc2dc\ud0a4\uc790. \uadf8 \ud6c4 dynamic communication scheduling \uc744 \uc774\uc6a9\ud574 \ud559\uc2b5 \ubc0f param update \uc9c4\ud589."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:o,style:{width:800}})}),"\n",(0,r.jsx)(e.h3,{id:"zero-1--optimizer-state-partitioning-32-bit",children:"Zero-1 : Optimizer state Partitioning (32-bit)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"4x memory reduction. same communication volume as DP"}),"\n",(0,r.jsx)(e.li,{children:"\uac01 \ud504\ub85c\uc138\uc2a4\uac00 optimizer state partition \ub9cc \uc800\uc7a5 \ubc0f \uc5c5\ub370\uc774\ud2b8."}),"\n",(0,r.jsx)(e.li,{children:"training step \uc885\ub8cc \uc2dc\uc5d0 all-gather \uc5f0\uc0b0\uc744 \uc218\ud589."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"zero-2--gradient-partitioning-32-bit",children:"Zero-2 : Gradient Partitioning (32-bit)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"memory reduction, same communication volume as Dp"}),"\n",(0,r.jsx)(e.li,{children:"partitioned optimizer state \uc5d0 \ud574\ub2f9\ud558\ub294 gradient \uc815\ubcf4\ub9cc \uc788\uc73c\uba74 \ub428."}),"\n",(0,r.jsx)(e.li,{children:"gradient \ub3c4 reduce-scatter"}),"\n",(0,r.jsxs)(e.li,{children:["bucketization strategy","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c all-gather \uadf8\ub9ac\uace0 reduce-scatter \uc5f0\uc0b0(intra-GPU \uc5f0\uc0b0) \ub4e4\uc740 \uc5f0\uc0b0 \ub300\uc0c1\uc758 \uba54\ubaa8\ub9ac\uac00 \ud074\uc218\ub85d \ud6a8\uc728\uc801\uc774\ub2e4. \uadf8\ub798\uc11c torch \ub0b4\uc758 DDP \uad6c\ud604\ub3c4 bucketization \uc744 \uc0ac\uc6a9\ud558\ub294\ub370, \uc5ec\uae30\uc11c gradient \ub3c4 bucketization \uc744 \uc0ac\uc6a9\ud568."}),"\n",(0,r.jsx)(e.li,{children:"\uc5f0\uc0b0 \ub300\uc0c1\uc758 \ud06c\uae30\uac00 \ud074\uc218\ub85d \ud6a8\uc728\uc801\uc778 \uc774\uc720\ub294 PCIE \uc640 \uac19\uc740 \uc81c\ud55c\ub41c bandwidth \ub97c \ud55c \ubc88\uc758 \ud1b5\uc2e0\uc5d0 \ucd5c\ub300\ud55c \ud6a8\uc728\uc801\uc73c\ub85c \ud65c\uc6a9\ud558\ubbc0\ub85c."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"zero-3--parameter-partitioning-16-bit",children:"Zero-3 : Parameter Partitioning (16-bit)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"memory reduction is linear with DP degree. \ucd5c\ub300 50% communication cost \uac10\uc18c."}),"\n",(0,r.jsx)(e.li,{children:"each process only stores the parameters corresponding to its partition."}),"\n",(0,r.jsx)(e.li,{children:"forward / backward propagation \uacfc\uc815\uc5d0\uc11c broad cast \uacfc\uc815\uc744 \ud1b5\ud574 \ud544\uc694\ud55c data \ub97c \ubc1b\uc544\uc634."}),"\n",(0,r.jsx)(e.li,{children:"\ub2f9\uc5f0\ud788, communication cost \uac00 \uc5c4\uccad \uc99d\uac00\ud560 \uac83\uc73c\ub85c \ubcf4\uc774\ub294\ub370 \uc2e4\uc81c\ub85c \uacc4\uc0b0\ud574\ubcf4\uba74 \uadf8\ub807\uc9c0 \uc54a\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"Baseline DP system \uc5d0 \ube44\ud574 1.5 \ubc30 \uc815\ub3c4 communication cost \uac00 \uc99d\uac00\ud558\uace0, memory \uc18c\ubaa8\ub294 \ud6e8\uc52c \uc900\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"\uacc4\uc0b0 \uacfc\uc815\uc740 \ub17c\ubb38 \ucc38\uc870."}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"zero-r",children:"Zero-R"}),"\n",(0,r.jsx)(e.p,{children:"residual memory \ud6a8\uc6a9\uc131\uc5d0 \uc9d1\uc911."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"activation memory \uac00 MP \uc5d0\uc11c\ub294 \ud2b9\ud788 \ubb38\uc81c\uac00 \ub428."}),"\n",(0,r.jsx)(e.li,{children:"\ubaa8\ub378\uc774 \ucee4\uc9c8\uc218\ub85d AIT w.r.t activation memory \uac00 \ucee4\uc9c4\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\uadf8\ub798\uc11c ZERO-R \uc740"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"activation checkpoints \uc5ed\uc2dc partitioning \ud55c\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"activation \uc744 CPU \ub85c offload \ud558\uae30\ub3c4 \ud558\uc790, \ud6a8\uc728\uc801\uc73c\ub85c!"}),"\n",(0,r.jsx)(e.li,{children:"\uadf8 \uc678\uc5d0, \uba54\ubaa8\ub9ac\uc758 \ud6a8\uc728\uc801\uc778 \uc0ac\uc6a9\uc744 \uc704\ud55c \ucf54\ub4dc\uac00 \uc0bd\uc785\ub418\uc5b4\uc787\uc74c. Temporary Buffer, fragment memory \ucc98\ub9ac."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"zero-r-p_a-partitioned-activation-checkpointing",children:"ZeRO-R-P_a: partitioned Activation Checkpointing"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"activation \uc774 \uacc4\uc0b0 \ub41c \ud6c4\uc5d0, activation checkpoint \ub97c process \ubcc4\ub85c partitioning."}),"\n",(0,r.jsx)(e.li,{children:"backpropagation \uc2dc all-gather \uc5f0\uc0b0."}),"\n",(0,r.jsx)(e.li,{children:"MP degree \uc5d0 propotional \ud55c activation memory \uac10\uc18c"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"zero-r_c_b--constant-size-buffers",children:"ZeRO-R_C_B : Constant Size Buffers"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"large all-reduce operation achieves much higher bandwith than a smaller one."}),"\n",(0,r.jsxs)(e.li,{children:["high performance libraries fuses all the parameters into a single buffer.","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"memory overhead of the fused buffers is proportional to the model size, and become inhibiting."}),"\n",(0,r.jsx)(e.li,{children:"\uc608\ub97c \ub4e4\uc5b4\uc11c, 3B size model \uc740 \uc774 fused buffer \uac00 12GB \uc784."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"\ud6a8\uc728\uc801\uc778 constant-size fused buffer \ub97c \uc0ac\uc6a9\ud574\uc11c \ud1b5\uc2e0."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"zero-r_m_d--memory-defragmentation",children:"ZeRO-R_M_D : Memory Defragmentation"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"activation checkpointing \uacfc gradient computation \uacfc\uc815\uc5d0\uc11c \ud544\uc694\ud55c \uba54\ubaa8\ub9ac\uac00 \ub610\ub2e4\ub978 \uc774\uc288\ub97c \ub9cc\ub4ec."}),"\n",(0,r.jsx)(e.li,{children:"\ub610\ud55c activation checkpointing \uacfc gradient computation \uc744 \uc9c4\ud589\ud558\uace0 \ub098\uba74 memory \uac00 free \ub41c\ub2e4.(long live)"}),"\n",(0,r.jsx)(e.li,{children:"\uc784\uc2dc\ub85c backpropagation \uacfc\uc815\uc5d0\uc11c recomputing \uc774 \ub418\ub294 activation \uc740 \uacc4\uc0b0 \uc9c1\ud6c4 memory free. (short live)"}),"\n",(0,r.jsxs)(e.li,{children:["long live memory \uc640 short live memory \uc5d0 \ub300\ud55c \ud6a8\uc728\uc801 \uc811\uadfc\uc744 \uc704\ud574 torch \ub294 memory interleaving \uc744 \uc0ac\uc6a9.","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uadfc\ub370 \ubaa8\ub378 \uc0ac\uc774\uc988\uac00 \ucee4\uc9c0\uba74, interleaving \uc744 \uc704\ud55c memory fragmentation \uc774 \ub9e4\uc6b0 \ud070 \uc774\uc288\uac00 \ub41c\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"contiguous memory \uac00 \ucda9\ubd84\ud558\uc9c0 \uc54a\uac70\ub098, \ucda9\ubd84\ud55c \uc0ac\uc774\uc988\uc758 \uba54\ubaa8\ub9ac \uccad\ud06c\ub97c \ucc3e\ub294\ub370\ub3c4 \uc2dc\uac04\uc774 \ub9ce\uc774 \uac78\ub9b4 \uc218 \uc788\uc74c."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"ZERO \ub294 \ubbf8\ub9ac \uba54\ubaa8\ub9ac \uccad\ud06c\ub4e4\uc744 \ud560\ub2f9\ud574\ub193\uace0 \uc0ac\uc6a9\ud568\uc73c\ub85c\uc368 \uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud568."}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"evaluation",children:"Evaluation"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:l,style:{width:500}})}),"\n",(0,r.jsx)(e.p,{children:"Zero-2 \ub97c \uc0ac\uc6a9\ud588\uc744 \ub54c speed up. \ud070 \ubaa8\ub378\uc77c\uc218\ub85d \uc131\ub2a5 \ud5a5\uc0c1\uc774 \ub208\uc5d0 \ub754."}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:a,style:{width:500}})}),"\n",(0,r.jsx)(e.p,{children:"GPU \uc758 \uac2f\uc218\uc5d0 \uac70\uc758 \uc774\uc0c1\uc801\uc73c\ub85c linear \ud55c \uc804\uccb4 \uc131\ub2a5\uc774 \ub098\uc634\uc744 \uc54c \uc218 \uc788\uc74c."}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("img",{src:s,style:{width:500}})}),"\n",(0,r.jsx)(e.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(e.p,{children:"ZERO \ub294 ZERO-R \uadf8\ub9ac\uace0 ZERO-DP \uc758 \uac01 \ub2e8\uacc4\ub97c \uc124\uc815\ud574\uc11c \uc0ac\uc6a9 \uac00\ub2a5.\nZERO-R \uc740 deepspeed zero library \uc0ac\uc6a9\uc2dc config \ub85c \uc904 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["ZERO-1, ZERO-2","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\uc77c\ubc18\uc801\uc778 multi-GPU, multi-machine \ud559\uc2b5 \ud658\uacbd\uc5d0\uc11c \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744 \uac83\uc73c\ub85c \ubcf4\uc778\ub2e4."}),"\n",(0,r.jsx)(e.li,{children:"batch size \uc5d0 \ud070 \uc5f0\uad00\uc774 \uc5c6\uc74c. batch size \ub294 ZERO-R configuration \uc5d0\uc11c \ub354 \ud070 \uc601\ud5a5\uc744 \ubbf8\uce60 \uac83."}),"\n",(0,r.jsx)(e.li,{children:"multi-GPU training \uc744 \ud55c\ub2e4\uba74 \uc774\ub860\uc0c1 \ubaa8\ub378 \uc0ac\uc774\uc988 \uc0c1\uad00\uc5c6\uc774 \uc88b\uc74c. \ub2e4\ub9cc model \uc758 autograd graph \uad6c\uc131\uc5d0 \ub530\ub77c communication \uc774 \ub9ce\uc774 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \ube44 \ud6a8\uc728\uc801\uc77c \uac83 \uac19\uc74c"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["ZERO-3","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\ubaa8\ub378 \uc0ac\uc774\uc988\uac00 \ub108\ubb34 \ud070 \uac8c \uc544\ub2c8\ub77c\uba74 \uadf8\ub0e5 \uc0ac\uc6a9\ud558\ub294 \uac8c \ub354 \uc88b\uc744\ub4ef."}),"\n",(0,r.jsx)(e.li,{children:"\ub9c8\ucc2c\uac00\uc9c0\ub85c \ubaa8\ub378 \uc0ac\uc774\uc988\uac00 \ub9e4\uc6b0 \ucee4\uc11c \uc0ac\uc6a9\ud574\uc57c\ud55c\ub2e4\uba74 multi-GPU, multi-machine, batchsize \uc0c1\uad00\uc5c6\uc774 \ud6a8\uc6a9\uc131\uc774 \ud074 \uac83."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h1,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.deepspeed.ai/tutorials/zero/",children:"https://www.deepspeed.ai/tutorials/zero/"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://arxiv.org/abs/1910.02054",children:"Zero"})}),"\n"]})]})}function x(i={}){const{wrapper:e}={...(0,t.R)(),...i.components};return e?(0,r.jsx)(e,{...i,children:(0,r.jsx)(u,{...i})}):u(i)}},8453:(i,e,n)=>{n.d(e,{R:()=>l,x:()=>a});var r=n(6540);const t={},o=r.createContext(t);function l(i){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:l(i.components),r.createElement(o.Provider,{value:e},i.children)}}}]);