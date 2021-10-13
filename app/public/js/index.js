const Offer = {
    data() {
        return {
            "books": [],
            bookForm: {}
        }
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
        }
    },

    methods: {

        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },

        fetchBookData(){
            fetch('/api/bookList/')
        
            .then( response => response.json())
    
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            }
            )
    
            .catch( (err) => {
    
                    console.error(err);
            })
        },

        fetchOfferData(s){
            console.log("Fetching offer data for ", s);
            fetch('/api/offers/offersIndex.php?student=' + s.id)
            .then( response => response.json())
            .then( (responseJson) => {
                console.log(responseJson);
                this.offers = responseJson;
            })
    
            .catch( (err) => {
    
                    console.error(err);
            })
        },

        postNewBook(evt) {
            
            console.log("Posting:", this.bookForm);
            // alert("Posting!");
    
            fetch('api/bookList/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                    "content-Type": "application/json; charset=utf-8"
                }
            })
            .then( response => response.json() )
            .then ( json => {
                console.log("Returned from post:", json);
                //TODO: test a result was returned!
                this.books = json;
    
                //Reset the form
                this.bookForm = {};
            });
        },
    },

    created() {
        this.fetchBookData();
    }
}


Vue.createApp(Offer).mount('#offerApp')