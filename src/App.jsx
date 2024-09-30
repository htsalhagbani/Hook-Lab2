import { useState } from 'react';
import './App.css';
import img1 from './assets/img1.png';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.png';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [perfectWeight, setPerfectWeight] = useState(null);
  const [massStatus, setMassStatus] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const images = [img1, img2, img3];

  const Body = () => {
    const heightMeasure = height / 100;
    const bmi = weight / (heightMeasure * heightMeasure);

    console.log("weight"+weight+"height"+height+"bmi"+bmi);
    
    const weightMeasure = 22 * (heightMeasure * heightMeasure);
    setPerfectWeight(weightMeasure.toFixed(2));

    if (bmi < 18.5) {
      setMassStatus('Underweight');
      setImageSrc(images[0]);
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMassStatus('Ideal');
      setImageSrc(images[1]);
    } else  {
      setMassStatus('Overweight');
      setImageSrc(images[2]);
    }

    setWeight("");
    setHeight("");

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden w-11/12 md:w-[80vw] lg:w-[60vw]">
        <div className="flex-1 p-6 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-[#027e2a]">Body Calculation</h2>
          <div className="mb-6">
            <label className="block mb-1 text-xl font-bold">Weight</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-xl font-bold">Height</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full bg-white text-black"
            />
          </div>
          <button
            className="bg-[#027e2a] text-white py-2 rounded-lg w-full hover:bg-gray-600 transition duration-300"
            onClick={Body}
          >
            Calculate
          </button>

          {perfectWeight && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Ideal Weight: {perfectWeight} kg</h3>
              <h3 className={`text-lg font-semibold ${massStatus === 'Underweight' ? 'text-red-500' : massStatus === 'Ideal' ? 'text-green-500' : 'text-orange-500'}`}>Mass Status: {massStatus}</h3>
            </div>
          )}
        </div>

       
        {imageSrc && (
          <div className="flex items-center justify-center bg-gray-200 p-4 md:w-1/2">
            <img src={imageSrc} alt="" className="w-full h-auto max-w-xs rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
