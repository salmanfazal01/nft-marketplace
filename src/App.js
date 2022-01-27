import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import ExplorePage from "./pages/Explore";
import HomePage from "./pages/Home";
import NftItemPage from "./pages/NftItem";
import NftCreatePage from "./pages/NftCreate";
import AuthorPage from "./pages/Profile";
import ProfileEditPage from "./pages/ProfileEdit";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="nft/item" element={<NftItemPage />} />
        <Route path="nft/create" element={<NftCreatePage />} />
        <Route path="profile/username" element={<AuthorPage />} />
        <Route path="profile/edit" element={<ProfileEditPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
