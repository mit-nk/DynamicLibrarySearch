var select = document.getElementById('select');
var options = document.getElementById('select').options;

document.getElementById('save').onclick = function() {
     localStorage['pref'] = options.item(select.selectedIndex).value;

    document.getElementById("save_gone").innerHTML="<div id='save_gone'>設定を保存しました</div>"

}

document.body.onload = function() {

    var i=0;
    while (i < options.length) {
        if (options[i].value == localStorage['pref'] ) {
            options[i].selected = true;
            break;
        } else {
            options[12].selected = true;
        }
        i++;
    }
}