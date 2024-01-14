import {
	collection,
	onSnapshot,
	query,
	getDocs,
	doc,
	getDoc,
	updateDoc,
	orderBy,
	Timestamp,
	runTransaction,
	where,
	addDoc,
} from "firebase/firestore";

import { db } from "@/src/lib/firebase/firebase";

function applyQueryFilters(q, { time_frame }) {
    if (time_frame) {
            q = query(q, where("last_scraped", ">", time_frame));
    }
    return q;
}

export async function subscribeEmail(email_address) {
    const docRef = await addDoc(collection(db, "subscribers"), {
        email: {email_address},
        timestamp: Timestamp.now()
      });
}

export async function getJobs(filters) {
    let q = query(collection(db, "jobs"), where("last_scraped", ">", filters));

    const results = await getDocs(q);
    return results.docs.map(doc => {
            return {
                    id: doc.id,
                    ...doc.data(),
                    // Only plain objects can be passed to Client Components from Server Components
                    last_scraped: doc.data().last_scraped.toDate(),
            };
    });
}

export async function getCompanyJobs(filters, company) {
        let q = query(collection(db, "jobs"), where("last_scraped", ">", filters), where("company", "==", company));
    
        const results = await getDocs(q);
        return results.docs.map(doc => {
                return {
                        id: doc.id,
                        ...doc.data(),
                        // Only plain objects can be passed to Client Components from Server Components
                        last_scraped: doc.data().last_scraped.toDate(),
                };
        });
    }