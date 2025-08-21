import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const client = new MongoClient(uri);
        await client.connect();

        const db = client.db(dbName);
        const product = await db.collection("products").findOne({ service_id: id });

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
    }
}