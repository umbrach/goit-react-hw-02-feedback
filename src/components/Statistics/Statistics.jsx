import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <p className={css.text}>Good: <span className={css.info}>{good}</span></p>
      <p className={css.text}>Neutral: <span className={css.info}>{neutral}</span></p>
      <p className={css.text}>Bad: <span className={css.info}>{bad}</span></p>
      <p className={css.text}>Total: <span className={css.info}>{total}</span></p>
      <p className={css.text}>Positive feedback: <span className={css.info}>{positivePercentage} %</span></p>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
