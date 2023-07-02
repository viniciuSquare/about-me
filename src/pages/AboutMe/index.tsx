import profilePic from "@/assets/profile_image.jpg";
import Image, { StaticImageData } from "next/image";

import codeBG from "@/assets/code_bg.jpg";

import styled from "./AboutMe.module.scss";
import {
  AngularLogo,
  Atom,
  Brain,
  Browsers,
  FigmaLogo,
  FileHtml,
  FileJs,
  GithubLogo,
  Kanban,
  LinkedinLogo,
  UsersThree,
} from "phosphor-react";
import { FileSql } from "@phosphor-icons/react";

export default function AboutMe() {
  return (
    <>
      <main className={styled.container}>
        <header className={styled.header}>
          <div className="social-links flex gap-4 mx-2">
            <div className="social-link ">
              <a href="https://github.com/viniciusquare" target="_blank">
                <GithubLogo size="2.4rem" color="#bbd2e5" />
              </a>
            </div>
            <div className="social-link flex gap-4 ">
              <a href="https://github.com/viniciusquare" target="_blank">
                <LinkedinLogo size="2.4rem" color="#bbd2e5" />
              </a>
            </div>
          </div>
          <h1 className="py-2 pl-4 border-l-[1px] border-gray-300">Hello 👋</h1>
        </header>

        {/* Background */}
        <Background src={codeBG} />

        <section id="greetings" className={styled.greetings}>
          <div className={styled["profile-picture"]} >
            <Image
              src={ profilePic }
              alt="Vinícius Quadrado profile image"
              className="rounded-full"
            />
          </div>

          <div className={styled.hello}>
            {/* <span className="px-6 h-14">Hello 👋,</span> */}
            <div className="flex my-4">
              <span>I'm</span>
              <h1 className="w-full">Vinícius Quadrado</h1>
            </div>
            <span className="px-6">Web developer based in Brazil.</span>
          </div>

          <div className={styled.technologies}>
            <p className="flex justify-between col-span-full transition-opacity px-2">
              <span>Front-End</span> • <span>Back-End</span> •{" "}
              <span>DevOps</span>
            </p>

            <div className={styled['icons-row']}>
              <div className={styled.icon}>
                <FileJs />
              </div>
              <div className={styled.icon}>
                <FigmaLogo />
              </div>
              <div className={styled.icon}>
                <FileSql />{" "}
              </div>
              <div className={styled.icon}>
                <AngularLogo />
              </div>
              <div className={styled.icon}>
                <FileHtml />
              </div>
              <div className={styled.icon}>
                <Atom />
              </div>
              <div className={styled.icon}>
                <GithubLogo />
              </div>
              <div className={styled.icon}>
                <Browsers />
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className={styled.timeline}>
          <div className={styled.separator}></div>
          <div className={styled["timeline-row"]}>
            {/* MAKE THE TITLE TAKE AL COLUMNS */}
            <h2 className={styled["row-title"]}>Who am I?</h2>
            {/* MAKE 2 COLUMNS */}
            <div className={styled["col-content-wrapper"]}>
              <div className={styled.col}>
                <p>
                  <strong>I'm 22 years old, living in Paraná, Brazil. </strong>
                  <br /><br />
                  I like to enjoy the nature, play basketball, listen to music and to code.
                  <br /><br />
                  Developer, passionate about coding and solving problems using the latest tools and technologies.
                  <br /><br />
                </p>
              </div>

              <div className={styled["col-separator-dot"]}></div>

              <div className={styled.col}>
                <p>
                  I started my experience programming on college with C++ and Java Object Oriented Programming. 
                  <br/><br/>
                  Soon I noticed the need to study outside college to be able to implement ideas. 
                  <br /><br />That's when I found Rocketseat, a tech community school on YouTube, and enjoyed the Web Development, first workshop with node JS, then with ReactJS.
                </p>
              </div>
            </div>
          </div>

          <div className={styled["timeline-row"]}>
            {/* MAKE THE TITLE TAKE AL COLUMNS */}
            <h2 className={styled["row-title"]}>The road so far</h2>
            <div className={styled["col-content-wrapper"]}>
              <div className={styled.col}>
                <p>
                  2022 I started my journey as software developer, working with laravel and Angular on core projects and learning about DevOps and monitoring building Grafana dashboards.
                </p>
              </div>
              <div className={styled["col-separator-dot"]}></div>
              <div className={styled.col}>
                <p>
                  More then a software developer, I work with infrastructure and team metrics, create API to process data and Grafana dashboards to management and monitoring.
                </p>
              </div>
            </div>
          </div>

          <div className={styled["timeline-row"]}>
            {/* MAKE THE TITLE TAKE AL COLUMNS */}
            <h2 className={styled["row-title"]}>Soft Skills</h2>
            <div className={styled["col-content-wrapper"]}>
              <div className={styled.col}>
                <ul className="font-bold mb-8">
                  <li className="flex gap-2">• <p>Clear communication, aways willing to share;</p></li>
                  <li className="flex gap-2">• <p>Analytic/problem solve thinking;</p></li>
                  <li className="flex gap-2">• <p>The <strong> goal to build a developer career</strong>, bringing value with technologic solutions.</p></li>
                </ul>
                <div className={styled["icons-row"]}>
                  <div className={styled.icon}>
                    <Brain />
                  </div>
                  <div className={styled.icon}>
                    <UsersThree />
                  </div>
                  <div className={styled.icon}>
                    <Kanban />
                  </div>
                </div>
              </div>
              <div className={styled["col-separator-dot"]}></div>
              <div className={styled.col}>
                <p>
                  Use of agile methodologies SCRUM at professional/personal
                  projects to better planning/implement solutions.
                  <br />
                  <br />
                  Committed to continuously learning to create maintainable
                  technologic solutions also with good team development.
                </p>
              </div>
            </div>
          </div>

          <div className={styled["timeline-row"]}>
            {/* MAKE THE TITLE TAKE AL COLUMNS */}
            <h2 className={styled["row-title"]}>Hard Skills</h2>
            <div className={styled["col-content-wrapper"]}>
              <div className={styled["col"]}>
                <p>
                  Focused on Web Development, with experience in Node.js,
                  ReactJS, NextJS, Angular, Laravel and Java.
                </p>
              </div>
              <div className={styled["col-separator-dot"]}></div>
              <div className={styled["col"]}>
                <div className={styled['icons-row'] + " grid-cols-4"}>
                  <div className={styled.icon}>
                    <FileJs />
                  </div>
                  <div className={styled.icon}>
                    <FigmaLogo />
                  </div>
                  <div className={styled.icon}>
                    <FileSql />{" "}
                  </div>
                  <div className={styled.icon}>
                    <AngularLogo />
                  </div>
                  <div className={styled.icon}>
                    <FileHtml />
                  </div>
                  <div className={styled.icon}>
                    <Atom />
                  </div>
                  <div className={styled.icon}>
                    <GithubLogo />
                  </div>
                  <div className={styled.icon}>
                    <Browsers />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <button className={styled.contactButton}>View Contact Card</button>
      </main>
    </>
  );
}

interface BackgroundProps {
  src: string | StaticImageData;
}

function Background(props: BackgroundProps) {
  return (
    <div className={styled["background-container"]}>
      <Image src={props.src} alt="Code background" />

      <div className={styled["gradient-overlay"]}></div>
    </div>
  );
}

function LevelIndicator() {}

interface ProgressBarProps {
  label: string;
  percentage: number;
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <div>
      <label>{props.label}</label>
      <div className={styled.progressBar}>
        <div className="bar"></div>
        <div className={"progress" + `w-[${props.percentage}%]`}></div>l
      </div>
    </div>
  );
}
