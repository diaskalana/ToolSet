import Toastify from 'toastify-js'
import '../css/HTMLButtonGenerator.css'

export function HTMLButtonGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="htmlBtnGenerator"><div class="htmlBtnGeneratorControls"><h4>Basic Configuration</h4><label for="hbgButtonText">Button Text:</label><input type="text" id="hbgButtonText"><label for="hbgButtonType">Button Type:</label><select name="hbgButtonType" id="hbgButtonType"><option value="button">button</option><option value="reset">reset</option><option value="submit">submit</option></select><label for="hbgButtonName">Button Name:</label><input type="text" id="hbgButtonName"><div class="hbgCheckboxes"><label for="hbgAutofocus"><input type="checkbox" id="hbgAutofocus">Autofocus</label><label for="hbgDisabled"><input type="checkbox" id="hbgDisabled">Disabled</label></div><div class="htmlBtnGeneratorOutput"><div class="htmlBtnGeneratorPreview"><button>Click Me</button></div><code class="htmlBtnGeneratorCode"></code><div class="htmlBtnGeneratorBtns"><button id="htmlBtnGeneratorReset">Reset</button><button id="htmlBtnGeneratorCopyCode">Copy Code</button></div></div></div><div class="htmlBtnGeneratorControls"><h4>CSS Style Configuration</h4><label for="hbgBtnTextColor">Button Text Color:</label><input type="color" id="hbgBtnTextColor"><label for="hbgBtnBackgroundColor">Button Background Color:</label><input type="color" id="hbgBtnBackgroundColor"><label for="hbgBtnFontSize">Button Font Size (px):</label><input placeholder="Enter pixel value" type="number" id="hbgBtnFontSize"><label for="hbgBtnBorderSize">Button Border Size (px):</label><input placeholder="Enter pixel value" type="number" id="hbgBtnBorderSize"><label for="hbgBtnBorderColor">Button Border Color:</label><input type="color" id="hbgBtnBorderColor"><label for="hbgBtnBorderRadius">Button Border Radius (px):</label><input placeholder="Enter pixel value" type="number" id="hbgBtnBorderRadius"><label for="hbgButtonPadding">Button Padding (px):</label><input type="text" id="hbgButtonPadding"><label for="hbgButtonMargin">Button Margin (px):</label><input type="text" id="hbgButtonMargin"></div><div class="htmlBtnGeneratorControls"><h4>Hover Style Configuration</h4><label for="hbgBtnHoverTextColor">Button Text Color:</label><input type="color" id="hbgBtnHoverTextColor"><label for="hbgBtnHoverBackgroundColor">Button Background Color:</label><input type="color" id="hbgBtnHoverBackgroundColor"><label for="hbgBtnHoverFontSize">Button Font Size (px):</label><input placeholder="Enter pixel value" type="number" id="hbgBtnHoverFontSize"><label for="hbgBtnHoverBorderSize">Button Border Size (px):</label><input placeholder="Enter pixel value" type="number" id="hbgBtnHoverBorderSize"><label for="hbgBtnHoverBorderColor">Button Border Color:</label><input type="color" id="hbgBtnHoverBorderColor"><label for="hbgBtnHoverBorderRadius">Button Border Radius (px):</label><input placeholder="Enter pixel value" type="number" id="hbgBtnHoverBorderRadius"><label for="hbgButtonHoverPadding">Button Padding (px):</label><input type="text" id="hbgButtonHoverPadding"><label for="hbgButtonHoverMargin">Button Margin (px):</label><input type="text" id="hbgButtonHoverMargin"></div></div>`

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const hbgControls = document.querySelectorAll('.htmlBtnGeneratorControls')

    const hbgButtonText = document.querySelector('#hbgButtonText')
    const hbgButtonType = document.querySelector('#hbgButtonType')
    const hbgButtonName = document.querySelector('#hbgButtonName')
    const hbgAutofocus = document.querySelector('#hbgAutofocus')
    const hbgDisabled = document.querySelector('#hbgDisabled')

    const hbgBtnTextColor = document.querySelector('#hbgBtnTextColor')
    const hbgBtnBackgroundColor = document.querySelector('#hbgBtnBackgroundColor')
    const hbgBtnFontSize = document.querySelector('#hbgBtnFontSize')
    const hbgBtnBorderSize = document.querySelector('#hbgBtnBorderSize')
    const hbgBtnBorderColor = document.querySelector('#hbgBtnBorderColor')
    const hbgBtnBorderRadius = document.querySelector('#hbgBtnBorderRadius')
    const hbgButtonPadding = document.querySelector('#hbgButtonPadding')
    const hbgButtonMargin = document.querySelector('#hbgButtonMargin')

    const hbgBtnHoverTextColor = document.querySelector('#hbgBtnHoverTextColor')
    const hbgBtnHoverBackgroundColor = document.querySelector('#hbgBtnHoverBackgroundColor')
    const hbgBtnHoverFontSize = document.querySelector('#hbgBtnHoverFontSize')
    const hbgBtnHoverBorderSize = document.querySelector('#hbgBtnHoverBorderSize')
    const hbgBtnHoverBorderColor = document.querySelector('#hbgBtnHoverBorderColor')
    const hbgBtnHoverBorderRadius = document.querySelector('#hbgBtnHoverBorderRadius')
    const hbgButtonHoverPadding = document.querySelector('#hbgButtonHoverPadding')
    const hbgButtonHoverMargin = document.querySelector('#hbgButtonHoverMargin')

    const hbgPreview = document.querySelector('.htmlBtnGeneratorPreview button')
    const hbgCode = document.querySelector('.htmlBtnGeneratorCode')

    const hbgBtnReset = document.querySelector('#htmlBtnGeneratorReset')
    const hbgBtnCopy = document.querySelector('#htmlBtnGeneratorCopyCode')

    let hbgTextColor, hbgBackgroundColor, hbgFontSize, hbgBorderSize, hbgBorderColor, hbgBorderRadius, hbgPadding, hbgMargin;

    hbgBtnReset.addEventListener('click', hbgResetFunc)
    hbgBtnCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(hbgCode.textContent);
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

    hbgResetFunc()

    hbgControls[0].addEventListener('input', (e) => {
        if (e.target.id == "hbgButtonText") {
            hbgPreview.innerText = e.target.value
        } else if (e.target.id == "hbgButtonType") {
            hbgPreview.type = e.target.value
        } else if (e.target.id == "hbgButtonName") {
            hbgPreview.name = e.target.value
        }
        hbgUpdateCode()
    })
    hbgControls[0].addEventListener('change', (e) => {
        if (e.target.id == "hbgAutofocus") {
            if (e.target.checked == true) {
                hbgPreview.setAttribute("autofocus", "")
            } else {
                hbgPreview.removeAttribute("autofocus")
            }
        } else if (e.target.id == "hbgDisabled") {
            if (e.target.checked == true) {
                hbgPreview.setAttribute("disabled", "")

            } else {
                hbgPreview.removeAttribute("disabled")

            }
        }
        hbgUpdateCode()
    })

    hbgControls[1].addEventListener('input', (e) => {
        if (e.target.id == "hbgBtnTextColor") {
            hbgPreview.style.color = e.target.value
            hbgTextColor = e.target.value
        } else if (e.target.id == "hbgBtnBackgroundColor") {
            hbgPreview.style.backgroundColor = e.target.value
            hbgBackgroundColor = e.target.value
        } else if (e.target.id == "hbgBtnFontSize") {
            hbgPreview.style.fontSize = `${e.target.value}px`
            hbgFontSize = `${e.target.value}px`
        } else if (e.target.id == "hbgBtnBorderSize") {
            hbgPreview.style.borderWidth = `${e.target.value}px`
            hbgBorderSize = `${e.target.value}px`
        } else if (e.target.id == "hbgBtnBorderColor") {
            hbgPreview.style.borderColor = e.target.value
            hbgBorderColor = e.target.value
        } else if (e.target.id == "hbgBtnBorderRadius") {
            hbgPreview.style.borderRadius = `${e.target.value}px`
            hbgBorderRadius = `${e.target.value}px`
        } else if (e.target.id == "hbgButtonPadding") {
            hbgPreview.style.padding = e.target.value
            hbgPadding = e.target.value
        } else if (e.target.id == "hbgButtonMargin") {
            hbgPreview.style.margin = e.target.value
            hbgMargin = e.target.value
        }
        hbgUpdateCode()
    })

    hbgControls[2].addEventListener('input', (event) => {
        if (event.target.id == "hbgBtnHoverTextColor") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.color = event.target.value
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.color = hbgTextColor
            })
        } else if (event.target.id == "hbgBtnHoverBackgroundColor") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.backgroundColor = event.target.value
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.backgroundColor = hbgBackgroundColor
            })
        } else if (event.target.id == "hbgBtnHoverFontSize") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.fontSize = `${event.target.value}px`
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.fontSize = hbgFontSize
            })
        } else if (event.target.id == "hbgBtnHoverBorderSize") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.borderWidth = `${event.target.value}px`
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.borderWidth = hbgBorderSize
            })
        } else if (event.target.id == "hbgBtnHoverBorderColor") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.borderColor = event.target.value
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.borderColor = hbgBorderColor
            })
        } else if (event.target.id == "hbgBtnHoverBorderRadius") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.borderRadius = `${event.target.value}px`
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.borderRadius = hbgBorderRadius
            })
        } else if (event.target.id == "hbgButtonHoverPadding") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.padding = event.target.value
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.padding = hbgPadding
            })
        } else if (event.target.id == "hbgButtonHoverMargin") {
            hbgPreview.addEventListener('mouseover', () => {
                hbgPreview.style.margin = event.target.value
            })
            hbgPreview.addEventListener('mouseout', () => {
                hbgPreview.style.margin = hbgMargin
            })
        }
        hbgUpdateCode()
    })

    function hbgUpdateCode() {
        hbgCode.textContent =
            `<!DOCTYPE html>
