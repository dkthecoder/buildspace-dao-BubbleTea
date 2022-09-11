import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  //third web hooks
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  //no wallet connected case
  //calls connectWallet method
  if(!address){
    return (
      <div className="landing">
        <h1>Welcome to BubbleTeaDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }

  //connected wallet
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;
