function switchLanguage(langCode, defaultLangCode) {
    // 如果未指定语言代码，则使用默认语言代码
    if (!langCode) {
        langCode = defaultLangCode;
    }
    // 根据语言代码获取对应的JSON文件
    var langFile = '/static/lang/' + langCode + '.json';
    $.ajax({
        url: langFile,
        dataType: 'json',
        success: function (langData) {
            // 更新页面中需要切换语言的元素的文本内容
            $('#heading').text(langData.heading);
            $('#content').text(langData.content);
            // ...
        }
    });
}