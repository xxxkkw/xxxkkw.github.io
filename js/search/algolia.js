window.addEventListener("load",()=>{var e=GLOBAL_CONFIG.algolia;let{appId:t,apiKey:a,indexName:i,hitsPerPage:n=5,languages:s}=e;if(!t||!a||!i)return console.error("Algolia setting is invalid!");let l=document.getElementById("search-mask"),r=document.querySelector("#algolia-search .search-dialog"),o=e=>{var t=e?"animateIn":"animateOut",a=e?"to_show 0.5s":"to_hide 0.5s",e=e?"titleScale 0.5s":"search_close .5s";btf[t](l,a),btf[t](r,e)},c=()=>{window.innerWidth<768&&r.style.setProperty("--search-height",window.innerHeight+"px")},d=()=>{btf.overflowPaddingR.add(),o(!0),setTimeout(()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()},100);let t=e=>{"Escape"===e.code&&(g(),document.removeEventListener("keydown",t))};document.addEventListener("keydown",t),c(),window.addEventListener("resize",c)},g=()=>{btf.overflowPaddingR.remove(),o(!1),window.removeEventListener("resize",c)},h=()=>{btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",d)};let u=e=>{if(!e)return"";var t=e.indexOf("<mark>");let a=t-30,i=t+120,n="",s="";return a<=0?(a=0,i=140):n="...",i>e.length?i=e.length:s="...",""+n+e.substring(a,i)+s},m=[document.getElementById("algolia-hits"),document.getElementById("algolia-pagination"),document.querySelector("#algolia-info .algolia-stats")];var e=instantsearch({indexName:i,searchClient:algoliasearch(t,a),searchFunction(t){m.forEach(e=>{e.style.display=t.state.query?"":"none"}),t.state.query&&t.search()}}),p=[instantsearch.widgets.configure({hitsPerPage:n}),instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:s.input_placeholder,showLoadingIndicator:!0}),instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){var t=e.permalink||GLOBAL_CONFIG.root+e.path,e=e._highlightResult,a=e.contentStripTruncate?u(e.contentStripTruncate.value):e.contentStrip?u(e.contentStrip.value):e.content?u(e.content.value):"";return`
            <a href="${t}" class="algolia-hit-item-link">
              <span class="algolia-hits-item-title">${e.title.value||"no-title"}</span>
              ${a?`<div class="algolia-hit-item-content">${a}</div>`:""}
            </a>`},empty(e){return`<div id="algolia-hits-empty">${s.hits_empty.replace(/\$\{query}/,e.query)}</div>`}}}),instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text(e){return"<hr>"+s.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}}}),instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}})];e.addWidgets(p),e.start(),h(),l.addEventListener("click",g),document.querySelector("#algolia-search .search-close-button").addEventListener("click",g),window.addEventListener("pjax:complete",()=>{btf.isHidden(l)||g(),h()}),window.pjax&&e.on("render",()=>{window.pjax.refresh(document.getElementById("algolia-hits"))})});