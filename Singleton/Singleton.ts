/*
    Design Pattern: Singleton
*/

class Connection {
    
    private constructor () {}

    private static conn: Connection;


    static getInstance () {
        if (!this.conn) {
            this.conn = new Connection();
        }
        return this.conn;
    }
}

// This line throws an error, because the constructor is private
// disponible only inside of class.

// const conn = new Connection();

const conn1 = Connection.getInstance();
const conn2 = Connection.getInstance();

// This must be true, if two instances are the same.
console.log(conn1 === conn2);