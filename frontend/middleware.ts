import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname.startsWith("/auth/discord")) {
        const data = new URL(req.nextUrl.href).searchParams.get("data");

        if (!data) return NextResponse.error();

        try {
            const {
                login: {
                    access_token,
                    refresh_token,
                    expires_in
                },
                user: {
                    id,
                    username,
                    avatar
                }
            } = JSON.parse(data);
            const url = req.nextUrl.clone();

            url.pathname = "/";
            url.searchParams.delete("data");

            const res = NextResponse.redirect(url);
            const maxAge = parseInt(expires_in) * 1000;

            res.cookies
                .set({
                    name: "access_token",
                    value: access_token,
                    maxAge
                })
                .set({
                    name: "refresh_token",
                    value: refresh_token,
                    maxAge
                })
                .set({
                    name: "expires_in",
                    value: expires_in,
                    maxAge
                })
                .set({
                    name: "id",
                    value: id,
                    maxAge
                })
                .set({
                    name: "username",
                    value: username,
                    maxAge
                })
                .set({
                    name: "avatar",
                    value: avatar,
                    maxAge
                });

            return res;
        } catch (e) {
            return NextResponse.error();
        }
    }
}