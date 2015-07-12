chrome.contextMenus.create({
    "title": "[%s]を図書館で検索する",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        var pref = localStorage['pref'] ? localStorage['pref'] : 'tokyo';
        var url = 'https://calil.jp/local/search?csid=' + pref + '&q=' + encodeURIComponent(info.selectionText);
        chrome.tabs.create({ url: url });
    }
});