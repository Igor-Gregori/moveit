import { NowRequest, NowResponse } from '@vercel/node';
import database from './database';


export default async (request: NowRequest, response: NowResponse) => {

    const db = await database(process.env.MONGODB_URI);
    const collection = db.collection('usersmoveit');

    const leaderboard = await collection.find().sort({experience: -1}).limit(100).toArray();

    return response.status(201).json(leaderboard);
}