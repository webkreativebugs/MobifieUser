import React from "react";

interface ShimmerTilesProps {
  count?: number; // number of tiles
  width?: number; // width of each tile
  height?: number; // height of each tile
}

const ShimmerTiles: React.FC<ShimmerTilesProps> = ({
}) => {
  return (
    <div className=" gap-4 overflow-x-auto p-4">
      <div className="shimmer-row">
  <div className="shimmer-tile"></div>
  <div className="shimmer-tile"></div>
  <div className="shimmer-tile"></div>
  <div className="shimmer-tile"></div>
  <div className="shimmer-tile"></div>

</div>

    </div>
  );
};

export default ShimmerTiles;
