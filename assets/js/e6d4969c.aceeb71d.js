"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[719],{4950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=t(4848),r=t(8453);const l={},i="tmux \uc218\ub3d9 \uc124\uce58",c={permalink:"/blog/2023/11/09/",editUrl:"https://github.com/logicbaron/logicbaron.github.io/tree/dev/blog/2023-11-09.md",source:"@site/blog/2023-11-09.md",title:"tmux \uc218\ub3d9 \uc124\uce58",description:"tmux \uc124\uce58\ub97c sudo \uad8c\ud55c\uc774 \ud544\uc694\ud55c \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \uac70\uce58\uc9c0 \uc54a\uace0 \ubc14\ub85c \ud558\uae30 \uc704\ud574\uc11c \uc218\ub3d9 \uc124\uce58\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubd24\ub2e4.",date:"2023-11-09T00:00:00.000Z",formattedDate:"November 9, 2023",tags:[],readingTime:1.14,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"MatPlotlib \ud55c\uae00 \uc124\uc815 \uac04\ud3b8\ud558\uac8c \ud558\uae30",permalink:"/blog/2024/02/14/"},nextItem:{title:"\uc6f9\ub370\uc774\ud130 \ubdf0\uc5b4 \ub9cc\ub4e4\uae30 (feat. postgres)",permalink:"/blog/2023/11/07/"}},a={authorsImageUrls:[]},u=[{value:"Libevent \ube4c\ub4dc",id:"libevent-\ube4c\ub4dc",level:2},{value:"ncurses \ube4c\ub4dc",id:"ncurses-\ube4c\ub4dc",level:2},{value:"tmux \ube4c\ub4dc",id:"tmux-\ube4c\ub4dc",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"tmux \uc124\uce58\ub97c sudo \uad8c\ud55c\uc774 \ud544\uc694\ud55c \ud328\ud0a4\uc9c0 \ub9e4\ub2c8\uc800\ub97c \uac70\uce58\uc9c0 \uc54a\uace0 \ubc14\ub85c \ud558\uae30 \uc704\ud574\uc11c \uc218\ub3d9 \uc124\uce58\uc5d0 \ub300\ud574\uc11c \uc54c\uc544\ubd24\ub2e4."}),"\n",(0,s.jsx)(n.h2,{id:"libevent-\ube4c\ub4dc",children:"Libevent \ube4c\ub4dc"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://libevent.org/",children:"https://libevent.org/"})," \uc0ac\uc774\ud2b8\uc5d0\uc11c libevent \uc555\ucd95 \ud30c\uc77c \ub2e4\uc6b4\ub85c\ub4dc."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ tar -xvzf libevent-2.0.17-stable.tar.gz\n$ cd libevent-2.0.17-stable\n$ ./configure --prefix=$HOME/tmux/\n$ make\n$ make install\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ncurses-\ube4c\ub4dc",children:"ncurses \ube4c\ub4dc"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://invisible-island.net/ncurses/announce.html",children:"ncurses"})," \ub2e4\uc6b4\ub85c\ub4dc \ud398\uc774\uc9c0 \uc5d0\uc11c stable \ub2e4\uc6b4\ub85c\ub4dc."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ub2e4\uc6b4\ub85c\ub4dc \ud398\uc774\uc9c0 : ",(0,s.jsx)(n.a,{href:"https://ftp.gnu.org/pub/gnu/ncurses/",children:"https://ftp.gnu.org/pub/gnu/ncurses/"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ tar -xvzf ncurses-5.9.tar.gz\n$ cd ncurses-5.9/\n$ ./configure --prefix=$HOME/tmux/\n$ make\n$ make install\n"})}),"\n",(0,s.jsx)(n.p,{children:"$HOME/tmux/include/ncurses \uc544\ub798\uc5d0 \ube4c\ub4dc\uac00 \uc774\ub8e8\uc5b4\uc9c0\ubbc0\ub85c, $HOME/tmux/include \uacbd\ub85c\ub85c \uc62e\uaca8\uc918\uc57c \ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ cp $HOME/tmux/include/ncurses/* $HOME/tmux/include/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tmux-\ube4c\ub4dc",children:"tmux \ube4c\ub4dc"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/tmux/tmux/releases",children:"https://github.com/tmux/tmux/releases"})," \uc5d0\uc11c tmux \ucd5c\uc2e0 \ubc84\uc804 \ub2e4\uc6b4\ub85c\ub4dc."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ tar -xvzf tmux-1.6.tar.gz\n$ cd tmux-1.6\n$ ./configure \\\n    CFLAGS="-I$HOME/tmux/include" \\\n    LDFLAGS="-L$HOME/tmux/lib" \\\n    --prefix=$HOME/tmux/\n$ make\n$ make install\n'})}),"\n",(0,s.jsx)(n.p,{children:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c LD_LIBRARY_PATH \ud658\uacbd \ubcc0\uc218\ub97c \uc124\uc815\ud574\uc8fc\uba74 \ub05d\ub09c\ub2e4. ~/.bashrc \uc640 \uac19\uc740 \ud30c\uc77c\uc5d0\uc11c \ub2e4\uc74c \ud589\uc744 \ucd94\uac00\ud55c\ub2e4."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title="~/.bashrc"',children:"export LD_LIBRARY_PATH=$HOME/tmux/lib\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);