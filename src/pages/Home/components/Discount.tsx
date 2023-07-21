type Props = {};

const Discount = (props: Props) => {
  return (
    <section className="discount__container">
      <article className="discount__copy--container">
        <h3 className="discount__copy--info">sale up to</h3>
        <h2 className="discount__copy--title">
          {" "}
          <span className="discount__copy--title--bold">
            {" "}
            40$ off
          </span> <br /> on selected items
        </h2>
        <p className="discount__copy--paragraph">
        For a limited time, get discounts of up to $40 off a special selection of items - it's your perfect opportunity to update your closet in style!
        </p>
        <button className="discount__button cta">learn more</button>
      </article>
    </section>
  );
};

export default Discount;
