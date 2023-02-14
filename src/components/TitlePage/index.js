import "./TitlePage.css";

function TitlePage({ title }) {
  return (
    <>
      <p className="titlePage d-inline flex-end" data-hover={title}>
        {title}
      </p>
      <br />
    </>
  );
}

export default TitlePage;