import { useState } from "react";

const Parent = () => {
     const [value, setValue] = useState("");
     const [radio, setRadio] = useState(0);
     const [sport, setSport] = useState({
         football: "",
         volleyball: "",
         option: ""
     });
     // validate all
    // input name -> lastName vs firstName
    // input password
    // input gentle, male
    // input favorite ( soccer, swimming, run, basketball)
    // option -> ( you are enough 18 years old / are you man / are you women)
    // textarea -> ( =< 100 characters )
    const handleSubmit = (e) => {
        e.preventDefault();
        if(sport.option.trim() === "" || value.trim().length < 100) {
            alert("Please enter");
        }else {
          console.log(sport);
          console.log(value);
        }

    }

     return (
          <section>
              <form>
                  {/*<input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>*/}
                  {/*<label>Nam</label>*/}
                  {/*<input type="radio" checked={!radio} name="gender" value={radio} onChange={() => setRadio(0)}/>*/}
                  {/*<label>Nu</label>*/}
                  {/*<input type="radio" checked={radio} name="gender" value={radio} onChange={() => setRadio(1)}/>*/}
                  {/*<br/>*/}
                  {/*<input*/}
                  {/*    type="checkbox"*/}
                  {/*    // checked="football"*/}
                  {/*    value="football"*/}
                  {/*    onChange={(e) => setSport((prevSport) => ({...prevSport, football: e.target.value}))}*/}
                  {/*/>*/}
                  {/*<label>Football</label> <br/>*/}
                  {/*<input type="checkbox" value="volleyball" onChange={(e) => setSport((a) => ({...a, volleyball: e.target.value}))}/><label>Volleyball</label> <br/>*/}
                  <select defaultValue={sport.option} onChange={e => setSport(prev => ({ ...prev, option: e.target.value }))}>
                      <option value=''>Choose Option</option>
                      <option value="Da bong">Da bong</option>
                      <option value="Bong ban">Bong ban</option>
                  </select>
                  <textarea value={value} onChange={e => setValue(e.target.value)} rows={20} cols={30}></textarea>
                  <button onClick={e => handleSubmit(e)}>Submit</button>
              </form>
          </section>
     );
};

export default Parent;
