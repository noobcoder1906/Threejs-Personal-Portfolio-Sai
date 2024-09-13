import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const baseClasses = "text-center mx-auto py-4 px-6 w-3/4 max-w-2xl"; // Width set to 3/4 of the container with max-width
  const headingClasses = "text-sm sm:text-base lg:text-lg text-white font-semibold"; // Adjusted heading text size
  const btnClasses = "neo-brutalism-white neo-btn mx-auto mt-2 py-1 px-4 text-xs sm:text-sm"; // Reduced button size

  const renderContent = (heading, linkText, linkTo, isHighlighted = false) => (
    <div className={`${baseClasses} ${isHighlighted ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 rounded-md shadow-md transform transition-transform duration-300 ease-in-out' : 'bg-gray-800 rounded-md shadow-md'}`}>
      <h1 className={`${headingClasses} ${isHighlighted ? 'text-lg font-bold' : 'text-sm'} text-white`}>
        {heading}
      </h1>
      <Link to={linkTo} className={`${btnClasses} ${isHighlighted ? 'bg-white text-black shadow-md' : 'bg-gray-700 text-white'}`}>
        {linkText}
        <img src={arrow} alt='arrow' className='w-3 h-3 object-contain ml-1' />
      </Link>
    </div>
  );

  return (
    <>
      {currentStage === 1 && renderContent(
        <div>
          Hello, I'm
          <span className='font-bold mx-1 text-yellow-300'>Saisabarish H</span>
          👋
          <br />
          I'm passionate about <strong>problem-solving</strong> and <strong>algorithmic thinking</strong>. As a B.Tech student at VIT Chennai, I thrive on innovation and collaboration to create impactful solutions.
        </div>,
        "Explore My Journey",
        "/Aboutme",
        true // Highlight this stage
      )}

      {currentStage === 2 && renderContent(
        <div>
          With expertise in <strong>Web Development</strong>, <strong>Data Science</strong>, and <strong>Financial Analysis</strong>, I’m skilled in turning complex challenges into actionable insights and solutions.
          <br />
          I excel in <strong>risk analysis</strong>, <strong>DevOps</strong>, and <strong>Cloud Computing</strong>.
        </div>,
        "Discover More",
        "/Aboutme"
      )}

      {currentStage === 3 && renderContent(
        <div>
          My projects range from <strong>digital marketing</strong> strategies to building <strong>financial dashboards</strong> and <strong>productivity apps</strong>. Explore how I integrate these skills to drive innovation.
        </div>,
        "See My Work",
        "/Mystuffs"
      )}

      {currentStage === 4 && renderContent(
        <div>
          Looking for a dynamic developer or consultant? <br />
          Let's <strong>collaborate</strong> on groundbreaking projects and leverage our combined expertise to achieve excellence.
        </div>,
        "Get in Touch",
        "/Contact"
      )}
    </>
  );
}

export default HomeInfo;
