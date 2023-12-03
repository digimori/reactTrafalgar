import images from "./images.js";

export const services = [
  {
    icon: images.searchDoc,
    title: "Search Doctor",
    desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
  },
  {
    icon: images.onlinePharm,
    title: "Online Pharmacy",
    desc: "Buy  your medicines with our mobile application with a simple delivery system",
  },
  {
    icon: images.consultation,
    title: "Consultation",
    desc: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: images.details,
    title: "Details Info",
    desc: "Free consultation with our trusted doctors and get the best recomendations",
  },
  {
    icon: images.emCare,
    title: "Emergency Care",
    desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
  },
  {
    icon: images.tracker,
    title: "Tracking",
    desc: "Track and save your medical history and health data ",
  },
];

export const testimonialData = [
  {
    icon: images.testimonial1,
    person: "Edward Newgate",
    personTitle: "Founder Circle",
    review:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    icon: images.testimonial2,
    person: "Allison Dean",
    personTitle: "Medical Professional",
    review:
      "I have tried a lot of similar products and Trafalgar medical is the best!",
  },
  {
    icon: images.testimonial3,
    person: "Roberta Conway",
    personTitle: "Medical Professional",
    review:
      "With Trafalgar medical, communication between all of us is far more efficient. A game changer.",
  },
  {
    icon: images.testimonial4,
    person: "Earlene Livingston",
    personTitle: "Co-Founder",
    review: "Trafalgar medical has made a huge difference!",
  },
];

export default { images, services, testimonialData };
