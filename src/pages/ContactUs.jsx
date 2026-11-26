import React from "react";
import { Contact } from "@/components/ContactUs";
import { useSEO } from "@/hooks/useSEO";

const ContactUs = () => {
  useSEO();

  return <Contact />;
};

export default ContactUs;
