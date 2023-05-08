import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchCollections } from "../actions/collectionActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const collectionState = useSelector((state) => state?.collection);
  const { collectionData, loadingCollection, errorCollection } = collectionState;
  console.log(collectionState)

  useEffect(() => {
    const fetchData = async () => {
      if (!collectionData?.products) {
        await dispatch(fetchCollections());
      }
    };

    fetchData();
  }, [dispatch, collectionData?.products]); 

  console.log(collectionState)

  return (
    <>
      <Hero />
      <Products />
    </>
  );
};

export default HomeScreen;
