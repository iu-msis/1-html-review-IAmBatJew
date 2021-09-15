const rndUser = {
    data() {
        return {
            result: {},
        }
    },
    
    created() {
    fetch('https://randomuser.me/api')
    
    .then( response => response.json())

    .then((json) => {
        console.log(json);
        this.result = json.results[0];
    }
    )

    .catch( (error) => {

            console.error(error);
    })
}
}

Vue.createApp(rndUser).mount('#rndUserApp')