import React,{useState} from 'react'
import './switchTab.scss';
const SwitchTab = ({data, onTabChange}) => {
  const [selectedTab,setSelectedTab] = useState(0);
  const [left,setLeft] = useState(0);
  const activeTab = (tab,index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab,index);
  };
  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab,index) => {
          return (
            <span
             onClick={() => activeTab(tab,index)}
             key={index} 
             className={`tabItem ${selectedTab === index ? 'active' : ''}`}
             >
              {tab}
            </span>
        )
        })}
        <span className='movingBg' style={{left}} />
      </div>
    </div>
  )
}

export default SwitchTab
