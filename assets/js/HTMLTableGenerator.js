import Toastify from 'toastify-js'

export function HTMLTableGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="htmlTableGenerator"><div class="htmlTableGeneratorControls"><h4>Basic Configuration</h4><div class="htmlTableGeneratorBasicControls"><label for="htgColumns">Columns:</label><input min="1" type="number" id="htgColumns"><label for="htgRows">Rows:</label><input min="1" type="number" id="htgRows"></div><h4>CSS Style Configuration</h4><label for="htgTextAlign">Text-Align:</label><select name="htgTextAlign" id="htgTextAlign"><option value="left">Left</option><option value="center">Center</option><option value="right">Right</option></select><label for="htgPadding">Padding  (px):</label><input placeholder="Enter pixel value" type="number" id="htgPadding"><label for="htgHeaderBackgroundColor">Header Background-Color:</label><input type="color" id="htgHeaderBackgroundColor"><label for="htgBodyBackgroundColor">Body Background-Color:</label><input type="color" id="htgBodyBackgroundColor"><label for="htgHeaderFontColor">Header Font-Color:</label><input type="color" id="htgHeaderFontColor"><label for="htgBodyFontColor">Body Font-Color:</label><input type="color" id="htgBodyFontColor"><label for="htgBorderColor">Border-Color:</label><input type="color" id="htgBorderColor"></div><div class="htmlTableGeneratorOutput"><div class="htmlTableGeneratorPreview"><table></table></div><h4>Border Style Configuration</h4><div class="modalControlsSubContainer"><label for="htgBorderCollapse">Border-Collapse:<br><p></p><select name="htgBorderCollapse" id="htgBorderCollapse"><option value="collapse">Collapse</option><option value="separate">Separate</option></select></label><label for="htgBorderSpacing">Border-Spacing (px):<br><p></p><input placeholder="Enter pixel value" type="number" id="htgBorderSpacing"></label></div><div class="modalControlsSubContainer"><label for="htgBorderStyle">Border-Style:<br><p></p><select name="htgBorderStyle" id="htgBorderStyle"><option value="none">none</option><option value="solid">solid</option><option value="dotted">dotted</option><option value="dashed">dashed</option><option value="double">double</option><option value="groove">groove</option><option value="ridge">ridge</option><option value="inset">inset</option><option value="outset">outset</option></select></label><label for="htgBorderWidth">Border-Width (px):<br><p></p><input placeholder="Enter pixel value" type="number" id="htgBorderWidth"></label></div><code class="htmlTableGeneratorCode"></code><div class="htmlTableGeneratorBtns"><button id="htmlTableGeneratorReset">Reset</button><button id="htmlTableGeneratorCopyCode">Copy Code</button></div></div></div>`

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const htgColumns = document.querySelector('#htgColumns')
    const htgRows = document.querySelector('#htgRows')
    const htgTextAlign = document.querySelector('#htgTextAlign')
    const htgPadding = document.querySelector('#htgPadding')
    const htgHeaderBackgroundColor = document.querySelector('#htgHeaderBackgroundColor')
    const htgBodyBackgroundColor = document.querySelector('#htgBodyBackgroundColor')
    const htgHeaderFontColor = document.querySelector('#htgHeaderFontColor')
    const htgBodyFontColor = document.querySelector('#htgBodyFontColor')
    const htgBorderColor = document.querySelector('#htgBorderColor')
    const htgBorderCollapse = document.querySelector('#htgBorderCollapse')
    const htgBorderSpacing = document.querySelector('#htgBorderSpacing')
    const htgBorderStyle = document.querySelector('#htgBorderStyle')
    const htgBorderWidth = document.querySelector('#htgBorderWidth')

    const htmlTableGeneratorControls = document.querySelector('.htmlTableGeneratorControls')
    const htmlTableGeneratorBasicControls = document.querySelector('.htmlTableGeneratorBasicControls')
    const htmlTableGeneratorOutput = document.querySelector('.htmlTableGeneratorOutput')
    const htmlTableGeneratorCode = document.querySelector('.htmlTableGeneratorCode')
    const htmlTableGeneratorReset = document.querySelector('#htmlTableGeneratorReset')
    const htmlTableGeneratorCopyCode = document.querySelector('#htmlTableGeneratorCopyCode')
    const htgTable = document.querySelector('.htmlTableGeneratorPreview table')

    htgResetFunc()

    htmlTableGeneratorReset.addEventListener('click', htgResetFunc)
    htmlTableGeneratorCopyCode.addEventListener('click', () => {
        navigator.clipboard.writeText(htmlTableGeneratorCode.textContent);
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


    function htgUpdateColRow() {
        htgTable.innerHTML = `<thead>
            <tr>
                ${(`<th>Header</th>`).repeat(htgColumns.value)}
            </tr>
        </thead>
        <tbody>
            ${((`<tr>${(`<td>&nbsp;</td>`).repeat(htgColumns.value)}</tr>`).repeat(htgRows.value))}   
        </tbody>`

    }

    function htgUpdateStyle() {
        const htgTableTh = document.querySelectorAll('.htmlTableGeneratorPreview table th')
        const htgTableTd = document.querySelectorAll('.htmlTableGeneratorPreview table td')

        htgTable.style.border = `${htgBorderWidth.value}${(htgBorderWidth.value != '') ? 'px' : ''} ${htgBorderStyle.value} ${htgBorderColor.value}`
        htgTable.style.borderCollapse = htgBorderCollapse.value
        htgTable.style.borderSpacing = `${htgBorderSpacing.value}px`
        htgTable.style.padding = `${htgPadding.value}px`

        htgTableTh.forEach((i) => {
            i.setAttribute('style', `border: ${htgBorderWidth.value}${(htgBorderWidth.value != '') ? 'px' : ''} ${htgBorderStyle.value} ${htgBorderColor.value};
        padding: ${htgPadding.value}${(htgPadding.value != '') ? 'px;' : ';'}
        background: ${htgHeaderBackgroundColor.value};
        color: ${htgHeaderFontColor.value};`)
        })
        htgTableTd.forEach((i) => {
            i.setAttribute('style', `border: ${htgBorderWidth.value}${(htgBorderWidth.value != '') ? 'px' : ''} ${htgBorderStyle.value} ${htgBorderColor.value};
        padding: ${htgPadding.value}${(htgPadding.value != '') ? 'px;' : ';'}
        text-align: ${htgTextAlign.value};
        background: ${htgBodyBackgroundColor.value};
        color: ${htgBodyFontColor.value};`)
        })
    }

    function htgUpdateCode() {
        htmlTableGeneratorCode.textContent =
            `<!DOCTYPE html>
