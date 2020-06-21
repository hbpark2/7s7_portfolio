const windowHeight = window.innerHeight + 'px';
const sectionOj = document.querySelectorAll('.box')

for (let i = 0; i < sectionOj.length; i++) {
    sectionOj[i].style.height = windowHeight;
}

document.addEventListener('resize', function () {
    for (let i = 0; i < sectionOj.length; i++) {
        sectionOj[i].style.height = windowHeight;
    }
})

const userAgent = window.navigator.userAgent.toLowerCase();
const isChrome = userAgent.indexOf('chrome');
const isFirefox = userAgent.indexOf('firefox');
let checkVer = '';
if (isChrome > 0)
checkVer = 'mousewheel';
if (isFirefox > 0)
checkVer = 'DOMMouseScroll';

console.log(checkVer)

function verScroll(browser) {
    for (let i = 0; i < sectionOj.length; i++) {
        sectionOj[i].addEventListener(browser, function (e) {
            e.preventDefault();
            if(browser == 'mousewheel'){
                let wheelData = e.wheelDelta;
                let currTop = this.offsetTop;
                let lastTop = sectionOj[sectionOj.length - 1].offsetTop;
                if (wheelData > 0 && currTop > 100) {
                    let prevWheelData = this.previousElementSibling.offsetTop;
                    window.scrollTo({
                        top: prevWheelData,
                        behavior: 'smooth'
                    })
                } else if (wheelData < 0 && currTop < lastTop) {
                    let nextWheelData = this.nextElementSibling.offsetTop;
                    window.scrollTo({
                        top: nextWheelData,
                        behavior: 'smooth'
                    })
                }    
            }
            else if(browser == 'DOMMouseScroll'){
                let wheelData = e.detail;
                let currTop = this.offsetTop;
                let lastTop = sectionOj[sectionOj.length - 1].offsetTop;
                if (wheelData < 0 && currTop > 100) {
                    let prevWheelData = this.previousElementSibling.offsetTop;
                    window.scrollTo({
                        top: prevWheelData,
                        behavior: 'smooth'
                    })
                } else if (wheelData > 0 && currTop < lastTop) {
                    let nextWheelData = this.nextElementSibling.offsetTop;
                    window.scrollTo({
                        top: nextWheelData,
                        behavior: 'smooth'
                    })
                }    
            }

        })
    }
    
}
verScroll(checkVer)