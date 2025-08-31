import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experiences.css";

import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import ProjectIcon from "@mui/icons-material/Build";
import Launch from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";

//source: https://www.youtube.com/watch?v=x7mwVn2z3Sk&t=334s
// https://github.com/machadop1407/react-personal-portfolio-website

function Experience() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
    ReactGA.pageview(location.pathname + location.search);
    document.title = "Arda's Portfolio - Experiences";
  }, [location.pathname, location.search]); // Include location.pathname and location.search in the dependency array

  return (
    <div className="experiences">
      <div>
        <h1 className="experiences-title">My Experiences</h1>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June - August 2025"
          iconStyle={{ background: "#d9ba0f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Dell Technologies</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer Intern
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Austin, TX, USA
          </h4>
          <p>
            • Analyzed the performance difference of an NVMe SSD with and
            without Flexible Data Placement (FDP), measuring Write Amplification
            Factor (WAF) to determine deployment viability. <br /> • Ported an
            NVMe SSD with FDP simulation code in C++ to <b>Python</b> for better
            compatibility with testing tools and environments. <br /> •
            Integrated <b>Excel</b> for inputs and outputs, enabling multiple
            tests with different parameters to be run in sequence without
            requiring an engineer’s intervention. <br /> • Used{" "}
            <b>NumPy memory-mapped arrays</b> to simulate up to 512 TB SSDs with
            constrained RAM, enabling larger-scale tests on more hosts.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2025 - Present"
          iconStyle={{ background: "#d9ba0f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Budgeting Platform
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Entrepreneurship co-op at UVic
          </h4>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Austin, TX, USA
          </h4> */}
          <p>
            • Developed a Dockerized C# backend using onion architecture,
            PostgreSQL, Redis, and RabbitMQ, along with a React Native frontend
            with Redux from scratch. Gained experience in creating a product
            independently and tackling all associated challenges, including
            project budget, management, competitors, and pitching the idea.{" "}
            <br />• Implemented secure authentication using JWT for{" "}
            <b>access and refresh tokens</b>, along with an Axios response
            <b>interceptor</b> on the frontend for a smooth user experience.{" "}
            <br />• Implemented Plaid API (Link + Auth/Transactions with banks),
            ingested data asynchronously via <b>RabbitMQ</b> and stored it in{" "}
            <b>PostgreSQL</b>, handling 500+ transactions.
            <br /> • Created and prototyped in <b>Figma</b> to ensure greater
            consistency in development. <br />• Researched and tested suitable
            libraries for API stability, licensing, bundle impact, and security
            before integrating them into the project to ensure{" "}
            <b>long-term compatibility</b>.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="September - December 2024"
          iconStyle={{ background: "#d9ba0f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            INSPIRE: STEM for Social Impact
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer Intern
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            UVIC, Victoria, BC, Canada
          </h4>
          <p>
            • Spearheaded the development of an AI-powered platform integrated
            with D2L, supporting <b>22,000+ students</b>, with a focus on{" "}
            <b>neurodiverse learners</b>. <br />• Led interviews with 180+
            students and faculty, using <b>design thinking</b> and{" "}
            <b>requirements engineering</b> to shape the product’s core
            strategy. <br />• Developed AI-driven study tools, task management,
            and progress tracking using <b>React.js</b>, <b>Node.js</b>, and{" "}
            <b>REST APIs</b>, improving task efficiency by 20%. <br />•
            Engineered secure authentication and real-time data management with{" "}
            <b>Firebase</b>, enhancing platform performance and data security.{" "}
            <br />• Collaborated with global teams, including those in Nepal,
            using {"  "}
            <b>agile techniques</b> like sprint planning, stand-ups, and
            retrospectives to ensure smooth project delivery.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - September 2024"
          iconStyle={{ background: "#d9ba0f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ARD Group Information Technologies Inc.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineer Intern - Full Stack
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Ankara, Türkiye
          </h4>
          <p>
            <a href="https://www.ardgroup.com.tr/" style={{ padding: 0 }}>
              ARD
            </a>{" "}
            is a holding company that is gathered under the main headings of
            Informatics, Health, Defense, Energy, Construction and Consultancy.
            <br />
            <br />• Developed two new high-traffic pages for a government
            website with millions of daily interactions, using <b>
              Angular
            </b>{" "}
            for the frontend and <b>C# (.NET Core)</b> for the backend. <br />•
            Designed and implemented new <b>RESTful API</b> endpoints and
            backend functionality to support the website's expansion, ensuring
            seamless integration with the existing architecture. <br />•
            Enhanced the Angular frontend by building and optimizing{" "}
            <b>reusable components</b>, improving user experience and increasing
            feature delivery efficiency. <br />• Managed end-to-end development
            workflows, including code reviews, <b>testing</b>, and deployment,
            ensuring smooth delivery by pushing updates to testing branches and
            securing approval before merging to the main repository.
            <br />
            <br /> MEBIS system is created by Republic of Türkiye, Ministry of
            Environment Urbanisation and Climate Change (T.C. Çevre Şehircilik
            ve İklim Değişikliği Bakanlığı).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="January 2024"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Arda's Portfolio
            <Link
              className="project-link"
              to="/projects#desktop-apps&portfolio"
            >
              <Launch />
            </Link>
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Personal Project <br />
          </h4>
          <p>(This Website)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="December 2023"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Money On Track
            <Link className="project-link" to="/projects#mobile-apps&mot">
              <Launch />
            </Link>
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Personal Project
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May - August 2023"
          iconStyle={{ background: "#d9ba0f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Walmart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Produce Stocker
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Victoria, BC, Canada
          </h4>
          <p>
            • Ensured product quality by working closely with colleagues to
            inspect produce shelves. <br /> • Applied organizational skills to
            unload and arrange items from trucks, prioritizing older products.{" "}
            <br /> • Provided excellent customer service using my communication
            skills, addressing inquiries and demands with clear communication.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="June 2023"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Doug Maps - iOS{" "}
            <Link className="project-link" to="/projects#mobile-apps&mdmi">
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Personal Project
          </h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2022 - (2027)"
          iconStyle={{ background: "#b5701b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Victoria
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Victoria, BC, Canada
          </h4>

          <p>
            The Bachelor of Software Engineering (BSEng), {"  "}3<sup>rd</sup>{" "}
            Year.
            <br />
            Expected Graduation: 2027
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January - July 2022"
          iconStyle={{ background: "#d9ba0f", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">PCE Turkey</h3>
          <h4 className="vertical-timeline-element-subtitle">
            International Student Agency
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Ankara, Türkiye
          </h4>
          <p>
            • Tutored English to assist students studying abroad in
            English-speaking countries.
            <br />• Delivered engaging presentations in both Turkish and
            English, sharing my experiences in Canada and utilizing effective
            communication techniques. (Eye contact, appropriate pauses, clear
            communication).
            <br /> • Chaperoned eight high school students for a week during
            their stay at the orientation event with my leadership skills to
            make sure they were always safe and understood the given lessons.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="June 2022"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jastagram{" "}
            <Link
              className="project-link"
              to="/projects#desktop-apps&jastagram"
            >
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Group Project</h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="May 2022"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Doug Maps - Android{" "}
            <Link className="project-link" to="/projects#mobile-apps&mdma">
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Personal Project
          </h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--project"
          date="April - May 2022"
          iconStyle={{ background: "#2444b5", color: "#fff" }}
          icon={<ProjectIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Robber
            <Link className="project-link" to="/projects#desktop-apps&robber">
              <Launch />
            </Link>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Group Project</h4>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2022"
          iconStyle={{ background: "#b5701b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Mount Douglas Secondary School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Victoria, BC, Canada
          </h4>
          <p>Graduated with a 90% average.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
