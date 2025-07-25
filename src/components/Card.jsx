const Card = ({ id, bgColor, title, subTitle, titleColor, subTitleColor }) => {
  return (
    <div className={`${bgColor} p-5  max-w-lg rounded-xl w-full`} key={id}>
      <h1 className={`${titleColor}`}>{title}</h1>
      <p className={`font-thin ${subTitleColor}`}>{subTitle}</p>
    </div>
  );
};

export default Card;
