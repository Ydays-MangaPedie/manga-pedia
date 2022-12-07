import "./../styles/TitlePage.css";

function TitlePage({ title }) {
  return (
    <>
      <p className="titlePage d-inline flex-end" data-hover={title}>
        {title} <span data-hover={title}></span>
      </p>
      <br />
    </>
  );
}

export default TitlePage;