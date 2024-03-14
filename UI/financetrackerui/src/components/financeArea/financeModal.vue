<script setup>
import {computed, ref} from 'vue';
import { visibility } from '@/main';
import axios from 'axios';


//variables
const inputNumber = ref(0);
let textColor = ref('');
let information = ref('');


    //function to check the input value
    function checkInputValue() {
        console.log("check");
        if(inputNumber.value === ''){
            inputNumber.value = 0;
        }else if(inputNumber.value !== '' && inputNumber.value > 0){
            inputNumber.value = (inputNumber.value)*-1;
        }
    }
    //change color of value, if below 0 
    let minusColor = computed(() => {
        return inputNumber.value < 0 ? textColor = 'red' : textColor = 'black';
    })

    //function to send form data to API
    let descriptionText = ref('');

    function sendData(){
        //use axios to send form data to API
        axios.post('http://localhost:3000/', {
            description: descriptionText,
            inputNumber: inputNumber
        })
        .then(response => {
        // Handle response if needed
        console.log("Data sent successfully:", response.data);
        })
        .catch(error => {
        // Handle error if needed
        console.error("Error sending data:", error);
        });
        console.log("Function invoked");
    }


</script>


<template>
<!-- finanacne modal -->
<div class="financeModal">
    <div class="financeModalContent">
        <form class="addFinancesForm" action="">
            <h4>Add new costs:</h4>
            <h5>{{ information }}</h5>
            <label for=""></label>
            <input class="financeDescription" type="text" placeholder="description..." v-model="descriptionText">
            <input class="financeDescription" type="number" v-model="inputNumber" @input="checkInputValue" :style="{color: minusColor}"> 
            <input class="addFinanceBtn" type="button" value="+" @click="sendData();information= 'data sent successfully!';">
            <input class="closeModal" type="button" value="close" @click="visibility.isVisible = !visibility.isVisible">
        </form>
    </div>
</div>
</template>


<style>
h5{
    color:green;
}
.financeModal{
    position: absolute;
    margin-left: 20vw;
    display:flex;
    justify-content: center;
    border: 2px solid black;
}

.financeModalContent{
    height: 30vh;
    width:22vw;

}

.financeDescription{
    border: 1px solid gray;
    height:4vh;
    width:15vw;
    margin:5px;
}

.addFinanceBtn{
    width:30px;
    height:25px;
    border-radius: 15%;
    border-color:darkgray;
    font-size: larger;
    background-color: aliceblue;
    cursor:pointer;
}
.closeModal{
    width:70px;
    height:25px;
    border-radius: 10%;
    border-color:darkgray;
    font-size: small;
    background-color: aliceblue;
    cursor:pointer;
}

.addFinancesForm{
    height:100%;
    background-color: lightgray;
    display:flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

}
.addFinancesForm h4{
    font-weight: 500;
}
</style>