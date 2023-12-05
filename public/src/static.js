
(() => {
    class JSQ {
        static query = [];
        static connection = null;

        constructor(previous) { JSQ.query = JSQ.query + previous }

        reset() {
            this.query = [];
        }

        execute() {
            return null;
        }
    }

    function FROM(table) {
        return new FROM();
    }

    class FROM {
        constructor(table) {
            this.table = table;
        }

        GET(key) {

        }
    }
})();