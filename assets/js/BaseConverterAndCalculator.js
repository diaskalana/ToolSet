import { convertBase } from "simple-base-converter";

export function baseConverterAndCalculator() {


    document.querySelector('.modalTarget').innerHTML = `<div class="baseConAndCal"><div class="baseConAndCalControls"><h4>Base Converter</h4><label for="baseConverterInputNumber">Enter Number:</label><input type="text" id="baseConverterInputNumber"><label for="baseConverterFromBase">From Base:</label><select name="baseConverterFromBase" id="baseConverterFromBase"><option value="2">2 (binary)</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8 (octal)</option><option value="9">9</option><option value="10">10 (decimal)</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16 (hex)</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option></select><label for="baseConverterToBase">To Base:</label><select name="baseConverterToBase" id="baseConverterToBase"><option value="2">2 (binary)</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8 (octal)</option><option value="9">9</option><option value="10">10 (decimal)</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16 (hex)</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option></select><div class="baseConAndCalBtnCtrl"><button id="baseConverterCon">Convert</button><button id="baseConverterReset">Reset</button><button id="baseConverterSwap">Swap</button></div><textarea disabled="disabled" name="baseConverterResult" id="baseConverterResult" cols="30" rows="5"></textarea></div><div class="baseConAndCalControls"><h4>Base Calculator</h4><label for="baseCalSelectBase">Select Base:</label><select name="baseCalSelectBase" id="baseCalSelectBase"><option value="2">2 (binary)</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8 (octal)</option><option value="9">9</option><option value="10">10 (decimal)</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16 (hex)</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option></select><label for="baseCalFirstName">First Number:</label><input type="text" id="baseCalFirstName"><label for="baseCalOperation">Operation:</label><select name="baseCalOperation" id="baseCalOperation"><option value="add">+</option><option value="subtract">-</option><option value="multiply">×</option><option value="divide">÷</option><option value="mod">mod</option></select><label for="baseCalSecondName">Second Number:</label><input type="text" id="baseCalSecondName"><div class="baseConAndCalBtnCtrl"><button id="baseCalCal">Calculate</button><button id="baseCalReset">Reset</button></div><textarea disabled="disabled" name="baseCalResult" id="baseCalResult" cols="30" rows="5"></textarea></div></div>`


    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')

    const baseConverterInputNumber = document.querySelector('#baseConverterInputNumber')
    const baseConverterFromBase = document.querySelector('#baseConverterFromBase')
    const baseConverterToBase = document.querySelector('#baseConverterToBase')
    const baseConverterResult = document.querySelector('#baseConverterResult')

    const baseConverterCon = document.querySelector('#baseConverterCon')
    const baseConverterReset = document.querySelector('#baseConverterReset')
    const baseConverterSwap = document.querySelector('#baseConverterSwap')

    const baseCalSelectBase = document.querySelector('#baseCalSelectBase')
    const baseCalFirstName = document.querySelector('#baseCalFirstName')
    const baseCalOperation = document.querySelector('#baseCalOperation')
    const baseCalSecondName = document.querySelector('#baseCalSecondName')
    const baseCalResult = document.querySelector('#baseCalResult')

    const baseCalCal = document.querySelector('#baseCalCal')
    const baseCalReset = document.querySelector('#baseCalReset')

    baseCalResetFunc()
    baseConResetFunc()
    modalTitle.textContent = 'Base Converter & Calculator'
    modalDescription.textContent = 'Base converter and calculator helps you convert numbers between different bases (e.g., binary, octal, decimal, hexadecimal) and perform basic arithmetic operations in various bases. It simplifies the manipulation and understanding of numbers in different numeral systems.'

    function baseCalResetFunc() {
        baseCalSelectBase.value = '2'
        baseCalFirstName.value = ''
        baseCalSecondName.value = ''
        baseCalOperation.value = 'add'
        baseCalResult.value = ''
    }

    function baseCalGetResult() {
        try {

            let firstNumber = parseInt(convertBase(baseCalFirstName.value, parseInt(baseCalSelectBase.value), 10))

            let secondNumber = parseInt(convertBase(baseCalSecondName.value, parseInt(baseCalSelectBase.value), 10))

            let result;

            if (baseCalOperation.value == 'add') {
                result = firstNumber + secondNumber;
            } else if (baseCalOperation.value == 'subtract') {
                result = firstNumber - secondNumber;
            } else if (baseCalOperation.value == 'multiply') {
                result = firstNumber * secondNumber;
            } else if (baseCalOperation.value == 'divide') {
                result = firstNumber / secondNumber;
            } else if (baseCalOperation.value == 'mod') {
                result = firstNumber % secondNumber;
            }

            baseCalResult.value = convertBase(result, 10, parseInt(baseCalSelectBase.value))

        } catch (error) {
            // console.log(error)
            baseCalResult.value = "Invalid Input :("
        }
    }

    function baseConGetResult() {
        try {
            baseConverterResult.value = convertBase(baseConverterInputNumber.value, parseInt(baseConverterFromBase.value), parseInt(baseConverterToBase.value));

        } catch (error) {
            // console.log(error)
            baseConverterResult.value = "Invalid Input :("
        }
    }

    function baseConResetFunc() {
        baseConverterInputNumber.value = ''
        baseConverterResult.value = ''
        baseConverterFromBase.value = '10'
        baseConverterToBase.value = '2'

    }
    baseConverterReset.addEventListener('click', baseConResetFunc)
    baseConverterCon.addEventListener('click', baseConGetResult)
    baseConverterSwap.addEventListener('click', () => {
        [baseConverterFromBase.value, baseConverterToBase.value] = [baseConverterToBase.value, baseConverterFromBase.value]
    })

    baseCalCal.addEventListener('click', baseCalGetResult)
    baseCalReset.addEventListener('click', baseCalResetFunc)
}