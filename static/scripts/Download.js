// // 当文档加载完成时执行以下代码
// $(document).ready(function () {
//     // 发送 GET 请求获取目录列表
//     $.get('static/mods/', function (data) {
//         // 将目录列表分割成文件名、文件大小和文件类型三部分
//         var fileList = data.split('\n');
//         // 获取表格的 tbody 元素
//         var tableBody = $('#file-list tbody');
//         // 遍历每个文件，创建一个新的表格行并添加到表格中
//         fileList.forEach(function (file) {
//             // 将文件信息分割成文件名、文件大小和文件类型三部分
//             var fileInfo = file.split('\t');
//             // 如果文件信息数组长度为 3，表示该行是有效的文件信息行
//             if (fileInfo.length === 3) {
//                 // 获取文件名、文件大小和文件类型
//                 var fileName = fileInfo[0];
//                 var fileSize = fileInfo[1];
//                 var fileType = fileInfo[2];
//                 // 创建下载链接
//                 var downloadLink = '<a href="static/mods/' + fileName + '" id="DownloadLink"></a>';
//                 // 创建表格行的 HTML 代码
//                 var row = '<tr><td>' + fileName + '</td><td>' + fileSize + '</td><td>' + fileType + '</td><td>' + downloadLink + '</td></tr>';
//                 // 将表格行添加到表格的 tbody 元素中
//                 tableBody.append(row);
//             }
//         });
//     });
// });
var xhr = new XMLHttpRequest();
xhr.open('GET', '/static/mods/', true);
xhr.onload = function () {
    if (xhr.status === 200) {
        var fileList = xhr.responseText.split('\n');
        var tableBody = document.querySelector('#file-list tbody');
        fileList.forEach(function (file) {
            var fileInfo = file.split('\t');
            if (fileInfo.length === 3) {
                var fileName = fileInfo[0];
                var fileSize = fileInfo[1];
                var fileType = fileInfo[2];
                var downloadLink = '<a href="/static/mods/' + fileName + '" id="DownloadLink"></a>';
                var row = '<tr><td>' + fileName + '</td><td>' + fileSize + '</td><td>' + fileType + '</td><td>' + downloadLink + '</td></tr>';
                tableBody.innerHTML += row;
            }
        });
    }
};
xhr.send();