<script setup>
import {ref} from 'vue';
import { visibility } from '@/main';
import financeModal from './financeModal.vue';


//variables
let defaultCostsText = ref('No Costs here...');
let defaultPaymentsText = ref('No Payments here...');


</script>


<template>
    
<div class="finance">
    <div class="financeArea">
        
        <div class="openFinances">
            <!-- here will be the part of where the user can add new finances -->
            <span> {{ defaultCostsText }} </span>
        </div>

        <div class="doneFinances">
            <!-- here will be the part where the user can add payed finances -->
            <span> {{ defaultPaymentsText }} </span>
        </div>
        <!-- display modal onclick -->
        <financeModal v-if="visibility.isVisible"/>
    </div>
    <!-- costs button -->
    <div class="costs">
        <div class="addCostsBtn">
            <button class="addCosts" @click="visibility.isVisible = !visibility.isVisible">Add</button>
        </div>
        <!-- payments button -->
        <div class="payments">
            <div class="addPaymentsBtn">
                <button class="addPayments">Add</button>
            </div>
        </div>
    </div>
</div>
</template>


<style>

.costs{
    margin-top: 25px;
    margin-left: 10%;
    width:50vw;
    display:flex;
    justify-content: space-between;
}
.addCosts{
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    cursor:pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.payments{
    width:45%;
    display:flex;
    justify-content: center;
}
.addPayments{
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    cursor:pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.finance{
    margin-top: 8%;
    width:60vw;
    height: 60vh;
}

.financeArea{
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-between;
}

.openFinances{
    border:1px solid black;
    width:45%;
    height:100%;
    justify-content: center;
    display:flex;
}
.openFinances span{
    color: gray;
}
.doneFinances{
    border:1px solid black;
    width:45%;
    height:100%;
    justify-content: center;
    display:flex;
}

.doneFinances span{
    color: gray;
}


</style>