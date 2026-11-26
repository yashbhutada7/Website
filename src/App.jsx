import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";

// The router itself is provided by main.jsx (browser) or
// entry-server.jsx (build-time pre-rendering).
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}
