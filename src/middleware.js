import FirebaseNextJSMiddleware from "firebase-nextjs/middleware/firebase-nextjs-middleware";

const options = {
    gateMode: "allowByDefault",
    privatePaths: [
        "/admin/resume",
        "/admin/portfolio",
        "/admin/contact",
    ],
}

export default function middleware(req) {
    return FirebaseNextJSMiddleware({ req, options });
}
