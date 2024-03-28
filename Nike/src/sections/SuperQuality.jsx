import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-1 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
          We Provide You
          <span className="text-coral-red"> Super</span>{" "}
          <span className="text-coral-red"> Quality </span> Shoes
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          dolor nostrum, nam dolorum vitae soluta illum vel et quod amet
          voluptatibus ratione deserunt quae expedita adipisci hic eveniet ad
          quis ipsum officia cumque culpa repellendus magnam.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus deleniti recusandae velit asperiores pariatur nobis
          tempora modi. Explicabo distinctio consequuntur, cumque assumenda
          libero doloremque aspernatur, ducimus fugit ex, dolor maxime.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center  ">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
