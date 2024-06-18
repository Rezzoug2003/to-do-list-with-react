import { useState } from "react";

let array = [];

function App() {
  const [data, setdata] = useState([]);
  const [data1, setdata1] = useState("");

  const [apdate, setapdata] = useState(false);

  const change = (word) => {
    setdata1(word);
  };
  const click = () => {
    if (data1 !== '') {
      array.push({ value: data1, apd: false });

      setdata(array);

      // console.log(data);
      setdata1("");
    }
  };
  const delet = (item) => {
    array = array.filter((x) => x.value !== item.value)
    setdata(array)
}
  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          placeholder="....."
          onChange={(e) => {
            change(e.target.value);
          }}
          value={data1}
        />
       
        <button
          onClick={() => {
            click();
          }}
        >
          +
        </button>
        <div>{data.map((item) => {
          return (
            <>
           
              {
                item.apd ? (
                  <>
                    

                <div>
                  <input type="text" onChange={(e)=>{item.value=e.target.value}} placeholder={item.value} />
                  <button onClick={()=>{ item.apd = false;
                  setapdata(false);}} >save</button>
                </div></>
              ) : (
                <div className="">
                  {item.value}{" "}
                  <button
                    onClick={() => {
                      item.apd=true
                        setapdata(true);
                        
                       
                      
                    }}
                  >
                    apdate
                  </button>{" "}
                  <button
                    onClick={() => {
                      delet(item);
                    }}
                  >
                    delet
                  </button>{" "}
                </div>
              )}
            </>
          );
        })}</div>
      </div>
    </div>
  );
}

export default App;
