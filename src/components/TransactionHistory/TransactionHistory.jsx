import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function getBkg(idx) {
  //   console.log(idx);
  return (idx + 1) % 2 === 0 ? `lightgray` : `white`;
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
              <td
                className={css.t_pattern}
                style={{ backgroundColor: getBkg(idx) }}
              >
                {type[0].toUpperCase() + type.slice(1)}
              </td>
              <td
                className={css.t_pattern}
                style={{ backgroundColor: getBkg(idx) }}
              >
                {amount}
              </td>
              <td
                className={css.t_pattern}
                style={{ backgroundColor: getBkg(idx) }}
              >
                {currency}
              </td>
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
