// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button type="button" onClick={onClickTab} className={tabBtnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
