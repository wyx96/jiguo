function ajax(address, title, id, fn) {
    let xml = new XMLHttpRequest();
    xml.open('get', address);
    xml.send();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4) {
            if (xml.status == 200) {
                let obj = JSON.parse(xml.responseText);
                tem(title, id, obj, fn);

            }
        }
    }
}

function tem(title, id, a, fn) {
    var tpl = document.getElementById(id).innerHTML;
    let nav = template.render(tpl, {
        list: a
    });
    console.log(a);
    title.innerHTML = nav;
    if (fn == undefined) {
        return;
    } else {
        fn();
    }

};