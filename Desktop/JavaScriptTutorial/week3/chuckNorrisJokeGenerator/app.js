document.querySelector(".get-fact").addEventListener('click', function (e){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    xhr.onload = function () {
        if(this.status === 200){
            const jokeJSON = JSON.parse(this.responseText);
            
            document.querySelector(".fact-list").innerHTML = jokeJSON.value;
        }
    }

    xhr.send();

    e.preventDefault();
});