YUI.add("gallery-audio",function(b){var a={};(function(d){if(d){if(d.audio){a.m4a=d.audio.m4a;a.mp3=d.audio.mp3;a.ogg=d.audio.ogg;a.wav=d.audio.wav;}return;}var c=b.config.doc.createElement("audio");if(!c.canPlayType){return;}a.m4a=c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/aac;");a.mp3=c.canPlayType("audio/mpeg;");a.ogg=c.canPlayType('audio/ogg; codecs="vorbis"');a.wav=c.canPlayType('audio/wav; codecs="1"');}(b.Modernizr||b.config.win.Modernizr));b.Audio={create:function(d){d=d||{};var k,c=d.format||["ogg","mp3","m4a","wav"],e,g,f,h=d.baseUrl||"",j;if(b.Lang.isArray(c)){for(e=0,g=c.length;e<g;e+=1){j=c[e];f=a[j];if(!f){continue;}if(f==="probably"){k=j;break;}if(!k){k=j;}}if(k){h+="."+k;}}else{if(b.Lang.isObject(c)){for(j in c){if(c.hasOwnProperty(j)){f=a[j];if(!f){continue;}if(f==="probably"){k=j;break;}if(!k){k=j;}}}if(k){h+=c[k];}}else{return null;}}if(!k){return null;}return b.Node.create("<audio "+(d.autoplay?'autoplay="true" ':"")+(d.controls?'controls="true"':"")+(d.loop?'loop="true"':"")+' preload="'+(d.preload?d.preload:"auto")+'" src="'+h+'" />');}};},"gallery-2011.04.06-19-44",{requires:["node"],optional:["gallery-modernizr"]});