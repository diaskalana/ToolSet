import { CSSBackgroundImageGenerator } from "./CSSBackgroundImageGenerator.js";
import { HTMLButtonGenerator } from "./HTMLButtonGenerator.js";
import { CSSBoxShadowGenerator } from "./CSSBoxShadowGenerator.js";
import { CSSGradientGenerator } from "./CSSGradientGenerator.js";
import { HTMLTableGenerator } from "./HTMLTableGenerator.js";
import { HTMLInputGenerator } from "./HTMLInputGenerator.js";
import { CSSFlexboxGenerator } from "./CSSFlexboxGenerator.js";
import { codeImageGenerator } from "./CodeImageGenerator.js";
import { chartGenerator } from "./ChartGenerator.js";
import { resumeBuilder } from "./ResumeBuilder.js";
import { socialMediaPostGenerator } from "./SocialMediaPostGenerator.js";

// Toastify css
import "toastify-js/src/toastify.css"

// Filter Data
import { filterData, SearchType } from 'filter-data';


document.getElementById('year').textContent = new Date().getFullYear();

// Modal Controls
// Get the modal
const modal = document.querySelector(".modal");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// Category object arrays
/*

[{
    name:
    description:
    className:
}]

 */
const otherCategory = [{
    name: 'Code Image Generator',
    description: 'Code image generator converts programming code into image files, like PNG or JPEG, making it easier to share visually in documentation or presentations. You can customize aspects such as syntax highlighting and formatting for better aesthetics.',
    className: 'codeImageGenerator'
}, {
    name: 'Resume Builder',
    description: 'Resume builder is a user-friendly web tool that helps create professional resumes quickly. Users can choose templates, customize sections, and the tool auto-formats content for a polished look. Real-time previews, easy editing, and various export options simplify the process, making it accessible to users with diverse skill levels.',
    className: 'resumeBuilder'
}, {
    name: 'Chart Generator',
    description: 'Chart generator is a web tool that quickly creates charts and graphs from user-inputted data. It offers customization options and you can download or share the generated charts for presentations or reports. It simplifies the process of creating visual representations without requiring advanced design skills.',
    className: 'chartGenerator'
}, {
    name: 'Social Media Post Generator',
    description: 'Social media post generator is an online tool that can be used to create a fake social media posts. This is a free, simple, and easy-to-use tool that anyone can use to generate their own fake social media posts.',
    className: 'socialMediaPostGenerator'
},
]
const jsCategory = [{
    name: 'Code Image Generator',
    description: 'Code image generator converts programming code into image files, like PNG or JPEG, making it easier to share visually in documentation or presentations. You can customize aspects such as syntax highlighting and formatting for better aesthetics.',
    className: 'codeImageGenerator'
},
]

const cssCategory = [{
    name: 'Code Image Generator',
    description: 'Code image generator converts programming code into image files, like PNG or JPEG, making it easier to share visually in documentation or presentations. You can customize aspects such as syntax highlighting and formatting for better aesthetics.',
    className: 'codeImageGenerator'
}, {
    name: 'CSS Background Image Generator',
    description: 'CSS background image generator simplifies the process of creating customized background images for websites by providing a user-friendly interface to adjust settings and generate corresponding CSS code.',
    className: 'CSSBackgroundImageGenerator'
}, {
    name: 'CSS Box Shadow Generator',
    description: 'CSS box shadow generator lets you visually design and customize box shadows for webpage elements. It provides options to adjust shadow properties like color, size, and position, instantly generating the necessary CSS code for easy copy-pasting into your website.',
    className: 'CSSBoxShadowGenerator'
}, {
    name: 'CSS Gradient Generator',
    description: 'CSS gradient generator simplifies creating color blends for web design. You  can visually select colors, style (linear or radial), direction, and other parameters. The tool instantly generates CSS code representing the chosen gradient, which you can copy and paste directly into your web projects to achieve custom gradient effects without the need for manual coding.',
    className: 'CSSGradientGenerator'
}, {
    name: 'CSS Flexbox Generator',
    description: 'CSS Flexbox generator is a tool that visually creates flexible layouts. You can adjust settings like flex direction and alignment, and the tool generates corresponding CSS code for easy implementation in web projects.',
    className: 'CSSFlexboxGenerator'
},]
const htmlCategory = [{
    name: 'Code Image Generator',
    description: 'Code image generator converts programming code into image files, like PNG or JPEG, making it easier to share visually in documentation or presentations. You can customize aspects such as syntax highlighting and formatting for better aesthetics.',
    className: 'codeImageGenerator'
}, { name: 'HTML Button Generator', description: 'HTML button generator creates custom buttons visually. You can pick styles, colors, and sizes, and the tool generates the HTML and CSS code for easy use in web projects.', className: 'HTMLButtonGenerator' }, {
    name: 'HTML Input Generator',
    description: 'HTML input generator simplifies the creation of input elements for web forms. You can customize attributes like type, name, and placeholder, and the tool instantly generates the corresponding HTML code. This saves time and effort compared to manual coding.',
    className: 'HTMLInputGenerator'
}, {
    name: 'HTML Table Generator',
    description: 'HTML table generator simplifies the creation of HTML tables by offering a user-friendly interface for designing tables visually. You can customize rows, columns, and formatting options without manually coding. The tool then generates the HTML code for easy integration into web pages.',
    className: 'HTMLTableGenerator'
}]

