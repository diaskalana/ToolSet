import Toastify from 'toastify-js'
import '../css/HTMLInputGenerator.css'


export function HTMLInputGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="htmlInputGenerator"><div class="htmlInputGeneratorContainer"><div class="htmlInputGeneratorControls"><h4>Basic Configuration</h4><label for="higName">Name:</label><input id="higName" type="text"><label for="higClassName">Class Name(s):</label><input id="higClassName" type="text"><label for="higIdName">ID Name:</label><input id="higIdName" type="text"><label for="higType">Input Type:</label><select name="higType" id="higType"><option value="color">color</option><option value="date">date</option><option value="email">email</option><option value="file">file</option><option value="image">image</option><option value="number">number</option><option value="password">password</option><option value="search">search</option><option value="submit">submit</option><option value="tel">telephone</option><option value="text">text</option><option value="url">url</option></select></div><div class="htmlInputGeneratorPreview"><input></div></div><div class="htmlInputGeneratorControls"><h4>CSS Style Configuration</h4><label for="higPadding">Padding (px):</label><input id="higPadding" placeholder="Enter pixel value" type="text"><label for="higBgColor">Background Color:</label><input id="higBgColor" type="color"><label for="higTextColor">Text Color:</label><input id="higTextColor" type="color"><label for="higBorderWidth">Border Width (px):</label><input type="number" placeholder="Enter pixel value" id="higBorderWidth"><label for="higBorderColor">Border Color:</label><input type="color" id="higBorderColor"><label for="higBorderStyle">Border Style:</label><select name="higBorderStyle" id="higBorderStyle"><option value="none">none</option><option value="solid">solid</option><option value="dotted">dotted</option><option value="dashed">dashed</option><option value="double">double</option><option value="groove">groove</option><option value="ridge">ridge</option><option value="inset">inset</option><option value="outset">outset</option></select><label for="higBorderRadius">Border Radius (px):</label><input type="number" placeholder="Enter pixel value" id="higBorderRadius"></div><div class="htmlInputGeneratorOutput"><div class="htmlInputGeneratorSubControls"><h4>Additional Configuration</h4><div class="higTypeColor higTypeSelections"><label for="higTypeColorDefaultColor">Choose Color:</label><input id="higTypeColorDefaultColor" type="color"></div><div class="higTypeDate higTypeSelections"><label for="higTypeDateType">Type:</label><select id="higTypeDateType" name="higTypeDateType"><option value="date">date</option><option value="datetime-local">datetime-local</option><option value="month">month</option><option value="time">time</option><option value="week">week</option></select></div><div class="higTypeEmail higTypeSelections"><label for="higTypeEmailPlaceholder">Placeholder:</label><input id="higTypeEmailPlaceholder" type="text"><div class="higCheckboxes"><label for="higTypeEmailRequired"><input type="checkbox" id="higTypeEmailRequired">Required</label><label for="higTypeEmailMultiple"><input type="checkbox" id="higTypeEmailMultiple">Multiple Email(separated by comma)</label></div></div><div class="higTypeFile higTypeSelections"><div class="higCheckboxes"><label for="higTypeFileRequired"><input type="checkbox" id="higTypeFileRequired">Required</label><label for="higTypeFileMultiple"><input type="checkbox" id="higTypeFileMultiple">Multiple Files</label></div></div><div class="higTypeImage higTypeSelections"><label for="higTypeImageUrl">Image URL:</label><input id="higTypeImageUrl" type="url"><div class="higCheckboxes"><label for="higTypeImageAutofocus"><input type="checkbox" id="higTypeImageAutofocus">Autofocus</label></div><label for="higTypeImageAltText">Alt Text:</label><input id="higTypeImageAltText" type="text"><label for="higTypeImageHeight">Height:</label><input id="higTypeImageHeight" type="number" placeholder="Enter pixel value"><label for="higTypeImageWidth">Width:</label><input id="higTypeImageWidth" type="number" placeholder="Enter pixel value"></div><div class="higTypeNumber higTypeSelections"><label for="higTypeNumberPlaceholder">Placeholder:</label><input id="higTypeNumberPlaceholder" type="text"><div class="higCheckboxes"><label for="higTypeNumberRequired"><input type="checkbox" id="higTypeNumberRequired">Required</label></div><label for="higTypeNumberValue">Value:</label><input id="higTypeNumberValue" type="number"><label for="higTypeNumberMin">Minimum Value:</label><input id="higTypeNumberMin" type="number"><label for="higTypeNumberMax">Maximum Value:</label><input id="higTypeNumberMax" type="number"><label for="higTypeNumberStep">Step:</label><input id="higTypeNumberStep" type="number"></div><div class="higTypePassword higTypeSelections"><label for="higTypePasswordPlaceholder">Placeholder:</label><input id="higTypePasswordPlaceholder" type="text"><div class="higCheckboxes"><label for="higTypePasswordRequired"><input type="checkbox" id="higTypePasswordRequired">Required</label></div></div><div class="higTypeSearch higTypeSelections"><label for="higTypeSearchPlaceholder">Placeholder:</label><input id="higTypeSearchPlaceholder" type="text"><div class="higCheckboxes"><label for="higTypeSearchRequired"><input type="checkbox" id="higTypeSearchRequired">Required</label><label for="higTypeSearchAutocomplete"><input type="checkbox" id="higTypeSearchAutocomplete">Autocomplete</label><label for="higTypeSearchSpellcheck"><input type="checkbox" id="higTypeSearchSpellcheck">Spellcheck</label></div></div><div class="higTypeSubmit higTypeSelections"><div class="higCheckboxes"><label for="higTypeSubmitAutofocus"><input type="checkbox" id="higTypeSubmitAutofocus">Autofocus</label><label for="higTypeSubmitDisabled"><input type="checkbox" id="higTypeSubmitDisabled">Disabled</label></div></div><div class="higTypeTel higTypeSelections"><label for="higTypeTelPlaceholder">Placeholder:</label><input id="higTypeTelPlaceholder" type="text"><div class="higCheckboxes"><label for="higTypeTelRequired"><input type="checkbox" id="higTypeTelRequired">Required</label></div></div><div class="higTypeText higTypeSelections"><label for="higTypeTextPlaceholder">Placeholder:</label><input id="higTypeTextPlaceholder" type="text"><div class="higCheckboxes"><label for="higTypeTextRequired"><input type="checkbox" id="higTypeTextRequired">Required</label><label for="higTypeTextSpellcheck"><input type="checkbox" id="higTypeTextSpellcheck">Spellcheck</label></div></div><div class="higTypeUrl higTypeSelections"><label for="higTypeUrlPlaceholder">Placeholder:</label><input id="higTypeUrlPlaceholder" type="text"><label for="higTypeUrlPattern">Pattern:</label><input id="higTypeUrlPattern" type="text"><div class="higCheckboxes"><label for="higTypeUrlRequired"><input type="checkbox" id="higTypeUrlRequired">Required</label></div></div></div><code class="htmlInputGeneratorCode"></code><div class="htmlInputGeneratorBtns"><button id="htmlInputGeneratorReset">Reset</button><button id="htmlInputGeneratorCopyCode">Copy Code</button></div></div></div>`


    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const htmlInputGeneratorControls = document.querySelectorAll('.htmlInputGeneratorControls')
    const htmlInputGeneratorSubControls = document.querySelector('.htmlInputGeneratorSubControls')
    const higInput = document.querySelector('.htmlInputGeneratorPreview input')
    const higPreview = document.querySelector('.htmlInputGeneratorPreview')

    const htmlInputGeneratorCode = document.querySelector('.htmlInputGeneratorCode')
    const htmlInputGeneratorReset = document.querySelector('#htmlInputGeneratorReset')
    const htmlInputGeneratorCopyCode = document.querySelector('#htmlInputGeneratorCopyCode')


    const higName = document.querySelector('#higName')
    const higClassName = document.querySelector('#higClassName')
    const higIdName = document.querySelector('#higIdName')
    const higType = document.querySelector('#higType')
    const higPadding = document.querySelector('#higPadding')
    const higBgColor = document.querySelector('#higBgColor')
    const higTextColor = document.querySelector('#higTextColor')
    const higBorderColor = document.querySelector('#higBorderColor')
    const higBorderWidth = document.querySelector('#higBorderWidth')
    const higBorderStyle = document.querySelector('#higBorderStyle')
    const higBorderRadius = document.querySelector('#higBorderRadius')

    const higTypeColor = document.querySelector('.higTypeColor')
    const higTypeDate = document.querySelector('.higTypeDate')
    const higTypeEmail = document.querySelector('.higTypeEmail')
    const higTypeFile = document.querySelector('.higTypeFile')
    const higTypeImage = document.querySelector('.higTypeImage')
    const higTypeNumber = document.querySelector('.higTypeNumber')
    const higTypePassword = document.querySelector('.higTypePassword')
    const higTypeSearch = document.querySelector('.higTypeSearch')
    const higTypeSubmit = document.querySelector('.higTypeSubmit')
    const higTypeTel = document.querySelector('.higTypeTel')
    const higTypeText = document.querySelector('.higTypeText')
    const higTypeUrl = document.querySelector('.higTypeUrl')

    // Type Color Properties
    const higTypeColorDefaultColor = document.querySelector('#higTypeColorDefaultColor')

    // Type Date Properties
    const higTypeDateType = document.querySelector('#higTypeDateType')

    // Type Email Properties
    const higTypeEmailPlaceholder = document.querySelector('#higTypeEmailPlaceholder')
    const higTypeEmailRequired = document.querySelector('#higTypeEmailRequired')
    const higTypeEmailMultiple = document.querySelector('#higTypeEmailMultiple')

    // Type File Properties
    const higTypeFileRequired = document.querySelector('#higTypeFileRequired')
    const higTypeFileMultiple = document.querySelector('#higTypeFileMultiple')

    // Type Image Properties
    const higTypeImageUrl = document.querySelector('#higTypeImageUrl')
    const higTypeImageAutofocus = document.querySelector('#higTypeImageAutofocus')
    const higTypeImageAltText = document.querySelector('#higTypeImageAltText')
    const higTypeImageHeight = document.querySelector('#higTypeImageHeight')
    const higTypeImageWidth = document.querySelector('#higTypeImageWidth')

    // Type Number Properties
    const higTypeNumberPlaceholder = document.querySelector('#higTypeNumberPlaceholder')
    const higTypeNumberRequired = document.querySelector('#higTypeNumberRequired')
    const higTypeNumberValue = document.querySelector('#higTypeNumberValue')
    const higTypeNumberMin = document.querySelector('#higTypeNumberMin')
    const higTypeNumberMax = document.querySelector('#higTypeNumberMax')
    const higTypeNumberStep = document.querySelector('#higTypeNumberStep')

    // Type Password Properties
    const higTypePasswordPlaceholder = document.querySelector('#higTypePasswordPlaceholder')
    const higTypePasswordRequired = document.querySelector('#higTypePasswordRequired')

    // Type Search Properties
    const higTypeSearchPlaceholder = document.querySelector('#higTypeSearchPlaceholder')
    const higTypeSearchRequired = document.querySelector('#higTypeSearchRequired')
    const higTypeSearchAutocomplete = document.querySelector('#higTypeSearchAutocomplete')
    const higTypeSearchSpellcheck = document.querySelector('#higTypeSearchSpellcheck')

    // Type Submit Properties
    const higTypeSubmitAutofocus = document.querySelector('#higTypeSubmitAutofocus')
    const higTypeSubmitDisabled = document.querySelector('#higTypeSubmitDisabled')

    // Type tel Properties
    const higTypeTelPlaceholder = document.querySelector('#higTypeTelPlaceholder')
    const higTypeTelRequired = document.querySelector('#higTypeTelRequired')


    // Type Text Properties
    const higTypeTextPlaceholder = document.querySelector('#higTypeTextPlaceholder')
    const higTypeTextRequired = document.querySelector('#higTypeTextRequired')
    const higTypeTextSpellcheck = document.querySelector('#higTypeTextSpellcheck')

    // Type URL Properties
    const higTypeUrlPlaceholder = document.querySelector('#higTypeUrlPlaceholder')
    const higTypeUrlPattern = document.querySelector('#higTypeUrlPattern')
    const higTypeUrlRequired = document.querySelector('#higTypeUrlRequired')

    htmlInputGeneratorReset.addEventListener('click', higResetFunc)
    htmlInputGeneratorCopyCode.addEventListener('click', () => {
        navigator.clipboard.writeText(htmlInputGeneratorCode.textContent);
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

    higResetFunc()

    function higInputType() {
        if (higType.value == 'color') {
            removeSections()
            higTypeColor.style.display = 'block'
            higInput.setAttribute('value', higTypeColorDefaultColor.value)
        } else if (higType.value == 'date') {
            removeSections()
            higTypeDate.style.display = 'block'
            higInput.setAttribute('type', higTypeDateType.value)
        } else if (higType.value == 'email') {
            removeSections()
            higTypeEmail.style.display = 'block'
            if (higTypeEmailRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }
            if (higTypeEmailMultiple.checked == true) {
                higInput.setAttribute('multiple', '')
            } else {
                higInput.removeAttribute('multiple')
            }
            higInput.setAttribute('placeholder', higTypeEmailPlaceholder.value)
        } else if (higType.value == 'file') {
            removeSections()
            higTypeFile.style.display = 'block'
            if (higTypeFileRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }
            if (higTypeFileMultiple.checked == true) {
                higInput.setAttribute('multiple', '')
            } else {
                higInput.removeAttribute('multiple')
            }
        } else if (higType.value == 'image') {
            removeSections()
            higTypeImage.style.display = 'block'
            higInput.setAttribute('src', higTypeImageUrl.value)
            higInput.setAttribute('alt', higTypeImageAltText.value)
            higInput.setAttribute('height', higTypeImageHeight.value)
            higInput.setAttribute('width', higTypeImageWidth.value)
            if (higTypeImageAutofocus.checked == true) {
                higInput.setAttribute('autofocus', '')
            } else {
                higInput.removeAttribute('autofocus')
            }


        } else if (higType.value == 'number') {
            removeSections()
            higTypeNumber.style.display = 'block'
            higInput.setAttribute('placeholder', higTypeNumberPlaceholder.value)
            higInput.setAttribute('value', higTypeNumberValue.value)
            higInput.setAttribute('min', higTypeNumberMin.value)
            higInput.setAttribute('max', higTypeNumberMax.value)
            higInput.setAttribute('step', higTypeNumberStep.value)
            if (higTypeNumberRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }

        } else if (higType.value == 'password') {
            removeSections()
            higTypePassword.style.display = 'block'
            higInput.setAttribute('placeholder', higTypePasswordPlaceholder.value)
            if (higTypePasswordRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }
        } else if (higType.value == 'search') {
            removeSections()
            higTypeSearch.style.display = 'block'
            higInput.setAttribute('placeholder', higTypeSearchPlaceholder.value)
            if (higTypeSearchRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }
            if (higTypeSearchAutocomplete.checked == true) {
                higInput.setAttribute('autocomplete', 'on')
            } else {
                higInput.setAttribute('autocomplete', 'off')
            }
            if (higTypeSearchSpellcheck.checked == true) {
                higInput.setAttribute('spellcheck', 'true')
            } else {
                higInput.setAttribute('spellcheck', 'false')
            }

        } else if (higType.value == 'submit') {
            removeSections()
            higTypeSubmit.style.display = 'block'
            if (higTypeSubmitAutofocus.checked == true) {
                higInput.setAttribute('autofocus', '')
            } else {
                higInput.removeAttribute('autofocus')
            }
            if (higTypeSubmitDisabled.checked == true) {
                higInput.setAttribute('disabled', '')
            } else {
                higInput.removeAttribute('disabled')
            }
        } else if (higType.value == 'tel') {
            removeSections()
            higTypeTel.style.display = 'block'
            higInput.setAttribute('placeholder', higTypeTelPlaceholder.value)
            if (higTypeTelRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }
        } else if (higType.value == 'text') {
            removeSections()
            higTypeText.style.display = 'block'
            higInput.setAttribute('placeholder', higTypeTextPlaceholder.value)
            if (higTypeTextSpellcheck.checked == true) {
                higInput.setAttribute('spellcheck', 'true')
            } else {
                higInput.setAttribute('spellcheck', 'false')
            }
            if (higTypeTextRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }

        } else if (higType.value == 'url') {
            removeSections()
            higTypeUrl.style.display = 'block'
            higInput.setAttribute('placeholder', higTypeUrlPlaceholder.value)
            higInput.setAttribute('pattern', higTypeUrlPattern.value)

            if (higTypeUrlRequired.checked == true) {
                higInput.setAttribute('required', '')
            } else {
                higInput.removeAttribute('required')
            }
        }
    }

    function removeSections() {
        higTypeColor.style.display = 'none'
        higTypeDate.style.display = 'none'
        higTypeEmail.style.display = 'none'
        higTypeFile.style.display = 'none'
        higTypeImage.style.display = 'none'
        higTypeNumber.style.display = 'none'
        higTypePassword.style.display = 'none'
        higTypeSearch.style.display = 'none'
        higTypeSubmit.style.display = 'none'
        higTypeTel.style.display = 'none'
        higTypeText.style.display = 'none'
        higTypeUrl.style.display = 'none'


    }

    function updateProperties() {
        higInput.setAttribute('type', higType.value)
        higInput.setAttribute('id', higIdName.value)
        higInput.setAttribute('class', higClassName.value)
        higInput.setAttribute('name', higName.value)

        higInput.setAttribute('style', `color: ${higTextColor.value}; ${(higPadding.value != '') ? 'padding:' : ''} ${higPadding.value}${(higPadding.value != '') ? ';' : ''} background-color: ${higBgColor.value}; border: ${higBorderWidth.value}${(higBorderWidth.value != '') ? 'px' : ''} ${higBorderColor.value} ${higBorderStyle.value}; ${(higBorderRadius.value != '') ? 'border-radius:' : ''} ${higBorderRadius.value}${(higBorderRadius.value != '') ? 'px;' : ''} width:100%; box-sizing: border-box;`)

        if (higIdName.value == '') {
            higInput.removeAttribute('id')
        }
        if (higClassName.value == '') {
            higInput.removeAttribute('class')
        }
        if (higName.value == '') {
            higInput.removeAttribute('name')
        }

    }

    function higUpdateCode() {
        htmlInputGeneratorCode.textContent =
            `<!DOCTYPE html>
