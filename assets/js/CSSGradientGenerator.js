export function CSSGradientGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="cssGradientGenerator"><div class="cssGradientGeneratorControls"><h4>CSS Style Configuration</h4><label for="cggPrimaryColor">Primary Color:</label><input type="color" id="cggPrimaryColor"><label for="cggSecondaryColor">Secondary Color:</label><input type="color" id="cggSecondaryColor"><label for="cggGradientType">Gradient Type:</label><select name="cggGradientType" id="cggGradientType"><option value="linear-gradient">Linear Gradient</option><option value="radial-gradient">Radial Gradient</option></select><label for="cggLinearGradientDirection">Direction:</label><select name="cggLinearGradientDirection" id="cggLinearGradientDirection"><option value="180deg">↓ Top to Bottom</option><option value="225deg">↙ Top-Right to Bottom-Left</option><option value="270deg">← Right to Left</option><option value="315deg">↖ Bottom-Right to Top-Left</option><option value="0deg">↑ Bottom to Top</option><option value="45deg">↗ Bottom-Left to Top-Right</option><option value="90deg">→ Left to Right</option><option value="135deg">↘ Top-Left to Bottom-Right</option></select><label for="cggRadialGradientDirection">Direction:</label><select name="cggRadialGradientDirection" id="cggRadialGradientDirection"><option value="center">Center</option><option value="top">Top</option><option value="right top">Top-Right</option><option value="right">Right</option><option value="right bottom">Bottom-Right</option><option value="bottom">Bottom</option><option value="left bottom">Bottom-Left</option><option value="left">Left</option><option value="left top">Top-Left</option></select></div><div class="cssGradientGeneratorOutput"><div class="cssGradientGeneratorPreview"></div><code class="cssGradientGeneratorCode"></code><div class="cssGradientGeneratorBtns"><button id="cssGradientGeneratorReset">Reset</button><button id="cssGradientGeneratorCopyCode">Copy Code</button></div></div></div>`

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const cggPrimaryColor = document.querySelector('#cggPrimaryColor')
    const cggSecondaryColor = document.querySelector('#cggSecondaryColor')
    const cggGradientType = document.querySelector('#cggGradientType')
    const cggLinearGradientDirection = document.querySelector('#cggLinearGradientDirection')
    const cggLinearGradientDirectionLabel = document.querySelector('label[for="cggLinearGradientDirection"]')
    const cggRadialGradientDirection = document.querySelector('#cggRadialGradientDirection')
    const cggRadialGradientDirectionLabel = document.querySelector('label[for="cggRadialGradientDirection"]')

    const cssGradientGeneratorCode = document.querySelector('.cssGradientGeneratorCode')
    const cssGradientGeneratorReset = document.querySelector('#cssGradientGeneratorReset')
    const cssGradientGeneratorCopyCode = document.querySelector('#cssGradientGeneratorCopyCode')
    const cssGradientGeneratorControls = document.querySelector('.cssGradientGeneratorControls')
    const cssGradientGeneratorPreview = document.querySelector('.cssGradientGeneratorPreview')

    cggResetFunc()

    cssGradientGeneratorReset.addEventListener('click', cggResetFunc)
    cssGradientGeneratorCopyCode.addEventListener('click', () => {
        navigator.clipboard.writeText(cssGradientGeneratorCode.textContent);
        alert("Code Copied!")
    })

    function cggUpdateOption() {
        if (cggGradientType.value == 'linear-gradient') {
            cggLinearGradientDirection.style.display = 'block'
            cggLinearGradientDirectionLabel.style.display = 'block'

            cggRadialGradientDirection.style.display = 'none'
            cggRadialGradientDirectionLabel.style.display = 'none'
        } else {
            cggLinearGradientDirection.style.display = 'none'
            cggLinearGradientDirectionLabel.style.display = 'none'

            cggRadialGradientDirection.style.display = 'block'
            cggRadialGradientDirectionLabel.style.display = 'block'
        }

    }
    function cggUpdateCode() {
        cssGradientGeneratorCode.textContent = `background: ${cggGradientType.value}(${cggGradientType.value == 'radial-gradient' ? 'circle at' : ''} ${cggGradientType.value == 'radial-gradient' ? cggRadialGradientDirection.value : cggLinearGradientDirection.value}, ${cggPrimaryColor.value} ${cggGradientType.value == 'linear-gradient' ? '0%' : ''}, ${cggSecondaryColor.value} ${cggGradientType.value == 'linear-gradient' ? '100%' : ''})`
    }

    function cggResetFunc() {
        modalTitle.textContent = 'CSS Gradient Generator'
        modalDescription.textContent = 'CSS gradient generator simplifies creating color blends for web design. You  can visually select colors, style (linear or radial), direction, and other parameters. The tool instantly generates CSS code representing the chosen gradient, which you can copy and paste directly into your web projects to achieve custom gradient effects without the need for manual coding.'

        cggPrimaryColor.value = '#b1d48f'
        cggSecondaryColor.value = '#b28fd3'
        cggGradientType.value = 'linear-gradient'
        cggLinearGradientDirection.value = '180deg'
        cggRadialGradientDirection.value = 'center'

        cssGradientGeneratorPreview.style.background = 'linear-gradient(180deg, #b1d48f 0%, #b28fd3 100%)'

        cggUpdateCode()
        cggUpdateOption()
    }

    cssGradientGeneratorControls.addEventListener('input', () => {
        cggUpdateCode()
        cggUpdateOption()
        cssGradientGeneratorPreview.setAttribute('style', cssGradientGeneratorCode.textContent)
    })
}