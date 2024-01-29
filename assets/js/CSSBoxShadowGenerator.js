import Toastify from 'toastify-js'
import '../css/CSSBoxShadowGenerator.css'

export function CSSBoxShadowGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="boxShadowGenerator"><div class="boxShadowGeneratorControls"><h4>CSS Style Configuration</h4><label for="cbsShadowColor">Shadow Color:</label><input type="color" id="cbsShadowColor"><label for="cbsInset">Inset:</label><select name="cbsInset" id="cbsInset"><option value="yes">Yes</option><option value="no">No</option></select><label for="cbsHorizontalOffset">Horizontal Offset (px):</label><input placeholder="Enter pixel value" type="number" id="cbsHorizontalOffset"><label for="cbsVerticalOffset">Vertical Offset (px):</label><input placeholder="Enter pixel value" type="number" id="cbsVerticalOffset"><label for="cbsBlur">Blur (px):</label><input placeholder="Enter pixel value" type="number" id="cbsBlur"><label for="cbsSpread">Spread (px):</label><input placeholder="Enter pixel value" type="number" id="cbsSpread"></div><div class="boxShadowGeneratorOutput"><div class="boxShadowGeneratorPreview"><div class="cbsBox"></div></div><code class="boxShadowGeneratorCode"></code><div class="boxShadowGeneratorBtns"><button id="boxShadowGeneratorReset">Reset</button><button id="boxShadowGeneratorCopyCode">Copy Code</button></div></div></div>`


    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const cbsShadowColor = document.querySelector('#cbsShadowColor')
    const cbsInset = document.querySelector('#cbsInset')
    const cbsHorizontalOffset = document.querySelector('#cbsHorizontalOffset')
    const cbsVerticalOffset = document.querySelector('#cbsVerticalOffset')
    const cbsBlur = document.querySelector('#cbsBlur')
    const cbsSpread = document.querySelector('#cbsSpread')
    const cbsBox = document.querySelector('.cbsBox')
    const boxShadowGeneratorCode = document.querySelector('.boxShadowGeneratorCode')
    const boxShadowGeneratorReset = document.querySelector('#boxShadowGeneratorReset')
    const boxShadowGeneratorCopyCode = document.querySelector('#boxShadowGeneratorCopyCode')
    const boxShadowGeneratorControls = document.querySelector('.boxShadowGeneratorControls')

    cbsResetFunc();

    boxShadowGeneratorReset.addEventListener('click', cbsResetFunc)
    boxShadowGeneratorCopyCode.addEventListener('click', () => {
        navigator.clipboard.writeText(boxShadowGeneratorCode.textContent);
        // alert("Code Copied!")
        Toastify({
            text: "📋 Code Copied!",
            className: "info",
            className: "notification",
            offset: {
                x: 20,
                y: 20
            },
        }).showToast();
    })

    boxShadowGeneratorControls.addEventListener('input', (e) => {
        cbsUpdateCode();
        cbsBox.setAttribute('style', boxShadowGeneratorCode.textContent)
    })

    function cbsUpdateCode() {
        boxShadowGeneratorCode.textContent = `box-shadow: ${cbsHorizontalOffset.value}${(cbsHorizontalOffset.value != '') ? 'px' : ''} ${cbsVerticalOffset.value}${(cbsVerticalOffset.value != '') ? 'px' : ''} ${cbsBlur.value}${(cbsBlur.value != '') ? 'px' : ''} ${cbsSpread.value}${(cbsSpread.value != '') ? 'px' : ''} ${cbsShadowColor.value} ${cbsInset.value == 'yes' ? 'inset' : ''};`
    }
    function cbsResetFunc() {
        modalTitle.textContent = 'CSS Box Shadow Generator'
        modalDescription.textContent = 'CSS box shadow generator lets you visually design and customize box shadows for webpage elements. It provides options to adjust shadow properties like color, size, and position, instantly generating the necessary CSS code for easy copy-pasting into your website.'

        cbsHorizontalOffset.value = 15
        cbsVerticalOffset.value = 15
        cbsBlur.value = 5
        cbsSpread.value = 5
        cbsShadowColor.value = '#000000'
        cbsInset.value = 'no'

        cbsBox.style.boxShadow = '15px 15px 5px 5px #000000'
        cbsUpdateCode()


    }

}
