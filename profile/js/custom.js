    //변수 windowHeight에 브라우저의 높이값을 저장
    const windowHeight = window.innerHeight + 'px';

    //브라우저의 높이값을 section의 높이값으로 지정
    let section = document.querySelectorAll('section')

    for (let i = 0; i < section.length; i++) {
        section[i].style.height = windowHeight
    }

    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
    window.addEventListener('resize', function () {
        for (let i = 0; i < section.length; i++) {
            section[i].style.height = windowHeight
        }
    })

    /* Get a index number from siblings */
    function getIndex(jake) {
        let _i = 0;
        while ((jake = jake.previousSibling) != null) {
            _i++;
        }

        return parseInt(_i / 2);
    }

    /* jQuery의 index()메소드 ==> VanillaJS */
    //  1. 0의 값을 가지는 변수 _i를 선언
    //  2. while 루프를 사용하여 현재 요소의 이전 요소를 찾음
    //  3. 이 전 요소가 있으면 _i에 1을 더하기
    //  4. 만약 이 전 요소가 없는 경우 루프를 종료
    //  5. _i는 이 전 요소의 개수 만큼이므로 이를 반환함.


    /*  주 메뉴 클릭시 자동으로 상하 스크롤 시키기  */
    let menuBtn = document.querySelectorAll('#menu li')
    menuBtn.forEach(function (liitem) {
        liitem.addEventListener('click', function (e) {

            e.preventDefault();
            //  1. a태그의 기본속성을 제거


            let liIndex = getIndex(this);
            //  2. 선택한 인덱스넘버 호출

            let nowTop = liIndex * parseInt(windowHeight);
            //  3. 인덱스넘버 * 스크린의 높이로 이동할 거리 구함
            //  console.log(nowTop);            
            window.scrollTo({
                top: nowTop,
                behavior: 'smooth'
            });
            //  4. 이동
        });

    });




    /*	화면이 스크롤 될 때 현재 영역에 해당하는 메뉴 활성화하기 */

    window.addEventListener('scroll', function () {
        const nowScroll = window.scrollY;
        const topMenu = document.querySelector('#menu')
        const topMenuLi = document.querySelectorAll('#menu li')
        const topMenuA = document.querySelectorAll('#menu a')
        const ht = window.innerHeight

        // 첫화면에서는 메뉴를 안보이게 설정한다.    
        if (nowScroll > 0) {
            topMenu.style.opacity = 1
        } else {
            topMenu.style.opacity = 0
        }
        // 이 구간에 서는 폰트컬러를 달리해야 한다.
        if (nowScroll > 4000 && nowScroll < 5000) {
            Array.prototype.forEach.call(topMenuA, (elem) => {
                elem.style.color = '#fff'
            });
        } else {
            Array.prototype.forEach.call(topMenuA, (elem) => {
                elem.style.color = '#333'
            });
        }
        //기존의 li의 class를 모두 지우고 현재 섹션의 li에만 class를 부여한다.
        for (let a = 0; a < topMenuLi.length; a++) {
            topMenuLi[a].classList.remove('on')
            if (nowScroll >= ht * a && nowScroll < ht * (a + 1)) {
                topMenuLi[a].classList.toggle('on')
            };
        }

    });


    /*
        mousewheel 이벤트는 
        다른 브라우저들과 firefox의 사용법이 
        다소 상이하기 때문에 브라우저를 인식해서
        작동하는 함수를 만들었습니다!
    */
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
        for (let b = 0; b < section.length; b++) {
            section[b].addEventListener(browser, function (e) {
                e.preventDefault();
                if (browser == 'mousewheel') {
                    let wheelData = e.wheelDelta

                    if (wheelData > 0 && window.scrollY > 960) {
                        let prev = this.previousElementSibling.offsetTop;
                        window.scrollTo({
                            top: prev,
                            behavior: 'smooth'
                        })
                    } else if (wheelData < 0 && window.scrollY < 5000) {
                        let next = this.nextElementSibling.offsetTop;
                        window.scrollTo({
                            top: next,
                            behavior: 'smooth'
                        })
                    }
                } else if (browser == 'DOMMouseScroll') {
                    let wheelData = e.detail

                    if (wheelData < 0 && window.scrollY > 960) {
                        let prev = this.previousElementSibling.offsetTop;
                        window.scrollTo({
                            top: prev,
                            behavior: 'smooth'
                        })
                    } else if (wheelData > 0 && window.scrollY < 5000) {
                        let next = this.nextElementSibling.offsetTop;
                        window.scrollTo({
                            top: next,
                            behavior: 'smooth'
                        })
                    }
                }

            })

        }
    }
    verScroll(checkVer)


    let el = document.querySelector('.main-text')
    let options = {
        text: '안 녕 하 세 요 ! \n 웹 ─ 퍼 블 리 셔 박 형 빈 의 \n 포 트 폴 리 오 페 이 지 입 니 다.',
        textSpeed: 110,
        blinkSpeed: 0.06
    }

    let instance = new tinytyper(el, options);
