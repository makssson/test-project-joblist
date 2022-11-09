import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Container.module.scss";

interface CardData {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string;
  location: string;
  pictures: string;
  createdAt: string;
  description: string;
  employment_type: string;
}

const Container = () => {
  const [allJobs, setAllJobs] = useState<Array<CardData> | []>([]);

  useEffect(() => {
    async function fetchJobs() {
      const jobs = await fetch(
        "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
      ).then((res) => res.json());
      setAllJobs(jobs);
    }
    fetchJobs();
  }, []);

  return (
    <section className={styles.containerWrapper}>
      <div className={styles.container}>
        {allJobs.map(({ id, ...args }) => (
          <Card key={id} id={id} {...args} />
        ))}
      </div>
    </section>
  );
};

export default Container;
