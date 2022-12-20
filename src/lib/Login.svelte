<script lang="ts">
  import {currentUser, pb} from './pocketbase'

  let username: string;
  let password: string;

  const login = async () => {
    console.log('Data: ' + username + ' ' + password)
    await pb.collection('users').authWithPassword(username, password)
  } 

  const signUp = async () => {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
        name: 'holiiii',
      }
      console.log('Data: ' + JSON.stringify(data))
      const createdUser = await pb.collection('users').create(data)
      await pb.collection('users').authWithPassword(username, password)
    } catch (error) {
      console.dir({'Error! - ': error})
    }
  }

  const signOut = () => {
    pb.authStore.clear()
  } 

</script>

{#if $currentUser}
  <p>
    Te loggeaste como {$currentUser.username} 
    <button on:click={signOut}>Salir!</button>
  </p>
{:else}
  <form on:submit|preventDefault >
    <div class="nes-field is-inline" style="background-color:#212529; padding: 1rem;">
      <label for="dark_field">Usuario:</label>
      <input id="dark_field" class="nes-input is-dark" placeholder="Username" type="text" bind:value={username}  autocomplete="username">
    </div>
    
    <div class="nes-field is-inline" style="background-color:#212529; padding: 1rem;">
      <label for="pass_field">Contraseña:</label>
      <input id="pass_field" class="nes-input is-dark" placeholder="password" type="password" bind:value={password} autocomplete="current-password">
    </div>
    <div class="nes-container with-title is-centered" style="background-color:#212529; padding: 1rem;">
      <button on:click={login} class="nes-btn is-primary">Entrá!</button>
      <br />
      <br />
      <button on:click={signUp} class="nes-btn">Haz tu usuario nuevo..</button>
    </div>
  </form>
{/if}