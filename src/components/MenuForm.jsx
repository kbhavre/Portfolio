import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import emailjs from "emailjs-com";

const MenuForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic Validation
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Send Email
    emailjs
      .send(
        "service_ivogum4", // Replace with your EmailJS Service ID
        "template_ohfsm0a", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          message: "A new user submitted the form!",
        },
        "39HfF5Z4ipTQkwe19" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          alert(`Thank you, ${formData.name}! I'll get back to you soon.`);
          setFormData({ name: "", email: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("There was an error sending your email. Please try again.");
        }
      );
  };

  const menuVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
  };

  return (
    <div className="flex flex-col gap-1">
      <h6 className="formText block lg:hidden">Have an Idea?</h6>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-row lg:flex-col gap-[2px]">
          <input
            type="text"
            name="name"
            placeholder="Name . . ."
            value={formData.name}
            onChange={handleChange}
            className="bg-[#B2472E] px-2 py-4 w-[40%] lg:w-full placeholder:formText"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address . . ."
            value={formData.email}
            onChange={handleChange}
            className="bg-[#B2472E] px-2 py-4 w-full placeholder:formText"
          />
        </div>
        <button
          type="submit"
          className="bg-primary px-2 py-4 flex items-center gap-4"
        >
          <h6 className="formText text-sm md:text-lg text-myBlack font-semibold">
            Hey there
          </h6>
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <FaArrowRight className=" h-4 w-4 md:h-6 md:w-6 mb-[2px]" />
          </motion.div>
        </button>
      </form>
    </div>
  );
};

export default MenuForm;