export default function Input({ lable, textArea, ...props }) {
  return (
    <p>
      <label>{lable} </label>
      {textArea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
