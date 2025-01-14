// 1. Внешние зависимости.
// 2. Компоненты вашего проекта.
import Constructor from './Constructor';

// 3. Утилиты и бизнес-логика.
// 4. Стили и ассеты.
import './activity.scss';

const Activity = () => <div className="Activity innerContainer">
    
    {/* <div className="layout has-sidebar fixed-sidebar fixed-header">
      <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
        <div className="sidebar-layout">
          <div className="sidebar-content">
            <nav className="menu open-current-submenu">
              <ul>
                <li className="Menu__item">
                  <div className="Menu__tile img-abilities">
                    <span>ABILITIES</span>
                  </div>
                </li>
                <li className="Menu__item">
                  <div className="Menu__tile img-items">
                    <span>ITEMS</span>
                  </div>
                </li>
                <li className="Menu__item">
                  <div className="Menu__tile img-other">
                    <span>OTHER</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div> */}

    <Constructor />

    <div className="Activity__container">
      <div className="Activity__time">
        00:00
      </div>
      <div className="Activity__grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
</div>

export default Activity;