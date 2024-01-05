import { motion } from "framer-motion";
import { useRef, useState } from "react";

import { send, sendHover } from "@/assets";
import { SectionWrapper } from "@/hoc/SectionWrapper";
import { styles } from "@/styles";
import { fadeIn } from "@/utils/motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lppdrtp",
        "template_65wgkgj",
        {
          from_name: form.name,
          to_name: "Sasidhar Dwadasi",
          from_email: form.email,
          to_email: "sasidhar.dwadasi+email@gmail.com",
          message: `Message: ${form.message}. Email: ${form.email}`,
        },
        "v134Tk4Q23O4fH4XH",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className="-mt-[8rem] flex flex-col-reverse 
      gap-10 overflow-hidden xl:flex-row"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1, false)}
        className="flex-[0.75] rounded-2xl bg-jet p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="rounded-lg border-none bg-eerieBlack
              px-6
              py-4 font-medium text-timberWolf
              outline-none placeholder:text-taupe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="rounded-lg border-none bg-eerieBlack
              px-6
              py-4 font-medium text-timberWolf
              outline-none placeholder:text-taupe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="resize-none rounded-lg border-none
              bg-eerieBlack
              px-6 py-4 font-medium
              text-timberWolf outline-none placeholder:text-taupe"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex h-[45px] w-[100px] 
            items-center justify-center gap-3 whitespace-nowrap 
            rounded-[10px] bg-night py-5 font-beckman
            text-[16px] font-bold text-timberWolf 
            transition duration-[0.2s] ease-in-out hover:bg-battleGray 
            hover:text-eerieBlack sm:h-[50px] 
            sm:w-[130px] sm:gap-4 sm:text-[20px]"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                ?.setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn")?.setAttribute("src", send);
            }}
          >
            {loading ? "Sending" : "Send"}
            <img
              src={send}
              alt="send"
              className="contact-btn h-[23px] w-[23px] 
              object-contain sm:h-[26px] sm:w-[26px]"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
