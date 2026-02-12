import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

type Metric = Parameters<Parameters<typeof onCLS>[0]>[0];

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
