import './Body.css';

function Body() {
  return (
    <div className="Body">

      <div class="container-fluid">
        <h1>Hello World!</h1>
        <p>Resize the browser window to see the effect.</p>
        <div class="row">
          <div className="col-sm-3" styleName="background-color:lavender;">.col-sm-3</div>
          <div className="col-sm-6" styleName="background-color:lavenderblush;">.col-sm-6</div>
          <div className="col-sm-3" styleName="background-color:lavender;">.col-sm-3</div>
        </div>
      </div>


    </div>
  );
}

export default Body;
