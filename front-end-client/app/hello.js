import getHost from "./host.js";
import moment from "moment";

class HelloController {
    constructor($http) {
        this.name = "";
        this.response = "";
        this.$http = $http;
    }

    sayHello() {
        var self = this;
        console.log("Saying hello: " + this.name);
        this.$http.post(getHost() + "/api/hello", {"name": this.name}).then(function(response) {
            var r = response.data.response;
            console.log("data: " + r);
            self.response = r;
        })
    }

    currentTime() {
        return moment();
    }
}

HelloController.$inject = ["$http"];

export default HelloController
