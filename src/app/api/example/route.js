import { connectToDatabase } from '../../mongodb'
import { NextResponse } from 'next/server'

export async function GET(req) {
    const db = await connectToDatabase();

    const collection = db.collection('Sample'); // Replace 'mycollection' with your collection name
  
    const data = await collection.find({}).toArray();
  
    return NextResponse.json({ data });
}
