import { NowRequest, NowResponse } from '@vercel/node';
import database from './database';


export default async (request: NowRequest, response: NowResponse) => {
    const { email, displayName, photoURL } = request.body;

    const db = await database(process.env.MONGODB_URI);

    const collection = db.collection('usersmoveit');

    const userExist = await collection.findOne({ email });
    let user = null;

    if (!userExist) {
        user = await collection.insertOne({
            email,
            username: displayName,
            level: 0,
            challenges: 0,
            experience: 0,
            photoURL: photoURL,
            subscribedAt: new Date()
        });

        user = user.ops[0];
    } else {
        user = userExist;
    }

    return response.status(201).json(user);
}