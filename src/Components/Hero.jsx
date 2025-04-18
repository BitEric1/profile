import heroImg from "../assets/imgs/hero.png";
import avatar from "../assets/imgs/icon.png";
// import imgRight from "../assets/imgs/avatar-min-2.png";

export default function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__content">
                        <div className="hero__info">
                            <div className="hero__info-text">
                                <div>
                                    <img
                                        src={avatar}
                                        alt="Avatar"
                                        className="hero__avatar"
                                    />
                                </div>
                                <div>
                                    <p className="hero__sub">
                                        Hi there, my name is{" "}
                                        <span>Bit Eric</span>
                                    </p>
                                    <p className="hero__sub">A web developer</p>
                                </div>
                            </div>
                            <h2 className="hero__info-title">
                                I'm a Software Engineer.|
                            </h2>
                            <p className="hero__info-desc">
                                Currently, I'm a student in Lang Son (LCE),
                            </p>
                            <p className="hero__info-desc">
                                A self-taught UI/UX designer, functioning in the
                                industry for 3+ years now. I make meaningful and
                                delightful digital products that create an
                                equilibrium between user needs and business
                                goals.
                            </p>
                        </div>
                        <div className="hero__cta">
                            <button className="contact">
                                Contact Me!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