<html>
<head>
    <title>HTML Table Generator</title> 
    <style>
        table {
            border: ${htgBorderWidth.value}${(htgBorderWidth.value != '') ? 'px' : ''} ${htgBorderStyle.value} ${htgBorderColor.value};
            border-collapse: ${htgBorderCollapse.value};
            border-spacing: ${htgBorderSpacing.value}${(htgBorderSpacing.value != '') ? 'px;' : ';'}
            padding: ${htgPadding.value}${(htgPadding.value != '') ? 'px;' : ';'}
        }
        table th {
            border: ${htgBorderWidth.value}${(htgBorderWidth.value != '') ? 'px' : ''} ${htgBorderStyle.value} ${htgBorderColor.value};
            padding: ${htgPadding.value}${(htgPadding.value != '') ? 'px;' : ';'}
            background: ${htgHeaderBackgroundColor.value};
            color: ${htgHeaderFontColor.value};
        }
        table td {
            border: ${htgBorderWidth.value}${(htgBorderWidth.value != '') ? 'px' : ''} ${htgBorderStyle.value} ${htgBorderColor.value};
            text-align: ${htgTextAlign.value};
            padding: ${htgPadding.value}${(htgPadding.value != '') ? 'px;' : ';'}
            background: ${htgBodyBackgroundColor.value};
            color: ${htgBodyFontColor.value};
        }
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                ${(`<th>Header</th>`).repeat(htgColumns.value)}
            </tr>
        </thead>
        <tbody>
            ${((`<tr>${(`<td>&nbsp;</td>`).repeat(htgColumns.value)}</tr>`).repeat(htgRows.value))}   
        </tbody>
    </table>
</body>
</html>`
    }

    function htgResetFunc() {
        modalTitle.textContent = 'HTML Table Generator'
        modalDescription.textContent = 'HTML table generator simplifies the creation of HTML tables by offering a user-friendly interface for designing tables visually. You can customize rows, columns, and formatting options without manually coding. The tool then generates the HTML code for easy integration into web pages.'

        htgColumns.value = 4
        htgRows.value = 4
        htgTextAlign.value = 'center'
        htgPadding.value = 5
        htgHeaderBackgroundColor.value = '#f0f0f0'
        htgBodyBackgroundColor.value = '#ffffff'
        htgHeaderFontColor.value = '#313030'
        htgBodyFontColor.value = '#313030'
        htgBorderColor.value = '#b3adad'
        htgBorderCollapse.value = 'collapse'
        htgBorderSpacing.value = 0
        htgBorderStyle.value = 'solid'
        htgBorderWidth.value = 1

        htgUpdateColRow()
        htgUpdateCode()
        htgUpdateStyle()

    }
    htmlTableGeneratorBasicControls.addEventListener('input', () => {
        htgUpdateColRow()

    })
    htmlTableGeneratorControls.addEventListener('input', () => {
        htgUpdateStyle()
        htgUpdateCode()

    })
    htmlTableGeneratorOutput.addEventListener('input', () => {
        htgUpdateStyle()
        htgUpdateCode()

    })
}