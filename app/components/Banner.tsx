const Banner = () => {
  return (
    <div className="banner">
      <h2>Posts em Destaque</h2>
      <div className="posts">
        {/* Aqui você pode mapear os posts em destaque */}
        <p>Post mais curtido</p>
        <p>Post mais visualizado</p>
        <p>Post mais recente</p>
      </div>
    </div>
  );
};

export default Banner;
