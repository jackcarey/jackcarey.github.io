//Full list at: https://github.com/rouge-ruby/rouge/wiki/List-of-supported-languages-and-lexers
var langs = {'apache':'Apache Config','applescript':'AppleScript','c':'C','clojure':'Clojure','cmake':'CMake','coffeescript':'Coffeescript','conf':'Conf','console':'Console','cpp':'C++','csharp':'C#','css':'CSS','docker':'Docker','erb':'ERB','escape':'Escape','fortran':'Fortran','fsharp':'F#','glsl':'GLSL','go':'Go','gradle':'Gradle','graphql':'GraphQL','haml':'Haml','handlebars':'Handlebars','haskell':'Haskell','html':'HTML','http':'HTTP','ini':'INI','io':'IO','java':'Java','javascript':'JavaScript','json':'JSON','json-doc':'JSON-Doc','jsp':'JSP','jsx':'JSX','kotlin':'Kotlin','liquid':'Liquid','literate_coffeescript':'Coffeescript','lua':'Lua','make':'Make','markdown':'Markdown','matlab':'Matlab','nginx':'NGINX','objective_c':'Objective-C','pascal':'Pascal','perl':'Perl','php':'PHP','plaintext':'Text','plist':'PList','powershell':'Powershell','properties':'Java Properties','python':'Python','r':'R','ruby':'Ruby','rust':'Rust','sass':'SASS','scala':'Scala','scss':'SCSS','shell':'Shell','sql':'SQL','swift':'Swift','tex':'TeX','typescript':'TypeScript','vb':'Visual Basic','vue':'Vue JS','xml':'XML','yaml':'Yaml'};
(function (){
    var elems = document.getElementsByClassName("highlighter-rouge");
    if(elems.length){
        for(var i=0;i<elems.length;++i){
            var el = elems.item(i);
            var clone = el.cloneNode(true);
            var lang = el.className.match(/(?<=language-)[A-z0-9]+/gm)[0];
            lang = langs[lang] || lang;
            var detail = document.createElement("details");
            detail.open = true;//i==0;
            var summary = document.createElement("summary");
            summary.innerText = " "+lang+" Code";
            detail.className = "code-block";
            detail.appendChild(summary);
            detail.appendChild(clone);
            el.parentNode.insertBefore(detail, el.previousSibling);
            el.remove();
        }
    }
})();