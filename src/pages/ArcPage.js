import ArcSlider from './../components/ArcSlider';

function ArcPage({arcs}) {
  return (
    <>
      <p className="titlePage d-inline flex-end">Arc</p>
      <ArcSlider arcs={arcs} />
    </>
  );
}

export default ArcPage;