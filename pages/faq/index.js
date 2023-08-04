import Question from "../../components/faq/Question";

const FAQPage = () => {
  return (
    <section className="py-12 mt-6 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-8 sm:mt-14">
          <div className="space-y-4">
            <Question
              title="How this UI Kit is different from others in market?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <Question
              title="How long do you provide support?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <Question
              title="Do I need any experience to work with Rareblocks?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />

            <Question
              title="What kind of files are included?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
