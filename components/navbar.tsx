import navList from '../variables/navList.js';


export default function Navbar() {
  return (
    <nav className='flex flex-row justify-between content-center items-center bg-black/30 backdrop-blur-md border border-white/10  h-16'>

      <span className='flex flex-row justify-between content-center '>
        <img className='pl-20' src={'logo.png'}></img>
        <h1 className='pl-2 text-white font-[Betania_Patmos] text-3xl font-black'>Clasendra</h1>
      </span>

      <ul className='flex text-white '>
        {navList.map(i=>(
          <li key={navList.indexOf(i)} className='pr-20 font-medium'><a href={`#${i.link}`} className=''>{i.title}</a></li>
        ))}
      </ul>
      
    </nav>
  );
}