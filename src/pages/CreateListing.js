import React, { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountPrice: 0,
    image: {},
    latitude: 0,
    longitude: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountPrice,
    image,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/sign-in");
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onMutate = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="profile">
        <header>
          <p className="pageHeader">Create a Listing</p>
        </header>

        <main>
          <form onSubmit={onSubmit}>
            <label className="formLabel">Sell / Rent</label>
            <div className="formButtons">
              <button
                type="button"
                className={type === "sale" ? "formButtonActive" : "formButton"}
                id="type"
                value="sale"
                onClick={onMutate}
              >
                sell
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}

export default CreateListing;
