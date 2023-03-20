"use strict";

var $nav = $('<nav>').html("\n<link rel=\"stylesheet\" href=\"/static/css/navbar.css\">\n  <nav>\n        <ul>\n            <li><img src=\"/static/images/favicon.png\" style=\"width: 49px;height: 49px;\"/></li>\n            <li><a id=\"Home\" href=\"/\"></a></li>\n            <li><a id=\"Download\" href=\"/download.html\"></a></li>\n            <li><a id=\"About\" href=\"/about\"></a></li>\n            <li>\n                <div class=\"dropdown\">\n                    <a href=\"javascript:void(0);\" id=\"FriendlyLinks\" class=\"dropbtn\"></a>\n                    <div class=\"dropdown-content\">\n                        <a href=\"#\">\u94FE\u63A5 1</a>\n                        <a href=\"#\">\u94FE\u63A5 2</a>\n                        <a href=\"#\">\u94FE\u63A5 3</a>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"dropdown\">\n                    <a href=\"#\" id=\"ChooseLanguage\" class=\"dropbtn\"></a>\n                    <div class=\"dropdown-content\">\n                        <a href=\"?lang=en\">English</a>\n                        <a href=\"?lang=zh-Hans\">\u7B80\u4F53\u4E2D\u6587(\u4E2D\u56FD\u5927\u9646)</a>\n                        <a href=\"?lang=zh-Hant\">\u7E41\u9AD4\u4E2D\u6587</a>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </nav>\n");
$('#nav-placeholder').append($nav);