<html>
<head>
    <title>HTML Button Generator</title>
    <style>
        button {
            color: ${hbgBtnTextColor.value};
            background-color: ${hbgBtnBackgroundColor.value};
            font-size: ${hbgBtnFontSize.value}${(hbgBtnFontSize.value != '') ? 'px;' : ';'}
            border: ${hbgBtnBorderSize.value}${(hbgBtnBorderSize.value != '') ? 'px' : ''} solid ${hbgBtnBorderColor.value};
            border-radius:${hbgBtnBorderRadius.value}${(hbgBtnBorderRadius.value != '') ? 'px;' : ';'}
            padding: ${hbgButtonPadding.value};
            margin:${hbgButtonMargin.value};
            cursor: pointer
        }
        button:hover {
            color: ${hbgBtnHoverTextColor.value};
            background-color: ${hbgBtnHoverBackgroundColor.value};
            font-size: ${hbgBtnHoverFontSize.value}${(hbgBtnHoverFontSize.value != '') ? 'px;' : ';'}
            border: ${hbgBtnHoverBorderSize.value}${(hbgBtnHoverBorderSize.value != '') ? 'px' : ''} solid ${hbgBtnHoverBorderColor.value};
            border-radius:${hbgBtnHoverBorderRadius.value}${(hbgBtnHoverBorderRadius.value != '') ? 'px;' : ';'}
            padding: ${hbgButtonHoverPadding.value};
            margin:${hbgButtonHoverMargin.value};
        }
    </style>
