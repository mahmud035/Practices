import { useLocation } from 'react-router-dom';

export default function Stepper() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return (
      'nav-link disabled ' + (path === location.pathname ? 'active' : undefined)
    );
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="navbar-collapse collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getLinkClass('/')}>Contact</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass('/education')}>Education</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass('/about')}>About</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass('/confirm')}>Confirm</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
