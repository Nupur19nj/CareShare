import React from 'react'
import data from "./data.json";
import kid from "../assets/kids.jpg";
import footer from '../components/Footer'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Ngo = () => {
  // const history = useHistory(); // Initialize useHistory

  // // Define handlehome function to redirect to "/"
  // const handlehome = () => {
  //   history.push("/");
  // };
  return (
<>
<div className='h-screen'>
  
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} className=' bg-green-100'>
      <Link to="/" className="ml-2 text-left text-black">
      <h1 className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 inline-block">
  Back to homepage
</h1>

      </Link>
  <div style={{ flex: '2' }}className='text-center' >
             <h1 className='text-center text-4xl text-bold p-3'>First NGO</h1>
             <p>Address: main road near abc </p>
           <h1 className='text-center text-2xl text-bold mt-6'>About us</h1>
           <p className='text-center p-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid omnis et nihil eaque, corporis neque suscipit, dolores minus quo recusandae eos ducimus facilis. Natus in maiores odio id deserunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid omnis et nihil eaque, corporis neque suscipit, dolores minus quo recusandae eos ducimus facilis. Natus in maiores odio id deserunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid omnis et nihil eaque, corporis neque suscipit, dolores minus quo recusandae eos ducimus facilis. Natus in maiores odio id deserunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid omnis et nihil eaque, corporis neque suscipit, dolores minus quo recusandae eos ducimus facilis. Natus in maiores odio id deserunt!
           </p>
           <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }} >
                <div style={{ flex: '2'}}>
                  <p className='text-center text-4xl text-bold text-green-700'>20+</p>
                <h1 className='text-center'>Helpers</h1></div>
                <div style={{ flex: '2' }}>
                  <p className='text-center text-4xl text-bold text-green-700'>20+</p>
                <h1 className='text-center'>Receivers</h1></div>
           </div>
    </div> 
    <div style={{ flex: '4', backgroundImage: `url(${kid})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> </div>
  
</div>
    </div>
    <div className=' bg-green-100 text-center'>
      <h1 className='text-3xl text-bold p-5'>See the happiness of our receivers</h1>
    </div>
    <Footer/>
</>
  )
}

export default Ngo