<html>
<head>
    <title>HTML Input Generator</title>
</head>
<body>
    ${higPreview.innerHTML}
</body>
</html>`
    }

    function higResetFunc() {
        modalTitle.textContent = 'HTML Input Generator'
        modalDescription.textContent = 'HTML input generator simplifies the creation of input elements for web forms. You can customize attributes like type, name, and placeholder, and the tool instantly generates the corresponding HTML code. This saves time and effort compared to manual coding.'

        higInput.value = ''

        higName.value = 'inputField'
        higClassName.value = 'inputClass'
        higIdName.value = 'inputId'
        higType.value = 'text'
        higPadding.value = '5px 5px'
        higBgColor.value = '#ffffff'
        higTextColor.value = '#000000'
        higBorderColor.value = '#000000'
        higBorderWidth.value = 2
        higBorderStyle.value = 'solid'
        higBorderRadius.value = 5

        higTypeColorDefaultColor.value = '#000000'

        higTypeDateType.value = 'date'

        higTypeEmailPlaceholder.value = 'Enter email'
        higTypeEmailRequired.checked = true
        higTypeEmailMultiple.checked = true

        higTypeFileRequired.checked = true
        higTypeFileMultiple.checked = true

        higTypeImageUrl.value = 'https://placehold.co/600x400'
        higTypeImageAutofocus.checked = true
        higTypeImageAltText.value = 'image input'
        higTypeImageHeight.value = 5
        higTypeImageWidth.value = 5

        higTypeNumberPlaceholder.value = 'Enter number'
        higTypeNumberRequired.checked = true
        higTypeNumberValue.value = 100
        higTypeNumberMin.value = 1
        higTypeNumberMax.value = 1000
        higTypeNumberStep.value = 1

        higTypePasswordPlaceholder.value = 'Enter password'
        higTypePasswordRequired.checked = true

        higTypeSearchPlaceholder.value = 'Enter search'
        higTypeSearchRequired.checked = true
        higTypeSearchAutocomplete.checked = true
        higTypeSearchSpellcheck.checked = true

        higTypeSubmitAutofocus.checked = true
        higTypeSubmitDisabled.checked = true

        higTypeTelPlaceholder.value = 'Enter telephone number'
        higTypeTelRequired.checked = true

        higTypeTextPlaceholder.value = 'Enter text'
        higTypeTextRequired.checked = true
        higTypeTextSpellcheck.checked = true

        higTypeUrlPlaceholder.value = 'Enter url'
        higTypeUrlPattern.value = 'https://*'
        higTypeUrlRequired.checked = true

        updateProperties()
        higInputType()
        higUpdateCode()
    }

    htmlInputGeneratorControls[0].addEventListener('input', () => {
        higInputType()
        updateProperties()
        higUpdateCode()
    })
    htmlInputGeneratorControls[1].addEventListener('input', () => {
        higInputType()
        updateProperties()
        higUpdateCode()
    })
    htmlInputGeneratorSubControls.addEventListener('input', () => {
        updateProperties()
        higInputType()
        higUpdateCode()
    })
    htmlInputGeneratorSubControls.addEventListener('change', () => {
        updateProperties()
        higInputType()
        higUpdateCode()
    })
    higType.addEventListener('input', () => {
        while (higInput.attributes.length > 0) {
            higInput.removeAttribute(higInput.attributes[0].name);
        }
        higInput.value = ''
        updateProperties()
    })
}