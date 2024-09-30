const CommentForm = () => {
  return (
    <form className="comment-form">
      <label>
        Comentário:
        <textarea name="comment"></textarea>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default CommentForm;
