import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collections = useSelector((state) => state.shop.collections);
  return (
    <div className='collections-overview'>
      <h1>CollectionsOverview</h1>
      {Object.values(collections).map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
