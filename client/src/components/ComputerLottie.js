import React from 'react';
import Lottie from 'lottie-react';
import computerLottie from '../assets/computerlottie.json';

const ComputerLottie = () => (
  <Lottie
    animationData={computerLottie}
    loop={true}
    autoplay={true}
    style={{ width: 260, maxWidth: '100%', height: 'auto', cursor: 'pointer', filter: 'drop-shadow(0 8px 32px rgba(108,63,197,0.18))' }}
    title="Interactive Computer Animation"
  />
);

export default ComputerLottie; 