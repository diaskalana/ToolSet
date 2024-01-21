import Chart from 'chart.js/auto'
import { Colors } from 'chart.js';
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";
import Toastify from 'toastify-js'

export function chartGenerator() {
    Chart.register(Colors);

    document.querySelector('.modalTarget').innerHTML = `<div class="chartGenerator"><div class="chartGeneratorControls"><h4>Basic Configuration</h4><label for="cGenTitle">Chart Title:</label><input type="text" name="cGenTitle" id="cGenTitle"><label for="cGenType">Chart Type:</label><select name="cGenType" id="cGenType"><option value="bar">Bar Chart</option><option value="pie">Pie Chart</option><option value="doughnut">Doughnut Chart</option><option value="line">Line Chart</option></select><div class="cGenCheckboxes"><label for="cGenTitlecb"><input type="checkbox" id="cGenTitlecb">Chart Title</label><label for="cGenLegend"><input type="checkbox" id="cGenLegend">Legend</label></div><h4>Chart Configuration</h4><div class="chartConfig"><label for="cGenXLabel">Horizontal Label:</label><input id="cGenXLabel" type="text"><label for="cGenYLabel">Vertical Label:</label><input id="cGenYLabel" type="text"><label for="cGenDataLabels">Data Labels:</label><input id="cGenDataLabels" placeholder="comma separated" type="text"><label for="cGenDataValues">Data Values:</label><input id="cGenDataValues" placeholder="comma separated" type="text"><div class="cGenDataTypeContainer"><label for="cGenDataType">Data Type:</label><input id="cGenDataType" type="text"></div></div></div><div class="chartGeneratorOutput"><div class="chartGeneratorPreview"><canvas id="cGenChart"></canvas></div><div class="chartGeneratorBtns"><button id="chartGeneratorReset">Reset</button><button id="chartGeneratorDownload">Download</button><div><select name="cigExportType" id="cGenExportType"><option value="png">PNG</option><option value="jpeg">JPEG</option></select></div></div></div>`

    const modalTitle = document.querySelector('.modalHeader h3')
    const modalDescription = document.querySelector('.modalDescription')

    const chartGeneratorControls = document.querySelector('.chartGeneratorControls')
    const chartGeneratorPreview = document.querySelector('.chartGeneratorPreview')
    const cGenDataTypeContainer = document.querySelector('.cGenDataTypeContainer')


    const cGenTitle = document.querySelector('#cGenTitle')
    const cGenType = document.querySelector('#cGenType')
    const cGenTitlecb = document.querySelector('#cGenTitlecb')
    const cGenLegend = document.querySelector('#cGenLegend')

    const cGenXLabel = document.querySelector('#cGenXLabel')
    const cGenYLabel = document.querySelector('#cGenYLabel')
    const cGenDataLabels = document.querySelector('#cGenDataLabels')
    const cGenDataValues = document.querySelector('#cGenDataValues')
    const cGenDataType = document.querySelector('#cGenDataType')

    const chartGeneratorReset = document.querySelector('#chartGeneratorReset')
    const chartGeneratorDownload = document.querySelector('#chartGeneratorDownload')
    const cGenExportType = document.querySelector('#cGenExportType')



    Chart.defaults.color = '#000000';
    Chart.defaults.font.family = `"Montserrat", sans-serif`


    chartGeneratorControls.addEventListener('input', cGenUpdateChart)
    chartGeneratorControls.addEventListener('change', cGenUpdateCb)
    cGenType.addEventListener('input', cGenUpdateType)

    chartGeneratorReset.addEventListener('click', cGenResetFunc)
    chartGeneratorDownload.addEventListener('click', () => {
        try {
            if (cGenExportType.value == 'png') {

                htmlToImage.toPng(chartGeneratorPreview)
                    .then(function (dataUrl) {
                        download(dataUrl, 'chartGenerator(ToolSet).png');
                    })
                    .catch(function (error) {
                        console.error('oops, something went wrong!', error);
                    });
            } else if (cGenExportType.value == 'jpeg') {
                htmlToImage.toJpeg(chartGeneratorPreview, { quality: 0.95 })
                    .then(function (dataUrl) {
                        download(dataUrl, 'chartGenerator(ToolSet).jpeg');
                    });
            }
            Toastify({
                text: "📥 Image Downloaded!",
                className: "info",
                className: "notification",
                offset: {
                    x: 20,
                    y: 20
                },
            }).showToast();
        } catch (error) {
            console.log(error)
        }

    })

    function cGenUpdateCb() {
        if (cGenTitlecb.checked == true) {
            cGenConfig.options.plugins.title.display = true
        } else {
            cGenConfig.options.plugins.title.display = false
        }

        if (cGenLegend.checked == true) {
            cGenConfig.options.plugins.legend.display = true
        } else {
            cGenConfig.options.plugins.legend.display = false
        }
        cGenChart.update('none');
    }

    function cGenUpdateChart() {

        cGenConfig.options.plugins.title.text = cGenTitle.value;
        cGenConfig.data.labels = cGenDataLabels.value.split(',')
        cGenConfig.data.datasets[0].data = cGenDataValues.value.split(',')
        cGenConfig.options.scales['x'].title.text = cGenXLabel.value
        cGenConfig.options.scales['y'].title.text = cGenYLabel.value
        cGenConfig.data.datasets[0].label = cGenDataType.value

        cGenChart.update('none');

    }
    function cGenResetFunc() {
        modalTitle.textContent = 'Chart Generator'
        modalDescription.textContent = 'Chart generator is a web tool that quickly creates charts and graphs from user-inputted data. It offers customization options and you can download or share the generated charts for presentations or reports. It simplifies the process of creating visual representations without requiring advanced design skills.'
        cGenTitle.value = 'Custom Chart Title'
        cGenType.value = 'pie'
        cGenTitlecb.checked = true
        cGenLegend.checked = true
        cGenXLabel.value = 'X-Axis'
        cGenYLabel.value = 'Y-Axis'
        cGenDataLabels.value = 'Label1,Label2,Label3,Label4,Label5,Label6,Label7'
        cGenDataValues.value = '20,30,15,12,21,30,40'
        cGenDataType.value = 'Custom Data Type'

        cGenUpdateType()
        cGenUpdateChart()
        cGenUpdateCb()
    }

    function cGenUpdateType() {
        cGenConfig.type = cGenType.value
        if (cGenType.value == 'bar' || cGenType.value == 'line') {
            cGenDataTypeContainer.style.display = 'block'
            cGenConfig.data.datasets[0].borderWidth = 1
        } else {
            cGenDataTypeContainer.style.display = 'none'
            cGenConfig.data.datasets[0].borderWidth = 0
        }

        cGenChart.destroy()
        cGenChart = new Chart(
            document.getElementById('cGenChart'),
            cGenConfig
        );
    }
    const cGenConfig = {
        type: 'bar',
        options: {
            animation: false,
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true
                    }
                },
                y: {
                    title: {
                        display: true
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                tooltip: {
                    enabled: false
                },
                title: {
                    display: true,
                    text: `Custom Chart Title`,
                    padding: {
                        bottom: 20,
                    },
                    font: {
                        size: 15,
                        weight: "normal",

                    }
                },
                colors: {
                    forceOverride: true
                }
            },
        },
        data: {
            labels: ['a', 'b'],
            datasets: [
                {
                    label: 'Custom Data Type',
                    data: [20, 10],
                    // borderWidth: 0,

                }
            ]
        }
    }
    let cGenChart = new Chart(
        document.getElementById('cGenChart'),
        cGenConfig
    );

    cGenResetFunc()
}