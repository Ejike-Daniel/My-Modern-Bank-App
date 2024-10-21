import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

export default function Testimonials() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* todo */}
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="realtive z-[1] mb-6 md:flex-row flex-col sm:mb-16 flex items-center justify-between w-full ">
        <h1 className={styles.heading2}>
          What people are <br className="sm:block hidden" /> saying about us{" "}
        </h1>
        <div>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className=" flex flex-wrap realtove z-[1] justify-center w-full feedback-container sm:justify-start ">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
