import React,{useEffect} from 'react'

function App() {
        useEffect(() => {
                window.otpless = (otplessUser) => {
                 alert(JSON.stringify(otplessUser));
                 console.log(JSON.stringify(otplessUser));
                };
               }, []);
  return (
    <div class="bb">
      <script type="text/javascript" src="https://otpless.com/auth.js" ></script>
      <p id="pp">This is a test for OTP-LESS</p>
    </div>
  )
}

export default App
