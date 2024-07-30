"use server";
import { endpoint } from "../utils/endpoint";

export async function registerWaitlist({
  email,
  name,
}: {
  email: string;
  name: string;
}) {
  try {
    const res = await fetch(`${endpoint}/api/waitlist`, {
      method: "POST",
      body: JSON.stringify({ email, name }),
    });
    if (!res.ok) {
      throw new Error("Failed to register in waitlist");
    }
    const responseBody = await res.json();
    console.log(responseBody);
    return responseBody;
  } catch (e) {
    console.error(e);
    throw new Error("Failed to register in waitlist");
  }
}
