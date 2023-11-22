import { TvForm } from './components/TvForm/index';
const data = require("./FormInputsData.json")

function App() {
  
  const handleSubmit = (data) => {

  };

  return (
    <div>
    <TvForm
        // title="Daynamic FormInput"
        // fromaData={data}
        // handleTvSubmit={handleSubmit}
        // submitButtonName="submit Form"
      />
    </div>
  );
}

export default App;