</head>
<body>
    <button type="${hbgButtonType.value}" ${hbgAutofocus.checked ? 'autofocus' : ''} ${hbgDisabled.checked ? 'disabled' : ''} name="${hbgButtonName.value}">${hbgButtonText.value}</button>
</body>
</html>`

    }

    function hbgResetFunc() {
        modalTitle.textContent = 'HTML Button Generator'
        modalDescription.textContent = 'HTML button generator creates custom buttons visually. You can pick styles, colors, and sizes, and the tool generates the HTML and CSS code for easy use in web projects.'

        hbgButtonText.value = 'Click Me'
        hbgButtonType.value = 'button'
        hbgButtonName.value = 'button name'
        hbgAutofocus.checked = false
        hbgDisabled.checked = false

        hbgBtnTextColor.value = '#000000'
        hbgBtnBackgroundColor.value = '#faebd7'
        hbgBtnFontSize.value = 15
        hbgBtnBorderSize.value = 2
        hbgBtnBorderColor.value = '#000000'
        hbgBtnBorderRadius.value = 5
        hbgButtonPadding.value = '10px 20px'
        hbgButtonMargin.value = '5px 10px'

        hbgBtnHoverTextColor.value = '#ffffff'
        hbgBtnHoverBackgroundColor.value = '#000000'
        hbgBtnHoverFontSize.value = 15
        hbgBtnHoverBorderSize.value = 2
        hbgBtnHoverBorderColor.value = '#000000'
        hbgBtnHoverBorderRadius.value = 5
        hbgButtonHoverPadding.value = '10px 20px'
        hbgButtonHoverMargin.value = '5px 10px'

        hbgPreview.innerText = hbgButtonText.value
        hbgPreview.type = hbgButtonType.value
        hbgPreview.name = hbgButtonName.value
        hbgPreview.style.color = hbgBtnTextColor.value
        hbgTextColor = hbgBtnTextColor.value
        hbgPreview.style.backgroundColor = hbgBtnBackgroundColor.value
        hbgBackgroundColor = hbgBtnBackgroundColor.value
        hbgPreview.style.fontSize = `${hbgBtnFontSize.value}px`
        hbgFontSize = `${hbgBtnFontSize.value}px`
        hbgPreview.style.borderWidth = `${hbgBtnBorderSize.value}px`
        hbgBorderSize = `${hbgBtnBorderSize.value}px`
        hbgPreview.style.borderColor = hbgBtnBorderColor.value
        hbgBorderColor = hbgBtnBorderColor.value
        hbgPreview.style.borderRadius = `${hbgBtnBorderRadius.value}px`
        hbgBorderRadius = `${hbgBtnBorderRadius.value}px`
        hbgPreview.style.padding = hbgButtonPadding.value
        hbgPadding = hbgButtonPadding.value
        hbgPreview.style.margin = hbgButtonMargin.value
        hbgMargin = hbgButtonMargin.value

        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.color = hbgBtnHoverTextColor.value
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.color = hbgTextColor
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.backgroundColor = hbgBtnHoverBackgroundColor.value
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.backgroundColor = hbgBackgroundColor
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.fontSize = `${hbgBtnHoverFontSize.value}px`
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.fontSize = hbgFontSize
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.borderWidth = `${hbgBtnHoverBorderSize.value}px`
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.borderWidth = hbgBorderSize
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.borderColor = hbgBtnHoverBorderColor.value
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.borderColor = hbgBorderColor
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.borderRadius = `${hbgBtnHoverBorderRadius.value}px`
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.borderRadius = hbgBorderRadius
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.padding = hbgButtonHoverPadding.value
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.padding = hbgPadding
        })
        hbgPreview.addEventListener('mouseover', () => {
            hbgPreview.style.margin = hbgButtonHoverMargin.value
        })
        hbgPreview.addEventListener('mouseout', () => {
            hbgPreview.style.margin = hbgMargin
        })


        hbgUpdateCode()
    }
}