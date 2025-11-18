<template>
	<div>
		<h1>Insert</h1>
		<form class="form" v-on:submit.prevent="insertCompra()">
			<select class="form-control" v-model="idCubo">
				<option>--Elija cubo--</option>
				<option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">
					{{ cubo.nombre }}
				</option>
			</select>
			<button class="btn btn-success">Comprar</button>
		</form>
	</div>
</template>

<script>
	import Global from "@/Global";
	import ServiceCubos from "@/services/ServiceCubos";
	let service = new ServiceCubos();

	export default {
		name: "InsertCompraComponent",
		data() {
			return {
				cubos: null,
				idCubo: 0,
			};
		},
		mounted() {
			if (Global.token === "") {
				this.$router.push("/login");
			} else {
				this.getCubos();
			}
		},
		methods: {
			insertCompra() {
				service.insertCompra(this.idCubo).then((response) => {
					console.log(response);
					this.$router.push("/compras");
				});
			},
			getCubos() {
				service.getCubos().then((response) => {
					this.cubos = response;
				});
			},
		},
	};
</script>

<style></style>
