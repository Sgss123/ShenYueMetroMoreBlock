<!DOCTYPE html>
<html lang="en">

<head>
    <!--文档类型声明-->
    <meta charset="UTF-8">
    <!--设置浏览器兼容性-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--设置页面适应设备宽度-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--设置页面的字符集-->
    <meta charset="UTF-8">
    <!--设置浏览器兼容性-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--设置页面适应设备宽度-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--设置页面的简要描述-->
    <meta name="description" content="深月铁路更多方块Mod">
    <!--设置页面的关键词-->
    <meta name="keywords" content="ShenYue Metro">
    <!--设置页面的作者-->
    <meta name="author" content="Sgss">
    <!--设置页面的版权信息-->
    <meta name="copyright" content="ShenYue Metro">
    <!--设置页面的爬虫策略-->
    <meta name="robots" content="All">
    <!--引入jQuery库-->
    <script src="/static/scripts/jquery-3.6.4.min.js"></script>
    <!--引入jQuery cookie插件-->
    <script src="/static/npm/jquery-cookie@1.4.1/jquery.cookie.min.js"></script>
    <!--引入语言切换脚本-->
    <script src="/static/scripts/language-switch.js"></script>
    <!--设置页面标题-->
    <title id="downloadPageTitle"></title>
</head>

<body>
    <!--用于占位navbar的div-->
    <nav id="nav-placeholder"></nav>
    <?php
    // 设置要列出的目录
    $dir = 'static/mods';
    // 打开目录
    if ($handle = opendir($dir)) {
        // 输出表格头部
        echo '<table>';
        echo '<thead><tr><th id="fileName"></th><th id="fileSize"></th><th id="fileChangeTime"></th><th id="fileDownload"></th></tr></thead>';
        echo '<tbody>';
        // 循环读取目录中的文件
        while (false !== ($file = readdir($handle))) {
            if ($file != '.' && $file != '..') {
                // 获取文件大小和修改时间
                $size = filesize($dir . '/' . $file);
                $mtime = date('Y-m-d H:i:s', filemtime($dir . '/' . $file));
                // 输出文件信息
                echo '<tr>';
                echo '<td>' . $file . '</td>';
                echo '<td>' . $size . ' bytes</td>';
                echo '<td>' . $mtime . '</td>';
                echo '<td>' . '<a href="/static/mods/' . $file . '" id="DownloadLink"></a></td>';
                echo '</tr>';
            }
        }
        // 输出表格尾部
        echo '</tbody>';
        echo '</table>';
        // 关闭目录句柄
        closedir($handle);
    }
    ?>
    <!--获取URL参数，根据参数值调用对应语言的语言切换函数-->
    <script>
        var params = new URLSearchParams(window.location.search);
        var langCode = params.get('lang');
        switchLanguage(langCode, 'en');
    </script>
    <!--引入navbar脚本-->
    <script src="/static/scripts/nav.js"></script>
</body>

</html>