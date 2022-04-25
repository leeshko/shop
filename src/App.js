import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./components/pages/homepage/homepage.component";
import "./App.scss";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./components/signInSignUp/signInSignUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./components/redux/user/userActions";
import CheckoutPage from "./components/pages/checkout/checkout.component";
import CategoryPage from './components/pages/collection/collection.component';

const App = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const { userRef, onSnapshot } = await createUserProfileDocument(
          userAuth
        );

        onSnapshot(userRef, (snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop/*' element={<ShopPage />} />
        <Route
          exact
          path='/signIn'
          element={currentUser ? <Navigate to='/' /> : <SignInSignUp />}
        />
        <Route exact path='/checkout' element={<CheckoutPage />} />
        {/* <Route path="/shop/:categoryId" element={<CategoryPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
