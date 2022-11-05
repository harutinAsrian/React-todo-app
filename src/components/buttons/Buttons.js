import { useState } from 'react';
import { Link } from 'react-router-dom';

function Buttons() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = ['all', 'active', 'done'];

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {tabs.map((tab, idx) => (
        <Link key={idx} to={`${tab === 'all' ? '/' : `/${tab}`}`}>
          <button
            onClick={() => setActiveTab(tab)}
            type="button"
            className={`btn btn-outline-info ${
              activeTab === tab ? 'active' : ''
            }`}
          >
            {tab}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Buttons;
