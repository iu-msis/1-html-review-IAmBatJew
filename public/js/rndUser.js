function makeDate(dob) {
    let dt= new Date(dob);
    let Month= dt.getMonth() +1;
    let Year= dt.getFullYear();
    let Day= dt.getDay() +1;
    return Month + "/"  + Day + "/" + Year;
}

const rndUser = {
    data() {
        return {
            result: {},
            date: {},
        }
    },
    
    created() {
    fetch('https://randomuser.me/api')
    
    .then( response => response.json())

    .then((json) => {
        console.log(json);
        this.result = json.results[0];
        this.date= makeDate(json.results[0].dob.date);
    }
    )

    .catch( (error) => {

            console.error(error);
    })
}
}

Vue.createApp(rndUser).mount('#rndUserApp')