import Wrapper from '../assets/wrappers/FaqWrapper';
import { SingleQuestion } from '../components';
import { questions } from '../utils';

const Faq = () => {
  return (
    <Wrapper>
      <section className="questions-section">
        <div className="questions-header">
          <h2 className='ge'>ხშირად დასმული კითხვები</h2>
        </div>
        <div className="questions">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
}

export default Faq