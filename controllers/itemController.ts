import db from '../models/index';
class itemController {
    async getItem (ctx: any){
    try {
        const users = await db.Item.findAll();
        ctx.body = users;
    }
    catch(e) {
        console.log(e);
    }
    }

    async createItem (ctx: any){
    try {
        const name = ctx.request.body.name;
        const checkName = await db.Item.findOne({
            where: {name}
        });

        if(checkName) {
            ctx.body = `Item with this ${name} was created`;
        }
        else {
            const item = await db.Item.create({
                name: ctx.request.body.name,
                price: ctx.request.body.price
            });

        await item.save();
        ctx.body = item;
        }
    }

    catch(e) {
        console.log(e);
    }
    }
}


export default new itemController;