import React,{useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Candidate from "./Candidate";
import "../CSS/Voting.css"
import Navbar from "./Navbar";
import Proposal from "./Proposal";
import Web3 from 'web3';
import { useCookies } from 'react-cookie';

function Voting(){
    const [cookies] = useCookies(['EthSkillVerifyData']);
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [isExpert,setExpert] = useState(false)

    const candidates = [
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'},
        { name: 'John Doe', email: 'johndoe@gmail.com', productivity: '75%'}
    ];

    const [showPopup, setShowPopup] = useState(false);
    const toggleModal = () => {
        setShowPopup(!showPopup);
    };

    useEffect(() => {
        const userData = cookies.EthSkillVerifyData;
        if(userData.role === "expert"){
          setExpert(true)
        }
        if (window.ethereum) {
          setWeb3(new Web3(window.ethereum));
        } else {
          console.log('MetaMask is not installed');
        }
    }, [cookies.EthSkillVerifyData]);

    const connectWallet = async () => {
        if (web3) {
          try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
    
            window.ethereum.on('accountsChanged', (accounts) => {
              setAccount(accounts[0]);
            });
    
            window.ethereum.on('chainChanged', () => {
              window.location.reload();
            });
          } catch (error) {
            console.error('Error connecting to MetaMask', error);
          }
        }
      };

    return (
        <div>
            <Navbar/>
            <div className="vendor-list">
                {isExpert ? 
                    <div></div>
                     : 
                    <div>
                      {account ?
                          <div className="d-flex justify-content-end align-items-center m-3">
                              <button className="proposal p-2 rounded me-3" onClick={toggleModal}>Add Proposal</button>
                              <div className="box p-2 m-0 alert alert-primary" role="alert">
                                  <label className="fw-bold">Wallet Address:</label> {`${account.substring(0, 9)}...${account.substring(account.length - 4)}`}
                              </div>
                          </div>
                      : 
                          <button className="btn btn-secondary float-end m-3" onClick={connectWallet}>Connect wallet</button>
                      }
                    </div>
                }
                <table>
                    <thead>
                    <tr>
                        <th>Expert Name</th>
                        <th>Email</th>
                        <th>Productivity</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {candidates.map((candidate, index) => (
                        <Candidate key={index} candidate={candidate} />
                    ))}
                    </tbody>
                </table>
            </div>
            {showPopup && <Proposal onClose={toggleModal}/>}
        </div>
    )
}

export default Voting