axios.get('http://google.com')
    .then(({ data }) => {
        console.log(data);
        for (let google of data.results) {
            console.log(google.name);
        }
        console.log(google.next);
    });
