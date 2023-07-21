type Props = {};

const Brand = (props: Props) => {
  return (
    <>
      <section className="brand__container">
        <img
          className="img__brand--header"
          src="https://kpopping.com/documents/9f/4/800/BLACKPINK-Jisoo-for-Marie-Claire-Korea-September-2022-Issue-documents-2(1).jpeg?v=2ab59"
          alt="Jisoo-Collection"
        />
        <article className="brand__copy">
          <p className="brand__info section__title--subtitle">
            our brands history
          </p>
          <h2 className="brand__title section__title">
            {" "}
            the philosophy of claire
          </h2>
          <div className="brand__paragraph">
            <p className=" paragraph">
              Claire Marie's journey began with a passion for timeless fashion
              and a vision to empower individuals to express their unique style.
              Founded in the heart of the fashion capital, our brand has grown
              from humble beginnings to become a global icon of elegance and
              sophistication.
            </p>
            <p className="paragraph">
              The philosophy of Claire Marie revolves around the belief that
              fashion is not just about trends, but an art that reflects one's
              inner self. We strive to create designs that go beyond mere
              clothing, but rather, pieces that weave stories of individuality
              and self-confidence.
            </p>
            <br />
            <p className="paragraph">
              Our commitment to sustainability and ethical practices is at the
              core of our philosophy. We believe in creating fashion that
              respects the environment and the people who bring our designs to
              life. From sourcing eco-friendly materials to providing fair
              working conditions, we are driven by a responsibility to make a
              positive impact on the world.
            </p>{" "}
          </div>
          <button className="brand__button cta">learn more</button>
        </article>
      </section>
    </>
  );
};
export default Brand;
