export function CSSFlexboxGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="cssFlexGenerator"><div class="cssFlexGeneratorControls"><h4>CSS Style Configuration</h4><label for="cfgHeightOfDivs">Height of divs (px):</label><input placeholder="Enter pixel value" id="cfgHeightOfDivs" type="number"><label for="cfgWidthOfDivs">Width of divs (px):</label><input placeholder="Enter pixel value" id="cfgWidthOfDivs" type="number"><label for="cfgMarginOfDivs">Margin of divs (px):</label><input placeholder="Enter pixel value" id="cfgMarginOfDivs" type="number"><label for="cfgFlexGap">Gap (px):</label><input placeholder="Enter pixel value" id="cfgFlexGap" type="number"><label for="cfgFlexWrap">flex-wrap:</label><select name="cfgFlexWrap" id="cfgFlexWrap"><option value="nowrap">nowrap</option><option value="wrap">wrap</option><option value="wrap-reverse">wrap-reverse</option></select><label for="cfgFlexDirection">flex-direction:</label><select name="cfgFlexDirection" id="cfgFlexDirection"><option value="row">row</option><option value="column">column</option><option value="row-reverse">row-reverse</option><option value="column-reverse">column-reverse</option></select><label for="cfgJustifyContent">justify-content:</label><select name="cfgJustifyContent" id="cfgJustifyContent"><option value="flex-start">flex-start</option><option value="flex-end">flex-end</option><option value="center">center</option><option value="space-evenly">space-evenly</option><option value="space-around">space-around</option><option value="space-between">space-between</option></select><label for="cfgAlignItems">align-items:</label><select name="cfgAlignItems" id="cfgAlignItems"><option value="flex-start">flex-start</option><option value="flex-end">flex-end</option><option value="center">center</option><option value="stretch">stretch</option><option value="baseline">baseline</option></select></div><div class="cssFlexGeneratorOutput"><div class="cssFlexGeneratorPreview"><section class="cssFlexGeneratorCtrlBtns"><button id="cssFlexGeneratorAddDiv">Add div</button><button id="cssFlexGeneratorDelDiv">Delete div</button></section><section class="cssFlexGeneratorInsideDivs"></section></div><code class="cssFlexGeneratorCode"></code><div class="cssFlexGeneratorBtns"><button id="cssFlexGeneratorReset">Reset</button><button id="cssFlexGeneratorCopyCode">Copy Code</button></div></div></div>`

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const cssFlexGeneratorInsideDivs = document.querySelector('.cssFlexGeneratorInsideDivs')
    const cssFlexGeneratorCtrlBtns = document.querySelector('.cssFlexGeneratorCtrlBtns')
    const cssFlexGeneratorControls = document.querySelector('.cssFlexGeneratorControls')
    const cssFlexGeneratorCode = document.querySelector('.cssFlexGeneratorCode')



    const cfgHeightOfDivs = document.querySelector('#cfgHeightOfDivs')
    const cfgWidthOfDivs = document.querySelector('#cfgWidthOfDivs')
    const cfgMarginOfDivs = document.querySelector('#cfgMarginOfDivs')
    const cfgFlexGap = document.querySelector('#cfgFlexGap')
    const cfgFlexWrap = document.querySelector('#cfgFlexWrap')
    const cfgFlexDirection = document.querySelector('#cfgFlexDirection')
    const cfgJustifyContent = document.querySelector('#cfgJustifyContent')
    const cfgAlignItems = document.querySelector('#cfgAlignItems')


    const cssFlexGeneratorReset = document.querySelector('#cssFlexGeneratorReset')
    const cssFlexGeneratorCopyCode = document.querySelector('#cssFlexGeneratorCopyCode')

    let count = 0;
    cfgResetFunc()
    cssFlexGeneratorReset.addEventListener('click', cfgResetFunc)
    cssFlexGeneratorCopyCode.addEventListener('click', () => {
        navigator.clipboard.writeText(cssFlexGeneratorCode.textContent);
        alert("Code Copied!")
    })

    function updateDivCount(count) {
        cssFlexGeneratorInsideDivs.innerHTML = ('<div></div>').repeat(count)
    }


    function cfgResetFunc() {
        modalTitle.textContent = 'CSS Flexbox Generator'
        modalDescription.textContent = 'CSS Flexbox generator is a tool that visually creates flexible layouts. You can adjust settings like flex direction and alignment, and the tool generates corresponding CSS code for easy implementation in web projects.'

        count = 4

        cfgHeightOfDivs.value = 100
        cfgWidthOfDivs.value = 100
        cfgMarginOfDivs.value = 10
        cfgFlexGap.value = 10
        cfgFlexWrap.value = 'wrap'
        cfgFlexDirection.value = 'row'
        cfgJustifyContent.value = 'space-between'
        cfgAlignItems.value = 'center'

        updateDivCount(count)
        updateStyle()
        updateCode()
    }


    function updateStyle() {
        const cssFlexGeneratorDivs = document.querySelectorAll('.cssFlexGeneratorPreview div')

        cssFlexGeneratorDivs.forEach((i) => {
            i.style.height = `${cfgHeightOfDivs.value}px`
            i.style.width = `${cfgWidthOfDivs.value}px`
            i.style.margin = `${cfgMarginOfDivs.value}px`
        })

        cssFlexGeneratorInsideDivs.style.gap = `${cfgFlexGap.value}px`
        cssFlexGeneratorInsideDivs.style.flexWrap = `${cfgFlexWrap.value}`
        cssFlexGeneratorInsideDivs.style.flexDirection = `${cfgFlexDirection.value}`
        cssFlexGeneratorInsideDivs.style.justifyContent = `${cfgJustifyContent.value}`
        cssFlexGeneratorInsideDivs.style.alignItems = `${cfgAlignItems.value}`


    }
    function updateCode() {
        cssFlexGeneratorCode.textContent =
            `<!DOCTYPE html>
<html>
<head>
    <title>CSS Flexbox Generator</title> 
    <style>
        .FlexContainer {
            display: flex;
            flex-wrap: ${cfgFlexWrap.value};
            justify-content: ${cfgJustifyContent.value};
            align-items: ${cfgAlignItems.value};
            gap: ${cfgFlexGap.value}${(cfgFlexGap.value != '') ? 'px' : ''};
            width: 65%;
            background-color: #faebd7;
            border: 2px solid black;
            height: 80vh;
            overflow: auto;
            flex-direction: ${cfgFlexDirection.value};
        }
        
        .FlexContainer div {
            width: ${cfgWidthOfDivs.value}${(cfgWidthOfDivs.value != '') ? 'px' : ''};
            height: ${cfgHeightOfDivs.value}${(cfgHeightOfDivs.value != '') ? 'px' : ''};
            margin: ${cfgMarginOfDivs.value}${(cfgMarginOfDivs.value != '') ? 'px' : ''};
            background-color: #ffffff;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <section class='FlexContainer'>
        ${('<div></div>').repeat(count)}
    </section>
</body>
</html>`
    }
    cssFlexGeneratorCtrlBtns.addEventListener('click', (e) => {
        if (e.target.id == 'cssFlexGeneratorAddDiv') {
            count++;
        } else if (e.target.id == 'cssFlexGeneratorDelDiv') {
            count--;
            if (count < 0) {
                count = 0;
            }
        }
        updateDivCount(count)
        updateStyle()
        updateCode()
    })
    cssFlexGeneratorControls.addEventListener('input', () => {
        updateStyle()
        updateCode()
    })
}