import { NextResponse } from "next/server";
import mongooseConnect from "@/lib/db/connect";
import Subscription from "@/lib/db/subscription-schema";

export async function POST(req: Request) {
  await mongooseConnect();
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  try {
    const existing = await Subscription.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: "Already subscribed" }, { status: 200 });
    }

    await Subscription.create({ email });
    return NextResponse.json({ message: "Subscribed" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