// When the user clicks on the button, open the modal
handleModalOpening()
function handleModalOpening() {
    document.querySelectorAll('.toolClickArea').forEach(function (node, index) {
        node.addEventListener('click', (event) => {
            if (event.target.classList.contains('toolItem')) {
                modal.style.display = "flex";
            }
            if (event.target.classList.contains('htmlCat')) {
                handleCategories(htmlCategory, 'HTML Tools', 'HTML tools are web-based utilities designed to simplify the process of creating HTML code for web development. These tools cater to both beginners and experienced developers, offering a user-friendly interface that eliminates the need for manual coding.')
            } else if (event.target.classList.contains('cssCat')) {
                handleCategories(cssCategory, 'CSS Tools', 'CSS tools are web-based applications that simplify the process of creating Cascading Style Sheets (CSS) for websites or web applications. These tools are designed to assist both beginners and experienced developers in generating CSS code without the need for extensive manual coding.')
            } else if (event.target.classList.contains('jsCat')) {
                handleCategories(jsCategory, 'Javascript Tools', 'JavaScript tools are web-based utilities designed to assist developers in quickly generating code snippets or entire scripts in the JavaScript programming language. These tools are valuable for streamlining the coding process, saving time, and reducing the likelihood of syntax errors.')
            } else if (event.target.classList.contains('otherCat')) {
                handleCategories(otherCategory, 'Other Tools', 'These tools are web-based utilities designed to assist developers in quickly generating charts, resumes and many more. These tools are valuable for streamlining the coding process, saving time, and increasing productivity.')
            }

            if (event.target.classList.contains('CSSBackgroundImageGenerator')) {
                CSSBackgroundImageGenerator();
            } else if (event.target.classList.contains('HTMLButtonGenerator')) {
                HTMLButtonGenerator();
            } else if (event.target.classList.contains('CSSBoxShadowGenerator')) {
                CSSBoxShadowGenerator();
            } else if (event.target.classList.contains('CSSGradientGenerator')) {
                CSSGradientGenerator();
            } else if (event.target.classList.contains('HTMLTableGenerator')) {
                HTMLTableGenerator();
            } else if (event.target.classList.contains('HTMLInputGenerator')) {
                HTMLInputGenerator();
            } else if (event.target.classList.contains('CSSFlexboxGenerator')) {
                CSSFlexboxGenerator();
            } else if (event.target.classList.contains('codeImageGenerator')) {
                codeImageGenerator();
            } else if (event.target.classList.contains('chartGenerator')) {
                chartGenerator();
            } else if (event.target.classList.contains('resumeBuilder')) {
                resumeBuilder();
            } else if (event.target.classList.contains('socialMediaPostGenerator')) {
                socialMediaPostGenerator();
            }
        })
    })

}



// }

// When the user clicks on close button (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Search Controls
const input = document.querySelector('#search');
const suggestions = document.querySelector('.searchSuggestions ul');

const tools = ['CSS Background Image Generator', 'HTML Button Generator', 'CSS Box Shadow Generator', 'CSS Gradient Generator', 'HTML Table Generator', 'HTML Input Generator', 'CSS Flexbox Generator', 'Code Image Generator', 'Chart Generator', 'Resume Builder', 'Social Media Post Generator'];
tools.sort()

function search(str) {
    let results = [];
    const val = str.toLowerCase();

    for (let i = 0; i < tools.length; i++) {
        if (tools[i].toLowerCase().indexOf(val) > -1) {
            results.push(tools[i]);
        }
    }

    return results;
}

