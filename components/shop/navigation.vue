<script setup>
import axios from 'axios';

const state = reactive({
  cart: []
});

function createCheckoutSession() {
  axios.post('http://localhost:8000/create-checkout-session', {
    items: [ // items to purchase
      { id: 2, quantity: 3 }, // 3 hats
      { id: 4, quantity: 1 }, // 1 pair of shoes
    ]
  }).then((res) => {
    console.log('response from the server: ', res.data);
    // route to returned url
  }).catch((err) => {
    console.log('error from the server: ', err);
  });
}

function getSubtotal() {
  return axios.post('http://localhost:8000/get-subtotal', {
    items: [ // items to purchase
      { id: 2, quantity: 3 }, // 3 hats
      { id: 4, quantity: 1 }, // 1 pair of shoes
    ]
  })
  .then((res) => res.data)
  .catch((err) => console.log('error from the server: ', err));
}
</script>

<template>
    <div class="navbar bg-base-100 rounded-full">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl rounded-full">🛍 Capitalism</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="font-bold text-lg">8 Items</span>
              <span class="text-info">Subtotal: <span>{{  }}</span></span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>