import hljs from 'highlight.js';
// import 'highlight.js/styles/a11y-light.css';
import autosize from "autosize";
// import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
// import { toPng, toJpeg, toSvg } from 'html-to-image';
import download from "downloadjs";
import Toastify from 'toastify-js'


export function codeImageGenerator() {

    hljs.configure({
        ignoreUnescapedHTML: true,
    });

    document.querySelector('.modalTarget').innerHTML = `<div class="codeImageGenerator"><div class="codeImageGeneratorControls"><h4>Basic Configuration</h4><label for="cigLanguage">Language:</label><select name="cigLanguage" id="cigLanguage"><option value="auto">auto</option><option value="1c">1c</option><option value="abnf">abnf</option><option value="accesslog">accesslog</option><option value="actionscript">actionscript</option><option value="ada">ada</option><option value="angelscript">angelscript</option><option value="apache">apache</option><option value="applescript">applescript</option><option value="arcade">arcade</option><option value="arduino">arduino</option><option value="armasm">armasm</option><option value="xml">xml</option><option value="asciidoc">asciidoc</option><option value="aspectj">aspectj</option><option value="autohotkey">autohotkey</option><option value="autoit">autoit</option><option value="avrasm">avrasm</option><option value="awk">awk</option><option value="axapta">axapta</option><option value="bash">bash</option><option value="basic">basic</option><option value="bnf">bnf</option><option value="brainfuck">brainfuck</option><option value="c">c</option><option value="cal">cal</option><option value="capnproto">capnproto</option><option value="ceylon">ceylon</option><option value="clean">clean</option><option value="clojure">clojure</option><option value="clojure">clojure-repl</option><option value="cmake">cmake</option><option value="coffeescript">coffeescript</option><option value="coq">coq</option><option value="cos">cos</option><option value="cpp">cpp</option><option value="crmsh">crmsh</option><option value="crystal">crystal</option><option value="csharp">csharp</option><option value="csp">csp</option><option value="css">css</option><option value="d">d</option><option value="markdown">markdown</option><option value="dart">dart</option><option value="delphi">delphi</option><option value="diff">diff</option><option value="django">django</option><option value="dns">dns</option><option value="dockerfile">dockerfile</option><option value="dos">dos</option><option value="dsconfig">dsconfig</option><option value="dts">dts</option><option value="dust">dust</option><option value="ebnf">ebnf</option><option value="elixir">elixir</option><option value="elm">elm</option><option value="ruby">ruby</option><option value="erb">erb</option><option value="erlang">erlang-repl</option><option value="erlang">erlang</option><option value="excel">excel</option><option value="fix">fix</option><option value="flix">flix</option><option value="fortran">fortran</option><option value="fsharp">fsharp</option><option value="gams">gams</option><option value="gauss">gauss</option><option value="gcode">gcode</option><option value="gherkin">gherkin</option><option value="glsl">glsl</option><option value="gml">gml</option><option value="go">go</option><option value="golo">golo</option><option value="gradle">gradle</option><option value="graphql">graphql</option><option value="groovy">groovy</option><option value="haml">haml</option><option value="handlebars">handlebars</option><option value="haskell">haskell</option><option value="haxe">haxe</option><option value="hsp">hsp</option><option value="http">http</option><option value="hy">hy</option><option value="inform7">inform7</option><option value="ini">ini</option><option value="irpf90">irpf90</option><option value="isbl">isbl</option><option value="java">java</option><option value="javascript">javascript</option><option value="jboss">jboss-cli</option><option value="json">json</option><option value="julia">julia</option><option value="julia">julia-repl</option><option value="kotlin">kotlin</option><option value="lasso">lasso</option><option value="latex">latex</option><option value="ldif">ldif</option><option value="leaf">leaf</option><option value="less">less</option><option value="lisp">lisp</option><option value="livecodeserver">livecodeserver</option><option value="livescript">livescript</option><option value="llvm">llvm</option><option value="lsl">lsl</option><option value="lua">lua</option><option value="makefile">makefile</option><option value="mathematica">mathematica</option><option value="matlab">matlab</option><option value="maxima">maxima</option><option value="mel">mel</option><option value="mercury">mercury</option><option value="mipsasm">mipsasm</option><option value="mizar">mizar</option><option value="perl">perl</option><option value="mojolicious">mojolicious</option><option value="monkey">monkey</option><option value="moonscript">moonscript</option><option value="n1ql">n1ql</option><option value="nestedtext">nestedtext</option><option value="nginx">nginx</option><option value="nim">nim</option><option value="nix">nix</option><option value="node">node-repl</option><option value="nsis">nsis</option><option value="objectivec">objectivec</option><option value="ocaml">ocaml</option><option value="openscad">openscad</option><option value="oxygene">oxygene</option><option value="parser3">parser3</option><option value="pf">pf</option><option value="pgsql">pgsql</option><option value="php">php</option><option value="php">php-template</option><option value="plaintext">plaintext</option><option value="pony">pony</option><option value="powershell">powershell</option><option value="processing">processing</option><option value="profile">profile</option><option value="prolog">prolog</option><option value="properties">properties</option><option value="protobuf">protobuf</option><option value="puppet">puppet</option><option value="purebasic">purebasic</option><option value="python">python</option><option value="python">python-repl</option><option value="q">q</option><option value="qml">qml</option><option value="r">r</option><option value="reasonml">reasonml</option><option value="rib">rib</option><option value="roboconf">roboconf</option><option value="routeros">routeros</option><option value="rsl">rsl</option><option value="ruleslanguage">ruleslanguage</option><option value="rust">rust</option><option value="sas">sas</option><option value="scala">scala</option><option value="scheme">scheme</option><option value="scilab">scilab</option><option value="scss">scss</option><option value="shell">shell</option><option value="smali">smali</option><option value="smalltalk">smalltalk</option><option value="sml">sml</option><option value="sqf">sqf</option><option value="sql">sql</option><option value="stan">stan</option><option value="stata">stata</option><option value="step21">step21</option><option value="stylus">stylus</option><option value="subunit">subunit</option><option value="swift">swift</option><option value="taggerscript">taggerscript</option><option value="yaml">yaml</option><option value="tap">tap</option><option value="tcl">tcl</option><option value="thrift">thrift</option><option value="tp">tp</option><option value="twig">twig</option><option value="typescript">typescript</option><option value="vala">vala</option><option value="vbnet">vbnet</option><option value="vbscript">vbscript</option><option value="vbscript">vbscript-html</option><option value="verilog">verilog</option><option value="vhdl">vhdl</option><option value="vim">vim</option><option value="wasm">wasm</option><option value="wren">wren</option><option value="x86asm">x86asm</option><option value="xl">xl</option><option value="xquery">xquery</option><option value="zephir">zephir</option></select><label for="cigTheme">Color Theme:</label><select name="cigTheme" id="cigTheme"><option value="a11y-dark">a11y-dark</option><option value="a11y-light">a11y-light</option><option value="atom-one-dark">atom-one-dark</option><option value="atom-one-light">atom-one-light</option><option value="foundation">foundation</option><option value="github">github</option><option value="googlecode">googlecode</option><option value="hybrid">hybrid</option><option value="idea">idea</option><option value="night-owl">night-owl</option></select><label for="cigAspectRatio">Aspect Ratio:</label><select name="cigAspectRatio" id="cigAspectRatio"><option value="1 / 1">1:1</option><option value="3 / 2">3:2</option><option value="4 / 3">4:3</option><option value="16 / 9">16:9</option></select><h4>Style Configuration</h4><label for="cigWindowsColor">Window Color:</label><input type="color" id="cigWindowsColor"><label for="cigBgColor">Background Color:</label><input type="color" id="cigBgColor" value="#ffffff"><label for="cigPadding">Padding (px):</label><input placeholder="Enter pixel value" type="number" id="cigPadding"></div><div class="codeImageGeneratorOutput"><div class="codeImageGeneratorPreview"><div class="codeImageGeneratorImage"><div class="cigHeader"><div class="cigWindowCtrlBtns"><span class="ctrlRed"></span><span class="ctrlOrange"></span><span class="ctrlGreen"></span></div><div class="cigTitle"><pre><code class="language-plaintext" contenteditable="true" spellcheck="false" autocomplete="off" autocapitalize="off">Untitled</code></pre></div><div class="cigWindowCtrlBtns"><span class="ctrlTransparent"></span><span class="ctrlTransparent"></span><span class="ctrlTransparent"></span></div></div><div class="cigContent"><pre id="cigPre"><code class="codeImageGeneratorCode"></code></pre><textarea autofocus name="cigText" id="cigText" spellcheck="false" autocomplete="off" autocapitalize="off"></textarea></div></div></div><div class="codeImageGeneratorBtns"><button id="codeImageGeneratorReset">Reset Configuration</button><button id="codeImageGeneratorDownload">Download</button><div><select name="cigExportType" id="cigExportType"><option value="png">PNG</option><option value="jpeg">JPEG</option></select></div></div></div></div>`


    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')

    const cigLanguage = document.querySelector('#cigLanguage')
    const cigTheme = document.querySelector('#cigTheme')
    const cigAspectRatio = document.querySelector('#cigAspectRatio')

    const cigBgColor = document.querySelector('#cigBgColor')
    const cigWindowsColor = document.querySelector('#cigWindowsColor')
    const cigPadding = document.querySelector('#cigPadding')

    const codeImageGeneratorControls = document.querySelector('.codeImageGeneratorControls')
    const codeImageGeneratorPreview = document.querySelector('.codeImageGeneratorPreview')
    const codeImageGeneratorImage = document.querySelector('.codeImageGeneratorImage')
    const codeImageGeneratorCode = document.querySelector('.codeImageGeneratorCode')

    const cigTitle = document.querySelector('.cigTitle > pre > code')
    const cigHeader = document.querySelector('.cigHeader')
    const cigContent = document.querySelector('.cigContent')

    const cigPre = document.querySelector('#cigPre')
    const cigText = document.querySelector('#cigText')
    const cigStylesheet = document.querySelector('#cigStylesheet')

    const codeImageGeneratorReset = document.querySelector('#codeImageGeneratorReset')
    const codeImageGeneratorDownload = document.querySelector('#codeImageGeneratorDownload')
    const cigExportType = document.querySelector('#cigExportType')



    cigResetFunc()
    codeImageGeneratorReset.addEventListener('click', cigResetFunc)
    codeImageGeneratorDownload.addEventListener('click', () => {

        try {
            if (cigExportType.value == 'png') {

                htmlToImage.toPng(codeImageGeneratorPreview)
                    .then(function (dataUrl) {
                        download(dataUrl, 'codeImageGenerator(ToolSet).png');
                    })
                    .catch(function (error) {
                        console.error('oops, something went wrong!', error);
                    });
            } else if (cigExportType.value == 'jpeg') {
                htmlToImage.toJpeg(codeImageGeneratorPreview, { quality: 0.95 })
                    .then(function (dataUrl) {
                        download(dataUrl, 'codeImageGenerator(ToolSet).jpeg');
                    });
            }
            Toastify({
                text: "📥 Image Downloaded!",
                className: "info",
                className: "notification",
                offset: {
                    x: 20,
                    y: 20
                },
            }).showToast();
        } catch (error) {
            console.log(error)
        }
    })

    // node_modules\highlight.js\styles\a11y-dark.css
    function cigResetFunc() {
        modalTitle.textContent = 'Code Image Generator'
        modalDescription.textContent = 'Code image generator converts programming code into image files, like PNG or JPEG, making it easier to share visually in documentation or presentations. You can customize aspects such as syntax highlighting and formatting for better aesthetics.'

        cigLanguage.value = 'auto'
        cigTheme.value = "a11y-light"
        cigAspectRatio.value = '4 / 3'
        cigBgColor.value = '#ffffff'
        cigWindowsColor.value = '#faebd7'
        cigPadding.value = 65
        cigText.style.caretColor = '#777777'
        cigTitle.style.caretColor = '#777777'
        cigExportType.value = 'png'

        // cigTitle.innerText = 'Untitled'

        autosize(cigText)
        codeImageGeneratorCode.style.height = cigText.style.height
        cigContent.style.height = cigText.style.height
        cigUpdateStyle()
    }

    function cigUpdateStyle() {
        cigStylesheet.setAttribute('href', `node_modules\\highlight.js\\styles\\${cigTheme.value}.css`)

        codeImageGeneratorPreview.style.aspectRatio = cigAspectRatio.value
        codeImageGeneratorPreview.style.backgroundColor = cigBgColor.value
        codeImageGeneratorPreview.style.padding = `${cigPadding.value}px`

        cigHeader.style.backgroundColor = cigWindowsColor.value
        codeImageGeneratorCode.style.backgroundColor = cigWindowsColor.value
        codeImageGeneratorImage.style.backgroundColor = cigWindowsColor.value


        codeImageGeneratorCode.textContent = `${cigText.value}`

        updateSyntaxHighlighting()
        // hljs.highlightAll();


    }

    function updateSyntaxHighlighting() {
        if (codeImageGeneratorCode.hasAttribute('data-highlighted')) {
            codeImageGeneratorCode.removeAttribute('data-highlighted')
        }
        if (cigTitle.hasAttribute('data-highlighted')) {
            cigTitle.removeAttribute('data-highlighted')
        }

        if (cigLanguage.value == 'auto') {
            codeImageGeneratorCode.setAttribute('class', `codeImageGeneratorCode`)
        } else {
            codeImageGeneratorCode.setAttribute('class', `codeImageGeneratorCode language-${cigLanguage.value}`)
        }
        // codeImageGeneratorCode.innerHTML = hljs.highlightAuto(codeImageGeneratorCode.textContent).value

        hljs.highlightElement(codeImageGeneratorCode);
        hljs.highlightElement(cigTitle);


    }

    codeImageGeneratorControls.addEventListener('input', () => {
        cigUpdateStyle()

        autosize(cigText)
        codeImageGeneratorCode.style.height = cigText.style.height
        cigContent.style.height = cigText.style.height
    })

    cigText.addEventListener('input', () => {
        // codeImageGeneratorCode.textContent = `${codeImageGeneratorCode.textContent}`;
        codeImageGeneratorCode.removeAttribute('data-highlighted')

        autosize(cigText)
        codeImageGeneratorCode.textContent = `${cigText.value}`
        codeImageGeneratorCode.style.height = cigText.style.height
        cigContent.style.height = cigText.style.height


    })

    cigText.addEventListener('keyup', () => {
        updateSyntaxHighlighting()
        cigUpdateStyle()

        autosize(cigText)
        codeImageGeneratorCode.style.height = cigText.style.height
        cigContent.style.height = cigText.style.height


    })
}