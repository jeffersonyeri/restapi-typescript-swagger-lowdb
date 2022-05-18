import app from "./app";
import {createConnection} from "./db";

createConnection();
app.listen(app.get('port'));
console.log("Server is running on port 3000");