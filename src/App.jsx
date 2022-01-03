import React, { useState, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import getCityByName from "./services/getCityByName";
import styled from "styled-components";
import Loader from "./components/Loader";
import Cards from "./components/Cards.jsx";
import Layout from "./components/Layout";
import Footer from "./components/Footer.jsx";
import toast, { Toaster } from "react-hot-toast";

export default () => {
  const About = React.lazy(() => import("./components/About.jsx"));
  const City = React.lazy(() => import("./components/City.jsx"));
  const NotFound = React.lazy(() => import("./components/NotFound"));
  const [cities, setCities] = useState([]);

  const onSearch = (nameCity) => {
    if (cities.length >= 6) {
      toast.error("You can't add more than 6 cities");
    } else {
      onFilter(nameCity)
        ? toast.error("City already added")
        : getCityByName(nameCity, setCities);
    }
  };

  const onFilter = (nameCity) => {
    return cities.find((c) => c.name.toLowerCase() === nameCity.toLowerCase());
  };

  const onDelete = (id) => {
    setCities(cities.filter((city) => city.id !== id));
  };

  return (
    <Suspense fallback={<Loader />}>
      <Content>
        <BrowserRouter>
          <ContentWrap>
            <Layout onSearch={onSearch}>
              <Routes>
                <Route exact path="/about" element={<About />} />
                <Route
                  exact
                  path="/"
                  element={<Cards cities={cities} onDelete={onDelete} />}
                />
                <Route exact path="/city/:cityId" element={<City />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </ContentWrap>
        </BrowserRouter>
        <Footer />
        <Toaster />
      </Content>
    </Suspense>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  flex: 1;
`;
