import {ethers} from 'ethers';
import { ADDR } from './constants';
import EVotingABI from './files/EVoting.abi';


class Contract {

    constructor() {
        this.contract = null;
        this.isInitialized = false;
    }

    async init() {
        // get access to wallet (metamask here)
        let ethereum = window.ethereum;
        if(ethereum) {
            console.log('metamask found')
            // now initialize network provider using ethers
            const provider = new ethers.BrowserProvider(ethereum);
            
            const signer = await provider.getSigner();
            
            console.log('signer:', signer);
            
            this.contract = new ethers.Contract(ADDR.EVOTING_CONTRACT, EVotingABI, signer);
    
            this.isInitialized = true;
        } else {
            console.log('you need to install metamask')
        }
    }

    async castVote(memAddr) {
        if(this.isInitialized) {
            await this.contract.castVoteForMember(memAddr)
        } else {
            console.log('contract not initialized');
        }
    }
    
    async regMem(memAddr) {
        if(this.isInitialized) {
            await this.contract.register(memAddr)
        } else {
            console.log('contract not initialized');
        }
    }

    async deRegMem(memAddr) {
        if(this.isInitialized) {
            await this.contract.deRegister(memAddr)
        } else {
            console.log('contract not initialized');
        }
    }

    async updateVotingStatus(status) {
        if(this.isInitialized) {
            await this.contract.setVotingTo(status)
        } else {
            console.log('contract not initialized');
        }
    }

    async whoWon() {
        if(this.isInitialized) {
            return await this.contract.Winner()
        } else {
            console.log('contract not initialized');
        }
        return '0x' + '0'.repeat(40)
    }

    async getRegList() {
        if(this.isInitialized) {
            console.log('ljflkjlskfdjsdf', this.contract)
            const list = await this.contract.getRegistrationList();
            return list.toArray();
        } else {
            console.log('contract not initialized');
        }
        return [];
    }

    async

}

export default Contract;