"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3763],{5745:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});var s=r(4848),l=r(8453);const i=r.p+"assets/images/torchserve_torchserve-79caa02f4d205df76c3167ba2be5223e.png",c={title:"Torchserve",sidebar_position:1,tags:["mlops","torchserve"]},o="Torchserve",t={id:"practice/mlops/torchserve",title:"Torchserve",description:"torch serve \uc0ac\uc6a9\uc5d0 \ub300\ud55c \uac04\ub7b5\ud55c \uc815\ub9ac\uc785\ub2c8\ub2e4.",source:"@site/docs/practice/mlops/torchserve.md",sourceDirName:"practice/mlops",slug:"/practice/mlops/torchserve",permalink:"/docs/practice/mlops/torchserve",draft:!1,unlisted:!1,editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/docs/practice/mlops/torchserve.md",tags:[{inline:!0,label:"mlops",permalink:"/docs/tags/mlops"},{inline:!0,label:"torchserve",permalink:"/docs/tags/torchserve"}],version:"current",sidebarPosition:1,frontMatter:{title:"Torchserve",sidebar_position:1,tags:["mlops","torchserve"]},sidebar:"MLOPsSidebar",previous:{title:"Introduction",permalink:"/docs/practice/mlops/intorduction"}},d={},h=[{value:"Torchserve Framework",id:"torchserve-framework",level:2},{value:"model archive",id:"model-archive",level:2},{value:"handler",id:"handler",level:2},{value:"torchserve and configuration.",id:"torchserve-and-configuration",level:2},{value:"Optional ) GPU \uc124\uc815",id:"optional--gpu-\uc124\uc815",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"torchserve",children:(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve",children:"Torchserve"})}),"\n",(0,s.jsx)(n.p,{children:"torch serve \uc0ac\uc6a9\uc5d0 \ub300\ud55c \uac04\ub7b5\ud55c \uc815\ub9ac\uc785\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"torchserve-framework",children:"Torchserve Framework"}),"\n",(0,s.jsx)("div",{style:{textAlign:"center"},children:(0,s.jsx)("img",{src:i,style:{width:800}})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"server"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ubaa8\ub378 inference \uc640 \uad00\ub828\ub41c \ubaa8\ub4e0 \uac78 \ubaa8\uc544\uc11c model archive \ub97c \uc0dd\uc131\ud558\uace0 model_store\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.li,{children:["torchserve \ub97c \uc774\uc6a9\ud574 model-server \ub97c \ub744\uc6c1\ub2c8\ub2e4.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"model-server \ub294 multi-thread \uae30\ubc18 worker \ub97c \ub3cc\ub9ac\uba74\uc11c Request \ub300\uae30."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"client"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"inference api \ub97c \ud1b5\ud574 model-server \uc5d0 request."}),"\n",(0,s.jsx)(n.li,{children:"handler\uc758 data entry point method \ub97c \ud1b5\ud574 \ub370\uc774\ud130 \uc778\uc785."}),"\n",(0,s.jsx)(n.li,{children:"handler process, inference \ud568\uc218 \uc2e4\ud589 \ud6c4 inference Result\ub97c send."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"model-archive",children:(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve/blob/master/model-archiver/README.md",children:"model archive"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"seperate CLI \ub85c inference model \uad00\ub828\ub41c artifacts \ub97c \ud328\ud0a4\uc9d5\ud654\ud574\uc11c \uad00\ub9ac."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"# model archive \uc0dd\uc131\ntorch-model-archive --model-name <model_name> --version 1.0 --model-file <./my_model.py> \\\n    --serialized-file <./my_model_state_dict.pth> --extra-files <./extra files...> --handler <./my_handler.py>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"serving \uc2dc, torchserve command \ub97c \uc8fc\ub85c \ud1b5\ud574 model archive \ud30c\uc77c\uc744 \ubd88\ub7ec\uc640\uc11c \uc0ac\uc6a9."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\ubaa8\ub4e0 Dependencies \ub97c \ud328\ud0a4\uc9d5\ud654 \ud558\uae30\uc5d0, \ud3b8\ud55c \uc810\ub3c4 \uc788\uc9c0\ub9cc dependency \ud328\ud0a4\uc9d5\ud654 \uacfc\uc815\uc5d0\uc11c \ubd88\ud3b8\ud568\uc774 \ub530\ub984."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["packaging method","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--extra-files"})," \uc758 arugument \ub85c file \uc804\ub2ec.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["import \uacbd\ub85c\ub294 ",(0,s.jsx)(n.code,{children:"--extra-files"})," \ub4f1\uc73c\ub85c \uc804\ub2ec\ub41c \ubaa8\ub4e0 \ud30c\uc77c\uc774 \uac19\uc740 \uc704\uce58"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["requirements.txt \uc0ac\uc6a9","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pytorch.org/serve/configuration.html",children:"configuration"})," \uc124\uc815 \ud544\uc694 : ",(0,s.jsx)(n.code,{children:"install_py_dep_per_model=-true"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.a,{href:"https://github.com/pytorch/serve/blob/master/docs/configuration.md#allow-model-specific-custom-python-packages",children:["step1",":configuration"," \uc124\uc815"]})," -> ",(0,s.jsxs)(n.a,{href:"https://github.com/pytorch/serve/blob/master/model-archiver/README.md#torch-model-archiver-command-line-interface",children:["step2",":requirements"," \uc804\ub2ec"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve/blob/master/docker/README.md",children:"dockerization"})," (\uad6c\ub9e4\uc635\uc158 api\uc5d0\uc11c \uc0ac\uc6a9)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ub3c4\ucee4\ud654 \uc2dc\ucf1c\uc11c \ud544\uc694\ud55c dependency \uc124\uce58 \ud6c4 \uc791\uc5c5."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--model_name"})," \uac12\uc744 \ud1b5\ud574 \uad00\ub9ac. ",(0,s.jsx)(n.code,{children:"--serialized file"})," : state_dict"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"entry point"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["inference api \uc694\uccad\uc774 \ub4e4\uc5b4\uc624\uba74, ",(0,s.jsx)(n.code,{children:"data"}),", ",(0,s.jsx)(n.code,{children:"context"})," \uac12\uc774 \uc804\ub2ec\ub428.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"data : input data from the incoming request"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve/blob/master/ts/context.py",children:"context"})," : contains worker information"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python3",children:"# module level handler example\nmodel = model(args)\ndef entry_point_function(data, context):\n    global model\n\n    if data:\n        return model(data)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--handler model_handler[:<entry_point_function_name>]"})," \uc744 \ud1b5\ud574 \uc124\uc815."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"module level"})," entry point","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--handler module_name:method_name"})," \ud615\ud0dc\ub85c \uc0ac\uc6a9."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"class level"})," entry point","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["handler class \uc758 ",(0,s.jsx)(n.code,{children:"handle(data, context)"})," \uba54\uc11c\ub4dc."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"handler",children:(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve/blob/master/docs/custom_service.md",children:"handler"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"curl --request POST --data <data> http://127.0.0.1:8080/predictions/{model_name} "})," \ub85c request \uac00 \ub4e4\uc5b4\uc624\uba74 model_name\uc5d0 \ub9de\ub294 entry point\uac00 engage \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve/blob/01f8c5cfa9f8c06d0d224a7d2b3a272521e0409c/ts/torch_handler/base_handler.py#L17",children:"BaseHandler"})," \ub97c \uc0c1\uc18d\ubc1b\uc544 \uc791\uc131 -> initialize, preprocess, inference, postprocess method \ub97c override \ud558\ub294 \uac8c \ud070 \ud2c0\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"initialize : \ucd08\uae30 torchserve \ub97c \ud1b5\ud574 \uc11c\ubc84 \uc62c\ub9b4 \ub54c \uc2e4\ud589. \ubaa8\ub378 \uc0dd\uc131 \ubc0f state_dict load \ub4f1 \ucd08\uae30 \uc124\uc815."}),"\n",(0,s.jsx)(n.li,{children:"preprocess, inference, postprocess : \uc774\ub984 \uadf8\ub300\ub85c."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"handle"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Entry point for handler. (inference \uc694\uccad \ub4e4\uc5b4\uc624\uba74 request data, context \uac00 \ud0c0\uac8c \ub418\ub294 \uba54\uc778 inference \uba54\uc11c\ub4dc \ub290\ub08c)"}),"\n",(0,s.jsx)(n.li,{children:"handle \ub3c4 override \ud574\uc11c \uc790\uc720\ub86d\uac8c \uc791\uc131\uac00\ub2a5\ud55c\ub370, \uae30\ubcf8\uc801\uc73c\ub85c \uac01 method \ub97c \ub2e4\uc74c\uacfc \uac19\uc774 handle \uc744 \ud1b5\ud574 \ucc98\ub9ac\ub41c\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python3",children:"# handle \ud568\uc218\uc5d0\uc11c \ub370\uc774\ud130 \ud750\ub984 \uc694\uc57d\nclass BaseHandler(abc.ABC):\n    ...\n    def handle(self, data, context):\n        data_preprocess = self.preprocess(data)\n        output = self.inference(data_preprocess)\n        output = self.postprocess(output)\n        return output\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ucd94\uac00 ref: ",(0,s.jsx)(n.a,{href:"https://pytorch.org/serve/custom_service.html",children:"doc"})]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"torchserve-and-configuration",children:[(0,s.jsx)(n.a,{href:"https://pytorch.org/serve/server.html",children:"torchserve"})," and configuration."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"torchserve command \ub97c \uc774\uc6a9\ud574 model-server \uc0dd\uc131"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"torchserve --start --foreground \\\n    --model-store <where model(model archive \ud30c\uc77c \ub4f1) files are located>\n    --models [model1=]model1.mar [model2=]model2.mar\n    --ts-config <config.properties path>\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--foreground"})," \uac00 \uc5c6\uc73c\uba74 \uae30\ubcf8\uc801\uc73c\ub85c daemon \uc73c\ub85c \uc2e4\ud589\ub428."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--models [model1=]model1.mar"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["request \ub0a0\ub9b4 \ub54c, ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:8080/predictions/<model1>"}),"\ub85c request \ub97c \ub0a0\ub9ac\uba74 model1.mar \uc744 \ud0c0\uac8c \ub428."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--models find_human=imgenet.mar"})," \ucc98\ub7fc, Model name \uacfc \uc2e4\uc81c Model file \uac19\uc744 \ud544\uc694 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--ts_config"})," : configuration \ud30c\uc77c \uc704\uce58.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pytorch.org/serve/configuration.html",children:"\uacf5\uc2dd doc."})," \uc5d0\uc11c \uc9c0\uc6d0\ud558\ub294 configuation \uc635\uc158 \uc124\uba85 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"optional--gpu-\uc124\uc815",children:["Optional ) ",(0,s.jsx)(n.a,{href:"https://github.com/pytorch/serve/blob/master/model-archiver/README.md#torch-model-archiver-command-line-interface",children:"GPU \uc124\uc815"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"torch-serve \ub294 GPU\uac00 \uac00\uc6a9\uc774\uba74, worker \ub4e4\uc5d0\uac8c \uc801\uc808\ud788 \uc790\uc6d0\uc744 \ubd84\ubc30(round-robin)\ud569\ub2c8\ub2e4. entry point \uc124\uacc4 \uc2dc, worker \uc758 GPU id \ub294 context \uc5d0 \ub4e4\uc5b4\uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python3",children:'class MyHandler(BaseHandler):\n    ...\n    def initialize(self, context):\n        properties = context.system_properties\n        self.device = torch.device("cuda:" + str(properties.get("gpu_id"))\n                                    if torch.cuda.is_available() else "cpu")\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"configuration \uc744 \ud1b5\ud574 GPU \uad00\ub828 \uc124\uc815 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.li,{children:["\ub300\ud45c\uc801\uc73c\ub85c, ",(0,s.jsx)(n.code,{children:"number_of_gpus"})," \ub97c \ud1b5\ud574 model \ub2f9 GPU \uc758 \uc218\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. torch-server \ub294 GPU \ub2f9 worker \ub97c \ud558\ub098\uc529 \uc0dd\uc131\ud569\ub2c8\ub2e4. \ucc38\uace0\ub85c, \uacf5\uc2dd \ubb38\uc11c\ub294 \uc801\uc808\ud55c ",(0,s.jsx)(n.code,{children:"number_of_gpus = (number_of_gpus)/(number_of_unique_models_in_model_store)"})," \ub85c \uc81c\uc548\ud569\ub2c8\ub2e4."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(6540);const l={},i=s.createContext(l);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);