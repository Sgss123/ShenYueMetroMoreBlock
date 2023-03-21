"use strict";

$(function () {
  // 当DOM加载完成后执行以下代码
  $('#start').click(function () {
    // 当按钮被点击时执行以下代码
    $(this).prop('disabled', true); // 禁用按钮

    $('#status').text('正在测试，请稍等...'); // 更新测试状态为"正在测试，请稍等..."

    $.get('https://www.speedtest.net/speedtest-servers.php', function (data) {
      // 向服务器发起HTTP GET请求，获取服务器列表
      var startTime = new Date().getTime(); // 记录当前时间

      $.get('https://www.baidu.com/img/flexible/logo/pc/result.png', function (data) {
        // 向Google发起HTTP GET请求，获取Google Logo
        var endTime = new Date().getTime(); // 记录当前时间

        var duration = (endTime - startTime) / 1000; // 计算下载时间

        var speed = data.length / duration / 1024 / 1024 * 8; // 计算下载速度，单位Mbps

        $('#result').text('下载速度为：' + speed.toFixed(2) + ' Mbps'); // 显示下载速度

        $('#status').text(''); // 清空测试状态

        $('#start').prop('disabled', false); // 启用按钮
      }).fail(function () {
        // 当请求失败时执行以下代码
        $('#status').text('测试失败，请重试'); // 更新测试状态为"测试失败，请重试"

        $('#start').prop('disabled', false); // 启用按钮
      });
    }).fail(function () {
      // 当请求失败时执行以下代码
      $('#status').text('测试失败，请重试'); // 更新测试状态为"测试失败，请重试"

      $('#start').prop('disabled', false); // 启用按钮
    });
  });
});