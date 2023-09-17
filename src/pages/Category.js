import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
// import { toast } from "react-toastify/dist/components";
import Spinner from "../components/Spinner";

function Category() {
  const [listing, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        //get reference
        const listingRef = collection(db, "listings");

        //Create a query
        const q = query(
          listingRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        //execute query
        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
          console.log(doc);
        });
      } catch (error) {}
    };
  });
  return <div>category</div>;
}

export default Category;
