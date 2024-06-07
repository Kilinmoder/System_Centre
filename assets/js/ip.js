

var ipAddress;
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ipAddress = "您的IP为: " + data.ip + " | 欢迎访问本网站";
    document.getElementById('ipAddress').innerHTML = ipAddress;
    console.log("IP地址获取成功加载!");
  })
  .catch(error => console.error('Unable to get IP address:', error));

function secondToDate(second) {
  if (!second) {
      return 0;
  }
  var time = new Array(0, 0, 0, 0, 0);
  if (second >= 365 * 24 * 3600) {
      time[0] = parseInt(second / (365 * 24 * 3600));
      second %= 365 * 24 * 3600;
  }
  if (second >= 24 * 3600) {
      time[1] = parseInt(second / (24 * 3600));
      second %= 24 * 3600;
  }
  if (second >= 3600) {
      time[2] = parseInt(second / 3600);
      second %= 3600;
  }
  if (second >= 60) {
      time[3] = parseInt(second / 60);
      second %= 60;
  }
  if (second > 0) {
      time[4] = second;
  }
  return time;
}
function setTime() {
  var create_time = Math.round(new Date(Date.UTC(2023, 12, 31, 6, 6, 6)).getTime() / 1000);
  var timestamp = Math.round((new Date().getTime() + 8 * 60 * 60 * 1000) / 1000);
  currentTime = secondToDate((timestamp - create_time));
  currentTimeHtml = currentTime[0] + '年' + currentTime[1] + '天'
          + currentTime[2] + '时' + currentTime[3] + '分' + currentTime[4]
          + '秒';
  document.getElementById("htmer_time").innerHTML = currentTimeHtml;
  console.log("网站运行时间获取正常!")
}    
setInterval(setTime, 1000);

        // 回调函数，用于处理 JSONP 返回的数据
        function handleJSONPResponse(data) {
          const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
          const yiyanapi = parsedData.hitokoto + " --- " + parsedData.from;
          document.getElementById('yiyanapi').innerHTML = yiyanapi;
          console.log("一言API成功加载!");
      }

      document.addEventListener('DOMContentLoaded', function() {
          // 创建一个 script 标签
          const script = document.createElement('script');
          // 设置 src 属性，包含 API URL 和回调参数
          script.src = 'https://v1.hitokoto.cn/?callback=handleJSONPResponse';
          // 将 script 标签插入到文档中
          document.body.appendChild(script);
      });