import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export async function POST(req) {
    try {
        const body = await req.json();

        const client = new MongoClient(uri);
        await client.connect();

        const db = client.db(dbName);
        const result = await db.collection("products").insertOne(body);

        return NextResponse.json({ message: "Product added", id: result.insertedId }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}