import { useNavigate } from "react-router-dom";

const Contect = () => {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <section>
        <h1>Contect Page</h1>
        <button onClick={gotoHome}>go to home page</button>
        <button onClick={() => goBack()}>Go Back</button>
      </section>
    </>
  );
};

export default Contect;
