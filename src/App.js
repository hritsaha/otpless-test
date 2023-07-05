import React,{useEffect} from 'react'

function App() {
        useEffect(() => {
                window.otpless = (otplessUser) => {
                 alert(JSON.stringify(otplessUser));
                };
               }, []);
  return (
    <div>
      <script type="text/javascript" src="https://otpless.com/auth.js" ></script>
    </div>
  )
}

export default App
