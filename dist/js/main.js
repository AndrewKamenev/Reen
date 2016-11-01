var floatPanel = new McFloatPanel();
/* Float Panel v2016.10.28. Copyright www.menucool.com */
function McFloatPanel(){var i=[],r=[],h="className",s="getElementsByClassName",d="length",k="display",C="transition",l="style",B="height",c="scrollTop",j="offsetHeight",a="fixed",e=document,b=document.documentElement,n=function(a,c,b){if(a.addEventListener)a.addEventListener(c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},o=function(c,d){if(typeof getComputedStyle!="undefined")var b=getComputedStyle(c,null);else b=c.currentStyle;return b?b[d]:a},L=function(){var a=e.body;return Math.max(a.scrollHeight,a[j],b.clientHeight,b.scrollHeight,b[j])},O=function(a,c){var b=a[d];while(b--)if(a[b]===c)return true;return false},g=function(b,a){return O(b[h].split(" "),a)},q=function(a,b){if(!g(a,b))if(!a[h])a[h]=b;else a[h]+=" "+b},p=function(a,f){if(a[h]&&g(a,f)){for(var e="",c=a[h].split(" "),b=0,i=c[d];b<i;b++)if(c[b]!==f)e+=c[b]+" ";a[h]=e.replace(/^\s+|\s+$/g,"")}},m=function(){return window.pageYOffset||b[c]},z=function(a){return a.getBoundingClientRect().top},F=function(b){var c=m();if(c>b.oS&&!g(b,a))q(b,a);else g(b,a)&&c<b.oS&&p(b,a)},x=function(){for(var a=0;a<r[d];a++)J(r[a])},J=function(a){if(a.oS){a.fT&&clearTimeout(a.fT);a.fT=setTimeout(function(){if(a.aF)F(a);else y(a)},50)}else y(a)},w=function(d,c,b){p(d,a);c[k]="none";b.position=b.top=""},y=function(c){var n=z(c),f=c[j],e=c[l],d=c.pH[l],h=m();if(n<c.oT&&h>c.oS&&!g(c,a)&&(window.innerHeight||b.clientHeight)>f){c.tP=h+n-c.oT;var p=L();if(f>p-c.tP-f)var i=f;else i=0;d[k]="block";d[C]="none";d[B]=f+1+"px";c.pH[j];d[C]="height .3s";d[B]=i+"px";q(c,a);e.position=a;e.top=c.oT+"px";if(o(c,"position")!=a)d[k]="none"}else if(g(c,a)&&(h<c.tP||h<c.oS)){var s=o(c,"animation");if(c.oS&&c.classList&&s.indexOf("slide-down")!=-1){var r=o(c,"animationDuration");c.classList.remove(a);e.animationDirection="reverse";e.animationDuration="300ms";void c[j];c.classList.add(a);setTimeout(function(){w(c,d,e);e.animationDirection="normal";e.animationDuration=r},300)}else w(c,d,e)}},I=function(){var f=[],c,b;if(e[s]){f=e[s]("float-panel");i=e[s]("slideanim")}else{var j=e.getElementsByTagName("*");c=j[d];while(c--)g(j[c],"float-panel")&&f.push(j[c])}c=f[d];for(var h=0;h<c;h++){b=r[h]=f[h];b.oT=parseInt(b.getAttribute("data-top")||0);b.oS=parseInt(b.getAttribute("data-scroll")||0);if(b.oS>20&&o(b,"position")==a)b.aF=1;b.pH=e.createElement("div");b.pH[l].width=b.offsetWidth+"px";b.pH[l][k]="none";b.parentNode.insertBefore(b.pH,b.nextSibling)}if(r[d]){setTimeout(x,160);n(window,"scroll",x)}},f,D=200,E=0,u,t,H=function(){return window.innerWidth||b.clientWidth||e.body.clientWidth};function K(){u=setInterval(function(){var a=e.body;if(a[c]<3)a[c]=0;else a[c]=a[c]/1.3;if(b[c]<3)b[c]=0;else b[c]=b[c]/1.3;if(!m()){clearInterval(u);u=null}},14)}function A(){clearTimeout(t);if(m()>D&&H()>E){t=setTimeout(function(){p(f,"mcOut")},60);f[l][k]="block"}else{q(f,"mcOut");t=setTimeout(function(){f[l][k]="none"},500)}}var N=function(){f=e.getElementById("backtop");if(f){var a=f.getAttribute("data-v-w");if(a){a=a.replace(/\s/g,"").split(",");D=parseInt(a[0]);if(a[d]>1)E=parseInt(a[1])}n(f,"click",K);n(window,"scroll",A);A()}},v=function(){for(var c=m(),e=c+window.innerHeight,g=i[d],b,f,a=0;a<g;a++){b=c+z(i[a]),f=b+i[a][j];if(b<e)q(i[a],"slide");else p(i[a],"slide")}},G=function(){if(i[d]){n(window,"scroll",v);v()}},M=function(){I();N();G()};n(window,"load",M)}
$(function(){
	$('a[href ^= "#"]').click(function(a) {
        a.preventDefault();
    })

    $("#small-slider").owlCarousel({
    	items: 4,
    	margin: 30,
    	nav: false,
    	dots: true,
        loop: true,
        responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        1000:{
	            items:4,
	        }
	    }
    });

    $('.small-slider-prev').on('click', function() {
    	$('.small-slider').trigger('prev.owl.carousel');
    })
    $('.small-slider-next').on('click', function() {
    	$('.small-slider').trigger('next.owl.carousel');
    })

    $("#slider-main").owlCarousel({
    	items: 1,
    	margin: 00,
    	nav: false,
    	dots: true,
        loop: true,
    });

    $('.slider-main-prev').on('click', function() {
    	$('.slider-main').trigger('prev.owl.carousel');
    })
    $('.slider-main-next').on('click', function() {
    	$('.slider-main').trigger('next.owl.carousel');
    })
    //position of small slider buttons
    // var smallSliderLeft = $(".small-slider .owl-dot").first().offset();
    // $('.small-slider-prev').css("left", smallSliderLeft.left);
    // var smallSliderRight = $(".small-slider .owl-dot").last().offset();
    // $('.small-slider-next').css("left", smallSliderRight.left);
})