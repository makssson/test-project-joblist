import style from "./JobPageCard.module.scss";
import { Link } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "../Map/Map";

const API_KEY = process.env.REACT_APP_API_KEY;

interface Props {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string;
  location: {
    lat: number;
    long: number;
  };
  pictures: string;
  createdAt: string;
  description: string;
  employment_type: string;
}

const JobPageCard = (props: Props) => {
  const jobPageId = window.location.href.split("/").pop();
  const {
    id,
    name,
    email,
    phone,
    title,
    salary,
    address,
    benefits,
    location,
    pictures,
    createdAt,
    description,
    employment_type,
  } = props;

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const directionNeeded = {
    lat: location.lat,
    lng: location.long,
  };

  const shortDate = createdAt.split("T").shift();

  return (
    <section>
      {id === jobPageId && (
        <div className={style.cardWrapper}>
          <div className={style.cardMainInfo}>
            <h1 className={style.cardTitles}>Job Details</h1>
            <span className={style.cardApply}>Apply now</span>
            <div className={style.cardTitleSalary}>
              <p className={style.cardTitle}>{title}</p>
              <p className={style.cardSalary}>
                {salary}{" "}
                <span className={style.cardSalarySpan}>Brutto, per year</span>
              </p>
            </div>
            <p className={style.cardPostDate}>Posted {shortDate}</p>
            <p className={style.cardDescription}>{description}</p>
            <span className={style.cardApply}>Apply now</span>
            <h1 className={style.cardTitlesAdditional}>Additional Info</h1>
            <p className={style.cardTypeTitle}>Employment type</p>
            <div className={style.cardTypeWrapper}>
              {employment_type[1] ? (
                <>
                  <span className={style.cardType}>{employment_type[0]}</span>
                  <span className={style.cardType}>{employment_type[1]}</span>
                </>
              ) : (
                <span className={style.cardType}>{employment_type[0]}</span>
              )}
            </div>
            <p className={style.cardBenefitsTitle}>Benefits</p>
            <div className={style.cardBenefitsWrapper}>
              {benefits[1] ? (
                <>
                  <span className={style.cardBenefits}>{benefits[0]}</span>
                  <span className={style.cardBenefits}>{benefits[1]}</span>
                </>
              ) : (
                <span className={style.cardBenefits}>{benefits[0]}</span>
              )}
            </div>
            <h1 className={style.cardTitles}>Attached images</h1>
            <div className={style.cardImagesWrapper}>
              <img className={style.cardImage} src={pictures[0]} alt="first" />
              <img className={style.cardImage} src={pictures[1]} alt="second" />
              <img className={style.cardImage} src={pictures[2]} alt="third" />
            </div>
            <div className={style.cardReturnButtonWrapper}>
              <Link to="/">
                <span className={style.cardReturnButton}>
                  Return to job board
                </span>
              </Link>
            </div>
          </div>
          <div className={style.cardContactWrapper}>
            <p className={`${style.cardTitles} ${style.cardTitlesContacts}`}>
              Contacts
            </p>
            <div className={style.cardContactInfo}>
              <p className={style.cardContactName}>{name}</p>
              <p className={style.cardContactAddress}>{address}</p>
              <p className={style.cardContactNumber}>{phone}</p>
              <p className={style.cardContactMail}>{email}</p>
            </div>
            <div className={style.cardContactMap}>
              {isLoaded ? (
                <Map center={directionNeeded} />
              ) : (
                <h2>Loading...</h2>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobPageCard;
