function post(url, data){
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(json => {
      if(json.type === 'url'){
          document.getElementById('createDocument').querySelector('.result').style.display = 'block';
          document.getElementById('createDocument').querySelector('.result .url').textContent = json.content;
      }else{
          alert(json.content);
      }
  })
  .catch(err => alert(err));
}

document.addEventListener('submit', e => e.preventDefault());