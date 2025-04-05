import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Pill } from "@/components/common/Pill";
import { StyledLink } from "@/components/common/StyledLink";
import { Header } from "@/components/header";
import { Section } from "@/components/common/Section";

export default function Home() {
  return (
    <div className="flex justify-between gap-10">
      <Header />

      <main id="content">
        <Section id="#about" title="About">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione,
            nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta
            ipsum fugiat provident, necessitatibus dolorum facere? Veritatis
            porro recusandae eaque architecto, nisi deleniti ratione eveniet
            perspiciatis modi quam placeat illum, voluptatem exercitationem
            provident consequuntur quaerat nulla non nesciunt laboriosam
            delectus dolore iure saepe, voluptate quo? Ducimus laborum
            consequuntur, distinctio id quisquam libero obcaecati perferendis
            ratione vero natus ab consequatur, hic reiciendis vel nisi, ex
            commodi! Cumque, vero dolorum! Ex neque nemo, quaerat repellat
            blanditiis reiciendis accusantium, quia, asperiores nesciunt
            sapiente quos expedita.
          </p>
        </Section>

        <Section id="#experience" title="Experience">
          <ul>
            {experienceData.map(
              ({ title, company, description, dateStr, link, skills }) => (
                <li key={title + company}>
                  <div className="grid grid-cols-[1fr_4fr] gap-10">
                    <div className="">{dateStr}</div>
                    <div className="">
                      <StyledLink
                        href={link}
                        external
                      >{`${title} - ${company}`}</StyledLink>
                      <p>{description}</p>
                      <ul className="flex flex-wrap gap-2.5">
                        {skills.map((skill) => (
                          <li key={skill}>
                            <Pill text={skill} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </Section>

        <Section id="#project" title="Project">
          <ul>
            {projectData.map(({ image, link, title, description, skills }) => (
              <li key={title}>
                <div className="flex justify-between gap-4">
                  <div>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      style={{
                        objectFit: "cover",
                      }}
                      width={300}
                      height={200}
                    />
                  </div>
                  <div>
                    <a href={link}>{title}</a>
                    <p>{description}</p>
                    <ul>
                      {skills.map((skill) => (
                        <li key={skill}>
                          <Pill text={skill} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}

const experienceData = [
  {
    title: "Software Engineer",
    company: "Moov Technologies Inc.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione, nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta ipsum fugiat provident, necessitatibus dolorum facere?",
    dateStr: "2022-2024",
    link: "",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Golang",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "TailwindCSS",
      "Material-UI",
      "Storybook",
      "Looker",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Moov Technologies Inc.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione, nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta ipsum fugiat provident, necessitatibus dolorum facere?",
    dateStr: "2020-2022",
    link: "",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Ember.js",
      "Golang",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "TailwindCSS",
      "Bootstrap",
      "Material-UI",
      "Contentful",
      "Metabase",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "Moov Technologies Inc.",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione, nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta ipsum fugiat provident, necessitatibus dolorum facere?",
    dateStr: "2020",
    link: "",
    skills: [
      "JavaScript",
      "React",
      "Redux",
      "Ember.js",
      "Golang",
      "SASS",
      "Styled Components",
      "Bootstrap",
    ],
  },
];

const projectData = [
  {
    image: {
      src: "https://64.media.tumblr.com/0f22b614996a4aff11f1c7fe27b3b012/tumblr_p16xxhirQI1v2pqjvo1_1280.jpg",
      alt: "TODO",
    },
    link: "",
    title: "Project Name 1",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum delectus quas commodi iusto incidunt eius? Quibusdam ipsam mollitia harum illo.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Golang",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "TailwindCSS",
      "Material-UI",
      "Storybook",
      "Looker",
    ],
  },
  {
    image: {
      src: "https://64.media.tumblr.com/0f22b614996a4aff11f1c7fe27b3b012/tumblr_p16xxhirQI1v2pqjvo1_1280.jpg",
      alt: "TODO",
    },
    link: "",
    title: "Project Name 2",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum delectus quas commodi iusto incidunt eius? Quibusdam ipsam mollitia harum illo.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Golang",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "TailwindCSS",
      "Material-UI",
      "Storybook",
      "Looker",
    ],
  },
  {
    image: {
      src: "https://64.media.tumblr.com/0f22b614996a4aff11f1c7fe27b3b012/tumblr_p16xxhirQI1v2pqjvo1_1280.jpg",
      alt: "TODO",
    },
    link: "",
    title: "Project Name 3",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum delectus quas commodi iusto incidunt eius? Quibusdam ipsam mollitia harum illo.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "Golang",
      "PostgreSQL",
      "Jest",
      "React Testing Library",
      "TailwindCSS",
      "Material-UI",
      "Storybook",
      "Looker",
    ],
  },
];
