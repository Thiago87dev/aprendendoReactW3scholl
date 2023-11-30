import Car2 from "./Car2";
import styles from './Garage2.module.css'

export default function Garage2() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1 className={styles.collH1}>Who lives in my garage ?</h1>
      <ul>
        {cars.map((car) => (
          <Car2 key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}
