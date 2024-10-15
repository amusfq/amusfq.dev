import { firebaseApp } from "../../firebase-app-config";
import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { PortfolioProps } from "@/components/portfolio/card";

export async function getPortfolio() {
  const db = getFirestore(firebaseApp);
  let query = await getDocs(collection(db, "portfolio"));
  const data: PortfolioProps[] = [];
  query.forEach((doc) => {
    const docData = doc.data();
    data.push({
      id: doc.id,
      order: docData.order,
      type: docData.type,
      title: docData.title,
      description: docData.description,
      images: JSON.parse(docData.images),
      stacks: JSON.parse(docData.stacks),
    });
  });
  data.sort((a, b) => {
    return a.order - b.order;
  });
  return data;
}
