(function(){var S=window.SITE,$=function(i){return document.getElementById(i)};
function wa(t){return"https://wa.me/"+S.whatsapp+"?text="+encodeURIComponent(t)}
function list(id,a){$(id).innerHTML=a.map(function(x){return"<li>"+x+"</li>"}).join("")}
list("features",S.features);list("quals",S.quals);list("accredList",S.accred);list("services",S.services);
$("partsGrid").innerHTML=S.parts.map(function(p,i){return'<article class="card"><span class="n">'+String(i+1).padStart(2,"0")+'</span><h3>'+p[0]+'</h3><div class="e">'+p[1]+'</div><p>'+p[2]+'</p><ul>'+p[3].map(function(t){return"<li>"+t+"</li>"}).join("")+'</ul><div class="sk">المهارة: '+p[4]+'</div></article>'}).join("");
$("faqList").innerHTML=S.faq.map(function(f){return"<details><summary>"+f[0]+"</summary><p>"+f[1]+"</p></details>"}).join("");
document.querySelectorAll("[data-wa]").forEach(function(a){var m=a.dataset.msg;a.href=wa(m==="after"?S.waAfter:m?S.waAccred:S.waMessage);a.target="_blank";a.rel="noopener noreferrer"});
document.querySelectorAll("[data-fb]").forEach(function(a){a.href=S.facebook});
})();
