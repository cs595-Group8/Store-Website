<template>
  <b-card bg-variant="light">
    <b-card-body>
      <b-img
        src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
        width="200px"
        center="true"
      >
      </b-img>
      <b-link href="/">
        <b-card-title><slot name="name"> Unknown </slot></b-card-title>
      </b-link>
      <div class="card-general">
        <p>
          <strong>Price:</strong>
          <slot name="price"> $--.--</slot>
        </p>
        <p>
          <strong>Vendor:</strong>
          <slot name="Supplier"> Unknown </slot>
        </p>
      </div>

      <p>
        <strong>Status:</strong>
        <slot name="status"> Unknown </slot>
      </p>

      <div>
        <fa icon="fa-solid fa-star" />
        <fa icon="fa-solid fa-star" />
        <fa icon="fa-solid fa-star" />
        <fa icon="fa-solid fa-star" />
        <fa icon="fa-regular fa-star" />
      </div>
    </b-card-body>
  </b-card>
</template>

<script></script>

<style>
.card-general {
  display: flex;
  justify-content: space-between;
}
</style>
