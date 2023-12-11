const CustomInput = ({ labelName, name, value, type, onChange, className }) => {
  return (
    <>
      <label htmlFor={name}>{labelName}:</label>
      <input className={className} type={type} id={name} name={name} value={value} onChange={onChange} />
    </>
  );
};
export default CustomInput