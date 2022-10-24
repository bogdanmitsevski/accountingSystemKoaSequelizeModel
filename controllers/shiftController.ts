import db from '../models/index';
import moment from 'moment';

class shiftController {
    async startShift(ctx:any) {
        try {
            const lastShift = await db.Shift.findOne({
                where: {finishedAt: null},
                order: [['createdAt', 'DESC']],
            });

            if(lastShift) {
                ctx.body = 'Please, finish last Shift at first';
            }

            else {
                const startedAt = moment();
                const finishedAt = null;
                const newShift:any = await db.Shift.create({
                    startedAt:startedAt,
                    finishedAt:finishedAt
                });
                await newShift.save();
                ctx.body = `New Shift with ID: ${newShift.id} was created`;
            }
        }
        catch(e) {
            console.log(e);
        }
    };

    async finishShift(ctx:any) {
        try {
            const finishedAt = moment();
            const lastShift:any = await db.Shift.findOne({
                order: [['createdAt', 'DESC']]
            });

            if(!lastShift) {
                ctx.body = 'You need to create New Shift at first'
            }

            else {
                ctx.body = lastShift.id;
                lastShift.finishedAt = finishedAt;
                await lastShift.save({where:{id:lastShift.id}});
                ctx.body = `FinishedAt to ID: ${lastShift.id} was added`;
            }
    }
        catch(e) {
            console.log(e);
        }

    };

    async getLastShift(ctx:any) {
        try {
            const lastData = await db.Shift.findOne ({
                order: [ [ 'createdAt', 'DESC' ]],
                });
            if(!lastData) {
                ctx.status.response = 400;
                ctx.body = 'You need to create Shift at first';
            }
            else {
                const lastShift:any = await db.Shift.findOne({
                    order: [ [ 'createdAt', 'DESC' ]]
                });
                const lastSell = await db.Sell.findAll({
                    where: {shiftId:lastShift.id},
                    order: [ [ 'createdAt', 'DESC' ]]
                });
                ctx.body = lastSell;
        
            }
        }
        catch(e) {
            console.log(e);
        }
    };

}

export default new shiftController;