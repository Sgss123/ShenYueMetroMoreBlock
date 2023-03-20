var $nav = $('<nav>').html(`
<link rel="stylesheet" href="/static/css/navbar.css">
  <nav>
        <ul>
            <li><a id="Home" href="/"></a></li>
            <li><a id="Download" href="/download"></a></li>
            <li><a id="About" href="/about"></a></li>
            <li>
                <div class="dropdown">
                    <a href="javascript:void(0);" id="FriendlyLinks" class="dropbtn"></a>
                    <div class="dropdown-content">
                        <a href="#">链接 1</a>
                        <a href="#">链接 2</a>
                        <a href="#">链接 3</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="dropdown">
                    <a href="#" id="ChooseLanguage" class="dropbtn">语言</a>
                    <div class="dropdown-content">
                        <a href="?lang=en">English</a>
                        <a href="?lang=zh-Hans">简体中文(中国大陆)</a>
                        <a href="?lang=zh-Hant">繁體中文</a>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
`);
$('#nav-placeholder').append($nav);