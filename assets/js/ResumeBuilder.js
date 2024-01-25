import tinymce from "tinymce";
import * as FilePond from 'filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import Toastify from 'toastify-js'

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

export function resumeBuilder() {

    // maximize property
    const cvModalClose = document.querySelector('.modalHeader .close')
    const modalContent = document.querySelector('.modalContent')
    modalContent.setAttribute('maximize', 'true')




    document.querySelector('.modalTarget').innerHTML = `<div class="cvBuilder"><div class="cvMiniHeader"><div class="cvHeaderIcon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 swipe hideContent"><path stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 swipe showContent"><path stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><p>Hide Content Options</p></div><div class="exportOptions"><select name="cvExportType" id="cvExportType"><option value="pdf">PDF</option></select><button id="cvGenerateOutput">Export</button></div><div class="cvHeaderIcon"><p>Hide Style Options</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 swipe showStyle"><path stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 swipe hideStyle" id="hideStyle"><path stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg></div></div><div class="cvContent"><div class="cvPreview"><div class="cv"><div class="cvMainwrapper"><div class="cvSideBar"><div class="cvBasics"><div id="cvBasicsPicture"></div><p id="cvBasicsFullName">Kalana Dias</p><p id="cvBasicsHeadline">Software Engineering Undergraduate</p><div class="cvContactInfo"><div id="cvBasicsAddressContainer"><iconify-icon icon="carbon:location" style="color:#fff" class="cvIcon"></iconify-icon><p id="cvBasicsAddress">No. 194/A/2, Gammadda road, Kaluwamodara, Aluthgama.</p></div><div id="cvBasicsTelContainer"><iconify-icon icon="ph:phone" class="cvIcon"></iconify-icon><p id="cvBasicsTel">0775986635</p></div><div id="cvBasicsEmailContainer"><iconify-icon icon="ph:at" class="cvIcon"></iconify-icon><p id="cvBasicsEmail">kalanadias2001@gmail.com</p></div><div id="cvBasicsWebContainer"><iconify-icon icon="mdi:web" class="cvIcon"></iconify-icon><p id="cvBasicsWeb">kalanadias.me</p></div></div></div><div class="cvSideBarContent"><div class="cvProfiles"><p><strong>Profiles</strong></p><hr><section id="cvProfilesLinkedinContainer"><div><iconify-icon icon="devicon:linkedin" class="cvIcon"></iconify-icon><p id="cvProfilesLinkedin">linkedin.com/in/diaskalana</p></div><p class="cvProfileType">LinkedIn</p></section><section id="cvProfilesGithubContainer"><div><iconify-icon icon="devicon:github" class="cvIcon"></iconify-icon><p id="cvProfilesGithub">github.com/diaskalana</p></div><p class="cvProfileType">Github</p></section><section id="cvProfilesStackoverflowContainer"><div><iconify-icon icon="devicon:stackoverflow" class="cvIcon"></iconify-icon><p id="cvProfilesStackoverflow">stackoverflow.com/users/14639651</p></div><p class="cvProfileType">Stackoverflow</p></section><section id="cvProfilesMediumContainer"><div><iconify-icon icon="bi:medium" class="cvIcon"></iconify-icon><p id="cvProfilesMedium">medium.com/@kalanadias</p></div><p class="cvProfileType">Medium</p></section></div><div class="cvSkills"><p><strong>Skills</strong></p><hr><div class="cvSkillItems"><p>Time Management</p><p>Leadership</p><p>Quick Learner</p><p>Project Management</p><p>Critical Thinking</p></div></div><div class="cvReferences"><p><strong>References</strong></p><hr><div class="cvReferenceContent"><p><strong>Eng. K. N. Silva</strong><br>Energy Management Systems (Pvt) Ltd, No 69, 12 Old Nawala Road, Jayawardenapura kotte.<br>Telephone: +94 70 6459889<br>Email: nihal@ems.lk</p><br><p><strong>Ms. Disni Sriyaratna</strong><br>Lecturer Department of Computer Science and Software Engineering SLIIT | Malabe Campus<br>Tel: +9411- 754 3205<br>Email: disni.s@sliit.lk</p></div></div></div></div><div class="cvMainContent"><div class="cvSummary"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi recusandae provident inventore, voluptatem pariatur aliquid facere, voluptate fuga quae nesciunt accusamus. Quas provident molestiae minus soluta ipsam, nemo rem itaque!</p></div><div class="cvExperience"><p><strong>Experience</strong></p><hr><div class="cvExperienceContent"><p><strong>Medical Laboratory Management System | 2nd Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p><br><p><strong>Android Shopping Cart Application | 2nd Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p><br><p><strong>Online Train Ticket System | 2nd Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p><br><p><strong>Online Construction Management System | 1st Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p></div></div><div class="cvEducation"><p><strong>Education</strong></p><hr><div class="cvEducationContent"><p><strong>Sri Lanka Institute of Information Technology (SLIIT)</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p><strong>Ananda College, Colombo 10</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p></div></div></div></div></div></div><div class="cvStructure"><h4>Basics</h4><label for="cvPicture">Picture</label><input type="file" id="cvPicture"><label for="cvFullName">Full Name</label><input id="cvFullName" type="text"><label for="cvHeadline">Headline</label><input id="cvHeadline" type="text"><div class="cvSubContent"><div><label for="cvEmail">Email</label><input id="cvEmail" type="email"></div><div><label for="cvWebsite">Website</label><input id="cvWebsite" type="url"></div></div><div class="cvSubContent"><div><label for="cvTel">Phone</label><input id="cvTel" type="tel"></div><div><label for="cvAddress">Address</label><input id="cvAddress" type="text"></div></div><br><h4>Summary</h4><textarea id="cvSummary" cols="30" rows="10"></textarea><br><h4>Profiles</h4><div class="cvInlineSubContent"><label for="cvLinkedIn">LinkedIn:<input id="cvLinkedIn" type="text"></label><label for="cvGithub">Github:<input id="cvGithub" type="text"></label><label for="cvMedium">Medium:<input id="cvMedium" type="text"></label><label for="cvStackoverflow">Stackoverflow:<input id="cvStackoverflow" type="text"></label></div><br><h4>Experience</h4><textarea id="cvExperience" cols="30" rows="10"></textarea><br><h4>Education</h4><textarea id="cvEducation" cols="30" rows="10"></textarea><br><h4>Skills</h4><textarea id="cvSkills" cols="30" rows="10"></textarea><br><h4>References</h4><textarea id="cvReferences" cols="30" rows="10"></textarea></div><div class="cvStyle"><h4>Template & Layout</h4><label for="cvTemplate">Select Template</label><select disabled="disabled" name="cvTemplate" id="cvTemplate"><option value="">Template01</option></select><label for="cvPageSize">Page Format</label><select name="cvPageSize" id="cvPageSize"><option value="a4">A4</option><option value="letter">Letter</option></select><br><h4>Typography</h4><div class="cvSubContent"><div><label for="cvFontFamily">Font Family</label><select name="cvFontFamily" id="cvFontFamily"><option style="font-family:Montserrat,sans-serif" value="'Montserrat', sans-serif">Montserrat</option><option style="font-family:'Roboto Condensed',sans-serif" value="'Roboto Condensed', sans-serif">Roboto Condensed</option><option style="font-family:Lato,sans-serif" value="'Lato', sans-serif">Lato</option><option style="font-family:'Open Sans',sans-serif" value="'Open Sans', sans-serif">Open Sans</option></select></div><div><label for="cvFontWeight">Font Weight</label><select name="cvFontWeight" id="cvFontWeight"><option value="100">100</option><option value="200">200</option><option value="300">300</option><option value="400">400</option><option value="500">500</option><option value="600">600</option><option value="700">700</option><option value="800">800</option><option value="900">900</option></select></div></div><div class="cvInlineSubContentWithSliders"><label for="cvFontSize">Font Size</label><div><input type="range" name="cvFontSize" id="cvFontSize" min="12" max="18" value="14" step="0.05"><p id="cvFontSizeValue">1rem</p></div><label for="cvLineHeight">Line Height</label><div><input type="range" name="cvLineHeight" id="cvLineHeight" min="0" max="3" value="1.15" step="0.05"><p id="cvLineHeightValue">1rem</p></div></div><p><strong>Options</strong></p><div class="cvInlineSubContent"><label for="cvShowIcons"><input type="checkbox" id="cvShowIcons"> Show icons</label><label for="cvUnderlineLinks"><input type="checkbox" id="cvUnderlineLinks"> Underline Links</label></div><br><h4>Theme</h4><label for="cvSelectTheme">Select Theme</label><div class="cvSubContent"><select name="cvSelectTheme" id="cvSelectTheme"><option value="1">Theme01</option><option value="2">Theme02</option><option value="3">Theme03</option></select><button id="cvApplyTheme">Apply</button></div><label for="cvBackgroundColor">Background Color</label><input type="color" id="cvBackgroundColor"><div class="cvSubContent"><div><label for="cvPrimaryColor">Primary Color</label><input type="color" id="cvPrimaryColor"></div><div><label for="cvTextColor">Text Color</label><input type="color" id="cvTextColor"></div></div><p><strong>Resume Picture</strong></p><div class="cvSubContent"><div><label for="cvAspectRatio">Aspect Ratio</label><input type="number" id="cvAspectRatio"></div><div><label for="cvBorderRadius">Border Radius</label><input type="number" id="cvBorderRadius"></div></div><p><strong>Options</strong></p><div class="cvInlineSubContent"><label for="cvPictureHidden"><input type="checkbox" id="cvPictureHidden">Hidden</label><label for="cvPictureBorder"><input type="checkbox" id="cvPictureBorder"> Border</label><label for="cvPictureGrayscale"><input type="checkbox" id="cvPictureGrayscale"> Grayscale</label></div><button id="cvResetStyle">Reset Styles</button></div></div></div>`

    tinymce.init({
        selector: 'textarea',
        plugins: 'lists link autolink',
        toolbar: 'undo redo | bold italic underline strikethrough align | numlist bullist link',
        menubar: 'edit view',
        default_link_target: '_blank',
        // content_css: 'dark'
        height: 200,
        setup: (editor) => {
            editor.on('input FormatApply FormatRemove ListMutation NodeChange', (e) => { updateResume() })
        }
    });

    cvModalClose.addEventListener('click', () => {
        modalContent.setAttribute('maximize', '')
        // tinymce.activeEditor.remove("textarea");
        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'cvSummary');
        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'cvExperience');
        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'cvSkills');
        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'cvReferences');
        tinymce.EditorManager.execCommand('mceRemoveEditor', true, 'cvEducation');

    })

    FilePond.registerPlugin(
        FilePondPluginFileValidateType,
        FilePondPluginImagePreview,
        FilePondPluginFileValidateSize,
    );

    const cvPicture = document.querySelector('#cvPicture');
    const pond = FilePond.create(cvPicture, {
        acceptedFileTypes: ['image/*'],
        maxFileSize: '5MB',
        allowDrop: false,
        labelIdle: '<span class="filepond--label-action">Browse</span> Picture for the Resume',
    });


    // Side Panel Controls
    const hideContent = document.querySelector('.cvHeaderIcon .hideContent')
    const showContent = document.querySelector('.cvHeaderIcon .showContent')
    const hideStyle = document.querySelector('.cvHeaderIcon .hideStyle')
    const showStyle = document.querySelector('.cvHeaderIcon .showStyle')

    const panelMessage = document.querySelectorAll('.cvHeaderIcon p')

    const cvStructure = document.querySelector('.cvStructure')
    const cvStyle = document.querySelector('.cvStyle')
    const cv = document.querySelector('.cv')


    panelMessageControls()

    function panelMessageControls() {
        if (cvStructure.style.display == 'none') {
            hideContent.style.display = 'none'
            showContent.style.display = 'block'
            panelMessage[0].textContent = 'Show Content Options'
        } else {
            hideContent.style.display = 'block'
            showContent.style.display = 'none'
            panelMessage[0].textContent = 'Hide Content Options'
        }

        if (cvStyle.style.display == 'none') {
            hideStyle.style.display = 'none'
            showStyle.style.display = 'block'
            panelMessage[1].textContent = 'Show Style Options'
        } else {
            hideStyle.style.display = 'block'
            showStyle.style.display = 'none'
            panelMessage[1].textContent = 'Hide Style Options'
        }
    }


    hideStyle.addEventListener('click', () => {
        cvStyle.style.display = 'none'
        panelMessageControls()
    })
    showStyle.addEventListener('click', () => {
        cvStyle.style.display = 'block'
        panelMessageControls()
    })

    hideContent.addEventListener('click', () => {
        cvStructure.style.display = 'none'
        panelMessageControls()
    })
    showContent.addEventListener('click', () => {
        cvStructure.style.display = 'block'
        panelMessageControls()
    })

    // update Resume
    // const cvStructure = document.querySelector('.cvStructure')

    // Basic Section
    const cvFullName = document.querySelector('#cvFullName')
    const cvHeadline = document.querySelector('#cvHeadline')
    const cvEmail = document.querySelector('#cvEmail')
    const cvWebsite = document.querySelector('#cvWebsite')
    const cvTel = document.querySelector('#cvTel')
    const cvAddress = document.querySelector('#cvAddress')

    const cvBasicsFullName = document.querySelector('#cvBasicsFullName')
    const cvBasicsHeadline = document.querySelector('#cvBasicsHeadline')
    const cvBasicsAddress = document.querySelector('#cvBasicsAddress')
    const cvBasicsTel = document.querySelector('#cvBasicsTel')
    const cvBasicsEmail = document.querySelector('#cvBasicsEmail')
    const cvBasicsWeb = document.querySelector('#cvBasicsWeb')

    const cvBasicsAddressContainer = document.querySelector('#cvBasicsAddressContainer')
    const cvBasicsTelContainer = document.querySelector('#cvBasicsTelContainer')
    const cvBasicsEmailContainer = document.querySelector('#cvBasicsEmailContainer')
    const cvBasicsWebContainer = document.querySelector('#cvBasicsWebContainer')

    // Summary Section
    const cvSummary = document.querySelector('.cvSummary')

    // Profile Section
    const cvLinkedIn = document.querySelector('#cvLinkedIn')
    const cvGithub = document.querySelector('#cvGithub')
    const cvMedium = document.querySelector('#cvMedium')
    const cvStackoverflow = document.querySelector('#cvStackoverflow')

    const cvProfilesLinkedin = document.querySelector('#cvProfilesLinkedin')
    const cvProfilesGithub = document.querySelector('#cvProfilesGithub')
    const cvProfilesStackoverflow = document.querySelector('#cvProfilesStackoverflow')
    const cvProfilesMedium = document.querySelector('#cvProfilesMedium')

    const cvProfilesLinkedinContainer = document.querySelector('#cvProfilesLinkedinContainer')
    const cvProfilesGithubContainer = document.querySelector('#cvProfilesGithubContainer')
    const cvProfilesStackoverflowContainer = document.querySelector('#cvProfilesStackoverflowContainer')
    const cvProfilesMediumContainer = document.querySelector('#cvProfilesMediumContainer')

    // Skills Section
    const cvSkillItems = document.querySelector('.cvSkillItems')

    // References Section
    const cvReferenceContent = document.querySelector('.cvReferenceContent')

    // Experience Section
    const cvExperienceContent = document.querySelector('.cvExperienceContent')

    // Education Section
    const cvEducationContent = document.querySelector('.cvEducationContent')

    // CV Style
    const cvTemplate = document.querySelector('#cvTemplate')
    const cvPageSize = document.querySelector('#cvPageSize')
    const cvFontFamily = document.querySelector('#cvFontFamily')
    const cvFontWeight = document.querySelector('#cvFontWeight')

    const cvFontSize = document.querySelector('#cvFontSize')
    const cvFontSizeValue = document.querySelector('#cvFontSizeValue')
    const cvLineHeight = document.querySelector('#cvLineHeight')
    const cvLineHeightValue = document.querySelector('#cvLineHeightValue')

    const cvShowIcons = document.querySelector('#cvShowIcons')
    const cvUnderlineLinks = document.querySelector('#cvUnderlineLinks')
    const cvIcons = document.querySelectorAll('.cvIcon')

    const cvSelectTheme = document.querySelector('#cvSelectTheme')
    const cvSideBar = document.querySelector('.cvSideBar')
    const cvBasics = document.querySelector('.cvBasics')

    const cvBackgroundColor = document.querySelector('#cvBackgroundColor')
    const cvPrimaryColor = document.querySelector('#cvPrimaryColor')
    const cvTextColor = document.querySelector('#cvTextColor')

    const cvMainContent = document.querySelector('.cvMainContent')
    const cvSideBarContent = document.querySelector('.cvSideBarContent')

    const cvAspectRatio = document.querySelector('#cvAspectRatio')
    const cvBorderRadius = document.querySelector('#cvBorderRadius')
    const cvPictureHidden = document.querySelector('#cvPictureHidden')
    const cvPictureBorder = document.querySelector('#cvPictureBorder')
    const cvPictureGrayscale = document.querySelector('#cvPictureGrayscale')

    const cvBasicsPicture = document.querySelector('#cvBasicsPicture')

    const cvResetStyle = document.querySelector('#cvResetStyle')
    const cvApplyTheme = document.querySelector('#cvApplyTheme')
    const cvGenerateOutput = document.querySelector('#cvGenerateOutput')



    cvResetStyle.addEventListener('click', resetResumeStyleFunc)
    cvGenerateOutput.addEventListener('click', generatePdf)
    resetResumeContentFunc()
    resetResumeStyleFunc()

    function updateResume() {

        // Basic Section
        cvBasicsAddressContainer.style.display = (cvAddress.value == '') ? 'none' : 'flex';
        cvBasicsTelContainer.style.display = (cvTel.value == '') ? 'none' : 'flex';
        cvBasicsEmailContainer.style.display = (cvEmail.value == '') ? 'none' : 'flex';
        cvBasicsWebContainer.style.display = (cvWebsite.value == '') ? 'none' : 'flex';


        cvBasicsFullName.textContent = cvFullName.value
        cvBasicsHeadline.textContent = cvHeadline.value
        cvBasicsAddress.textContent = cvAddress.value
        cvBasicsTel.textContent = cvTel.value
        cvBasicsEmail.textContent = cvEmail.value
        cvBasicsWeb.textContent = cvWebsite.value

        // Summary
        cvSummary.innerHTML = tinymce.get("cvSummary").getContent();

        // Profile Section
        cvProfilesLinkedinContainer.style.display = (cvLinkedIn.value == '') ? 'none' : 'block';
        cvProfilesGithubContainer.style.display = (cvGithub.value == '') ? 'none' : 'block';
        cvProfilesStackoverflowContainer.style.display = (cvStackoverflow.value == '') ? 'none' : 'block';
        cvProfilesMediumContainer.style.display = (cvMedium.value == '') ? 'none' : 'block';

        cvProfilesLinkedin.innerHTML = `<a href="https://www.linkedin.com/in/${cvLinkedIn.value}/">linkedin.com/in/${cvLinkedIn.value}</a>`
        cvProfilesGithub.innerHTML = `<a href="https://github.com/${cvGithub.value}">github.com/${cvGithub.value}</a>`
        cvProfilesStackoverflow.innerHTML = `<a href="https://stackoverflow.com/users/${cvStackoverflow.value}">stackoverflow.com/users/${cvStackoverflow.value}</a>`
        cvProfilesMedium.innerHTML = `<a href="https://medium.com/@${cvMedium.value}">medium.com/@${cvMedium.value}</a>`

        // Skills Section
        cvSkillItems.innerHTML = tinymce.get("cvSkills").getContent();

        // References Section
        cvReferenceContent.innerHTML = tinymce.get("cvReferences").getContent();

        // Experience Section
        cvExperienceContent.innerHTML = tinymce.get("cvExperience").getContent();

        // Education Section
        cvEducationContent.innerHTML = tinymce.get("cvEducation").getContent();

        // CV Styles
        if (cvPageSize.value == 'a4') {
            cv.style.width = '8.3in'
            cv.style.aspectRatio = '8.3 / 11.7'
        } else if (cvPageSize.value == 'letter') {
            cv.style.width = '8.5in'
            cv.style.aspectRatio = '8.5 / 11'
        }

        cv.style.fontFamily = cvFontFamily.value
        cv.style.fontWeight = cvFontWeight.value

        cv.style.fontSize = `${cvFontSize.value}px`
        cvFontSizeValue.textContent = `${cvFontSize.value}px`

        cv.style.lineHeight = `${cvLineHeight.value}em`
        cvLineHeightValue.textContent = `${cvLineHeight.value}em`

        // Typography options
        const cvLinks = document.querySelectorAll('.cv a')

        if (cvShowIcons.checked) {
            cvIcons.forEach((e) => {
                e.style.display = 'block'
            })
        } else if (!cvShowIcons.checked) {
            cvIcons.forEach((e) => {
                e.style.display = 'none'
            })
        }

        if (cvUnderlineLinks.checked) {
            cvLinks.forEach((e) => {
                e.style.textDecoration = 'underline'
            })
        } else if (!cvUnderlineLinks.checked) {
            cvLinks.forEach((e) => {
                e.style.textDecoration = 'none'
            })
        }

        // Color options
        cv.style.backgroundColor = cvBackgroundColor.value
        cvMainContent.style.color = cvTextColor.value
        cvSideBarContent.style.color = cvTextColor.value

        cvSideBar.style.backgroundColor = cvPrimaryColor.value
        cvSummary.style.backgroundColor = cvPrimaryColor.value


        // Picture
        cvBasicsPicture.style.aspectRatio = cvAspectRatio.value
        cvBasicsPicture.style.borderRadius = `${cvBorderRadius.value}px`

        // Picture Options
        if (cvPictureHidden.checked) {
            cvBasicsPicture.style.display = 'none'
        } else if (!cvPictureHidden.checked) {
            cvBasicsPicture.style.display = 'block'

        }

        if (cvPictureBorder.checked) {
            cvBasicsPicture.style.border = '3px solid #ffffff'
        } else if (!cvPictureBorder.checked) {
            cvBasicsPicture.style.border = 'none'

        }

        if (cvPictureGrayscale.checked) {
            cvBasicsPicture.style.filter = 'grayscale(100%)'
        } else if (!cvPictureGrayscale.checked) {
            cvBasicsPicture.style.filter = 'none'

        }

    }


    // Reset Resume
    function resetResumeContentFunc() {
        cvFullName.value = 'Kalana Dias'
        cvHeadline.value = 'Software Engineering Undergraduate'
        cvEmail.value = 'kalanadias2001@gmail.com'
        cvWebsite.value = 'kalanadias.me'
        cvTel.value = '0775986635'
        cvAddress.value = 'No. 194/A/2, Gammadda road, Kaluwamodara, Aluthgama.'

        cvLinkedIn.value = `diaskalana`
        cvGithub.value = `diaskalana`
        cvMedium.value = `kalanadias`
        cvStackoverflow.value = `14639651`

        tinymce.get('cvSummary').on('init', function (e) {
            e.target.setContent("<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi recusandae provident inventore, voluptatem pariatur aliquid facere, voluptate fuga quae nesciunt accusamus. Quas provident molestiae minus soluta ipsam, nemo rem itaque!</p>");
        });

        tinymce.get('cvSkills').on('init', function (e) {
            e.target.setContent("<p>Time Management</p><p>Leadership</p><p>Quick Learner</p><p>Project Management</p><p>Critical Thinking</p>");
        });

        tinymce.get('cvReferences').on('init', function (e) {
            e.target.setContent("<p><strong>Eng. K. N. Silva</strong><br>Energy Management Systems (Pvt) Ltd, No 69, 12 Old Nawala Road, Jayawardenapura kotte.<br>Telephone: +94 70 6459889<br>Email: nihal@ems.lk</p><br><p><strong>Ms. Disni Sriyaratna</strong><br>Lecturer Department of Computer Science and Software Engineering SLIIT | Malabe Campus<br>Tel: +9411- 754 3205<br>Email: disni.s@sliit.lk</p>");
        });

        tinymce.get('cvEducation').on('init', function (e) {
            e.target.setContent("<p><strong>Sri Lanka Institute of Information Technology (SLIIT)</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p><strong>Ananda College, Colombo 10</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p>");
        });

        tinymce.get('cvExperience').on('init', function (e) {
            e.target.setContent("<p><strong>Medical Laboratory Management System | 2nd Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p><br><p><strong>Android Shopping Cart Application | 2nd Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p><br><p><strong>Online Train Ticket System | 2nd Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p><br><p><strong>Online Construction Management System | 1st Year Project</strong></p><br><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga, ad ut sapiente maiores iste, veniam harum quaerat enim natus, recusandae explicabo pariatur quos doloribus quo porro temporibus architecto neque.</p><br><p>Technologies & Tools : MongoDB | Express | React | NodeJS | Bootstrap | VS Code</p>");
        });

        updateResume()
    }

    function resetResumeStyleFunc() {
        cvPageSize.value = 'a4'
        cvFontFamily.value = "'Montserrat', sans-serif"
        cvFontWeight.value = '500'
        cvFontSize.value = '14'
        cvLineHeight.value = '1.15'

        cvShowIcons.checked = true
        cvUnderlineLinks.checked = true

        cvSelectTheme.value = '1'
        cvBackgroundColor.value = '#ffffff'
        cvPrimaryColor.value = '#dadde1'
        cvTextColor.value = '#000000'

        cvAspectRatio.value = 1
        cvBorderRadius.value = 100

        cvPictureHidden.checked = false
        cvPictureBorder.checked = false
        cvPictureGrayscale.checked = false

        updateResume()
    }

    cvStructure.addEventListener('input', () => {
        updateResume()
    })

    cvStyle.addEventListener('input', () => {
        updateResume()

    })

    cvApplyTheme.addEventListener('click', () => {
        if (cvSelectTheme.value == '1') {

            cv.style.backgroundColor = '#ffffff'
            cvSummary.style.backgroundColor = '#dadde1'
            cvSideBar.style.backgroundColor = '#dadde1'
            cvBasics.style.backgroundColor = '#475569'
            cvMainContent.style.color = '#000000'
            cvSideBarContent.style.color = '#000000'

        } else if (cvSelectTheme.value == '2') {

            cv.style.backgroundColor = '#ffffff'
            cvSummary.style.backgroundColor = '#dddddc'
            cvSideBar.style.backgroundColor = '#dddddc'
            cvBasics.style.backgroundColor = '#57534e'
            cvMainContent.style.color = '#000000'
            cvSideBarContent.style.color = '#000000'

        } else if (cvSelectTheme.value == '3') {

            cv.style.backgroundColor = '#ffffff'
            cvSummary.style.backgroundColor = '#cee9f0'
            cvSideBar.style.backgroundColor = '#cee9f0'
            cvBasics.style.backgroundColor = '#0891b2'
            cvMainContent.style.color = '#000000'
            cvSideBarContent.style.color = '#000000'

        }
    })

    // Resume Picture 
    document.getElementById('cvPicture').addEventListener('change', (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
            localStorage.setItem('wallpaper', base64String);
            document.querySelector('#cvBasicsPicture').style.backgroundImage = `url(data:image/png;base64,${base64String})`;
        };
        reader.readAsDataURL(file);
    })


    function generatePdf() {

        // var cssPagedMedia = (function () {
        //     var style = document.createElement('style');
        //     document.head.appendChild(style);
        //     return function (rule) {
        //         style.innerHTML = rule;
        //     };
        // }());

        // cssPagedMedia.size = function () {
        //     cssPagedMedia('@media print { .cvStructure, .cvStyle { display: none;}}');
        // };

        // cssPagedMedia.size();


        // if (window.matchMedia("print").matches) {
        // }
        if (hideStyle.style.display == 'block') {
            cvStyle.style.display = 'none'
            panelMessageControls()
        }
        if (hideContent.style.display == 'block') {
            cvStructure.style.display = 'none'
            panelMessageControls()
        }

        window.print()

        Toastify({
            text: "📥 Resume Exported!",
            className: "info",
            className: "notification",
            offset: {
                x: 20,
                y: 20
            },
        }).showToast();
    }

}