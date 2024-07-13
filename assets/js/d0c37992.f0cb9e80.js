"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[100],{4272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(4848),l=t(8453);const r={},a="\uc6f9\ub370\uc774\ud130 \ubdf0\uc5b4 \ub9cc\ub4e4\uae30 (feat. postgres)",i={permalink:"/blog/2023/11/07/",editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/blog/2023-11-07.md",source:"@site/blog/2023-11-07.md",title:"\uc6f9\ub370\uc774\ud130 \ubdf0\uc5b4 \ub9cc\ub4e4\uae30 (feat. postgres)",description:"\uc11c\ubc84\uc5d0\uc11c postgres DB \ub97c \ub744\uc6b0\uace0, streamlit \uc5d0\uc11c table \uc744 \uc77d\uc5b4\uc11c \uc774\ubbf8\uc9c0\ub97c \ub744\uc6b8 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud588\uc74c.",date:"2023-11-07T00:00:00.000Z",formattedDate:"November 7, 2023",tags:[],readingTime:2.455,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"tmux \uc218\ub3d9 \uc124\uce58",permalink:"/blog/2023/11/09/"}},d={authorsImageUrls:[]},c=[{value:"postgres \uc11c\ubc84 \ub744\uc6b0\uae30",id:"postgres-\uc11c\ubc84-\ub744\uc6b0\uae30",level:2},{value:"postgres \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uc815",id:"postgres-\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc124\uc815",level:2},{value:"python pandas \ub97c \uc774\uc6a9\ud55c table \uc0dd\uc131",id:"python-pandas-\ub97c-\uc774\uc6a9\ud55c-table-\uc0dd\uc131",level:2},{value:"\uc5c5\ub85c\ub4dc \ub41c \ud14c\uc774\ube14 \ud655\uc778\ud558\uae30",id:"\uc5c5\ub85c\ub4dc-\ub41c-\ud14c\uc774\ube14-\ud655\uc778\ud558\uae30",level:2},{value:"streamlit \uc774\uc6a9\ud55c \uc6f9\ub370\uc774\ud130 \ubdf0\uc5b4 \ub9cc\ub4e4\uae30",id:"streamlit-\uc774\uc6a9\ud55c-\uc6f9\ub370\uc774\ud130-\ubdf0\uc5b4-\ub9cc\ub4e4\uae30",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\uc11c\ubc84\uc5d0\uc11c postgres DB \ub97c \ub744\uc6b0\uace0, streamlit \uc5d0\uc11c table \uc744 \uc77d\uc5b4\uc11c \uc774\ubbf8\uc9c0\ub97c \ub744\uc6b8 \uc218 \uc788\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud588\uc74c."}),"\n",(0,s.jsx)(n.h2,{id:"postgres-\uc11c\ubc84-\ub744\uc6b0\uae30",children:"postgres \uc11c\ubc84 \ub744\uc6b0\uae30"}),"\n",(0,s.jsx)(n.p,{children:"postgres docker \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9\ud588\ub2e4. \uc778\uc99d \uad00\ub828\ud574\uc11c \ubb38\uc81c\uac00 \uc788\uc5b4\uc11c \uaf64 \uad6c\ubc84\uc804\uc744 \uc0ac\uc6a9\ud588\uc74c."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://hub.docker.com/_/postgres",children:"https://hub.docker.com/_/postgres"})," \uc5d0\uc11c postgres docker image \ub97c \ub2e4\uc6b4\ub85c\ub4dc \ud55c\ub2e4."]}),"\n",(0,s.jsx)(n.p,{children:"\ucd5c\uc2e0\ubc84\uc804 \uc0ac\uc6a9\ud558\uba74 client server \uc640 \uc778\uc99d \uc624\ub958\uac00 \uc788\uc5b4\uc11c 12-alphine tag \uc0ac\uc6a9\ud588\ub2e4. postgres db \uc758 \uae30\ubcf8 \ud3ec\ud2b8\uc778 5432\ubc88 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ docker pull postgres:12-alphine\n$ docker run -d -p 5432:5432 --name postgres -e POSTGRES_USER=${USER_NAME} -e POSTGRES_PASSWORD=${PASSWROD} -i postgres:12-alphine\n"})}),"\n",(0,s.jsx)(n.h2,{id:"postgres-\ub370\uc774\ud130\ubca0\uc774\uc2a4-\uc124\uc815",children:"postgres \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc124\uc815"}),"\n",(0,s.jsx)(n.p,{children:"\ucee8\ud14c\uc774\ub108 \uc9c4\uc785\ud574\uc11c pg \ub0b4\ubd80\uc5d0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud574\uc57c \ud55c\ub2e4.\n\uba3c\uc800 postgres docker \uc5d0 bash \uc258\ub85c \uc9c4\uc785\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ docker exec -it postgres /bin/bash\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ psql -U ${USER_NAME}\n$ (psql) create database mydb;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"python-pandas-\ub97c-\uc774\uc6a9\ud55c-table-\uc0dd\uc131",children:"python pandas \ub97c \uc774\uc6a9\ud55c table \uc0dd\uc131"}),"\n",(0,s.jsx)(n.p,{children:"sqlalchemy \uc640 pandas \ub97c \uc774\uc6a9\ud574\uc11c dataframe \uc744 pg db \uc5d0 \uc5c5\ub85c\ub4dc \ud558\uae30."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="upload_df_to_pg.py"',children:'import sqlalchemy\nimport pandas as pd\n\nMY_DB = "postgresql://{USER_NAME}:{PASSWORD}@127.0.0.1:5432/mydb"\nengine = sqlalchemy.create_engine(MY_DB)\nconn = engine.connect()\n\ndf = pd.read_parquet("./path/to/parquet.parquet")\ndf.to_sql("mytable", engine, if_exists=\'replace\', index=False)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\uc5c5\ub85c\ub4dc-\ub41c-\ud14c\uc774\ube14-\ud655\uc778\ud558\uae30",children:"\uc5c5\ub85c\ub4dc \ub41c \ud14c\uc774\ube14 \ud655\uc778\ud558\uae30"}),"\n",(0,s.jsx)(n.p,{children:"\ub2e4\uc2dc \ub3c4\ucee4\uc5d0 \uc9c4\uc785\ud574\uc11c \uc9c4\ud589\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ docker exec -it postgres /bin/bash\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc811\uc18d : ",(0,s.jsx)(n.code,{children:"\\c"})]}),"\n",(0,s.jsxs)(n.li,{children:["\ud14c\uc774\ube14 \uc870\ud68c \uba85\ub839 : ",(0,s.jsx)(n.code,{children:"\\dt"})]}),"\n",(0,s.jsxs)(n.li,{children:["\uc0ac\uc6a9\uc790 \uc870\ud68c : ",(0,s.jsx)(n.code,{children:"\\du"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"$ psql -U ${USER_NAME}\n$ (psql) \\c mydb;\n$ (psql) \\dt;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"streamlit-\uc774\uc6a9\ud55c-\uc6f9\ub370\uc774\ud130-\ubdf0\uc5b4-\ub9cc\ub4e4\uae30",children:"streamlit \uc774\uc6a9\ud55c \uc6f9\ub370\uc774\ud130 \ubdf0\uc5b4 \ub9cc\ub4e4\uae30"}),"\n",(0,s.jsx)(n.p,{children:"large dataframe \uc758 \uacbd\uc6b0 streamlit \uc5d0 \uc9c1\uc811 \uc62c\ub824\uc11c \uc0ac\uc6a9\ud558\uba74 \uc18d\ub3c4\uac00 \ub108\ubb34 \ub290\ub824\uc9c4\ub2e4. \uadf8\ub798\uc11c \ub370\uc774\ud130\ud504\ub808\uc784\uc744 postgres \uc5d0 \uc62c\ub824\ub450\uace0 sql \uc744 \uc774\uc6a9\ud574\uc11c \ub370\uc774\ud130\ub97c \uc77d\uc5b4\uc635\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="my_viewer.py"',children:'import streamlit as st\nimport sqlalchemy\nfrom PIL import Image\nimport numpy as np\n\n@st.cache_data\ndef get_all_id(db, table):\n    engine = sqlalchemy.create_engine(db)\n    sql_select = f"select id from {table}"\n    all_id = pd.read_sql(sql_select, engine)\n    return all_id.tolist()\n\ndef get_random_id(db, table):\n    list_all_id = get_all_id(db, table)\n    return np.random.choice(list_all_id)\n\ndef get_image(db, table, id):\n    engine = sqlalchemy.create_engine(db)\n    sql_select = f"select img_path from {table} where id={id}"\n    img_path = pd.read_sql(sql_select, engine).at[0, \'img_path\']\n    return Image.open(img_path)\n\nst.title("\uc774\ubbf8\uc9c0 \uc6f9\ubdf0\uc5b4 \ub370\ubaa8")\nrandom_id = get_random_id(db, table)\nst.image(get_image(db, table, random_id))\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(6540);const l={},r=s.createContext(l);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);