import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import All from "./Components/All";
import Fsd from "./Components/Fsd";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";

function App() {
  let data = [
    {
      image:"https://www.spec-india.com/wp-content/uploads/2020/06/Full_Stack.png",
      head:"Full Stack Development",
      content:"Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions with the application.",
      author:"Kannan",
      date:"06",
      month:"Apr",
    },
    {
      image:"https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.jpg?s=612x612&w=0&k=20&c=8wFwFVMOpW9gF2GTOx0vagIKDaw3YNFnBVbYCmoTUSY=",
      head:"Cyber Security",
      content:"Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
      date:"17",
      author:"Rahul",
      month:"June"
    },
    {
      image:"https://sourcebae.com/blog/wp-content/uploads/2023/09/Full-Stack-Developer-980x462-1.png",
      head:"Full Stack Development",
      content:"A full-stack developer helps build and maintain both the front-end and the back-end of a website. Learn about full-stack developer skills, salary, and how you can become one. A full-stack developer is a developer or engineer who can build both the front end and the back end of a website",
      author:"Vani",
      date:"14",
      month:"Apr",
    },
    {
      image:"https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png",
      head:"Full Stack Development",
      content:"Full stack developers work on both the client and server sides, acting as a bridge between the two. Their goal is to create scalable web applications by writing and testing code, building databases and servers and building APIs and other services.",
      author:"Vasanth",
      date:"23",
      month:"Apr",
    },
    {
      image:"https://media.geeksforgeeks.org/wp-content/uploads/20240206103015/Data-Sciecne-Projects.webp",
      head:"Data Science",
      content:"Data science combines math and statistics, specialized programming, advanced analytics, artificial intelligence (AI) and machine learning with specific subject matter expertise to uncover actionable insights hidden in an organization's data. These insights can be used to guide decision making and strategic planning.",
      author:"Sethu",
      date:"09",
      month:"May",
    },
    {
      image:"https://static.vecteezy.com/system/resources/previews/006/533/439/original/career-growth-or-career-development-improvement-or-progress-to-success-in-work-job-promotion-and-salary-increase-concept-cheerful-businessman-and-woman-running-on-growing-arrow-on-the-word-career-vector.jpg",
      head:"Career Development",
      content:"Career development is a lifelong process of finding your place and advancing your career path. It's an intentional approach to creating a meaningful career that involves setting long-term goals, exploring professional development opportunities, and gaining new work experience.",
      author:"Yugathees",
      date:"10",
      month:"July"
    },
    {
      image:"https://media.geeksforgeeks.org/wp-content/uploads/20240301153828/components-of-data-science.webp",
      head: "Data Science",
      content:"Data science is a massively expanding field in India. According to Mordor Intelligence, the total market size for Big Data in India will reach $2.17 billion in 2024 and grow to $3.38 billion by 2029, growing at a rate of 7.66 percent CAGR [1].",
      author:"Gokul",
      date: "20",
      month: "May",
    },
    {
      image:"https://www.raxatechnosecuritysolutions.in/assets/img/Cyber-Security_Banner.jpg",
      head:"Cyber Security",
      content:"Cybersecurity, also known as information technology security (IT security) or computer security, is the practice of using technology, processes, and controls to protect systems, networks, programs, devices, and data from cyber attacks. The goal of cybersecurity is to reduce the risk of cyber attacks and to prevent the unauthorized use of systems, networks, and technologies.",
      date:"09",
      author:"Gokul",
      month: "June"
    },
    {
      image:"https://www.mytechlogy.com/view/images/career_development.jpg",
      head:"Career Development",
      content:"This being true, career management is an important life skill to develop and cultivate. According to Get Smart! About Modern Career Development, there are six stages of modern career development: Assessment, Investigation, Preparation, Commitment, Retention, and Transition.",
      author:"Suresh",
      date:"20",
      month:"July"
    },
    {
      image:"https://images.shiksha.com/mediadata/images/articles/1709545684phpPfnagp.jpeg",
      head:"Cyber Security",
      content:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users via ransomware; or interrupting normal business processes.",
      author:"Krish",
      date:"26",
      month:"June"
    },
    {
      image:"https://blogassets.leverageedu.com/blog/wp-content/uploads/2019/09/23163958/Career-Planning-and-Development.png",
      head:"Career Development",
      content:"Career development refers to the processes organizations implement to support employees and encourage their career progression. Careers are rarely static. Skills, circumstances, desires, and motivations change over time and impact what people want out of their professional lives.",
      author:"Enba",
      date:"30",
      month:"July"
    },
    {
      image:"https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
      head:"Data Science",
      content:"Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.",
      author:"Ram",
      date:"02",
      month:"May",
    }
  ];
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/all" element={<All data={data} />} />
          <Route path="/full-stack-developer" element={<Fsd data={data} />} />
          <Route path="/data-science" element={<DataScience data={data} />} />
          <Route
            path="/cyber-security"
            element={<CyberSecurity data={data} />}
          />
          <Route path="/career" element={<Career data={data} />} />
          <Route path="*" element={<Navigate to="/all" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
