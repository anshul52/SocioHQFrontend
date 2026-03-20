import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.email || !payload.phone) {
    return NextResponse.json(
      { error: "Name, email, and phone are required." },
      { status: 400 },
    );
  }

  // Placeholder handler for the rebuilt UI. This can later be connected
  // to email, CRM, or a database without changing the form contract.
  console.info("Socio contact form submission", payload);

  return NextResponse.json({ ok: true });
}
