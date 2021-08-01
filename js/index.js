window.onload = function () {
    let hotApply = document.querySelector('#hotApply');
    let report = document.querySelector('#report_a');
    let findplay = document.querySelector('#findplay');
    let buygoods = document.querySelector('#buygoods');
    let hot_apply = document.querySelector('.hot_apply');
    ajax('http://192.168.0.137:3000/useing/public', hotApply, 'nav', fun);

    function fun() {
        var hot_apply = document.querySelector('.hot_apply');
        var Timer = null;
        var lis = document.querySelectorAll('.hot_list');
        var inner = document.querySelector('.hotgoods');
        var Timer2 = null;
        var index = 0;
        let addli = lis[0].cloneNode(true);
        console.log(hot_apply);
        hot_apply.appendChild(addli);
        function auto() {
            let step = 0;
            let autoStep = 20;
            let star = inner.scrollLeft;
            let end = lis[0].offsetWidth * index;
            console.log(lis[0].offsetWidth);
            let move = (end - star)/autoStep;
            Timer2 = setInterval(function () {
                step++;
                // 当执行等于20次后清除定时器
                if (step >= autoStep) {
                    clearTimeout(Timer2)
                }
                // console.log(move);
                star += move;
                inner.scrollLeft += move;
            }, 10)

        };
        Timer = setInterval(times, 1000);
        function times() {
            index++;
            // num++;
            // 当index值等于imgs.length时，将inner的滚动条设置为0；直接显示第一张图片
            if (index == lis.length) {
                inner.scrollLeft = 0;
                index = 1;
            }
            auto();
        }

    }

    ajax('http://192.168.0.137:3000/guid/new', report, 'nav1',Report);
    function Report(){
        let more = document.querySelector(".more");
        let report_list = document.querySelector('.report_list');
        more.addEventListener('click',function(){
            report_list.style.height = '100%';
        })
    }
    ajax('http://192.168.0.137:3000/guid/hot', buygoods, 'nav2',function(){
        let more = document.querySelector(".more_");
        console.log(more);
        let buy_list = document.querySelector('.buy_list');
        more.addEventListener('click',function(){
            console.log(buy_list);
            buy_list.style.height = '100%';
        })
    });
    ajax('http://192.168.0.137:3000/play/new', findplay, 'nav3', function () {
        let loading = document.querySelector('.loading');
        let findplay = document.querySelector('.findplay_list');
        loading.addEventListener('click', function () {
            findplay.style.height = '100%';
            this.style.display = 'none';
        })
    });







}