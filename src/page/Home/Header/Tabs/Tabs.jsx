

const Tabs = () => {

  const items = <>

    <li className="list-none ml-4 font-bold border-b-2 border-gray-700" style={{ background: 'none' }} > Study </li>
    <li className="list-none ml-4" style={{ background: 'none' }} >Quiz </li>
    <li className="list-none ml-4" style={{ background: 'none' }} > Test </li>
    <li className="list-none ml-4" style={{ background: 'none' }} > Game </li>
    <li className="list-none ml-4" style={{ background: 'none' }} > Others </li>


  </>

  return (
    <div className="navbar bg-base-100 mt-8">
      <div className="navbar-start">
      </div>
      <div className="navbar-center hidden lg:flex">
        {items}
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Tabs;