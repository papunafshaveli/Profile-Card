import "./App.css";
import styled from "styled-components";
import Skills from "./components/Skills";
const skillsArr = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#EA2A01",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#15a776",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#fffb0c",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#df08bb",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#0204a8",
  },
  {
    skill: "Svelte",
    level: "starter",
    color: "#751f23",
  },
];
function App() {
  const skillArr2 = skillsArr;

  return (
    <Card>
      <img src="/assets/profile.jpg" alt="Profile Picture" />

      <Intro>
        <h1>Papuna Fshaveli</h1>
        <p>
          I am an experienced Human Resources Specialist. currently I am
          learning programming languages and tools related to programming.
        </p>
      </Intro>

      <SkillsContainer>
        {skillArr2.map((skill) => {
          return <Skills skillsObj={skill} key={skill.skill} />;
        })}
        {/* <Skills bgColor={"lightblue"} text={"HTML+CSS 💪"} />
        <Skills bgColor={"yellow"} text={"JavaScript "} emoji={"💪"} />
        <Skills bgColor={"green"} text={"Web Design "} emoji={"💪"} />
        <Skills bgColor={"red"} text={"Git & GitHub "} emoji={"👍"} />
        <Skills bgColor={"lightBlue"} text={"React "} emoji={"💪"} />
        <Skills bgColor={"purple"} text={"Svelte "} emoji={"👶"} /> */}
      </SkillsContainer>
    </Card>
  );
}

export default App;

const Card = styled.div`
  max-width: 40rem;
  height: 55rem;
  border: 0.3rem solid black;
  img {
    width: 100%;
    object-fit: cover;
    object-position: 43% 53%;
    height: 35%;
  }
`;

const Intro = styled.div`
  padding: 0 30px 30px 30px;
  h1 {
    margin-top: 20px;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  p {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const SkillsContainer = styled.div`
  max-width: 300px;
  padding: 0 30px 30px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
