import { useState } from 'react';

import chevronDown from '../../res/chevronDown.svg';
import chevronUp from '../../res/chevronUp.svg';

export default function Panel({ title, bannerContent, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className='col border-bottom-medium-gray fit-height'>
      <div
        className='row gap-xs padding-xs bg-medium-gray height-1_5 border-bottom-dark-medium-gray'
        style={{ alignItems: 'center' }}
      >
        <button
          className='btn-icon'
          onClick={() => setIsCollapsed((ic) => !ic)}
        >
          {isCollapsed ? (
            <img src={chevronUp} className='icon-s icon-in-btn' />
          ) : (
            <img src={chevronDown} className='icon-s icon-in-btn' />
          )}
        </button>
        <div
          className='row justify-between fill-width color-white'
          style={{ alignItems: 'center' }}
        >
          <h4>{title}</h4>
          <div>{bannerContent}</div>
        </div>
      </div>
      {isCollapsed ? null : <div>{children}</div>}
    </div>
  );
}
