<!-- Modal.svelte -->
<script>
    export let visible = false;
    export let onClose = () => {};
  </script>
  
  <style>
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 200vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }
    .modal-content {
      background-color: white;
      margin: 10% auto;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      width: 80%;
      max-width: 600px;
    }
    .close {
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }
    .visible {
      display: block;
      position: absolute;
    }
  </style>
  
     <!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal {visible ? 'visible' : ''}" on:click={onClose}>
    <div class="modal-content" on:click|stopPropagation>
      <span class="close" on:click={onClose}>&times;</span>
      <slot></slot>
    </div>
  </div>
  