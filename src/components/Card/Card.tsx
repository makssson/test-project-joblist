import style from "./Card.module.scss";
import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  title: string;
  address: string;
  pictures: string;
  createdAt: string;
};

const Card = (props: Props) => {
  const { id, name, title, address, pictures, createdAt } = props;

  const shortDate = createdAt.split("T").shift();

  return (
    <>
      <div className={style.cardContainer}>
        <img
          src={pictures[0]}
          alt="job_picture"
          className={style.cardPicture}
        />
        <div className={style.cardInfoContainer}>
          <Link to={`/jobpage/${id}`}>
            <p className={style.cardTitle}>{title}</p>
          </Link>
          <p className={style.cardName}>{name}</p>
          <p className={style.cardAdress}>{address}</p>
        </div>
        <p className={style.cardPostDate}>Posted {shortDate}</p>
      </div>
    </>
  );
};

export default Card;
