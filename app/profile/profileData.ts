export type eachExperienceType = {
  organisation: string;
  startTime: string | undefined;
  position: string;
};
export type eachReviewType = {
  name: string;
  review: string;
  stars: number;
};
type staticUserDataType = {
  info: string[];
  experience?: eachExperienceType[];
  skills?: string[];
  reviews?: eachReviewType[];
};

const staticUserData: staticUserDataType = {
  info: [
    "I am a results-driven Software Developer with a passion for leveraging innovative solutions to make and develop softwares.",
    "I am a results-driven Software Developer with a passion for leveraging innovative solutions to make and develop softwares.",
    "I am a results-driven Software Developer with a passion for leveraging innovative solutions to make and develop softwares.",
    "I am a results-driven Software Developer with a passion for leveraging innovative solutions to make and develop softwares.",
    "I am a results-driven Software Developer with a passion for leveraging innovative solutions to make and develop softwares.",
    "I am a results-driven Software Developer with a passion for leveraging innovative solutions to make and develop softwares.",
  ],
  experience: [
    {
      organisation: "Google",
      startTime: "1/4/2023",
      position: "SDE 1",
    },
    {
      organisation: "DJ Sanghvi",
      startTime: "2/4/2022",
      position: "Web Dev Mentor",
    },
    {
      organisation: "Edsarthi",
      startTime: "3/2/2023",
      position: "Web Development",
    },
  ],
  skills: [
    "Nextjs",
    "Expo",
    "Typescript",
    "Aws",
    "Django",
    "Flask",
    "Expressjs",
    "Nodejs",
    "Socket.IO",
    "Tailwind Css",
    "MongoDB",
    "PostgreSQL",
    "Docker",
  ],
  reviews: [
    {
      name: "blue smurf cat",
      stars: 1,
      review: "makes hella cool stuff",
    },
    {
      name: "blue smurf cat",
      stars: 4,
      review: "makes hella cool stuff",
    },
    {
      name: "blue smurf cat",
      stars: 3,
      review: "makes hella cool stuff",
    },
  ],
};

export default staticUserData;
