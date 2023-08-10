window.addEventListener('load', ()=>{
     let long;
     let lat;
     const tem = document.querySelector('.temp h1')
     const Hu1 = document.querySelector('.sr i')
         
      if(navigator.geolocation = true){
          navigator.geolocation.getCurrentPosition((position) =>{

               long = position.coords.longitude;   
               lat = position.coords.latitude;

               console.log(`lat: ${lat} long: ${long}`);
               
               let location_api = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=VxnHySehKUpB3Ej1CIpTBWul0lLOrvPP&q=${lat},${long}&language=en-us&details=true&toplevel=true`
               fetch(location_api)
                   .then(response => {
                      return response.json()
                   })

                   .then(data =>{
                      let key = data.Key;
                      console.log(key)
                      let forecast_api = `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=VxnHySehKUpB3Ej1CIpTBWul0lLOrvPP&language=en-us&details=true`
                      
                      fetch(forecast_api)
                         .then(response_f =>{
                            return response_f.json()
                      })

                       .then(data_f =>{
                          console.log(data_f)
                          //tem.innerHTML = data_f.DailyForecasts[0].Temperature.Maximum.Value +"<sup>°c</sup>";
                          //Hu1.innerHTML = data_f.DailyForecasts[0].Temperature.Maximum.Value +"<sup>°c</sup>";
                       })

                   })         
                         
          });
         
         }
         else{
            navigator.geolocation.getCurrentPosition();
      }
      //setInterval(navigator.geolocation, 1000)
});
