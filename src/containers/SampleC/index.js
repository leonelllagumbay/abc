import React from 'react';
import {
  useParams
} from "react-router-dom";

const SampleC = () => {
  let { sampleId } = useParams();
  return <h3>Sample C Requested sample ID: {sampleId}</h3>;
}

export default SampleC;
