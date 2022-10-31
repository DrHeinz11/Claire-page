
type Props = {}

const Brand = (props: Props) => {
  return (
    <>
      <section>
        <img src="https://0.soompi.io/wp-content/uploads/2019/10/22192716/TWICE-Jeongyeon-5.jpg" alt="jeongyeon" />
        <article className="brand__copy">
          <p className="brand__info section__title--subtitle">our brands history</p>
          <h2 className="brand__title section__title"> the philosophy of claire</h2>
          <p className="brand__paragraph paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestiae officia placeat, soluta consectetur sit ratione possimus corporis reiciendis, culpa unde quo!
            suscipit autem enim
            neque?
          </p>
          <br/>
          <p className='paragraph'>Quod dolorem, voluptatum, asperiores unde, nulla assumenda odit

            inventore similique aperiam quas sequi
            molestias
            deleniti aliquid consectetur? Accusantium enim veritatis similique!</p>
        </article>
        <button className="brand__button cta">learn more</button>
      </section>
    </>
  )
}
export default Brand

