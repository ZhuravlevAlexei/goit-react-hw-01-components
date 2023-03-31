import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={css.statistics_tab}>
      <div className={css.title_thumb}>
        {/* <h2 className={css.tab_title}>{title ? title.toUpperCase() : ''}</h2> */}
        <h2 className={css.tab_title}>{title && title.toUpperCase()}</h2>
      </div>
      <ul className={css.tab_statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className={css.tab_item}>
              <span className={css.tab_label}>{label}</span>
              <span className={css.tab_percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
