import { useEffect, useState } from "react";
import JobPageCard from "../JobPageCard/JobPageCard";
import style from "./JobPageContainer.module.scss";

interface CardData {
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

const JobPageContainer = () => {
  const [allJobs, setAllJobs] = useState<Array<CardData> | []>([]);

  useEffect(() => {
    async function fetchJobs() {
      const jobs = await fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
        {
          headers: {
            "Content-type": "aplication/json",
            Authorization: "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
          },
        }
      ).then((res) => res.json());
      setAllJobs(jobs);
    }
    fetchJobs();
  }, []);

  return (
    <section className={style.containerWrapper}>
      <div className={style.container}>
        {allJobs.map(({ id, ...args }) => (
          <JobPageCard key={id} id={id} {...args} />
        ))}
      </div>
    </section>
  );
};

export default JobPageContainer;