function searchHandler(e) {
    const inputVal = e.currentTarget.value;
    let results = [];
    if (inputVal.length > 0) {
        results = search(inputVal);
    }
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {

    suggestions.innerHTML = '';

    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            let item = results[i];
            // Highlights only the first match
            // TODO: highlight all matches
            const match = item.match(new RegExp(inputVal, 'i'));
            item = item.replace(match[0], `<strong>${match[0]}</strong>`);
            suggestions.innerHTML += `<li>${item}</li>`;
        }
        suggestions.classList.add('has-suggestions');
    } else {
        results = [];
        suggestions.innerHTML = '';
        suggestions.classList.remove('has-suggestions');

    }
}

function useSuggestion(e) {
    // input.value = e.target.innerText;
    // input.focus();
    input.value = ''
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');

    modal.style.display = "flex";

    // Update each time you add a tool
    if (e.target.innerText == 'CSS Background Image Generator') {
        CSSBackgroundImageGenerator();
    } else if (e.target.innerText == 'HTML Button Generator') {
        HTMLButtonGenerator();
    } else if (e.target.innerText == 'CSS Box Shadow Generator') {
        CSSBoxShadowGenerator();
    } else if (e.target.innerText == 'CSS Gradient Generator') {
        CSSGradientGenerator();
    } else if (e.target.innerText == 'HTML Table Generator') {
        HTMLTableGenerator();
    } else if (e.target.innerText == 'HTML Input Generator') {
        HTMLInputGenerator();
    } else if (e.target.innerText == 'CSS Flexbox Generator') {
        CSSFlexboxGenerator();
    } else if (e.target.innerText == 'Code Image Generator') {
        codeImageGenerator();
    } else if (e.target.innerText == 'Chart Generator') {
        chartGenerator();
    } else if (e.target.innerText == 'Resume Builder') {
        resumeBuilder();
    } else if (e.target.innerText == 'Social Media Post Generator') {
        socialMediaPostGenerator();
    }

}

document.addEventListener("click", function (e) {
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
});
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// Category Modal Handling

function handleCategories(categoryArray, catName, catDescription) {

    document.querySelector('.modalTarget').innerHTML = `<div class="categoryContainer toolClickArea"><div class="categorySearchContainer"><input placeholder="Search Category..." type="search" autocomplete="off" class="categorySearch"></div><div class="categorySearchContent"><table class="categorySearchResult"><thead><tr><th class="catTableTool">Tool</th><th class="catTableDesc">Description</th></tr></thead><tbody class="catTableBody"><tr><td><p>Background Image Generator</p></td><td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus provident quaerat vel numquam sed hic accusantium magnam voluptates possimus ad quibusdam similique adipisci quas, suscipit, sunt nihil quidem, tempora ducimus.</td></tr></tbody></table><div class="categorySearchNoResult"><p>No Results Found!</p></div></div></div>`

    handleModalOpening()

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')
    const categorySearch = document.querySelector('.categorySearch')
    const categorySearchText = document.querySelector('.categorySearch')
    const catTableBody = document.querySelector('.catTableBody')
    const categorySearchResult = document.querySelector('.categorySearchResult')
    const categorySearchNoResult = document.querySelector('.categorySearchNoResult')

    modalTitle.textContent = catName
    modalDescription.textContent = catDescription

    catSearchProcess()

    function catSearchProcess() {
        const searchConditions = [
            {
                key: ['name'],
                value: categorySearchText.value,
                type: SearchType.LK,
            }
        ]

        const searchResults = filterData(categoryArray, searchConditions);

        if (searchResults != []) {
            const tBodyHtml = searchResults.map(({ name, description, className }, index) => {
                return `<tr><td><p class="toolItem ${className}">${name}</p></td><td>${handleCatDescriptions(description)}</td></tr>`
            }).join('')
            categorySearchResult.style.display = 'block'
            categorySearchNoResult.style.display = 'none'
            catTableBody.innerHTML = tBodyHtml
        }

        if (searchResults.length == 0) {
            categorySearchNoResult.style.display = 'block'
            categorySearchResult.style.display = 'none'
        }
    }

    function handleCatDescriptions(text) {

        let textLimit = 150
        if (text.length >= textLimit) {
            let returnText = text.substring(0, textLimit)
            returnText += ' ...'
            return returnText
        } else {
            return text
        }
    }

    categorySearch.addEventListener('input', () => {
        catSearchProcess()
    })

}



// Social Media Post Generator
