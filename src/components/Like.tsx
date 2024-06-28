import React, { useState } from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

interface Probs {
  onClick: () => void;
}

const Like = ({ onClick }: Probs) => {
  const [like, setLike] = useState(false);
  const toogle = () => {
    setLike(!like);
    onClick();
  };

  if (like) {
    return (
      <IoMdHeart
        size={30}
        color='#ff6b81'
        onClick={toogle}
      />
    );
  } else {
    return (
      <IoMdHeartEmpty
        size={30}
        color='#ff6b81'
        onClick={toogle}
      />
    );
  }
};

export default Like;
