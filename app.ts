require('dotenv').config();
import Koa from 'koa';
const app = new Koa();
import bodyParser from 'koa-bodyparser';
const port = process.env.PORT || 3011;
app.use(bodyParser());
import db from './models/index';
import router from './routes/index';

const start = async () => { 
    try {
        await db.sequelize.sync();
        await db.sequelize.authenticate();
app.listen(port, ()=>{
    console.log(`Server is working on port ${port}`);
})
    }
    catch(e) {
        console.log(e);
    }

}
app.use(router.routes());
start();