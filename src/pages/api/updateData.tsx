import { NowRequest, NowResponse } from '@vercel/node';
import database from './database';


export default async (request: NowRequest, response: NowResponse) => {
    const { email, level, currentExperience, challengesCompleted } = request.body;

    const db = await database(process.env.MONGODB_URI);

    const collection = db.collection('usersmoveit');

    const update = await collection.updateOne({ email }, {$set: { level, experience: currentExperience,challenges: challengesCompleted }});

    return response.status(201).json({ update });
}