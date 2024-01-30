import logoLight from '../images/logo.png'
import logoDark from '../images/logo_dark.png'

const outerContainer = document.querySelector(".outer-container");
const container = document.querySelector(".container");
const logo = document.querySelector('#logo')

changeLogo()
function changeLogo() {
    if (outerContainer.classList.contains('light')) {
        logo.setAttribute('src', logoLight)

    } else {
        logo.setAttribute('src', logoDark)
    }
}


container.addEventListener("click", () => {
    outerContainer.classList.toggle("light");
    changeTheme()

});

function changeTheme() {
    if (outerContainer.classList.contains('light')) {
        document.documentElement.setAttribute('data-theme', 'light');
        logo.setAttribute('src', logoLight)
        localStorage.setItem('theme', 'light');

    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        logo.setAttribute('src', logoDark)
        localStorage.setItem('theme', 'dark');

    }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        outerContainer.classList.toggle("light");
    }
    changeTheme()

} else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        outerContainer.classList.remove('light')
    } else {
        outerContainer.classList.add('light')
    }
    changeLogo()
    changeTheme()

}