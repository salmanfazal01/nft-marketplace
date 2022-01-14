import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import ExplorePage from "./pages/Explore";
import HomePage from "./pages/Home";
import NftItemPage from "./pages/NftItem";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="explore/item" element={<NftItemPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
