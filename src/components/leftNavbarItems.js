import React from 'react';

const LeftNavbarItems = (props) => {
  const leftNav = props;
  const leftItems = leftNav.leftItems.map((item) => {
    return (
      <li key={item.sortOrder} className={item.className}><a href={item.href}>{item.label}</a></li>
    );
  });

  return (
    <ul className="leftNav">
      {leftItems}
    </ul>
  );
};

export default LeftNavbarItems;
