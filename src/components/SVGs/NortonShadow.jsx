import React from 'react';
import PropTypes from 'prop-types';

export function NortonShadow ({ shadowColor }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 958 834">
      <g id="Featured-Work" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Norton" fill={ shadowColor }>
          <g id="shadow" transform="translate(0.000000, 21.000000)">
            <path d="M11.7484803,205.877455 C-6.15678754,184.850446 -2.98057057,154.076231 18.8692696,137.202673 C18.8692696,137.202673 26.5857311,131.067787 27.6757812,130.5625 C28.7658314,130.057213 324.765333,5.6813902 324.765333,5.6813902 C350.22237,-5.01575248 386.402586,2.43150373 405.565424,22.3042226 L924.33692,560.293434 C943.504541,580.171113 939.641039,607.448112 915.70879,621.217599 L598.378374,803.794555 C569.657704,820.319074 528.958531,813.261854 507.469373,788.026113 L11.7484803,205.877455 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

NortonShadow.propTypes = {
  shadowColor: PropTypes.string
};

export default NortonShadow;
