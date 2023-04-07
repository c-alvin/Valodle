import React from 'react';
import HelloWorld from '../components/hello-world';

export default function Home(props) {

  // const [valodleType, setValodleType] = useState('Characters');

  return (
    <div className="container">
      <img className="valodle-logo" src="./images/valodle.jpg" alt="valodle logo" />
      <HelloWorld />
    </div>
  );
}
