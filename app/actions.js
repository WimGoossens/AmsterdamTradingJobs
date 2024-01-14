"use server";

import { getAuthenticatedAppForUser } from "@/src/lib/firebase/firebase";
import { getFirestore } from "firebase/firestore";
import { subscribeEmail } from "../src/lib/firebase/firestore"

// This is a next.js server action, an alpha feature, so
// use with caution
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
export async function handleSubscribeFormSubmission(data) {
    console.log(data.email);
    if (data.name == '') {
        // const { app } = await getAuthenticatedAppForUser();
        // const db = getFirestore(app);

        await subscribeEmail(data.email);
    }	
}