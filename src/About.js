import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const goToContect = () => {
    navigate("/contect");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section>
        <h1>About Page</h1>
        <button onClick={() => goToContect()}> Go to contect page </button>
        <button onClick={() => goBack()}>Go Back</button>
      </section>
    </>
  );
};

export default About;
