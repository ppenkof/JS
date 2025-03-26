function attachEvents() {
  const url = "http://localhost:3030/jsonstore/messenger";
  const textArea = document.getElementById("messages");
  const nameInput = document.querySelector("input[name = author]");
  const messageInput = document.querySelector("input[name = content]");
  const sendBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");

sendBtn.addEventListener("click", sendMessage);

function sendMessage(){
 
    const authorName = nameInput.value;
    const messageText = messageInput.value;
    if(authorName==='' || messageText===''){
        return;
    }
    
    fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({author: authorName, content: messageText})
    })
    .catch(err => console.error(err));  
    nameInput.value = "";
    messageInput.value = "";
}

refreshBtn.addEventListener("click", refreshMessages);

function refreshMessages(){

    fetch(url)
    .then(res => res.json())
    .then(data => {
        textArea.value = Object.values(data).map(m => `${m.author}: ${m.content}`).join("\n");
    })
    .catch(err => console.error(err));
}

}

attachEvents();
