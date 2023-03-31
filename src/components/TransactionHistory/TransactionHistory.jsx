import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function getClass(idx) {
  return (idx + 1) % 2 === 0 ? css.tdark_pattern : css.tlight_pattern;
}

const TransactionHistory = props => {
  const { items } = props;
  return (
    <table className={css.tab_body}>
      <thead>
        <tr>
          <th className={css.th_pattern}>TYPE</th>
          <th className={css.th_pattern}>AMOUNT</th>
          <th className={css.th_pattern}>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, idx) => {
          return (
            <tr key={id}>
              <td className={getClass(idx)}>
                {type[0].toUpperCase() + type.slice(1)}
              </td>
              <td className={getClass(idx)}>{amount}</td>
              <td className={getClass(idx)}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;
