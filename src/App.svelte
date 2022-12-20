<script lang="ts">
  import "nes.css/css/nes.min.css"
  import Login from "./lib/Login.svelte";
  // import Messages from "./lib/Messages.svelte";
  import { currentUser } from "./lib/pocketbase";
</script>
<div class="nes-container is-dark">
  <h1>Ciclos - Dashboard</h1>

  
  <Login />
  
  {#if $currentUser}
  <div>Algo!</div>
  <!-- <Messages /> -->
  
  {/if}
</div>