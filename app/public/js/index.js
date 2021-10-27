const Offer = {
    data() {
        return {
            "books": [],
            selectedBook: null,
            bookForm: {}
        }
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('DD MMM YYYY')
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

        postNewBook(evt) {
            if(this.selectedBook === null) {
                this.postANewBook(evt);
            } else {
                this.postUpdateBook(evt);
            }
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

        postUpdateBook(evt) {
            this.bookForm.id = this.selectedBook.id;
            this.bookForm.id = this.selectedBook.id;

            console.log("Updating:", this.bookForm);
            // alert("Posting!");
    
            fetch('api/bookList/update.php', {
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
                this.resetBookForm();
            });
        },

        selectBook(o) {
            this.selectedBook = o;
            this.bookForm = Object.assign({}, this.selectedBook);
        },

        resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
        },

        postDeleteBook(o) {

            ///Use "prompt" instead of confirm to have them type in a response, not just a clickable button
            if (!confirm("Are you sure you want to delete "+o.title+"?")){
                return; 
            }

            fetch('api/bookList/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
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
                this.resetBookForm();
            });
        },

        postANewBook(evt) {
            
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