var select = document.getElementById('select');
var options = document.getElementById('select').options;

document.getElementById('save').onclick = function() {
     localStorage['pref'] = options.item(select.selectedIndex).value;
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