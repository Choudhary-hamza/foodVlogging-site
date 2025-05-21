import styling from './homeStyle.module.css';
export default function loading(){
    return (
        <div className={styling.loading}>
            <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div><div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div><div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div><div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
      </div>
    )
}