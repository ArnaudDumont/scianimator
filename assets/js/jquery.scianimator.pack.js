/**
 * SciAnimator - Scientific Image Animator Plugin for jQuery
 *
 * Copyright (c) 2010 Brent Ertz
 * Released under the MIT license.
 * http://github.com/brentertz/scianimator
*/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(7($){4 j={1J:\'2S\',2T:\'1K\',13:0,1L:1,1g:\'1K\',14:\'y\',1h:\'2e\',15:0,Q:1,1M:0,2f:1};$.1N.5=7(a){6(l[a])n l[a].2g(o,2U.2V.2W.2X(2h,1));s 6(2i a===\'2Y\'||!a)n l.1O.2g(o,2h);s $.1P(\'2Z \'+a+\' 30 31 32 33 2j.5\')};$.1N.5.2k={\'1Q\':1R,\'8\':1R,\'R\':[],\'1u\':16,\'1S\':j.2f,\'w\':j.1J,\'1i\':0,\'x\':34,\'1T\':35,\'17\':25,\'1j\':36,\'2l\':2,\'1U\':2m,\'1k\':2m,\'1l\':\'37\',\'q\':2n,\'u\':j.14,\'p\':{\'z\':{\'C\':\'38\',\'D\':\'39\',\'v\':\'3a\',\'F\':\'3b\',\'E\':\'3c\',\'B\':\'3d\',\'y\':{\'1v\':\'2o 18 1V y 2p\',\'y\':\'3e\',\'2e\':\'3f\',\'1K\':\'3g\'},\'t\':{\'t\':\'3h\',\'Y\':\'-\',\'Z\':\'+\'},\'I\':{\'1v\':\'2o 18 3i 18 S; &3j;3k&3l;+1W 18 1w/19 S.\'},\'T\':{\'1x\':\'3m R...\',\'U\':\'3n R 3o 3p...\'}},\'q\':{\'C\':\'|&#2q;\',\'D\':\'&#2q;\',\'v\':\'&#3q;\',\'F\':\'&#3r;\',\'E\':\'&#2r;\',\'B\':\'&#2r;|\'}}};4 k={};4 l={1O:7(c){k=$.3s(2n,{},$.1N.5.2k,c);8(\'1O\');n o.1a(7(){4 a=$(o);4 b=a.r(\'5\');$(o).r(\'5\',{m:a[0].m,1y:a,1X:16,1m:16,2s:16,H:j.15,1b:[],A:k.1i,V:0,N:16,L:[],11:j.13,1n:0,3:k,w:{}});a.5(\'1z\',\'1x\').5(\'1o\').5(\'1A\').5(\'w\').5(\'1p\')})},2t:7(){8(\'2t\');n o.1a(7(){4 a=$(o);4 b=a.r(\'5\');$(1c).3t(\'.5\');a.3u(\'5\');1c.2u(b.1m);a.2v()})},1B:7(a){8(\'1B\');4 b=$(o);4 c=b.r(\'5\');a=1d(a,10);4 d=c.1b[a];$(\'<2w />\').1C(7(){c.1X.1B(o,0,0)}).1P(7(){8(\'2x 2y 18 1C 2z S #\'+a+\' : \'+d.1q);b.5(\'1r\',{\'S\':a,\'1Y\':\'19\'})}).1s(\'1q\',d.1q);n b},1o:7(){8(\'1o\');4 a=$(o);4 b=a.r(\'5\');a.O(\'5\').3v(\'1k\',b.3.1k);6(b.3.1l!==W)a.O(b.3.1l);n a},1A:7(){8(\'1A\');4 a=$(o);4 b=a.r(\'5\');4 c=$(\'<1A />\').1s(\'1k\',b.3.1k).1s(\'1U\',b.3.1U);a.12(c[0]);6($.2A.3w&&$.2A.3x<9)3y.3z(c[0]);6(c[0].2B){b.1X=c[0].2B(\'2d\');6(\'3A\'===2i b.3.1i)a.5(\'X\',b.3.1i);s 6(\'B\'===b.3.1i)a.5(\'B\');s a.5(\'C\')}n a},w:7(){8(\'w\');4 e=$(o);4 f=e.r(\'5\');4 g=$(\'<1D m="\'+f.m+\'-w" G="5 w"></1D>\');6(f.3.1l!==W)g.O(f.3.1l);4 h=$(\'<1Z></1Z>\');4 i={C:7(){4 a=(f.3.q)?f.3.p.q.C:f.3.p.z.C;n $(\'<a m="\'+f.m+\'-C" G="J C" P="#">\'+a+\'</a>\')},D:7(){4 a=(f.3.q)?f.3.p.q.D:f.3.p.z.D;n $(\'<a m="\'+f.m+\'-D" G="J D" P="#">\'+a+\'</a>\')},v:7(){4 a=(f.3.q)?f.3.p.q.v:f.3.p.z.v;n $(\'<a m="\'+f.m+\'-v" G="J v" P="#">\'+a+\'</a>\')},E:7(){4 a=(f.3.q)?f.3.p.q.E:f.3.p.z.E;n $(\'<a m="\'+f.m+\'-E" G="J E" P="#">\'+a+\'</a>\')},B:7(){4 a=(f.3.q)?f.3.p.q.B:f.3.p.z.B;n $(\'<a m="\'+f.m+\'-B" G="J B" P="#">\'+a+\'</a>\')},I:7(){4 c=$(\'<1E m="\'+f.m+\'-I" G="J I 2C"></1E>\');4 d=f.3.p.z.I.1v;$.1a(f.1b,7(a,b){c.12(\'<a m="\'+f.m+\'-I-\'+a+\'" 2D="\'+d+\'" P="#" G="J I">&3B;</a>\')});n c},y:7(){4 a=(f.3.q&&f.3.p.q.y!==W)?f.3.p.q.y[f.3.u]:f.3.p.z.y[f.3.u];4 b=f.3.p.z.y.1v;n $(\'<a m="\'+f.m+\'-y" G="J y \'+f.3.u+\'" 2D="\'+b+\'" P="#">\'+a+\'</a>\')},t:7(){4 a=(f.3.q&&f.3.p.q.t!==W)?f.3.p.q.t.t:f.3.p.z.t.t;4 b=(f.3.q&&f.3.p.q.t!==W)?f.3.p.q.t.Z:f.3.p.z.t.Z;4 c=(f.3.q&&f.3.p.q.t!==W)?f.3.p.q.t.Y:f.3.p.z.t.Y;n $(\'<1E m="\'+f.m+\'-t" G="J t 2C"><a m="\'+f.m+\'-t-Y" G="J t-Y 2E" P="#">\'+c+\'</a> <2F>\'+a+\'</2F> <a m="\'+f.m+\'-t-Z" G="J t-Z 2E" P="#">\'+b+\'</a></1E>\')}};g.20(\'1Z\',\'3C\',7(a){a.21()}).20(\'a\',\'1W\',7(a){a.21();2G(a.1y.m){K f.m+\'-C\':e.5(\'C\');M;K f.m+\'-D\':e.5(\'D\');M;K f.m+\'-v\':e.5(\'22\');M;K f.m+\'-E\':e.5(\'E\');M;K f.m+\'-B\':e.5(\'B\');M;K f.m+\'-y\':e.5(\'u\');M;K f.m+\'-t-Y\':e.5(\'2H\');M;K f.m+\'-t-Z\':e.5(\'2I\');M}}).20(\'a.I\',\'1W\',7(a){a.21();4 b=f.m+\'-I-\';6((a.1y.m).2J(b)!=-1){4 c=1d((a.1y.m).23(b.1e),10);6(a.3D)e.5(\'1r\',{\'S\':c});s e.5(\'X\',c)}});6($.3E(f.3.w)&&f.3.w.1e>0){$.1a(f.3.w,7(a,b){h.12(i[b]);f.w[b]=i[b]()[0].m})}s 6(j.1J===f.3.w){$.1a(i,7(a,b){h.12(b);f.w[a]=b()[0].m})}s{8(\'3F 3G w\')}6(!$(h).3H(\':3I\')){g.12(h);6(f.3.1u!==16){6(j.1M===f.3.1S)$(f.3.1u).2K(1o);s $(f.3.1u).12(1o)}s{6(j.1M===f.3.1S)e.2K(g);s e.12(g)}}e.5(\'24\');n e},24:7(){8(\'24\');4 a=$(o);4 b=a.r(\'5\');a.5(\'1F\')},22:7(){8(\'22\');4 a=$(o);4 b=a.r(\'5\');6(j.Q===b.H)a.5(\'F\');s 6(j.15===b.H)a.5(\'v\');n a},v:7(){8(\'v\');4 a=$(o);4 b=a.r(\'5\');b.H=j.Q;4 c=b.3.x;6(j.13===b.11){6(b.A===b.V||b.A===b.N)c=b.1n}8(\'x: \'+c);b.1m=26.27(7(){a.5(\'28\')},c);4 d=(b.3.q)?b.3.p.q.F:b.3.p.z.F;$(\'#\'+b.w.v).1f(\'v\').O(\'F\').29(d);n a},F:7(){8(\'F\');4 a=$(o);4 b=a.r(\'5\');b.1m=1c.2u(b.1m);b.H=j.15;4 c=(b.3.q)?b.3.p.q.v:b.3.p.z.v;$(\'#\'+b.w.v).1f(\'F\').O(\'v\').29(c);n a},28:7(){8(\'28\');4 a=$(o);4 b=a.r(\'5\');6(j.13===b.11)a.5(\'E\');s 6(j.1L===b.11)a.5(\'D\');6(j.Q===b.H)a.5(\'v\');n a},D:7(){8(\'D\');4 a=$(o);4 b=a.r(\'5\');b.A--;6($.2a(b.A,b.L)!=-1){a.5(\'D\');n a}8(b.V+\':\'+b.A+\':\'+b.N);6(b.A<b.V){6(j.Q===b.H){6(j.14===b.3.u){a.5(\'B\')}s 6(j.1h===b.3.u){b.11=j.13;a.5(\'E\')}s 6(j.1g===b.3.u){a.5(\'F\')}}s 6(j.15===b.H){a.5(\'B\')}}s{a.5(\'X\',b.A)}n a},E:7(){8(\'E\');4 a=$(o);4 b=a.r(\'5\');b.A++;8(b.V+\':\'+b.A+\':\'+b.N);6($.2a(b.A,b.L)!=-1){a.5(\'E\');n a}6(b.A>b.N){6(j.Q===b.H){6(j.14===b.3.u){a.5(\'C\')}s 6(j.1h===b.3.u){b.11=j.1L;a.5(\'D\')}s 6(j.1g===b.3.u){a.5(\'F\')}}s 6(j.15===b.H){a.5(\'C\')}}s{a.5(\'X\',b.A)}n a},C:7(){8(\'C\');4 a=$(o);4 b=a.r(\'5\');a.5(\'X\',b.V);n a},B:7(){8(\'B\');4 a=$(o);4 b=a.r(\'5\');a.5(\'X\',b.N);n a},\'X\':7(a){8(\'X\');4 b=$(o);4 c=b.r(\'5\');4 a=1d(a,10);6(a>c.N)a=c.N;s 6(a<c.V)a=c.V;8(a);c.A=a;b.5(\'1B\',c.A);b.5(\'1F\');n b},u:7(){8(\'y 2p\');4 a=$(o);4 b=a.r(\'5\');4 c=b.3.u;6(j.1g===b.3.u){b.3.u=j.14}s 6(j.14===b.3.u){b.3.u=j.1h}s 6(j.1h===b.3.u){b.11=j.13;b.3.u=j.1g}4 d=(b.3.q&&b.3.p.q.y!==W)?b.3.p.q.y[b.3.u]:b.3.p.z.y[b.3.u];$(\'#\'+b.w.y).1f(c).O(b.3.u).29(d);8(b.3.u);n a},2I:7(){8(\'t Z\');4 a=$(o);4 b=a.r(\'5\');b.3.x-=b.3.1T;b.3.x=(b.3.x<b.3.17)?b.3.17:b.3.x;a.5(\'1p\');6(j.Q==b.H)a.5(\'F\').5(\'v\');8(\'3J: \'+b.3.x);n a},2H:7(){8(\'t Y\');4 a=$(o);4 b=a.r(\'5\');b.3.x=(b.3.x<=b.3.17)?0:b.3.x;b.3.x+=b.3.1T;b.3.x=(b.3.x>b.3.1j)?b.3.1j:b.3.x;a.5(\'1p\');6(j.Q==b.H)a.5(\'F\').5(\'v\');8(\'x: \'+b.3.x);n a},1p:7(){8(\'1p\');4 a=$(o);4 b=a.r(\'5\');4 c=b.3.x*b.3.2l;6(c<b.3.17)c=b.3.17;6(c>b.3.1j)c=b.3.1j;b.1n=c;8(\'1n: \'+b.1n);n a},1r:7(a){8(\'1r\');4 b=a.1Y||\'1V\';4 c=$(o);4 d=c.r(\'5\');4 e=1d(a.S,10);4 f=$(\'#\'+d.w.I+\'-\'+e);4 g=$.2a(e,d.L);2G(b){K\'1w\':6(g!=-1){8(\'1w: \'+e);d.L.2L(g,1);$(f).1f(\'1G\')}M;K\'19\':6(g==-1){8(\'19: \'+e);d.L.2b(e);$(f).O(\'1G\')}M;K\'1V\':3K:6(g!=-1){8(\'1w: \'+e);d.L.2L(g,1);$(f).1f(\'1G\')}s{8(\'19: \'+e);d.L.2b(e);$(f).O(\'1G\')}}8(\'L:\'+d.L);n c},1F:7(){8(\'1F\');4 a=$(o);4 b=a.r(\'5\');4 c=b.w.I;4 d=c+\'-\'+b.A;$(\'a\',\'#\'+c).1f(\'2M\');$(\'#\'+d,\'#\'+c).O(\'2M\')},1z:7(d){8(\'1z\');4 e=$(o);4 f=e.r(\'5\');6(\'1x\'===d)e.5(\'1H\',{\'T\':f.3.p.z.T.1x});s 6(\'U\'===d)e.5(\'1H\',{\'T\':f.3.p.z.T.U});f.1b=[];4 g=0;$.1a(f.3.R,7(a,b){4 c=$(\'<2w />\').1C(7(){6(++g===f.3.R.1e)e.5(\'1I\')}).1P(7(){8(\'2x 2y 18 1C 2z S #\'+a+\' : \'+b);e.5(\'1r\',{\'S\':a,\'1Y\':\'19\'});6(++g===f.3.R.1e)e.5(\'1I\')});6(\'U\'===d)c.1s(\'1q\',2N(b));s c.1s(\'1q\',b);f.1b.2b(c[0])});f.N=f.1b.1e-1;n e},1I:7(){8(\'1I\');4 a=$(o);4 b=a.r(\'5\');6(b.3.1Q!==1R)b.2s=26.27(7(){a.5(\'U\')},1d(b.3.1Q,10));a.5(\'1t\')},U:7(){8(\'U\');4 a=$(o);4 b=a.r(\'5\');a.5(\'1z\',\'U\')},1H:7(a){8(\'1H\');4 b=$(o);4 c=b.r(\'5\');b.5(\'1t\');4 d=$(\'<1D G="T">\'+a.T+\'</1D>\');d.3L().3M(b).3N(\'2O\');6(a.2P!==W){26.27(7(){b.5(\'1t\')},1d(a.2P,10))}n b},1t:7(){8(\'1t\');4 a=$(o);4 b=a.r(\'5\');$(\'.T\',a).3O(\'2O\',7(){$(o).2v()});n a},3P:7(){8(\'3Q R\');4 a=$(o);4 b=a.r(\'5\');n b.3.R}};7 8(a){6(k.8&&1c.2c&&1c.2c.2Q)1c.2c.2Q(a)}7 2N(a){4 b=a;4 c=a.2J(\'?\');4 d=\'\';6(c!=-1){b=a.23(0,c);d=a.23(c);d=d.3R(/[(?|&)]2R=[^&]+/g,\'\')}a=b+((d.1e)?d+\'&\':d+\'?\');a+=\'2R=\'+3S.3T();n a}})(2j);',62,242,'|||settings|var|scianimator|if|function|debug||||||||||||||id|return|this|labels|utf8|data|else|speed|loopMode|play|controls|delay|loop|text|currentFrame|last|first|previous|next|stop|class|playMode|navigator|control|case|disabledFrames|break|lastFrame|addClass|href|PLAY_MODE_PLAYING|images|frame|status|refresh|firstFrame|undefined|goto|down|up||direction|append|DIRECTION_FORWARD|LOOP_MODE_LOOP|PLAY_MODE_STOPPED|null|delayMin|to|disable|each|frames|window|parseInt|length|removeClass|LOOP_MODE_NONE|LOOP_MODE_SWEEP|defaultFrame|delayMax|width|theme|animationTimer|dwell|container|calculateDwell|src|enableDisable|attr|hideStatus|controlContainer|tip|enable|preload|target|loadImages|canvas|drawImage|load|div|span|hilightCurrent|disabled|showStatus|onLoadImagesComplete|CONTROLS_ALL|none|DIRECTION_REVERSE|POSITION_TOP|fn|init|error|autoRefresh|false|controlPosition|delayStep|height|toggle|click|context|state|form|delegate|preventDefault|playOrStop|substring|onControlsComplete||self|setTimeout|animate|html|inArray|push|console||sweep|POSITION_BOTTOM|apply|arguments|typeof|jQuery|defaults|dwellMultiplier|600|true|Click|mode|8592|8594|autoRefreshTimer|destroy|clearTimeout|remove|img|Image|failed|for|browser|getContext|box|title|small|label|switch|speedDown|speedUp|indexOf|prepend|splice|current|randomizeUrl|slow|timeout|log|rand|all|CONTROLS_NONE|Array|prototype|slice|call|object|Method|does|not|exist|on|250|100|5000|light|First|Previous|Play|Stop|Next|Last|Loop|Sweep|None|Speed|go|lt|ctrl|gt|Preloading|Refreshing|from|source|9658|9632|extend|unbind|removeData|css|msie|version|G_vmlCanvasManager|initElement|number|nbsp|submit|metaKey|isArray|Display|no|is|empty|Delay|default|hide|appendTo|fadeIn|fadeOut|listImages|list|replace|Math|random'.split('|'),0,{}))