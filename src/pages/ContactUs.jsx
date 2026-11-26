import React from "react";
import { Contact } from "@/components/ContactUs";
import { useSEO } from "@/hooks/useSEO";

const ContactUs = () => {
  useSEO({
    title: "Contact Us - Grandeur Advisors",
    description:
      "Discover comprehensive financial solutions tailored to your needs with Grandeur Advisors. Our expert team provides personalized guidance for a secure financial future. Explore our range of services today!",
  });

  return <Contact />;
};

export default ContactUs;
