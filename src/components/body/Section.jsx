import Card from "../Card.jsx";

const Section = ({ title, subTitle, subTitle2, bgColor, cards }) => {
  return (
    <div
      className={`
          ${bgColor}
          py-16
          rounded-2xl
          text-lg
          text-center
          text-white font-bold
      `}
    >
      <h1 className="text-3xl">{title}</h1>
      {subTitle && <h3 className="mt-3">{subTitle}</h3>}
      {subTitle2 && <h3 className=" mt-1">{subTitle2}</h3>}
      <div className="flex justify-center items-center gap-6 mt-6 mx-5">
        {cards &&
          cards.map((card) => {
            return (
              <Card
                id={card.id}
                title={card.title}
                subTitle={card.subTitle}
                bgColor={card.bgColor}
                subTitleColor={card.subTitleColor}
                titleColor={card.titleColor}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Section;
