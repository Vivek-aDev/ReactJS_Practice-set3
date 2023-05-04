import { Cartoon } from "./Cartoon";
import { CartoonQthree } from "./CartoonQthree";
import { CartoonQtwo } from "./CartoonQtwo";
import { Image } from "./Image";
import "./styles.css";
import { VegitableList } from "./VegitableList";
import { BouquetWithRoses } from "./BouquetList";
import { Donation } from "./Donation";
import { CarsCategories } from "./CarsCategories";
import { Student } from "./Student";
import {
  cartoons,
  vegetables,
  bouquet,
  DonationData,
  cars,
  studentData
} from "./Utils";

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS Practice Question Set 3</h1>
      <hr />
      <Image src="https://picsum.photos/200" height="200" width="300" />
      <hr />
      <Cartoon cartoons={cartoons} />
      <hr />
      <CartoonQtwo cartoons={cartoons} />
      <hr />
      <CartoonQthree cartoons={cartoons} />
      <hr />
      <VegitableList vegetables={vegetables} />
      <hr />
      <BouquetWithRoses bouquet={bouquet} />
      <hr />
      <Donation DonationData={DonationData} />
      <hr />
      <CarsCategories cars={cars} />
      <hr />
      <Student studentData={studentData} />
    </div>
  );
}
