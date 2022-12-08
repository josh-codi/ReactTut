import './App.css';
import {utils, writeFile} from 'xlsx'

function App() {

  // Sample data in JSON formate
  const sheetData =[
    {id: 1, name: 'Josh', price: 2353, color: 'red'},
    {id: 2, name: 'James', price: 745, color: 'black'},
    {id: 3, name: 'Jude', price: 934, color: 'pink'},
    {id: 4, name: 'John', price: 124, color: 'blue'},
    {id: 5, name: 'Jacob', price: 198, color: 'yellow'},
  ]

  const exportt = () => {
    var wb = utils.book_new(),
    ws = utils.json_to_sheet(sheetData);

    utils.book_append_sheet(wb,ws, 'MySheet1');

    writeFile(wb, 'MyExcel.xlsx')
  }
  return (
    <div className="App">
      <h1>Good Excel</h1>
      <hr></hr>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <br/>
      <button onClick={()=>exportt()}>Export</button>
    </div>
  );
}

export default App;
