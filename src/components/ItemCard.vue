<template>
    <b-card img-src="https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg" img-alt="Product Image" img-top>
        <b-card-body> 
            <b-link href="/">
                <b-card-title><slot name="name"> Unknown </slot></b-card-title>
            </b-link>
                <div style="display: flex; justify-content: space-between; ">
                    <p class="card-text">
                        <strong>Price:</strong> 
                        <slot name="price"> $--.--</slot>
                    </p>
                    <p class="card-text">
                        <strong>Vendor:</strong> 
                        <slot name="Supplier"> Unknown </slot>
                    </p>
                </div>
                    
                    <p class="card-text">
                        <strong>Status:</strong> 
                        <slot name="status"> Unknown </slot>
                    </p>

                    <div>
                        <fa icon="fa-solid fa-star"/>
                        <fa icon="fa-solid fa-star"/>
                        <fa icon="fa-solid fa-star"/>
                        <fa icon="fa-solid fa-star"/>
                        <fa icon="fa-regular fa-star" />
                    </div>
                    
                    
                    
        </b-card-body>
    </b-card>
</template>

<script>

</script>