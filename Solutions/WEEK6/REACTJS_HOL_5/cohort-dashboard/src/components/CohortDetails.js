import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  return (
    <div className={styles.box}>
      <h3 style={{ color: props.status === 'ongoing' ? 'green' : 'blue' }}>
        {props.name}
      </h3>
      <dl>
        <dt>Batch</dt>
        <dd>{props.batch}</dd>
        <dt>Status</dt>
        <dd>{props.status}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
