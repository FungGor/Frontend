//使用 WebSocket 的網址向 Server 開啟連結
let ws = new WebSocket('ws://localhost:3000')

//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
ws.onopen = () => {
    console.log('open connection')
}

//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
    console.log('close connection')
}

var counter = 0
//接收 Server 發送的訊息
ws.onmessage = event => {
    counter++
    console.log(event)
    document.getElementById("dataID").value = event.data
    document.getElementById("sourceID").value = event.origin
    document.getElementById("elapseID").value = String(counter)
}