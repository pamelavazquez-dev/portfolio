import React, { useEffect, useState } from 'react';

function DelayedSuspenseFallback({ children, delay = 450 }) {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setShouldShow(true);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [delay]);

  return shouldShow ? children : null;
}

export default DelayedSuspenseFallback;
