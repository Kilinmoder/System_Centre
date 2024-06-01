var ipAddress;
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ipAddress = "您的IP为: " + data.ip + "  您的IP已被记录!!";
    document.getElementById('ipAddress').innerHTML = ipAddress;
  })
  .catch(error => console.error('Unable to get IP address:', error));
