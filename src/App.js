import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { useEffect } from 'react';

function App() {
  const a = () => {
    setTimeout(() => {
      console.log('A');
    }, 0);
    var obj = {
      func: function () {
        setTimeout(function () {
          console.log('B');
        }, 0);
        return new Promise(function (resolve) {
          console.log('C');
          resolve();
        });
      }
    };
    obj.func().then(function () {
      console.log('D');
    });
    console.log('E');
  };

  useEffect(() => {
    a();
  }, []);

  return <div className='App'></div>;
}

export default App;
