import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

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
    // Process Form Data
    console.log("Form Submitted:", formData);
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
    setFormData({ name: "", email: "" }); // Reset form
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
    <div className="flex flex-col gap-1 w-full" >

      <h6 className="formText">Have an Idea?</h6>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-[2px] ">
          <input
            type="text"
            name="name"
            placeholder="Name . . ."
            value={formData.name}
            onChange={handleChange}
            className="bg-[#B2472E] px-2 py-4 w-[40%] placeholder:formText"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address . . ."
            value={formData.email}
            onChange={handleChange}
            className="bg-[#B2472E] px-2 py-4 w-full placeholder:formText "
          />
        </div>
        <button
          type="submit"
          className="bg-primary px-2 py-4 flex items-center gap-4"
        >
          <h6 className="formText text-lg text-myBlack font-semibold ">Hey there</h6>
          <motion.div
            variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
          >
            <FaArrowRight className="h-6 w-6 mb-[2px]"/>
          </motion.div>
        </button>
      </form>
    </div>
    
  );
};

export default MenuForm;