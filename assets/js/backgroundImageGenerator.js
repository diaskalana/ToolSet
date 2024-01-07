export function backgroundImageGenerator() {

    document.querySelector('.modalTarget').innerHTML = `<div class="bgImageGenerator"><div class="bgImageGeneratorControls"><label for="bigUrl">Image URL:</label><input type="url" id="bigUrl" value="./assets/images/bgDummy.jpg"><label for="bigBgColor">Background Color:</label><input type="color" id="bigBgColor" value="#faebd7"><label for="bigPosition">Position:</label><select name="position" id="bigPosition"><option value="left top">left top</option><option value="left center">left center</option><option value="left bottom">left bottom</option><option value="right top">right top</option><option value="right center">right center</option><option value="right bottom">right bottom</option><option value="center top">center top</option><option value="center center">center center</option><option value="center bottom">center bottom</option></select><label for="bigSize">Size:</label><select name="size" id="bigSize"><option value="auto">auto</option><option value="contain">contain</option><option value="cover">cover</option></select><label for="bigBackgroundRepeat">Background-Repeat:</label><select name="background-repeat" id="bigBackgroundRepeat"><option value="no-repeat">no-repeat</option><option value="repeat">repeat</option></select><label for="bigClip">Clip:</label><select name="clip" id="bigClip"><option value="border-box">border-box</option><option value="content-box">content-box</option><option value="padding-box">padding-box</option></select><label for="bigBackgroundAttachment">Background-Attachment:</label><select name="background-attachment" id="bigBackgroundAttachment"><option value="local">local</option><option value="fixed">fixed</option><option value="scroll">scroll</option></select></div><div class="bgImageGeneratorOutput"><div class="bgImageGeneratorPreview"></div><code class="bgImageGeneratorCode"></code><div class="bgImageGeneratorBtns"><button id="bgImageGeneratorReset">Reset</button><button id="bgImageGeneratorCopyCode">Copy Code</button></div></div></div>`


    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const bigImgURL = document.querySelector('#bigUrl')
    const bigBgColor = document.querySelector('#bigBgColor')
    const bigPosition = document.querySelector('#bigPosition')
    const bigSize = document.querySelector('#bigSize')
    const bigBgRepeat = document.querySelector('#bigBackgroundRepeat')
    const bigClip = document.querySelector('#bigClip')
    const bigBgAttachment = document.querySelector('#bigBackgroundAttachment')
    const bigPreview = document.querySelector('.bgImageGeneratorPreview')
    const bigCode = document.querySelector('.bgImageGeneratorCode')
    const bigControls = document.querySelector('.bgImageGeneratorControls')
    const bigReset = document.querySelector('#bgImageGeneratorReset')
    const bigCopy = document.querySelector('#bgImageGeneratorCopyCode')


    bigResetFunc()


    bigControls.addEventListener('input', (e) => {
        // console.log(e.target.id)

        if (e.target.id == "bigBgColor") {
            bigPreview.style.backgroundColor = `${e.target.value}`
        } else if (e.target.id == "bigUrl") {
            bigPreview.style.backgroundImage = `url(${e.target.value})`

        } else if (e.target.id == "bigPosition") {
            bigPreview.style.backgroundPosition = `${e.target.value}`

        } else if (e.target.id == "bigBackgroundRepeat") {
            bigPreview.style.backgroundRepeat = `${e.target.value}`
        } else if (e.target.id == "bigSize") {
            bigPreview.style.backgroundSize = `${e.target.value}`

        } else if (e.target.id == "bigClip") {
            bigPreview.style.backgroundClip = `${e.target.value}`

        } else if (e.target.id == "bigBackgroundAttachment") {
            bigPreview.style.backgroundAttachment = `${e.target.value}`
        }

        bigCode.textContent = `background: ${bigBgColor.value} url(${bigImgURL.value}) ${bigPosition.value}/${bigSize.value} ${bigBgRepeat.value} ${bigClip.value} ${bigBgAttachment.value};`
    })

    bigReset.addEventListener('click', bigResetFunc)
    bigCopy.addEventListener('click', () => {
        navigator.clipboard.writeText(bigCode.textContent);
        alert("Code Copied!")
    })

    function bigResetFunc() {
        modalTitle.textContent = 'Background Image Generator'
        modalDescription.textContent = 'Background image generator simplifies the process of creating customized background images for websites by providing a user-friendly interface to adjust settings and generate corresponding CSS code.'
        bigImgURL.value = './assets/images/bgDummy.jpg'
        bigBgColor.value = '#faebd7'
        bigPosition.value = 'center center'
        bigSize.value = 'cover'
        bigBgRepeat.value = 'no-repeat'
        bigClip.value = 'border-box'
        bigBgAttachment.value = 'local'

        bigCode.textContent = `background: ${bigBgColor.value} url(${bigImgURL.value}) ${bigPosition.value}/${bigSize.value} ${bigBgRepeat.value} ${bigClip.value} ${bigBgAttachment.value};`

        bigPreview.style.backgroundColor = bigBgColor.value
        bigPreview.style.backgroundImage = `url(${bigImgURL.value})`
        bigPreview.style.backgroundPosition = bigPosition.value
        bigPreview.style.backgroundRepeat = bigBgRepeat.value
        bigPreview.style.backgroundSize = bigSize.value
        bigPreview.style.backgroundClip = bigClip.value
        bigPreview.style.backgroundAttachment = bigBgAttachment.value
    }

}