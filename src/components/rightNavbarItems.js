import React from 'react';

const RightNavbarItems = (props) => {
  const rightNav = props;
  const rightNavItems = rightNav.rightItems.map((item) => {
    return (
      <li key={item.sortOrder} className={item.className}><a href={item.href}>{item.label}</a></li>
    );
  });

  return (
    <ul className="rightNav">
      {rightNavItems}
    </ul>
  );
};

export default RightNavbarItems;
