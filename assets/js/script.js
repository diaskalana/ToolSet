import { CSSBackgroundImageGenerator } from "./CSSBackgroundImageGenerator.js";
import { HTMLButtonGenerator } from "./HTMLButtonGenerator.js";
import { CSSBoxShadowGenerator } from "./CSSBoxShadowGenerator.js";
import { CSSGradientGenerator } from "./CSSGradientGenerator.js";

document.getElementById('year').textContent = new Date().getFullYear();

// Modal Controls
// Get the modal
const modal = document.querySelector(".modal");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close");

// When the user clicks on the button, open the modal
document.onclick = function (event) {
    if (event.target.classList.contains('toolItem')) {
        modal.style.display = "flex";
    }
    if (event.target.classList.contains('CSSBackgroundImageGenerator')) {
        CSSBackgroundImageGenerator();

    } else if (event.target.classList.contains('HTMLButtonGenerator')) {
        HTMLButtonGenerator();
    } else if (event.target.classList.contains('CSSBoxShadowGenerator')) {
        CSSBoxShadowGenerator();
    } else if (event.target.classList.contains('CSSGradientGenerator')) {
        CSSGradientGenerator();
    }
}

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

const tools = ['CSS Background Image Generator', 'HTML Button Generator', 'CSS Box Shadow Generator', 'CSS Gradient Generator'];
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
    }

}

document.addEventListener("click", function (e) {
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
});
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);


// CSS Gradient Generator



