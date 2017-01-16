<template>
  <div class="m-detail">
    <header>
      <ul>
        <li class="yo-ico">
          <router-link :to="'/'">
            &#xe63b;
          </router-link>
        </li>
        <li>{{$route.params.title}}</li>
        <li></li>
      </ul>
    </header>
  </div>
</template>
