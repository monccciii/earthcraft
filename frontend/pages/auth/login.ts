import { NextResponse } from "next/server";

export default async function Login() {
    return NextResponse.redirect(":3002/auth/login");
};