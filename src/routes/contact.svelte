<script>
	// import { fadeIn, fadeOut } from "../animate";
</script>

<style>
.container {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
  }
  
  .contact-box {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    width: 70vw;
    height: 70vh;
    border-radius: 16px;
    /* box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
    ; */
  }

  .contact-info {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin: 0;
    padding: 2rem;
    width: 100%;
    height: 80%;
    align-self: center;
    background: hsla(215, 64%, 30%, 1);
    color: white;
    border-radius: 16px 0 0 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-items: center;
    background-color: hsla(215, 64%, 25%, 1);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    background-color: #004490;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.18' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
    ;
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.056),
      0 6.7px 5.3px rgba(0, 0, 0, 0.081),
      0 12.5px 10px rgba(0, 0, 0, 0.1),
      0 22.3px 17.9px rgba(0, 0, 0, 0.119),
      0 41.8px 33.4px rgba(0, 0, 0, 0.144),
      0 100px 80px rgba(0, 0, 0, 0.2)
    ;
    z-index: 1;
  }

  .contact-form {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin: 0;
    padding: 2rem;
    width: 100%;
    height: 100%;
    border-radius: 0 16px 16px 0;
    border-radius: 16px;
    background: var(--background-2);
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto;
    /* grid-row-gap: 0.5rem; */
    /* grid-column-gap: 0.5rem; */
    gap: 0.5rem;
    /* align-items: center; */
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028),
      0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042),
      0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07)
    ;
    z-index: 2;
  }

  @media(orientation: landscape) {
    form {
      margin-top: 0;
      width: 40vw;
      width: clamp(90vw, 40vw);
    }
  }

  label {
    display: block;
    font-family: 'Oswald';
    font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));
    margin: 1rem 0;
    margin: 0;
    padding: 0;
    opacity: 0.75;
  }

  input {
    margin: 0;
    padding: 0 1rem;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    background: hsla(210, 38%, 94%, 1);
    align-self: stretch;
    display: block;
    border: none;
    box-shadow:
      inset 6px 6px 5px #dfe8ed, 
      inset -6px -6px 5px #fafafa
    ;
    height: 2.5rem;
    width: 100%;
  }
  
  /* @media (orientation: landscape) {
    font-size: 18px;
    margin: 0;
    height: 24px;
    padding: 1.25rem;
    grid-column: 1 / 5;
  } */

  input:focus {
    box-shadow: 0px 0px 12px rgba(81,167,190,0.5);
    color: white;
  }

  textarea {
    margin: 0;
    padding: 0 1rem;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    background: hsla(210, 38%, 94%, 1);
    align-self: stretch;
    display: block;
    border: none;
    box-shadow:
      inset 6px 6px 5px #dfe8ed, 
      inset -6px -6px 5px #fafafa
    ;
    height: 6rem;
    width: 100%;
  }

  textarea:focus {
    box-shadow: 0px 0px 12px rgba(81,167,190,0.5);
    color: white;
    margin: 0;
  }

  button {
    margin: 0;
    padding: 0;
    height: 3rem
  }
</style>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class='container'>
  <div class='contact-box'>
    <div class='contact-info'>
      <h1>Contact Info</h1>
      <p>Address</p>
      <p>Phone Number</p>
      <p>Email Address</p>
    </div>
    <form class='contact-form'
      name='contact'
      method='post'
      action='/success'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
    >
      <input type='hidden' name='bot-field' />
      <input type='hidden' name='form-name' value='contact'/>
      <h1>Send us a message :-)</h1>
      <label for="name">Your Name</label>
      <input name="name" type="text" required/>
      <label for="phone">Your Number</label>
      <input name="phone" type="tel" required/>
      <label for="email">Your Email</label>
      <input name="email" type="email" required/>
      <label for="message">Message</label>
      <textarea name="message" type="text" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</div>

