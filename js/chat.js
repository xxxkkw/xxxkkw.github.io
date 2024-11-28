document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('chat-input').value;
    const chatHistory = document.getElementById('chat-history');

    // 显示用户输入
    chatHistory.innerHTML += `<div>User: ${userInput}</div>`;

    // 发送请求到服务器上的 AI 服务
    fetch('http://192.168.137.1:7860/chat', {  // 替换为你的 AI 服务的 IP 和端口
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
        .then(response => response.json())
        .then(data => {
            // 显示 AI 响应
            chatHistory.innerHTML += `<div>AI: ${data.response}</div>`;
        })
        .catch(error => {
            chatHistory.innerHTML += `<div>Error: ${error}</div>`;
        });
});
